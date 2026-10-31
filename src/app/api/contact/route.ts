import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { sendLeadNotification } from "@/lib/emailNotification";

// ─── Rate Limiter ──────────────────────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; startTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

// ─── Validators ────────────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-\+\(\)]+$/;

// ─── Lead Logger (local JSON file backup) ──────────────────────────────────────
function saveLead(data: Record<string, unknown>) {
  try {
    const logDir = path.join(process.cwd(), "leads");
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
    const logFile = path.join(logDir, "leads.json");
    const existing: unknown[] = fs.existsSync(logFile)
      ? JSON.parse(fs.readFileSync(logFile, "utf-8"))
      : [];
    existing.push({ ...data, submittedAt: new Date().toISOString() });
    fs.writeFileSync(logFile, JSON.stringify(existing, null, 2));
  } catch (e) {
    console.error("Failed to save lead locally:", e);
  }
}

// ─── Cloudinary Raw Upload Helper ─────────────────────────────────────────────
async function uploadToCloudinary(base64Data: string, originalName: string): Promise<string | null> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) return null;

  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const crypto = await import("crypto");
    const ext = originalName.split(".").pop() || "csv";
    const baseClean = originalName.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 30);
    const publicId = `manifests/${Date.now()}_${baseClean}.${ext}`;

    const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
    const signature = crypto.createHash("sha1").update(stringToSign).digest("hex");

    const formData = new FormData();
    formData.append("file", base64Data);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp.toString());
    formData.append("public_id", publicId);
    formData.append("signature", signature);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`, {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      return data.secure_url || null;
    } else {
      console.warn("Cloudinary upload responded with status:", res.status);
      return null;
    }
  } catch (err) {
    console.warn("Cloudinary upload failed (storing in MongoDB):", err);
    return null;
  }
}

// ─── POST Handler ──────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    // 1. Rate Limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const now = Date.now();
    const limitData = rateLimitMap.get(ip);

    if (limitData) {
      if (now - limitData.startTime < RATE_LIMIT_WINDOW) {
        if (limitData.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { success: false, error: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
        limitData.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, startTime: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, startTime: now });
    }

    // 2. Parse & Validate
    const body = await req.json();
    const { name, company, email, phone, city, requirementType, message, timeline, file } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2)
      return NextResponse.json({ success: false, error: "Please enter a valid name." }, { status: 400 });
    if (!email || !EMAIL_REGEX.test(email))
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    if (!phone || !PHONE_REGEX.test(phone) || phone.replace(/\D/g, "").length < 7)
      return NextResponse.json({ success: false, error: "Please enter a valid phone number." }, { status: 400 });
    if (!city || typeof city !== "string" || city.trim().length < 2)
      return NextResponse.json({ success: false, error: "Please enter a valid city." }, { status: 400 });

    interface LeadPayload {
      name: string;
      company?: string;
      email: string;
      phone: string;
      city: string;
      requirementType?: string;
      timeline?: string;
      message?: string;
      fileName?: string;
      fileSize?: string;
      fileType?: string;
      fileData?: string;
      fileUrl?: string;
    }

    const leadData: LeadPayload = { 
      name, 
      company, 
      email, 
      phone, 
      city, 
      requirementType, 
      timeline, 
      message 
    };

    if (file && typeof file === "object" && file.name) {
      // Always save file metadata if the file object was received
      leadData.fileName = file.name || "inventory_manifest.csv";
      leadData.fileSize = file.size || "";
      leadData.fileType = file.type || "CSV";

      if (file.data) {
        // Save the actual file bytes as base64
        leadData.fileData = file.data;

        // Try uploading to Cloudinary if credentials are configured
        const uploadedUrl = await uploadToCloudinary(file.data, leadData.fileName || "manifest.csv");
        if (uploadedUrl) {
          leadData.fileUrl = uploadedUrl;
        }
      } else {
        console.warn("[Contact API] file object received but file.data is missing/empty. fileName:", file.name);
      }
    }

    // 3. Save lead locally (never lose a lead even if email fails)
    const localBackup: Record<string, unknown> = { ...leadData };
    if (localBackup.fileData) {
      localBackup.fileData = "[Base64 Data Stored]";
    }
    saveLead(localBackup);

    // 3.5 Save to MongoDB
    try {
      if (process.env.MONGODB_URI) {
        await dbConnect();
        const newLead = new Lead(leadData);
        await newLead.save();
      }
    } catch (dbError) {
      console.error("MongoDB save error:", dbError);
    }

    // 4. Send Email Notification via Brevo SMTP (or Resend fallback)
    try {
      await sendLeadNotification(leadData);
    } catch (emailErr) {
      console.error("[Contact API] email notification error:", emailErr);
    }

    return NextResponse.json({ success: true, message: "Enquiry received! We'll be in touch shortly." });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

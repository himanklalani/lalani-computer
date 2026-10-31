import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import fs from "fs";
import path from "path";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";

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

// ─── HTML Email Template ───────────────────────────────────────────────────────
function buildEmailHTML(data: {
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
  fileUrl?: string;
}) {
  const secret = process.env.ADMIN_SECRET_KEY || "my_secret_key_123";
  const dashboardUrl = `https://www.lalanicomputers.com/admin/leads/${secret}`;
  const phoneClean = data.phone.replace(/\D/g, "");
  const whatsAppUrl = `https://wa.me/${phoneClean.startsWith("91") ? phoneClean : `91${phoneClean}`}`;

  const field = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;font-weight:600;color:#1925AA;width:160px;vertical-align:top;font-family:sans-serif;font-size:14px;border-bottom:1px solid #f0f0f5;">${label}</td>
          <td style="padding:10px 16px;color:#1a1a2e;font-family:sans-serif;font-size:14px;border-bottom:1px solid #f0f0f5;">${value}</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f4f4f8;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f8;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 6px 30px rgba(0,0,0,0.08);max-width:600px;width:100%;">
        
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg, #1925AA 0%, #0d1566 100%);padding:28px 36px;color:#ffffff;">
            <p style="margin:0;font-family:sans-serif;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#ffd700;">⚡ NEW WEBSITE LEAD ALERT</p>
            <h1 style="margin:6px 0 0;font-family:sans-serif;font-size:24px;font-weight:800;color:#ffffff;">
              ${data.name}
            </h1>
            <p style="margin:4px 0 0;font-family:sans-serif;font-size:13px;color:rgba(255,255,255,0.85);">
              ${data.requirementType || "General Hardware Enquiry"} &bull; ${data.city}
            </p>
          </td>
        </tr>

        <!-- Quick Action Bar -->
        <tr>
          <td style="background:#fbfbfd;padding:16px 20px;border-bottom:1px solid #eef0f8;text-align:center;">
            <a href="${dashboardUrl}" style="display:inline-block;background:#1925AA;color:#ffffff;font-family:sans-serif;font-size:12px;font-weight:700;text-decoration:none;padding:10px 18px;border-radius:8px;margin:3px;">
              📊 Open in Leads Dashboard
            </a>
            <a href="${whatsAppUrl}" style="display:inline-block;background:#25D366;color:#ffffff;font-family:sans-serif;font-size:12px;font-weight:700;text-decoration:none;padding:10px 18px;border-radius:8px;margin:3px;">
              💬 WhatsApp Client
            </a>
            <a href="tel:${data.phone}" style="display:inline-block;background:#ffffff;color:#1925AA;border:1px solid #1925AA;font-family:sans-serif;font-size:12px;font-weight:700;text-decoration:none;padding:9px 16px;border-radius:8px;margin:3px;">
              📞 Call ${data.phone}
            </a>
          </td>
        </tr>

        <!-- Details -->
        <tr>
          <td style="padding:24px 28px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e6e8f2;border-radius:10px;overflow:hidden;">
              ${field("Client Name", data.name)}
              ${field("Company", data.company || "Individual")}
              ${field("Phone Number", `<a href="tel:${data.phone}" style="color:#1925AA;font-weight:700;text-decoration:none;">${data.phone}</a>`)}
              ${field("Email Address", `<a href="mailto:${data.email}" style="color:#1925AA;text-decoration:none;">${data.email}</a>`)}
              ${field("City / Location", data.city)}
              ${field("Requirement", data.requirementType || "General Hardware Enquiry")}
              ${field("Timeline", data.timeline || "Immediate / Not Specified")}
              ${data.fileName ? field("Attached File", `${data.fileName} (${data.fileSize || ""})${data.fileUrl ? ` &bull; <a href="${data.fileUrl}" style="color:#1925AA;font-weight:bold;">Download File</a>` : " (File attached to email)"}`) : ""}
            </table>
          </td>
        </tr>

        ${data.message ? `
        <!-- Message -->
        <tr>
          <td style="padding:16px 28px 24px;">
            <p style="margin:0 0 6px;font-family:sans-serif;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#1925AA;">Client Requirements & Notes</p>
            <div style="background:#f8f9fe;border-left:4px solid #1925AA;border-radius:0 8px 8px 0;padding:14px 18px;font-family:sans-serif;font-size:14px;color:#222;line-height:1.6;">
              ${data.message.replace(/\n/g, "<br/>")}
            </div>
          </td>
        </tr>` : ""}

        <!-- Footer -->
        <tr>
          <td style="padding:20px 28px;border-top:1px solid #eef0f8;background:#fafafc;text-align:center;">
            <p style="margin:0;font-family:sans-serif;font-size:12px;color:#888;">
              Delivered via <strong>Brevo SMTP</strong> &bull; Lalani Computers Lead Engine
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
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

    // 4. Send Email via Brevo SMTP (or Resend fallback)
    const smtpHost = process.env.SMTP_HOST || "smtp-relay.brevo.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || `Lalani Computers <${smtpUser || "vikrantlalani@gmail.com"}>`;
    const toEmail = process.env.CONTACT_TO_EMAIL || "lalanics@yahoo.co.in";
    const ccEmail = process.env.NOTIFICATION_CC_EMAIL;

    let emailDelivered = false;

    if (smtpPass && smtpUser) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const recipients = [toEmail];
        if (ccEmail && ccEmail !== toEmail) {
          recipients.push(ccEmail);
        }

        const mailOptions: nodemailer.SendMailOptions = {
          from: smtpFrom,
          to: recipients,
          replyTo: email,
          subject: `⚡ New Lead Alert: ${requirementType || "General Enquiry"} — ${name}`,
          html: buildEmailHTML(leadData),
        };

        if (leadData.fileData && leadData.fileName) {
          try {
            const rawBase64 = leadData.fileData.includes("base64,")
              ? leadData.fileData.split("base64,")[1]
              : leadData.fileData;
            mailOptions.attachments = [
              {
                filename: leadData.fileName,
                content: Buffer.from(rawBase64, "base64"),
              },
            ];
          } catch (attErr) {
            console.error("[Brevo SMTP] attachment encoding error:", attErr);
          }
        }

        const info = await transporter.sendMail(mailOptions);
        console.log("✅ [Brevo SMTP] Lead notification sent successfully:", info.messageId);
        emailDelivered = true;
      } catch (smtpErr) {
        console.error("❌ [Brevo SMTP] Delivery error:", smtpErr);
      }
    }

    // Fallback to Resend if SMTP wasn't configured or failed
    if (!emailDelivered && process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromAddress = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

      const emailPayload: Parameters<typeof resend.emails.send>[0] = {
        from: `Lalani Computers Website <${fromAddress}>`,
        to: [toEmail],
        replyTo: email,
        subject: `⚡ New Lead: ${requirementType || "General"} — ${name}`,
        html: buildEmailHTML(leadData),
      };

      if (leadData.fileData && leadData.fileName) {
        try {
          const rawBase64 = leadData.fileData.includes("base64,")
            ? leadData.fileData.split("base64,")[1]
            : leadData.fileData;
          emailPayload.attachments = [
            {
              filename: leadData.fileName,
              content: rawBase64,
            },
          ];
        } catch (attErr) {
          console.error("Resend attachment error:", attErr);
        }
      }

      const { error: sendError } = await resend.emails.send(emailPayload);

      if (sendError) {
        console.error("Resend delivery error:", sendError);
      } else {
        emailDelivered = true;
      }
    }

    if (!emailDelivered && !smtpPass && !process.env.RESEND_API_KEY) {
      console.log("\n📬 [DEV] Contact form submission (set SMTP_PASS to send real emails):");
      console.log(JSON.stringify({ ...leadData, fileData: leadData.fileData ? "[Base64 Data Stored]" : undefined }, null, 2));
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

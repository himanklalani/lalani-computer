import { NextResponse } from "next/server";
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
function saveLead(data: Record<string, string>) {
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
}) {
  const field = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:8px 16px;font-weight:600;color:#1925AA;width:170px;vertical-align:top;font-family:sans-serif;font-size:14px;">${label}</td>
          <td style="padding:8px 16px;color:#1a1a2e;font-family:sans-serif;font-size:14px;">${value}</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f4f4f8;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f8;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(25,37,170,0.1);">
        
        <!-- Header -->
        <tr>
          <td style="background:#1925AA;padding:32px 40px;">
            <p style="margin:0;font-family:sans-serif;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(232,230,224,0.7);">New Lead</p>
            <h1 style="margin:8px 0 0;font-family:sans-serif;font-size:26px;font-weight:800;color:#E8E6E0;">
              New Enquiry from ${data.name}
            </h1>
          </td>
        </tr>

        <!-- Details -->
        <tr>
          <td style="padding:32px 24px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0f0;border-radius:10px;overflow:hidden;">
              ${field("Name", data.name)}
              ${field("Company", data.company || "N/A")}
              ${field("Email", data.email)}
              ${field("Phone", data.phone)}
              ${field("City", data.city)}
              ${field("Requirement", data.requirementType || "N/A")}
              ${field("Timeline", data.timeline || "N/A")}
            </table>
          </td>
        </tr>

        ${data.message ? `
        <!-- Message -->
        <tr>
          <td style="padding:16px 40px 32px;">
            <p style="margin:0 0 8px;font-family:sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#1925AA;">Additional Details</p>
            <div style="background:#f8f8fc;border-left:4px solid #1925AA;border-radius:0 8px 8px 0;padding:16px 20px;font-family:sans-serif;font-size:14px;color:#333;line-height:1.6;">
              ${data.message.replace(/\n/g, "<br/>")}
            </div>
          </td>
        </tr>` : ""}

        <!-- CTA -->
        <tr>
          <td style="padding:0 40px 16px;text-align:center;">
            <a href="mailto:${data.email}" style="display:inline-block;background:#1925AA;color:#E8E6E0;font-family:sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:100px;letter-spacing:0.5px;">
              Reply to ${data.name}
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;border-top:1px solid #eeeef8;text-align:center;">
            <p style="margin:0;font-family:sans-serif;font-size:12px;color:#999;">
              This enquiry was submitted via <strong>lalanicomputers.com</strong>
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
    const { name, company, email, phone, city, requirementType, message, timeline } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2)
      return NextResponse.json({ success: false, error: "Please enter a valid name." }, { status: 400 });
    if (!email || !EMAIL_REGEX.test(email))
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    if (!phone || !PHONE_REGEX.test(phone) || phone.replace(/\D/g, "").length < 7)
      return NextResponse.json({ success: false, error: "Please enter a valid phone number." }, { status: 400 });
    if (!city || typeof city !== "string" || city.trim().length < 2)
      return NextResponse.json({ success: false, error: "Please enter a valid city." }, { status: 400 });

    const leadData = { name, company, email, phone, city, requirementType, timeline, message };

    // 3. Save lead locally (never lose a lead even if email fails)
    saveLead(leadData);

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

    // 4. Send Email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "lalanics@yahoo.co.in";

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const fromAddress = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

      const { error: sendError } = await resend.emails.send({
        from: `Lalani Computers Website <${fromAddress}>`,
        to: [toEmail],
        replyTo: email,
        subject: `New Enquiry: ${requirementType || "General"} — ${name}`,
        html: buildEmailHTML(leadData),
      });

      if (sendError) {
        console.error("Resend delivery error:", sendError);
        // Lead is still saved locally, so we return success
      }
    } else {
      // Dev mode — just log it
      console.log("\n📬 [DEV] Contact form submission (set RESEND_API_KEY to send real emails):");
      console.log(JSON.stringify(leadData, null, 2));
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

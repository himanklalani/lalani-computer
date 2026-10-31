import nodemailer from "nodemailer";
import { Resend } from "resend";

export interface LeadNotificationPayload {
  name: string;
  company?: string;
  email: string;
  phone: string;
  city?: string;
  requirementType?: string;
  timeline?: string;
  message?: string;
  fileName?: string;
  fileSize?: string;
  fileUrl?: string;
  fileData?: string;
}

export function buildEmailHTML(data: LeadNotificationPayload) {
  const secret = process.env.ADMIN_SECRET_KEY || "my_secret_key_123";
  const dashboardUrl = `https://www.lalanicomputers.com/admin/leads/${secret}`;
  const phoneClean = (data.phone || "").replace(/\D/g, "");
  const whatsAppUrl = `https://wa.me/${phoneClean.startsWith("91") ? phoneClean : `91${phoneClean}`}`;

  const field = (label: string, value?: string) =>
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
              ${data.requirementType || "General Hardware Enquiry"} &bull; ${data.city || "Mumbai"}
            </p>
          </td>
        </tr>

        <!-- Quick Action Bar -->
        <tr>
          <td style="background:#fbfbfd;padding:16px 20px;border-bottom:1px solid #eef0f8;text-align:center;">
            <a href="${dashboardUrl}" style="display:inline-block;background:#1925AA;color:#ffffff;font-family:sans-serif;font-size:12px;font-weight:700;text-decoration:none;padding:10px 18px;border-radius:8px;margin:3px;">
              📊 Open in Leads Dashboard
            </a>
            ${phoneClean ? `
            <a href="${whatsAppUrl}" style="display:inline-block;background:#25D366;color:#ffffff;font-family:sans-serif;font-size:12px;font-weight:700;text-decoration:none;padding:10px 18px;border-radius:8px;margin:3px;">
              💬 WhatsApp Client
            </a>
            <a href="tel:${data.phone}" style="display:inline-block;background:#ffffff;color:#1925AA;border:1px solid #1925AA;font-family:sans-serif;font-size:12px;font-weight:700;text-decoration:none;padding:9px 16px;border-radius:8px;margin:3px;">
              📞 Call ${data.phone}
            </a>` : ""}
          </td>
        </tr>

        <!-- Details -->
        <tr>
          <td style="padding:24px 28px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e6e8f2;border-radius:10px;overflow:hidden;">
              ${field("Client Name", data.name)}
              ${field("Company", data.company || "Individual")}
              ${data.phone ? field("Phone Number", `<a href="tel:${data.phone}" style="color:#1925AA;font-weight:700;text-decoration:none;">${data.phone}</a>`) : ""}
              ${data.email ? field("Email Address", `<a href="mailto:${data.email}" style="color:#1925AA;text-decoration:none;">${data.email}</a>`) : ""}
              ${field("City / Location", data.city || "Mumbai")}
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

export async function sendLeadNotification(leadData: LeadNotificationPayload): Promise<boolean> {
  const smtpHost = process.env.SMTP_HOST || "smtp-relay.brevo.com";
  const smtpPort = Number(process.env.SMTP_PORT) || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || `Lalani Computers <${smtpUser || "vikrantlalani@gmail.com"}>`;
  const toEmail = process.env.CONTACT_TO_EMAIL || "lalanics@yahoo.co.in";
  const ccEmail = process.env.NOTIFICATION_CC_EMAIL;

  let emailDelivered = false;

  // 1. Try Brevo SMTP first
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
        replyTo: leadData.email || undefined,
        subject: `⚡ New Lead Alert: ${leadData.requirementType || "General Enquiry"} — ${leadData.name}`,
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

  // 2. Try Resend fallback if SMTP not configured or failed
  if (!emailDelivered && process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromAddress = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

      const emailPayload: Parameters<typeof resend.emails.send>[0] = {
        from: `Lalani Computers Website <${fromAddress}>`,
        to: [toEmail],
        replyTo: leadData.email || undefined,
        subject: `⚡ New Lead: ${leadData.requirementType || "General"} — ${leadData.name}`,
        html: buildEmailHTML(leadData),
      };

      if (leadData.fileData && leadData.fileName) {
        const rawBase64 = leadData.fileData.includes("base64,")
          ? leadData.fileData.split("base64,")[1]
          : leadData.fileData;
        emailPayload.attachments = [
          {
            filename: leadData.fileName,
            content: rawBase64,
          },
        ];
      }

      const { error: sendError } = await resend.emails.send(emailPayload);
      if (sendError) {
        console.error("Resend delivery error:", sendError);
      } else {
        emailDelivered = true;
      }
    } catch (resendErr) {
      console.error("Resend exception:", resendErr);
    }
  }

  return emailDelivered;
}

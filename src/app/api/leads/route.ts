import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { sendLeadNotification } from "@/lib/emailNotification";

export async function POST(req: Request) {
  // Auth: require secret key header
  const secret = req.headers.get("x-admin-secret");
  if (!secret || secret !== process.env.ADMIN_SECRET_KEY) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();
    const body = await req.json();

    // Check if it's a batch import (array of leads) or a single lead
    if (Array.isArray(body)) {
      const inserted = await Lead.insertMany(body);
      return NextResponse.json({ success: true, count: inserted.length });
    } else {
      const newLead = new Lead(body);
      await newLead.save();

      // Trigger email notification
      try {
        await sendLeadNotification({
          name: newLead.name,
          company: newLead.company,
          email: newLead.email,
          phone: newLead.phone,
          city: newLead.city,
          requirementType: newLead.requirementType,
          timeline: newLead.timeline,
          message: newLead.message,
          fileName: newLead.fileName,
          fileSize: newLead.fileSize,
          fileUrl: newLead.fileUrl,
          fileData: newLead.fileData,
        });
      } catch (notifyErr) {
        console.error("[POST /api/leads] notification error:", notifyErr);
      }

      return NextResponse.json({ success: true, lead: newLead });
    }
  } catch (error: any) {
    console.error("POST /api/leads error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Server error." },
      { status: 500 }
    );
  }
}

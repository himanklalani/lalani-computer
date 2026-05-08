import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead, { LeadStatus } from "@/models/Lead";

const VALID_STATUSES: LeadStatus[] = [
  "new",
  "contacted",
  "not_contacted",
  "followed_up",
  "deal_done",
  "not_interested",
];

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const secret = req.headers.get("x-admin-secret");
  if (!secret || secret !== process.env.ADMIN_SECRET_KEY) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();

  if (body.status && !VALID_STATUSES.includes(body.status)) {
    return NextResponse.json({ success: false, error: "Invalid status value." }, { status: 400 });
  }

  try {
    await dbConnect();
    const lead = await Lead.findByIdAndUpdate(id, body, { new: true });
    if (!lead) {
      return NextResponse.json({ success: false, error: "Lead not found." }, { status: 404 });
    }
    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("PATCH /api/leads/[id] error:", error);
    return NextResponse.json({ success: false, error: "Server error." }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const secret = req.headers.get("x-admin-secret");
  if (!secret || secret !== process.env.ADMIN_SECRET_KEY) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await dbConnect();
    const lead = await Lead.findByIdAndDelete(id);
    if (!lead) {
      return NextResponse.json({ success: false, error: "Lead not found." }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Lead deleted." });
  } catch (error) {
    console.error("DELETE /api/leads/[id] error:", error);
    return NextResponse.json({ success: false, error: "Server error." }, { status: 500 });
  }
}

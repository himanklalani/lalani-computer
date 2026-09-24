import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";

function getMimeType(fileName: string): string {
  const ext = fileName.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "csv":
      return "text/csv; charset=utf-8";
    case "xlsx":
      return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    case "xls":
      return "application/vnd.ms-excel";
    case "pdf":
      return "application/pdf";
    default:
      return "application/octet-stream";
  }
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const url = new URL(req.url);
  const secretFromQuery = url.searchParams.get("secret");
  const secretFromHeader = req.headers.get("x-admin-secret");
  const secret = secretFromQuery || secretFromHeader;

  if (!secret || secret !== (process.env.ADMIN_SECRET_KEY || "default_secret")) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    await dbConnect();
    const lead = await Lead.findById(id).lean();

    if (!lead) {
      return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
    }

    // 1. If base64 fileData is stored
    if (lead.fileData) {
      const base64Data = lead.fileData.includes("base64,")
        ? lead.fileData.split("base64,")[1]
        : lead.fileData;

      const buffer = Buffer.from(base64Data, "base64");
      const fileName = lead.fileName || `manifest_${id}.csv`;
      const contentType = getMimeType(fileName);

      return new Response(buffer, {
        status: 200,
        headers: {
          "Content-Type": contentType,
          "Content-Disposition": `attachment; filename="${encodeURIComponent(fileName)}"`,
          "Content-Length": buffer.length.toString(),
        },
      });
    }

    // 2. If Cloudinary URL is stored
    if (lead.fileUrl) {
      return NextResponse.redirect(lead.fileUrl);
    }

    return NextResponse.json(
      { success: false, error: "No manifest file attached to this lead." },
      { status: 404 }
    );
  } catch (error) {
    console.error("GET /api/leads/[id]/download error:", error);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

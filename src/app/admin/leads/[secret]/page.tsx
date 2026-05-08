import React from "react";
import { notFound } from "next/navigation";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { LeadStatusSelect } from "@/components/admin/LeadStatusSelect";
import { RefreshButton } from "@/components/admin/RefreshButton";
import { LeadActions } from "@/components/admin/LeadActions";
import { LeadRowActions } from "@/components/admin/LeadRowActions";
import type { LeadStatus } from "@/models/Lead";

// Prevent static generation so this page always fetches fresh data
export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{
    secret: string;
  }>;
}

const STATUS_COUNTS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  not_contacted: "Not Contacted",
  followed_up: "Followed Up",
  deal_done: "Deal Done",
  not_interested: "Not Interested",
};

const STATUS_DOT: Record<LeadStatus, string> = {
  new: "bg-blue-500",
  contacted: "bg-amber-500",
  not_contacted: "bg-red-500",
  followed_up: "bg-purple-500",
  deal_done: "bg-green-500",
  not_interested: "bg-gray-400",
};

export default async function LeadsDashboardPage({ params }: PageProps) {
  const adminSecret = process.env.ADMIN_SECRET_KEY || "default_secret";
  const resolvedParams = await params;
  if (resolvedParams.secret !== adminSecret) {
    notFound();
  }

  // Fetch leads from MongoDB
  let leads: any[] = [];
  try {
    if (process.env.MONGODB_URI) {
      await dbConnect();
      leads = await Lead.find({}).sort({ createdAt: -1 }).lean();
    }
  } catch (error) {
    console.error("Failed to fetch leads:", error);
  }

  // Build status counts for the summary bar
  const statusCounts = (Object.keys(STATUS_COUNTS_LABELS) as LeadStatus[]).map((s) => ({
    status: s,
    label: STATUS_COUNTS_LABELS[s],
    count: leads.filter((l) => (l.status ?? "new") === s).length,
    dot: STATUS_DOT[s],
  }));

  return (
    <div className="min-h-screen bg-warm-bg1 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold text-primary mb-1">Lead Dashboard</h1>
            <p className="text-text-dark/60 text-sm">Secure view of all contact form submissions</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <LeadActions adminSecret={adminSecret} />
            <RefreshButton />
            <div className="text-sm font-bold bg-white px-5 py-2.5 rounded-lg shadow-sm border border-primary/10 text-primary">
              {leads.length} total leads
            </div>
          </div>
        </header>

        {/* Status Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {statusCounts.map(({ status, label, count, dot }) => (
            <div key={status} className="bg-white rounded-xl p-4 border border-primary/10 shadow-sm flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${dot}`} />
                <span className="text-xs font-semibold text-text-dark/60 uppercase tracking-wide">{label}</span>
              </div>
              <span className="text-2xl font-bold text-primary">{count}</span>
            </div>
          ))}
        </div>

        {/* Leads Table */}
        {leads.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-primary/10 shadow-sm">
            <h2 className="text-xl text-text-dark/60 font-medium">No leads found yet.</h2>
            <p className="text-sm text-text-dark/40 mt-2">When someone submits a contact form, it will appear here.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-primary/10 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1100px]">
                <thead>
                  <tr className="bg-primary/5 text-primary text-xs uppercase tracking-wider">
                    <th className="p-4 font-semibold border-b border-primary/10">Status</th>
                    <th className="p-4 font-semibold border-b border-primary/10">Date</th>
                    <th className="p-4 font-semibold border-b border-primary/10">Name / Company</th>
                    <th className="p-4 font-semibold border-b border-primary/10">Contact Info</th>
                    <th className="p-4 font-semibold border-b border-primary/10">Location</th>
                    <th className="p-4 font-semibold border-b border-primary/10">Requirement & Details</th>
                    <th className="p-4 font-semibold border-b border-primary/10 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-text-dark text-sm divide-y divide-primary/5">
                  {leads.map((lead: any) => (
                    <tr key={lead._id.toString()} className="hover:bg-primary/[0.03] transition-colors">

                      {/* Status Column */}
                      <td className="p-4 align-middle whitespace-nowrap">
                        <LeadStatusSelect
                          leadId={lead._id.toString()}
                          initialStatus={lead.status ?? "new"}
                          adminSecret={adminSecret}
                        />
                      </td>

                      {/* Date */}
                      <td className="p-4 whitespace-nowrap align-top">
                        <div className="font-medium text-primary text-sm">
                          {new Intl.DateTimeFormat("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }).format(new Date(lead.createdAt))}
                        </div>
                        <div className="text-xs text-text-dark/50 mt-0.5">
                          {new Intl.DateTimeFormat("en-IN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          }).format(new Date(lead.createdAt))}
                        </div>
                      </td>

                      {/* Name / Company */}
                      <td className="p-4 align-top">
                        <div className="font-bold">{lead.name}</div>
                        {lead.company && (
                          <div className="text-text-dark/60 mt-0.5 text-xs">{lead.company}</div>
                        )}
                      </td>

                      {/* Contact */}
                      <td className="p-4 align-top">
                        <a href={`mailto:${lead.email}`} className="text-primary hover:underline block text-sm">
                          {lead.email}
                        </a>
                        <a href={`tel:${lead.phone}`} className="text-text-dark/70 hover:text-primary block text-xs mt-0.5">
                          {lead.phone}
                        </a>
                      </td>

                      {/* City */}
                      <td className="p-4 align-top text-text-dark/80 font-medium whitespace-nowrap">
                        {lead.city}
                      </td>

                      {/* Requirement & Message */}
                      <td className="p-4 align-top max-w-[280px]">
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {lead.requirementType && (
                            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-semibold">
                              {lead.requirementType}
                            </span>
                          )}
                          {lead.timeline && (
                            <span className="bg-warm-bg2 text-text-dark/60 px-2 py-1 rounded-full text-xs">
                              {lead.timeline}
                            </span>
                          )}
                        </div>
                        {lead.message ? (
                          <p className="text-xs text-text-dark/70 whitespace-pre-wrap line-clamp-3">{lead.message}</p>
                        ) : (
                          <span className="text-xs text-text-dark/30 italic">No message.</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="p-4 align-top text-right">
                        <div className="flex justify-end">
                          <LeadRowActions 
                            lead={{
                              _id: lead._id.toString(),
                              name: lead.name,
                              email: lead.email,
                              phone: lead.phone,
                              city: lead.city,
                              company: lead.company,
                              requirementType: lead.requirementType,
                              timeline: lead.timeline,
                              message: lead.message,
                              status: lead.status
                            }} 
                            adminSecret={adminSecret} 
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

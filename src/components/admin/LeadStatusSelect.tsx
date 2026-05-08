"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { LeadStatus } from "@/models/Lead";

const STATUS_CONFIG: Record<
  LeadStatus,
  { label: string; color: string; bg: string; border: string }
> = {
  new: {
    label: "🆕 New",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  contacted: {
    label: "📞 Contacted",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  not_contacted: {
    label: "⏳ Not Contacted",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  followed_up: {
    label: "🔄 Followed Up",
    color: "text-purple-700",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  deal_done: {
    label: "✅ Deal Done",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  not_interested: {
    label: "❌ Not Interested",
    color: "text-gray-500",
    bg: "bg-gray-50",
    border: "border-gray-200",
  },
};

interface Props {
  leadId: string;
  initialStatus: LeadStatus;
  adminSecret: string;
}

export function LeadStatusSelect({ leadId, initialStatus, adminSecret }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<LeadStatus>(initialStatus ?? "new");
  const [saving, setSaving] = useState(false);

  const cfg = STATUS_CONFIG[status];

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as LeadStatus;
    setSaving(true);
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": adminSecret,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus(newStatus);
        router.refresh(); // Refresh dashboard counts
      } else {
        alert("Failed to update status: " + data.error);
      }
    } catch {
      alert("Network error while updating status.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="relative">
      <select
        value={status}
        onChange={handleChange}
        disabled={saving}
        className={`
          appearance-none cursor-pointer text-xs font-semibold
          px-3 py-1.5 rounded-full border transition-all duration-200
          outline-none focus:ring-2 focus:ring-primary/20
          disabled:opacity-60 disabled:cursor-wait
          ${cfg.color} ${cfg.bg} ${cfg.border}
        `}
      >
        {(Object.keys(STATUS_CONFIG) as LeadStatus[]).map((s) => (
          <option key={s} value={s} className="bg-white text-gray-800 font-medium">
            {STATUS_CONFIG[s].label}
          </option>
        ))}
      </select>
      {saving && (
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full animate-ping" />
      )}
    </div>
  );
}

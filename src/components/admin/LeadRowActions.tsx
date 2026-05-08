"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, X, Loader2 } from "lucide-react";

interface LeadData {
  _id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  company?: string;
  requirementType?: string;
  timeline?: string;
  message?: string;
  status: string;
}

interface Props {
  lead: LeadData;
  adminSecret: string;
}

export function LeadRowActions({ lead, adminSecret }: Props) {
  const router = useRouter();
  const [showEdit, setShowEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [formData, setFormData] = useState({
    name: lead.name || "",
    email: lead.email || "",
    phone: lead.phone || "",
    city: lead.city || "",
    company: lead.company || "",
    requirementType: lead.requirementType || "",
    timeline: lead.timeline || "",
    message: lead.message || "",
  });

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete the lead for ${lead.name}?`)) return;
    
    setDeleting(true);
    try {
      const res = await fetch(`/api/leads/${lead._id}`, {
        method: "DELETE",
        headers: { "x-admin-secret": adminSecret },
      });
      const data = await res.json();
      if (data.success) {
        router.refresh();
      } else {
        alert("Failed to delete lead: " + data.error);
      }
    } catch {
      alert("Network error while deleting.");
    } finally {
      setDeleting(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/leads/${lead._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-secret": adminSecret },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setShowEdit(false);
        router.refresh();
      } else {
        alert("Failed to update lead: " + data.error);
      }
    } catch {
      alert("Network error while updating.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-1">
        <button 
          onClick={() => setShowEdit(true)}
          title="Edit Lead"
          className="p-1.5 text-text-dark/40 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
        >
          <Pencil className="w-4 h-4" />
        </button>
        <button 
          onClick={handleDelete}
          disabled={deleting}
          title="Delete Lead"
          className="p-1.5 text-text-dark/40 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors disabled:opacity-50"
        >
          {deleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
        </button>
      </div>

      {showEdit && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-primary/10 overflow-hidden animate-in zoom-in-95 duration-200 text-left">
            <div className="px-6 py-4 border-b border-primary/5 flex items-center justify-between bg-warm-bg1">
              <h2 className="text-lg font-bold text-primary">Edit Lead</h2>
              <button onClick={() => setShowEdit(false)} className="text-text-dark/40 hover:text-text-dark/80 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleUpdate} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-text-dark/70">Name *</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full h-10 px-3 text-sm border border-primary/20 rounded-md outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-text-dark/70">Company</label>
                  <input value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full h-10 px-3 text-sm border border-primary/20 rounded-md outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-text-dark/70">Email *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full h-10 px-3 text-sm border border-primary/20 rounded-md outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-text-dark/70">Phone *</label>
                  <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full h-10 px-3 text-sm border border-primary/20 rounded-md outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-text-dark/70">City *</label>
                <input required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full h-10 px-3 text-sm border border-primary/20 rounded-md outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-text-dark/70">Message / Notes</label>
                <textarea rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full p-3 text-sm border border-primary/20 rounded-md outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none" />
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-primary/5">
                <button type="button" onClick={() => setShowEdit(false)} className="px-5 py-2 text-sm font-semibold text-text-dark/70 hover:bg-black/5 rounded-lg transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={loading} className="px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Plus, Upload, X, Loader2 } from "lucide-react";

interface Props {
  adminSecret: string;
}

export function LeadActions({ adminSecret }: Props) {
  const router = useRouter();
  const [showAddModal, setShowAddModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Manual Add Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    company: "",
    requirementType: "New Purchase",
    timeline: "Immediately (Under 24 hours)",
    message: "",
  });

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-secret": adminSecret },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setShowAddModal(false);
        setFormData({ name: "", email: "", phone: "", city: "", company: "", requirementType: "New Purchase", timeline: "Immediately (Under 24 hours)", message: "" });
        router.refresh();
      } else {
        alert("Error adding lead: " + data.error);
      }
    } catch (err) {
      alert("Network error.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const text = event.target?.result as string;
        const lines = text.split("\n").filter(l => l.trim() !== "");
        if (lines.length < 2) throw new Error("CSV is empty or missing headers.");

        // Very basic CSV parsing (assumes no commas inside quotes)
        const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
        
        const leads = lines.slice(1).map(line => {
          const values = line.split(",").map(v => v.trim());
          const lead: any = { status: "new" };
          
          headers.forEach((header, i) => {
            if (header.includes("name")) lead.name = values[i];
            else if (header.includes("email")) lead.email = values[i];
            else if (header.includes("phone") || header.includes("mobile")) lead.phone = values[i];
            else if (header.includes("city") || header.includes("location")) lead.city = values[i];
            else if (header.includes("company") || header.includes("business")) lead.company = values[i];
            else if (header.includes("requirement")) lead.requirementType = values[i];
            else if (header.includes("message") || header.includes("notes")) lead.message = values[i];
          });
          
          return lead;
        });

        // Filter out leads without name or email
        const validLeads = leads.filter(l => l.name && (l.email || l.phone));
        
        if (validLeads.length === 0) {
          alert("Could not find valid leads in CSV. Ensure columns like 'Name', 'Email', and 'Phone' exist.");
          setLoading(false);
          return;
        }

        const res = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-admin-secret": adminSecret },
          body: JSON.stringify(validLeads),
        });
        
        const data = await res.json();
        if (data.success) {
          alert(`Successfully imported ${data.count} leads!`);
          router.refresh();
        } else {
          alert("Import failed: " + data.error);
        }
      } catch (err: any) {
        alert("Error parsing CSV: " + err.message);
      } finally {
        setLoading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    };
    reader.readAsText(file);
  };

  return (
    <>
      <div className="flex gap-2">
        <input 
          type="file" 
          accept=".csv" 
          ref={fileInputRef} 
          className="hidden" 
          onChange={handleFileUpload} 
        />
        
        <button 
          onClick={() => fileInputRef.current?.click()}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-white text-text-dark/70 text-sm font-semibold rounded-lg border border-primary/10 hover:bg-black/5 transition-colors disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
          Import CSV
        </button>

        <button 
          onClick={() => setShowAddModal(true)}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20 disabled:opacity-50"
        >
          <Plus className="w-4 h-4" />
          Add Lead
        </button>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-primary/10 overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-primary/5 flex items-center justify-between bg-warm-bg1">
              <h2 className="text-lg font-bold text-primary">Manually Add Lead</h2>
              <button onClick={() => setShowAddModal(false)} className="text-text-dark/40 hover:text-text-dark/80 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleManualSubmit} className="p-6 space-y-4">
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
                <button type="button" onClick={() => setShowAddModal(false)} className="px-5 py-2 text-sm font-semibold text-text-dark/70 hover:bg-black/5 rounded-lg transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={loading} className="px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

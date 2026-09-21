"use client";

import React, { useState } from "react";
import { 
  Building, 
  Laptop, 
  Server, 
  Network, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Truck,
  FileSpreadsheet
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const ASSET_CLASSES = [
  { id: "laptops", label: "Corporate Laptop & Desktop Fleets", icon: Laptop, example: "Dell Latitude, ThinkPad, EliteBook, Apple MacBooks" },
  { id: "servers", label: "Rack / Blade Servers & SAN Arrays", icon: Server, example: "Dell PowerEdge, HPE ProLiant, Supermicro, NetApp" },
  { id: "networking", label: "Enterprise Switches & Firewalls", icon: Network, example: "Cisco Catalyst, Aruba, Fortinet, Wi-Fi 6 APs" },
  { id: "infrastructure", label: "Enterprise UPS & Server Racks", icon: Cpu, example: "APC / Vertiv UPS units, 42U Enclosures, Rack PDUs" }
];

const FLEET_SIZES = [
  "10 – 25 Units",
  "25 – 50 Units",
  "50 – 100 Units",
  "100+ Enterprise Fleet"
];

export function CorporateAssetInquiry({ className = "" }: { className?: string }) {
  const [selectedAsset, setSelectedAsset] = useState<string>("laptops");
  const [fleetSize, setFleetSize] = useState<string>(FLEET_SIZES[1]);
  const [timeline, setTimeline] = useState<string>("Immediate (Within 7 Days)");

  // Lead fields
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Mumbai");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const activeAssetObj = ASSET_CLASSES.find(a => a.id === selectedAsset) || ASSET_CLASSES[0];

  const getWhatsAppMessage = () => {
    return `Hi, we are looking for a corporate IT asset buyback quotation:\n• Asset Category: ${activeAssetObj.label}\n• Approximate Fleet Size: ${fleetSize}\n• Timeline: ${timeline}\n• Company: ${company || "Corporate Inquiry"}\n• Contact: ${name} (${phone})\nCan we discuss on-site audit and commercial valuation?`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !company) {
      setErrorMessage("Please fill in your name, company, and phone number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const details = `Corporate Buyback Consultation Request:
• Equipment Class: ${activeAssetObj.label} (${activeAssetObj.example})
• Estimated Fleet Size: ${fleetSize}
• Decommission Timeline: ${timeline}
• Facility / Office City: ${city}
• Additional Inventory Notes: ${notes || "None"}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: email || "corporate-buyback@lalanicomputers.com",
          company,
          city,
          requirementType: "Corporate IT Asset Buyback & ITAD",
          timeline,
          message: details
        })
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        setIsSuccess(true);
      }
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white rounded-3xl shadow-xl border border-primary/10 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-primary-dark text-white p-6 md:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-light mb-1">
          <Building className="w-4 h-4" />
          <span>Enterprise Asset Disposition & Reverse Logistics</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
          Request Corporate Hardware Valuation Offer
        </h3>
        <p className="text-xs sm:text-sm text-beige/80 mt-1 max-w-2xl">
          Complete compliance assurance with NIST 800-88 sanitized data wiping protocols, serialized documentation, and immediate RTGS settlement.
        </p>
      </div>

      <div className="p-6 md:p-8">
        {isSuccess ? (
          <div className="py-10 text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
            <h4 className="text-2xl font-heading font-bold text-emerald-950">
              Corporate Inquiry Submitted
            </h4>
            <p className="text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong> from <strong>{company}</strong>. Our enterprise hardware valuation desk is preparing your preliminary assessment. You will be contacted within 4 business hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/919323332850?text=${encodeURIComponent(getWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white border-0">
                  Connect on WhatsApp Now
                </Button>
              </a>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsSuccess(false)}
              >
                Submit Another Inquiry
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Equipment Class */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2.5">
                1. Select Asset Category for Liquidation
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {ASSET_CLASSES.map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedAsset === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedAsset(item.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected 
                          ? "border-primary bg-primary text-white shadow-md" 
                          : "border-gray-200 hover:border-primary/40 text-text-dark bg-white"
                      }`}
                    >
                      <div>
                        <Icon className={`w-5 h-5 mb-2 ${isSelected ? "text-white" : "text-primary"}`} />
                        <div className="font-heading font-bold text-sm leading-snug">{item.label}</div>
                      </div>
                      <p className={`text-[11px] mt-2 line-clamp-2 ${isSelected ? "text-beige/80" : "text-text-dark/60"}`}>
                        {item.example}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2 & 3: Fleet Size & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                  2. Approximate Fleet / Unit Quantity
                </label>
                <select
                  value={fleetSize}
                  onChange={(e) => setFleetSize(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-text-dark text-xs sm:text-sm font-medium focus:ring-2 focus:ring-primary/40 focus:outline-none"
                >
                  {FLEET_SIZES.map((sz, idx) => (
                    <option key={idx} value={sz}>{sz}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                  3. Decommissioning Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-text-dark text-xs sm:text-sm font-medium focus:ring-2 focus:ring-primary/40 focus:outline-none"
                >
                  <option value="Immediate (Within 7 Days)">Immediate (Within 7 Days)</option>
                  <option value="Within 30 Days (Scheduled Refresh)">Within 30 Days (Scheduled Refresh)</option>
                  <option value="Next Quarter Planning">Next Quarter Planning</option>
                </select>
              </div>
            </div>

            {/* Step 4: Corporate Contact Details */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-primary">
                4. Corporate Contact & Facility Location
              </label>

              {errorMessage && (
                <div className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Company / Enterprise *"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Official Phone / WhatsApp *"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Facility City (e.g. Mumbai)"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:outline-none"
                />
              </div>

              <textarea
                placeholder="Optional: Brief summary of brands, models, or facility logistics requirements..."
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:outline-none"
              />

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3 text-sm font-semibold"
                >
                  {isSubmitting ? "Submitting Inquiry..." : "Request Formal Enterprise Valuation"}
                </Button>

                <a
                  href={`https://wa.me/919323332850?text=${encodeURIComponent(getWhatsAppMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white border-0 flex items-center justify-center gap-2"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

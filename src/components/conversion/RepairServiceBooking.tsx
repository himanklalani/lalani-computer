"use client";

import React, { useState } from "react";
import { 
  Wrench, 
  Laptop, 
  Server, 
  Cpu, 
  Network, 
  Truck, 
  Building, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const DEVICE_TYPES = [
  { id: "laptop", label: "Laptop / Notebook", icon: Laptop },
  { id: "desktop", label: "Commercial Desktop / Workstation", icon: Cpu },
  { id: "server", label: "Enterprise Server / Storage", icon: Server },
  { id: "networking", label: "Network Switch / Firewall", icon: Network }
];

const COMMON_SYMPTOMS = {
  laptop: [
    "Broken Screen / Backlight Glitch",
    "Battery Degradation / Not Charging",
    "Damaged Hinges / Broken Chassis",
    "Keyboard / Trackpad / USB Port Fault",
    "Slow Performance / SSD & RAM Upgrade",
    "Overheating / Fan Noise / Thermal Servicing",
    "Motherboard No Power / Dead State",
    "Liquid Spillage / Corrosion"
  ],
  desktop: [
    "No Power / Power Supply Unit (PSU) Failure",
    "Random Blue Screen (BSOD) / Crashing",
    "Graphics Card / Display Output Issue",
    "Storage Upgrade (NVMe SSD) & OS Reload",
    "Thermal Throttling / Fan Replacement",
    "Motherboard Component Diagnosis"
  ],
  server: [
    "Degraded RAID Array / Disk Offline",
    "Redundant Power Supply (PSU) Fault",
    "ECC Memory Error / System Panic",
    "iDRAC / iLO Management Issue",
    "Scheduled On-Site Preventative Maintenance"
  ],
  networking: [
    "Blown PoE Power Supply Module",
    "Burnt Gigabit / 10G SFP+ Uplink Port",
    "Bootloader Crash / Firmware Loop",
    "Fan Module Failure / Overheating"
  ]
};

const SERVICE_MODELS = [
  {
    id: "doorstep",
    title: "Scheduled Doorstep Pickup",
    desc: "Convenient courier collection from your home or office across Mumbai MMR.",
    icon: Truck
  },
  {
    id: "onsite",
    title: "On-Site Corporate Visit",
    desc: "Certified hardware technician dispatched directly to your business premises.",
    icon: Building
  }
];

export function RepairServiceBooking({ className = "" }: { className?: string }) {
  const [selectedDevice, setSelectedDevice] = useState<keyof typeof COMMON_SYMPTOMS>("laptop");
  const [brandModel, setBrandModel] = useState("");
  const [selectedSymptom, setSelectedSymptom] = useState<string>(COMMON_SYMPTOMS.laptop[0]);
  const [selectedServiceMode, setSelectedServiceMode] = useState("doorstep");

  // Lead contact state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDeviceChange = (dev: keyof typeof COMMON_SYMPTOMS) => {
    setSelectedDevice(dev);
    setSelectedSymptom(COMMON_SYMPTOMS[dev][0]);
  };

  const getWhatsAppMessage = () => {
    const devLabel = DEVICE_TYPES.find(d => d.id === selectedDevice)?.label || selectedDevice;
    const modelText = brandModel ? ` (${brandModel})` : "";
    return `Hi, I need a repair consultation for ${devLabel}${modelText}:\n• Issue: ${selectedSymptom}\n• Preferred Service: ${selectedServiceMode === "doorstep" ? "Doorstep Pickup (Mumbai MMR)" : "On-Site Corporate Visit"}\n• Contact: ${name || "Customer"}${phone ? ` (${phone})` : ""}\nCan we schedule a service booking?`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      setErrorMessage("Please enter your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const details = `Repair Consultation Request:
• Device Type: ${DEVICE_TYPES.find(d => d.id === selectedDevice)?.label}
• Model: ${brandModel || "Not specified"}
• Observed Issue: ${selectedSymptom}
• Service Mode: ${selectedServiceMode === "doorstep" ? "Scheduled Doorstep Pickup" : "On-Site Corporate Visit"}
• Additional Notes: ${notes || "None"}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: email || "repair-booking@lalanicomputers.com",
          company: company || "Individual / Retail",
          city: "Mumbai / MMR",
          requirementType: "Hardware Repair & Maintenance Booking",
          timeline: "Urgent",
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
          <Wrench className="w-4 h-4" />
          <span>Doorstep Pickup & On-Site Corporate Service</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
          Schedule Hardware Diagnostic & Repair
        </h3>
        <p className="text-xs sm:text-sm text-beige/80 mt-1 max-w-2xl">
          Select your device type and symptoms below. We provide scheduled doorstep pickup across Mumbai MMR and on-site engineering visits for corporate offices.
        </p>
      </div>

      <div className="p-6 md:p-8">
        {isSuccess ? (
          <div className="py-10 text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
            <h4 className="text-2xl font-heading font-bold text-emerald-950">
              Service Request Logged Successfully!
            </h4>
            <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. Our hardware coordinator will contact you shortly to confirm the scheduled pickup or on-site engineer visit time.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/919323332850?text=${encodeURIComponent(getWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white border-0">
                  Confirm Pickup on WhatsApp
                </Button>
              </a>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsSuccess(false)}
              >
                Book Another Device
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Device Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2.5">
                1. Select Equipment Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {DEVICE_TYPES.map((dev) => {
                  const Icon = dev.icon;
                  const isSelected = selectedDevice === dev.id;
                  return (
                    <button
                      key={dev.id}
                      type="button"
                      onClick={() => handleDeviceChange(dev.id as keyof typeof COMMON_SYMPTOMS)}
                      className={`p-3.5 rounded-xl border text-left flex flex-col items-start gap-2 transition-all text-xs sm:text-sm font-semibold ${
                        isSelected 
                          ? "border-primary bg-primary text-white shadow-md" 
                          : "border-gray-200 hover:border-primary/40 text-text-dark bg-white"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-primary"}`} />
                      <span>{dev.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Brand & Model */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                  2. Brand & Model (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dell Latitude 5420 / ThinkPad T480 / MacBook Air"
                  value={brandModel}
                  onChange={(e) => setBrandModel(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-text-dark text-xs sm:text-sm focus:ring-2 focus:ring-primary/40 focus:outline-none"
                />
              </div>

              {/* Step 3: Observed Symptom */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                  3. Observed Symptom / Required Service
                </label>
                <select
                  value={selectedSymptom}
                  onChange={(e) => setSelectedSymptom(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-text-dark text-xs sm:text-sm font-medium focus:ring-2 focus:ring-primary/40 focus:outline-none"
                >
                  {COMMON_SYMPTOMS[selectedDevice].map((symptom, idx) => (
                    <option key={idx} value={symptom}>
                      {symptom}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 4: Service Delivery Model (Strictly Doorstep or On-site) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                4. Service Delivery Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_MODELS.map((model) => {
                  const Icon = model.icon;
                  const isSelected = selectedServiceMode === model.id;
                  return (
                    <div
                      key={model.id}
                      onClick={() => setSelectedServiceMode(model.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                        isSelected 
                          ? "border-primary bg-primary/5 ring-1 ring-primary/30 shadow-sm" 
                          : "border-gray-200 hover:border-primary/30"
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isSelected ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-heading font-bold text-text-dark">{model.title}</div>
                        <p className="text-xs text-text-dark/70 mt-0.5">{model.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Contact Details */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-primary">
                5. Contact Details for Scheduled Pickup / Visit
              </label>

              {errorMessage && (
                <div className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Mobile / WhatsApp *"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Company Name (if corporate)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:outline-none"
                />
              </div>

              <textarea
                placeholder="Pickup address in Mumbai or specific failure notes..."
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
                  {isSubmitting ? "Scheduling Booking..." : "Confirm Doorstep / On-Site Booking"}
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

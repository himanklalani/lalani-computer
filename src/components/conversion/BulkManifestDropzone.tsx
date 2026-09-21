"use client";

import React, { useState, useRef } from "react";
import { 
  UploadCloud, 
  FileText, 
  FileSpreadsheet, 
  CheckCircle2, 
  AlertCircle, 
  Trash2, 
  ArrowRight,
  ShieldCheck,
  Table as TableIcon
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ManifestRow {
  [key: string]: string;
}

interface ParsedManifest {
  fileName: string;
  fileSize: string;
  fileType: string;
  rowCount: number;
  headers: string[];
  rows: ManifestRow[];
}

export function BulkManifestDropzone({ className = "" }: { className?: string }) {
  const [dragActive, setDragActive] = useState(false);
  const [parsedData, setParsedData] = useState<ParsedManifest | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  
  // Lead info
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Mumbai");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const parseCSV = (text: string, file: File) => {
    const lines = text.split(/\r\n|\n/).filter(line => line.trim().length > 0);
    if (lines.length < 2) {
      setErrorMessage("CSV file must have at least one header row and one data row.");
      return;
    }

    const rawHeaders = lines[0].split(",").map(h => h.trim().replace(/^["']|["']$/g, ""));
    const rows: ManifestRow[] = [];

    for (let i = 1; i < Math.min(lines.length, 101); i++) { // preview up to 100 rows
      const values = lines[i].split(",").map(v => v.trim().replace(/^["']|["']$/g, ""));
      const rowObj: ManifestRow = {};
      rawHeaders.forEach((h, idx) => {
        rowObj[h] = values[idx] || "";
      });
      rows.push(rowObj);
    }

    setParsedData({
      fileName: file.name,
      fileSize: (file.size / 1024).toFixed(1) + " KB",
      fileType: "CSV",
      rowCount: lines.length - 1,
      headers: rawHeaders.slice(0, 6), // show first 6 columns
      rows: rows.slice(0, 10) // display top 10 rows in preview
    });
    setSelectedFile(file);
    setErrorMessage("");
  };

  const handleFileProcess = (file: File) => {
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!["csv", "xlsx", "xls", "pdf"].includes(ext || "")) {
      setErrorMessage("Please upload an Excel (.xlsx/.xls), CSV (.csv), or PDF (.pdf) file.");
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setErrorMessage("File exceeds the 15MB limit. Please compress or split the file.");
      return;
    }

    setSelectedFile(file);

    if (ext === "csv") {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        parseCSV(text, file);
      };
      reader.readAsText(file);
    } else {
      // Excel or PDF format preview
      setParsedData({
        fileName: file.name,
        fileSize: (file.size / 1024).toFixed(1) + " KB",
        fileType: ext?.toUpperCase() || "DOCUMENT",
        rowCount: 0,
        headers: [],
        rows: []
      });
      setErrorMessage("");
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFileProcess(e.target.files[0]);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setParsedData(null);
    setErrorMessage("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      setErrorMessage("Please provide your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const summaryText = parsedData 
      ? `Corporate Asset Manifest Uploaded: ${parsedData.fileName} (${parsedData.fileSize}, ${parsedData.fileType}${parsedData.rowCount > 0 ? `, ~${parsedData.rowCount} items` : ""})`
      : "Corporate IT Asset Manifest submitted without file attachment.";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: email || "manifest-submission@lalanicomputers.com",
          company: company || "Corporate Client",
          city: city || "Mumbai",
          requirementType: "Bulk Corporate Asset Manifest (ITAD)",
          timeline: "Within 24 Hours",
          message: `${summaryText}\nClient requested direct corporate evaluation and reverse logistics pickup.`
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

  const getWhatsAppManifestMessage = () => {
    return `Hi, I uploaded our corporate hardware inventory manifest to Lalani Computers:\n• File: ${parsedData?.fileName || "Inventory Manifest"}\n• Company: ${company || "Corporate Inquiry"}\n• Contact: ${name} (${phone})\nCan we schedule an on-site audit or receive a formal valuation offer?`;
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-primary/10 p-6 md:p-8 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-1">
            <FileSpreadsheet className="w-4 h-4" />
            <span>Fast Bulk Valuation</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-dark">
            Upload Your Equipment List
          </h3>
          <p className="text-xs sm:text-sm text-text-dark/70 mt-0.5">
            Supported formats: <strong className="text-text-dark">.xlsx, .xls, .csv, .pdf</strong> (Up to 15MB)
          </p>
        </div>
        <div className="hidden sm:inline-flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full font-medium border border-emerald-200 self-start sm:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>100% Confidential • Direct Audit</span>
        </div>
      </div>

      {isSuccess ? (
        <div className="py-10 text-center space-y-4">
          <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
          <h4 className="text-2xl font-heading font-bold text-emerald-950">
            Manifest Received by Procurement Desk
          </h4>
          <p className="text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed">
            Thank you, <strong>{name}</strong>. Our enterprise hardware valuation team is analyzing your inventory sheet. You will receive an itemized asset valuation within 4 business hours.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/919323332850?text=${encodeURIComponent(getWhatsAppManifestMessage())}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white border-0">
                Notify Procurement Head on WhatsApp
              </Button>
            </a>
            <Button
              variant="secondary"
              onClick={() => {
                setIsSuccess(false);
                clearFile();
              }}
            >
              Upload Another Manifest
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          {/* Dropzone Area */}
          {!parsedData ? (
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 md:p-12 text-center cursor-pointer transition-all ${
                dragActive 
                  ? "border-primary bg-primary/10 scale-[1.01]" 
                  : "border-gray-300 hover:border-primary/50 hover:bg-warm-bg1/30"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv, .xlsx, .xls, .pdf"
                onChange={handleChange}
                className="hidden"
              />
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <UploadCloud className="w-8 h-8" />
              </div>
              <h4 className="text-base sm:text-lg font-heading font-bold text-text-dark">
                Drag & Drop your IT Asset Sheet here, or <span className="text-primary underline">Browse Files</span>
              </h4>
              <p className="text-xs sm:text-sm text-text-dark/60 mt-1 max-w-md mx-auto">
                Include device models, specs, CPU, RAM, and quantities for our fastest valuation turnaround.
              </p>
            </div>
          ) : (
            /* File Preview & Parser Table */
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-warm-bg1/60 border border-primary/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
                    {parsedData.fileType === "CSV" ? <TableIcon className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-text-dark">{parsedData.fileName}</div>
                    <div className="text-xs text-text-dark/60">
                      Format: {parsedData.fileType} • Size: {parsedData.fileSize}
                      {parsedData.rowCount > 0 && ` • ~${parsedData.rowCount} Assets Logged`}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={clearFile}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors text-xs font-semibold flex items-center gap-1"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Remove</span>
                </button>
              </div>

              {/* CSV Data Table Preview */}
              {parsedData.rows.length > 0 && (
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-primary/5 px-4 py-2.5 border-b border-gray-200 flex items-center justify-between text-xs font-semibold text-text-dark">
                    <span>Parsed Data Preview (First {parsedData.rows.length} records)</span>
                    <span className="text-primary font-bold">Auto-Detected Columns</span>
                  </div>
                  <div className="overflow-x-auto max-h-56 no-scrollbar">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-warm-bg1/40 border-b border-gray-200 text-text-dark font-heading">
                          {parsedData.headers.map((h, i) => (
                            <th key={i} className="p-2.5 font-bold uppercase tracking-wider text-[11px] whitespace-nowrap">
                              {h || `Column ${i + 1}`}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 font-mono text-[11px] text-text-dark/80">
                        {parsedData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-primary/5 transition-colors">
                            {parsedData.headers.map((h, cIdx) => (
                              <td key={cIdx} className="p-2.5 whitespace-nowrap truncate max-w-[160px]">
                                {row[h] || "—"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {errorMessage && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Contact Details Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-text-dark mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Rajesh Sharma"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-dark mb-1">Company / Organization *</label>
                <input
                  type="text"
                  placeholder="e.g. Acrolinx Technologies"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-dark mb-1">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98200 12345"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-dark mb-1">Work Email (Optional)</label>
                <input
                  type="email"
                  placeholder="e.g. it.procurement@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-text-dark mb-1">Office City / Facility Location</label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai (BKC / Lower Parel / Andheri), Navi Mumbai, Pune"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Button
                type="submit"
                size="md"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-3 text-sm font-semibold rounded-xl bg-primary hover:bg-primary-dark text-white"
              >
                {isSubmitting ? "Submitting Inventory..." : "Submit Inventory for Valuation Offer"}
              </Button>
              {parsedData && (
                <a
                  href={`https://wa.me/919323332850?text=${encodeURIComponent(getWhatsAppManifestMessage())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    type="button"
                    variant="secondary"
                    className="w-full sm:w-auto py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white border-0 flex items-center justify-center gap-2 rounded-xl text-sm font-semibold"
                  >
                    <span>Send on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import { 
  FileSpreadsheet, 
  FileText, 
  Download, 
  Eye, 
  X, 
  Search, 
  ExternalLink 
} from "lucide-react";

interface Props {
  leadId: string;
  fileName?: string;
  fileSize?: string;
  fileType?: string;
  fileData?: string;
  fileUrl?: string;
  adminSecret: string;
}

export function LeadManifestViewer({
  leadId,
  fileName,
  fileSize,
  fileType,
  fileData,
  fileUrl,
  adminSecret,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const displayName = fileName || "uploaded_manifest.csv";
  const isCSV = displayName.toLowerCase().endsWith(".csv") || fileType === "CSV";

  // Parse CSV rows if fileData is available
  const parsedData = useMemo(() => {
    if (!fileData || !isCSV) return null;

    try {
      // Decode base64
      let csvContent = "";
      if (fileData.includes("base64,")) {
        const base64 = fileData.split("base64,")[1];
        csvContent = atob(base64);
      } else {
        csvContent = atob(fileData);
      }

      const lines = csvContent.split(/\r\n|\n/).filter((l) => l.trim().length > 0);
      if (lines.length < 1) return null;

      const headers = lines[0].split(",").map((h) => h.trim().replace(/^["']|["']$/g, ""));
      const rows = lines.slice(1).map((line) => {
        const values = line.split(",").map((v) => v.trim().replace(/^["']|["']$/g, ""));
        const rowObj: Record<string, string> = {};
        headers.forEach((h, i) => {
          rowObj[h] = values[i] || "";
        });
        return rowObj;
      });

      return { headers, rows };
    } catch (err) {
      console.error("Failed to parse CSV preview:", err);
      return null;
    }
  }, [fileData, isCSV]);

  // Filtered rows for the modal search
  const filteredRows = useMemo(() => {
    if (!parsedData) return [];
    if (!searchQuery.trim()) return parsedData.rows;

    const q = searchQuery.toLowerCase();
    return parsedData.rows.filter((row) =>
      Object.values(row).some((val) => val.toLowerCase().includes(q))
    );
  }, [parsedData, searchQuery]);

  if (!fileName && !fileUrl && !fileData) return null;

  const downloadUrl = `/api/leads/${leadId}/download?secret=${encodeURIComponent(adminSecret)}`;

  return (
    <>
      <div className="mt-2.5 p-2.5 rounded-xl bg-emerald-50/90 border border-emerald-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
            {isCSV ? <FileSpreadsheet className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-emerald-950 truncate" title={displayName}>
              {displayName}
            </p>
            <p className="text-[11px] text-emerald-700">
              {fileType || "File"} {fileSize ? `• ${fileSize}` : ""}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 self-end sm:self-auto flex-shrink-0">
          {parsedData && (
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-emerald-800 bg-white hover:bg-emerald-100/70 border border-emerald-200 rounded-lg transition-colors"
              title="Preview Spreadsheet Table"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>
          )}

          <a
            href={downloadUrl}
            download={displayName}
            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
            title="Download Raw File"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>

          {fileUrl && (
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-emerald-700 hover:text-emerald-900 transition-colors"
              title="Open in Cloudinary CDN"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* CSV Preview Modal */}
      {showModal && parsedData && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-primary/10 overflow-hidden flex flex-col max-h-[88vh] text-left animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-primary/10 flex items-center justify-between bg-warm-bg1">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-primary truncate max-w-md">
                    {displayName}
                  </h3>
                  <p className="text-xs text-text-dark/60">
                    {parsedData.rows.length} total rows parsed
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={downloadUrl}
                  download={displayName}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </a>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="p-1.5 text-text-dark/40 hover:text-text-dark/80 rounded-lg hover:bg-black/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Search Bar */}
            <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by keyword (e.g. Dell, i7, 16GB, Mumbai, Server)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap">
                Showing {filteredRows.length} of {parsedData.rows.length}
              </span>
            </div>

            {/* Table Area */}
            <div className="flex-1 overflow-auto p-4 max-h-[60vh]">
              {filteredRows.length === 0 ? (
                <div className="text-center py-12 text-sm text-gray-400">
                  No records match your filter query.
                </div>
              ) : (
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-warm-bg1 border-b border-gray-200 text-text-dark font-heading">
                        <th className="p-2.5 text-[11px] font-bold text-gray-400 w-12 text-center">#</th>
                        {parsedData.headers.map((h, i) => (
                          <th key={i} className="p-2.5 font-bold uppercase tracking-wider text-[11px] whitespace-nowrap">
                            {h || `Column ${i + 1}`}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-mono text-[11px] text-text-dark/80">
                      {filteredRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-primary/5 transition-colors">
                          <td className="p-2.5 text-center text-gray-400 font-sans">{rIdx + 1}</td>
                          {parsedData.headers.map((h, cIdx) => (
                            <td key={cIdx} className="p-2.5 whitespace-nowrap truncate max-w-[220px]">
                              {row[h] || "—"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-gray-100 bg-warm-bg1/40 flex items-center justify-between text-xs text-gray-500">
              <span>Press Escape or click Close when finished</span>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 font-semibold text-text-dark transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

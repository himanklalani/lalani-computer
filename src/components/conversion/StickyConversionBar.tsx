"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, X, Wrench, MessageCircle, Building } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function StickyConversionBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar when user scrolls past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine route context and messaging according to ai_instructions.md §13
  const isRepairRoute = pathname?.startsWith("/repair") || pathname?.startsWith("/solutions/repairs");
  const isBuybackRoute = pathname?.startsWith("/buyback") || pathname?.startsWith("/solutions/it-asset-buyback");
  const isServerRoute = pathname?.includes("servers") || pathname?.includes("data-center");
  const isNetworkingRoute = pathname?.includes("networking") || pathname?.includes("wifi");

  let ctaTitle = "Mumbai's Trusted IT Hardware Partner (30+ Years)";
  let ctaSubtitle = "Talk to our senior hardware engineers in Mumbai";
  let whatsAppMessage = "Hi, I found Lalani Computers online. I need help with IT hardware.";
  let actionButtonText = "Request Quotation";
  let actionTargetId = "service-booking";
  let Icon = MessageCircle;

  if (isRepairRoute) {
    ctaTitle = "Need Laptop, Desktop or Enterprise Hardware Repair?";
    ctaSubtitle = "Doorstep pickup in Mumbai MMR • On-site corporate service • 30-Day Warranty";
    whatsAppMessage = "Hi, I need help with an IT hardware repair. Can we discuss a quote?";
    actionButtonText = "Book Repair Service";
    actionTargetId = "service-booking";
    Icon = Wrench;
  } else if (isBuybackRoute) {
    ctaTitle = "Decommissioning Corporate IT Fleets, Servers or UPS?";
    ctaSubtitle = "NIST 800-88 Data Sanitization • On-site logistics • Immediate RTGS Settlement";
    whatsAppMessage = "Hi, we have corporate IT hardware (laptops/servers/UPS) for corporate buyback. Can we discuss a quote?";
    actionButtonText = "Upload Asset Manifest";
    actionTargetId = "manifest-dropzone";
    Icon = Building;
  } else if (isServerRoute) {
    ctaTitle = "Looking for Enterprise Servers & Storage in Mumbai?";
    ctaSubtitle = "Dell PowerEdge & HPE ProLiant in stock • Same-day dispatch";
    whatsAppMessage = "Hi, I am looking for enterprise servers and IT infrastructure support in Mumbai. Can we discuss a quote?";
    actionButtonText = "Request Server RFQ";
  } else if (isNetworkingRoute) {
    ctaTitle = "Planning an Enterprise Network or Wi-Fi 6 Upgrade?";
    ctaSubtitle = "Cisco, Aruba & Fortinet authorized solutions in Mumbai";
    whatsAppMessage = "Hi, I am looking for an enterprise network and Wi-Fi setup. Can we discuss a quote?";
    actionButtonText = "Consult Network Lead";
  }

  const scrollToTarget = () => {
    const el = document.getElementById(actionTargetId) || document.getElementById("manifest-dropzone") || document.getElementById("service-booking") || document.getElementById("asset-inquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      window.location.href = isRepairRoute ? "/repair#service-booking" : "/buyback#manifest-dropzone";
    }
  };

  if (!isVisible || isDismissed) return null;

  return (
    <aside
      aria-label="Quick contact and valuation bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-primary-dark/95 backdrop-blur-md text-white border-t border-primary-light/30 shadow-[0_-8px_30px_rgba(0,0,0,0.3)] px-4 py-3 sm:py-3.5 transition-transform duration-300 transform translate-y-0"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left Side: Contextual Hook */}
        <div className="flex items-center gap-3 w-full md:w-auto text-left">
          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-primary-light/20 border border-white/20 items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-primary-light" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-heading font-bold text-white leading-tight">
              {ctaTitle}
            </h4>
            <p className="text-[11px] sm:text-xs text-beige/80 mt-0.5 line-clamp-1">
              {ctaSubtitle}
            </p>
          </div>
        </div>

        {/* Right Side: Quick Conversion CTAs */}
        <div className="flex items-center justify-between sm:justify-end gap-2.5 w-full md:w-auto">
          <button
            type="button"
            onClick={scrollToTarget}
            className="text-xs font-semibold px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center gap-1.5"
          >
            <span>{actionButtonText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={`https://wa.me/919323332850?text=${encodeURIComponent(whatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial"
          >
            <Button
              size="sm"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white border-0 text-xs px-3.5 py-2 flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>WhatsApp Us</span>
            </Button>
          </a>

          <a
            href="tel:+919323332850"
            className="hidden lg:flex items-center gap-1 text-xs text-beige hover:text-white px-2 py-1.5 font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-primary-light" />
            <span>+91 93233 32850</span>
          </a>

          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss banner"
            className="p-1.5 text-white/50 hover:text-white rounded-md hover:bg-white/10 transition-colors ml-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}

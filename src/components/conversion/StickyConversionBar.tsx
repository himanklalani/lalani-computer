"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, X, Wrench, MessageCircle, Building } from "lucide-react";
import { Button } from "@/components/ui/Button";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function StickyConversionBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("sticky-bar-dismissed")) {
      setIsDismissed(true);
    }

    const handleScroll = () => {
      // Show bar when user scrolls past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Broadcast visibility to floating buttons so they don't collide on desktop
  useEffect(() => {
    const active = isVisible && !isDismissed;
    window.dispatchEvent(new CustomEvent("sticky-bar-visibility", { detail: active }));
  }, [isVisible, isDismissed]);

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
      className="fixed bottom-0 left-0 right-0 z-40 bg-primary-dark/95 backdrop-blur-md text-white border-t border-primary-light/30 shadow-[0_-8px_30px_rgba(0,0,0,0.3)] px-3 py-2.5 sm:px-4 sm:py-3.5 transition-transform duration-300 transform translate-y-0"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile View: Integrated Single-Row Action Dock (< md) */}
        <div className="flex md:hidden items-center gap-2 w-full">
          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/919323332850?text=${encodeURIComponent(whatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-10 h-10 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center flex-shrink-0 shadow-md active:scale-95 transition-transform"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
          </a>

          {/* Quick Call */}
          <a
            href="tel:+919323332850"
            aria-label="Call Lalani Computers"
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center flex-shrink-0 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-primary-light" />
          </a>

          {/* Primary Action Button (fills remaining space) */}
          <button
            type="button"
            onClick={scrollToTarget}
            className="flex-1 min-w-0 h-10 px-3 rounded-xl bg-primary hover:bg-primary-dark text-white border border-primary-light/40 font-heading font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
          >
            <span className="truncate">{actionButtonText}</span>
            <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
          </button>

          {/* Dismiss Button */}
          <button
            type="button"
            onClick={() => {
              setIsDismissed(true);
              sessionStorage.setItem("sticky-bar-dismissed", "true");
              window.dispatchEvent(new CustomEvent("sticky-bar-visibility", { detail: false }));
            }}
            aria-label="Dismiss banner"
            className="w-8 h-10 flex items-center justify-center text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop View: Full Contextual Row (>= md) */}
        <div className="hidden md:flex items-center justify-between gap-3 w-full">
          {/* Left Side: Contextual Hook */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-primary-light/20 border border-white/20 items-center justify-center flex-shrink-0 flex">
              <Icon className="w-5 h-5 text-primary-light" />
            </div>
            <div>
              <h4 className="text-sm font-heading font-bold text-white leading-tight">
                {ctaTitle}
              </h4>
              <p className="text-xs text-beige/80 mt-0.5 line-clamp-1">
                {ctaSubtitle}
              </p>
            </div>
          </div>

          {/* Right Side: Quick Conversion CTAs */}
          <div className="flex items-center justify-end gap-2.5">
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
            >
              <Button
                size="sm"
                className="bg-[#25D366] hover:bg-[#1EBE5D] text-white border-0 text-xs px-3.5 py-2 flex items-center justify-center gap-1.5 shadow-sm"
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
              onClick={() => {
                setIsDismissed(true);
                sessionStorage.setItem("sticky-bar-dismissed", "true");
                window.dispatchEvent(new CustomEvent("sticky-bar-visibility", { detail: false }));
              }}
              aria-label="Dismiss banner"
              className="p-1.5 text-white/50 hover:text-white rounded-md hover:bg-white/10 transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

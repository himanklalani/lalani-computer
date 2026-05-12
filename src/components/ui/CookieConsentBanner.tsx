"use client";

import React, { useState } from "react";
import { useCookieConsent } from "@/components/providers/CookieConsentProvider";
import { loaderState } from "@/lib/loaderState";
import { Shield, X, ChevronDown, ChevronUp } from "lucide-react";

export function CookieConsentBanner() {
  const { isLoaded, consent, acceptAll, acceptEssential, updateConsent } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const triggerDelay = () => {
      timeout = setTimeout(() => setShowBanner(true), 2200);
    };

    if (!loaderState.isLoading) {
      triggerDelay();
    }

    const unsubscribe = loaderState.subscribe((loading) => {
      if (!loading) triggerDelay();
    });

    return () => {
      unsubscribe();
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  // Don't show if we haven't checked localStorage yet, if already responded/dismissed, or if we haven't hit our 2s delay
  if (!isLoaded || consent.given || dismissed || !showBanner) return null;

  const handleSaveCustom = () => {
    updateConsent({ analytics: analyticsChecked, marketing: marketingChecked });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-[420px] z-[9999] animate-in fade-in slide-in-from-bottom-12 duration-700 ease-out"
    >
      <div className="bg-white border border-primary/10 rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden">
        
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-primary via-primary/70 to-primary/30" />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-primary tracking-tight">We value your privacy</h2>
                <p className="text-xs text-text-dark/70 mt-0.5">lalanicomputers.com</p>
              </div>
            </div>
            <button
              onClick={() => { acceptEssential(); setDismissed(true); }}
              className="p-1.5 rounded-lg hover:bg-black/5 text-text-dark/40 hover:text-text-dark/70 transition-colors"
              aria-label="Close and accept essential only"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <p className="text-xs text-text-dark/70 leading-relaxed mb-5">
            We use cookies to improve your browsing experience, analyse site traffic, and personalise content.
            You can choose which categories to allow below.
          </p>

          {/* Customise toggle */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1.5 text-xs font-semibold text-primary/70 hover:text-primary transition-colors mb-4"
          >
            {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            {showDetails ? "Hide" : "Customise"} preferences
          </button>

          {/* Expandable details */}
          {showDetails && (
            <div className="space-y-3 mb-5 border border-primary/10 rounded-xl p-4 bg-primary/[0.02]">
              {/* Essential — always on */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-text-dark">Essential</p>
                  <p className="text-[11px] text-text-dark/70 mt-0.5">Required for the site to function. Cannot be disabled.</p>
                </div>
                <div className="w-10 h-5 bg-primary rounded-full flex items-center justify-end pr-0.5 cursor-not-allowed opacity-70">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-text-dark">Analytics</p>
                  <p className="text-[11px] text-text-dark/70 mt-0.5">Helps us understand how visitors use the site.</p>
                </div>
                <button
                  role="switch"
                  aria-checked={analyticsChecked}
                  onClick={() => setAnalyticsChecked(!analyticsChecked)}
                  className={`w-10 h-5 rounded-full flex items-center transition-colors duration-200 px-0.5 ${analyticsChecked ? "bg-primary justify-end" : "bg-gray-200 justify-start"}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-text-dark">Marketing</p>
                  <p className="text-[11px] text-text-dark/70 mt-0.5">Used to show relevant ads and track campaigns.</p>
                </div>
                <button
                  role="switch"
                  aria-checked={marketingChecked}
                  onClick={() => setMarketingChecked(!marketingChecked)}
                  className={`w-10 h-5 rounded-full flex items-center transition-colors duration-200 px-0.5 ${marketingChecked ? "bg-primary justify-end" : "bg-gray-200 justify-start"}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                </button>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-2">
            {showDetails ? (
              <>
                <button
                  onClick={acceptEssential}
                  className="flex-1 py-2.5 text-xs font-semibold border border-primary/20 text-primary/80 rounded-xl hover:bg-primary/5 transition-colors"
                >
                  Essential only
                </button>
                <button
                  onClick={handleSaveCustom}
                  className="flex-1 py-2.5 text-xs font-bold bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Save preferences
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={acceptEssential}
                  className="flex-1 py-2.5 text-xs font-semibold border border-primary/20 text-primary/80 rounded-xl hover:bg-primary/5 transition-colors"
                >
                  Essential only
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 py-2.5 text-xs font-bold bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Accept all
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

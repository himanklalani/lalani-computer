"use client";

import React from "react";
import { useCookieConsent } from "@/components/providers/CookieConsentProvider";
import { ArrowRight } from "lucide-react";

export function CookieSettingsButton() {
  const { resetConsent } = useCookieConsent();

  return (
    <li>
      <button 
        onClick={() => resetConsent()}
        className="text-beige/70 text-sm hover:text-white flex items-center gap-2 group transition-colors duration-300"
      >
        <ArrowRight className="w-3 h-3 text-primary-light opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
        <span className="transform group-hover:translate-x-1 transition-transform duration-300">
          Cookie Preferences
        </span>
      </button>
    </li>
  );
}

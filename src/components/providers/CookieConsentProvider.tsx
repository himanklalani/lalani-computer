"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ConsentCategory = "analytics" | "marketing";

export interface ConsentState {
  given: boolean; // Has the user responded?
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentContextValue {
  isLoaded: boolean;
  consent: ConsentState;
  acceptAll: () => void;
  acceptEssential: () => void;
  updateConsent: (updates: Partial<Pick<ConsentState, ConsentCategory>>) => void;
  resetConsent: () => void;
}

const STORAGE_KEY = "lc_cookie_consent";
const DEFAULT_STATE: ConsentState = { given: false, analytics: false, marketing: false };

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_STATE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setConsent(JSON.parse(stored));
    } catch {}
    setMounted(true);
  }, []);

  const save = (state: ConsentState) => {
    setConsent(state);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  };

  const acceptAll = () => save({ given: true, analytics: true, marketing: true });
  const acceptEssential = () => save({ given: true, analytics: false, marketing: false });
  const updateConsent = (updates: Partial<Pick<ConsentState, ConsentCategory>>) =>
    save({ ...consent, given: true, ...updates });
  const resetConsent = () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
    setConsent(DEFAULT_STATE);
  };

  return (
    <CookieConsentContext.Provider value={{ isLoaded: mounted, consent, acceptAll, acceptEssential, updateConsent, resetConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used inside CookieConsentProvider");
  return ctx;
}

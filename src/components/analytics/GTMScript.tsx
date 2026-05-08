"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import { useCookieConsent } from "@/components/providers/CookieConsentProvider";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function GTMScript() {
  const { consent } = useCookieConsent();
  const [pushed, setPushed] = useState(false);

  // Push consent update to dataLayer whenever it changes
  useEffect(() => {
    if (!consent.given || !GTM_ID) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
      analytics_storage: consent.analytics ? "granted" : "denied",
      ad_storage: consent.marketing ? "granted" : "denied",
      ad_user_data: consent.marketing ? "granted" : "denied",
      ad_personalization: consent.marketing ? "granted" : "denied",
    });
    setPushed(true);
  }, [consent]);

  if (!GTM_ID) return null;

  return (
    <>
      {/* GTM Script — loads once consent is given */}
      {consent.given && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
            `,
          }}
        />
      )}
      {consent.given && (
        <Script
          id="gtm-loader"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        />
      )}

      {/* GTM noscript iframe — only renders if consent given */}
      {consent.given && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      )}
    </>
  );
}

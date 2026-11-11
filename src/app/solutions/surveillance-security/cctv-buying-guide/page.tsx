import React from "react";
import { Metadata } from "next";
import { GuideLayout } from "@/components/ui/GuideLayout";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.lalanicomputers.com/solutions/surveillance-security/cctv-buying-guide' },
  title: 'CCTV & Security Buying Guide | Lalani Computers',
  description: 'How to design a robust IP camera and biometric access control topology for corporate buildings.',
  openGraph: {
    title: 'CCTV & Security Buying Guide | Lalani Computers',
    description: 'How to design a robust IP camera and biometric access control topology for corporate buildings.',
    url: 'https://www.lalanicomputers.com/solutions/surveillance-security/cctv-buying-guide',
    siteName: 'Lalani Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCTV & Security Buying Guide | Lalani Computers',
    description: 'How to design a robust IP camera and biometric access control topology for corporate buildings.',
  },
};

export default function GuidePage() {
  return (
    <GuideLayout
      breadcrumbTopic="CCTV & Security Guide"
      title="CCTV & Security Buying Guide"
      description="Grainy analog footage is useless when you actually need it. Here is how to build a high-resolution, smart IP surveillance network for your corporate facility."
      introTitle="The End of Analog DVRs"
      introParagraphs={[
        "Traditional coaxial-based CCTV systems are dead. They offer poor resolution, zero analytics, and require messy, dedicated cabling. Modern security demands IP (Internet Protocol) cameras that run over standard Ethernet network cables, offering crystal-clear 4K resolution and intelligent AI tracking."
      ]}
      sections={[
        {
          title: "IP Cameras & NVRs",
          intro: "Switching to IP cameras revolutionizes your security posture.",
          bullets: [
            {
              title: "PoE Simplification",
              desc: "Power over Ethernet (PoE) means a single CAT6 cable delivers both data and electricity to the camera. No more bulky power adapters at every camera location."
            },
            {
              title: "Network Video Recorders (NVR)",
              desc: "Instead of a fragile DVR, IP systems use robust NVRs (like those from Hikvision or CP Plus) equipped with specialized surveillance hard drives designed for 24/7 continuous write operations."
            },
            {
              title: "Edge AI",
              desc: "Modern IP cameras can automatically detect line-crossing, recognize license plates, and trigger alarms if someone enters a restricted zone after hours—without requiring a human to watch the screen."
            }
          ]
        },
        {
          title: "Biometric Access Control",
          intro: "Keys can be copied. Passwords can be shared. Biometrics cannot.",
          bullets: [
            {
              title: "Time & Attendance (T&A)",
              desc: "Integrate fingerprint or facial recognition terminals (e.g., eSSL or Matrix) directly into your HR payroll software to automate attendance tracking and eliminate 'buddy punching.'"
            },
            {
              title: "Door Access",
              desc: "Secure server rooms, executive offices, and main entrances with electromagnetic (EM) locks tied to biometric or RFID card readers."
            }
          ]
        },
        {
          title: "Network Isolation & Security",
          intro: "Putting cameras on your main corporate network is a massive security risk.",
          bullets: [
            {
              title: "VLAN Segmentation",
              desc: "Your surveillance system must run on a completely isolated Virtual LAN (VLAN). Even if someone unplugs a camera in the lobby and plugs a laptop into the ethernet cable, they will not be able to access your corporate servers or internet."
            }
          ]
        }
      ]}
      conclusionTitle="See Everything. Secure Everywhere."
      conclusionParagraphs={[
        "A modern surveillance system is a proactive deterrent, not just a reactive recording tool. Secure your premises with enterprise-grade optics and access control."
      ]}
      ctaTitle="Ready to Secure Your Facility?"
      ctaDescription="From a 4-camera office setup to a 200-camera warehouse topology, our architects can design and deploy a flawless security network."
      ctaButtonText="Book a Security Audit"
      ctaWhatsAppMessage="Hi Lalani Computers, I need to discuss a CCTV and Biometric access control setup. Can we schedule a site visit?"
    />
  );
}

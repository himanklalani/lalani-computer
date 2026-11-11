import React from "react";
import { Metadata } from "next";
import { GuideLayout } from "@/components/ui/GuideLayout";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.lalanicomputers.com/solutions/networking-wifi/wifi-setup-guide' },
  title: 'Enterprise Wi-Fi Setup Guide | Lalani Computers',
  description: 'Step-by-step guide to deploying secure, seamless, and high-density wireless networks using enterprise access points.',
  openGraph: {
    title: 'Enterprise Wi-Fi Setup Guide | Lalani Computers',
    description: 'Step-by-step guide to deploying secure, seamless, and high-density wireless networks using enterprise access points.',
    url: 'https://www.lalanicomputers.com/solutions/networking-wifi/wifi-setup-guide',
    siteName: 'Lalani Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Wi-Fi Setup Guide | Lalani Computers',
    description: 'Step-by-step guide to deploying secure, seamless, and high-density wireless networks using enterprise access points.',
  },
};

export default function GuidePage() {
  return (
    <GuideLayout
      breadcrumbTopic="Wi-Fi Setup Guide"
      title="Enterprise Wi-Fi Setup Guide"
      description="Dead zones, dropped connections, and employees constantly asking for the Wi-Fi password. Here is how to engineer a flawless, invisible wireless network."
      introTitle="The Consumer Router Myth"
      introParagraphs={[
        "Buying the most expensive 'gaming router' from a retail store and dropping it in the middle of a 5,000 sq ft office is a recipe for disaster. Consumer routers are designed to connect 10-15 devices in a house. When 50 employees walk in with laptops, smartphones, and smartwatches, the router gets overwhelmed, overheats, and drops packets."
      ]}
      sections={[
        {
          title: "Distributed Access Points (APs)",
          intro: "Enterprise Wi-Fi relies on an ecosystem of access points acting as one unified brain.",
          bullets: [
            {
              title: "Ceiling Mounts",
              desc: "Deploy PoE-powered APs (like Ubiquiti UniFi, Aruba, or Ruckus) on the ceiling. This provides a clear line of sight to devices, eliminating interference from desks and filing cabinets."
            },
            {
              title: "Seamless Roaming",
              desc: "With a managed controller, employees can walk from the conference room to the cafeteria while on a VoIP call, and their device will seamlessly hand off to the closest AP without a microsecond of disconnection."
            }
          ]
        },
        {
          title: "High-Density Engineering",
          intro: "It's not just about coverage; it's about capacity.",
          bullets: [
            {
              title: "Wi-Fi 6 (802.11ax)",
              desc: "Standardize on Wi-Fi 6. It isn't just faster; it uses OFDMA technology to efficiently pack data for multiple devices into a single transmission, drastically reducing latency in crowded offices."
            },
            {
              title: "Heatmapping",
              desc: "Stop guessing where to put APs. Professional deployments begin with a predictive RF heatmap to analyze wall density (glass vs. concrete) and perfectly position APs to eliminate dead zones."
            }
          ]
        },
        {
          title: "Secure Guest Networks",
          intro: "Never give visitors the password to your corporate network.",
          bullets: [
            {
              title: "Captive Portals",
              desc: "Set up a dedicated Guest SSID. When visitors connect, they are greeted by a branded splash page (Captive Portal) requiring an email address or SMS OTP to access the internet."
            },
            {
              title: "Client Isolation",
              desc: "Ensure 'Client Isolation' is turned on for the guest network. This prevents a visitor's infected laptop from scanning and spreading malware to other devices on the network."
            }
          ]
        }
      ]}
      conclusionTitle="Unleash Your Workforce"
      conclusionParagraphs={[
        "A properly engineered Wi-Fi network feels like magic. It's fast, everywhere, and completely secure."
      ]}
      ctaTitle="Ready for Flawless Wi-Fi?"
      ctaDescription="Send us your floor plan. Our wireless architects will run a predictive heatmap and provide a customized AP layout and quotation."
      ctaButtonText="Request a Heatmap Survey"
      ctaWhatsAppMessage="Hi Lalani Computers, we need to upgrade our office Wi-Fi. Can we arrange a heatmapping and consultation?"
    />
  );
}

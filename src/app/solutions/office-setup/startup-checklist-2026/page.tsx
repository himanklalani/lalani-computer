import React from "react";
import { Metadata } from "next";
import { GuideLayout } from "@/components/ui/GuideLayout";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.lalanicomputers.com/solutions/office-setup/startup-checklist-2026' },
  title: '2026 Startup IT Checklist | Lalani Computers',
  description: 'A comprehensive IT checklist for new offices and startups in Mumbai, covering networking, laptops, and basic security.',
  openGraph: {
    title: '2026 Startup IT Checklist | Lalani Computers',
    description: 'A comprehensive IT checklist for new offices and startups in Mumbai, covering networking, laptops, and basic security.',
    url: 'https://www.lalanicomputers.com/solutions/office-setup/startup-checklist-2026',
    siteName: 'Lalani Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 Startup IT Checklist | Lalani Computers',
    description: 'A comprehensive IT checklist for new offices and startups in Mumbai, covering networking, laptops, and basic security.',
  },
};

export default function GuidePage() {
  return (
    <GuideLayout
      breadcrumbTopic="Startup Checklist"
      title="2026 Startup IT Checklist"
      description="Don't let tech bottlenecks ruin your launch. Here is the ultimate IT blueprint for modern Indian startups and new office setups."
      introTitle="The 90-Day Trap for New Offices"
      introParagraphs={[
        "Most startups try to save money by purchasing consumer-grade Wi-Fi routers and basic laptops from retail stores. Within 90 days, the cracks start to show: Wi-Fi drops during crucial investor calls, network printers refuse to connect, and unmanaged laptops become security liabilities.",
        "Setting up your corporate IT infrastructure correctly from Day 1 isn't just about speed—it's about removing friction so your team can actually work."
      ]}
      sections={[
        {
          title: "The Network Backbone",
          intro: "Your network is the nervous system of your startup. If it goes down, work stops. Don't skimp here.",
          bullets: [
            {
              title: "Enterprise Access Points",
              desc: "Ditch the consumer router. Use ceiling-mounted APs (like Ubiquiti UniFi or Aruba) that can handle 50+ simultaneous active connections per device without dropping packets."
            },
            {
              title: "Structured Cabling",
              desc: "Run CAT6 cables to every workstation. Wi-Fi is great for laptops, but VoIP phones, printers, and heavy workstations should always be hardwired for zero latency."
            },
            {
              title: "Dual-WAN Firewalls",
              desc: "Use a hardware firewall (like Fortinet or Sophos) that automatically switches to a backup internet line if your primary ISP goes down."
            }
          ]
        },
        {
          title: "End-User Hardware",
          intro: "Not all roles need the same machine. Avoid the trap of 'one size fits all.'",
          bullets: [
            {
              title: "Developers & Designers",
              desc: "High-performance custom rigs or enterprise-grade mobile workstations (Dell Precision/HP ZBook) with dedicated GPUs and 32GB+ RAM."
            },
            {
              title: "Sales & Management",
              desc: "Ultrabooks with extreme battery life, strong webcams, and MIL-SPEC durability for travel (Lenovo ThinkPad/Dell Latitude)."
            },
            {
              title: "Standard Desk Workers",
              desc: "Space-saving Tiny PCs or All-in-Ones (AIO) that keep the desk looking incredibly clean while offering reliable performance."
            }
          ]
        },
        {
          title: "Data & Security",
          intro: "Data loss isn't just a corporate problem; startups are the most vulnerable to ransomware.",
          bullets: [
            {
              title: "Centralized NAS",
              desc: "A local Network Attached Storage (NAS) drive acts as a rapid local backup for large design files or video projects that take too long to sync to the cloud."
            },
            {
              title: "Endpoint Security",
              desc: "Managed antivirus is non-negotiable. If a remote employee clicks a phishing link, you need software that isolates their machine instantly."
            }
          ]
        }
      ]}
      conclusionTitle="Stop Guessing. Start Building."
      conclusionParagraphs={[
        "You have a business to build. Don't waste time figuring out subnet masks and RAM compatibility. Let the experts handle the tech while you focus on growth."
      ]}
      ctaTitle="Launch Without the Tech Headaches"
      ctaDescription="Tell us your headcount and floor plan. We'll design a bulletproof IT setup and deliver a transparent Bill of Materials (BOM) within hours."
      ctaButtonText="Get Your Free Setup Plan"
      ctaWhatsAppMessage="Hi Lalani Computers, we are setting up a new office/startup. Can you help us with an IT infrastructure quote?"
    />
  );
}

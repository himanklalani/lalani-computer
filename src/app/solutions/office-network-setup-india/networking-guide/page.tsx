import React from "react";
import { Metadata } from "next";
import { GuideLayout } from "@/components/ui/GuideLayout";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.lalanicomputers.com/solutions/office-network-setup-india/networking-guide' },
  title: 'Office Networking Guide 2026 | Lalani Computers',
  description: 'Best practices for setting up secure, high-speed wired and wireless networks for modern Indian offices.',
  openGraph: {
    title: 'Office Networking Guide 2026 | Lalani Computers',
    description: 'Best practices for setting up secure, high-speed wired and wireless networks for modern Indian offices.',
    url: 'https://www.lalanicomputers.com/solutions/office-network-setup-india/networking-guide',
    siteName: 'Lalani Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office Networking Guide 2026 | Lalani Computers',
    description: 'Best practices for setting up secure, high-speed wired and wireless networks for modern Indian offices.',
  },
};

export default function GuidePage() {
  return (
    <GuideLayout
      breadcrumbTopic="Networking Guide"
      title="Office Networking Guide 2026"
      description="Dropped VoIP calls and laggy video conferences are destroying your team's productivity. Here is how to build an enterprise-grade network that never flinches."
      introTitle="The Hidden Cost of Bad Cabling"
      introParagraphs={[
        "Most network issues don't stem from the internet provider; they stem from the physical layer inside your office. Cheap, uncertified ethernet cables crammed behind drywall or run parallel to electrical lines suffer from severe electromagnetic interference (EMI). The result? Packet loss, dropped Teams calls, and agonizingly slow file transfers.",
        "A professional network starts at the walls."
      ]}
      sections={[
        {
          title: "Structured Cabling (The Right Way)",
          intro: "Wireless is convenient, but copper is king for reliability.",
          bullets: [
            {
              title: "CAT6 & CAT6A",
              desc: "Never use CAT5e for a modern office. Standardize on pure copper CAT6 for gigabit speeds, or CAT6A if you anticipate 10Gbps requirements for video editing workstations."
            },
            {
              title: "Patch Panels",
              desc: "Do not just plug raw cables directly into a switch. Terminate all wall drops into a beautifully managed patch panel in your server rack. This makes tracing dead ports and managing moves/adds/changes infinitely easier."
            }
          ]
        },
        {
          title: "The Switching Fabric",
          intro: "Unmanaged 'dumb' switches are a security risk and impossible to troubleshoot.",
          bullets: [
            {
              title: "Managed PoE+ Switches",
              desc: "Invest in Layer 2 or Layer 3 managed switches (like Cisco, Aruba, or Ubiquiti). They allow you to segment your network using VLANs (e.g., keeping Guest Wi-Fi completely isolated from Corporate Servers)."
            },
            {
              title: "Power over Ethernet (PoE+)",
              desc: "Ensure your switches can deliver power over the ethernet cable. This is mandatory for running ceiling-mounted Wi-Fi Access Points, IP security cameras, and VoIP phones without needing messy power adapters everywhere."
            }
          ]
        },
        {
          title: "The Perimeter Defense (Firewalls)",
          intro: "Your ISP router is not a firewall. It is an open door to the internet.",
          bullets: [
            {
              title: "Next-Gen Firewalls (NGFW)",
              desc: "Deploy a hardware firewall (like Fortinet FortiGate or Sophos XGS). These don't just block ports; they perform Deep Packet Inspection (DPI) to catch malware hidden inside encrypted HTTPS traffic before it reaches your employees' laptops."
            },
            {
              title: "SD-WAN & Failover",
              desc: "Connect two different internet providers to your firewall. If the primary line drops, the firewall automatically fails over to the backup line in milliseconds, keeping your office online."
            }
          ]
        }
      ]}
      conclusionTitle="Build a Network You Don't Have to Think About"
      conclusionParagraphs={[
        "A properly engineered network should be invisible. It should just work, rapidly and securely, 24/7."
      ]}
      ctaTitle="Tired of Network Drops?"
      ctaDescription="Whether you need fresh structured cabling for a new office or an upgrade to your existing switches and firewalls, we can help."
      ctaButtonText="Book a Network Audit"
      ctaWhatsAppMessage="Hi Lalani Computers, I'm facing network issues / setting up a new office network. Can we schedule an audit?"
    />
  );
}

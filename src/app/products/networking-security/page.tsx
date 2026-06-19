import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Wifi, Shield, Lock, Router } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Networking & Security Hardware | Cisco, Fortinet, Hikvision Mumbai",
  description: "Enterprise networking gear, Wi-Fi access points, hardware firewalls, and corporate CCTV surveillance systems supplied and installed across Mumbai.",
};

const networkTypes = [
  {
    name: "Enterprise Networking",
    icon: <Router className="w-6 h-6" />,
    features: ["Managed & Unmanaged PoE Switches", "High-throughput Enterprise Routers", "SD-WAN solutions for branch offices", "Structured Cat6/Fiber Cabling"],
    brands: "Cisco, Juniper, Aruba, Netgear",
  },
  {
    name: "Hardware Firewalls (UTM)",
    icon: <Shield className="w-6 h-6" />,
    features: ["Next-Generation Firewalls (NGFW)", "Intrusion Prevention Systems (IPS)", "Deep Packet Inspection", "Secure VPN for remote workers"],
    brands: "Fortinet, SonicWall, Sophos, Palo Alto",
  },
  {
    name: "Corporate Wi-Fi Setup",
    icon: <Wifi className="w-6 h-6" />,
    features: ["High-density Access Points (Wi-Fi 6/6E)", "Seamless roaming across office floors", "Guest network isolation", "Cloud-managed network controllers"],
    brands: "Ubiquiti UniFi, Cisco Meraki, Aruba",
  },
  {
    name: "CCTV & Surveillance",
    icon: <Lock className="w-6 h-6" />,
    features: ["High-definition IP Dome/Bullet Cameras", "Network Video Recorders (NVR) with 90-day retention", "PTZ cameras for warehouses", "Biometric & RFID access control"],
    brands: "Hikvision, CP Plus, Dahua",
  },
];

const advantages = [
  "End-to-end network design and site surveys",
  "Professional structured cabling and rack dressing",
  "Firmware updates and security patch management",
  "Authorized dealer warranties on all networking gear",
  "CCTV audit compliance for BFSI and Healthcare",
  "Local stock availability for rapid network expansion",
];

export default function NetworkingSecurityPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary">Networking & Security</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Secure Connectivity</Typography>
            <Typography variant="h1" className="mb-6">Enterprise Networking & Corporate Security Solutions</Typography>
            <Typography variant="lead">
              A fast business needs a reliable network. We supply, configure, and install everything from core data center switches and perimeter firewalls to office-wide Wi-Fi and HD surveillance systems.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Request a Network Audit</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Our Networking Portfolio</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            Build a resilient IT backbone with top-tier global brands, delivered and installed by our certified engineers.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {networkTypes.map((type, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div className="bg-warm-bg1 rounded-2xl p-8 border border-primary/10 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                    {type.icon}
                  </div>
                  <Typography variant="h3">{type.name}</Typography>
                </div>
                <div className="bg-white rounded-xl p-5 border border-primary/5 mb-5 flex-grow">
                  <ul className="space-y-2">
                    {type.features.map((feature, j) => (
                      <li key={j} className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm font-medium text-primary">Top Brands: <span className="text-text-dark/80 font-normal">{type.brands}</span></p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section variant="dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-white text-center mb-8">Why Trust Lalani with Your Network?</Typography>
            <Typography variant="lead" className="text-center text-beige/70 mb-12">
              Networking isn't just plugging in cables. We ensure bottleneck-free data flow and impenetrable perimeter security.
            </Typography>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advantages.map((point, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors h-full">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <Typography variant="body" className="text-beige/90">{point}</Typography>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="light" className="border-t border-primary/10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="h2" className="mb-4">Setting up a New Office?</Typography>
            <Typography variant="lead" className="mb-8">
              Let us handle the structured cabling, server rack installation, and Wi-Fi deployment from day one.
            </Typography>
            <Link href="/solutions"><Button size="lg">Explore Turnkey Solutions</Button></Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

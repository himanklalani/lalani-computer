import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Wifi, ShieldCheck, Cable } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Networking & Wi-Fi Design Mumbai | Lalani Computers",
  description: "Corporate routing, switching, seamless Wi-Fi coverage, and secure hardware firewall installations for large facilities.",
};

const deliverables = [
  "High-density Enterprise Access Points (Wi-Fi 6/6E)",
  "Managed core and edge switches (PoE+)",
  "Next-generation Hardware Firewalls (UTM)",
  "Structured Cat6/Cat6A cabling and rack dressing",
  "VLAN segmentation and load balancing"
];

export default function NetworkingWifiPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <span>/</span>
          <span className="text-primary">Networking & Wi-Fi</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Connectivity</Typography>
            <Typography variant="h1" className="mb-6">Enterprise Networking & Wi-Fi</Typography>
            <Typography variant="lead">
              Eliminate dead zones and bottlenecks. We design and install high-performance, secure networks for multi-floor offices, manufacturing plants, and campuses.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Request Network Audit</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <FadeIn direction="left">
              <Typography variant="h2" className="mb-6">Network Architecture</Typography>
              <Typography variant="body" className="mb-8 text-text-dark/80">
                A robust business relies on a network that never drops. We use industry-leading hardware to build backbones that scale with your team.
              </Typography>
              <ul className="space-y-4">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <Typography variant="body" className="font-medium">{item}</Typography>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <div className="flex-1 w-full bg-warm-bg1 p-8 rounded-3xl border border-primary/10 shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
            <FadeIn direction="right" className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Wifi className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Wireless Coverage</Typography>
                  <Link href="/products/networking-security" className="text-primary text-sm font-semibold hover:underline">Explore APs →</Link>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Cable className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Switches & Routing</Typography>
                  <Link href="/products/networking-security" className="text-primary text-sm font-semibold hover:underline">Explore Hardware →</Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Perimeter Defense</Typography>
                  <Typography variant="small" className="text-text-dark/70">Hardware Firewalls & VPNs.</Typography>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}

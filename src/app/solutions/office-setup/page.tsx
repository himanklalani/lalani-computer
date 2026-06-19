import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Monitor, Network, Shield } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Office IT Setup & Procurement | Lalani Computers Mumbai",
  description: "End-to-end IT hardware procurement and network infrastructure planning for new corporate offices, startups, and branches in Mumbai.",
};

const deliverables = [
  "End-to-end hardware procurement (Laptops, Desktops, Servers)",
  "Network & infrastructure planning and cabling",
  "Ready-to-use workstations with pre-installed OS",
  "Conference room AV and smart boards",
  "Power backup and UPS systems"
];

export default function OfficeSetupPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <span>/</span>
          <span className="text-primary">Office IT Setup</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Turnkey Deployment</Typography>
            <Typography variant="h1" className="mb-6">Complete Office IT Setup</Typography>
            <Typography variant="lead">
              Moving to a new office or expanding your startup? We handle the entire IT infrastructure from bare walls to fully functioning workstations.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Get a Custom Quote</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <FadeIn direction="left">
              <Typography variant="h2" className="mb-6">What's Included</Typography>
              <Typography variant="body" className="mb-8 text-text-dark/80">
                Our complete office IT setup is designed for SMEs, startups, and expanding corporate teams who need reliable hardware delivered and installed quickly.
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
                  <Monitor className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Hardware Ready</Typography>
                  <Link href="/products/computing" className="text-primary text-sm font-semibold hover:underline">Explore Workstations →</Link>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Network className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Wired for Speed</Typography>
                  <Link href="/products/networking-security" className="text-primary text-sm font-semibold hover:underline">Explore Networking →</Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Secure by Design</Typography>
                  <Link href="/products/software" className="text-primary text-sm font-semibold hover:underline">Explore Security →</Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}

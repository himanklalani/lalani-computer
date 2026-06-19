import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Headphones, ShieldAlert, Wrench } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate IT AMC & Support Services Mumbai | Lalani Computers",
  description: "Comprehensive Annual Maintenance Contracts (AMC), preventative maintenance, and on-site IT troubleshooting for corporate teams in Mumbai.",
};

const deliverables = [
  "Preventative maintenance to stop issues before they happen",
  "Fast on-site troubleshooting across Mumbai",
  "Dedicated account managers for single-point contact",
  "Hardware replacements and warranty coordination",
  "Software update and patch management"
];

export default function AMCSupportPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <span>/</span>
          <span className="text-primary">AMC & IT Support</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Zero Downtime</Typography>
            <Typography variant="h1" className="mb-6">Annual Maintenance & Support</Typography>
            <Typography variant="lead">
              Keep your corporate team running smoothly with our dedicated AMC services. We handle the IT headaches so you can focus on your business.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Request an AMC Quote</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <FadeIn direction="left">
              <Typography variant="h2" className="mb-6">What We Cover</Typography>
              <Typography variant="body" className="mb-8 text-text-dark/80">
                Our AMC packages are tailored for corporate environments. Whether you have 20 or 2000 users, we scale our support to match your exact needs.
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
                  <ShieldAlert className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Preventative Care</Typography>
                  <Typography variant="small" className="text-text-dark/70">Proactive checks to ensure maximum uptime.</Typography>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Wrench className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Rapid Repair</Typography>
                  <Typography variant="small" className="text-text-dark/70">On-site engineers dispatched quickly.</Typography>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Headphones className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Dedicated Support</Typography>
                  <Typography variant="small" className="text-text-dark/70">Direct line to a familiar technical manager.</Typography>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}

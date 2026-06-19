import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Server, Database, Thermometer } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Center & Server Room Refresh Mumbai | Lalani Computers",
  description: "Legacy system upgrades, tower and rack server deployments, NAS/SAN storage, and server room optimization for corporate clients.",
};

const deliverables = [
  "Enterprise Tower & Rack Server deployments (Dell/HPE)",
  "NAS/SAN centralized storage arrays",
  "LTO tape backup and disaster recovery solutions",
  "Precision cooling recommendations and UPS integration",
  "Server rack organization and cable management"
];

export default function DataCenterPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <span>/</span>
          <span className="text-primary">Data Center Refresh</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Core Infrastructure</Typography>
            <Typography variant="h1" className="mb-6">Data Center & Server Room Refresh</Typography>
            <Typography variant="lead">
              Modernize your on-premise infrastructure. We handle capacity planning, hardware migration, and server room optimization for legacy system upgrades.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Consult Our Server Experts</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <FadeIn direction="left">
              <Typography variant="h2" className="mb-6">Infrastructure Upgrades</Typography>
              <Typography variant="body" className="mb-8 text-text-dark/80">
                A well-maintained server room is the heart of your business operations. We ensure your data is processed faster, stored securely, and cooled efficiently.
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
                  <Server className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Compute Power</Typography>
                  <Link href="/products/servers" className="text-primary text-sm font-semibold hover:underline">Explore Servers →</Link>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Database className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Data Storage</Typography>
                  <Link href="/products/servers" className="text-primary text-sm font-semibold hover:underline">Explore Storage →</Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Thermometer className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Environmental Control</Typography>
                  <Typography variant="small" className="text-text-dark/70">Cooling & Smart Power Management.</Typography>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}

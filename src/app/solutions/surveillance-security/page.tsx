import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Camera, Fingerprint, Activity } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Surveillance & Security Infrastructure | Lalani Computers",
  description: "End-to-end CCTV, NVR, and biometric access control installations for offices, schools, and hospitals in Mumbai.",
};

const deliverables = [
  "High-definition IP CCTV camera installations",
  "Scalable NVR & DVR storage solutions (90+ day retention)",
  "Biometric and RFID access control systems",
  "Video door phones and intercoms",
  "Remote monitoring apps and control room setups"
];

export default function SurveillanceSecurityPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <span>/</span>
          <span className="text-primary">Surveillance & Security</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Facility Security</Typography>
            <Typography variant="h1" className="mb-6">Surveillance & Access Control</Typography>
            <Typography variant="lead">
              Protect your premises, assets, and personnel with enterprise-grade surveillance networks and access control systems designed for complex facilities.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Schedule a Site Survey</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <FadeIn direction="left">
              <Typography variant="h2" className="mb-6">What We Deploy</Typography>
              <Typography variant="body" className="mb-8 text-text-dark/80">
                From a 4-camera office setup to a 200-camera multi-building campus network, we handle the design, wiring, hardware, and long-term maintenance.
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
                  <Camera className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">CCTV Systems</Typography>
                  <Link href="/products/networking-security" className="text-primary text-sm font-semibold hover:underline">View Cameras →</Link>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Fingerprint className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Access Control</Typography>
                  <Link href="/products/networking-security" className="text-primary text-sm font-semibold hover:underline">View Biometrics →</Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Activity className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Active Monitoring</Typography>
                  <Typography variant="small" className="text-text-dark/70">Remote feeds and automated alerts.</Typography>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}

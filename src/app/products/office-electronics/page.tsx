import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Printer, Tv, PhoneCall, MonitorPlay } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Printers & Office Electronics Mumbai | Lalani Computers",
  description: "Procure enterprise laser printers, office projectors, EPABX telecom, and video conferencing systems for your corporate office in Mumbai.",
};

const electronicTypes = [
  {
    name: "Enterprise Printers & Copiers",
    icon: <Printer className="w-6 h-6" />,
    features: ["High-volume network laser printers", "Multifunction MFDs (Print, Scan, Copy)", "Secure badge-release printing", "Managed Print Services (MPS) ready"],
    brands: "HP, Canon, Epson, Brother",
  },
  {
    name: "Projectors & Displays",
    icon: <MonitorPlay className="w-6 h-6" />,
    features: ["Ultra-short throw projectors for tight spaces", "High-lumen laser projectors for auditoriums", "Large Format Displays (LFD) for lobbies", "Interactive whiteboards for training"],
    brands: "Epson, BenQ, Sony, Samsung",
  },
  {
    name: "Video Conferencing",
    icon: <Tv className="w-6 h-6" />,
    features: ["4K PTZ cameras with auto-framing", "Noise-cancelling boardroom microphones", "Zoom & Microsoft Teams certified rooms", "Wireless presentation systems"],
    brands: "Logitech, Poly, Cisco Webex",
  },
  {
    name: "Telecom & EPABX",
    icon: <PhoneCall className="w-6 h-6" />,
    features: ["IP-PBX telephony systems", "Corporate desk IP phones", "Call recording and IVR routing", "Headsets for BPO/KPO environments"],
    brands: "Matrix, Panasonic, Grandstream, Jabra",
  },
];

const advantages = [
  "Complete boardroom A/V integration available",
  "Printer AMC including toner and drum replacement",
  "On-site demonstration for high-end conferencing gear",
  "Authorized partner warranties and support",
  "Seamless integration with your existing IT network",
  "Scalable telecom solutions for growing teams",
];

export default function OfficeElectronicsPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary">Office Electronics</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Smart Office Tech</Typography>
            <Typography variant="h1" className="mb-6">Printers, AV & Telecommunications</Typography>
            <Typography variant="lead">
              Modernize your workspace. We provide the essential electronics that keep your office running—from heavy-duty network copiers to immersive boardroom conferencing systems.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Get an Equipment Quote</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Our Office Electronics Portfolio</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            Everything your teams need to communicate, present, and produce documents efficiently.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {electronicTypes.map((type, i) => (
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
            <Typography variant="h2" className="text-white text-center mb-8">Why Choose Lalani Computers?</Typography>
            <Typography variant="lead" className="text-center text-beige/70 mb-12">
              We go beyond the box. We install, calibrate, and maintain your office electronics to ensure zero workflow disruption.
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
    </>
  );
}

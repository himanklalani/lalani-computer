import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Battery, Keyboard, Cable, Headphones } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate IT Peripherals & UPS Power Backup | Mumbai",
  description: "Bulk procurement for commercial UPS systems, enterprise power backup, and office IT peripherals including keyboards, headsets, and structured cabling in Mumbai.",
};

const peripheralTypes = [
  {
    name: "Enterprise Power & UPS",
    icon: <Battery className="w-6 h-6" />,
    features: ["Online UPS systems (1KVA to 20KVA+)", "Server rack mountable battery backups", "Surge protectors and PDUs", "Automatic Voltage Regulators (AVR)"],
    brands: "APC by Schneider Electric, Microtek, Luminous",
  },
  {
    name: "Office Accessories",
    icon: <Keyboard className="w-6 h-6" />,
    features: ["Ergonomic wireless keyboards and mice", "High-res webcams for conferencing", "Laptop docking stations and hubs", "Privacy screens and mounts"],
    brands: "Logitech, Dell, HP, Lenovo",
  },
  {
    name: "Commercial Headsets",
    icon: <Headphones className="w-6 h-6" />,
    features: ["Noise-cancelling headsets for BPO/KPO", "Wireless DECT headsets for mobility", "UC certified for Microsoft Teams", "Durable build for 24/7 call centers"],
    brands: "Jabra, Plantronics (Poly), Sennheiser",
  },
  {
    name: "Cabling & Connectivity",
    icon: <Cable className="w-6 h-6" />,
    features: ["Cat6/Cat6A/Fiber optic patch cords", "HDMI, DisplayPort, and USB-C adapters", "Server rack cable management kits", "Heavy-duty power cables"],
    brands: "D-Link, CommScope, Belkin",
  },
];

const advantages = [
  "Immediate availability of bulk accessory orders",
  "Genuine OEM parts to protect your hardware investments",
  "Expert UPS sizing based on actual IT load and backup required",
  "AMC options for high-capacity enterprise UPS systems",
  "Seamless integration with your workstation deployments",
  "One-stop procurement for new office setups",
];

export default function PeripheralsPowerPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary">Peripherals & Power</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Essentials & Backup</Typography>
            <Typography variant="h1" className="mb-6">Corporate IT Peripherals & Power Backup</Typography>
            <Typography variant="lead">
              The crucial components that keep your operations running. From ergonomic desk accessories that boost productivity to robust UPS systems that protect your servers from power fluctuations.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Request Bulk Accessories</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Peripherals & Power Portfolio</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            High-quality additions to complete your corporate IT infrastructure.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {peripheralTypes.map((type, i) => (
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
            <Typography variant="h2" className="text-white text-center mb-8">Why Trust Lalani for Essentials?</Typography>
            <Typography variant="lead" className="text-center text-beige/70 mb-12">
              We ensure your peripherals match the quality of your core hardware, and your power systems are properly sized for your critical loads.
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

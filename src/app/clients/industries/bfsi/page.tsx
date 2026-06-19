import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Shield, Server, Monitor, Wifi, Lock, HardDrive } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BFSI IT & Secure Networking Solutions | Lalani Computers",
  description: "Turnkey IT setups, secure endpoint deployments, and high-availability server racks for the BFSI sector. Reliable networking and AMC by Lalani Computers.",
};

const deploymentKits = [
  {
    name: "Branch Teller Station Kit",
    icon: <Monitor className="w-6 h-6" />,
    contents: ["HP/Lenovo Desktop (i5, 16GB RAM)", "22\" Anti-Glare Monitor", "USB Thermal Receipt Printer", "Barcode/QR Scanner", "Surge-Protected UPS (1KVA)", "Keyboard + Mouse + Mousepad"],
    useCase: "Each teller counter gets a pre-configured, ready-to-deploy box. Plug in and start operations on Day 1.",
  },
  {
    name: "Branch Networking Kit",
    icon: <Wifi className="w-6 h-6" />,
    contents: [<span key="1"><Link href="/products/networking-security" className="hover:text-primary transition-colors underline decoration-primary/30">24-Port Managed PoE Switch</Link></span>, "Enterprise Access Point", "Hardware Firewall (UTM)", "Cat6A Patch Cables (Pre-cut)", "Wall-Mount Server Rack (6U)", "Structured Cabling Kit"],
    useCase: "Everything needed to wire up a branch from zero — WAN uplink to last-mile desk drops.",
  },
  {
    name: "Server Room Starter Kit",
    icon: <Server className="w-6 h-6" />,
    contents: [<span key="1"><Link href="/products/servers" className="hover:text-primary transition-colors underline decoration-primary/30">Rack Server (Xeon, 64GB ECC)</Link></span>, "2TB SAS RAID Storage", <span key="2"><Link href="/products/peripherals-power" className="hover:text-primary transition-colors underline decoration-primary/30">Online UPS (3KVA)</Link></span>, "42U Floor-Standing Rack", "Environmental Monitor (Temp/Humidity)", "KVM Console"],
    useCase: "Core banking applications, Active Directory, and local backups — everything in one shipment.",
  },
  {
    name: "Security & Compliance Kit",
    icon: <Lock className="w-6 h-6" />,
    contents: ["IP CCTV Cameras (4x Dome)", "8-Channel NVR with 4TB HDD", "Biometric + RFID Door Controller", "Panic Button System", "Fire-Rated Cable Runs", "90-Day Retention Storage"],
    useCase: "RBI-mandated surveillance and access control for every branch, vault, and ATM lobby.",
  },
];

const compliancePoints = [
  "RBI IT Framework & Cybersecurity Guidelines compliant hardware",
  "Data-at-rest encryption via hardware TPM modules",
  "Endpoint Detection & Response (EDR) pre-installed",
  "VAPT-ready network architecture with segmented VLANs",
  "Audit-trail capable surveillance with tamper-proof storage",
  "ISO 27001 aligned procurement and deployment process",
];

export default function BFSIPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/clients" className="hover:text-primary transition-colors">Clients</Link>
          <span>/</span>
          <span className="text-primary">BFSI</span>
        </div>
      </div>

      {/* Hero */}
      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Industry Expertise</Typography>
            <Typography variant="h1" className="mb-6">Secure IT Infrastructure & Networking Solutions for BFSI</Typography>
            <Typography variant="lead">
              From branch rollouts to data center refreshes — we deliver compliance-grade IT hardware kits that your team can deploy in hours, not weeks.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Get a Branch IT Quote</Button></Link>
              <Link href="/solutions"><Button variant="secondary" size="lg">View Our Process</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Deployment Kits */}
      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Curated Deployment Kits</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            Pre-assembled hardware boxes for every function in a bank branch. Unbox, plug in, and go live.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {deploymentKits.map((kit, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div className="bg-warm-bg1 rounded-2xl p-8 border border-primary/10 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                    {kit.icon}
                  </div>
                  <Typography variant="h3">{kit.name}</Typography>
                </div>
                <div className="bg-white rounded-xl p-5 border border-primary/5 mb-5 flex-grow">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-3">What&apos;s in the Box</p>
                  <ul className="space-y-2">
                    {kit.contents.map((item, j) => (
                      <li key={j} className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-text-dark/70 italic">{kit.useCase}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Compliance */}
      <Section variant="dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-primary-light" />
              <Typography variant="h2" className="text-white text-center">Compliance & Security First</Typography>
            </div>
            <Typography variant="lead" className="text-center text-beige/70 mb-12">
              Every piece of hardware we deploy is pre-configured to meet the strictest financial regulatory standards.
            </Typography>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {compliancePoints.map((point, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <Typography variant="body" className="text-beige/90">{point}</Typography>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="light" className="border-t border-primary/10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="h2" className="mb-4">Ready to Equip Your Next Branch?</Typography>
            <Typography variant="lead" className="mb-8">
              Tell us how many branches and we&apos;ll send you a detailed BOM with pricing within 24 hours.
            </Typography>
            <Link href="/contact"><Button size="lg">Request a Branch IT Quote</Button></Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Headphones, Monitor, Server, Wifi, HardDrive, Shield } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPO / KPO IT Hardware & Deployments | Lalani Computers",
  description: "Mass deployment of thin clients, commercial headsets, and reliable UPS backups for BPOs and KPOs. Turnkey IT setups and comprehensive AMC in Mumbai.",
};

const seatKits = [
  {
    name: "Agent Seat Kit (Voice)",
    icon: <Headphones className="w-6 h-6" />,
    contents: ["Thin Client (Dual-Core, 4GB RAM)", "22\" LED Monitor", "USB Headset (Noise-Cancelling)", "Keyboard + Mouse (Spill-Proof)", "Desktop UPS (600VA)", "Desk Grommet Cable Organizer"],
    useCase: "Each agent seat arrives in a single box. IT team plugs into the desk port, connects to Citrix/VDI, and the agent is taking calls within 15 minutes.",
  },
  {
    name: "Agent Seat Kit (Data / KPO)",
    icon: <Monitor className="w-6 h-6" />,
    contents: ["Desktop PC (i5, 16GB RAM, SSD)", "Dual 24\" Monitors + Stand", "Ergonomic Keyboard + Mouse", "Webcam (1080p, Privacy Shutter)", "Desktop UPS (1KVA)", "Cable Management Kit"],
    useCase: "For knowledge workers handling analytics, legal research, or financial processing — dual screens for productivity, webcam for client calls.",
  },
  {
    name: "Floor Networking Kit (100 Seats)",
    icon: <Wifi className="w-6 h-6" />,
    contents: ["48-Port Managed PoE Switch (2x)", "Wi-Fi 6 Access Points (4x)", "Floor Patch Panel + Cable Manager", "Cat6A Patch Cables (100-pack)", "12U Wall-Mount Rack", "Structured Cabling (Per-Seat Drops)"],
    useCase: "One kit per floor. Handles 100 wired seats + wireless coverage for meeting rooms and break areas. Stacks cleanly for multi-floor deployments.",
  },
  {
    name: "Server & VDI Infrastructure Kit",
    icon: <Server className="w-6 h-6" />,
    contents: ["Hyperconverged Server (Dual Xeon, 512GB)", "NAS Storage (50TB, RAID 6)", "GPU Card for VDI Rendering", "Online UPS (10KVA) + Battery Bank", "42U Rack with Hot/Cold Aisle Kit", "VMware/Citrix Licensing Consultation"],
    useCase: "Centralized virtual desktop infrastructure for 500+ concurrent agents. One server room powers the entire operation.",
  },
  {
    name: "Backup & DR Kit",
    icon: <HardDrive className="w-6 h-6" />,
    contents: ["Backup Server (NAS, 30TB)", "LTO Tape Library (24-Slot)", "Offsite Replication Software", "Cloud Backup Gateway", "Automated Backup Scheduler", "Quarterly DR Drill Support"],
    useCase: "Client data protection is non-negotiable. This kit ensures RPO < 1 hour and RTO < 4 hours for all critical systems.",
  },
  {
    name: "Security & Compliance Kit",
    icon: <Shield className="w-6 h-6" />,
    contents: ["Endpoint Security (500-seat License)", "DLP (Data Loss Prevention) Agent", "USB Port Lockdown Software", "CCTV Cameras (Floor Coverage)", "Biometric Entry Controllers", "Visitor Management System"],
    useCase: "Meet ISO 27001, SOC 2, and client-specific security requirements. USB lockdown prevents data exfiltration from the floor.",
  },
];

export default function BPOPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/clients" className="hover:text-primary transition-colors">Clients</Link>
          <span>/</span>
          <span className="text-primary">BPO / KPO</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Industry Expertise</Typography>
            <Typography variant="h1" className="mb-6">Mass IT Hardware Deployment & Turnkey Setups for BPO / KPO</Typography>
            <Typography variant="lead">
              Mass-deploy 500 to 5,000+ agent seats with pre-configured hardware kits. Each seat arrives in a single box — plug in and go live in minutes.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Get a Bulk Seat Quote</Button></Link>
              <Link href="/solutions"><Button variant="secondary" size="lg">View Our Process</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Per-Seat Deployment Kits</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            Scale-ready hardware packages — order 10 or 10,000 identical kits for perfectly uniform deployments.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {seatKits.map((kit, i) => (
            <FadeIn key={i} delay={i * 0.08} direction="up">
              <div className="bg-warm-bg1 rounded-2xl p-7 border border-primary/10 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                    {kit.icon}
                  </div>
                  <Typography variant="h3" className="text-lg">{kit.name}</Typography>
                </div>
                <div className="bg-white rounded-xl p-4 border border-primary/5 mb-4 flex-grow">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-2">What&apos;s in the Box</p>
                  <ul className="space-y-1.5">
                    {kit.contents.map((item, j) => (
                      <li key={j} className="flex items-start text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-text-dark/70 italic leading-relaxed">{kit.useCase}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section variant="light" className="border-t border-primary/10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="h2" className="mb-4">Scaling Your Contact Center?</Typography>
            <Typography variant="lead" className="mb-8">
              Tell us your seat count and go-live date — we&apos;ll deliver identical, pre-configured kits ready for your IT team to deploy at scale.
            </Typography>
            <Link href="/contact"><Button size="lg">Request a Bulk Seat Quote</Button></Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

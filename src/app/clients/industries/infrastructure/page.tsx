import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, HardHat, Wifi, Camera, Monitor, Radio, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure & Real Estate IT | Site Office & Construction IT Kits",
  description: "Turnkey IT kits for construction sites, sales offices, and real estate campuses. Rugged hardware, P2P wireless links, and CCTV — built to survive dust and weather.",
};

const siteKits = [
  {
    name: "Site Office Starter Kit",
    icon: <Monitor className="w-6 h-6" />,
    contents: ["Rugged Laptop (MIL-STD-810G Rated)", "All-in-One Printer/Scanner/Copier", "4G/5G Failover Router", "Portable UPS (800VA)", "Surge Protector Power Strip", "Dustproof Keyboard + Mouse"],
    useCase: "For project managers at new construction sites where permanent IT infrastructure hasn't been set up yet. Works on generator power.",
  },
  {
    name: "P2P Wireless Bridge Kit",
    icon: <Radio className="w-6 h-6" />,
    contents: ["Point-to-Point Wireless Bridge (2x Units)", "Outdoor Mounting Poles + Brackets", "PoE Injectors + Weatherproof Cables", "Grounding Kit (Lightning Protection)", "Alignment Tool + Signal Meter", "Quick-Deploy Instruction Manual"],
    useCase: "Connect the main office to remote site offices across 1-5 km without trenching fiber. Up and running in under 4 hours.",
  },
  {
    name: "Construction Site CCTV Kit",
    icon: <Camera className="w-6 h-6" />,
    contents: ["Outdoor Bullet Cameras (6x, IP67 Rated)", "8-Channel NVR with 4TB HDD", "Solar-Powered PoE Switch (Optional)", "4G SIM Router for Remote Viewing", "Mounting Poles + Clamps", "Weatherproof Junction Boxes"],
    useCase: "Monitor material theft, worker safety, and progress — remotely viewable from the head office even when the site has no wired internet.",
  },
  {
    name: "Sales Gallery / Experience Center Kit",
    icon: <HardHat className="w-6 h-6" />,
    contents: ["65\" 4K Interactive Display", "Media Player / Mini PC", "Ceiling-Mount Projector + Screen", "Structured Cabling (Floor + Ceiling)", "Wi-Fi 6 Access Point", "Visitor Management Tablet"],
    useCase: "A polished, tech-forward experience for walk-in buyers. Digital walkthroughs, project videos, and seamless Wi-Fi for client presentations.",
  },
  {
    name: "Biometric & Access Control Kit",
    icon: <ShieldCheck className="w-6 h-6" />,
    contents: ["Fingerprint + Face Recognition Terminals (4x)", "Boom Barrier Integration Module", "Attendance Software License", "PoE Switch for Gate Controllers", "Emergency Override Key System", "Cloud Sync Module for HQ Reporting"],
    useCase: "Track contractor and worker attendance across sites. Auto-sync data to your head office for payroll and compliance reporting.",
  },
  {
    name: "Multi-Site Networking Kit",
    icon: <Wifi className="w-6 h-6" />,
    contents: ["Managed Switch (24-Port PoE)", "Outdoor Access Points (3x)", "Site-to-HQ VPN Router", "Cat6 Outdoor-Rated Cable (300m)", "Rack-Mount Patch Panel", "Cable Ties + Conduit + Trunking"],
    useCase: "Full networking backbone for large construction campuses — offices, labour camps, and material yards all on one secure network.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/clients" className="hover:text-primary transition-colors">Clients</Link>
          <span>/</span>
          <span className="text-primary">Infrastructure & Real Estate</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Industry Expertise</Typography>
            <Typography variant="h1" className="mb-6">Infrastructure & Real Estate IT</Typography>
            <Typography variant="lead">
              Rugged, dust-proof IT kits built for construction sites, sales galleries, and multi-site campuses. Engineered to survive harsh conditions and deploy fast.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Get a Site IT Quote</Button></Link>
              <Link href="/solutions"><Button variant="secondary" size="lg">View Our Process</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Site-Ready Deployment Kits</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            Pre-packaged hardware designed for the realities of construction — dust, heat, unstable power, and zero existing infrastructure.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteKits.map((kit, i) => (
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
            <Typography variant="h2" className="mb-4">Setting Up a New Project Site?</Typography>
            <Typography variant="lead" className="mb-8">
              Share your site layout and requirements — we&apos;ll deliver everything in labelled boxes, ready for your site engineer to deploy.
            </Typography>
            <Link href="/contact"><Button size="lg">Request a Site IT Quote</Button></Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

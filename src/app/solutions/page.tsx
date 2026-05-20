import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, ArrowDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turnkey IT Solutions | Networking & Surveillance",
  description: "End-to-end IT infrastructure deployment for corporate offices. From network design and cabling to CCTV installation and Annual Maintenance Contracts (AMC).",
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: "New Office IT Setup",
      useCase: "Branch rollouts, startup offices, and expansions.",
      process: "Assessment → Proposal → Procurement → Deployment → AMC",
      deliverables: ["Workstations & Laptops", "Structured Cabling", "Servers & Racks", "UPS & Power Backup", "Networking Gear (Switches/Routers)"],
    },
    {
      title: "Surveillance & Security Infrastructure",
      useCase: "Warehouses, hospitals, schools, and corporate campuses.",
      process: "Site Survey → Coverage Plan → Installation → Testing → Handover",
      deliverables: ["IP CCTV & NVR/DVR", "Biometric Access Control", "Video Door Phones", "Remote Monitoring Setup"],
    },
    {
      title: "Enterprise Networking & Wi-Fi",
      useCase: "Multi-floor offices, manufacturing plants, and educational institutes.",
      process: "Network Design → Cabling → Hardware Setup → Configuration → Optimization",
      deliverables: ["High-density Access Points", "Managed Switches", "Hardware Firewalls", "Load Balancers"],
    },
    {
      title: "Data Center & Server Room Refresh",
      useCase: "Legacy system upgrades and on-premise cloud infrastructure.",
      process: "Capacity Planning → Migration Strategy → Hardware Swap → Testing",
      deliverables: ["Tower/Rack Servers", "NAS/SAN Storage", "LTO Tape Backup", "Precision Cooling Recommendations"],
    },
  ];

  const stepper = [
    { step: 1, title: "Discovery & Assessment", desc: "We understand your physical space, workforce size, and specific software/hardware requirements." },
    { step: 2, title: "Tailored Proposal", desc: "Our engineers craft a detailed Bill of Materials (BOM) with options for multiple budgets and brands." },
    { step: 3, title: "Rapid Procurement", desc: "Leveraging our massive Mumbai inventory, we source all components immediately." },
    { step: 4, title: "Expert Deployment", desc: "Our certified technicians handle cabling, racking, stacking, and configuration on-site." },
    { step: 5, title: "Ongoing Support (AMC)", desc: "We provide dedicated post-installation support to ensure zero downtime." },
  ];

  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">Solutions</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Turnkey Services</Typography>
            <Typography variant="h1" className="mb-6">Turnkey IT Solutions, Done End‑to‑End.</Typography>
            <Typography variant="lead">
              From bare walls to a fully functioning corporate network, we handle the entire hardware lifecycle so your team can focus on software and growth.
            </Typography>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
              <a 
                href="https://wa.me/919323332850" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {solutions.map((sol, i) => (
            <FadeIn key={i} delay={0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="bg-white rounded-3xl p-8 lg:p-12 border border-primary/10 shadow-lg flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <Typography variant="h2" className="text-primary mb-4">{sol.title}</Typography>
                  <Typography variant="body" className="font-medium text-text-dark mb-2">Ideal For: <span className="font-normal opacity-80">{sol.useCase}</span></Typography>
                  <Typography variant="body" className="font-medium text-text-dark mb-6">Process: <span className="font-normal opacity-80">{sol.process}</span></Typography>
                </div>
                <div className="flex-1 w-full bg-warm-bg1 p-6 rounded-2xl border border-primary/5">
                  <Typography variant="h3" className="text-lg mb-4">Key Deliverables</Typography>
                  <ul className="space-y-3">
                    {sol.deliverables.map((item, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                        <Typography variant="body">{item}</Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section variant="dark">
        <FadeIn>
          <Typography variant="h2" className="text-center text-white mb-16">How We Work</Typography>
        </FadeIn>
        <div className="max-w-4xl mx-auto">
          {stepper.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div className="flex gap-6 md:gap-8 relative pb-12 group">
                {/* Connecting line */}
                {i !== stepper.length - 1 && (
                  <div className="absolute left-6 md:left-8 top-16 bottom-0 w-[2px] bg-white/10 group-hover:bg-primary/50 transition-colors"></div>
                )}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-beige flex items-center justify-center text-xl md:text-2xl font-bold font-heading shadow-[0_0_20px_rgba(0,0,255,0.3)] flex-shrink-0 relative z-10">
                  {step.step}
                </div>
                <div className="pt-2 md:pt-4">
                  <Typography variant="h3" className="text-white mb-2 text-xl md:text-2xl">{step.title}</Typography>
                  <Typography variant="body" className="text-beige/70 text-base md:text-lg">{step.desc}</Typography>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}

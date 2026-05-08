import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, ArrowDown } from "lucide-react";
import Link from "next/link";

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

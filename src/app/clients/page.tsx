import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { LogoPill } from "@/components/ui/LogoPill";
import { Button } from "@/components/ui/Button";
import { Building2, HeartPulse, HardHat, Factory, GraduationCap, Headphones } from "lucide-react";
import Link from "next/link";
import { SwipeHint } from "@/components/ui/SwipeHint";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients | Trusted by Leading Indian Enterprises",
  description: "Lalani Computers powers the IT infrastructure of top organizations across BFSI, Healthcare, and Manufacturing sectors in India.",
};

export default function ClientsPage() {
  const clients = [
    "Kores India", "Navnit Motors", "Eureka Forbes", 
    "Reliance Infrastructure", "HGS", "Punjab National Bank", 
    "Akumentis Healthcare", "K Raheja", "Rustomjee", 
    "Zenith Birla Ltd", "Agfa Healthcare", "IDBI Bank", "Tata Motors"
  ];

  const industries = [
    { title: "BFSI", icon: <Building2 className="w-8 h-8" />, desc: "Branch rollouts, secure endpoint setups, and high-availability server racks.", href: "/clients/industries/bfsi" },
    { title: "Infrastructure & Real Estate", icon: <HardHat className="w-8 h-8" />, desc: "Site office networking, biometric access, and rugged workstations.", href: "/clients/industries/infrastructure" },
    { title: "Healthcare & Pharma", icon: <HeartPulse className="w-8 h-8" />, desc: "Compliance-ready data storage, specialized displays, and surveillance.", href: "/clients/industries/healthcare" },
    { title: "Manufacturing", icon: <Factory className="w-8 h-8" />, desc: "Factory-floor Wi-Fi, industrial PCs, and CCTV monitoring.", href: "/clients/industries/manufacturing" },
    { title: "BPO / KPO", icon: <Headphones className="w-8 h-8" />, desc: "Mass deployment of thin clients, headsets, and UPS backups.", href: "/clients/industries/bpo-kpo" },
    { title: "Education", icon: <GraduationCap className="w-8 h-8" />, desc: "Smart classroom projectors, lab PCs, and campus-wide networking.", href: "/clients/industries/education" },
  ];

  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">Clients</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Our Partners</Typography>
            <Typography variant="h1" className="mb-6">Trusted by Enterprises Across Industries</Typography>
            <Typography variant="lead" className="mb-10">
              From BFSI to Healthcare, we power the IT infrastructure of India's leading organizations with uncompromising reliability.
            </Typography>
            <Button as="a" href="/contact" variant="primary" size="lg">
              Discuss Your IT Requirements
            </Button>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10 overflow-hidden">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-6 md:mb-12">Our Key Clients</Typography>
          <SwipeHint className="pr-4" />
        </FadeIn>
        <div className="flex overflow-x-auto pb-6 snap-x snap-mandatory md:flex-wrap md:justify-center md:gap-6 md:overflow-visible md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {clients.map((client, i) => (
            <div key={i} className="min-w-[160px] md:min-w-0 flex-shrink-0 snap-center mr-4 md:mr-0 group">
              <FadeIn delay={i * 0.05} direction="up">
                <div className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-md rounded-full">
                  <LogoPill name={client} />
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="light" className="border-t border-primary/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-center mb-12">Industry Expertise</Typography>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={ind.href} className="block h-full">
                  <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:bg-primary/20">
                      {ind.icon}
                    </div>
                    <Typography variant="h3" className="mb-3">{ind.title}</Typography>
                    <Typography variant="body" className="opacity-80 flex-grow mb-6">{ind.desc}</Typography>
                    <span className="text-primary font-medium text-left mt-auto flex items-center">
                      View Recommended Setup <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="dark" className="overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn>
            <Typography variant="h2" className="text-center text-white mb-12">Recent Deployments</Typography>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-card-dark-alt border border-white/10 p-8 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors">
                <Typography variant="eyebrow" className="text-primary-light">BFSI</Typography>
                <Typography variant="h3" className="text-white mb-4">Branch Office Refresh for a National Bank</Typography>
                <Typography variant="small" className="text-beige/70 block mb-2">• Deployed 150+ robust desktops & networking gear.</Typography>
                <Typography variant="small" className="text-beige/70 block mb-2">• Strict compliance with data security norms.</Typography>
                <Typography variant="small" className="text-success block mt-4 font-medium">Outcome: Zero downtime during rollout.</Typography>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-card-dark-alt border border-white/10 p-8 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors">
                <Typography variant="eyebrow" className="text-primary-light">Healthcare</Typography>
                <Typography variant="h3" className="text-white mb-4">Surveillance Overhaul for Major Hospital</Typography>
                <Typography variant="small" className="text-beige/70 block mb-2">• 200+ IP Cameras with 90-day NVR retention.</Typography>
                <Typography variant="small" className="text-beige/70 block mb-2">• Integrated biometric access across sensitive wards.</Typography>
                <Typography variant="small" className="text-success block mt-4 font-medium">Outcome: 100% audit compliance achieved.</Typography>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-card-dark-alt border border-white/10 p-8 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors">
                <Typography variant="eyebrow" className="text-primary-light">Real Estate</Typography>
                <Typography variant="h3" className="text-white mb-4">Site Office Turnkey Setup</Typography>
                <Typography variant="small" className="text-beige/70 block mb-2">• End-to-end P2P wireless networking across 5 acres.</Typography>
                <Typography variant="small" className="text-beige/70 block mb-2">• Ruggedized hardware for harsh dust environments.</Typography>
                <Typography variant="small" className="text-success block mt-4 font-medium">Outcome: Project managers connected day 1.</Typography>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}

import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Terminal, ShieldAlert, Cloud, Database } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Software Licensing & Security | Mumbai",
  description: "Procure corporate software licenses, Microsoft 365, endpoint security (EDR), and backup solutions for your business. Fast deployment and compliance audits.",
};

const softwareTypes = [
  {
    name: "Operating Systems & Productivity",
    icon: <Terminal className="w-6 h-6" />,
    features: ["Microsoft Windows 11 Pro/Enterprise", "Microsoft 365 Business & Enterprise suites", "Volume Licensing for large teams", "Red Hat Enterprise Linux (RHEL)"],
    brands: "Microsoft, Red Hat",
  },
  {
    name: "Cybersecurity & Endpoint Protection",
    icon: <ShieldAlert className="w-6 h-6" />,
    features: ["Next-Gen Antivirus (NGAV)", "Endpoint Detection & Response (EDR)", "Zero-day threat protection", "Mobile Device Management (MDM)"],
    brands: "Escan, Kaspersky, CrowdStrike, Sophos",
  },
  {
    name: "Cloud & Backup Solutions",
    icon: <Cloud className="w-6 h-6" />,
    features: ["Automated cloud backups", "Disaster recovery as a service (DRaaS)", "Virtual machine replication", "Secure file sharing and sync"],
    brands: "Acronis, Veeam, AWS, Microsoft Azure",
  },
  {
    name: "Database & Server Software",
    icon: <Database className="w-6 h-6" />,
    features: ["Microsoft SQL Server licensing", "Windows Server Datacenter/Standard", "VMware vSphere virtualization", "CALs (Client Access Licenses)"],
    brands: "Microsoft, VMware, Oracle",
  },
];

const advantages = [
  "Guaranteed compliance with OEM software audits",
  "Expert guidance on volume licensing vs subscription models",
  "Centralized license management and renewals",
  "Deployment assistance for Microsoft 365 migrations",
  "Bundled pricing when purchased with our IT hardware",
  "VAPT and security posture assessments available",
];

export default function SoftwarePage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary">Enterprise Software</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Licensing & Security</Typography>
            <Typography variant="h1" className="mb-6">Corporate Software & Endpoint Security</Typography>
            <Typography variant="lead">
              Ensure your business runs legally, securely, and efficiently. We provide comprehensive enterprise software licensing, from everyday productivity suites to advanced server virtualization and cybersecurity defenses.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Request a License Quote</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Our Software Portfolio</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            Navigate the complexities of enterprise licensing with our authorized procurement specialists.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {softwareTypes.map((type, i) => (
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
            <Typography variant="h2" className="text-white text-center mb-8">Why Procure Software with Us?</Typography>
            <Typography variant="lead" className="text-center text-beige/70 mb-12">
              Avoid hefty non-compliance fines and simplify your IT billing by consolidating your hardware and software procurement.
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

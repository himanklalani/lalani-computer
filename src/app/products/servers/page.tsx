import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Server, Database, Activity, HardDrive } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Server Dealer Mumbai | Buy Dell, HPE, Lenovo Servers",
  description: "Authorized dealer for Dell, HPE, and Lenovo enterprise servers in Mumbai. We provide tower, rack, and blade servers with full installation and AMC support.",
};

const serverTypes = [
  {
    name: "Rack Servers",
    icon: <Server className="w-6 h-6" />,
    features: ["High-density computing for data centers", "Scalable processor & RAM options", "Hot-swappable drives", "Redundant power supplies"],
    brands: "Dell PowerEdge, HPE ProLiant DL series",
  },
  {
    name: "Tower Servers",
    icon: <Activity className="w-6 h-6" />,
    features: ["Ideal for small to mid-sized remote branch offices", "Quiet acoustic performance", "Expandable storage capacity", "Easy to deploy without a rack"],
    brands: "Lenovo ThinkSystem, HPE ProLiant ML series",
  },
  {
    name: "Enterprise Storage (NAS/SAN)",
    icon: <Database className="w-6 h-6" />,
    features: ["Centralized data management & backup", "High IOPS for database workloads", "RAID configuration for redundancy", "Seamless cloud integration"],
    brands: "Synology, QNAP, Dell PowerVault",
  },
  {
    name: "LTO Tape Drives",
    icon: <HardDrive className="w-6 h-6" />,
    features: ["Air-gapped offline ransomware protection", "Massive archival capacity", "Low cost per terabyte", "Long-term data compliance"],
    brands: "HPE StoreEver, IBM LTO",
  },
];

const advantages = [
  "Authorized partner pricing for Dell, HPE, and Lenovo",
  "Free initial capacity planning and workload consultation",
  "Rapid local delivery across Mumbai, Navi Mumbai & Thane",
  "Certified engineers for on-site racking, stacking & OS deployment",
  "Custom RAID configuration & active directory setup",
  "Comprehensive Annual Maintenance Contracts (AMC) available",
];

export default function ServersPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary">Servers & Storage</span>
        </div>
      </div>

      {/* Hero */}
      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Enterprise IT Hardware</Typography>
            <Typography variant="h1" className="mb-6">Enterprise Server Dealer & Storage Solutions in Mumbai</Typography>
            <Typography variant="lead">
              Power your mission-critical applications with robust server architecture. From 1U rack servers for tight data centers to massive NAS storage arrays, we supply, configure, and maintain the backbone of your IT infrastructure.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Request a Server Quote</Button></Link>
              <Link href="/solutions"><Button variant="secondary" size="lg">Explore Server AMC</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Server Categories */}
      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Our Server & Storage Portfolio</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            We provide genuine, enterprise-grade hardware customized for your specific database, virtualization, and storage needs.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serverTypes.map((type, i) => (
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

      {/* Why Buy From Us */}
      <Section variant="dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-white text-center mb-8">Why Source Servers from Lalani Computers?</Typography>
            <Typography variant="lead" className="text-center text-beige/70 mb-12">
              Buying a server is more than just hardware procurement. It requires precise capacity planning and reliable after-sales support.
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

      {/* CTA */}
      <Section variant="light" className="border-t border-primary/10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="h2" className="mb-4">Need a Custom Server Configuration?</Typography>
            <Typography variant="lead" className="mb-8">
              Share your workload requirements, and our engineers will design a customized Bill of Materials (BOM) with the best OEM pricing.
            </Typography>
            <Link href="/contact"><Button size="lg">Contact Our Server Experts</Button></Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

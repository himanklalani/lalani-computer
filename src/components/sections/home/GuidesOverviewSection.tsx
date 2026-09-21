import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

const guides = [
  {
    tag: "Repairs · Individual & Corporate",
    title: "IT Hardware: Repair vs. Replace Guide 2026",
    desc: "When is it worth fixing? Our experienced hardware specialists break down exactly how to evaluate aging hardware and make the right financial decision.",
    url: "/solutions/repairs/repair-vs-replace-guide",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    tag: "Accessories · Individual & Corporate",
    title: "The Complete Corporate Workstation & Accessories Guide 2026",
    desc: "OEM docking stations, dual monitors, ergonomic peripherals — everything you need to build the perfect high-productivity desk setup.",
    url: "/products/peripherals-power/workstation-buying-guide",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    tag: "Servers · Corporate",
    title: "Enterprise Server Buying Guide 2026",
    desc: "Cloud vs. on-premise — are you buying too much compute power, or not enough? Navigate enterprise servers without wasting your IT budget.",
    url: "/solutions/enterprise-servers-mumbai/server-buying-guide",
    tagColor: "bg-indigo-100 text-indigo-700",
  },
  {
    tag: "Custom PCs · Individual & Corporate",
    title: "2026 IT Hardware Buying Guide",
    desc: "Stop overpaying for pre-built bottlenecks. How to select the right components for performance workstations, gaming rigs, and office deployments.",
    url: "/solutions/custom-pc-builds/hardware-buying-guide",
    tagColor: "bg-purple-100 text-purple-700",
  },
];

export function GuidesOverviewSection() {
  return (
    <Section variant="light" className="border-t border-primary/10">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <div className="hidden sm:inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Expert IT Guides & Resources
          </div>
          <Typography variant="h2" className="mb-4">
            Read Before You Buy
          </Typography>
          <Typography variant="lead" className="max-w-2xl mx-auto text-text-dark/70">
            Free expert guides from our experienced hardware specialists — helping individuals and corporate IT teams make smarter procurement decisions.
          </Typography>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {guides.map((guide, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <Link
                href={guide.url}
                className="group flex flex-col h-full bg-white rounded-2xl border border-primary/10 p-7 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <span className={`self-start text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${guide.tagColor}`}>
                  {guide.tag}
                </span>
                <Typography variant="h3" className="text-lg mb-3 group-hover:text-primary transition-colors leading-snug">
                  {guide.title}
                </Typography>
                <Typography variant="small" className="text-text-dark/65 leading-relaxed flex-grow">
                  {guide.desc}
                </Typography>
                <div className="flex items-center gap-1 mt-5 text-primary text-sm font-semibold">
                  Read Guide
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}


import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Laptop, Monitor, Cpu, Briefcase } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Laptops & Desktops | IT Hardware Supplier Mumbai",
  description: "Bulk procurement of corporate laptops, business desktops, and heavy-duty workstations from HP, Dell, Lenovo, and Apple in Mumbai.",
};

const computingTypes = [
  {
    name: "Corporate Laptops",
    icon: <Laptop className="w-6 h-6" />,
    features: ["Business-grade durability and battery life", "Enterprise security (TPM, vPro)", "Lightweight ultrabooks for executives", "Bulk fleet deployments"],
    brands: "Lenovo ThinkPad, HP EliteBook, Dell Latitude, Apple MacBook",
  },
  {
    name: "Business Desktops",
    icon: <Monitor className="w-6 h-6" />,
    features: ["Cost-effective computing for BPO/KPO", "Space-saving Micro/SFF form factors", "Easy maintenance and upgrades", "Pre-installed genuine Windows Pro"],
    brands: "Dell OptiPlex, HP ProDesk, Lenovo ThinkCentre",
  },
  {
    name: "High-Performance Workstations",
    icon: <Cpu className="w-6 h-6" />,
    features: ["Dedicated ISV-certified GPUs (NVIDIA RTX)", "Xeon processors for CAD/CAM and rendering", "Massive ECC RAM capacity", "Advanced thermal cooling"],
    brands: "HP Z-Series, Dell Precision, Lenovo ThinkStation",
  },
  {
    name: "Thin Clients",
    icon: <Briefcase className="w-6 h-6" />,
    features: ["Zero-client computing for secure environments", "Centralized VDI management", "Extremely low power consumption", "No local data storage (high security)"],
    brands: "HP t-series, Dell Wyse",
  },
];

const advantages = [
  "Massive local Mumbai inventory for same-day dispatch",
  "Flexible corporate credit lines available",
  "Seamless warranty coordination directly with OEMs",
  "Custom imaging and OS deployment before delivery",
  "Asset tagging and inventory management support",
  "Buyback and eco-friendly e-waste disposal of old fleet",
];

export default function ComputingPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary">Computing</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Endpoints & Devices</Typography>
            <Typography variant="h1" className="mb-6">Corporate Computing Solutions</Typography>
            <Typography variant="lead">
              Empower your workforce with reliable, business-grade computing. From massive BPO desktop rollouts to executive ultrabooks and rendering workstations, we are Mumbai's premier procurement partner.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Request Bulk Pricing</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Our Computing Portfolio</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            We partner with the world's leading OEMs to provide hardware tailored to every role in your organization.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {computingTypes.map((type, i) => (
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
            <Typography variant="h2" className="text-white text-center mb-8">Why Buy IT Hardware from Lalani?</Typography>
            <Typography variant="lead" className="text-center text-beige/70 mb-12">
              E-commerce platforms cannot match our B2B focus, corporate billing, and rapid local fulfillment.
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

      <Section variant="light" className="border-t border-primary/10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="h2" className="mb-4">Need to Outfit an Entire Floor?</Typography>
            <Typography variant="lead" className="mb-8">
              We specialize in bulk deployments. Get dedicated account management and aggressive corporate pricing.
            </Typography>
            <Link href="/contact"><Button size="lg">Contact Sales</Button></Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

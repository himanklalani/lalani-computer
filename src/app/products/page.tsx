import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { LogoPill } from "@/components/ui/LogoPill";
import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { SwipeHint } from "@/components/ui/SwipeHint";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate IT Hardware Supplier & Server Dealer Mumbai",
  description: "Mumbai's trusted B2B IT hardware supplier. Procure corporate laptops, Dell/HPE enterprise servers, networking gear, and office electronics in bulk with fast local delivery.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Laptops" },
    { "@type": "ListItem", "position": 2, "name": "Desktops & Workstations" },
    { "@type": "ListItem", "position": 3, "name": "Servers & Storage" },
    { "@type": "ListItem", "position": 4, "name": "Printers & Projectors" },
    { "@type": "ListItem", "position": 5, "name": "Networking" }
  ]
};

import { ProductCategoryGridSection } from "@/components/sections/home/ProductCategoryGridSection";

export default function ProductsPage() {
  const brandGroups = [
    { category: "Computing", brands: ["HP", "Dell", "Lenovo", "Apple"] },
    { category: "Networking", brands: ["Cisco", "D-Link", "tp-link", "Netgear"] },
    { category: "Security", brands: ["CP Plus", "Hikvision", "Dahua", "Escan"] },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">Products</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-0">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Product Catalogue</Typography>
            <Typography variant="h1" className="mb-6">From Laptops to LTO Tapes, Everything Your IT Needs Under One Roof.</Typography>
            <Typography variant="lead">
              We maintain a massive inventory of corporate IT hardware from top global brands. Browse our specialized categories including <Link href="/products/computing" className="text-primary underline decoration-primary/30 hover:decoration-primary transition-colors">Corporate Computing</Link>, <Link href="/products/servers" className="text-primary underline decoration-primary/30 hover:decoration-primary transition-colors">Enterprise Servers</Link>, <Link href="/products/networking-security" className="text-primary underline decoration-primary/30 hover:decoration-primary transition-colors">Networking Gear</Link>, and <Link href="/products/office-electronics" className="text-primary underline decoration-primary/30 hover:decoration-primary transition-colors">Office Electronics</Link> delivered fast across India.
            </Typography>
          </FadeIn>
        </div>
      </Section>

      {/* Renders the 3D Folders exactly as they appear on the homepage */}
      <ProductCategoryGridSection />

      <Section variant="light" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-12">Brand Highlights</Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {brandGroups.map((group, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm text-center">
                <Typography variant="h3" className="mb-6 text-primary">{group.category}</Typography>
                <div className="flex flex-wrap justify-center gap-3">
                  {group.brands.map((brand, j) => (
                    <div key={j} className="transition-transform hover:scale-105">
                      <LogoPill name={brand} />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section variant="dark" className="overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-center text-white mb-12">Why Buy from Lalani vs E‑commerce</Typography>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mb-2 sm:hidden">
              <SwipeHint className="text-white/40 pr-2" />
            </div>
            <div className="bg-warm-bg1 rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-primary text-beige text-lg border-b border-primary/20">
                      <th className="p-6 font-heading font-semibold w-1/3">Feature</th>
                      <th className="p-6 font-heading font-semibold w-1/3 border-l border-primary/20 bg-primary-dark">Lalani Computers</th>
                      <th className="p-6 font-heading font-semibold w-1/3 border-l border-primary/20">E‑commerce</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-dark">
                    <tr className="border-b border-primary/10 transition-colors hover:bg-white">
                      <td className="p-6 font-medium">Delivery Speed (Mumbai)</td>
                      <td className="p-6 border-l border-primary/10 bg-success/5 font-medium flex items-center gap-2"><CheckCircle2 className="text-success w-5 h-5"/> Under 24 hours</td>
                      <td className="p-6 border-l border-primary/10 text-text-dark/70">3-5 business days</td>
                    </tr>
                    <tr className="border-b border-primary/10 transition-colors hover:bg-white">
                      <td className="p-6 font-medium">Warranty & Service Coordination</td>
                      <td className="p-6 border-l border-primary/10 bg-success/5 font-medium flex items-center gap-2"><CheckCircle2 className="text-success w-5 h-5"/> Handled by us locally</td>
                      <td className="p-6 border-l border-primary/10 text-text-dark/70 flex items-center gap-2"><XCircle className="text-error w-5 h-5"/> Self-service via brand</td>
                    </tr>
                    <tr className="border-b border-primary/10 transition-colors hover:bg-white">
                      <td className="p-6 font-medium">Corporate Billing & GST</td>
                      <td className="p-6 border-l border-primary/10 bg-success/5 font-medium flex items-center gap-2"><CheckCircle2 className="text-success w-5 h-5"/> Seamless credit & GST</td>
                      <td className="p-6 border-l border-primary/10 text-text-dark/70">Often complex for B2B</td>
                    </tr>
                    <tr className="transition-colors hover:bg-white">
                      <td className="p-6 font-medium">On‑site Installation</td>
                      <td className="p-6 border-l border-primary/10 bg-success/5 font-medium flex items-center gap-2"><CheckCircle2 className="text-success w-5 h-5"/> Expert engineer provided</td>
                      <td className="p-6 border-l border-primary/10 text-text-dark/70 flex items-center gap-2"><XCircle className="text-error w-5 h-5"/> Do-it-yourself</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

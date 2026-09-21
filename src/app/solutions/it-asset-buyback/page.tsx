import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Server, HardDrive, Cpu, Recycle, ShieldCheck, Banknote, ShieldAlert, BadgeCent } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: '/solutions/it-asset-buyback' },
  title: "IT Asset Buyback Mumbai | Used Storage Server Supplier",
  description: "Enterprise IT Asset Disposition (ITAD). We buy old servers and laptops with secure data wiping. Wholesale supplier of used server memory and hard disks.",
};

export default function ITAssetBuybackPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Refurbished Enterprise Servers & Parts",
        "description": "Wholesale supply of used storage servers, new and used server memory, and SuperMicro server hard disks in Mumbai.",
        "brand": {
          "@type": "Brand",
          "name": "Lalani Computers"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "1000",
          "highPrice": "500000",
          "offerCount": "100"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you buy used storage servers from corporates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide complete IT Asset Disposition (ITAD) services. We buy back old enterprise servers, storage arrays, and office laptops from companies in Mumbai."
            }
          },
          {
            "@type": "Question",
            "name": "Are you a used storage server supplier in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we wholesale refurbished and used storage servers, SuperMicro raid controllers, and used server memory at competitive B2B prices."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <span>/</span>
          <span className="text-primary">IT Asset Buyback & Wholesale</span>
        </div>
      </div>

      <Section variant="dark" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow" className="text-primary-light">Enterprise ITAD & Wholesale</Typography>
            <Typography variant="h1" className="text-white mb-6">Secure IT Asset Buyback & Refurbished Server Wholesale in Mumbai</Typography>
            <Typography variant="lead" className="text-beige/70 mb-8">
              We provide enterprise IT Asset Disposition (ITAD) for corporates upgrading their hardware. We buy your old servers, securely wipe your data adhering to NIST 800-88 guidelines, and act as Mumbai's premier wholesaler for refurbished server components.
            </Typography>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/buyback#manifest-dropzone">
                <Button size="lg" className="w-full sm:w-auto">Upload Asset Manifest</Button>
              </Link>
              <a href="https://wa.me/919323332850?text=Hi,%20we%20have%20corporate%20IT%20hardware%20(servers/laptops)%20for%20buyback.%20Can%20we%20discuss%20a%20quote?" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10">Corporate Inquiry</Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="light" className="border-t border-primary/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-center mb-12">Enterprise Server Procurement (We Buy Your Old Hardware)</Typography>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white p-8 rounded-2xl border border-primary/10 h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Banknote className="w-7 h-7" />
                </div>
                <Typography variant="h3" className="mb-4">Fair Market Valuation</Typography>
                <p className="text-text-dark/80">Turn your aging IT infrastructure into working capital. We offer highly competitive buyback rates for enterprise servers, workstations, and office laptops in bulk.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white p-8 rounded-2xl border border-primary/10 h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <ShieldAlert className="w-7 h-7" />
                </div>
                <Typography variant="h3" className="mb-4">Secure Data Wiping</Typography>
                <p className="text-text-dark/80">Security is paramount. We guarantee thorough, professional data destruction for all procured storage devices, ensuring your corporate data never leaves your control.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white p-8 rounded-2xl border border-primary/10 h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Recycle className="w-7 h-7" />
                </div>
                <Typography variant="h3" className="mb-4">Responsible E-Waste Disposal</Typography>
                <p className="text-text-dark/80">We are committed to sustainability. IT assets that are too old or damaged to refurbish are responsibly dismantled and recycled to minimize environmental impact.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <Typography variant="h2" className="mb-6">Refurbished IT Hardware Wholesale (Servers, RAM, Hard Disks)</Typography>
              <Typography variant="lead" className="mb-6">
                Are you a local SI or business looking for budget-friendly hardware expansion? We are a leading supplier of refurbished enterprise components in Maharashtra.
              </Typography>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Server className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                  <div>
                    <strong className="block text-text-dark">Used Storage Server Supplier</strong>
                    <span className="text-text-dark/70 text-sm">Wholesale access to refurbished Dell, HPE, and SuperMicro storage arrays.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <HardDrive className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                  <div>
                    <strong className="block text-text-dark">SuperMicro Raid Controllers & Hard Disks</strong>
                    <span className="text-text-dark/70 text-sm">Tested and verified SAS/SATA enterprise drives and RAID cards.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Cpu className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                  <div>
                    <strong className="block text-text-dark">New and Used Server Memory</strong>
                    <span className="text-text-dark/70 text-sm">ECC Registered RAM modules for bulk upgrades at wholesale rates.</span>
                  </div>
                </li>
              </ul>
              <Link href="/contact"><Button>Inquire About Wholesale Pricing</Button></Link>
            </FadeIn>
            <FadeIn direction="left" className="bg-warm-bg1 rounded-3xl p-8 border border-primary/10">
              <Typography variant="h3" className="mb-4">Our Refurbishment Process</Typography>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white text-primary font-bold flex items-center justify-center flex-shrink-0 shadow-sm border border-primary/10">1</div>
                  <div>
                    <h4 className="font-semibold text-text-dark">Procurement & Wiping</h4>
                    <p className="text-sm text-text-dark/70">Hardware is procured directly from corporate environments and securely wiped of all data.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white text-primary font-bold flex items-center justify-center flex-shrink-0 shadow-sm border border-primary/10">2</div>
                  <div>
                    <h4 className="font-semibold text-text-dark">Stress Testing</h4>
                    <p className="text-sm text-text-dark/70">Every CPU, RAM module, and hard disk undergoes 48 hours of rigorous synthetic stress testing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white text-primary font-bold flex items-center justify-center flex-shrink-0 shadow-sm border border-primary/10">3</div>
                  <div>
                    <h4 className="font-semibold text-text-dark">Wholesale Distribution</h4>
                    <p className="text-sm text-text-dark/70">Components are categorized, securely packaged, and shipped to our wholesale partners across Mumbai.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}

import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Battery, Keyboard, Cable, Headphones, Truck, ShieldCheck, Zap, Briefcase, Plug, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.lalanicomputers.com/products/peripherals-power' },
  title: 'IT Peripherals, Accessories & Power Backup | Mumbai',
  description: 'Mumbai',
  openGraph: {
    title: 'IT Peripherals, Accessories & Power Backup | Mumbai',
    description: 'Mumbai',
    url: 'https://www.lalanicomputers.com/products/peripherals-power',
    siteName: 'Lalani Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Peripherals, Accessories & Power Backup | Mumbai',
    description: 'Mumbai',
  },
};

const peripheralTypes = [
  {
    name: "Enterprise Power & UPS",
    icon: <Battery className="w-6 h-6" />,
    features: ["Online UPS systems (1KVA to 20KVA+)", "Server rack mountable battery backups", "Surge protectors and PDUs", "Automatic Voltage Regulators (AVR)"],
    brands: "APC by Schneider Electric, Microtek, Luminous",
  },
  {
    name: "Computer & Laptop Accessories",
    icon: <Keyboard className="w-6 h-6" />,
    features: ["Ergonomic wireless keyboards and mice", "High-res webcams for conferencing", "Laptop docking stations and hubs", "Privacy screens and mounts"],
    brands: "Logitech, Dell, HP, Lenovo",
  },
  {
    name: "Professional Audio & Headsets",
    icon: <Headphones className="w-6 h-6" />,
    features: ["Noise-cancelling headsets for home offices & BPOs", "Wireless DECT headsets for mobility", "UC certified for Microsoft Teams & Zoom", "Durable build for 24/7 reliability"],
    brands: "Jabra, Plantronics (Poly), Sennheiser",
  },
  {
    name: "Cabling & Connectivity",
    icon: <Cable className="w-6 h-6" />,
    features: ["Cat6/Cat6A/Fiber optic patch cords", "HDMI, DisplayPort, and USB-C adapters", "Server rack cable management kits", "Heavy-duty power cables"],
    brands: "D-Link, CommScope, Belkin",
  },
];


export default function PeripheralsPowerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I buy a single mechanical keyboard or monitor from you?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! While we fulfill massive corporate orders, we also supply single, high-quality computer accessories to individual professionals."
        }
      },
      {
        "@type": "Question",
        "name": "Do you supply and maintain corporate UPS systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide enterprise UPS systems from APC and Vertiv, including routine AMC battery maintenance and replacements to prevent swelling and unexpected downtime."
        }
      },
      {
        "@type": "Question",
        "name": "Do you sell high-performance or gaming peripherals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. While our primary focus is premium corporate IT hardware, we stock high-end mechanical keyboards, ultrawide monitors, and performance headsets that power-users and enthusiasts love."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help calculate the UPS load for my home office or startup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our engineers will calculate your total IT power load and recommend the exact kVA rating needed to keep your workstations running during outages."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a corporate UPS or bulk peripheral order cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing scales based on your power load (kVA) requirements for UPS, or the specific hardware models required for your volume."
        }
      }
    ]
  };

  const faqItems = [
    {
      question: "Can I buy a single mechanical keyboard or monitor from you?",
      answer: "Yes! While we fulfill massive corporate orders, we also supply single, high-quality computer accessories to individual professionals."
    },
    {
      question: "Do you supply and maintain corporate UPS systems?",
      answer: "Yes, we provide enterprise UPS systems from APC and Vertiv, including routine AMC battery maintenance and replacements to prevent swelling and unexpected downtime."
    },
    {
      question: "Do you sell high-performance or gaming peripherals?",
      answer: "Absolutely. While our primary focus is premium corporate IT hardware, we stock high-end mechanical keyboards, ultrawide monitors, and performance headsets that power-users and enthusiasts love."
    },
    {
      question: "Can you help calculate the UPS load for my home office or startup?",
      answer: "Yes, our engineers will calculate your total IT power load and recommend the exact kVA rating needed to keep your workstations running during outages."
    },
    {
      question: "How much does a corporate UPS or bulk peripheral order cost?",
      answer: <>Pricing scales based on your power load (kVA) requirements for UPS, or the specific hardware models required for your volume. <Link href="/contact" className="text-primary hover:underline font-medium">Contact us for a custom quote.</Link></>
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary">Peripherals & Power</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Essentials & Backup</Typography>
            <Typography variant="h1" className="mb-6">IT Accessories, Peripherals & Power Backup</Typography>
            <Typography variant="lead">
              The crucial components that keep your operations running. From ergonomic desk accessories and premium monitors for home offices, to robust enterprise UPS systems that protect corporate servers from power fluctuations.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Request a Quote</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Peripherals & Power Portfolio</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            High-quality additions to complete your corporate IT infrastructure.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {peripheralTypes.map((type, i) => (
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
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <a 
                    href={`https://wa.me/919323332850?text=${encodeURIComponent(`hey i was looking for ${type.name.toLowerCase()}`)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="sm" className="w-full flex items-center justify-center gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                      Enquire Now
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
      <Section variant="dark">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-white text-center mb-8">Why Trust Lalani for Essentials?</Typography>
            <Typography variant="lead" className="text-center text-beige/70 mb-12">
              We ensure your peripherals match the quality of your core hardware, and your power systems are properly sized for your critical loads.
            </Typography>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FadeIn delay={0.1}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Immediate Availability</Typography>
                  <Typography variant="small" className="text-beige/75">Extensive local stock ensures rapid delivery of single units and bulk peripheral orders.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Genuine OEM Parts</Typography>
                  <Typography variant="small" className="text-beige/75">Authentic, authorized hardware designed to protect and complement your core IT investments.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Expert UPS Sizing</Typography>
                  <Typography variant="small" className="text-beige/75">Calculated capacity planning based on your actual IT loads and backup duration requirements.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Enterprise AMC Options</Typography>
                  <Typography variant="small" className="text-beige/75">Comprehensive maintenance and battery replacement schedules for high-capacity UPS setups.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Plug className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Seamless Integration</Typography>
                  <Typography variant="small" className="text-beige/75">Peripherals tested and validated to integrate flawlessly with your existing workstation rollouts.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">One-Stop Hardware Hub</Typography>
                  <Typography variant="small" className="text-beige/75">Simplify your tech upgrades by sourcing laptops, accessories, and power backups all from Lalani.</Typography>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section variant="light" className="border-t border-primary/10">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <FadeIn>
            <Typography variant="eyebrow" className="mb-4">FAQs</Typography>
            <Typography variant="h2" className="mb-4">Frequently Asked Questions</Typography>
            <Typography variant="lead">Common questions from individuals and enterprises about UPS power backup and IT peripherals.</Typography>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} direction="up">
          <FAQAccordion items={faqItems} />
        </FadeIn>
      </Section>
    </>
  );
}

import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Server, ShieldCheck, Zap, ThermometerSnowflake, Activity, Lock } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: '/solutions/server-colocation-mumbai' },
  title: "Server Colocation in Mumbai | Tier III Rack Leasing",
  description: "Enterprise server colocation services in Mumbai. Secure data center rack space leasing with 99.99% uptime, advanced cooling, and redundant power.",
};

export default function ColocationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Server Colocation Services Mumbai",
        "description": "Secure Tier III data center rack space and server colocation services in Mumbai with redundant power and cooling.",
        "brand": {
          "@type": "Brand",
          "name": "Lalani Computers"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "5000",
          "highPrice": "100000",
          "offerCount": "1"
        }
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
          <span className="text-primary">Server Colocation</span>
        </div>
      </div>

      <Section variant="dark" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow" className="text-primary-light">Secure Data Center Hosting</Typography>
            <Typography variant="h1" className="text-white mb-6">Enterprise Server Colocation Services in Mumbai</Typography>
            <Typography variant="lead" className="text-beige/70 mb-8">
              House your mission-critical hardware in our state-of-the-art colocation facilities. Benefit from Tier III infrastructure, 99.99% uptime guarantees, and 24/7 physical security without the massive capital expenditure of building your own data center.
            </Typography>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">Request a Rack Quote</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="light" className="border-t border-primary/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-center mb-12">Why Buy Colocation in Mumbai With Us?</Typography>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white p-8 rounded-2xl border border-primary/10 h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Zap className="w-7 h-7" />
                </div>
                <Typography variant="h3" className="mb-4">N+1 Redundant Power</Typography>
                <p className="text-text-dark/80">Continuous power supply backed by enterprise-grade UPS arrays and diesel generators to guarantee zero downtime during grid failures.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white p-8 rounded-2xl border border-primary/10 h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <ThermometerSnowflake className="w-7 h-7" />
                </div>
                <Typography variant="h3" className="mb-4">Precision Cooling (PAC)</Typography>
                <p className="text-text-dark/80">Optimal thermal management using Precision Air Conditioning with hot-aisle/cold-aisle containment to maximize server lifespan.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white p-8 rounded-2xl border border-primary/10 h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Lock className="w-7 h-7" />
                </div>
                <Typography variant="h3" className="mb-4">6-Layer Physical Security</Typography>
                <p className="text-text-dark/80">Strict access control featuring biometric scanners, man-traps, 24/7 CCTV surveillance, and armed security personnel.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} direction="up">
              <div className="bg-white p-8 rounded-2xl border border-primary/10 h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Activity className="w-7 h-7" />
                </div>
                <Typography variant="h3" className="mb-4">High-Speed Connectivity</Typography>
                <p className="text-text-dark/80">Carrier-neutral facility with multiple distinct fiber entry points providing ultra-low latency bandwidth for your applications.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5} direction="up">
              <div className="bg-white p-8 rounded-2xl border border-primary/10 h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Server className="w-7 h-7" />
                </div>
                <Typography variant="h3" className="mb-4">Flexible Rack Space</Typography>
                <p className="text-text-dark/80">From single 1U server hosting to half-racks, full 42U cabinets, and dedicated private cages. Scale your footprint instantly.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6} direction="up">
              <div className="bg-white p-8 rounded-2xl border border-primary/10 h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <Typography variant="h3" className="mb-4">Remote Hands Support</Typography>
                <p className="text-text-dark/80">Our L2/L3 engineers are available 24/7 for physical server reboots, cable tracing, and component swaps on your behalf.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}

import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Complete Corporate Workstation & Accessories Guide 2026 | Lalani Computers",
  description: "OEM docking stations, dual monitors, ergonomic peripherals — everything you need to build the perfect high-productivity desk setup.",
};

export default function GuidePage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <span>/</span>
          <span className="text-primary truncate max-w-[200px] md:max-w-none">Guides</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">IT Guide</Typography>
            <Typography variant="h1" className="mb-6">The Complete Corporate Workstation & Accessories Guide 2026</Typography>
            <Typography variant="lead">
              OEM docking stations, dual monitors, ergonomic peripherals — everything you need to build the perfect high-productivity desk setup.
            </Typography>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <article className="prose prose-lg prose-headings:text-text-dark prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-primary prose-p:text-text-dark/80 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-text-dark prose-ul:list-disc prose-ul:pl-6 max-w-none">
              
              <h2>Introduction</h2>
              <p>Welcome to our comprehensive guide on this topic. Implementing the right technology infrastructure is critical for business success in today&apos;s fast-paced environment. This guide will walk you through the essential considerations and best practices.</p>

              <h2>Key Considerations</h2>
              <ul>
                <li><strong>Scalability:</strong> Always plan for future growth to ensure your investment lasts.</li>
                <li><strong>Security:</strong> Implement robust security measures from day one to protect sensitive data.</li>
                <li><strong>Performance:</strong> Choose enterprise-grade equipment to minimize downtime and maximize productivity.</li>
                <li><strong>Vendor Support:</strong> Ensure your hardware comes with reliable warranties and AMC options.</li>
              </ul>

              <h2>Implementation Steps</h2>
              <p><strong>1. Assessment:</strong> Begin by auditing your current infrastructure and identifying bottlenecks.</p>
              <p><strong>2. Planning:</strong> Develop a detailed Bill of Materials (BOM) tailored to your budget and technical requirements.</p>
              <p><strong>3. Deployment:</strong> Work with experienced IT professionals to ensure seamless installation and minimal disruption to your daily operations.</p>
              <p><strong>4. Maintenance &amp; Upgrades:</strong> Establish a proactive maintenance schedule to extend the lifespan of your equipment. When components face wear-and-tear, leverage our <Link href="/repair" className="text-primary font-semibold underline underline-offset-2 hover:opacity-80">hardware repair and upgrade services</Link> across Mumbai.</p>

              <h2>Conclusion</h2>
              <p>By following these guidelines, you can ensure a reliable, secure, and high-performance IT environment. When upgrading full desk setups across corporate floors, trade in aging legacy hardware through our <Link href="/buyback" className="text-primary font-semibold underline underline-offset-2 hover:opacity-80">corporate IT asset buyback program</Link> for instant liquidity and secure e-waste compliance.</p>
            </article>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-16">
            <div className="p-8 bg-warm-bg1 border border-primary/10 rounded-2xl flex flex-col items-center text-center">
              <Typography variant="h3" className="mb-3">Need Expert Assistance?</Typography>
              <p className="text-text-dark/80 mb-6 max-w-lg">
                Our engineers are ready to help you implement these strategies. Get a customized quote today.
              </p>
              <a 
                href={`https://wa.me/919323332850?text=${encodeURIComponent(`Hi, I read your guide and I'm interested in discussing IT solutions.`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-[#25D366] text-white hover:bg-[#20b858] border-none shadow-lg shadow-[#25D366]/20">
                  Chat with an Expert
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

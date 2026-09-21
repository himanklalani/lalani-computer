import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Camera, Fingerprint, Activity } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  alternates: { canonical: '/solutions/surveillance-security' },
  title: "Corporate Surveillance & Security Infrastructure | Lalani Computers",
  description: "End-to-end CCTV, NVR, and biometric access control installations for offices, schools, and hospitals in Mumbai.",
};

const deliverables = [
  "High-definition IP CCTV camera installations",
  "Scalable NVR & DVR storage solutions (90+ day retention)",
  "Biometric and RFID access control systems",
  "Video door phones and intercoms",
  "Remote monitoring apps and control room setups"
];

export default function SurveillanceSecurityPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide professional CCTV installation for offices in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our experienced technicians conduct comprehensive site surveys to eliminate blind spots and install high-resolution IP cameras with surveillance-grade NVR storage."
        }
      },
      {
        "@type": "Question",
        "name": "Which CCTV brands do you recommend for corporate security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We install and configure enterprise-grade systems from trusted brands like Hikvision, CP Plus, and Dahua, ensuring secure remote mobile viewing."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a corporate office CCTV installation cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing is based on the total number of cameras, NVR hard drive capacity (recording retention days), and structured cabling length."
        }
      }
    ]
  };

  const faqItems = [
    {
      question: "Do you provide professional CCTV installation for offices in Mumbai?",
      answer: "Yes, our experienced technicians conduct comprehensive site surveys to eliminate blind spots and install high-resolution IP cameras with surveillance-grade NVR storage."
    },
    {
      question: "Which CCTV brands do you recommend for corporate security?",
      answer: "We install and configure enterprise-grade systems from trusted brands like Hikvision, CP Plus, and Dahua, ensuring secure remote mobile viewing."
    },
    {
      question: "How much does a corporate office CCTV installation cost?",
      answer: <>Pricing is based on the total number of cameras, NVR hard drive capacity (recording retention days), and structured cabling length. <Link href="/contact" className="text-primary hover:underline font-medium">Contact us for a free security audit and estimate.</Link></>
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
          <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <span>/</span>
          <span className="text-primary">Surveillance & Security</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Facility Security</Typography>
            <Typography variant="h1" className="mb-6">Surveillance & Access Control</Typography>
            <Typography variant="lead">
              Protect your premises, assets, and personnel with enterprise-grade surveillance networks and access control systems designed for complex facilities.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Schedule a Site Survey</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <FadeIn direction="left">
              <Typography variant="h2" className="mb-6">What We Deploy</Typography>
              <Typography variant="body" className="mb-8 text-text-dark/80">
                From a 4-camera office setup to a 200-camera multi-building campus network, we handle the design, wiring, hardware, and long-term maintenance.
              </Typography>
              <ul className="space-y-4">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <Typography variant="body" className="font-medium">{item}</Typography>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <div className="flex-1 w-full bg-warm-bg1 p-8 rounded-3xl border border-primary/10 shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
            <FadeIn direction="right" className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Camera className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">CCTV Systems</Typography>
                  <Link href="/products/networking-security" className="text-primary text-sm font-semibold hover:underline">View Cameras →</Link>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Fingerprint className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Access Control</Typography>
                  <Link href="/products/networking-security" className="text-primary text-sm font-semibold hover:underline">View Biometrics →</Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Activity className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Active Monitoring</Typography>
                  <Typography variant="small" className="text-text-dark/70">Remote feeds and automated alerts.</Typography>
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
            <Typography variant="lead">Common questions about corporate CCTV and access control.</Typography>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} direction="up">
          <FAQAccordion items={faqItems} />
        </FadeIn>
      </Section>
      <Section variant="light" className="border-t border-primary/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="p-8 md:p-12 bg-white border border-primary/10 shadow-lg rounded-2xl flex flex-col items-center text-center max-w-3xl mx-auto">
              <Typography variant="h2" className="mb-4">Need a Security Audit?</Typography>
              <Typography variant="body" className="text-text-dark/80 mb-8 max-w-xl">
                Share your requirements, and our security architects will design a robust topology and provide a detailed BOM.
              </Typography>
              <a 
                href={`https://wa.me/919323332850?text=${encodeURIComponent(`Hi, I am looking for a CCTV and security setup. Can we schedule a site survey?`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20b858] border-none shadow-xl shadow-[#25D366]/20 py-6 px-8 text-lg">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Get a Custom BOM & Quote
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-center mb-4">Related Guides</Typography>
            <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
              Read our expert advice on IT infrastructure.
            </Typography>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "CCTV & Security Buying Guide", url: "/solutions/surveillance-security/cctv-buying-guide" },
            ].map((guide, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={guide.url} className="block group bg-white rounded-xl p-6 border border-primary/10 hover:shadow-md hover:border-primary/30 transition-all">
                  <div className="flex items-center justify-between">
                    <Typography variant="h3" className="text-lg group-hover:text-primary transition-colors">{guide.title}</Typography>
                    <svg className="w-5 h-5 text-primary/50 group-hover:text-primary transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Headphones, ShieldAlert, Wrench } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  alternates: { canonical: '/solutions/amc-support' },
  title: "Computer AMC in Mumbai | Computer Network LAN AMC",
  description: "Comprehensive Annual Maintenance Contracts (AMC), preventative maintenance, and on-site IT troubleshooting for corporate teams in Mumbai.",
};

const deliverables = [
  "Preventative maintenance to stop issues",
  "Fast on-site troubleshooting across Mumbai",
  "Dedicated account managers",
  "Hardware replacements & warranty coordination",
  "Software update and patch management"
];

export default function AMCSupportPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide on-site IT support across Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our certified engineers are dispatched across Mumbai for physical hardware troubleshooting, network repairs, and preventative maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "What does a comprehensive IT AMC cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AMC covers everything from proactive patch management and antivirus updates to physical cleaning of server racks and immediate replacement of failing components."
        }
      },
      {
        "@type": "Question",
        "name": "Do we get a dedicated account manager?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all corporate AMC clients are assigned a dedicated technical account manager who understands your specific infrastructure and history."
        }
      }
    ]
  };

  const faqItems = [
    {
      question: "Do you provide on-site IT support across Mumbai?",
      answer: "Yes, our certified engineers are dispatched across Mumbai for physical hardware troubleshooting, network repairs, and preventative maintenance."
    },
    {
      question: "What does a comprehensive IT AMC cover?",
      answer: "Our AMC covers everything from proactive patch management and antivirus updates to physical cleaning of server racks and immediate replacement of failing components."
    },
    {
      question: "Do we get a dedicated account manager?",
      answer: "Yes, all corporate AMC clients are assigned a dedicated technical account manager who understands your specific infrastructure and history."
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
          <span className="text-primary">AMC & IT Support</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Zero Downtime</Typography>
            <Typography variant="h1" className="mb-6">Computer AMC & Network LAN AMC in Mumbai</Typography>
            <Typography variant="lead">
              Keep your corporate team running smoothly with our dedicated AMC services. We handle the IT headaches so you can focus on your business.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Request an AMC Quote</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <FadeIn direction="left">
              <Typography variant="h2" className="mb-6">What We Cover</Typography>
              <Typography variant="body" className="mb-8 text-text-dark/80">
                Our AMC packages are tailored for corporate environments. Whether you have 20 or 2000 users, we scale our support to match your exact needs.
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
                  <ShieldAlert className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Preventative Care</Typography>
                  <Typography variant="small" className="text-text-dark/70">Proactive checks to ensure maximum uptime.</Typography>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Wrench className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Rapid Repair</Typography>
                  <Typography variant="small" className="text-text-dark/70">On-site engineers dispatched quickly.</Typography>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <Headphones className="w-8 h-8" />
                </div>
                <div>
                  <Typography variant="h3">Dedicated Support</Typography>
                  <Typography variant="small" className="text-text-dark/70">Direct line to a familiar technical manager.</Typography>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <FadeIn>
            <Typography variant="eyebrow" className="mb-4">FAQs</Typography>
            <Typography variant="h2" className="mb-4">Frequently Asked Questions</Typography>
            <Typography variant="lead">Common questions about our IT AMC support.</Typography>
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
              <Typography variant="h2" className="mb-4">Ready to Secure Your IT Infrastructure?</Typography>
              <Typography variant="body" className="text-text-dark/80 mb-8 max-w-xl">
                Tell us about your team size and requirements, and we'll provide a transparent AMC proposal.
              </Typography>
              <a 
                href={`https://wa.me/919323332850?text=${encodeURIComponent(`Hi, I am looking for a corporate IT AMC. Can we discuss a quote?`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20b858] border-none shadow-xl shadow-[#25D366]/20 py-6 px-8 text-lg">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Get an AMC Quote
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
              { title: "Definitive AMC Checklist for 2026", url: "/solutions/amc-support/amc-checklist" },
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

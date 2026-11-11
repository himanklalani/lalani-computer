import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Terminal, ShieldAlert, Cloud, Database, ShieldCheck, UserCheck, Layers, ArrowRightLeft, Tags, Search } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.lalanicomputers.com/products/software' },
  title: 'Enterprise Software Licensing & Security | Mumbai',
  description: 'Procure corporate software licenses, Microsoft 365, endpoint security (EDR), and backup solutions for your business. Fast deployment and compliance audits.',
  openGraph: {
    title: 'Enterprise Software Licensing & Security | Mumbai',
    description: 'Procure corporate software licenses, Microsoft 365, endpoint security (EDR), and backup solutions for your business. Fast deployment and compliance audits.',
    url: 'https://www.lalanicomputers.com/products/software',
    siteName: 'Lalani Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Software Licensing & Security | Mumbai',
    description: 'Procure corporate software licenses, Microsoft 365, endpoint security (EDR), and backup solutions for your business. Fast deployment and compliance audits.',
  },
};

const softwareTypes = [
  {
    name: "Operating Systems & Productivity",
    icon: <Terminal className="w-6 h-6" />,
    features: ["Microsoft Windows 11 Pro/Enterprise", "Microsoft 365 Business & Enterprise suites", "Volume Licensing for large teams", "Red Hat Enterprise Linux (RHEL)"],
    brands: "Microsoft, Red Hat",
  },
  {
    name: "Cybersecurity & Endpoint Protection",
    icon: <ShieldAlert className="w-6 h-6" />,
    features: ["Next-Gen Antivirus (NGAV)", "Endpoint Detection & Response (EDR)", "Zero-day threat protection", "Mobile Device Management (MDM)"],
    brands: "Escan, Kaspersky, CrowdStrike, Sophos",
  },
  {
    name: "Cloud & Backup Solutions",
    icon: <Cloud className="w-6 h-6" />,
    features: ["Automated cloud backups", "Disaster recovery as a service (DRaaS)", "Virtual machine replication", "Secure file sharing and sync"],
    brands: "Acronis, Veeam, AWS, Microsoft Azure",
  },
  {
    name: "Database & Server Software",
    icon: <Database className="w-6 h-6" />,
    features: ["Microsoft SQL Server licensing", "Windows Server Datacenter/Standard", "VMware vSphere virtualization", "CALs (Client Access Licenses)"],
    brands: "Microsoft, VMware, Oracle",
  },
];


export default function SoftwarePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you sell bulk Microsoft 365 licenses for corporate teams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, as authorized partners, we provide bulk volume licensing for Microsoft 365, Windows Server, and Office standard editions with dedicated local billing support."
        }
      },
      {
        "@type": "Question",
        "name": "Can you assist with enterprise antivirus and endpoint protection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we deploy centralized endpoint security solutions like CrowdStrike and Sophos to protect your entire corporate network from ransomware and data breaches."
        }
      },
      {
        "@type": "Question",
        "name": "How is enterprise software volume licensing priced?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Volume licensing costs scale based on your total user seat count and required subscription tiers. We leverage our authorized OEM partner status to secure the best bulk discounts for your team."
        }
      }
    ]
  };

  const faqItems = [
    {
      question: "Do you sell bulk Microsoft 365 licenses for corporate teams?",
      answer: "Yes, as authorized partners, we provide bulk volume licensing for Microsoft 365, Windows Server, and Office standard editions with dedicated local billing support."
    },
    {
      question: "Can you assist with enterprise antivirus and endpoint protection?",
      answer: "Yes, we deploy centralized endpoint security solutions like CrowdStrike and Sophos to protect your entire corporate network from ransomware and data breaches."
    },
    {
      question: "How is enterprise software volume licensing priced?",
      answer: <>Volume licensing costs scale based on your total user seat count and required subscription tiers. We leverage our authorized OEM partner status to secure the best bulk discounts for your team. <Link href="/contact" className="text-primary hover:underline font-medium">Request a custom software quote.</Link></>
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
          <span className="text-primary">Enterprise Software</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Licensing & Security</Typography>
            <Typography variant="h1" className="mb-6">Corporate Software & Endpoint Security</Typography>
            <Typography variant="lead">
              Ensure your business runs legally, securely, and efficiently. We provide comprehensive enterprise software licensing, from everyday productivity suites to advanced server virtualization and cybersecurity defenses.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Request a License Quote</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Our Software Portfolio</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            Navigate the complexities of enterprise licensing with our authorized procurement specialists.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {softwareTypes.map((type, i) => (
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
            <Typography variant="h2" className="text-white text-center mb-8">Why Procure Software with Us?</Typography>
            <Typography variant="lead" className="text-center text-beige/70 mb-12">
              Avoid hefty non-compliance fines and simplify your IT billing by consolidating your hardware and software procurement.
            </Typography>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FadeIn delay={0.1}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Audit Compliance</Typography>
                  <Typography variant="small" className="text-beige/75">Guaranteed compliance with complex OEM software audits and licensing regulations.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Licensing Guidance</Typography>
                  <Typography variant="small" className="text-beige/75">Expert guidance on navigating volume licensing versus subscription models for your scale.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Centralized Management</Typography>
                  <Typography variant="small" className="text-beige/75">Streamlined, centralized license management and proactive tracking of upcoming renewals.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <ArrowRightLeft className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Migration Assistance</Typography>
                  <Typography variant="small" className="text-beige/75">Seamless deployment assistance and secure data migration for platforms like Microsoft 365.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Tags className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Bundled Pricing</Typography>
                  <Typography variant="small" className="text-beige/75">Aggressive bundled pricing when enterprise software is purchased with our IT hardware.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Security Assessments</Typography>
                  <Typography variant="small" className="text-beige/75">Professional VAPT and comprehensive security posture assessments available.</Typography>
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
            <Typography variant="lead">Common questions about enterprise software and volume licensing.</Typography>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} direction="up">
          <FAQAccordion items={faqItems} />
        </FadeIn>
      </Section>
    </>
  );
}

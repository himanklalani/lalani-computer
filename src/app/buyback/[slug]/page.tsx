import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Recycle, 
  Server, 
  Laptop, 
  Network, 
  Banknote, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Truck,
  Building,
  Sparkles
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CorporateAssetInquiry } from "@/components/conversion/CorporateAssetInquiry";
import { BUYBACK_CATEGORIES, BuybackCategory } from "@/lib/data/buybackData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(BUYBACK_CATEGORIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category: BuybackCategory | undefined = BUYBACK_CATEGORIES[slug];

  if (!category) {
    return { title: "Buyback Service Not Found | Lalani Computers" };
  }

  return {
    alternates: { canonical: `https://www.lalanicomputers.com/buyback/${category.slug}` },
    title: `${category.metaTitle} | Lalani Computers`,
    description: category.metaDescription,
    keywords: [
      category.title.toLowerCase(),
      `${category.title.toLowerCase()} mumbai`,
      "corporate it asset disposition itad mumbai",
      "enterprise hardware liquidation india",
      "lalani computers buyback"
    ],
    openGraph: {
      title: `${category.metaTitle} | Lalani Computers`,
      description: category.metaDescription,
      url: `https://www.lalanicomputers.com/buyback/${category.slug}`,
      type: "article"
    }
  };
}

export default async function BuybackCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category: BuybackCategory | undefined = BUYBACK_CATEGORIES[slug];

  if (!category) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": category.title,
        "description": category.metaDescription,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Lalani Computers",
          "telephone": "+91-93233-32850",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "59, Janmabhoomi Marg, Fort",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400001",
            "addressCountry": "IN"
          }
        },
        "areaServed": "India",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": category.title,
          "itemListElement": category.eligibleEquipment.map((eq) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": eq.category,
              "description": eq.models
            }
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lalanicomputers.com" },
          { "@type": "ListItem", "position": 2, "name": "Corporate IT Buyback", "item": "https://www.lalanicomputers.com/buyback" },
          { "@type": "ListItem", "position": 3, "name": category.title, "item": `https://www.lalanicomputers.com/buyback/${category.slug}` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": category.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  const whatsAppMessage = `Hi, we are looking for a corporate IT buyback quotation for ${category.title}. Can we discuss on-site audit and valuation?`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3.5 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/buyback" className="hover:text-primary transition-colors">Corporate Buyback</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">{category.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <Section variant="dark" className="pt-16 pb-20 relative bg-primary-dark">
        <div className="max-w-5xl mx-auto text-center px-4">
          <FadeIn>
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-primary-light border border-white/15 text-xs font-bold uppercase tracking-wider mb-6">
              <Recycle className="w-3.5 h-3.5" />
              <span>{category.eyebrow}</span>
            </div>
            <Typography variant="h1" className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {category.headline}
            </Typography>
            <Typography variant="lead" className="text-beige/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              {category.subheadline}
            </Typography>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left mb-10">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Banknote className="w-4 h-4 text-emerald-400 mb-1" />
                <div className="text-white font-bold text-xs sm:text-sm">Instant RTGS</div>
                <div className="text-beige/60 text-[11px]">{category.payoutTimeline}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-primary-light mb-1" />
                <div className="text-white font-bold text-xs sm:text-sm">NIST 800-88</div>
                <div className="text-beige/60 text-[11px]">Sanitized Wiping Protocols</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Truck className="w-4 h-4 text-emerald-400 mb-1" />
                <div className="text-white font-bold text-xs sm:text-sm">Doorstep Logistics</div>
                <div className="text-beige/60 text-[11px]">{category.pickupCoverage}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <FileText className="w-4 h-4 text-primary-light mb-1" />
                <div className="text-white font-bold text-xs sm:text-sm">Serialized Reports</div>
                <div className="text-beige/60 text-[11px]">Per-Device Audit Trail</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#asset-inquiry">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary-light">
                  Request Corporate Valuation
                </Button>
              </a>
              <a
                href={`https://wa.me/919323332850?text=${encodeURIComponent(whatsAppMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white border-0">
                  Discuss on WhatsApp
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Direct Answer Block for AEO */}
      <section className="bg-warm-bg1/60 py-8 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
            Program Parameters & Standards
          </p>
          <p className="text-sm md:text-base text-text-dark/90 leading-relaxed font-medium">
            {category.overview}
          </p>
        </div>
      </section>

      {/* Corporate Evaluation Parameters (Structured for GEO) */}
      <Section variant="light" className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Typography variant="eyebrow" className="text-primary mb-2">Valuation Benchmarks</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              Corporate Asset Evaluation Framework
            </Typography>
            <Typography variant="lead" className="text-text-dark/70 text-xs sm:text-sm">
              How residual valuation is computed across hardware generations and operational conditions.
            </Typography>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-warm-bg1/70 border-b border-gray-200 text-text-dark font-heading">
                  <th className="p-4 font-bold uppercase tracking-wider text-xs">Evaluation Parameter</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-xs">Scope & Criteria</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-xs">Valuation Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-text-dark/85">
                {category.evaluationParameters.map((matrix, idx) => (
                  <tr key={idx} className="hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-semibold text-primary">{matrix.parameter}</td>
                    <td className="p-4 text-xs text-text-dark/70">{matrix.scope}</td>
                    <td className="p-4 text-xs font-medium text-text-dark">{matrix.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Eligible Equipment Deep Dive */}
      <Section variant="dark" className="py-16 bg-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Typography variant="eyebrow" className="text-primary-light mb-2">Hardware Eligibility</Typography>
            <Typography variant="h2" className="text-white text-2xl sm:text-3xl font-extrabold mb-3">
              Accepted Equipment Specifications
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.eligibleEquipment.map((eq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h4 className="font-heading font-bold text-base text-white">
                  {eq.category}
                </h4>
                <div className="text-xs text-primary-light font-medium">
                  {eq.models}
                </div>
                <div className="text-xs text-beige/80 space-y-1 pt-1 border-t border-white/10">
                  <div><strong>Condition Accepted:</strong> {eq.conditionAccepted}</div>
                  <div><strong>Valuation Criteria:</strong> {eq.valuationCriteria}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Compliance & Sanitization Protocols */}
      <Section variant="light" className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Typography variant="eyebrow" className="text-primary mb-2">Audit Assurance</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              Data Security & Reverse Logistics Standards
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.complianceFeatures.map((comp, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-warm-bg1/40 border border-primary/10 space-y-2">
                <div className="flex items-center gap-2 font-heading font-bold text-base text-text-dark">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{comp.title}</span>
                </div>
                <p className="text-xs text-text-dark/70 leading-relaxed">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4-Step Liquidation Workflow */}
      <Section variant="dark" className="py-16 bg-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Typography variant="eyebrow" className="text-primary-light mb-2">Execution Pipeline</Typography>
            <Typography variant="h2" className="text-white text-2xl sm:text-3xl font-extrabold mb-3">
              Frictionless 4-Step Decommissioning
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.liquidationSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="text-3xl font-heading font-extrabold text-primary-light/40">
                  {step.step}
                </div>
                <h4 className="font-heading font-bold text-base text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-beige/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Corporate Asset Inquiry Form */}
      <section id="asset-inquiry" className="py-16 bg-warm-bg1/40 border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Typography variant="eyebrow" className="text-primary mb-2">Corporate Request</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              Request Valuation for {category.title}
            </Typography>
          </div>

          <CorporateAssetInquiry />
        </div>
      </section>

      {/* FAQ Section */}
      <Section variant="light" className="py-16 border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <Typography variant="eyebrow" className="text-primary mb-2">Frequently Asked Questions</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              {category.title} FAQs
            </Typography>
          </div>

          <FAQAccordion items={category.faqs} />
        </div>
      </Section>
    </>
  );
}

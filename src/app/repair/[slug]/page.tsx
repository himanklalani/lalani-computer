import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Wrench, 
  Cpu, 
  Server, 
  Laptop, 
  Network, 
  Clock, 
  ShieldCheck, 
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
import { RepairServiceBooking } from "@/components/conversion/RepairServiceBooking";
import { REPAIR_CATEGORIES, RepairCategory, PRIMARY_REPAIR_CATEGORIES } from "@/lib/data/repairData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(REPAIR_CATEGORIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category: RepairCategory | undefined = REPAIR_CATEGORIES[slug];

  if (!category) {
    return { title: "Repair Service Not Found | Lalani Computers" };
  }

  return {
    alternates: { canonical: `https://www.lalanicomputers.com/repair/${category.slug}` },
    title: `${category.metaTitle} | Lalani Computers`,
    description: category.metaDescription,
    keywords: [
      category.title.toLowerCase(),
      `${category.title.toLowerCase()} mumbai`,
      "doorstep laptop repair mumbai",
      "on-site computer repair mumbai",
      "lalani computers repair"
    ],
    openGraph: {
      title: `${category.metaTitle} | Lalani Computers`,
      description: category.metaDescription,
      url: `https://www.lalanicomputers.com/repair/${category.slug}`,
      type: "article"
    }
  };
}

export default async function RepairCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category: RepairCategory | undefined = REPAIR_CATEGORIES[slug];

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
        "areaServed": "Mumbai Metropolitan Region",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": category.title,
          "itemListElement": category.commonIssues.map((issue) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": issue.issue,
              "description": issue.resolution
            }
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lalanicomputers.com" },
          { "@type": "ListItem", "position": 2, "name": "Repair Services", "item": "https://www.lalanicomputers.com/repair" },
          { "@type": "ListItem", "position": 3, "name": category.title, "item": `https://www.lalanicomputers.com/repair/${category.slug}` }
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

  const whatsAppMessage = `Hi, I need help with an IT hardware repair (${category.title}). Can we schedule a doorstep pickup or on-site visit?`;

  // Sibling repair categories (excluding current category)
  const siblingRepairCategories = PRIMARY_REPAIR_CATEGORIES.filter(
    (cat) => cat.slug !== category.slug && cat.slug !== slug
  );

  // Context-aware buyback mapping for BER (Beyond Economical Repair) / ITAD liquidation
  const buybackBridgeConfig = (() => {
    if (slug === "servers") {
      return {
        title: "Retiring Aging Compute Nodes? Server & Storage Buyback",
        description: "If your Dell PowerEdge, HPE ProLiant, or SAN storage arrays have reached end-of-life or replacement parts are uneconomical, recover residual capital. We provide careful on-site de-racking, NIST 800-88 compliant drive wiping, and immediate RTGS settlement.",
        ctaText: "Explore Enterprise Server Buyback",
        ctaHref: "/buyback/enterprise-servers-storage"
      };
    }
    if (slug === "networking-infrastructure") {
      return {
        title: "Upgrading Network Core? Liquidate Switches & Firewalls",
        description: "Replacing legacy Cisco Catalyst, Aruba switches, or enterprise firewalls? Don't let functional network hardware depreciate in server rooms. Lalani Computers buys back enterprise switches, routers, and commercial Wi-Fi gear in bulk.",
        ctaText: "Explore Network Switch Buyback",
        ctaHref: "/buyback/networking-switches-infrastructure"
      };
    }
    // Default for laptop-desktop-repairs, motherboard-component-repair, etc.
    return {
      title: "Hardware Beyond Economical Repair? Liquidate Your Fleet",
      description: "If severe motherboard corrosion, cracked chassis, or generational obsolescence make repair costs uneconomical, recover top residual value instead. We offer bulk corporate laptop buyback with NIST 800-88 compliant data wiping and immediate payment.",
      ctaText: "Explore Corporate Laptop Buyback",
      ctaHref: "/buyback/corporate-it-fleets"
    };
  })();

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
          <Link href="/repair" className="hover:text-primary transition-colors">IT Repair</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">{category.title}</span>
        </div>
      </div>

      {/* Category Hero */}
      <Section variant="dark" className="pt-16 pb-20 relative bg-primary-dark">
        <div className="max-w-5xl mx-auto text-center px-4">
          <FadeIn>
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-primary-light border border-white/15 text-xs font-bold uppercase tracking-wider mb-6">
              <Wrench className="w-3.5 h-3.5" />
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
                <Clock className="w-4 h-4 text-primary-light mb-1" />
                <div className="text-white font-bold text-xs sm:text-sm">{category.turnaroundTime}</div>
                <div className="text-beige/60 text-[11px]">Turnaround Time</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
                <div className="text-white font-bold text-xs sm:text-sm">{category.warrantyPeriod}</div>
                <div className="text-beige/60 text-[11px]">Comprehensive Warranty</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Truck className="w-4 h-4 text-emerald-400 mb-1" />
                <div className="text-white font-bold text-xs sm:text-sm">Doorstep Pickup</div>
                <div className="text-beige/60 text-[11px]">Mumbai MMR Coverage</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Building className="w-4 h-4 text-primary-light mb-1" />
                <div className="text-white font-bold text-xs sm:text-sm">On-Site Fleet Visits</div>
                <div className="text-beige/60 text-[11px]">For Corporate Offices</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#service-booking">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary-light">
                  Book Doorstep / On-Site Repair
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
            Service Scope & Operations
          </p>
          <p className="text-sm md:text-base text-text-dark/90 leading-relaxed font-medium">
            {category.overview}
          </p>
        </div>
      </section>

      {/* Common Issues & Diagnostic Table (GEO Structured Specification) */}
      <Section variant="light" className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Typography variant="eyebrow" className="text-primary mb-2">Common Faults & Remediation</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              Diagnostic & Resolution Breakdown
            </Typography>
            <Typography variant="lead" className="text-text-dark/70 text-xs sm:text-sm">
              Standard engineering protocols and turnaround times applied for {category.title}.
            </Typography>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-warm-bg1/70 border-b border-gray-200 text-text-dark font-heading">
                  <th className="p-4 font-bold uppercase tracking-wider text-xs">Identified Issue</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-xs">Observed Symptoms</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-xs">Resolution Protocol</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-xs whitespace-nowrap">Est. Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-text-dark/85">
                {category.commonIssues.map((item, idx) => (
                  <tr key={idx} className="hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-semibold text-primary">{item.issue}</td>
                    <td className="p-4 text-xs text-text-dark/70">{item.symptoms}</td>
                    <td className="p-4 text-xs">{item.resolution}</td>
                    <td className="p-4 whitespace-nowrap font-mono text-xs font-bold text-text-dark">
                      {item.estimatedTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Core Engineering Capabilities Grid */}
      <Section variant="dark" className="py-16 bg-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Typography variant="eyebrow" className="text-primary-light mb-2">Technical Standards</Typography>
            <Typography variant="h2" className="text-white text-2xl sm:text-3xl font-extrabold mb-3">
              Specialized Service Capabilities
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.capabilities.map((cap, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 font-heading font-bold text-base text-white">
                  <Sparkles className="w-4 h-4 text-primary-light flex-shrink-0" />
                  <span>{cap.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-beige/70 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          {/* Supported Hardware Brands */}
          <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-primary-light mb-3">
              Supported Hardware Platforms & Manufacturers
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {category.supportedBrands.map((brand, bIdx) => (
                <span
                  key={bIdx}
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 text-white text-xs font-medium border border-white/15"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 4-Step Engineering Workflow */}
      <Section variant="light" className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Typography variant="eyebrow" className="text-primary mb-2">Service Lifecycle</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              How Doorstep & On-Site Repair Works
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.workflowSteps.map((wf) => (
              <div key={wf.step} className="p-6 rounded-2xl bg-warm-bg1/40 border border-primary/10 space-y-3 relative">
                <div className="text-3xl font-heading font-extrabold text-primary/30">
                  {wf.step}
                </div>
                <h4 className="font-heading font-bold text-base text-text-dark">
                  {wf.title}
                </h4>
                <p className="text-xs text-text-dark/70 leading-relaxed">
                  {wf.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Beyond Economical Repair (Cross-Funnel Buyback Bridge) */}
      <Section variant="light" className="py-12 bg-white border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="p-6 md:p-8 rounded-3xl bg-warm-bg1/60 border border-primary/15 shadow-sm space-y-4">
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-text-dark">
              {buybackBridgeConfig.title}
            </h3>
            <p className="text-xs sm:text-sm text-text-dark/75 leading-relaxed">
              {buybackBridgeConfig.description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link href={buybackBridgeConfig.ctaHref} className="flex-1 sm:flex-none">
                <Button 
                  size="md" 
                  className="w-full sm:w-auto whitespace-nowrap bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>{buybackBridgeConfig.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/buyback" className="flex-1 sm:flex-none">
                <Button 
                  variant="outline" 
                  size="md" 
                  className="w-full sm:w-auto whitespace-nowrap bg-white hover:bg-warm-bg1 text-text-dark border-primary/20 font-semibold py-3 px-6 text-sm rounded-xl transition-all"
                >
                  View All ITAD Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Embedded Service Booking Component */}
      <section id="service-booking" className="py-16 bg-warm-bg1/40 border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Typography variant="eyebrow" className="text-primary mb-2">Schedule Service</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              Book Doorstep Pickup for {category.title}
            </Typography>
          </div>

          <RepairServiceBooking />
        </div>
      </section>

      {/* FAQ Section */}
      <Section variant="light" className="py-16 border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <Typography variant="eyebrow" className="text-primary mb-2">Common Inquiries</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              {category.title} FAQs
            </Typography>
          </div>

          <FAQAccordion items={category.faqs} />
        </div>
      </Section>

      {/* Sibling Repair Services Navigation */}
      <Section variant="dark" className="py-16 bg-primary-dark text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Typography variant="eyebrow" className="text-primary-light mb-2">Related Support</Typography>
            <Typography variant="h2" className="text-white text-2xl sm:text-3xl font-extrabold mb-3">
              Explore Other Hardware Repair Services
            </Typography>
            <Typography variant="lead" className="text-beige/70 text-xs sm:text-sm">
              Need diagnostics or component replacements for other office systems? Scheduled doorstep collection across Mumbai MMR and on-site corporate engineer visits.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siblingRepairCategories.map((sibling) => (
              <div
                key={sibling.slug}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary-light/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-light">
                    {sibling.turnaroundTime}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white mt-1 mb-2 group-hover:text-primary-light transition-colors">
                    {sibling.title}
                  </h3>
                  <p className="text-xs text-beige/70 leading-relaxed mb-4 line-clamp-2">
                    {sibling.subheadline}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-beige/80">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{sibling.warrantyPeriod}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Doorstep Pickup / On-Site</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href={`/repair/${sibling.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-light hover:text-white transition-colors"
                  >
                    <span>View Failure Modes & Steps</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/repair"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary-light hover:text-white transition-colors"
            >
              <span>View All IT Hardware Repair Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

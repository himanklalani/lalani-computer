import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Recycle, 
  Server, 
  Laptop, 
  Network, 
  Cpu, 
  ShieldCheck, 
  Banknote, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Building,
  Truck,
  HardDrive
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BulkManifestDropzone } from "@/components/conversion/BulkManifestDropzone";
import { CorporateAssetInquiry } from "@/components/conversion/CorporateAssetInquiry";
import { BUYBACK_CATEGORIES, PRIMARY_BUYBACK_CATEGORIES } from "@/lib/data/buybackData";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.lalanicomputers.com/buyback" },
  title: "Corporate IT Asset Buyback & ITAD Liquidation Mumbai | Lalani Computers",
  description: "Enterprise IT asset disposition (ITAD) for corporate laptop fleets, rack servers, SAN storage, Cisco switches & enterprise UPS systems in Mumbai. NIST 800-88 data sanitization & immediate RTGS.",
  keywords: [
    "corporate it asset buyback mumbai",
    "enterprise itad liquidation india",
    "bulk laptop liquidation mumbai",
    "sell used enterprise servers mumbai",
    "decommissioned rack server buyback",
    "cisco switch buyback mumbai",
    "enterprise ups buyback vertiv apc",
    "nist 800-88 data sanitization mumbai"
  ],
  openGraph: {
    title: "Corporate IT Asset Buyback & ITAD Portal Mumbai | Lalani Computers",
    description: "Enterprise hardware liquidation: laptop fleets, rack servers, network switches, enterprise UPS, and server enclosures. NIST 800-88 sanitized wiping and immediate corporate RTGS settlement.",
    url: "https://www.lalanicomputers.com/buyback",
    type: "website"
  }
};

export default function BuybackPortalPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.lalanicomputers.com/#localbusiness",
        "name": "Lalani Computers - Corporate ITAD & Asset Buyback",
        "telephone": "+91-93233-32850",
        "url": "https://www.lalanicomputers.com/buyback",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "59, Janmabhoomi Marg, Fort",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400001",
          "addressCountry": "IN"
        },
        "priceRange": "₹₹₹"
      },
      {
        "@type": "Service",
        "name": "Corporate IT Asset Disposition (ITAD) & Hardware Liquidation",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Lalani Computers"
        },
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "Country", "name": "India" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Corporate Liquidation Programs",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Laptop & Desktop Fleet Buyback" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Rack Server & Storage Decommissioning" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Switch, Router & Commercial Wi-Fi Buyback" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise UPS & Server Rack Liquidation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NIST 800-88 Sanitized Data Wiping Protocols" } }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lalanicomputers.com" },
          { "@type": "ListItem", "position": 2, "name": "Corporate IT Asset Buyback", "item": "https://www.lalanicomputers.com/buyback" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is corporate data sanitized during IT asset liquidation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every storage drive undergoes multi-pass cryptographic data wiping protocols adhering to NIST 800-88 guidelines. We issue an itemized serialized data destruction report per drive for corporate compliance records."
            }
          },
          {
            "@type": "Question",
            "name": "What corporate equipment is eligible for bulk buyback?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We buy corporate laptop and desktop fleets (Dell, HP, Lenovo, Apple), 1U–4U rack servers (Dell PowerEdge, HPE ProLiant), SAN/NAS arrays, managed network switches (Cisco, Aruba), enterprise online UPS systems (APC, Vertiv), and 42U server racks."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly is payment released for bulk enterprise liquidations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Following on-site serial audit and physical verification, full payment is released immediately via RTGS or NEFT, supported by official GST purchase invoicing."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide on-site de-racking and reverse logistics?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our logistics and engineering crew handles on-site de-racking, anti-static packing, and secure transportation across the Mumbai Metropolitan Region (MMR) as well as Pan-India corporate hubs."
            }
          }
        ]
      }
    ]
  };

  const faqList = [
    {
      question: "How is corporate data sanitized during IT asset liquidation?",
      answer: "Every storage drive undergoes multi-pass cryptographic data wiping protocols adhering to NIST 800-88 guidelines. We issue an itemized serialized data destruction report per drive for corporate compliance records."
    },
    {
      question: "What corporate equipment is eligible for bulk buyback?",
      answer: "We buy corporate laptop and desktop fleets (Dell, HP, Lenovo, Apple), 1U–4U rack servers (Dell PowerEdge, HPE ProLiant), SAN/NAS arrays, managed network switches (Cisco, Aruba), enterprise online UPS systems (APC, Vertiv), and 42U server racks."
    },
    {
      question: "How quickly is payment released for bulk enterprise liquidations?",
      answer: "Following on-site serial audit and physical verification, full payment is released immediately via RTGS or NEFT, supported by official GST purchase invoicing."
    },
    {
      question: "Do you provide on-site de-racking and reverse logistics?",
      answer: "Yes, our logistics and engineering crew handles on-site de-racking, anti-static packing, and secure transportation across the Mumbai Metropolitan Region (MMR) as well as Pan-India corporate hubs."
    },
    {
      question: "What is the minimum lot size for corporate ITAD?",
      answer: "Our corporate program is optimized for businesses decommissioning batches of 10 or more laptops/desktops, or multiple server racks, switches, and infrastructure peripherals."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3.5 flex items-center gap-2 text-xs sm:text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Corporate IT Asset Buyback & ITAD</span>
        </div>
      </div>

      {/* Clean, Spacious Hero Section */}
      <Section variant="dark" className="pt-16 pb-20 relative overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
          <FadeIn>
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-primary-light border border-white/15 text-xs font-bold uppercase tracking-wider mb-6">
              <Building className="w-3.5 h-3.5" />
              <span>Corporate IT Hardware Buyback • Mumbai MMR & Pan-India</span>
            </div>
            <Typography variant="h1" className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Corporate IT Fleet & Server Infrastructure Liquidation
            </Typography>
            <Typography variant="lead" className="text-beige/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Convert retired company laptops, enterprise rack servers, network switches, and UPS systems into instant capital. On-site audit, compliant NIST 800-88 data wiping, and direct RTGS settlement.
            </Typography>

            {/* Service Delivery Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left mb-10">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Banknote className="w-5 h-5 text-emerald-400 mb-1" />
                <div className="text-white font-heading font-bold text-sm">Instant RTGS</div>
                <div className="text-beige/70 text-xs">Direct Wire Payout</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
                <div className="text-white font-heading font-bold text-sm">NIST 800-88</div>
                <div className="text-beige/70 text-xs">Sanitized Wiping Protocols</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Truck className="w-5 h-5 text-primary-light mb-1" />
                <div className="text-white font-heading font-bold text-sm">Free On-Site Pickup</div>
                <div className="text-beige/70 text-xs">De-Racking & Transit</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <FileText className="w-5 h-5 text-primary-light mb-1" />
                <div className="text-white font-heading font-bold text-sm">GST Invoice</div>
                <div className="text-beige/70 text-xs">Serialized Audit Trail</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#manifest-dropzone">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary-dark">
                  Upload Inventory Sheet
                </Button>
              </a>
              <a
                href="https://wa.me/919323332850?text=Hi,%20we%20have%20corporate%20IT%20hardware%20(servers/laptops/UPS)%20for%20buyback.%20Can%20we%20discuss%20a%20quote?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white border-0">
                  Chat on WhatsApp
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
            Corporate ITAD Scope & Compliance
          </p>
          <p className="text-sm md:text-base text-text-dark/90 leading-relaxed font-medium">
            <strong>Lalani Computers</strong> provides corporate IT Asset Disposition (ITAD) and hardware decommissioning across Mumbai and Pan-India. We liquidate corporate laptop and desktop fleets, enterprise rack servers, SAN storage arrays, managed switches, and heavy facility power infrastructure (online UPS units and server racks). All storage media is sanitized using NIST 800-88 protocols with serialized destruction reports, verified on-site pickup, and immediate RTGS settlement.
          </p>
        </div>
      </section>

      {/* Dedicated Manifest Dropzone Section */}
      <section id="manifest-dropzone" className="py-16 md:py-20 bg-warm-bg1/40 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Typography variant="eyebrow" className="text-primary mb-2">Fast Corporate Valuation</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              Upload Fleet Inventory
            </Typography>
            <Typography variant="lead" className="text-text-dark/70 text-xs sm:text-sm">
              Drag and drop your asset sheet (.xlsx, .csv, .pdf) or enter your equipment details below. Receive a formal valuation offer within 4 business hours.
            </Typography>
          </div>

          <BulkManifestDropzone />
        </div>
      </section>

      {/* Expanded B2B Hardware Scope Grid */}
      <Section variant="light" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Typography variant="eyebrow" className="text-primary mb-2">Corporate Asset Categories</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
              Eligible Enterprise Hardware for Bulk Liquidation
            </Typography>
            <Typography variant="lead" className="text-text-dark/70 text-sm sm:text-base">
              End-to-end purchasing power across client computing fleets, data center compute, network infrastructure, and facility power systems.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Class 1: Laptop Fleets */}
            <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-dark">Corporate Laptop Fleets</h3>
              <p className="text-xs sm:text-sm text-text-dark/70 leading-relaxed">
                Bulk liquidation of Dell Latitude, HP EliteBook, Lenovo ThinkPad, and Apple MacBook fleets. Tested working units and mixed operational batches.
              </p>
              <div className="text-[11px] text-text-dark/80 pt-2 border-t border-gray-100 font-medium">
                • Batch sizes: 10 to 500+ machines<br />
                • NIST 800-88 data wiping with serialized reports
              </div>
            </div>

            {/* Class 2: Enterprise Servers & SAN */}
            <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-dark">Servers & Storage Arrays</h3>
              <p className="text-xs sm:text-sm text-text-dark/70 leading-relaxed">
                1U–4U rack servers (Dell PowerEdge, HPE ProLiant, Supermicro), SAN/NAS storage arrays, ECC registered RDIMMs, and 12G SAS hard drives.
              </p>
              <div className="text-[11px] text-text-dark/80 pt-2 border-t border-gray-100 font-medium">
                • Full data center cage de-racking assistance<br />
                • Cryptographic multi-pass drive sanitization
              </div>
            </div>

            {/* Class 3: Network Switches & Wi-Fi */}
            <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-dark">Enterprise Networking</h3>
              <p className="text-xs sm:text-sm text-text-dark/70 leading-relaxed">
                Managed Cisco Catalyst, Aruba CX, Juniper, and Fortinet switches, core routers, commercial Wi-Fi 6 APs, and optical transceivers.
              </p>
              <div className="text-[11px] text-text-dark/80 pt-2 border-t border-gray-100 font-medium">
                • Hardware NVRAM purge and credential wiping<br />
                • 24-port / 48-port PoE+ high-value procurement
              </div>
            </div>

            {/* Class 4: Heavy Infrastructure */}
            <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-dark">Enterprise UPS & Racks</h3>
              <p className="text-xs sm:text-sm text-text-dark/70 leading-relaxed">
                Heavy facility infrastructure: Online modular UPS systems (APC Symmetra/Smart-UPS, Vertiv/Liebert), managed rack PDUs, and 42U/48U server enclosures.
              </p>
              <div className="text-[11px] text-text-dark/80 pt-2 border-t border-gray-100 font-medium">
                • Heavy equipment rigging and logistics removal<br />
                • Eco-friendly battery and chassis disposition
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Dedicated Category Exploration */}
      <Section variant="dark" className="py-16 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Typography variant="eyebrow" className="text-primary-light mb-2">Detailed Category Hubs</Typography>
            <Typography variant="h2" className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
              Explore Sub-Category Liquidation Standards
            </Typography>
            <Typography variant="lead" className="text-beige/70 text-xs sm:text-sm">
              Review evaluation criteria, eligible models, and de-installation workflows.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRIMARY_BUYBACK_CATEGORIES.map((cat) => (
              <div
                key={cat.slug}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary-light/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-light">
                    {cat.payoutTimeline}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white mt-1 mb-2 group-hover:text-primary-light transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-beige/70 leading-relaxed mb-4 line-clamp-3">
                    {cat.subheadline}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-beige/80">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{cat.pickupCoverage}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>NIST 800-88 Data Sanitization</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href={`/buyback/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-light hover:text-white transition-colors"
                  >
                    <span>View Evaluation Criteria</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Corporate Asset Inquiry (Replacing Calculator) */}
      <section id="asset-inquiry" className="py-16 md:py-20 bg-warm-bg1/40 border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Typography variant="eyebrow" className="text-primary mb-2">Formal Valuation Request</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              Request Corporate Hardware Valuation Offer
            </Typography>
            <Typography variant="lead" className="text-text-dark/70 text-xs sm:text-sm">
              Submit your approximate fleet size or asset mix for an itemized enterprise valuation within 4 business hours.
            </Typography>
          </div>

          <CorporateAssetInquiry />
        </div>
      </section>

      {/* Wholesale Refurbished Hardware Advantage */}
      <Section variant="dark" className="py-16 bg-primary-dark text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary-light text-xs font-bold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>The Lalani B2B Procurement Advantage</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Direct Secondary Distribution: Cutting Out Third-Party Brokers
              </h3>
              <p className="text-sm text-beige/80 leading-relaxed">
                Because Lalani Computers is an active enterprise hardware supplier and wholesale distributor of tested server components across India, we do not rely on third-party scrap middlemen. This enables us to offer significantly higher residual payouts to corporate clients while maintaining verified inventory for corporate expansions.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-beige/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Tested ECC DDR4 / DDR5 RDIMMs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>12G SAS & Enterprise NVMe Disks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dell PERC & HPE RAID Cards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Refurbished 1U/2U Rack Servers</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto flex-shrink-0">
              <Link href="/solutions/it-asset-buyback" className="w-full sm:w-auto">
                <Button 
                  size="md" 
                  className="w-full sm:w-auto whitespace-nowrap bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 text-sm sm:text-base rounded-xl shadow-md transition-all"
                >
                  Explore Wholesale Catalog
                </Button>
              </Link>
              <a
                href="https://wa.me/919323332850?text=Hi,%20we%20have%20corporate%20hardware%20for%20buyback.%20Can%20we%20discuss%20a%20quote?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="darkCard" 
                  size="md" 
                  className="w-full sm:w-auto whitespace-nowrap bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold py-3 px-6 text-sm sm:text-base rounded-xl transition-all"
                >
                  Wholesale WhatsApp Desk
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Refurbish & Extend Fleet Lifecycle (Cross-Funnel Repair Bridge) */}
      <Section variant="light" className="py-16 md:py-20 bg-warm-bg1/40 border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-primary font-bold text-xs uppercase tracking-wider mb-3">
              Fleet Lifecycle Extension
            </div>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Not Ready to Retire Your Fleet? Extend Lifespan with Component Repairs
            </Typography>
            <Typography variant="lead" className="text-text-dark/75 text-sm sm:text-base leading-relaxed">
              Before liquidating serviceable corporate systems or budgeting for expensive new OEM replacements, consider component-level diagnostics. From motherboard IC fixes to genuine display and battery replacements, we restore hardware performance at 60%–75% lower cost.
            </Typography>
          </div>

          {/* 3 Core Repair Assurance Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            <div className="p-5 rounded-2xl bg-white border border-primary/10 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-text-dark mb-1">
                  30-Day Service Warranty
                </h4>
                <p className="text-xs text-text-dark/70 leading-relaxed">
                  Comprehensive 30-day warranty backing all replaced components, soldered circuits, and serviced subsystems.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-primary/10 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-text-dark mb-1">
                  Chip-Level Engineering
                </h4>
                <p className="text-xs text-text-dark/70 leading-relaxed">
                  We isolate and replace specific failed MOSFETs, PWM controllers, and power ICs instead of costly board swaps.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-primary/10 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-text-dark mb-1">
                  Doorstep & On-Site Dispatch
                </h4>
                <p className="text-xs text-text-dark/70 leading-relaxed">
                  Scheduled courier pickup across Mumbai MMR or field technician visits directly to your corporate facility.
                </p>
              </div>
            </div>
          </div>

          {/* Category Repair Deep Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <Link
              href="/repair/laptop-desktop-repairs"
              className="group p-5 rounded-2xl bg-white hover:bg-warm-bg1/60 border border-primary/15 hover:border-primary/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                  <Laptop className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-text-dark group-hover:text-primary transition-colors mb-1.5">
                  Laptop & Desktop Care
                </h3>
                <p className="text-xs text-text-dark/70 leading-relaxed">
                  FHD/IPS displays, OEM batteries, keyboards, hinge fabrication, and SSD speed upgrades.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-primary/10 flex items-center justify-between text-xs font-semibold text-primary">
                <span>View Repair Options</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/repair/motherboard-component-repair"
              className="group p-5 rounded-2xl bg-white hover:bg-warm-bg1/60 border border-primary/15 hover:border-primary/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-text-dark group-hover:text-primary transition-colors mb-1.5">
                  Motherboard Diagnostics
                </h3>
                <p className="text-xs text-text-dark/70 leading-relaxed">
                  Short circuit diagnosis, 19V rail tracing, charging IC swaps, and liquid damage recovery.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-primary/10 flex items-center justify-between text-xs font-semibold text-primary">
                <span>View Board Diagnostics</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/repair/servers"
              className="group p-5 rounded-2xl bg-white hover:bg-warm-bg1/60 border border-primary/15 hover:border-primary/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                  <Server className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-text-dark group-hover:text-primary transition-colors mb-1.5">
                  Server & Storage Uptime
                </h3>
                <p className="text-xs text-text-dark/70 leading-relaxed">
                  RAID controller rebuilds, hot-swap PSU replacements, SAS backplanes, and 4-hour SLA on-site dispatch.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-primary/10 flex items-center justify-between text-xs font-semibold text-primary">
                <span>View Server Support</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/repair/networking-infrastructure"
              className="group p-5 rounded-2xl bg-white hover:bg-warm-bg1/60 border border-primary/15 hover:border-primary/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                  <Network className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-text-dark group-hover:text-primary transition-colors mb-1.5">
                  Switch & Wi-Fi Repair
                </h3>
                <p className="text-xs text-text-dark/70 leading-relaxed">
                  PoE auxiliary supply repair, burnt SFP+/RJ45 ports, and enterprise firewall diagnostic service.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-primary/10 flex items-center justify-between text-xs font-semibold text-primary">
                <span>View Network Repair</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Action Row */}
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-primary/15 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-text-dark mb-1">
                Have individual units or fleet batches requiring diagnostics?
              </h4>
              <p className="text-xs sm:text-sm text-text-dark/70">
                Book scheduled doorstep pickup in Mumbai MMR or dispatch an engineer to your corporate office.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
              <Link href="/repair" className="w-full sm:w-auto">
                <Button 
                  size="md" 
                  className="w-full sm:w-auto whitespace-nowrap bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 text-sm rounded-xl shadow-md transition-all"
                >
                  Book Hardware Diagnosis & Repair →
                </Button>
              </Link>
              <a
                href="https://wa.me/919323332850?text=Hi,%20we%20have%20hardware%20needing%20repair%20or%20servicing.%20Can%20we%20discuss%20doorstep%20pickup%20or%20an%20on-site%20visit?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="outline" 
                  size="md" 
                  className="w-full sm:w-auto whitespace-nowrap bg-white hover:bg-warm-bg1 text-text-dark border-primary/25 font-semibold py-3 px-6 text-sm rounded-xl transition-all"
                >
                  WhatsApp Repair Desk
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="light" className="py-16 bg-white border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Typography variant="eyebrow" className="text-primary mb-2">Compliance & Security</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              Frequently Asked Questions: Corporate ITAD
            </Typography>
          </div>

          <FAQAccordion items={faqList} />
        </div>
      </Section>
    </>
  );
}

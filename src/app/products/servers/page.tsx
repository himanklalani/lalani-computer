import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Server, Database, Activity, HardDrive, ShieldCheck, LineChart, Truck, Wrench, Settings, Briefcase, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  alternates: { canonical: '/products/servers' },
  title: "Enterprise Server Dealer Mumbai | Buy Dell, HPE, Lenovo Servers",
  description: "Authorized dealer for Dell, HPE, and Lenovo enterprise servers in Mumbai. We provide tower, rack, and blade servers with full installation and AMC support.",
};

const serverTypes = [
  {
    name: "Rack Servers",
    icon: <Server className="w-6 h-6" />,
    features: ["High-density computing for data centers", "Scalable processor & RAM options", "Hot-swappable drives", "Redundant power supplies"],
    brands: "Dell PowerEdge, HPE ProLiant DL series",
  },
  {
    name: "Tower Servers",
    icon: <Activity className="w-6 h-6" />,
    features: ["Ideal for small to mid-sized remote branch offices", "Quiet acoustic performance", "Expandable storage capacity", "Easy to deploy without a rack"],
    brands: "Lenovo ThinkSystem, HPE ProLiant ML series",
  },
  {
    name: "Enterprise Storage (NAS/SAN)",
    icon: <Database className="w-6 h-6" />,
    features: ["Centralized data management & backup", "High IOPS for database workloads", "RAID configuration for redundancy", "Seamless cloud integration"],
    brands: "Synology, QNAP, Dell PowerVault",
  },
  {
    name: "LTO Tape Drives",
    icon: <HardDrive className="w-6 h-6" />,
    features: ["Air-gapped offline ransomware protection", "Massive archival capacity", "Low cost per terabyte", "Long-term data compliance"],
    brands: "HPE StoreEver, IBM LTO",
  },
];


export default function ServersPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can an enterprise server be deployed in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike standard online suppliers, Lalani Computers maintains a massive local inventory in Fort, Mumbai. Depending on the configuration, we can deliver and deploy Dell, HPE, and Lenovo servers within 24 to 48 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide post-warranty support for enterprise servers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Beyond the standard OEM warranty, we offer comprehensive Annual Maintenance Contracts (AMC) to ensure your mission-critical hardware experiences zero downtime."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide on-site server rack installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our certified engineers handle complete on-site racking, stacking, OS deployment, and custom RAID configurations across Mumbai, Navi Mumbai, and Thane."
        }
      }
    ]
  };

  const faqItems = [
    {
      question: "How quickly can an enterprise server be deployed in Mumbai?",
      answer: "Unlike standard online suppliers, Lalani Computers maintains a massive local inventory in Fort, Mumbai. Depending on the configuration, we can deliver and deploy Dell, HPE, and Lenovo servers within 24 to 48 hours."
    },
    {
      question: "Do you provide post-warranty support for enterprise servers?",
      answer: <>Yes. Beyond the standard OEM warranty, we offer comprehensive <Link href="/solutions" className="text-primary hover:underline font-medium">Annual Maintenance Contracts (AMC)</Link> to ensure your mission-critical hardware experiences zero downtime.</>
    },
    {
      question: "Do you provide on-site server rack installation?",
      answer: "Yes, our certified engineers handle complete on-site racking, stacking, OS deployment, and custom RAID configurations across Mumbai, Navi Mumbai, and Thane."
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
          <span className="text-primary">Servers & Storage</span>
        </div>
      </div>

      {/* Hero */}
      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Enterprise IT Hardware</Typography>
            <Typography variant="h1" className="mb-6">Enterprise Server Dealer & Storage Solutions in Mumbai</Typography>
            <Typography variant="lead">
              Power your mission-critical applications with robust server architecture. From 1U rack servers for tight data centers to massive NAS storage arrays, we supply, configure, and maintain the backbone of your IT infrastructure.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Request a Server Quote</Button></Link>
              <Link href="/solutions"><Button variant="secondary" size="lg">Explore Server AMC</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Server Categories */}
      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Our Server & Storage Portfolio</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            We provide genuine, enterprise-grade hardware customized for your specific database, virtualization, and storage needs.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serverTypes.map((type, i) => (
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

      {/* Why Buy From Us */}
      <Section variant="dark">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-white text-center mb-8">Why Source Servers from Lalani Computers?</Typography>
            <Typography variant="lead" className="text-center text-beige/70 mb-12">
              Buying a server is more than just hardware procurement. It requires precise capacity planning and reliable after-sales support.
            </Typography>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FadeIn delay={0.1}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Authorized Partner Pricing</Typography>
                  <Typography variant="small" className="text-beige/75">Direct procurement discounts for Dell, HPE, and Lenovo enterprise servers.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <LineChart className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Capacity Planning</Typography>
                  <Typography variant="small" className="text-beige/75">Free initial consultation to match server workloads and storage to your business needs.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Rapid Local Delivery</Typography>
                  <Typography variant="small" className="text-beige/75">Fast delivery and fulfillment across Mumbai, Navi Mumbai, and Thane.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Certified Engineers</Typography>
                  <Typography variant="small" className="text-beige/75">On-site racking, stacking, and OS deployment by trained technical experts.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Custom Configuration</Typography>
                  <Typography variant="small" className="text-beige/75">Professional custom RAID configuration and Active Directory setup.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Comprehensive AMC</Typography>
                  <Typography variant="small" className="text-beige/75">Ongoing Annual Maintenance Contracts to ensure your infrastructure never fails.</Typography>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Enterprise Infrastructure Lifecycle: Server Repair & Decommissioning Buyback */}
      <Section variant="light" className="border-t border-primary/10 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Typography variant="eyebrow" className="text-primary mb-2">Enterprise Infrastructure Lifecycle</Typography>
            <Typography variant="h2" className="text-2xl sm:text-3xl font-extrabold text-text-dark">
              Server Maintenance or Data Center Liquidation
            </Typography>
            <Typography variant="lead" className="text-sm sm:text-base text-text-dark/70 mt-2">
              Beyond enterprise server procurement, Lalani Computers provides mission-critical hardware repairs and turnkey decommissioning across Mumbai data centers.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Enterprise Server Repair */}
            <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-dark mb-2">
                  Server Hardware Maintenance & Repair
                </h3>
                <p className="text-sm text-text-dark/80 leading-relaxed mb-6">
                  Degraded RAID arrays, redundant PSU failures, SAS backplane faults, and memory panics on Dell PowerEdge, HPE ProLiant, and Lenovo racks. Emergency on-site dispatch with a <strong>30-day parts warranty</strong>.
                </p>
              </div>
              <div>
                <Link href="/repair/servers">
                  <Button variant="secondary" className="w-full sm:w-auto hover:bg-primary hover:text-white transition-colors">
                    Book Server Maintenance
                  </Button>
                </Link>
              </div>
            </div>

            {/* Card 2: Server & Storage Buyback */}
            <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-dark mb-2">
                  Decommissioned Server & Storage Buyback
                </h3>
                <p className="text-sm text-text-dark/80 leading-relaxed mb-6">
                  Consolidating server rooms or upgrading clusters? We liquidate 1U–4U rack servers, SAN/NAS storage arrays, and enterprise online UPS units with <strong>instant RTGS payment</strong> and certified drive sanitization.
                </p>
              </div>
              <div>
                <Link href="/buyback/enterprise-servers-storage">
                  <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary-dark">
                    Liquidate Server Infrastructure
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <FadeIn>
            <Typography variant="eyebrow" className="mb-4">FAQs</Typography>
            <Typography variant="h2" className="mb-4">Frequently Asked Questions</Typography>
            <Typography variant="lead">Everything you need to know about procuring enterprise servers in Mumbai.</Typography>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} direction="up">
          <FAQAccordion items={faqItems} />
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section variant="light" className="border-t border-primary/10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="h2" className="mb-4">Need a Custom Server Configuration?</Typography>
            <Typography variant="lead" className="mb-8">
              Share your workload requirements, and our engineers will design a customized Bill of Materials (BOM) with the best OEM pricing.
            </Typography>
            <Link href="/contact"><Button size="lg">Contact Our Server Experts</Button></Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

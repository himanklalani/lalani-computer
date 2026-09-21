import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Wrench, 
  Cpu, 
  Server, 
  Laptop, 
  Network, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Truck, 
  Building,
  Phone, 
  ArrowRight,
  ChevronRight,
  BatteryCharging,
  HardDrive
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { RepairServiceBooking } from "@/components/conversion/RepairServiceBooking";
import { REPAIR_CATEGORIES, PRIMARY_REPAIR_CATEGORIES } from "@/lib/data/repairData";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.lalanicomputers.com/repair" },
  title: "IT Hardware Repair & Laptop Service Mumbai | Doorstep & On-Site Support",
  description: "End-to-end laptop and desktop repairs, broken screens, batteries, hinges, SSD upgrades & enterprise server maintenance in Mumbai. Scheduled doorstep pickup & on-site corporate service.",
  keywords: [
    "laptop repair mumbai",
    "desktop hardware service mumbai",
    "laptop screen replacement mumbai",
    "laptop battery replacement mumbai",
    "laptop hinge repair mumbai",
    "ssd ram upgrade service mumbai",
    "enterprise server maintenance mumbai",
    "on site it repair mumbai"
  ],
  openGraph: {
    title: "Complete IT Hardware Repair & Maintenance in Mumbai | Lalani Computers",
    description: "Doorstep pickup across Mumbai MMR and on-site corporate IT fleet servicing. Laptops, desktops, workstations, and enterprise infrastructure.",
    url: "https://www.lalanicomputers.com/repair",
    type: "website"
  }
};

export default function RepairHubPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.lalanicomputers.com/#localbusiness",
        "name": "Lalani Computers - IT Hardware Repair Services",
        "telephone": "+91-93233-32850",
        "url": "https://www.lalanicomputers.com/repair",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "59, Janmabhoomi Marg, Fort",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400001",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "AdministrativeArea", "name": "Maharashtra" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "19:30"
          }
        ],
        "priceRange": "₹₹"
      },
      {
        "@type": "Service",
        "name": "Laptop, Desktop & Enterprise Hardware Repair",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Lalani Computers"
        },
        "areaServed": "Mumbai Metropolitan Region",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Hardware Repair Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Laptop Screen, Battery & Hinge Replacement" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Motherboard Component & Circuit Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SSD Storage & RAM Speed Upgrades" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Server & Storage Array Maintenance" } }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lalanicomputers.com" },
          { "@type": "ListItem", "position": 2, "name": "IT Hardware Repair", "item": "https://www.lalanicomputers.com/repair" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does the repair service work? Do I need to travel to an office?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No office visit is required. We provide scheduled doorstep pickup across Mumbai (South Mumbai, BKC, Lower Parel, Andheri, Powai, Navi Mumbai, and Thane) as well as direct on-site technician visits for corporate business offices."
            }
          },
          {
            "@type": "Question",
            "name": "What types of hardware repairs do you handle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle all everyday laptop and desktop issues including cracked screens, battery replacements, broken hinges, keyboard/trackpad faults, SSD speed upgrades, and thermal cleaning, alongside motherboard component repairs and enterprise server maintenance."
            }
          },
          {
            "@type": "Question",
            "name": "Do your repairs include a warranty?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, every component replacement and hardware repair carries a 30-day comprehensive service warranty."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide on-site repair support for corporate fleets?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. For corporate clients with multiple laptops or desktop workstations requiring maintenance, upgrades, or servicing, our engineers visit your business premises directly."
            }
          }
        ]
      }
    ]
  };

  const faqList = [
    {
      question: "How does the repair service work? Do I need to travel to an office?",
      answer: "No office visit is required. We provide scheduled doorstep pickup across Mumbai (South Mumbai, BKC, Lower Parel, Andheri, Powai, Navi Mumbai, and Thane) as well as direct on-site technician visits for corporate business offices."
    },
    {
      question: "What types of hardware repairs do you handle?",
      answer: "We handle all everyday laptop and desktop issues including cracked screens, battery replacements, broken hinges, keyboard/trackpad faults, SSD speed upgrades, and thermal cleaning, alongside motherboard component repairs and enterprise server maintenance."
    },
    {
      question: "How quickly are laptop repairs turned around?",
      answer: "Standard battery, keyboard, screen replacements, and SSD upgrades are completed within 24 to 48 hours. Enterprise on-site emergency triage can be dispatched within 4 hours."
    },
    {
      question: "Do your repairs include a warranty?",
      answer: "Yes, every component replacement and hardware repair carries a 30-day comprehensive service warranty."
    },
    {
      question: "Do you provide on-site repair support for corporate fleets?",
      answer: "Yes. For corporate clients with multiple laptops or desktop workstations requiring maintenance, upgrades, or servicing, our engineers visit your business premises directly."
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
          <span className="text-primary font-semibold">IT Hardware Repair & Maintenance</span>
        </div>
      </div>

      {/* Hero Section */}
      <Section variant="dark" className="pt-16 pb-20 relative overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-primary-light border border-white/15 text-xs font-bold uppercase tracking-wider mb-6">
              <Wrench className="w-3.5 h-3.5" />
              <span>Doorstep Pickup & On-Site Fleet Support • Mumbai MMR</span>
            </div>
            <Typography variant="h1" className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Laptop, Desktop & Enterprise IT Hardware Repair in Mumbai
            </Typography>
            <Typography variant="lead" className="text-beige/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Complete hardware support for individuals and corporate fleets. From screen and battery replacements, broken hinges, and SSD upgrades to motherboard component diagnostics and server maintenance.
            </Typography>

            {/* Service Delivery Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left mb-10">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Truck className="w-5 h-5 text-emerald-400 mb-1" />
                <div className="text-white font-heading font-bold text-sm">Doorstep Pickup</div>
                <div className="text-beige/70 text-xs">Across Mumbai MMR</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Building className="w-5 h-5 text-primary-light mb-1" />
                <div className="text-white font-heading font-bold text-sm">On-Site Service</div>
                <div className="text-beige/70 text-xs">For Corporate Offices</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
                <div className="text-white font-heading font-bold text-sm">30-Day Warranty</div>
                <div className="text-beige/70 text-xs">Comprehensive Coverage</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <Cpu className="w-5 h-5 text-primary-light mb-1" />
                <div className="text-white font-heading font-bold text-sm">100% Genuine Parts</div>
                <div className="text-beige/70 text-xs">OEM Screens & Batteries</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#service-booking">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary-light">
                  Book Doorstep / On-Site Repair
                </Button>
              </a>
              <a
                href="https://wa.me/919323332850?text=Hi,%20I%20need%20help%20with%20an%20IT%20hardware%20repair.%20Can%20we%20discuss%20a%20quote?"
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
            Service Model & Coverage
          </p>
          <p className="text-sm md:text-base text-text-dark/90 leading-relaxed font-medium">
            <strong>Lalani Computers</strong> provides full-service hardware repairs, component replacements, and performance upgrades for laptops, desktops, and enterprise servers. Operating with over 30 years of pedigree in Mumbai, all repairs are conducted through <strong>scheduled doorstep pickups</strong> or <strong>on-site enterprise engineer visits</strong> across Mumbai MMR, backed by genuine OEM parts and a 30-day warranty.
          </p>
        </div>
      </section>

      {/* Everyday Failure Points & Repair Scope */}
      <Section variant="light" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Typography variant="eyebrow" className="text-primary mb-2">Everyday & Enterprise Hardware</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
              Real-World Hardware Breakdown Solutions
            </Typography>
            <Typography variant="lead" className="text-text-dark/70 text-sm sm:text-base">
              Comprehensive servicing covering consumer notebooks, professional workstations, and business infrastructure.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Box 1: Screen & Hinges */}
            <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-dark">Screen & Hinge Repairs</h3>
              <p className="text-xs sm:text-sm text-text-dark/70 leading-relaxed">
                Replacement of cracked, flickering, or line-distorted display panels with original-spec FHD/IPS screens. Re-anchoring of separated hinges and broken casing mounts.
              </p>
            </div>

            {/* Box 2: Battery & Charging */}
            <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-dark">Battery & Charging Issues</h3>
              <p className="text-xs sm:text-sm text-text-dark/70 leading-relaxed">
                Safe extraction of swollen batteries, installation of genuine OEM battery packs with warranty, and repairs for loose DC jacks and Type-C charging ports.
              </p>
            </div>

            {/* Box 3: SSD & RAM Upgrades */}
            <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-dark">Storage & RAM Upgrades</h3>
              <p className="text-xs sm:text-sm text-text-dark/70 leading-relaxed">
                Speed up sluggish laptops and desktops with high-speed NVMe SSDs, memory expansions, and clean operating system reloads with complete data backup.
              </p>
            </div>

            {/* Box 4: Keyboard & Trackpad */}
            <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-dark">Keyboard, Trackpad & Ports</h3>
              <p className="text-xs sm:text-sm text-text-dark/70 leading-relaxed">
                Replacement of unresponsive or liquid-damaged keyboards, sticky trackpads, burnt USB interfaces, and internal ribbon cables.
              </p>
            </div>

            {/* Box 5: Motherboard Power IC */}
            <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-dark">Motherboard Diagnostics</h3>
              <p className="text-xs sm:text-sm text-text-dark/70 leading-relaxed">
                Component-level diagnosis for non-booting machines, resolving 19V rail short circuits, blown MOSFETs, and power delivery controller faults.
              </p>
            </div>

            {/* Box 6: Enterprise Servers & Network */}
            <div className="p-6 rounded-2xl bg-white border border-primary/10 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-dark">Enterprise Server Support</h3>
              <p className="text-xs sm:text-sm text-text-dark/70 leading-relaxed">
                On-site server troubleshooting, redundant PSU replacements, RAID array reconstruction, and enterprise Cisco/Aruba network switch repairs.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Specialized Category Exploration */}
      <Section variant="dark" className="py-16 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Typography variant="eyebrow" className="text-primary-light mb-2">Service Verticals</Typography>
            <Typography variant="h2" className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
              Explore Specialized Repair Pages
            </Typography>
            <Typography variant="lead" className="text-beige/70 text-xs sm:text-sm">
              Review turnaround times, common fault resolutions, and supported brands across our focus areas.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRIMARY_REPAIR_CATEGORIES.map((cat) => (
              <div
                key={cat.slug}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-primary-light/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-light">
                    {cat.turnaroundTime}
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
                      <span>{cat.warrantyPeriod}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Doorstep Pickup / On-Site</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href={`/repair/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-light hover:text-white transition-colors"
                  >
                    <span>View Failure Modes & Steps</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Service Delivery Model Breakdown (Zero Walk-Ins) */}
      <Section variant="light" className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Typography variant="eyebrow" className="text-primary mb-2">How Service is Delivered</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              Zero Travel Required: We Come to You
            </Typography>
            <Typography variant="lead" className="text-text-dark/70 text-xs sm:text-sm">
              All repair logistics operate via scheduled doorstep collection or on-site engineer visits.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-warm-bg1/40 border border-primary/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-extrabold text-text-dark">
                1. Scheduled Doorstep Pickup (Mumbai MMR)
              </h3>
              <p className="text-sm text-text-dark/75 leading-relaxed">
                For individual users and office laptops. Simply book an appointment online or on WhatsApp. Our verified logistics courier collects your hardware directly from your residence or office with an itemized acknowledgment receipt.
              </p>
              <div className="text-xs text-text-dark/80 space-y-1 pt-2 font-medium">
                <div>• Coverage: South Mumbai, BKC, Lower Parel, Andheri, Powai, Navi Mumbai, Thane</div>
                <div>• Safe static-shielded transit packaging</div>
                <div>• Return delivery upon thorough testing</div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-primary/15 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-dark text-white flex items-center justify-center shadow-md">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-extrabold text-text-dark">
                2. On-Site Corporate Engineer Dispatch
              </h3>
              <p className="text-sm text-text-dark/75 leading-relaxed">
                For corporate clients, data center cages, and office fleets. Our certified hardware technicians arrive at your facility equipped with replacement parts, SSDs, and diagnostic gear to service machines directly in your office.
              </p>
              <div className="text-xs text-text-dark/80 space-y-1 pt-2 font-medium">
                <div>• Emergency 4-hour SLA response for mission-critical servers</div>
                <div>• Fleet thermal servicing, RAM/SSD upgrades & OS deployments</div>
                <div>• Dedicated enterprise account coordinator</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Embedded Service Booking Component */}
      <section id="service-booking" className="py-16 md:py-20 bg-warm-bg1/40 border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Typography variant="eyebrow" className="text-primary mb-2">Schedule Service</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              Book Doorstep Pickup or On-Site Visit
            </Typography>
            <Typography variant="lead" className="text-text-dark/70 text-xs sm:text-sm">
              Select your equipment type and issue to schedule your appointment with Lalani Computers.
            </Typography>
          </div>

          <RepairServiceBooking />
        </div>
      </section>

      {/* FAQ Section */}
      <Section variant="light" className="py-16 bg-white border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Typography variant="eyebrow" className="text-primary mb-2">Clear Answers</Typography>
            <Typography variant="h2" className="text-text-dark text-2xl sm:text-3xl font-extrabold mb-3">
              Frequently Asked Questions: Hardware Repairs in Mumbai
            </Typography>
          </div>

          <FAQAccordion items={faqList} />
        </div>
      </Section>
    </>
  );
}

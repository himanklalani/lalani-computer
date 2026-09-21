import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CheckCircle2, Printer, Tv, PhoneCall, MonitorPlay, ShieldCheck, Network } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: '/products/office-electronics' },
  title: "Corporate Printers & Office Electronics Mumbai | Lalani Computers",
  description: "Procure enterprise laser printers, office projectors, EPABX telecom, and video conferencing systems for your corporate office in Mumbai.",
};

const electronicTypes = [
  {
    name: "Enterprise Printers & Copiers",
    icon: <Printer className="w-6 h-6" />,
    features: ["High-volume network laser printers", "Multifunction MFDs (Print, Scan, Copy)", "Secure badge-release printing", "Managed Print Services (MPS) ready"],
    brands: "HP, Canon, Epson, Brother",
  },
  {
    name: "Projectors & Displays",
    icon: <MonitorPlay className="w-6 h-6" />,
    features: ["Ultra-short throw projectors for tight spaces", "High-lumen laser projectors for auditoriums", "Large Format Displays (LFD) for lobbies", "Interactive whiteboards for training"],
    brands: "Epson, BenQ, Sony, Samsung",
  },
  {
    name: "Video Conferencing",
    icon: <Tv className="w-6 h-6" />,
    features: ["4K PTZ cameras with auto-framing", "Noise-cancelling boardroom microphones", "Zoom & Microsoft Teams certified rooms", "Wireless presentation systems"],
    brands: "Logitech, Poly, Cisco Webex",
  },
  {
    name: "Telecom & EPABX",
    icon: <PhoneCall className="w-6 h-6" />,
    features: ["IP-PBX telephony systems", "Corporate desk IP phones", "Call recording and IVR routing", "Headsets for BPO/KPO environments"],
    brands: "Matrix, Panasonic, Grandstream, Jabra",
  },
];

const faqs = [
  {
    question: "Do you offer AMC for enterprise printers and copiers?",
    answer: "Yes, we offer comprehensive Annual Maintenance Contracts (AMC) that cover toner replacement, drum maintenance, and routine servicing for high-volume network printers from brands like HP, Canon, and Epson."
  },
  {
    question: "What brands do you supply for video conferencing setups?",
    answer: "We supply and integrate premium A/V solutions from Logitech, Poly, and Cisco Webex, ensuring full compatibility with platforms like Microsoft Teams and Zoom."
  },
  {
    question: "Can you integrate IP-PBX telecom systems with our existing IT network?",
    answer: "Yes, we specialize in deploying scalable IP-PBX and VoIP telephony systems from Matrix, Panasonic, and Grandstream that seamlessly integrate into your current network infrastructure."
  },
  {
    question: "Do you arrange on-site demonstrations for high-end projectors?",
    answer: "Yes, for large-scale deployments like boardroom setups or auditorium displays, we can arrange on-site demonstrations to ensure the equipment meets your exact visual requirements."
  }
];


export default function OfficeElectronicsPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary">Office Electronics</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Smart Office Tech</Typography>
            <Typography variant="h1" className="mb-6">Printers, AV & Telecommunications</Typography>
            <Typography variant="lead">
              Modernize your workspace. We provide the essential electronics that keep your office running—from heavy-duty network copiers to immersive boardroom conferencing systems.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Get an Equipment Quote</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Our Office Electronics Portfolio</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            Everything your teams need to communicate, present, and produce documents efficiently.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {electronicTypes.map((type, i) => (
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
            <Typography variant="h2" className="text-white text-center mb-8">Why Choose Lalani Computers?</Typography>
            <Typography variant="lead" className="text-center text-beige/70 mb-12">
              We go beyond the box. We install, calibrate, and maintain your office electronics to ensure zero workflow disruption.
            </Typography>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FadeIn delay={0.1}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <MonitorPlay className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">A/V Integration</Typography>
                  <Typography variant="small" className="text-beige/75">Complete boardroom audio/visual integration and professional projector setup.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Printer className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Printer AMC</Typography>
                  <Typography variant="small" className="text-beige/75">Comprehensive AMC covering toner, drum replacement, and routine maintenance.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Tv className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">On-Site Demonstrations</Typography>
                  <Typography variant="small" className="text-beige/75">Request on-site demonstrations for high-end video conferencing and display equipment.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Authorized Warranties</Typography>
                  <Typography variant="small" className="text-beige/75">Direct authorized partner warranties and reliable brand-backed technical support.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Network Integration</Typography>
                  <Typography variant="small" className="text-beige/75">Seamless integration of smart electronics and IP phones with your existing IT network.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-white text-lg mb-1">Scalable Telecom</Typography>
                  <Typography variant="small" className="text-beige/75">Scalable EPABX and telephony solutions designed to grow with your workforce.</Typography>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Internal Linking - Buyback */}
      <Section variant="light" className="border-t border-primary/10">
        <div className="max-w-4xl mx-auto text-center bg-white p-8 rounded-3xl border border-primary/10 shadow-sm">
          <FadeIn>
            <Typography variant="h3" className="mb-4">Retiring Old IT Equipment?</Typography>
            <Typography variant="lead" className="mb-6">
              When upgrading your office electronics, don't let old IT assets become a liability. We offer secure buyback and responsible e-waste disposal.
            </Typography>
            <Link href="/solutions/it-asset-buyback">
              <Button variant="secondary" className="hover:bg-primary hover:text-white transition-colors">Explore IT Asset Buyback</Button>
            </Link>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-8">Frequently Asked Questions</Typography>
          <FAQAccordion items={faqs} />
        </FadeIn>
      </Section>
    </>
  );
}

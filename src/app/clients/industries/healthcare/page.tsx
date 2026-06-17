import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, HeartPulse, Monitor, Wifi, Camera, HardDrive, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare IT Solutions & Surveillance | Lalani Computers",
  description: "Compliance-ready data storage, specialized displays, and secure CCTV surveillance for healthcare & pharma. Turnkey IT setups and reliable AMC in Mumbai.",
};

const roomKits = [
  {
    name: "Patient Room Kit",
    icon: <HeartPulse className="w-6 h-6" />,
    contents: ["Bedside Info Display (10\" Tablet Mount)", "Cat6 Ethernet Drop (Pre-terminated)", "PoE Nurse Call Integration Cable", "Wall-Mount Data Point (RJ45 + Power)", "Cable Management Trunking (2m)", "Antimicrobial Keyboard + Mouse"],
    useCase: "Each patient room receives a sealed box. Your maintenance team mounts the display, connects the ethernet drop, and the room is digitally live — no IT specialist needed.",
  },
  {
    name: "Nursing Station Kit",
    icon: <Monitor className="w-6 h-6" />,
    contents: ["All-in-One Desktop (i5, 16GB, Medical-Grade)", "24\" Clinical Display (DICOM-Ready)", "Barcode/Wristband Scanner", "Thermal Label Printer", "8-Port PoE Switch", "Surge-Protected UPS (1KVA)"],
    useCase: "Complete workstation for nursing stations — HIS/EMR ready, with barcode scanning for patient tracking and medication verification.",
  },
  {
    name: "OT & ICU Networking Kit",
    icon: <Wifi className="w-6 h-6" />,
    contents: ["Medical-Grade Managed Switch (24-Port PoE+)", "Ceiling-Mount Access Point (Wi-Fi 6)", "Isolation Transformer for Equipment", "Fiber Uplink Module (SFP+)", "Shielded Cat6A Patch Cables (10-pack)", "Wall-Mount 6U Rack with Fan"],
    useCase: "Critical-care zones require zero-interference networking. This kit provides isolated, shielded connectivity for ventilators, monitors, and infusion pumps.",
  },
  {
    name: "Hospital Surveillance Kit",
    icon: <Camera className="w-6 h-6" />,
    contents: ["IP Dome Cameras (8x, Vandal-Proof)", "16-Channel NVR with 8TB Storage", "PoE Injector Hub", "Outdoor Bullet Cameras (4x, IR Night Vision)", "90-Day Recording Retention", "Remote Viewing App License"],
    useCase: "Cover entrances, wards, pharmacies, and parking — NABH-compliant surveillance with tamper-proof evidence storage.",
  },
  {
    name: "Server & Data Backup Kit",
    icon: <HardDrive className="w-6 h-6" />,
    contents: ["Rack Server (Dual Xeon, 128GB ECC)", "NAS Storage (4-Bay, 16TB RAID)", "LTO Tape Drive for Archival", "Online UPS (5KVA)", "42U Server Rack with PDU", "Environmental Monitor (Temp/Humidity/Leak)"],
    useCase: "PACS imaging, HIS database, and patient records — redundant storage with tape archival to meet NABH and HIPAA retention mandates.",
  },
  {
    name: "Biometric Access & Pharmacy Kit",
    icon: <ShieldCheck className="w-6 h-6" />,
    contents: ["Fingerprint + RFID Door Controllers (4x)", "Electromagnetic Locks", "Pharmacy Drug Cabinet RFID Tags", "Access Control Software License", "Emergency Break-Glass Override", "Audit Trail Logger"],
    useCase: "Restrict access to drug stores, blood banks, and restricted wards with full audit trails for regulatory compliance.",
  },
];

const compliancePoints = [
  "NABH (National Accreditation Board for Hospitals) compliance-ready",
  "HIPAA-aligned data encryption and access controls",
  "AERB guidelines for shielded cabling near imaging equipment",
  "Biomedical equipment isolation from general IT networks",
  "Antimicrobial peripherals for infection-control zones",
  "90-day minimum CCTV retention for medico-legal compliance",
];

export default function HealthcarePage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/clients" className="hover:text-primary transition-colors">Clients</Link>
          <span>/</span>
          <span className="text-primary">Healthcare & Pharma</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Industry Expertise</Typography>
            <Typography variant="h1" className="mb-6">Specialized IT Hardware & Surveillance for Healthcare & Pharma</Typography>
            <Typography variant="lead">
              Curated, room-ready hardware boxes for every zone in your hospital. Your maintenance team unpacks, mounts, and connects — no IT specialist required for deployment.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Get a Hospital IT Quote</Button></Link>
              <Link href="/solutions"><Button variant="secondary" size="lg">View Our Process</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Room-Ready Deployment Kits</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            Each sealed box contains everything for a specific hospital zone. Unbox, mount, plug in — done.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {roomKits.map((kit, i) => (
            <FadeIn key={i} delay={i * 0.08} direction="up">
              <div className="bg-warm-bg1 rounded-2xl p-7 border border-primary/10 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                    {kit.icon}
                  </div>
                  <Typography variant="h3" className="text-lg">{kit.name}</Typography>
                </div>
                <div className="bg-white rounded-xl p-4 border border-primary/5 mb-4 flex-grow">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-2">What&apos;s in the Box</p>
                  <ul className="space-y-1.5">
                    {kit.contents.map((item, j) => (
                      <li key={j} className="flex items-start text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-success mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-text-dark/70 italic leading-relaxed">{kit.useCase}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section variant="dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-white text-center mb-4">Healthcare Compliance Built-In</Typography>
            <Typography variant="lead" className="text-center text-beige/70 mb-12">
              Every kit is designed to meet Indian healthcare regulatory standards out of the box.
            </Typography>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {compliancePoints.map((point, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <Typography variant="body" className="text-beige/90">{point}</Typography>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="light" className="border-t border-primary/10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="h2" className="mb-4">Equipping a New Hospital Wing?</Typography>
            <Typography variant="lead" className="mb-8">
              Share your floor plan and room count — we&apos;ll send zone-wise kit recommendations with pricing within 48 hours.
            </Typography>
            <Link href="/contact"><Button size="lg">Request a Hospital IT Quote</Button></Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

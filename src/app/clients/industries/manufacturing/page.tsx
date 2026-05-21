import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Factory, Wifi, Camera, Monitor, Server, Thermometer } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing IT Solutions | Factory Floor Networking & Industrial PCs",
  description: "IT hardware kits for manufacturing plants — factory-floor Wi-Fi, ruggedized workstations, SCADA-ready networking, and 24/7 CCTV monitoring solutions.",
};

const factoryKits = [
  {
    name: "Factory Floor Wi-Fi Kit",
    icon: <Wifi className="w-6 h-6" />,
    contents: ["Industrial Outdoor Access Points (4x, IP67)", "24-Port Industrial PoE Switch", "Outdoor Cat6 Cable (500m Spool)", "Weatherproof Junction Boxes (10x)", "Mounting Brackets + Steel Poles", "Site Survey & Heatmap Report"],
    useCase: "Blanket Wi-Fi coverage across shop floors, warehouses, and loading docks — even in high-interference environments with heavy machinery.",
  },
  {
    name: "Production Line Workstation Kit",
    icon: <Monitor className="w-6 h-6" />,
    contents: ["Industrial Panel PC (Fanless, IP65 Front)", "15\" Touchscreen Display", "Industrial Keyboard (Sealed, Washable)", "PoE Connection + UPS Backup", "VESA Mount + Swing Arm", "ERP/MES Client Pre-configured"],
    useCase: "Mounted directly on the production line for real-time data entry, quality checks, and shift reporting. Withstands oil, dust, and vibration.",
  },
  {
    name: "SCADA & OT Networking Kit",
    icon: <Server className="w-6 h-6" />,
    contents: ["Industrial Managed Switch (DIN-Rail Mount)", "Serial-to-Ethernet Converters (4x)", "Firewall with OT/IT Segmentation", "Fiber Patch Panel + SFP Modules", "Redundant Power Supply Unit", "Network Monitoring Software License"],
    useCase: "Isolate your operational technology (PLC/SCADA) network from corporate IT while maintaining centralized monitoring and control.",
  },
  {
    name: "Plant CCTV & Safety Kit",
    icon: <Camera className="w-6 h-6" />,
    contents: ["Explosion-Proof Cameras (Hazardous Zones)", "Standard IP Cameras (12x, General Areas)", "32-Channel NVR with 16TB Storage", "Thermal Cameras (Fire Detection)", "PA System Integration Module", "Central Monitoring Station Setup"],
    useCase: "360° surveillance across shop floors, chemical storage, loading bays, and perimeter. Thermal cameras trigger instant fire alerts.",
  },
  {
    name: "Server & ERP Infrastructure Kit",
    icon: <Factory className="w-6 h-6" />,
    contents: ["Rack Server (Dual Xeon, 256GB ECC)", "SAN Storage (20TB, RAID 6)", "Tape Backup Drive (LTO-9)", "Online UPS (10KVA) + Battery Bank", "42U Rack + Precision Cooling Unit", "DR Replication Software License"],
    useCase: "Host SAP, Oracle, or Tally ERP on-premise with full disaster recovery. Sized for 500+ concurrent users across multiple production lines.",
  },
  {
    name: "Environmental Monitoring Kit",
    icon: <Thermometer className="w-6 h-6" />,
    contents: ["Temperature & Humidity Sensors (8x)", "Water Leak Detection Cables", "Air Quality Monitors (PM2.5/CO2)", "Central IoT Gateway", "Cloud Dashboard License", "SMS/Email Alert Module"],
    useCase: "Monitor server rooms, chemical storage, and cold chain areas. Instant alerts when conditions exceed safe thresholds.",
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/clients" className="hover:text-primary transition-colors">Clients</Link>
          <span>/</span>
          <span className="text-primary">Manufacturing</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Industry Expertise</Typography>
            <Typography variant="h1" className="mb-6">Manufacturing & Industrial IT</Typography>
            <Typography variant="lead">
              Industrial-grade IT kits built for factory floors — vibration-proof, dust-sealed, and engineered for 24/7 uptime alongside heavy machinery.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Get a Plant IT Quote</Button></Link>
              <Link href="/solutions"><Button variant="secondary" size="lg">View Our Process</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Factory-Ready Deployment Kits</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            Industrial-hardened hardware packages for every zone in your manufacturing facility.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {factoryKits.map((kit, i) => (
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

      <Section variant="light" className="border-t border-primary/10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="h2" className="mb-4">Upgrading Your Plant&apos;s IT?</Typography>
            <Typography variant="lead" className="mb-8">
              Share your plant layout and production line count — we&apos;ll deliver zone-wise kits with industrial-grade hardware recommendations.
            </Typography>
            <Link href="/contact"><Button size="lg">Request a Plant IT Quote</Button></Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

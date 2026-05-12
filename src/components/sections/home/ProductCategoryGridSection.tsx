import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedFolder } from "@/components/ui/3d-folder";
import { SwipeHint } from "@/components/ui/SwipeHint";

const categories = [
  {
    title: "Computing & Workstations",
    subtitle: "Laptops, Desktops & All-in-Ones",
    href: "/products/computing",
    accentColor: "#1925AA",
    projects: [
      { id: "c1", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80", title: "Business Ultrabooks", href: "/products/computing" },
      { id: "c2", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80", title: "Tower Workstations", href: "/products/computing" },
      { id: "c3", image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80", title: "All-in-One Desktops", href: "/products/computing" },
      { id: "c4", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80", title: "Creator Laptops", href: "/products/computing" },
    ],
  },
  {
    title: "Servers & Infrastructure",
    subtitle: "Rack, Tower & Data Center Setup",
    href: "/products/servers",
    accentColor: "#121A7A",
    projects: [
      { id: "s1", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80", title: "Rack Mount Servers", href: "/products/servers" },
      { id: "s2", image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&q=80", title: "Data Centre Setup", href: "/products/servers" },
      { id: "s3", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80", title: "Server Rentals", href: "/products/servers" },
    ],
  },
  {
    title: "Networking & Security",
    subtitle: "Switches, Firewalls & Surveillance",
    href: "/products/networking-security",
    accentColor: "#0D1260",
    projects: [
      { id: "ns1", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80", title: "Core Switches & APs", href: "/products/networking-security" },
      { id: "ns2", image: "https://images.unsplash.com/photo-1580508174046-170816f65662?auto=format&fit=crop&w=800&q=80", title: "Next-Gen Firewalls", href: "/products/networking-security" },
      { id: "ns3", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80", title: "IP Camera Systems", href: "/products/networking-security" },
      { id: "ns4", image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80", title: "Biometric Access", href: "/products/networking-security" },
    ],
  },
  {
    title: "Office Electronics",
    subtitle: "Printers, Projectors & Displays",
    href: "/products/office-electronics",
    accentColor: "#2D35B5",
    projects: [
      { id: "oe1", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80", title: "Laser & MFP Printers", href: "/products/office-electronics" },
      { id: "oe2", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80", title: "Projectors & Displays", href: "/products/office-electronics" },
      { id: "oe3", image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80", title: "Monitors", href: "/products/office-electronics" },
    ],
  },
  {
    title: "Software & Licensing",
    subtitle: "OS, Office 365 & Endpoint Security",
    href: "/products/software",
    accentColor: "#1925AA",
    projects: [
      { id: "sl1", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80", title: "Windows OS Licences", href: "/products/software" },
      { id: "sl2", image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80", title: "Microsoft 365", href: "/products/software" },
      { id: "sl3", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80", title: "Antivirus & Security", href: "/products/software" },
    ],
  },
  {
    title: "Peripherals & Power",
    subtitle: "Keyboards, Mice, UPS & Cables",
    href: "/products/peripherals-power",
    accentColor: "#121A7A",
    projects: [
      { id: "pp1", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=800&q=80", title: "Mechanical Keyboards", href: "/products/peripherals-power" },
      { id: "pp2", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80", title: "Office Mice", href: "/products/peripherals-power" },
      { id: "pp3", image: "https://images.unsplash.com/photo-1624823183597-29362ee27fc6?auto=format&fit=crop&w=800&q=80", title: "Accessories & Consumables", href: "/products/peripherals-power" },
      { id: "pp4", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80", title: "Cables & Adaptors", href: "/products/peripherals-power" },
    ],
  },
];

export function ProductCategoryGridSection() {
  return (
    <Section id="categories" variant="light" className="pb-12 relative overflow-hidden">
      {/* Subtle dot-grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(25,37,170,0.10) 1.2px, transparent 1.2px)`,
          backgroundSize: '28px 28px',
        }}
      />
      {/* Soft vignette so dots fade toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, #E8E6E0 90%)',
        }}
      />

      <div className="relative z-10">
        <SectionHeader
          title="What We Supply"
          eyebrow="Our Inventory"
          subtitle="Explore our comprehensive hardware & software catalog."
        />
        <SwipeHint className="pr-4" />
        {/* Mobile: Horizontal scroll snapping | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 pt-32 -mt-28 px-4 -mx-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-start md:justify-items-center md:overflow-visible md:pt-4 md:mt-0 no-scrollbar">
          {categories.map((cat) => (
            <AnimatedFolder
              key={cat.title}
              title={cat.title}
              subtitle={cat.subtitle}
              projects={cat.projects}
              accentColor={cat.accentColor}
              className="w-[85vw] max-w-[320px] md:w-full"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

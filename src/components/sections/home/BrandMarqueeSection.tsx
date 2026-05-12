"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

export function BrandMarqueeSection() {
  const brands = [
    { name: "Seagate", logo: "https://res.cloudinary.com/dzc0mfs9z/image/upload/w_240,h_96,c_fit,f_auto,q_auto/v1778156127/Seagate_logo_PNG1_jopsej.png" },
    { name: "HP", logo: "https://res.cloudinary.com/dzc0mfs9z/image/upload/w_240,h_96,c_fit,f_auto,q_auto/v1778156127/hp_logo_PNG1_hbrlze.png" },
    { name: "Lenovo", logo: "https://res.cloudinary.com/dzc0mfs9z/image/upload/w_240,h_96,c_fit,f_auto,q_auto/v1778156126/Lenovo_logo_PNG3_tsfbai.png" },
    { name: "Logitech", logo: "https://res.cloudinary.com/dzc0mfs9z/image/upload/w_240,h_96,c_fit,f_auto,q_auto/v1778156126/Logitech_logo_PNG1_fa6htk.png" },
    { name: "Dell", logo: "https://res.cloudinary.com/dzc0mfs9z/image/upload/w_240,h_96,c_fit,f_auto,q_auto/v1778156126/Dell_logo_PNG1_zhkn0x.png" },
    { name: "Microsoft", logo: "https://res.cloudinary.com/dzc0mfs9z/image/upload/w_240,h_96,c_fit,f_auto,q_auto/v1778156126/microsoft_PNG7_jxxm1x.png" },
    { name: "Cisco", logo: "https://res.cloudinary.com/dzc0mfs9z/image/upload/w_240,h_96,c_fit,f_auto,q_auto/v1778156126/Cisco_logo_PNG2_ona0bh.png" },
    { name: "D-Link", logo: "https://res.cloudinary.com/dzc0mfs9z/image/upload/w_240,h_96,c_fit,f_auto,q_auto/v1778156126/D_Link_logo_PNG2_txazgd.png" },
    { name: "Epson", logo: "https://res.cloudinary.com/dzc0mfs9z/image/upload/w_240,h_96,c_fit,f_auto,q_auto/v1778156125/Epson-Logo-PNG-14_pbj8pv.png" },
    { name: "Canon", logo: "https://res.cloudinary.com/dzc0mfs9z/image/upload/w_240,h_96,c_fit,f_auto,q_auto/v1778156125/Canon_logo_PNG1_vewjfo.png" }
  ];

  return (
    <Section variant="white" className="border-t border-primary/10 overflow-hidden py-16">
      <FadeIn>
        <div className="text-center mb-12">
          <SectionHeader title="Brands We Work With" centered />
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="relative flex overflow-x-hidden group min-h-[56px] md:min-h-[72px]">
          <div className="flex animate-marquee space-x-16 md:space-x-24 py-4 items-center whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]">
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <div key={i} className="inline-flex items-center justify-center transition-transform hover:scale-110">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} Logo`}
                  width={120}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="h-8 md:h-12 w-auto max-w-[120px] object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden font-heading font-bold text-primary text-xl tracking-wide">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}


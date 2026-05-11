"use client";

import React, { useEffect, useState } from "react";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import { Zap, Wrench, Building2, MapPin, ShieldCheck, LucideIcon } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

type USPItem = CardStackItem & { Icon: LucideIcon; subtitle: string };

const usps: USPItem[] = [
  {
    id: 1,
    title: "Same-Day Dispatch",
    subtitle: "Faster than any e-commerce platform in Mumbai",
    Icon: Zap,
  },
  {
    id: 2,
    title: "On-Site Service",
    subtitle: "Rapid turnaround with certified technicians",
    Icon: Wrench,
  },
  {
    id: 3,
    title: "Turnkey IT Setups",
    subtitle: "Complete office & data center deployments",
    Icon: Building2,
  },
  {
    id: 4,
    title: "Pan-India Delivery",
    subtitle: "Nationwide shipping with genuine products",
    Icon: MapPin,
  },
  {
    id: 5,
    title: "Warrantied Hardware",
    subtitle: "100% authorised, grey-market free",
    Icon: ShieldCheck,
  },
  {
    id: 6,
    title: "30+ Years of Trust",
    subtitle: "Years of trust from the market",
    Icon: ShieldCheck,
  },
  {
    id: 7,
    title: "2000+ Happy Customers",
    subtitle: "Till Date we have proudly added value in people's lives. ",
    Icon: ShieldCheck,
  },
];

// ─── Responsive card dimensions ───────────────────────────────────────────────

function useCardDimensions() {
  const [dims, setDims] = useState({ width: 300, height: 260 });

  useEffect(() => {
    function calc() {
      const w = window.innerWidth;
      if (w < 480) {
        setDims({ width: Math.min(w * 0.78, 280), height: 240 });
      } else if (w < 768) {
        setDims({ width: 320, height: 270 });
      } else if (w < 1024) {
        setDims({ width: 380, height: 290 });
      } else {
        setDims({ width: 440, height: 310 });
      }
    }
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return dims;
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function USPStripSection() {
  const { width, height } = useCardDimensions();

  return (
    <section className="bg-white py-16 border-y border-primary/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section label */}
        <p className="text-center text-xs font-heading font-bold uppercase tracking-[0.2em] text-primary/70 mb-10">
          Why choose Lalani Computers
        </p>

        <CardStack<USPItem>
          items={usps}
          initialIndex={2}
          autoAdvance
          intervalMs={2400}
          pauseOnHover
          showDots
          loop
          cardWidth={width}
          cardHeight={height}
          overlap={0.44}
          spreadDeg={44}
          activeLiftPx={28}
          activeScale={1.04}
          inactiveScale={0.92}
          perspectivePx={1200}
          depthPx={100}
          tiltXDeg={10}
          springStiffness={300}
          springDamping={30}
          renderCard={(item, { active }) => (
            <USPCard item={item} active={active} />
          )}
        />
      </div>
    </section>
  );
}

// ─── Custom card renderer ──────────────────────────────────────────────────────

function USPCard({ item, active }: { item: USPItem; active: boolean }) {
  const Icon = item.Icon;

  return (
    <div
      className={`
        relative h-full w-full flex flex-col items-center justify-center gap-4 sm:gap-6 px-5 py-6 sm:px-8 sm:py-10
        rounded-3xl border transition-all duration-500 select-none overflow-hidden
        ${active
          ? "bg-primary border-primary shadow-[0_20px_60px_rgba(25,37,170,0.30)]"
          : "bg-white border-primary/10 shadow-sm"
        }
      `}
    >
      {/* Subtle radial glow on active */}
      {active && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12)_0%,transparent_65%)]" />
      )}

      {/* Icon container */}
      <div
        className={`
          relative h-14 w-14 sm:h-20 sm:w-20 rounded-full flex items-center justify-center
          border transition-all duration-500
          ${active
            ? "bg-white/15 border-white/20"
            : "bg-primary/5 border-primary/10"
          }
        `}
      >
        <Icon
          className={`w-6 h-6 sm:w-9 sm:h-9 transition-colors duration-500 ${active ? "text-white" : "text-primary"}`}
          strokeWidth={1.5}
        />
      </div>

      {/* Text */}
      <div className="text-center px-2">
        <p
          className={`font-heading font-bold text-lg sm:text-xl leading-snug tracking-tight mb-1 sm:mb-2 ${
            active ? "text-white" : "text-primary"
          }`}
        >
          {item.title}
        </p>
        <p
          className={`text-xs sm:text-sm leading-relaxed ${
            active ? "text-white/70" : "text-text-dark/75"
          }`}
        >
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
  {
    num: "01",
    title: "Complete Office IT Setup",
    audience: "SMEs, Startups & Corporates",
    features: [
      "End-to-end hardware procurement",
      "Network & infrastructure planning",
      "Ready-to-use workstations",
    ],
    yOffset: "0px",   // Card 01: baseline
  },
  {
    num: "02",
    title: "AMC & IT Support",
    audience: "Corporate Teams",
    features: [
      "Preventative maintenance",
      "Fast on-site troubleshooting",
      "Dedicated account managers",
    ],
    yOffset: "40px",  // Card 02: slightly lower
  },
  {
    num: "03",
    title: "Surveillance & Security",
    audience: "Offices, Schools, Hospitals",
    features: [
      "CCTV & NVR installations",
      "Biometric & access control",
      "Remote monitoring setups",
    ],
    yOffset: "20px",  // Card 03: mid offset
  },
  {
    num: "04",
    title: "Networking & Wi-Fi Design",
    audience: "Large facilities & multi-floor offices",
    features: [
      "Enterprise routing & switching",
      "Seamless Wi-Fi coverage",
      "Secure firewall configuration",
    ],
    yOffset: "60px",  // Card 04: lowest (broken grid)
  },
];

export function SolutionsOverviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => { setMounted(true); }, []);

  // --- Staggered entrance via ScrollTrigger ---
  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = cardsRef.current.filter(Boolean);

    // Set initial hidden state
    gsap.set(cards, { y: 80, opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 75%",
      once: true,
      onEnter: () => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "expo.out",
        });
      },
    });

    return () => trigger.kill();
  }, []);

  // --- 3D Tilt + Magnetic Parallax on each card ---
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    cardsRef.current.forEach((card) => {
      if (!card) return;

      const inner = card.querySelector<HTMLElement>(".card-inner");
      const num  = card.querySelector<HTMLElement>(".card-num");
      const body = card.querySelector<HTMLElement>(".card-body");

      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        // Normalised -0.5 → +0.5
        const nx = (e.clientX - rect.left) / rect.width  - 0.5;
        const ny = (e.clientY - rect.top)  / rect.height - 0.5;

        // Card tilts toward cursor (max ±6°)
        gsap.to(inner, {
          rotateY:  nx * 12,
          rotateX: -ny * 12,
          duration: 0.5,
          ease: "power2.out",
        });

        // Parallax: number drifts opposite direction
        if (num)  gsap.to(num,  { x: -nx * 18, y: -ny * 12, duration: 0.6, ease: "power2.out" });
        // Body text drifts subtly with cursor
        if (body) gsap.to(body, { x:  nx *  8, y:  ny *  5, duration: 0.6, ease: "power2.out" });
      };

      const onLeave = () => {
        gsap.to(inner, {
          rotateX: 0, rotateY: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.4)",
        });
        if (num)  gsap.to(num,  { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
        if (body) gsap.to(body, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <p className="text-primary font-medium uppercase tracking-widest text-sm mb-3">
            Our Services
          </p>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-text-dark leading-tight tracking-tight">
            Turnkey Solutions &amp; Services
          </h2>
          <p className="mt-6 text-text-dark/60 text-lg leading-relaxed">
            Beyond individual product sales, we design and deploy robust IT infrastructures.
          </p>
        </div>

        {/* Broken-grid card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {solutions.map((sol, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group"
              style={{
                marginTop: mounted ? sol.yOffset : "0px",
                perspective: "1000px",
              }}
            >
              {/* card-inner gets the 3D tilt transform */}
              <div
                className="card-inner bg-white border border-primary/10 rounded-2xl overflow-hidden shadow-md
                            transition-shadow duration-300 group-hover:shadow-2xl group-hover:border-primary/30"
                style={{ transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {/* Top accent bar */}
                <div className="h-1 w-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8 lg:p-10">
                  {/* Number — drifts as parallax layer */}
                  <p
                    className="card-num font-heading font-black text-7xl lg:text-8xl leading-none
                               text-primary/8 select-none mb-6 transition-colors duration-300
                               group-hover:text-primary/15"
                  >
                    {sol.num}
                  </p>

                  {/* Body — shifts subtly with mouse */}
                  <div className="card-body">
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-text-dark mb-2 leading-tight">
                      {sol.title}
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-widest text-text-dark/50 mb-6">
                      For: {sol.audience}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {sol.features.map((feat, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-text-dark/80 text-base">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/solutions"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm
                                 uppercase tracking-widest hover:gap-4 transition-all duration-300
                                 focus-visible:outline-none focus-visible:underline"
                    >
                      Discuss Your Project
                      <span className="text-lg leading-none">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

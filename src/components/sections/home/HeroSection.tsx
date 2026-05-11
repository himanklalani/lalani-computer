"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { loaderState } from "@/lib/loaderState";
import { ChevronDown } from "lucide-react";

// ─── Word Reveal Animation ─────────────────────────────────────────────────────
const HEADLINE = "Lalani Computers";

function WordReveal({ text, delay = 0, isLoaded }: { text: string; delay?: number, isLoaded: boolean }) {
  const words = text.split(" ");
  return (
    <span className="inline-block" aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0, rotateX: 40, filter: "blur(12px)" }}
            animate={isLoaded ? { y: "0%", opacity: 1, rotateX: 0, filter: "blur(0px)" } : {}}
            transition={{
              delay: delay + i * 0.055,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = loaderState.subscribe((loading) => {
      if (!loading) setIsLoaded(true);
    });
    return () => { unsubscribe(); };
  }, []);

  return (
    <section className="relative -mt-20 md:-mt-24 h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center">
      
      {/* Fullscreen Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/dzc0mfs9z/video/upload/q_auto,f_auto/v1/Untitled_design_uozjqh.mp4"
        />
        {/* Premium Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#000000]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1925AA]/30 via-transparent to-transparent mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 w-full flex flex-col items-center text-center mt-6 sm:mt-12">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(12px)", scale: 0.95 }}
          animate={isLoaded ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#1925AA]/80 border border-[#1925AA]/50 text-[#E8E6E0] text-xs font-heading font-bold uppercase tracking-widest px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(25,37,170,0.4)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8E6E0] animate-pulse" />
          Enterprise IT Partner
        </motion.div>

        {/* Headline */}
        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] text-[#E8E6E0] leading-[1.1] sm:leading-[1.05] tracking-tight mb-4 sm:mb-6 drop-shadow-[0_0_40px_rgba(25,37,170,0.6)]">
          <WordReveal text={HEADLINE} delay={0.4} isLoaded={isLoaded} />
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={isLoaded ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#E8E6E0]/95 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        >
          IT Hardware Peripherals & Turnkey Solutions Delivered Faster Than E‑commerce. Mumbai‑wide fast delivery, Pan‑India shipping, genuine warrantied products.
        </motion.p>

      </div>

      {/* Scroll Down Indicator  */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#E8E6E0]/70 hover:text-[#E8E6E0] transition-colors cursor-pointer"
        onClick={() => {
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }
        }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 opacity-80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
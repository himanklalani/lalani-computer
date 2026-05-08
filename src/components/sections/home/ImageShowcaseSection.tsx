"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/* ── 16 Unsplash images (IT / corporate / tech themed) ── */
const images = [
  // Column 1
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  // Column 2
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
  "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80",
  // Column 3
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
  "https://images.unsplash.com/photo-1560732488-6b0df240254a?w=600&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80",
  // Column 4
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80",
  "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=600&q=80",
  "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&q=80",
];

/* ── Per-image stagger entrance ── */
const imageVariants = {
  hidden: { scale: 0.6, opacity: 0, filter: "blur(10px)" },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.43, 0.01, 0.17, 1] as [number, number, number, number],
    },
  }),
};

/* ── Word-by-word text reveal ── */
function AnimatedWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            delay: 0.15 + i * 0.06,
            duration: 0.4,
            ease: [0.42, -0.01, 0.06, 0.98],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Single parallax column ── */
function ParallaxColumn({
  imgs,
  speed,
  colIndex,
}: {
  imgs: string[];
  speed: number;
  colIndex: number;
}) {
  const colRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: colRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [0, speed]
  );

  return (
    <motion.div
      ref={colRef}
      className="flex flex-col gap-6 md:gap-8 flex-1 min-w-0"
      style={{ y }}
    >
      {imgs.map((src, i) => (
        <motion.div
          key={i}
          className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md"
          custom={colIndex * 4 + i}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Image
            src={src}
            alt={`Showcase image ${colIndex * 4 + i + 1}`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ── Main exported component ── */
export function ImageShowcaseSection() {
  const columns = [
    { imgs: images.slice(0, 4),  speed: -40  },  // col 1: slow up
    { imgs: images.slice(4, 8),  speed:  60  },  // col 2: faster down
    { imgs: images.slice(8, 12), speed: -40  },  // col 3: slow up
    { imgs: images.slice(12, 16), speed: 60  },  // col 4: faster down
  ];

  return (
    <section className="relative w-full overflow-hidden bg-warm-bg1 py-20 md:py-28">
      {/* ── Text overlay ── */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
        <h2 className="font-heading font-black text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-dark leading-[0.95] tracking-tight max-w-4xl">
          <AnimatedWords text="Built for businesses that move fast." />
        </h2>
        <p className="mt-6 text-center text-base sm:text-lg md:text-xl text-text-dark/70 max-w-xl">
          <AnimatedWords text="Turn infrastructure bottlenecks into competitive advantages." />
        </p>
      </div>

      {/* ── Gradient masks (top + bottom) ── */}
      <div
        className="absolute inset-x-0 top-0 h-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-warm-bg1) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--color-warm-bg1) 0%, transparent 100%)",
        }}
      />

      {/* ── Center radial overlay for text legibility ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(250,250,250,0.92) 0%, rgba(250,250,250,0.6) 50%, transparent 100%)",
        }}
      />

      {/* ── Image grid ── */}
      <div className="relative z-0 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex gap-6 md:gap-8">
          {columns.map((col, i) => (
            <ParallaxColumn
              key={i}
              imgs={col.imgs}
              speed={col.speed}
              colIndex={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

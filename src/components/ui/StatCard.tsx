"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  iconNode: React.ReactNode;
  label: string;
  delay?: number;
}

export function StatCard({ iconNode, label, delay = 0 }: StatCardProps) {
  const words = label.split(" ");

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-3xl p-8 text-center border border-primary/5 flex flex-col justify-center items-center h-full min-h-[240px] shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-warm-bg1/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <motion.div 
        initial={{ scale: 0, rotate: -15 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: delay + 0.2 }}
        className="mb-8 relative"
      >
        <div className="h-20 w-20 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10 shadow-inner">
          {iconNode}
        </div>
      </motion.div>
      <p className="font-heading font-bold text-primary text-sm md:text-base uppercase tracking-[0.15em] leading-relaxed flex flex-wrap justify-center gap-x-1.5 relative z-10">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: delay + 0.3 + (i * 0.05) }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}

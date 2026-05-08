"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function SwipeHint({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-end gap-1 mb-3 sm:hidden text-primary/40 pointer-events-none ${className}`}>
      <span className="text-[10px] uppercase tracking-widest font-bold font-sans">Swipe</span>
      <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronRight className="w-3.5 h-3.5" strokeWidth={3} />
      </motion.div>
    </div>
  );
}

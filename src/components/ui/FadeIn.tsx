"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const getVariants = () => {
    if (shouldReduceMotion || direction === "none") {
      return {
        hidden: { opacity: 0, filter: "blur(8px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
      };
    }

    const distance = 40;
    let x = 0;
    let y = 0;

    if (direction === "up") y = distance;
    if (direction === "down") y = -distance;
    if (direction === "left") x = distance;
    if (direction === "right") x = -distance;

    return {
      hidden: { opacity: 0, x, y, filter: "blur(12px)", scale: 0.99 },
      visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)", scale: 1 },
    };
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

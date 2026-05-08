"use client";

import { motion, useScroll, useReducedMotion } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 transform-origin-left"
      style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
    />
  );
}

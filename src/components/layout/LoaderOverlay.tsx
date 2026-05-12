"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { loaderState } from "@/lib/loaderState";

export default function LoaderOverlay() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [loading, setLoading] = useState(() => isHomePage && loaderState.isLoading);
  const [phase, setPhase] = useState<"initial" | "shrink">("initial");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // On non-home pages, immediately mark loading done and bail out
    if (!isHomePage) {
      loaderState.setLoading(false);
      return;
    }

    const unsubscribe = loaderState.subscribe(setLoading);

    if (shouldReduceMotion) {
      loaderState.setLoading(false);
      return unsubscribe;
    }

    // Shrink the background mask
    const t1 = setTimeout(() => setPhase("shrink"), 650);

    // Finish loading and trigger the FLIP transition to Navbar
    const t2 = setTimeout(() => {
      loaderState.setLoading(false);
    }, 1250);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      unsubscribe();
    };
  }, [shouldReduceMotion, isHomePage]);

  // Never render on non-home pages
  if (!isHomePage || !loading) return null;


  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader-overlay"
          exit={{ filter: "blur(0px)" }} /* Dummy exit to propagate exit signal to children */
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
        >
          {/* Unified Container: Background and Logo animated as one unit for perfect sync */}
          <motion.div
            layoutId="brand-logo"
            initial={{ width: "100vw", height: "100vh", borderRadius: "0px" }}
            animate={{
              width: phase === "initial" ? "100vw" : "320px",
              height: phase === "initial" ? "100vh" : "120px",
              borderRadius: phase === "initial" ? "0px" : "24px",
            }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="bg-primary flex flex-col items-center justify-center overflow-hidden"
          >
            <motion.img 
              layoutId="brand-logo-image"
              src="https://res.cloudinary.com/dzc0mfs9z/image/upload/f_auto,q_auto/logo_tafyhr" 
              alt="Lalani Computers Logo" 
              className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl"
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            />

            <motion.h1
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ 
                opacity: phase === "initial" ? 1 : 0, 
                y: phase === "initial" ? 0 : -10, 
                filter: phase === "initial" ? "blur(0px)" : "blur(4px)" 
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-white font-heading font-bold tracking-[0.2em] uppercase text-lg md:text-xl drop-shadow-lg"
            >
              Lalani Computers
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

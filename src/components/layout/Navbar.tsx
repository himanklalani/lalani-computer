"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MorphedMenu } from "@/components/ui/MorphedMenu";
import { loaderState } from "@/lib/loaderState";
import { scrollState } from "@/lib/scrollState";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [loading, setLoading] = useState(loaderState.isLoading);
  const [footerVisible, setFooterVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    return loaderState.subscribe(setLoading);
  }, []);

  useEffect(() => {
    return scrollState.subscribe(setFooterVisible);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // On non-home pages, loaderState is immediately false so everything shows instantly
  const menuVisible = !loading;
  const shouldShowLogo = !loading && !(isMobile && footerVisible);

  return (
    <>
      <div className="fixed top-6 left-4 md:left-6 lg:left-12 z-50 pointer-events-none">
        <Link href="/" className="inline-flex items-center gap-2 pointer-events-auto">
          <AnimatePresence>
            {shouldShowLogo && (
              <motion.div 
                layoutId="brand-logo"
                className="bg-transparent px-0 py-0 rounded-none shadow-none flex items-center justify-center border-transparent"
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                <motion.img 
                  layoutId="brand-logo-image"
                  src="https://res.cloudinary.com/dzc0mfs9z/image/upload/f_auto,q_auto/logo_tafyhr" 
                  alt="Lalani Computers Logo" 
                  className="h-10 md:h-12 w-auto object-contain drop-shadow-md"
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* Menu button: hidden during home page loader only, immediately visible on other pages */}
      <MorphedMenu
        className={`top-4 right-4 md:right-6 lg:right-12 transition-opacity duration-500 ease-out ${
          isHomePage && !menuVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
    </>
  );
}

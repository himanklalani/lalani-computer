"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

export interface MorphedMenuProps {
  navLinks?: { title: string; url: string }[];
  footerLinksData?: { title: string; url: string }[];
  menuBackgroundColor?: string;
  menuTextColor?: string;
  hoverLineColor?: string;
  btnClosedBg?: string;
  btnClosedColor?: string;
  btnOpenBg?: string;
  btnOpenColor?: string;
  menuWidthDesktop?: string;
  menuHeightDesktop?: string;
  menuWidthMobile?: string;
  menuHeightMobile?: string;
  className?: string;
}

const defaultProps = {
  menuBackgroundColor: "var(--color-primary)",
  menuTextColor: "var(--color-beige)",
  hoverLineColor: "var(--color-beige)",
  btnClosedBg: "var(--color-primary)",
  btnClosedColor: "var(--color-beige)",
  btnOpenBg: "var(--color-beige)",
  btnOpenColor: "var(--color-primary)",
  navFontSizeDesktop: 46,
  navFontSizeMobile: 36,
  footerFontSizeDesktop: 20,
  footerFontSizeMobile: 18,
  btnFontSizeDesktop: 16,
  btnFontSizeMobile: 14,
  menuWidthDesktop: "440px",
  menuHeightDesktop: "580px",
  menuWidthMobile: "90vw",
  menuHeightMobile: "70vh",
  mobileBreakpoint: 768,
  springStiffness: 60,
  springDamping: 14,
  springMass: 1,
  linkStiffness: 80,
  linkDamping: 15,
  linkDelayOffset: 0.03,
  navLinks: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Products", url: "/products" },
    { title: "Solutions", url: "/solutions" },
    { title: "Clients", url: "/clients" },
    { title: "Contact", url: "/contact" },
  ],
  footerLinksData: [
    { title: "LinkedIn", url: "https://www.linkedin.com/in/vikrant-lalani-821b5b6" },
    { title: "Instagram", url: "https://www.instagram.com/lalanicomputers?igsh=MmZka3I4MGRkcWRr" },
  ],
};

export function MorphedMenu(props: MorphedMenuProps) {
  const mergedProps = { ...defaultProps, ...props };
  const {
    navLinks,
    footerLinksData,
    menuBackgroundColor,
    menuTextColor,
    hoverLineColor,
    btnClosedBg,
    btnClosedColor,
    btnOpenBg,
    btnOpenColor,
    navFontSizeDesktop,
    navFontSizeMobile,
    footerFontSizeDesktop,
    footerFontSizeMobile,
    btnFontSizeDesktop,
    btnFontSizeMobile,
    menuWidthDesktop,
    menuHeightDesktop,
    menuWidthMobile,
    menuHeightMobile,
    mobileBreakpoint,
    springStiffness,
    springDamping,
    springMass,
    linkStiffness,
    linkDamping,
    linkDelayOffset,
    className,
  } = mergedProps;

  const [click, setClick] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHoveredIndex] = useState<number | null>(null);
  const [hover2, setHoveredIndex2] = useState<number | null>(null);
  const menuId = "as-animated-menu-box";
  const ref = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(1000);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setClick(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    let timeoutId: number;
    if (click) {
      timeoutId = window.setTimeout(() => setMenuOpen(true), 500);
    } else {
      setMenuOpen(false);
    }
    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [click]);

  const isMobile = windowWidth < mobileBreakpoint;
  const buttonWidth = isMobile ? "90px" : "110px";
  const buttonHeight = isMobile ? "40px" : "46px";

  const perspectiveAnimation: Variants = {
    initial: { opacity: 0, rotateX: 100, translateY: 80 },
    enter: (i: number) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        delay: i * linkDelayOffset,
        type: "spring",
        stiffness: linkStiffness,
        damping: linkDamping,
        mass: 0.8,
      },
    }),
    exit: { opacity: 0 },
  };

  const footerAnimation: Variants = {
    initial: { opacity: 0, y: 20 },
    enter: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        type: "spring",
        stiffness: linkStiffness,
        damping: linkDamping,
        mass: 0.8,
      },
    }),
    exit: { opacity: 0 },
  };

  const menuAnimation: Variants = {
    open: {
      width: isMobile ? menuWidthMobile : menuWidthDesktop,
      height: isMobile ? menuHeightMobile : menuHeightDesktop,
      top: "0px",
      right: "0px",
      transition: {
        type: "spring",
        stiffness: springStiffness,
        damping: springDamping,
        mass: springMass,
      },
    },
    closed: {
      width: buttonWidth,
      height: buttonHeight,
      top: "8px",
      right: "8px",
      transition: {
        type: "spring",
        stiffness: springStiffness,
        damping: springDamping,
        mass: springMass,
      },
    },
  };

  return (
    <div
      ref={ref}
      className={cn("fixed top-4 right-4 z-50", className)}
      style={{
        width: buttonWidth,
        height: buttonHeight,
      }}
    >
      <motion.div
        id={menuId}
        role="menu"
        aria-label="Site navigation"
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "8px",
          backgroundColor: menuBackgroundColor,
          overflow: "hidden",
          zIndex: 1,
        }}
        variants={menuAnimation}
        initial="closed"
        animate={click ? "open" : "closed"}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: isMobile ? "16px" : "40px",
            marginTop: "16px",
          }}
        >
          <AnimatePresence>
            {menuOpen &&
              navLinks.map((link, i) => {
                const isHovered = hover === i;
                return (
                  <div
                    key={i}
                    style={{
                      marginBottom: "-4px",
                      perspective: "70px",
                      perspectiveOrigin: "bottom",
                    }}
                  >
                    <motion.div
                      style={{ display: "flex", alignItems: "center", gap: "8px" }}
                      variants={perspectiveAnimation}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      custom={i}
                    >
                      <motion.svg
                        animate={isHovered ? { width: 48 } : { width: 0 }}
                        width="0"
                        height="31"
                        viewBox="0 0 105 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        aria-hidden="true"
                      >
                        <path
                          d="M0 31H103M103 31L73.5 1.5M103 31L73.5 60.5"
                          stroke={hoverLineColor}
                          strokeWidth="2"
                          vectorEffect="non-scaling-stroke"
                        />
                      </motion.svg>
                      <MotionLink
                        href={link.url}
                        role="menuitem"
                        className="font-heading font-bold"
                        style={{
                          color: menuTextColor,
                          textDecoration: "none",
                          fontSize: isMobile
                            ? `${navFontSizeMobile}px`
                            : `${navFontSizeDesktop}px`,
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        onClick={() => setClick(false)}
                      >
                        {link.title}
                      </MotionLink>
                    </motion.div>
                  </div>
                );
              })}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              aria-label="Social links"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                marginLeft: isMobile ? "32px" : "52px",
                marginTop: "32px",
              }}
            >
              {footerLinksData.map((link, i) => {
                const { title, url } = link;
                const isHovered2 = hover2 === i;
                return (
                  <motion.div
                    key={`f_${i}`}
                    style={{ position: "relative", width: "fit-content", marginBottom: "8px" }}
                    variants={footerAnimation}
                    custom={i}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    onMouseEnter={() => setHoveredIndex2(i)}
                    onMouseLeave={() => setHoveredIndex2(null)}
                  >
                    <MotionLink
                      href={url}
                      role="menuitem"
                      className="font-sans font-medium"
                      style={{
                        color: menuTextColor,
                        textDecoration: "none",
                        fontSize: isMobile
                          ? `${footerFontSizeMobile}px`
                          : `${footerFontSizeDesktop}px`,
                      }}
                    >
                      {title}
                    </MotionLink>
                    <motion.div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        height: "2px",
                        backgroundColor: hoverLineColor,
                      }}
                      animate={{ width: isHovered2 ? "100%" : "0%" }}
                      initial={{ width: "0%" }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Menubutton
        click={click}
        setClick={setClick}
        isMobile={isMobile}
        btnClosedBg={btnClosedBg}
        btnClosedColor={btnClosedColor}
        btnOpenBg={btnOpenBg}
        btnOpenColor={btnOpenColor}
        btnFontSizeDesktop={btnFontSizeDesktop}
        btnFontSizeMobile={btnFontSizeMobile}
        menuId={menuId}
        menuOpen={menuOpen}
      />
    </div>
  );
}

// ─── Menu Button ──────────────────────────────────────────────────────────────

function Menubutton({
  click,
  setClick,
  isMobile,
  btnClosedBg,
  btnClosedColor,
  btnOpenBg,
  btnOpenColor,
  btnFontSizeDesktop,
  btnFontSizeMobile,
  menuId,
  menuOpen,
}: any) {
  const [hovered, setHovered] = useState(false);
  const fontSize = isMobile ? `${btnFontSizeMobile}px` : `${btnFontSizeDesktop}px`;

  return (
    <button
      onClick={() => setClick(!click)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-expanded={menuOpen}
      aria-haspopup="menu"
      aria-controls={menuId}
      aria-label={click ? "Close menu" : "Open menu"}
      className="font-sans"
      style={{
        position: "absolute",
        top: "8px",
        right: "8px",
        cursor: "pointer",
        zIndex: 2,
        width: isMobile ? "90px" : "110px",
        height: isMobile ? "40px" : "46px",
        borderRadius: "8px",
        overflow: "hidden",
        border: "none",
        padding: 0,
        backgroundColor: "transparent",
      }}
    >
      <motion.div
        style={{ position: "relative", width: "100%", height: "100%" }}
        animate={{ y: click ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      >
        <div style={{ position: "relative", height: "100%", width: "100%", overflow: "hidden" }}>
          <motion.div
            style={{ height: "100%", width: "100%" }}
            animate={{ y: hovered ? "-100%" : "0%" }}
            initial={false}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          >
            <ButtonLabel bg={btnClosedBg} clr={btnClosedColor} fontSize={fontSize}>
              MENU
            </ButtonLabel>
          </motion.div>
          <motion.div
            style={{ position: "absolute", inset: 0 }}
            animate={{ y: hovered ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            initial={false}
          >
            <ButtonLabel bg={btnClosedBg} clr={btnClosedColor} fontSize={fontSize}>
              MENU
            </ButtonLabel>
          </motion.div>
        </div>
        <div style={{ position: "relative", height: "100%", width: "100%", overflow: "hidden" }}>
          <motion.div
            style={{ height: "100%", width: "100%" }}
            animate={{ y: hovered ? "-100%" : "0%" }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          >
            <ButtonLabel bg={btnOpenBg} clr={btnOpenColor} fontSize={fontSize}>
              CLOSE
            </ButtonLabel>
          </motion.div>
          <motion.div
            style={{ position: "absolute", inset: 0 }}
            animate={{ y: hovered ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            initial={false}
          >
            <ButtonLabel bg={btnOpenBg} clr={btnOpenColor} fontSize={fontSize}>
              CLOSE
            </ButtonLabel>
          </motion.div>
        </div>
      </motion.div>
    </button>
  );
}

// ─── Button Label ─────────────────────────────────────────────────────────────

function ButtonLabel({ children, bg, clr, fontSize }: any) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        cursor: "pointer",
        fontSize: fontSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bg,
        color: clr,
        fontWeight: 600,
      }}
    >
      {children}
    </div>
  );
}

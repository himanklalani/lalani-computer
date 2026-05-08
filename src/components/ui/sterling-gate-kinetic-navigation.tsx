"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Register GSAP Plugins safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

export function SterlingGateKineticNavigation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initial Setup & Hover Effects
  useEffect(() => {
    if (!containerRef.current) return;

    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
        gsap.defaults({ ease: "main", duration: 0.7 });
      }
    } catch (e) {
      console.warn("CustomEase failed to load, falling back to default.", e);
      gsap.defaults({ ease: "power2.out", duration: 0.7 });
    }

    const ctx = gsap.context(() => {
      const menuItems = containerRef.current!.querySelectorAll(".menu-list-item[data-shape]");
      const shapesContainer = containerRef.current!.querySelector(".ambient-background-shapes");

      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape");
        const shape = shapesContainer ? shapesContainer.querySelector(`.bg-shape-${shapeIndex}`) : null;

        if (!shape) return;

        const shapeEls = shape.querySelectorAll(".shape-element");

        const onEnter = () => {
          if (shapesContainer) {
            shapesContainer.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"));
          }
          shape.classList.add("active");

          gsap.fromTo(
            shapeEls,
            { scale: 0.5, opacity: 0, rotation: -10 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)", overwrite: "auto" }
          );
        };

        const onLeave = () => {
          gsap.to(shapeEls, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => shape.classList.remove("active"),
            overwrite: "auto",
          });
        };

        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);

        (item as any)._cleanup = () => {
          item.removeEventListener("mouseenter", onEnter);
          item.removeEventListener("mouseleave", onLeave);
        };
      });

      // 3. Link Hover Animation (The "Kinetic" Slide & 3D Magnetic Tilt)
      const navLinks = containerRef.current!.querySelectorAll(".nav-link");

      navLinks.forEach((link) => {
        const linkBg = link.querySelector(".nav-link-hover-bg");
        const outlineText = link.querySelector(".outline-text");
        const solidText = link.querySelector(".solid-text");
        const textElements = link.querySelectorAll(".nav-link-text");

        // Hover Slide In
        const onLinkEnter = () => {
          gsap.to(linkBg, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "expo.out" });
          gsap.to(textElements, { x: 20, duration: 0.6, ease: "expo.out" });
        };

        // Hover Slide Out
        const onLinkLeave = () => {
          gsap.to(linkBg, {
            clipPath: "inset(0% 0% 0% 100%)",
            duration: 0.5,
            ease: "power4.inOut",
            onComplete: () => {
              gsap.set(linkBg, { clipPath: "inset(0% 100% 0% 0%)" }); // Reset to left side
            },
          });
          gsap.to(textElements, { x: 0, rotateX: 0, rotateY: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
        };

        // Magnetic & 3D Tilt Logic
        const onMouseMove = (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const { clientX, clientY } = mouseEvent;
          const rect = link.getBoundingClientRect();
          
          // Calculate relative mouse position (-0.5 to 0.5)
          const x = (clientX - rect.left) / rect.width - 0.5;
          const y = (clientY - rect.top) / rect.height - 0.5;

          gsap.to(textElements, {
            x: x * 30 + (mouseEvent.type === 'mousemove' ? 20 : 0), // Base shift + magnetic
            y: y * 15,
            rotateX: -y * 20,
            rotateY: x * 20,
            duration: 0.5,
            ease: "power2.out"
          });
        };

        link.addEventListener("mouseenter", onLinkEnter);
        link.addEventListener("mouseleave", onLinkLeave);
        link.addEventListener("mousemove", onMouseMove);

        (link as any)._cleanup = () => {
          link.removeEventListener("mouseenter", onLinkEnter);
          link.removeEventListener("mouseleave", onLinkLeave);
          link.removeEventListener("mousemove", onMouseMove);
        };
      });
    }, containerRef);

    return () => {
      ctx.revert();
      if (containerRef.current) {
        const shapeItems = containerRef.current.querySelectorAll(".menu-list-item[data-shape]");
        shapeItems.forEach((item: any) => item._cleanup && item._cleanup());
        
        const navLinks = containerRef.current.querySelectorAll(".nav-link");
        navLinks.forEach((link: any) => link._cleanup && link._cleanup());
      }
    };
  }, []);

  // Menu Open/Close Animation Effect
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
      const menu = containerRef.current!.querySelector(".menu-content");
      const overlay = containerRef.current!.querySelector(".overlay");
      const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer");
      const menuLinks = containerRef.current!.querySelectorAll(".nav-link-text");
      const fadeTargets = containerRef.current!.querySelectorAll("[data-menu-fade]");

      const tl = gsap.timeline();

      if (isMenuOpen) {
        // OPEN
        if (navWrap) navWrap.setAttribute("data-nav", "open");

        tl.set(navWrap, { display: "block", pointerEvents: "auto" })
          .set(menu, { xPercent: 0 }, "<")
          .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
          .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
          .fromTo(menuLinks, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, "<+=0.35");

        if (fadeTargets.length) {
          tl.fromTo(fadeTargets, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" }, "<+=0.2");
        }
      } else {
        // CLOSE
        if (navWrap) navWrap.setAttribute("data-nav", "closed");

        tl.to(overlay, { autoAlpha: 0 })
          .to(menu, { xPercent: 120 }, "<")
          .set(navWrap, { display: "none", pointerEvents: "none" });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isMenuOpen]);

  // keydown Escape handling
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const links = [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
    { name: "Clients", href: "/clients" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div ref={containerRef}>
      <header className="fixed top-0 left-0 right-0 z-40 w-full flex-none bg-warm-bg1/90 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-xl text-primary flex items-center gap-2 relative z-50">
            <span className="bg-beige px-3 py-1 rounded-full border border-primary/10">Lalani Computers</span>
          </Link>

          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle Navigation Menu"
            aria-controls="mobile-menu"
            className="p-2 -mr-2 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md relative z-50 group flex items-center gap-2 font-medium uppercase tracking-widest text-sm"
          >
            <span className="hidden md:block group-hover:text-primary-dark transition-colors">{isMenuOpen ? "Close" : "Menu"}</span>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <section className="fullscreen-menu-container">
        <div data-nav="closed" className="nav-overlay-wrapper fixed inset-0 z-40 hidden">
          <div className="overlay absolute inset-0 bg-text-dark/40 backdrop-blur-sm" onClick={closeMenu}></div>
          <nav className="menu-content absolute top-0 right-0 h-full w-full md:w-1/2 lg:w-2/5 max-w-2xl bg-warm-bg1 flex flex-col justify-center px-8 md:px-16 shadow-2xl overflow-hidden">
            <div className="menu-bg absolute inset-0 -z-10 pointer-events-none">
              <div className="backdrop-layer first absolute inset-0 bg-primary/5"></div>
              <div className="backdrop-layer second absolute inset-0 bg-primary/10"></div>
              <div className="backdrop-layer absolute inset-0 bg-warm-bg2"></div>

              {/* Abstract shapes container */}
              <div className="ambient-background-shapes absolute inset-0 opacity-40">
                <svg className="bg-shape bg-shape-1 absolute inset-0 w-full h-full object-cover" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element origin-center" cx="80" cy="120" r="40" fill="var(--color-primary)" opacity="0.15" />
                  <circle className="shape-element origin-center" cx="300" cy="80" r="60" fill="var(--color-primary-dark)" opacity="0.12" />
                  <circle className="shape-element origin-center" cx="200" cy="300" r="80" fill="var(--color-primary)" opacity="0.1" />
                </svg>

                <svg className="bg-shape bg-shape-2 absolute inset-0 w-full h-full object-cover" viewBox="0 0 400 400" fill="none">
                  <path className="shape-element origin-center" d="M0 200 Q100 100, 200 200 T 400 200" stroke="var(--color-primary)" strokeWidth="60" fill="none" opacity="0.2" />
                  <path className="shape-element origin-center" d="M0 280 Q100 180, 200 280 T 400 280" stroke="var(--color-primary-dark)" strokeWidth="40" fill="none" opacity="0.15" />
                </svg>

                <svg className="bg-shape bg-shape-3 absolute inset-0 w-full h-full object-cover" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element origin-center" cx="50" cy="50" r="8" fill="var(--color-primary)" opacity="0.3" />
                  <circle className="shape-element origin-center" cx="150" cy="50" r="8" fill="var(--color-primary-dark)" opacity="0.3" />
                  <circle className="shape-element origin-center" cx="200" cy="150" r="12" fill="var(--color-primary)" opacity="0.25" />
                  <circle className="shape-element origin-center" cx="300" cy="150" r="12" fill="var(--color-primary-dark)" opacity="0.25" />
                </svg>

                <svg className="bg-shape bg-shape-4 absolute inset-0 w-full h-full object-cover" viewBox="0 0 400 400" fill="none">
                  <path className="shape-element origin-center" d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100" fill="var(--color-primary)" opacity="0.12" />
                  <path className="shape-element origin-center" d="M250 200 Q300 150, 350 200 Q400 250, 350 300 Q400 250, 350 300 Q300 350, 250 300 Q200 250, 250 200" fill="var(--color-primary-dark)" opacity="0.1" />
                </svg>

                <svg className="bg-shape bg-shape-5 absolute inset-0 w-full h-full object-cover" viewBox="0 0 400 400" fill="none">
                  <line className="shape-element origin-center" x1="0" y1="100" x2="300" y2="400" stroke="var(--color-primary)" strokeWidth="30" opacity="0.15" />
                  <line className="shape-element origin-center" x1="100" y1="0" x2="400" y2="300" stroke="var(--color-primary-dark)" strokeWidth="25" opacity="0.12" />
                </svg>
              </div>
            </div>

            <div className="menu-content-wrapper relative z-10 w-full pt-16">
              <ul className="menu-list space-y-4">
                {links.map((link, i) => (
                  <li key={i} className="menu-list-item" data-shape={i + 1} style={{ perspective: "1000px" }}>
                    <Link href={link.href} className="nav-link relative flex items-center py-2 px-6 overflow-hidden w-full group" onClick={closeMenu}>
                      
                      {/* Base Outline Text */}
                      <span className="nav-link-text outline-text relative z-10 text-5xl md:text-6xl lg:text-7xl font-heading font-black uppercase tracking-tighter"
                            style={{ 
                              WebkitTextStroke: "1px var(--color-primary)", 
                              color: "transparent",
                              lineHeight: 0.9 
                            }}>
                        {link.name}
                      </span>
                      
                      {/* Masked Solid Reveal */}
                      <div className="nav-link-hover-bg absolute top-0 left-0 w-full h-full bg-primary z-20 flex items-center px-6 pointer-events-none" 
                           style={{ clipPath: "inset(0% 100% 0% 0%)" }}>
                        <span className="nav-link-text solid-text absolute text-5xl md:text-6xl lg:text-7xl font-heading font-black text-beige uppercase tracking-tighter whitespace-nowrap"
                              style={{ lineHeight: 0.9 }}>
                          {link.name}
                        </span>
                      </div>
                      
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 pt-8 border-t border-primary/10 overflow-hidden" data-menu-fade>
                <Link href="/contact" onClick={closeMenu} className="inline-flex h-12 md:h-14 items-center justify-center rounded-lg bg-primary px-8 text-sm md:text-base font-medium text-beige shadow-lg transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Request a Quote
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

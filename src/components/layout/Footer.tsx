"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { CookieSettingsButton } from "@/components/ui/CookieSettingsButton";
import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";
import { scrollState } from "@/lib/scrollState";

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { margin: "0px 0px -50px 0px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    scrollState.setFooterVisible(isInView);
  }, [isInView]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <footer ref={footerRef} className="relative w-full bg-[#0D1260] text-beige overflow-hidden border-t border-primary/20 mt-auto">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-light/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="inline-block group mb-6">
              <div className="relative h-12 md:h-16">
                <img 
                  src="https://res.cloudinary.com/dzc0mfs9z/image/upload/w_400,f_auto,q_auto/logo_tafyhr" 
                  alt="Lalani Computers Logo" 
                  width={160}
                  height={64}
                  className="opacity-0 relative h-12 md:h-16 w-auto object-contain pointer-events-none"
                />
                <motion.div 
                  layoutId={isMobile && isInView ? "brand-logo" : undefined}
                  className="absolute inset-0 flex items-center"
                >
                  <motion.img 
                    layoutId={isMobile && isInView ? "brand-logo-image" : undefined}
                    src="https://res.cloudinary.com/dzc0mfs9z/image/upload/w_400,f_auto,q_auto/logo_tafyhr" 
                    alt="Lalani Computers Logo"
                    width={160}
                    height={64}
                    className="h-12 md:h-16 w-auto object-contain drop-shadow-md"
                  />
                </motion.div>
              </div>
              <div className="h-1 w-12 bg-primary-light mt-4 rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
            <p className="text-beige/70 text-sm leading-relaxed mb-8 max-w-xs">
              Mumbai's trusted partner for enterprise IT hardware, turnkey office setups, and comprehensive AMC services. Over 30 years of excellence.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="https://www.linkedin.com/in/vikrant-lalani-821b5b6" icon={<LinkedinIcon size={18} />} label="LinkedIn" />
              <SocialLink href="https://www.instagram.com/lalanicomputers?igsh=MmZka3I4MGRkcWRr" icon={<InstagramIcon size={18} />} label="Instagram" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">IT Solutions</h3>
            <ul className="space-y-4">
              <FooterLink href="/products">All Products</FooterLink>
              <FooterLink href="/products/servers">Servers & Storage</FooterLink>
              <FooterLink href="/products/networking-security">Networking</FooterLink>
              <FooterLink href="/solutions">Turnkey IT Setups</FooterLink>
              <FooterLink href="/clients/industries/bfsi">BFSI IT Services</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Company</h3>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/clients">Our Clients</FooterLink>
              <FooterLink href="/contact">Contact Sales</FooterLink>
              <FooterLink href="/terms">Terms</FooterLink>
              <FooterLink href="/privacy">Privacy</FooterLink>
              <CookieSettingsButton />
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-beige/70 group">
                <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-sm leading-relaxed">
                  59, Janmabhoomi Marg, Fort,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3 text-beige/70 group">
                <Phone className="w-5 h-5 text-primary-light shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+919323332850" className="text-sm hover:text-white transition-colors">+91 93233 32850</a>
              </li>
              <li className="flex items-center gap-3 text-beige/70 group">
                <Mail className="w-5 h-5 text-primary-light shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:lalanics@yahoo.co.in" className="text-sm hover:text-white transition-colors">lalanics@yahoo.co.in</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-beige/50">
            © {currentYear} Lalani Computers. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-beige/70 text-sm hover:text-white flex items-center gap-2 group transition-colors duration-300"
      >
        <ArrowRight className="w-3 h-3 text-primary-light opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
        <span className="transform group-hover:translate-x-1 transition-transform duration-300">
          {children}
        </span>
      </Link>
    </li>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-beige hover:bg-primary-light hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(71,84,214,0.5)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}

import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";

export function DeliveryAndServiceSection() {
  return (
    <Section variant="white" className="overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <FadeIn>
            <Typography variant="eyebrow" className="mb-4">Logistics & Support</Typography>
            <Typography variant="h2" className="mb-6">
              Faster than e‑commerce in Mumbai.
            </Typography>
            <Typography variant="body" className="mb-8">
              When your business halts due to hardware failure, you can't afford to wait 3-5 business days. Our massive local inventory ensures you get replacements and new setups installed within hours, not days.
            </Typography>
          </FadeIn>
          
          <div className="space-y-6">
            <FadeIn delay={0.2} direction="left">
              <div className="flex items-center gap-4 p-4 bg-warm-bg1 rounded-xl border border-primary/5 transition-colors hover:border-primary/20">
                <div className="w-12 h-12 bg-primary text-beige rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">24h</div>
                <div>
                  <Typography variant="h3" className="text-lg">Under 24 hours dispatch</Typography>
                  <Typography variant="small">For all ready stock within Mumbai limits.</Typography>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} direction="left">
              <div className="flex items-center gap-4 p-4 bg-warm-bg1 rounded-xl border border-primary/5 transition-colors hover:border-primary/20">
                <div className="w-12 h-12 bg-primary text-beige rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">🇮🇳</div>
                <div>
                  <Typography variant="h3" className="text-lg">Pan-India Shipping</Typography>
                  <Typography variant="small">Secure delivery through trusted logistics partners.</Typography>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        
        <div className="flex-1 w-full h-[400px]">
          <FadeIn delay={0.4} direction="right" className="h-full">
            <div className="bg-warm-bg2 rounded-3xl overflow-hidden border border-primary/10 h-full shadow-lg relative group transition-transform hover:scale-[1.01] duration-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.872052!2d72.833117!3d18.9334801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1dc9af3db65%3A0x2909c144ebb53b75!2zNTksIEphbm1hYmhvb21pIE1hcmcsIEthbGEgR2hvZGEsIEZvcnQsIE11bWJhaSwgTWFoYXJhc2h0cmEgNDAwMDAx!5e0!3m2!1sen!2sin!4v1715077067000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lalani Computers Office Location"
                className="opacity-90 hover:opacity-100 transition-opacity"
              ></iframe>
              <a 
                href="https://maps.app.goo.gl/gfr5SrUZUbKmEZQ2A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}

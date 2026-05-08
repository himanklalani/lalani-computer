import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function FinalCTASection() {
  return (
    <Section variant="dark" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-primary/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-card-dark to-card-dark pointer-events-none"></div>
      
      {/* Decorative background rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <FadeIn direction="up">
          <Typography variant="h2" className="text-white mb-6 leading-tight">
            Tell Us What You Need — We’ll Configure It for You.
          </Typography>
        </FadeIn>
        
        <FadeIn delay={0.1} direction="up">
          <Typography variant="lead" className="text-beige/80 mb-10 max-w-2xl mx-auto">
            From a single laptop replacement to a complete corporate office IT setup, we deliver fast and reliable solutions.
          </Typography>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <Button variant="primary" size="lg" as="a" href="/contact#quote" className="w-full sm:w-auto shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
            Send a Requirement
          </Button>
        </FadeIn>
      </div>
    </Section>
  );
}

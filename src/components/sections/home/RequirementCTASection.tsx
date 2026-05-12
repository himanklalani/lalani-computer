import React from "react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";
import { ShieldCheck, Zap, Layers, Headphones, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SwipeHint } from "@/components/ui/SwipeHint";

const marqueeData = [
  "Which server architecture fits our scale?",
  "How do we secure our enterprise data?",
  "How do we minimize IT downtime?",
  "What is the best cloud migration strategy?",
  "How do we manage endpoint security?",
  "Is our network infrastructure future-proof?",
  "How can we optimize software licensing?",
  "What are the best backup solutions?",
  "How do we streamline IT procurement?",
  "What is the most cost-effective hardware?",
  "How do we ensure seamless remote work?",
  "What are the latest compliance standards?",
  "What laptop specs should I buy for office use?",
  "Which workstation is best for CAD and 3D modeling?",
  "How much RAM do we need for heavy multitasking?",
  "Should we buy or lease our IT hardware?",
  "Which desktop PC is best for video editing?",
  "How do we set up a secure office Wi-Fi network?",
  "What is the best firewall for small businesses?",
  "Which server configuration is best for virtualization?"
];

const features = [
  {
    description:
      "No jargon, no overcomplication — just clear, actionable IT strategies you can rely on to grow your operations confidently.",
    icon: Zap,
    title: "We make things simple",
  },
  {
    description:
      "Every architecture we design is focused on increasing uptime, boosting productivity, and driving your ROI.",
    icon: ShieldCheck,
    title: "We focus on real results",
  },
  {
    description:
      "With over 30 years of hands-on experience across multiple industries, we bring proven enterprise hardware solutions to the table.",
    icon: Layers,
    title: "We know what works",
  },
  {
    description:
      "From your first procurement idea to scaling your AMC, we provide ongoing, dedicated support—not just a one-time sale.",
    icon: Headphones,
    title: "With you all the way",
  },
];

// Inline Marquee Component
const Marquee = ({ children, reverse = false, duration = "40s", repeat = 4 }: { children: React.ReactNode, reverse?: boolean, duration?: string, repeat?: number }) => {
  return (
    <div className="flex w-full overflow-hidden gap-[var(--gap)] [--gap:1rem]" style={{ '--duration': duration } as React.CSSProperties}>
      {Array(repeat).fill(0).map((_, i) => (
        <div key={i} className={cn("flex shrink-0 items-center justify-around gap-[var(--gap)]", reverse ? "animate-marquee-reverse" : "animate-marquee-standard")}>
          {children}
        </div>
      ))}
    </div>
  );
};

export function RequirementCTASection() {
  const m1 = marqueeData.slice(0, 4);
  const m2 = marqueeData.slice(4, 8);
  const m3 = marqueeData.slice(8, 12);

  return (
    <section className="relative bg-white pt-24 pb-16 overflow-hidden border-t border-primary/10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-6 px-5 text-center md:px-10">
          <FadeIn>
            <h2 className="max-w-3xl font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight">
              Removing the roadblocks to your IT success
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="max-w-2xl text-base md:text-lg text-text-dark/80 leading-relaxed">
              It's easy to get lost in a sea of technical advice, conflicting specs, and endless hardware options. We filter out the noise, focusing on what truly matters to build resilient, high-performance environments that let your business shine.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full mt-10">
            <div className="relative mx-auto max-w-4xl overflow-hidden py-4">
              {/* Fade Edges */}
              <div className="pointer-events-none absolute left-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute right-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

              <div className="-mx-4 flex w-screen max-w-[100vw] flex-col gap-4 md:-mx-10 lg:-mx-16">
                <Marquee duration="45s">
                  {m1.map((q) => (
                    <div key={q} className="rounded-full border border-primary/10 bg-warm-bg1 px-6 py-2 text-sm md:text-base font-medium text-text-dark whitespace-nowrap shadow-sm">
                      {q}
                    </div>
                  ))}
                </Marquee>

                <Marquee duration="50s" reverse>
                  {m2.map((q) => (
                    <div key={q} className="rounded-full border border-primary/10 bg-warm-bg1 px-6 py-2 text-sm md:text-base font-medium text-text-dark whitespace-nowrap shadow-sm">
                      {q}
                    </div>
                  ))}
                </Marquee>

                <Marquee duration="42s">
                  {m3.map((q) => (
                    <div key={q} className="rounded-full border border-primary/10 bg-warm-bg1 px-6 py-2 text-sm md:text-base font-medium text-text-dark whitespace-nowrap shadow-sm">
                      {q}
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 sm:mt-20 sm:hidden">
            <SwipeHint className="pr-4 md:pr-8" />
          </div>
          <div className="sm:mt-20 flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar sm:grid-cols-2 lg:grid-cols-4 divide-x divide-primary/10 border border-primary/10 mx-4 md:mx-8 bg-warm-bg2 rounded-3xl shadow-sm">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  className="w-[85%] sm:w-auto shrink-0 snap-center sm:snap-align-none flex flex-col gap-4 sm:gap-5 px-6 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 group hover:bg-primary/5 transition-colors duration-300 first:rounded-l-3xl last:rounded-r-3xl"
                  key={feature.title}
                >
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white border border-primary/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className="size-5 sm:size-6 text-primary" strokeWidth={1.5} />
                  </div>

                  <div className="flex flex-col gap-2 sm:gap-3 pt-4 sm:pt-6 lg:pt-8">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-primary">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-text-dark/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-16 flex justify-center">
            <Button as="a" href="/contact" size="lg" className="group px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Send a Requirement
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import React from "react";
import { LogoPill } from "@/components/ui/LogoPill";
import { FadeIn } from "@/components/ui/FadeIn";
import { Sparkles } from "@/components/ui/sparkles";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export function ClientsStripSection() {
  const clients = [
    "Kores India", "Navnit Motors", "Eureka Forbes", 
    "Reliance Infrastructure", "HGS", "Punjab National Bank", 
    "Akumentis Healthcare", "K Raheja", "Rustomjee", 
    "Zenith Birla Ltd", "Agfa Healthcare"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-warm-bg1 border-t border-primary/10 pb-0">
      <div className="mx-auto mt-24 w-full max-w-6xl px-4 md:px-6 relative z-20">
        <FadeIn>
          <div className="text-center text-3xl text-foreground mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
              Trusted by leading brands.
            </h2>
          </div>
        </FadeIn>

        <div className="relative mt-7 h-[120px] w-full">
          <InfiniteSlider 
            className='flex h-full w-full items-center' 
            duration={40}
            gap={24}
          >
            {clients.map((client, i) => (
              <div key={i} className="py-2">
                <LogoPill name={client} />
              </div>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur
            className='pointer-events-none absolute top-0 left-0 h-full w-[80px] md:w-[200px]'
            direction='left'
            blurIntensity={1.5}
          />
          <ProgressiveBlur
            className='pointer-events-none absolute top-0 right-0 h-full w-[80px] md:w-[200px]'
            direction='right'
            blurIntensity={1.5}
          />
        </div>
      </div>

      <div className="relative -mt-24 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] z-10 pointer-events-none">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,var(--gradient-color),transparent_70%)] before:opacity-[0.15]" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-primary/10 bg-warm-bg1 shadow-[inset_0_20px_40px_rgba(25,37,170,0.03)]" />
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)] opacity-60"
          color="var(--sparkles-color)"
        />
      </div>
    </div>
  );
}

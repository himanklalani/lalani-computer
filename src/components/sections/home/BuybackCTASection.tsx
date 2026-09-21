import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Recycle } from "lucide-react";

export function BuybackCTASection() {
  return (
    <section className="py-24 px-4 md:px-6 bg-white border-t border-primary/10">
      <div className="max-w-5xl mx-auto bg-warm-bg1 p-8 md:p-12 rounded-3xl border border-primary/10 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <FadeIn direction="left" className="flex-1 relative z-10">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm border border-primary/10">
            <Recycle className="w-7 h-7" />
          </div>
          <Typography variant="h2" className="mb-4">Retiring Legacy Hardware?</Typography>
          <Typography variant="body" className="text-text-dark/80 mb-6 max-w-lg">
            Don't let aging laptops and servers gather dust. We offer fair-market IT Asset Buyback for corporate fleets, complete with secure data wiping and responsible e-waste recycling.
          </Typography>
          <Link href="/solutions/it-asset-buyback">
            <Button size="lg" className="shadow-md">Explore IT Asset Buyback</Button>
          </Link>
        </FadeIn>
        <FadeIn direction="right" className="flex-1 w-full relative z-10 flex justify-center md:justify-end">
           <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
             <div className="bg-white p-6 rounded-2xl border border-primary/10 shadow-sm text-center">
                <Typography variant="h3" className="text-primary text-3xl font-bold mb-1">100%</Typography>
                <Typography variant="small" className="font-semibold text-text-dark">Data Security</Typography>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-primary/10 shadow-sm text-center">
                <Typography variant="h3" className="text-primary text-3xl font-bold mb-1">Zero</Typography>
                <Typography variant="small" className="font-semibold text-text-dark">Landfill Policy</Typography>
             </div>
           </div>
        </FadeIn>
      </div>
    </section>
  );
}

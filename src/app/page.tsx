import { HeroSection } from "@/components/sections/home/HeroSection";
import { USPStripSection } from "@/components/sections/home/USPStripSection";
import { ProductCategoryGridSection } from "@/components/sections/home/ProductCategoryGridSection";
import { BrandMarqueeSection } from "@/components/sections/home/BrandMarqueeSection";
import { ImageShowcaseSection } from "@/components/sections/home/ImageShowcaseSection";
import { SolutionsOverviewSection } from "@/components/sections/home/SolutionsOverviewSection";
import { DeliveryAndServiceSection } from "@/components/sections/home/DeliveryAndServiceSection";
import { ClientsStripSection } from "@/components/sections/home/ClientsStripSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { RequirementCTASection } from "@/components/sections/home/RequirementCTASection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate IT Hardware & Turnkey Solutions Mumbai",
  description: "Mumbai's trusted partner for enterprise IT hardware, peripherals, turnkey office setups, and AMC services. Over 30 years of excellence.",
  openGraph: {
    title: "Lalani Computers | Corporate IT Hardware & Turnkey Solutions Mumbai",
    description: "Mumbai's trusted partner for enterprise IT hardware, peripherals, turnkey office setups, and AMC services.",
  }
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <USPStripSection />
      <ProductCategoryGridSection />
      <BrandMarqueeSection />
      <ImageShowcaseSection />
      <SolutionsOverviewSection />
      <DeliveryAndServiceSection />
      <ClientsStripSection />
      <TestimonialsSection />
      <RequirementCTASection />
    </>
  );
}

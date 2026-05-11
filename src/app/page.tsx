import { HeroSection } from "@/components/sections/home/HeroSection";
import { USPStripSection } from "@/components/sections/home/USPStripSection";
import dynamic from "next/dynamic";

import { Metadata } from "next";

// Lazy-load below-fold sections to reduce initial JS bundle
const ProductCategoryGridSection = dynamic(
  () => import("@/components/sections/home/ProductCategoryGridSection").then(m => m.ProductCategoryGridSection),
  { ssr: true }
);
const BrandMarqueeSection = dynamic(
  () => import("@/components/sections/home/BrandMarqueeSection").then(m => m.BrandMarqueeSection),
  { ssr: true }
);
const ImageShowcaseSection = dynamic(
  () => import("@/components/sections/home/ImageShowcaseSection").then(m => m.ImageShowcaseSection),
  { ssr: true }
);
const SolutionsOverviewSection = dynamic(
  () => import("@/components/sections/home/SolutionsOverviewSection").then(m => m.SolutionsOverviewSection),
  { ssr: true }
);
const DeliveryAndServiceSection = dynamic(
  () => import("@/components/sections/home/DeliveryAndServiceSection").then(m => m.DeliveryAndServiceSection),
  { ssr: true }
);
const ClientsStripSection = dynamic(
  () => import("@/components/sections/home/ClientsStripSection").then(m => m.ClientsStripSection),
  { ssr: true }
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/home/TestimonialsSection").then(m => m.TestimonialsSection),
  { ssr: true }
);
const RequirementCTASection = dynamic(
  () => import("@/components/sections/home/RequirementCTASection").then(m => m.RequirementCTASection),
  { ssr: true }
);

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

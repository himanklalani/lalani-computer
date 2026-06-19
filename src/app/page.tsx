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
  title: "Lalani Computers | Corporate IT Hardware & Turnkey Solutions Mumbai",
  description: "Mumbai's trusted partner for enterprise IT hardware, peripherals, turnkey office setups, and AMC services. Over 30 years of excellence.",
  openGraph: {
    title: "Lalani Computers | Corporate IT Hardware & Turnkey Solutions Mumbai",
    description: "Mumbai's trusted partner for enterprise IT hardware, peripherals, turnkey office setups, and AMC services.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Lalani Computers",
  "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "@id": "https://www.lalanicomputers.com",
  "url": "https://www.lalanicomputers.com",
  "telephone": "+919323332850",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "59, Janmabhoomi Marg, Janmabhoomi Bhavan, Fort",
    "addressLocality": "Mumbai",
    "postalCode": "400001",
    "addressCountry": "IN"
  },
  "areaServed": ["Mumbai", "India"],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "10:00",
    "closes": "19:00"
  }
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <RequirementCTASection />
      <USPStripSection />
      <ProductCategoryGridSection />
      <BrandMarqueeSection />
      <ImageShowcaseSection />
      <SolutionsOverviewSection />
      <DeliveryAndServiceSection />
      <ClientsStripSection />
      <TestimonialsSection />
    </>
  );
}

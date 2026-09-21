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
const GuidesOverviewSection = dynamic(
  () => import("@/components/sections/home/GuidesOverviewSection").then(m => m.GuidesOverviewSection),
  { ssr: true }
);
const RequirementCTASection = dynamic(
  () => import("@/components/sections/home/RequirementCTASection").then(m => m.RequirementCTASection),
  { ssr: true }
);
const BuybackCTASection = dynamic(
  () => import("@/components/sections/home/BuybackCTASection").then(m => m.BuybackCTASection),
  { ssr: true }
);

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  title: "Lalani Computers | Enterprise IT Hardware & Networking Mumbai",
  description: "Mumbai's premier enterprise IT hardware supplier and turnkey infrastructure deployment partner. Specializing in corporate laptops, servers, and office networking.",
  openGraph: {
    title: "Lalani Computers | Enterprise IT Hardware & Networking Mumbai",
    description: "Mumbai's premier enterprise IT hardware supplier and turnkey infrastructure deployment partner. Specializing in corporate laptops, servers, and office networking.",
    url: "https://www.lalanicomputers.com/",
    siteName: "Lalani Computers",
    images: [{ url: "https://www.lalanicomputers.com/icon.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lalani Computers | Enterprise IT Hardware & Networking Mumbai",
    description: "Mumbai's premier enterprise IT hardware supplier and turnkey infrastructure deployment partner.",
    images: ["https://www.lalanicomputers.com/icon.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ComputerStore"],
  "name": "Lalani Computers",
  "description": "Mumbai's premier enterprise IT hardware supplier and turnkey infrastructure deployment partner. Specializing in corporate laptops, servers, and office networking.",
  "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "@id": "https://www.lalanicomputers.com",
  "url": "https://www.lalanicomputers.com",
  "telephone": "+919323332850",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2nd floor, Fountain Circle, 59, Janmabhoomi Marg, opp. Siddharth college, Kala Ghoda, Fort",
    "addressLocality": "Mumbai",
    "postalCode": "400001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.9334801,
    "longitude": 72.833117
  },
  "areaServed": ["Mumbai", "Navi Mumbai", "Thane", "India"],
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
      <GuidesOverviewSection />
      <BuybackCTASection />
      <TestimonialsSection />
    </>
  );
}

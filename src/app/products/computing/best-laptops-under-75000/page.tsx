import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.lalanicomputers.com/products/computing/best-laptops-under-75000' },
  title: 'Best Laptops Under ₹75,000 in India | Lalani Computers',
  description: 'Discover premium enterprise laptops under ₹75,000. We compare the Dell DC15250 i5, Lenovo IdeaPad Slim 3 i5, and HP 15 i5 for maximum performance.',
  openGraph: {
    title: 'Best Laptops Under ₹75,000 in India | Lalani Computers',
    description: 'Discover premium enterprise laptops under ₹75,000. We compare the Dell DC15250 i5, Lenovo IdeaPad Slim 3 i5, and HP 15 i5 for maximum performance.',
    url: 'https://www.lalanicomputers.com/products/computing/best-laptops-under-75000',
    siteName: 'Lalani Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Laptops Under ₹75,000 in India | Lalani Computers',
    description: 'Discover premium enterprise laptops under ₹75,000. We compare the Dell DC15250 i5, Lenovo IdeaPad Slim 3 i5, and HP 15 i5 for maximum performance.',
  },
};

export default function BestLaptopsUnder75kPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Laptops Under ₹75,000: Premium Performance",
    "description": metadata.description,
    "image": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "author": {
      "@type": "Organization",
      "name": "Lalani Computers IT Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lalani Computers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lalanicomputers.com/icon.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-4 flex flex-wrap items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <Link href="/products/computing" className="hover:text-primary transition-colors">Computing</Link>
          <span>/</span>
          <span className="text-primary truncate max-w-[200px] md:max-w-none">Best Laptops Under 75,000</span>
        </div>
      </div>

      <article className="pb-16 pt-8 md:pt-12">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-md">
                  Premium Guide
                </span>
              </div>
              <Typography variant="h1" className="mb-6 leading-tight text-3xl md:text-4xl lg:text-5xl">
                Best Laptops Under ₹75,000: Premium Performance
              </Typography>
              <Typography variant="lead" className="text-text-dark/80 text-xl">
                At ₹75,000, you are buying into premium enterprise territory. These laptops offer aluminum chassis, color-accurate displays, and top-tier Intel Core i5 processors. These are built for executives, creatives, and power users.
              </Typography>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="max-w-5xl mx-auto px-4 md:px-6 mb-12">
            <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-3xl overflow-hidden shadow-xl border border-primary/10">
              <Image 
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Premium corporate laptops under 75000"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn delay={0.2}>
            <div className="prose prose-lg prose-headings:text-text-dark prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-primary prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-text-dark/80 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-text-dark prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2 prose-li:text-text-dark/80 max-w-none">
              
              <h2>1. Dell DC15250 (Core i5)</h2>
              <p>The upgraded <strong>Dell DC15250 i5</strong> variant brings Intel's latest generation processing power. It features incredible thermal management, meaning it stays cool even during heavy video rendering or massive data compilations. Dell's ProSupport warranty options make this a safe bet for enterprise users.</p>

              <h2>2. Lenovo IdeaPad Slim 3 (Core i5)</h2>
              <p>If portability is your main concern, the <strong>Lenovo IdeaPad Slim 3 i5</strong> is incredibly thin and light. It slips easily into a briefcase but packs a massive punch. The rapid-charge battery and crisp FHD display make it the ultimate companion for frequent business travelers.</p>

              <h2>3. HP 15 (Core i5)</h2>
              <p>The <strong>HP 15 i5</strong> strikes a perfect balance between performance and aesthetics. It features a micro-edge display for an immersive viewing experience and HP's Fast Charge technology. The keyboard is highly tactile, making it a favorite among writers and coders.</p>

              <h2>Ready for an Executive Upgrade?</h2>
              <p>Don't just buy a laptop—invest in your productivity. Contact Lalani Computers via WhatsApp to get the lowest B2B pricing on these premium models.</p>
              
            </div>
            
            <div className="mt-12 p-8 bg-warm-bg1 border border-primary/10 rounded-2xl flex flex-col items-center text-center">
              <Typography variant="h3" className="mb-3">Upgrade Your Executive Fleet</Typography>
              <p className="text-text-dark/80 mb-6 max-w-lg">
                Equip your management team with the best. Lalani Computers provides premium hardware with dedicated corporate AMCs.
              </p>
              <a 
                href={`https://wa.me/919323332850?text=${encodeURIComponent(`Hi, I am interested in premium corporate laptops under 75,000.`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20b858] border-none shadow-lg shadow-[#25D366]/20">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Request Premium Quote
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </article>
    </>
  );
}

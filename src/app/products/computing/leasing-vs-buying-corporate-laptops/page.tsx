import React from "react";
import { Metadata } from "next";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, XCircle } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.lalanicomputers.com/products/computing/leasing-vs-buying-corporate-laptops' },
  title: 'Leasing vs Buying Corporate Laptops | Lalani Computers',
  description: 'Should your business buy corporate laptops outright or lease them? We break down TCO, tax benefits, and maintenance factors for Indian enterprises.',
  openGraph: {
    title: 'Leasing vs Buying Corporate Laptops | Lalani Computers',
    description: 'Should your business buy corporate laptops outright or lease them? We break down TCO, tax benefits, and maintenance factors for Indian enterprises.',
    url: 'https://www.lalanicomputers.com/products/computing/leasing-vs-buying-corporate-laptops',
    siteName: 'Lalani Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leasing vs Buying Corporate Laptops | Lalani Computers',
    description: 'Should your business buy corporate laptops outright or lease them? We break down TCO, tax benefits, and maintenance factors for Indian enterprises.',
  },
};

export default function LeasingVsBuyingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": metadata.title,
    "description": metadata.description,
    "author": {
      "@type": "Organization",
      "name": "Lalani Computers"
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
          <span className="text-primary truncate max-w-[200px] md:max-w-none">Leasing vs Buying</span>
        </div>
      </div>

      <article className="pb-16 pt-8 md:pt-12">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-md">
                  B2B Guide
                </span>
              </div>
              <Typography variant="h1" className="mb-6 leading-tight text-3xl md:text-4xl lg:text-5xl">
                Leasing vs. Buying Corporate Laptops in India: A 2026 Cost Comparison
              </Typography>
              <Typography variant="lead" className="text-text-dark/80 text-xl">
                When deploying a fleet of laptops for a growing workforce, should your business buy outright or lease? We break down the true Total Cost of Ownership (TCO), tax benefits, and maintenance factors so your procurement team can make the most profitable decision.
              </Typography>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="max-w-5xl mx-auto px-4 md:px-6 mb-12">
            <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-3xl overflow-hidden shadow-xl border border-primary/10">
              <Image 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Corporate Finance and Laptop Leasing"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn delay={0.2}>
            <div className="prose prose-lg prose-headings:text-text-dark prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-primary prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-text-dark/80 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-text-dark max-w-none">
              
              <h2>The Financial Impact: Capex vs. Opex</h2>
              <p>The core difference between buying and leasing comes down to <strong>Capital Expenditure (Capex)</strong> vs. <strong>Operational Expenditure (Opex)</strong>.</p>
              <p>Buying outright requires a massive initial capital outlay (Capex). However, this allows your business to claim depreciation benefits under Indian tax laws. Leasing converts your IT procurement into an operational expense (Opex). The monthly or quarterly payments are often fully tax-deductible as a business expense, preserving your working capital for core growth activities rather than depreciating assets.</p>

              <h2>Comparison Table: Buying vs. Leasing</h2>
              
              <div className="overflow-x-auto my-8 border border-primary/10 rounded-xl shadow-sm">
                <table className="min-w-full divide-y divide-primary/10 text-left">
                  <thead className="bg-warm-bg1">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-text-dark">Feature</th>
                      <th className="px-6 py-4 font-semibold text-text-dark">Buying Outright (Lalani Computers)</th>
                      <th className="px-6 py-4 font-semibold text-text-dark">Leasing Programs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/10 bg-white">
                    <tr>
                      <td className="px-6 py-4 font-medium text-text-dark">Asset Ownership</td>
                      <td className="px-6 py-4 text-text-dark/80"><CheckCircle2 className="inline-block w-4 h-4 text-success mr-2" />100% Ownership (No lease restrictions)</td>
                      <td className="px-6 py-4 text-text-dark/80"><XCircle className="inline-block w-4 h-4 text-error mr-2" />Zero Ownership (Rent forever, return at end)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-text-dark">Long-term Total Cost</td>
                      <td className="px-6 py-4 text-text-dark/80"><CheckCircle2 className="inline-block w-4 h-4 text-success mr-2" />Lower overall cost (No interest or markup)</td>
                      <td className="px-6 py-4 text-text-dark/80"><XCircle className="inline-block w-4 h-4 text-error mr-2" />High interest rates built into monthly rent</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-text-dark">Upfront Cost</td>
                      <td className="px-6 py-4 text-text-dark/80"><XCircle className="inline-block w-4 h-4 text-error mr-2" />One-time capital outlay</td>
                      <td className="px-6 py-4 text-text-dark/80"><CheckCircle2 className="inline-block w-4 h-4 text-success mr-2" />Low upfront payout</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-text-dark">Contract & Commitments</td>
                      <td className="px-6 py-4 text-text-dark/80"><CheckCircle2 className="inline-block w-4 h-4 text-success mr-2" />None (Freedom to resell, upgrade or discard)</td>
                      <td className="px-6 py-4 text-text-dark/80"><XCircle className="inline-block w-4 h-4 text-error mr-2" />Rigid contracts & penalties for early return</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Why Buying Outright from Lalani Computers Wins</h2>
              <p>At Lalani Computers, we do not lock our clients into restrictive, high-interest leasing contracts. Whether you are purchasing a single premium laptop for retail use, or buying in bulk for your enterprise (Capex), we provide unmatched outright purchase pricing. This allows you to claim maximum depreciation benefits while maintaining 100% ownership of your hardware assets.</p>
              <p>When you buy your devices from us, there are no hidden end-of-term return fees. For corporate clients, we handle the heavy lifting: custom OS imaging, precise asset tagging, physical deployment, and comprehensive Annual Maintenance Contracts (AMC) across Mumbai.</p>
              
            </div>
            
            <div className="mt-12 p-8 bg-warm-bg1 border border-primary/10 rounded-2xl flex flex-col items-center text-center">
              <Typography variant="h3" className="mb-3">Looking for a single laptop or a bulk fleet?</Typography>
              <p className="text-text-dark/80 mb-6 max-w-lg">
                Visit our retail store or speak with our enterprise sales team. We supply HP, Dell, Lenovo, and Apple devices with aggressive pricing structures for all buyers.
              </p>
              <a 
                href="https://wa.me/919323332850?text=Hi,%20I%20am%20looking%20for%20bulk%20pricing%20quotes%20for%20corporate%20laptops" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20b858] border-none shadow-lg shadow-[#25D366]/20">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Get Pricing on WhatsApp
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </article>
    </>
  );
}

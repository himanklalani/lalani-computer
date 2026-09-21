import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface GuideSection {
  title: string;
  intro?: string | React.ReactNode;
  bullets?: { title: string; desc: string | React.ReactNode }[];
  conclusion?: string | React.ReactNode;
}

export interface GuideLayoutProps {
  breadcrumbTopic: string;
  title: string;
  description: string;
  introTitle: string;
  introParagraphs: (string | React.ReactNode)[];
  sections: GuideSection[];
  conclusionTitle?: string;
  conclusionParagraphs?: (string | React.ReactNode)[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaWhatsAppMessage: string;
}

export const GuideLayout: React.FC<GuideLayoutProps> = ({
  breadcrumbTopic,
  title,
  description,
  introTitle,
  introParagraphs,
  sections,
  conclusionTitle,
  conclusionParagraphs,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaWhatsAppMessage
}) => {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex flex-wrap items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <span className="text-primary truncate">{breadcrumbTopic}</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12 md:pt-24 md:pb-20 bg-gradient-to-br from-warm-bg1 to-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <FadeIn>
            <Typography variant="eyebrow" className="mb-4">IT Implementation Guide</Typography>
            <Typography variant="h1" className="mb-6 leading-tight">{title}</Typography>
            <Typography variant="lead" className="max-w-3xl mx-auto text-text-dark/80">
              {description}
            </Typography>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <FadeIn>
                <div className="mb-12">
                  <Typography variant="h2" className="mb-6 text-2xl md:text-3xl text-primary">{introTitle}</Typography>
                  {introParagraphs.map((p, idx) => (
                    <Typography key={idx} variant="body" className="mb-4 text-lg text-text-dark/80 leading-relaxed">
                      {p}
                    </Typography>
                  ))}
                </div>
              </FadeIn>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="bg-white border border-primary/10 shadow-sm rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:border-primary/30 hover:shadow-md transition-all">
                      <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 group-hover:bg-primary transition-colors"></div>
                      
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-warm-bg1 text-primary rounded-xl flex items-center justify-center font-heading font-bold text-xl shadow-sm border border-primary/5">
                          {index + 1}
                        </div>
                        <Typography variant="h3" className="text-xl md:text-2xl m-0 text-text-dark">{section.title}</Typography>
                      </div>
                      
                      {section.intro && (
                        <Typography variant="body" className="mb-6 text-text-dark/80 leading-relaxed">
                          {section.intro}
                        </Typography>
                      )}

                      {section.bullets && section.bullets.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                          {section.bullets.map((bullet, bIdx) => (
                            <div key={bIdx} className="flex items-start bg-warm-bg1/40 p-5 rounded-xl border border-primary/5 hover:bg-warm-bg1/80 transition-colors">
                              <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                              <div>
                                <Typography variant="body" className="font-bold text-text-dark mb-1">{bullet.title}</Typography>
                                <Typography variant="small" className="text-text-dark/70 leading-relaxed text-sm">
                                  {bullet.desc}
                                </Typography>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {section.conclusion && (
                        <div className="mt-8 pt-6 border-t border-primary/10">
                          <Typography variant="body" className="text-text-dark/80 italic pl-4 border-l-4 border-primary/30">
                            {section.conclusion}
                          </Typography>
                        </div>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>

              {conclusionTitle && (
                <FadeIn className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <Typography variant="h2" className="mb-4 text-2xl relative z-10">{conclusionTitle}</Typography>
                  {conclusionParagraphs?.map((p, idx) => (
                    <Typography key={idx} variant="body" className="mb-4 text-text-dark/80 relative z-10">
                      {p}
                    </Typography>
                  ))}
                </FadeIn>
              )}
            </div>

            {/* Sticky Sidebar CTA */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-24 bg-white border border-primary/10 shadow-xl rounded-2xl p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/5 border border-primary/10 text-primary rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </div>
                <Typography variant="h3" className="mb-3 text-xl">{ctaTitle}</Typography>
                <Typography variant="small" className="text-text-dark/70 mb-8 leading-relaxed px-2">
                  {ctaDescription}
                </Typography>
                <a 
                  href={`https://wa.me/919323332850?text=${encodeURIComponent(ctaWhatsAppMessage)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button size="lg" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20b858] border-none shadow-xl shadow-[#25D366]/20 py-6 text-base font-bold">
                    {ctaButtonText}
                  </Button>
                </a>
                
                <div className="mt-6 pt-6 border-t border-primary/5 w-full">
                  <div className="flex items-center justify-center gap-2 text-xs text-text-dark/50 font-medium">
                    <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Fast Response Time
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
};

import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { StatCard } from "@/components/ui/StatCard";
import Link from "next/link";
import Image from "next/image";
import { Clock, Users, Zap, Award } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lalani Computers | 30+ Years of Excellence",
  description: "Learn about Lalani Computers, Mumbai's leading IT hardware supplier with over three decades of experience serving corporate India.",
};

export default function AboutPage() {
  const values = [
    { title: "Unwavering Reliability", desc: "When systems fail, businesses stop. We ensure maximum uptime with rapid replacements." },
    { title: "Lightning Speed", desc: "E-commerce is too slow for B2B. Our massive local inventory guarantees same-day turnarounds in Mumbai." },
    { title: "100% Genuine Products", desc: "No grey market parts. Every piece of hardware we sell is authorized and fully warrantied." },
    { title: "Relationship Driven", desc: "We don't just drop boxes. We build 10-year relationships with IT managers and CIOs." },
  ];

  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">About Us</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Our Story</Typography>
            <Typography variant="h1" className="mb-6">30+ Years of IT Hardware Experience</Typography>
            <Typography variant="lead">
              Lalani Computers started with a simple premise: provide corporate India with dependable IT hardware faster than anyone else. Three decades later, we are a cornerstone of Mumbai's enterprise infrastructure.
            </Typography>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <FadeIn delay={0.1} direction="up"><StatCard iconNode={<Clock className="w-10 h-10 text-primary" strokeWidth={1.5} />} label="Years in Business" delay={0.1} /></FadeIn>
            <FadeIn delay={0.2} direction="up"><StatCard iconNode={<Users className="w-10 h-10 text-primary" strokeWidth={1.5} />} label="Enterprise Clients" delay={0.2} /></FadeIn>
            <FadeIn delay={0.3} direction="up"><StatCard iconNode={<Zap className="w-10 h-10 text-primary" strokeWidth={1.5} />} label="Mumbai Dispatch Time" delay={0.3} /></FadeIn>
            <FadeIn delay={0.4} direction="up"><StatCard iconNode={<Award className="w-10 h-10 text-primary" strokeWidth={1.5} />} label="Brand Partnerships" delay={0.4} /></FadeIn>
          </div>
        </div>
      </Section>

      <Section variant="light">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-center mb-16">The Journey</Typography>
          </FadeIn>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-primary/20">
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-beige font-bold shadow-lg md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shrink-0">90s</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-primary/5 transition-transform group-hover:-translate-y-1">
                <Typography variant="h3" className="mb-2 text-primary">The Foundation</Typography>
                <Typography variant="body">Established in Mumbai, focusing on early desktop computing and localized IT hardware distribution.</Typography>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-beige font-bold shadow-lg md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shrink-0">00s</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-primary/5 transition-transform group-hover:-translate-y-1">
                <Typography variant="h3" className="mb-2 text-primary">Corporate Expansion</Typography>
                <Typography variant="body">Transitioned to B2B enterprise procurement, partnering with global OEMs like HP, Dell, and Cisco.</Typography>
              </div>
            </div>
            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-beige font-bold shadow-lg md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shrink-0">10s</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-primary/5 transition-transform group-hover:-translate-y-1">
                <Typography variant="h3" className="mb-2 text-primary">Turnkey Solutions</Typography>
                <Typography variant="body">Expanded beyond box-pushing to offer end-to-end office networking, CCTV, and AMC services.</Typography>
              </div>
            </div>
            {/* Timeline Item 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-beige font-bold shadow-lg md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shrink-0">Now</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-primary/5 transition-transform group-hover:-translate-y-1">
                <Typography variant="h3" className="mb-2 text-primary">Pan-India Operations</Typography>
                <Typography variant="body">Serving leading BFSI and manufacturing clients across India with a massive localized inventory network.</Typography>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-center mb-12">Core Values</Typography>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 bg-warm-bg2 rounded-2xl border-l-4 border-primary">
                  <Typography variant="h3" className="mb-3">{val.title}</Typography>
                  <Typography variant="body" className="opacity-80">{val.desc}</Typography>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="light" className="border-t border-primary/10">
        <FadeIn>
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">Leadership</Typography>
            <Typography variant="lead">The minds driving Lalani Computers forward.</Typography>
          </div>
        </FadeIn>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            {
              name: "Khemchand Lalani",
              role: "Founder",
              image: "https://res.cloudinary.com/dzc0mfs9z/image/upload/v1779284466/dadapic2_r0nade.png",
              // transform: "scale(Size) translate(Right/Left%, Down/Up%)"
              // e.g., translate(-10%, 15%) moves it Left 10% and Down 15%.
              imageStyle: { transform: "scale(1.3) translate(0%, 0%)" },
            },
            {
              name: "Vikrant Lalani",
              role: "Managing Director",
              image: "https://res.cloudinary.com/dzc0mfs9z/image/upload/v1779284465/papapic_zqvnh9.png",
              imageStyle: { transform: "scale(1.4) translate(0%, 5%)" },
            }
          ].map((leader, i) => (
            <FadeIn key={leader.name} delay={i * 0.1} direction="up">
              <div className="text-center group w-64">
                <div className="w-48 h-48 mx-auto bg-white rounded-full overflow-hidden mb-6 relative border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                  <Image src={leader.image} alt={leader.name} fill className="object-contain bg-white" style={leader.imageStyle} />
                </div>
                <Typography variant="h3" className="mb-1">{leader.name}</Typography>
                <Typography variant="small" className="text-primary font-medium uppercase tracking-widest">{leader.role}</Typography>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}

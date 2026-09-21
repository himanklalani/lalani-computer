import React from "react";
import { GuideLayout } from "@/components/ui/GuideLayout";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/solutions/repairs/repair-vs-replace-guide' },
  title: "IT Hardware: Repair vs Replace Guide 2026 | Lalani Computers",
  description: "Learn when you should upgrade your aging corporate laptops and desktop fleets, and when it makes financial sense to procure new machines in Mumbai.",
};

export default function RepairVsReplaceGuide() {
  const sections = [
    {
      title: "1. The 5-Year Rule for IT Hardware",
      intro: "Generally, corporate laptops and desktops have an optimal lifespan of 4 to 5 years. However, this isn't a hard limit.",
      bullets: [
        {
          title: "When to Repair/Upgrade:",
          desc: "If the machine is under 4 years old but feels sluggish, it is almost always more cost-effective to upgrade the RAM and swap the old HDD for a high-speed SSD."
        },
        {
          title: "When to Replace:",
          desc: "If the machine is over 5 years old and the processor itself is bottlenecking modern software (e.g., trying to run 2026 rendering software on a 6th Gen Intel Core processor). Upgrading RAM won't fix a CPU bottleneck."
        }
      ]
    },
    {
      title: "2. Cost vs. Value Analysis",
      intro: "A major factor for corporate IT managers is capital expenditure (CapEx) vs. operational expenditure (OpEx).",
      bullets: [
        {
          title: "The Upgrade Advantage:",
          desc: "A massive fleet upgrade (e.g., adding 16GB RAM and 512GB NVMe SSDs to 50 laptops) costs a fraction of buying 50 new machines, instantly extending fleet life by 2-3 years."
        },
        {
          title: "The Replacement Advantage:",
          desc: "New machines come with fresh 3-year manufacturer warranties, modern security protocols (like TPM 2.0 for Windows 11), and significantly better battery life for hybrid workforces."
        }
      ]
    },
    {
      title: "3. Common Hardware Failures",
      intro: "Not all hardware failures mean the machine is dead. Let's look at common issues:",
      bullets: [
        {
          title: "Motherboard Failure (Dead Laptop):",
          desc: (
            <>
              Often caused by blown MOSFETs, shorted capacitors, or power rail faults. Our chip-level technicians restore circuits via{" "}
              <Link href="/repair/motherboard-component-repair" className="text-primary font-semibold underline underline-offset-2 hover:opacity-80">
                motherboard &amp; micro-soldering repairs
              </Link>{" "}
              with a 30-day service warranty, saving you from a costly replacement.
            </>
          )
        },
        {
          title: "Swollen Batteries & Broken Hinges:",
          desc: (
            <>
              These are standard wear-and-tear items. Replacing a battery or screen hinge is routine and affordable through our{" "}
              <Link href="/repair/laptop-desktop-repairs" className="text-primary font-semibold underline underline-offset-2 hover:opacity-80">
                laptop &amp; desktop repair services
              </Link>{" "}
              with convenient doorstep pickup across Mumbai.
            </>
          )
        },
        {
          title: "Liquid Spills & Unfixable Damage:",
          desc: (
            <>
              If water or coffee is spilled on a laptop, immediately disconnect the power and schedule a doorstep collection. If liquid ingress has permanently corroded multi-layer circuitry, trade it in via our{" "}
              <Link href="/buyback/corporate-it-fleets" className="text-primary font-semibold underline underline-offset-2 hover:opacity-80">
                corporate IT fleet buyback program
              </Link>{" "}
              for salvage credit and immediate RTGS settlement.
            </>
          )
        }
      ]
    },
    {
      title: "4. The Security Factor",
      intro: "For enterprise clients in Mumbai, security dictates hardware lifecycles.",
      bullets: [
        {
          title: "Data Destruction vs. Data Migration:",
          desc: (
            <>
              When decommissioning aging machines, Lalani Computers provides tamper-proof NIST 800-88 compliant data wiping with itemized serial audit logs as part of our{" "}
              <Link href="/buyback" className="text-primary font-semibold underline underline-offset-2 hover:opacity-80">
                corporate IT asset buyback process
              </Link>.
            </>
          )
        },
        {
          title: "TPM 2.0 and Windows 11:",
          desc: "Many older machines do not support Windows 11 natively due to missing TPM 2.0 chips. If your corporate compliance requires Windows 11, you may be forced to replace the hardware."
        }
      ]
    }
  ];

  return (
    <GuideLayout
      breadcrumbTopic="Repair vs Replace Guide"
      title="IT Hardware: Repair vs. Replace Guide 2026"
      description="A definitive guide for individuals and IT managers on when to repair existing IT infrastructure and when to invest in new hardware procurement."
      introTitle="Making the Right IT Investment Decision"
      introParagraphs={[
        "One of the most common questions our Mumbai hardware engineering team receives is: 'Is this worth fixing, or should I just buy a new one?'",
        "Whether you are an individual with a broken laptop or a corporate IT manager looking at a fleet of sluggish workstations, making the wrong choice can cost you significant time and money.",
        "In this guide, the experienced hardware engineers at Lalani Computers break down exactly how to evaluate your aging IT infrastructure and make a financially sound decision."
      ]}
      sections={sections}
      conclusionTitle="Final Verdict"
      conclusionParagraphs={[
        "Before making a massive capital investment in new hardware, always get a diagnostic check on your existing fleet.",
        "A simple SSD upgrade or RAM expansion can often make a 4-year-old laptop perform faster than a brand new entry-level machine.",
        (
          <span key="conclusion-bridge">
            At Lalani Computers, we offer both enterprise-grade{" "}
            <Link href="/repair" className="text-primary font-semibold underline underline-offset-2 hover:opacity-80">
              hardware repair services
            </Link>{" "}
            (with doorstep pickup across Mumbai MMR) and{" "}
            <Link href="/buyback" className="text-primary font-semibold underline underline-offset-2 hover:opacity-80">
              corporate IT asset buyback &amp; liquidation
            </Link>
            , ensuring you receive honest, unbiased advice tailored to your budget.
          </span>
        )
      ]}
      ctaTitle="Need an Expert Opinion?"
      ctaDescription="Schedule a doorstep hardware diagnosis in Mumbai or book an on-site corporate fleet assessment. We will tell you honestly if it's worth repairing."
      ctaButtonText="Book Doorstep Diagnostic"
      ctaWhatsAppMessage="Hi, I would like to get a diagnostic assessment for my IT hardware to see if it should be repaired or replaced."
    />
  );
}

import React from "react";
import { GuideLayout } from "@/components/ui/GuideLayout";
import { Metadata } from "next";

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
          desc: "Often caused by short circuits. Our chip-level engineers can often repair the motherboard for a small fee, saving you from a costly replacement."
        },
        {
          title: "Swollen Batteries & Broken Hinges:",
          desc: "These are standard wear-and-tear items. Replacing a battery or screen hinge is extremely affordable and should not be a reason to throw away a good laptop."
        },
        {
          title: "Liquid Spills:",
          desc: "If water or coffee is spilled on a laptop, immediately turn it off and bring it to a repair center. If the motherboard is severely corroded, replacement of the machine might be the only option."
        }
      ]
    },
    {
      title: "4. The Security Factor",
      intro: "For enterprise clients in Mumbai, security dictates hardware lifecycles.",
      bullets: [
        {
          title: "Data Destruction vs. Data Migration:",
          desc: "If you replace machines, what happens to the old data? Lalani Computers provides secure data wiping and migration services to ensure compliance."
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
        "A simple ₹3,000 SSD upgrade can often make a 4-year-old laptop perform faster than a brand new entry-level machine.",
        "At Lalani Computers, we offer both enterprise-grade repair services and bulk hardware procurement, ensuring you get unbiased advice on what's best for your budget."
      ]}
      ctaTitle="Need an Expert Opinion?"
      ctaDescription="Schedule a doorstep hardware diagnosis in Mumbai or book an on-site corporate fleet assessment. We will tell you honestly if it's worth repairing."
      ctaButtonText="Book Doorstep Diagnostic"
      ctaWhatsAppMessage="Hi, I would like to get a diagnostic assessment for my IT hardware to see if it should be repaired or replaced."
    />
  );
}

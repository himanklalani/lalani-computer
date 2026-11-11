import React from "react";
import { Metadata } from "next";
import { GuideLayout } from "@/components/ui/GuideLayout";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.lalanicomputers.com/solutions/amc-support/amc-checklist' },
  title: 'Definitive AMC Checklist for 2026 | Lalani Computers',
  description: 'What to look for in a corporate IT Annual Maintenance Contract (AMC) to ensure zero downtime.',
  openGraph: {
    title: 'Definitive AMC Checklist for 2026 | Lalani Computers',
    description: 'What to look for in a corporate IT Annual Maintenance Contract (AMC) to ensure zero downtime.',
    url: 'https://www.lalanicomputers.com/solutions/amc-support/amc-checklist',
    siteName: 'Lalani Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Definitive AMC Checklist for 2026 | Lalani Computers',
    description: 'What to look for in a corporate IT Annual Maintenance Contract (AMC) to ensure zero downtime.',
  },
};

export default function GuidePage() {
  return (
    <GuideLayout
      breadcrumbTopic="AMC Checklist"
      title="Definitive AMC Checklist for 2026"
      description="Stop paying for IT support that only fixes things *after* they break. Here is what a modern, proactive Annual Maintenance Contract (AMC) should look like."
      introTitle="The Problem with 'Break-Fix' IT"
      introParagraphs={[
        "For decades, the standard IT support model has been 'break-fix.' You wait until a server crashes, a network goes down, or a laptop dies, and then you call a technician. By the time the engineer arrives, your team has already lost hours of productivity, and you are bleeding money.",
        "A true corporate AMC in 2026 is about proactive prevention, not just reactive repairs."
      ]}
      sections={[
        {
          title: "Proactive Health Monitoring",
          intro: "Your AMC provider shouldn't be blind to your network health.",
          bullets: [
            {
              title: "Remote Monitoring & Management (RMM)",
              desc: "The contract must include software agents installed on your servers and endpoints. These agents detect failing hard drives, overheating CPUs, and out-of-date antivirus definitions before the user even notices a problem."
            },
            {
              title: "Automated Patching",
              desc: "Cyber threats evolve daily. Your AMC must cover automated, scheduled deployment of OS updates and security patches across your entire fleet to close vulnerabilities."
            }
          ]
        },
        {
          title: "SLA-Backed Response Times",
          intro: "'We'll send someone over soon' is not an acceptable business response.",
          bullets: [
            {
              title: "Guaranteed Turnaround",
              desc: "Look for strict Service Level Agreements (SLAs). For critical server down scenarios, you need guaranteed 2-hour or 4-hour on-site response times."
            },
            {
              title: "Dedicated Account Managers",
              desc: "You shouldn't have to explain your network topology to a new junior technician every time you call. You need a dedicated technical manager who understands your exact infrastructure history."
            }
          ]
        },
        {
          title: "Comprehensive Hardware Coverage",
          intro: "Read the fine print. Many cheap AMCs cover 'service only,' meaning you still pay full retail price for replacement parts.",
          bullets: [
            {
              title: "Comprehensive AMCs",
              desc: "Opt for a contract that covers both service and replacement parts for major components like motherboards, power supplies, and RAM."
            },
            {
              title: "Standby Equipment",
              desc: "If a critical firewall or switch dies and needs to be sent to the OEM for warranty repair (which can take weeks), your AMC provider must supply a temporary standby unit to keep your office online."
            }
          ]
        }
      ]}
      conclusionTitle="Shift from Reactive to Proactive"
      conclusionParagraphs={[
        "IT shouldn't be a source of stress. The right AMC acts as an invisible safety net, ensuring your technology works so seamlessly that you forget it's even there."
      ]}
      ctaTitle="Upgrade Your IT Support"
      ctaDescription="Tired of waiting hours for IT help? Share your team size and hardware count, and we'll provide a transparent AMC proposal today."
      ctaButtonText="Request an AMC Quote"
      ctaWhatsAppMessage="Hi Lalani Computers, I'm interested in an AMC for our office. Can we discuss a quote?"
    />
  );
}

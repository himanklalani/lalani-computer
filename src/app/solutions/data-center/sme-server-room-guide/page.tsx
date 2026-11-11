import React from "react";
import { Metadata } from "next";
import { GuideLayout } from "@/components/ui/GuideLayout";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.lalanicomputers.com/solutions/data-center/sme-server-room-guide' },
  title: 'How to Build an SME Server Room | Lalani Computers',
  description: 'Expert advice on building secure, scalable server rooms with proper cooling and power management for SMEs.',
  openGraph: {
    title: 'How to Build an SME Server Room | Lalani Computers',
    description: 'Expert advice on building secure, scalable server rooms with proper cooling and power management for SMEs.',
    url: 'https://www.lalanicomputers.com/solutions/data-center/sme-server-room-guide',
    siteName: 'Lalani Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Build an SME Server Room | Lalani Computers',
    description: 'Expert advice on building secure, scalable server rooms with proper cooling and power management for SMEs.',
  },
};

export default function GuidePage() {
  return (
    <GuideLayout
      breadcrumbTopic="Server Room Guide"
      title="How to Build a Modern Server Room"
      description="A server room is the beating heart of your business. If it overheats or loses power, everything stops. Here is how to build it right."
      introTitle="The 'Closet Server' Mistake"
      introParagraphs={[
        "Too many SMEs stuff their critical corporate servers into an unventilated storage closet. This is a ticking time bomb. High temperatures drastically reduce the lifespan of expensive hard drives, and a single power surge can wipe out months of data.",
        "Building a professional server room doesn't require massive square footage, but it does require smart engineering."
      ]}
      sections={[
        {
          title: "Power & Redundancy",
          intro: "A server room must have 'clean' and continuous power.",
          bullets: [
            {
              title: "Double Conversion UPS",
              desc: "Don't use standard offline UPS systems. An online double-conversion UPS (like APC or Vertiv) provides zero transfer time during a power cut, ensuring servers don't abruptly reboot."
            },
            {
              title: "Smart PDUs",
              desc: "Power Distribution Units inside your rack should be network-connected. This allows you to remotely monitor power draw and hard-reboot frozen equipment from anywhere in the world."
            }
          ]
        },
        {
          title: "Precision Cooling (PAC)",
          intro: "Comfort cooling (standard office ACs) is designed for people, not machines. It drops the temperature but also removes too much moisture, causing static electricity that fries motherboards.",
          bullets: [
            {
              title: "Hot/Cold Aisle Containment",
              desc: "Even in a small room, orient your racks so that cold air enters the front of the servers and hot exhaust is pushed directly to an AC return."
            },
            {
              title: "24/7 Redundancy",
              desc: "Always have two AC units configured in a lead-lag sequence. If one fails at 3 AM on a Sunday, the other instantly takes over."
            }
          ]
        },
        {
          title: "Environmental Monitoring",
          intro: "If the AC fails, a server room can reach critical temperatures in under 15 minutes.",
          bullets: [
            {
              title: "Network Sensors",
              desc: "Install network-attached environmental sensors that measure temperature, humidity, and water leaks."
            },
            {
              title: "Instant Alerts",
              desc: "Configure these sensors to instantly trigger SMS or WhatsApp alerts to your IT team before the servers automatically shut down from thermal overload."
            }
          ]
        }
      ]}
      conclusionTitle="Don't Risk Your Infrastructure"
      conclusionParagraphs={[
        "Your data center shouldn't keep you awake at night. With the right architecture, you can achieve 99.99% uptime and total peace of mind."
      ]}
      ctaTitle="Upgrade Your Server Room Today"
      ctaDescription="Stop worrying about thermal shutdowns and messy cabling. Let our architects audit your current setup and provide a modernization plan."
      ctaButtonText="Book a Free Site Survey"
      ctaWhatsAppMessage="Hi Lalani Computers, I want to upgrade/build our server room. Can we schedule an audit?"
    />
  );
}

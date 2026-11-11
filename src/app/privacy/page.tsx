import { Metadata } from "next";
import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.lalanicomputers.com/privacy' },
  title: 'Privacy Policy | Lalani Computers',
  description: 'Read the privacy policy of Lalani Computers. Learn how we collect, use, and protect your data in our corporate IT services.',
  openGraph: {
    title: 'Privacy Policy | Lalani Computers',
    description: 'Read the privacy policy of Lalani Computers. Learn how we collect, use, and protect your data in our corporate IT services.',
    url: 'https://www.lalanicomputers.com/privacy',
    siteName: 'Lalani Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Lalani Computers',
    description: 'Read the privacy policy of Lalani Computers. Learn how we collect, use, and protect your data in our corporate IT services.',
  },
};

export default function PrivacyPage() {
  return (
    <Section variant="white" className="py-24">
      <div className="max-w-3xl mx-auto">
        <Typography variant="h1" className="mb-8">Privacy Policy</Typography>
        <div className="prose prose-lg text-text-dark/70">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          <p className="text-lg mb-6">
            At Lalani Computers, we are committed to protecting the privacy and security of our enterprise clients. This policy outlines our data handling practices for our corporate IT procurement and infrastructure services.
          </p>
          {/* <!-- TODO: Human Copywriting - Expand on GDPR/DPDP Act compliance if applicable --> */}
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide via contact forms, including name, email, and phone number.</p>
          <h2>2. How We Use Your Information</h2>
          <p>Your information is used strictly to respond to inquiries and provide IT services.</p>
          <h2>3. Cookies</h2>
          <p>We use cookies for analytics and marketing, which you can manage via your Cookie Preferences in the footer.</p>
        </div>
      </div>
    </Section>
  );
}

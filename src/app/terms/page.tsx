import { Metadata } from "next";
import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.lalanicomputers.com/terms' },
  title: 'Terms of Service | Lalani Computers',
  description: 'Terms of Service for Lalani Computers. Review the terms governing our enterprise IT procurement and infrastructure solutions.',
  openGraph: {
    title: 'Terms of Service | Lalani Computers',
    description: 'Terms of Service for Lalani Computers. Review the terms governing our enterprise IT procurement and infrastructure solutions.',
    url: 'https://www.lalanicomputers.com/terms',
    siteName: 'Lalani Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Lalani Computers',
    description: 'Terms of Service for Lalani Computers. Review the terms governing our enterprise IT procurement and infrastructure solutions.',
  },
};

export default function TermsPage() {
  return (
    <Section variant="white" className="py-24">
      <div className="max-w-3xl mx-auto">
        <Typography variant="h1" className="mb-8">Terms of Service</Typography>
        <div className="prose prose-lg text-text-dark/70">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          <p className="text-lg mb-6">
            Welcome to Lalani Computers. These terms of service outline the rules and regulations for the use of our corporate IT hardware procurement and infrastructure deployment services. By accessing this website and engaging our services, we assume you accept these terms in full.
          </p>
          {/* <!-- TODO: Human Copywriting - Expand on B2B return policies, AMC SLAs, and payment terms --> */}
          <h2>1. Introduction</h2>
          <p>Welcome to Lalani Computers. By using our website and services, you agree to these terms.</p>
          <h2>2. Services</h2>
          <p>We provide enterprise IT hardware, turnkey office setups, and AMC services.</p>
          <h2>3. Liability</h2>
          <p>Lalani Computers is not liable for indirect damages or data loss resulting from hardware failure.</p>
          {/* Add actual legal terms here */}
        </div>
      </div>
    </Section>
  );
}

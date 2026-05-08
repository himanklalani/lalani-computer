import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Lalani Computers.",
};

export default function TermsPage() {
  return (
    <Section variant="white" className="py-24">
      <div className="max-w-3xl mx-auto">
        <Typography variant="h1" className="mb-8">Terms of Service</Typography>
        <div className="prose prose-lg text-text-dark/70">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
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

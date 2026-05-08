import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Lalani Computers.",
};

export default function PrivacyPage() {
  return (
    <Section variant="white" className="py-24">
      <div className="max-w-3xl mx-auto">
        <Typography variant="h1" className="mb-8">Privacy Policy</Typography>
        <div className="prose prose-lg text-text-dark/70">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
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

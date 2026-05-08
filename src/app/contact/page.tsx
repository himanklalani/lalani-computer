"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from "lucide-react";

import { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Lalani Computers",
  "description": "Get in touch for custom IT hardware quotes.",
  "url": "https://lalanicomputers.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919323332850",
      "contactType": "sales",
      "email": "lalanics@yahoo.co.in"
    }
  }
};

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError(result.error || "Failed to send message.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section variant="light" className="pt-24 lg:pt-32 pb-12 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Contact Us</Typography>
            <Typography variant="h1" className="mb-6">Tell Us What You Need</Typography>
            <Typography variant="lead">
              Our experts are ready to assist you with everything from a single laptop replacement to a comprehensive enterprise IT infrastructure.
            </Typography>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Form Column */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <FadeIn delay={0.2}>
              <div className="bg-warm-bg1 p-6 md:p-10 rounded-3xl border border-primary/10 shadow-lg" id="quote">
                <Typography variant="h3" className="mb-8 text-primary">Request a Custom Quote</Typography>
                
                {success && (
                  <div role="alert" className="mb-6 p-4 bg-success/10 text-success rounded-lg flex items-start gap-3 border border-success/20">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm opacity-90">Our team will get back to you shortly.</p>
                    </div>
                  </div>
                )}

                {error && (
                  <div role="alert" className="mb-6 p-4 bg-error/10 text-error rounded-lg flex items-start gap-3 border border-error/20">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="font-medium">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-text-dark/80">Full Name *</label>
                      <input required id="name" name="name" type="text" maxLength={100} className="w-full h-12 px-4 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-text-dark/80">Company (Optional)</label>
                      <input id="company" name="company" type="text" maxLength={100} className="w-full h-12 px-4 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" placeholder="Acme Corp" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-text-dark/80">Email Address *</label>
                      <input required id="email" name="email" type="email" maxLength={150} className="w-full h-12 px-4 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-text-dark/80">Phone Number *</label>
                      <input required id="phone" name="phone" type="tel" inputMode="tel" maxLength={20} className="w-full h-12 px-4 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="city" className="text-sm font-medium text-text-dark/80">City *</label>
                      <input required id="city" name="city" type="text" defaultValue="Mumbai" maxLength={100} className="w-full h-12 px-4 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="requirementType" className="text-sm font-medium text-text-dark/80">Requirement Type</label>
                      <select id="requirementType" name="requirementType" className="w-full h-12 px-4 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white appearance-none cursor-pointer">
                        <option>New Purchase</option>
                        <option>Bulk Corporate Order</option>
                        <option>AMC / IT Support</option>
                        <option>Turnkey Setup</option>
                        <option>Rental</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium text-text-dark/80">How soon do you need this?</label>
                    <select id="timeline" name="timeline" className="w-full h-12 px-4 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white appearance-none cursor-pointer">
                      <option>Immediately (Under 24 hours)</option>
                      <option>Within 2–3 days</option>
                      <option>Within a week</option>
                      <option>Just exploring</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-text-dark/80">Details (Optional)</label>
                    <textarea id="message" name="message" rows={4} maxLength={2000} className="w-full p-4 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none" placeholder="Tell us about models, specifications, or specific brands you prefer..."></textarea>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full transition-transform hover:scale-[1.02]" isLoading={loading}>
                    Send Request
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Info Column */}
          <div className="flex-1 w-full order-1 lg:order-2">
            <FadeIn delay={0.4} direction="left">
              <div className="space-y-10">
                <div>
                  <Typography variant="h2" className="mb-6">Get in Touch</Typography>
                  <Typography variant="body" className="opacity-80">
                    Need immediate assistance? Reach out to us via phone or visit our Mumbai headquarters.
                  </Typography>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <Typography variant="h3" className="text-lg mb-1">Headquarters</Typography>
                      <a 
                        href="https://maps.app.goo.gl/gfr5SrUZUbKmEZQ2A" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-text-dark/80 hover:text-primary hover:underline transition-all block"
                      >
                        59, Janmabhoomi Marg, Janmabhoomi Bhavan,<br />Kala Ghoda, Fort, Mumbai, Maharashtra 400001
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <Typography variant="h3" className="text-lg mb-1">Phone / WhatsApp</Typography>
                      <a 
                        href="tel:+919323332850" 
                        className="text-text-dark/80 hover:text-primary hover:underline transition-all block"
                      >
                        +91 93233 32850
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <Typography variant="h3" className="text-lg mb-1">Email</Typography>
                      <a 
                        href="mailto:lalanics@yahoo.co.in" 
                        className="text-text-dark/80 hover:text-primary hover:underline transition-all block"
                      >
                        lalanics@yahoo.co.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <Typography variant="h3" className="text-lg mb-1">Business Hours</Typography>
                      <Typography variant="body" className="opacity-80">
                        Mon - Sat: 10:00 AM - 7:00 PM<br />Sunday: Closed
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="w-full h-80 bg-warm-bg2 rounded-2xl overflow-hidden border border-primary/10 relative shadow-inner">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.872052!2d72.833117!3d18.9334801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1dc9af3db65%3A0x2909c144ebb53b75!2zNTksIEphbm1hYmhvb21pIE1hcmcsIEthbGEgR2hvZGEsIEZvcnQsIE11bWJhaSwgTWFoYXJhc2h0cmEgNDAwMDAx!5e0!3m2!1sen!2sin!4v1715077067000" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lalani Computers Office Location"
                  ></iframe>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}

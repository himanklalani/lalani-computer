import React from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" variant="light" className="overflow-hidden">
      <SectionHeader
        title="What Our Clients Say"
        eyebrow="Google Reviews"
        subtitle="Don't just take our word for it. Here is what our clients and customers have to say about our service."
      />
      <div className="mt-8 -mx-4 md:mx-0">
        <StaggerTestimonials />
      </div>
    </Section>
  );
}

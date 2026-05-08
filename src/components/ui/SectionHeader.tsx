import React from "react";
import { Typography } from "./Typography";

interface SectionHeaderProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, eyebrow, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {eyebrow && <Typography variant="eyebrow">{eyebrow}</Typography>}
      <Typography variant="h2" className="mb-4">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="lead">
          {subtitle}
        </Typography>
      )}
    </div>
  );
}

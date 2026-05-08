import React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant = "h1" | "h2" | "h3" | "lead" | "body" | "small" | "eyebrow";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
}

export function Typography({ variant = "body", as, className = "", children, ...props }: TypographyProps) {
  const Component = as || defaultElement(variant);

  const baseStyles = {
    h1: "font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight",
    h2: "font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary leading-snug",
    h3: "font-heading text-xl md:text-2xl font-semibold text-text-dark",
    lead: "text-lg md:text-xl text-text-dark/80",
    body: "text-base text-text-dark leading-relaxed",
    small: "text-sm text-text-dark/70",
    eyebrow: "font-heading text-sm font-bold tracking-widest uppercase text-primary mb-2 block",
  };

  return (
    <Component className={cn(baseStyles[variant], className)} {...props}>
      {children}
    </Component>
  );
}

function defaultElement(variant: TypographyVariant): React.ElementType {
  switch (variant) {
    case "h1": return "h1";
    case "h2": return "h2";
    case "h3": return "h3";
    case "lead": return "p";
    case "body": return "p";
    case "small": return "small";
    case "eyebrow": return "span";
    default: return "p";
  }
}

import React from "react";

type SectionVariant = "light" | "dark" | "white";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: SectionVariant;
  fullBleed?: boolean;
}

export function Section({ variant = "light", fullBleed = false, className = "", children, ...props }: SectionProps) {
  const baseStyles = "py-16 md:py-24";
  
  const variants = {
    light: "bg-warm-bg1",
    dark: "bg-card-dark text-beige",
    white: "bg-white",
  };

  return (
    <section className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <div className={fullBleed ? "w-full" : "max-w-6xl mx-auto px-4 md:px-6"}>
        {children}
      </div>
    </section>
  );
}

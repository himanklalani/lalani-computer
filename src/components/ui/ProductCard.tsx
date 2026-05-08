import React from "react";
import { Typography } from "./Typography";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export function ProductCard({ title, description, href, icon }: ProductCardProps) {
  return (
    <div className="group bg-card-dark text-beige rounded-2xl p-6 sm:p-8 flex flex-col h-full border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
      {/* Decorative background glow on hover */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none"></div>
      
      {icon && (
        <div className="mb-6 text-primary w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/10">
          {icon}
        </div>
      )}
      <Typography variant="h3" className="!text-white mb-3 transition-colors">
        {title}
      </Typography>
      <Typography variant="body" className="!text-beige/80 mb-6 flex-grow">
        {description}
      </Typography>
      <div className="mt-auto pt-4 border-t border-white/10 relative z-10">
        <a href={href} className="inline-flex items-center text-white font-medium group-hover:text-beige">
          View details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

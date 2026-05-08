import React from "react";
import Image from "next/image";

interface LogoPillProps {
  name: string;
  src?: string;
}

export function LogoPill({ name, src }: LogoPillProps) {
  return (
    <div className="bg-white rounded-full px-8 py-4 shadow-sm border border-primary/10 flex items-center justify-center min-w-[160px] md:min-w-[180px] h-[70px] md:h-[80px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {src ? (
        <Image src={src} alt={`${name} logo`} width={120} height={45} className="object-contain" />
      ) : (
        <span className="font-heading font-bold text-primary text-base md:text-lg tracking-wide">{name}</span>
      )}
    </div>
  );
}

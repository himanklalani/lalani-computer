"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

export const testimonials = [
  { tempId: 14, testimonial: "I wanted to buy a laptop for work & was unsure of specs. Mr. Vikrant suggested a better model that saved me money. They are genuine and even suggest checking prices elsewhere. Best quote & complimentary accessories! Highly recommend.", by: "Vishwa Patel", rating: 5 },
  { tempId: 0, testimonial: "Very nice service, staff is really good and supportive. I bought laptop charger from this shop they delivered it at my place. Nice service", by: "Akanksh Bodakhe", rating: 5 },
  { tempId: 1, testimonial: "Been taking Computers & Services from them for more than 15 years now. Best in class.", by: "Pinakci Kathotia", rating: 5 },
  { tempId: 2, testimonial: "Very Prompt service... Mr. Vikrant Lalani always provides genuine peripherals with competitive prices.", by: "Parag Shah", rating: 5 },
  { tempId: 3, testimonial: "Best in Class Solution with affordable options meeting all our requirements.", by: "Ajay Khubchandani", rating: 5 },
  { tempId: 4, testimonial: "Great help in buying laptop, printer, or any computer needs.", by: "Shraddha Agarwal", rating: 5 },
  { tempId: 5, testimonial: "Found rarely available items", by: "Khush Jain", rating: 5 },
  { tempId: 6, testimonial: "Guarantee for genuine products.", by: "Ravishankar Nadar", rating: 5 },
  { tempId: 7, testimonial: "Small place but ok", by: "Darshan Maurya", rating: 4 },
  { tempId: 8, testimonial: "Great service!", by: "Khushbu Patekar", rating: 5 },
  { tempId: 9, testimonial: "Best service! 😀", by: "Dev", rating: 5 },
  { tempId: 10, testimonial: "Excellent service", by: "Aditi Jain", rating: 5 },
  { tempId: 11, testimonial: "Best products", by: "Shaurya Khandpur", rating: 5 },
  { tempId: 12, testimonial: "Best in city", by: "Salu Rocks", rating: 5 },
  { tempId: 13, testimonial: "Mr. Vikrant Lalani is a nice person.", by: "Puneet Lalani", rating: 5 }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardWidth: number;
  cardHeight: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardWidth,
  cardHeight 
}) => {
  const isCenter = position === 0;
  const firstLetter = testimonial.by.charAt(0).toUpperCase();
  const cutSize = cardWidth < 350 ? 30 : 50;
  const sqrtHypotenuse = Math.sqrt(2 * cutSize * cutSize);

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-5 sm:p-6 transition-all duration-500 ease-in-out flex flex-col justify-between will-change-transform",
        isCenter 
          ? "z-10 bg-primary text-beige border-primary" 
          : "z-0 bg-white text-text-dark border-primary/10 hover:border-primary/30"
      )}
      style={{
        width: cardWidth,
        height: cardHeight,
        clipPath: `polygon(${cutSize}px 0%, calc(100% - ${cutSize}px) 0%, 100% ${cutSize}px, 100% 100%, calc(100% - ${cutSize}px) 100%, ${cutSize}px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardWidth / 1.5) * position}px)
          translateY(${isCenter ? -55 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(25, 37, 170, 0.2)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-primary-dark" : "bg-primary/10"
        )}
        style={{
          right: -2,
          top: cutSize - 2,
          width: sqrtHypotenuse,
          height: 2
        }}
      />
      
      <div>
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          {/* Avatar */}
          <div 
            className={cn(
              "flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full font-bold text-lg sm:text-xl",
              isCenter ? "bg-white text-primary" : "bg-primary/10 text-primary"
            )}
            style={{ boxShadow: isCenter ? "3px 3px 0px rgba(255,255,255,0.2)" : "3px 3px 0px rgba(25, 37, 170, 0.1)" }}
          >
            {firstLetter}
          </div>
          
          {/* Stars */}
          <div className="flex gap-0.5 sm:gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={cn(
                  "w-3.5 h-3.5 sm:w-4 sm:h-4", 
                  i < testimonial.rating 
                    ? (isCenter ? "fill-beige text-beige" : "fill-[#F59E0B] text-[#F59E0B]") 
                    : (isCenter ? "fill-transparent text-beige/30" : "fill-transparent text-gray-300")
                )} 
              />
            ))}
          </div>
        </div>
        
        <h3 className={cn(
          "text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed font-sans line-clamp-[8] sm:line-clamp-none",
          isCenter ? "text-white" : "text-text-dark"
        )}>
          "{testimonial.testimonial}"
        </h3>
      </div>

      <div className="mt-4 sm:mt-6">
        <p className={cn(
          "text-xs sm:text-sm font-bold uppercase tracking-wider",
          isCenter ? "text-beige/80" : "text-primary/80"
        )}>
          {testimonial.by}
        </p>
        <p className={cn(
          "text-[10px] sm:text-xs mt-0.5 sm:mt-1",
          isCenter ? "text-beige/80" : "text-text-dark/70"
        )}>
          Google Review
        </p>
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardDims, setCardDims] = useState({ width: 420, height: 420 });
  const [containerHeight, setContainerHeight] = useState(650);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches: isDesktop } = window.matchMedia("(min-width: 768px)");
      const { matches: isTablet } = window.matchMedia("(min-width: 640px)");
      if (isDesktop) {
        setCardDims({ width: 420, height: 420 });
        setContainerHeight(650);
      } else if (isTablet) {
        setCardDims({ width: 350, height: 350 });
        setContainerHeight(580);
      } else {
        setCardDims({ width: 310, height: 380 });
        setContainerHeight(560);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: containerHeight }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardWidth={cardDims.width}
            cardHeight={cardDims.height}
          />
        );
      })}
      
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 flex -translate-x-1/2 gap-4 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all duration-300",
            "bg-white border border-primary/20 text-primary hover:bg-primary hover:text-beige hover:scale-110 shadow-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft strokeWidth={2.5} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all duration-300",
            "bg-white border border-primary/20 text-primary hover:bg-primary hover:text-beige hover:scale-110 shadow-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

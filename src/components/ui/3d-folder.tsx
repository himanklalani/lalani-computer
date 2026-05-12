"use client";

import React, { useState, useRef, useEffect, useLayoutEffect, useCallback, forwardRef } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ─────────────────────────────────────────────────────────────────────

export interface FolderProject {
  id: string;
  image: string;
  title: string;
  href?: string;
}

// ─── Project Card (fan inside folder) ─────────────────────────────────────────

interface ProjectCardProps {
  image: string;
  title: string;
  delay: number;
  isVisible: boolean;
  index: number;
  totalCount: number;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ image, title, delay, isVisible, index, totalCount, onClick, isSelected }, ref) => {
    const middleIndex = (totalCount - 1) / 2;
    const factor = totalCount > 1 ? (index - middleIndex) / middleIndex : 0;
    const rotation = factor * 25;
    const translationX = factor * 85;
    const translationY = Math.abs(factor) * 12;

    return (
      <div
        ref={ref}
        className={cn("absolute w-20 h-28 cursor-pointer group/card", isSelected && "opacity-0")}
        style={{
          transform: isVisible
            ? `translateY(calc(-100px + ${translationY}px)) translateX(${translationX}px) rotate(${rotation}deg) scale(1)`
            : "translateY(0px) translateX(0px) rotate(0deg) scale(0.4)",
          opacity: isSelected ? 0 : isVisible ? 1 : 0,
          transition: `all 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          zIndex: 10 + index,
          left: "-40px",
          top: "-56px",
        }}
        onClick={(e) => { e.stopPropagation(); onClick(); }}
      >
        <div className={cn(
          "w-full h-full rounded-lg overflow-hidden shadow-xl bg-white border border-primary/10 relative",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "group-hover/card:-translate-y-6 group-hover/card:shadow-2xl group-hover/card:shadow-primary/40 group-hover/card:ring-2 group-hover/card:ring-primary group-hover/card:scale-125"
        )}>
          <img
            src={image}
            alt={title}
            width={320}
            height={448}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
          <p className="absolute bottom-1.5 left-1.5 right-1.5 text-[9px] font-black uppercase tracking-tighter text-white truncate drop-shadow-md">
            {title}
          </p>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

// ─── Image Lightbox ────────────────────────────────────────────────────────────

interface ImageLightboxProps {
  projects: FolderProject[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  sourceRect: DOMRect | null;
  onCloseComplete?: () => void;
  onNavigate: (index: number) => void;
  categoryTitle: string;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  projects, currentIndex, isOpen, onClose, sourceRect,
  onCloseComplete, onNavigate, categoryTitle,
}) => {
  const [animationPhase, setAnimationPhase] = useState<"initial" | "animating" | "complete">("initial");
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [internalIndex, setInternalIndex] = useState(currentIndex);
  const [isSliding, setIsSliding] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalProjects = projects.length;
  const hasNext = internalIndex < totalProjects - 1;
  const hasPrev = internalIndex > 0;
  const currentProject = projects[internalIndex];

  useEffect(() => {
    if (isOpen && currentIndex !== internalIndex && !isSliding) {
      setIsSliding(true);
      const timer = setTimeout(() => { setInternalIndex(currentIndex); setIsSliding(false); }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isOpen, internalIndex, isSliding]);

  useEffect(() => {
    if (isOpen) { setInternalIndex(currentIndex); setIsSliding(false); }
  }, [isOpen, currentIndex]);

  const navigateNext = useCallback(() => {
    if (internalIndex >= totalProjects - 1 || isSliding) return;
    onNavigate(internalIndex + 1);
  }, [internalIndex, totalProjects, isSliding, onNavigate]);

  const navigatePrev = useCallback(() => {
    if (internalIndex <= 0 || isSliding) return;
    onNavigate(internalIndex - 1);
  }, [internalIndex, isSliding, onNavigate]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    onClose();
    setTimeout(() => {
      setIsClosing(false);
      setShouldRender(false);
      setAnimationPhase("initial");
      onCloseComplete?.();
    }, 500);
  }, [onClose, onCloseComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") navigateNext();
      if (e.key === "ArrowLeft") navigatePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handleKeyDown); document.body.style.overflow = ""; };
  }, [isOpen, handleClose, navigateNext, navigatePrev]);

  useLayoutEffect(() => {
    if (isOpen && sourceRect) {
      setShouldRender(true);
      setAnimationPhase("initial");
      setIsClosing(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimationPhase("animating")));
      const timer = setTimeout(() => setAnimationPhase("complete"), 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen, sourceRect]);

  const handleDotClick = (idx: number) => { if (isSliding || idx === internalIndex) return; onNavigate(idx); };

  if (!shouldRender || !currentProject) return null;

  const getInitialStyles = (): React.CSSProperties => {
    if (!sourceRect) return {};
    const vw = window.innerWidth, vh = window.innerHeight;
    const tw = Math.min(800, vw - 64), th = Math.min(vh * 0.85, 600);
    const tx = (vw - tw) / 2, ty = (vh - th) / 2;
    const scale = Math.max(sourceRect.width / tw, sourceRect.height / th);
    const translateX = sourceRect.left + sourceRect.width / 2 - (tx + tw / 2) + window.scrollX;
    const translateY = sourceRect.top + sourceRect.height / 2 - (ty + th / 2) + window.scrollY;
    return { transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`, opacity: 0.5, borderRadius: "12px" };
  };

  const getFinalStyles = (): React.CSSProperties => ({ transform: "translate(0,0) scale(1)", opacity: 1, borderRadius: "24px" });
  const currentStyles = animationPhase === "initial" && !isClosing ? getInitialStyles() : getFinalStyles();

  const btnVisible = animationPhase === "complete" && !isClosing;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={handleClose}
      style={{ opacity: isClosing ? 0 : 1, transition: "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/80 md:backdrop-blur-2xl backdrop-blur-sm"
        style={{ opacity: animationPhase === "initial" && !isClosing ? 0 : 1, transition: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)" }}
      />

      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); handleClose(); }}
        className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-beige/10 backdrop-blur-xl border border-beige/20 text-beige hover:bg-beige/20 transition-all duration-300"
        style={{ opacity: btnVisible ? 1 : 0, transform: btnVisible ? "translateY(0)" : "translateY(-30px)", transition: "opacity 400ms ease-out 400ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 400ms" }}
      >
        <X className="w-5 h-5" strokeWidth={2.5} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); navigatePrev(); }}
        disabled={!hasPrev || isSliding}
        className="absolute left-4 md:left-10 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-beige/10 backdrop-blur-xl border border-beige/20 text-beige hover:bg-beige/20 hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
        style={{ opacity: btnVisible && hasPrev ? 1 : 0, transform: btnVisible ? "translateX(0)" : "translateX(-40px)", transition: "opacity 400ms ease-out 600ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 600ms" }}
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={3} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); navigateNext(); }}
        disabled={!hasNext || isSliding}
        className="absolute right-4 md:right-10 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-beige/10 backdrop-blur-xl border border-beige/20 text-beige hover:bg-beige/20 hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
        style={{ opacity: btnVisible && hasNext ? 1 : 0, transform: btnVisible ? "translateX(0)" : "translateX(40px)", transition: "opacity 400ms ease-out 600ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 600ms" }}
      >
        <ChevronRight className="w-6 h-6" strokeWidth={3} />
      </button>

      {/* Card */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          ...currentStyles,
          transform: isClosing ? "translate(0,0) scale(0.92)" : currentStyles.transform,
          transition: animationPhase === "initial" && !isClosing ? "none" : "transform 700ms cubic-bezier(0.16, 1, 0.3, 1), opacity 600ms ease-out, border-radius 700ms ease",
          transformOrigin: "center center",
        }}
      >
        <div className="relative overflow-hidden rounded-[inherit] bg-warm-bg1 border border-primary/10 shadow-[0_35px_60px_-15px_rgba(25,37,170,0.4)]">
          {/* Image strip */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/10]">
            <div
              className="flex w-full h-full"
              style={{
                transform: `translateX(-${internalIndex * 100}%)`,
                transition: isSliding ? "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)" : "none",
              }}
            >
              {projects.map((p) => (
                <div key={p.id} className="min-w-full h-full relative">
                  <img src={p.image} alt={p.title} width={800} height={600} className="w-full h-full object-cover select-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div
            className="px-6 py-6 md:px-8 md:py-7 bg-warm-bg1 border-t border-primary/10"
            style={{ opacity: btnVisible ? 1 : 0, transform: btnVisible ? "translateY(0)" : "translateY(40px)", transition: "opacity 500ms ease-out 500ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) 500ms" }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 text-center md:text-left">
              <div className="flex-1 min-w-0">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary/70 mb-1">{categoryTitle}</p>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary tracking-tight">{currentProject?.title}</h3>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-3">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-beige rounded-full border border-primary/10">
                    {projects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={cn("w-1.5 h-1.5 rounded-full transition-all duration-500", idx === internalIndex ? "bg-primary scale-150" : "bg-primary/20 hover:bg-primary/40")}
                      />
                    ))}
                  </div>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary/70">{internalIndex + 1} / {totalProjects}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Animated Folder ───────────────────────────────────────────────────────────

export interface AnimatedFolderProps {
  title: string;
  subtitle?: string;
  projects: FolderProject[];
  className?: string;
  accentColor?: string;
}

export const AnimatedFolder: React.FC<AnimatedFolderProps> = ({
  title, subtitle, projects, className, accentColor = "#1925AA",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);
  const [hiddenCardId, setHiddenCardId] = useState<string | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const previewProjects = projects.slice(0, 5);

  const handleProjectClick = (project: FolderProject, index: number) => {
    const cardEl = cardRefs.current[index];
    if (cardEl) setSourceRect(cardEl.getBoundingClientRect());
    setSelectedIndex(index);
    setHiddenCardId(project.id);
  };

  const handleCloseLightbox = () => { setSelectedIndex(null); setSourceRect(null); };
  const handleCloseComplete = () => { setHiddenCardId(null); };
  const handleNavigate = (newIndex: number) => {
    setSelectedIndex(newIndex);
    setHiddenCardId(projects[newIndex]?.id ?? null);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Only apply intersection observer on mobile/touch devices or small screens
    const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (!isTouch) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHovered(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px", // Trigger when in the middle 60% of the screen
        threshold: 0.6, // Needs to be at least 60% visible
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Folder colors — derived from accentColor
  const dark = accentColor;

  return (
    <>
      <div
        ref={containerRef}
        className={cn(
          "relative flex flex-col items-center justify-center p-8 cursor-pointer snap-center shrink-0 group",
          className
        )}
        style={{
          minWidth: "280px",
          maxWidth: "320px",
          minHeight: "320px",
          perspective: "1200px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          if (window.matchMedia("(hover: none)").matches) {
            setIsHovered(!isHovered);
          }
        }}
      >
        {/* Background layer: Separated to fix iOS Safari border-radius clipping bug */}
        <div 
          className={cn(
            "absolute inset-0 rounded-2xl bg-white border border-primary/10 shadow-md",
            "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
          )}
          style={{
            transform: isHovered ? "scale(1.04) rotate(-1.5deg)" : "scale(1) rotate(0deg)",
            boxShadow: isHovered ? "0 20px 25px -5px rgba(25,37,170,0.15)" : undefined,
            borderColor: isHovered ? "rgba(25,37,170,0.3)" : undefined
          }}
        />

        {/* Ambient glow */}
        <div
          className="absolute inset-0 rounded-2xl transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 70%, ${accentColor}22 0%, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "scale(1.04) rotate(-1.5deg)" : "scale(1) rotate(0deg)",
          }}
        />

        {/* Content container that transforms together */}
        <div 
          className="relative w-full h-full flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: isHovered ? "scale(1.04) rotate(-1.5deg)" : "scale(1) rotate(0deg)",
          }}
        >
          {/* Folder graphic */}
          <div className="relative flex items-center justify-center mb-2" style={{ height: "160px", width: "200px" }}>
          {/* Back panel */}
          <div
            className="absolute w-32 h-24 rounded-lg shadow-md border border-white/20"
            style={{
              background: `linear-gradient(135deg, ${accentColor}cc 0%, ${accentColor} 100%)`,
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(-20deg) scaleY(1.05)" : "rotateX(0deg) scaleY(1)",
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 10,
            }}
          />
          {/* Tab */}
          <div
            className="absolute w-12 h-4 rounded-t-md border-t border-x border-white/20"
            style={{
              background: accentColor,
              top: "calc(50% - 48px - 12px)",
              left: "calc(50% - 64px + 16px)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(-30deg) translateY(-3px)" : "rotateX(0deg) translateY(0)",
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 10,
            }}
          />

          {/* Cards fan */}
          <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 20 }}>
            {previewProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                image={project.image}
                title={project.title}
                delay={index * 50}
                isVisible={isHovered}
                index={index}
                totalCount={previewProjects.length}
                onClick={() => handleProjectClick(project, index)}
                isSelected={hiddenCardId === project.id}
              />
            ))}
          </div>

          {/* Front panel */}
          <div
            className="absolute w-32 h-24 rounded-lg shadow-lg border border-white/20"
            style={{
              background: `linear-gradient(135deg, ${accentColor}ee 0%, ${accentColor}aa 100%)`,
              top: "calc(50% - 48px + 4px)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(35deg) translateY(12px)" : "rotateX(0deg) translateY(0)",
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 30,
            }}
          />
          {/* Glare */}
          <div
            className="absolute w-32 h-24 rounded-lg overflow-hidden pointer-events-none"
            style={{
              top: "calc(50% - 48px + 4px)",
              background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, transparent 60%)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(35deg) translateY(12px)" : "rotateX(0deg) translateY(0)",
              transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 31,
            }}
          />
        </div>

        {/* Text Area with Smooth Content Swap */}
        <div className="text-center relative z-10 w-full mt-6 h-20 flex flex-col items-center px-4">
          <h3
            className="text-lg font-heading font-bold text-primary transition-all duration-500"
            style={{ transform: isHovered ? "translateY(-8px)" : "translateY(0)", letterSpacing: isHovered ? "-0.01em" : "0" }}
          >
            {title}
          </h3>
          
          <div className="relative w-full h-12 mt-1">
            {/* Details (Shown on Hover) */}
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500"
              style={{ 
                opacity: isHovered ? 1 : 0, 
                transform: isHovered ? "translateY(0)" : "translateY(10px)",
                pointerEvents: isHovered ? "auto" : "none"
              }}
            >
              {subtitle && <p className="text-xs text-text-dark/70 font-medium leading-tight mb-1">{subtitle}</p>}
              <p className="text-[10px] font-black text-primary/70 uppercase tracking-widest">
                {projects.length} {projects.length === 1 ? "item" : "items"}
              </p>
            </div>

            {/* Hint (Shown by default) */}
            <div
              className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase tracking-[0.25em] text-primary/50 transition-all duration-500"
              style={{ 
                opacity: isHovered ? 0 : 1, 
                transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                pointerEvents: isHovered ? "none" : "auto"
              }}
            >
              Hover to browse
            </div>
          </div>
        </div>
        </div> {/* Closes inner content div */}
      </div> {/* Closes main container div */}

      <ImageLightbox
        projects={projects}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={handleCloseLightbox}
        sourceRect={sourceRect}
        onCloseComplete={handleCloseComplete}
        onNavigate={handleNavigate}
        categoryTitle={title}
      />
    </>
  );
};

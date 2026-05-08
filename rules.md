# Lalani Computers - Project Documentation & Rules

## 1. What is the Project?
Lalani Computers is a high-end, premium corporate website designed for a Mumbai-based enterprise IT hardware and turnkey solutions provider. The project focuses on serving corporate clients, SMEs, and startups with end-to-end hardware procurement, networking, surveillance setups, and AMC (Annual Maintenance Contracts). The website is built to feel like an award-winning "Creative Agency" site, prioritizing aesthetic excellence, fluid animations, strict accessibility (WCAG 2.1 AA), and high performance.

## 2. Project Architecture & Stack
This is a modern full-stack web application built with:
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (with native CSS variables and `@theme` directive)
- **Icons:** `lucide-react`
- **Backend/Forms:** `nodemailer` for handling the `/api/contact` route.

### Directory Structure
- `/src/app`: Next.js App Router pages (`/`, `/about`, `/products`, `/solutions`, `/clients`, `/contact`), `layout.tsx`, and `globals.css`.
- `/src/components/layout`: Core structural components like `Navbar.tsx`, `Footer.tsx`, and `LoaderOverlay.tsx`.
- `/src/components/ui`: Reusable UI elements (`Button.tsx`, `Typography.tsx`, `FadeIn.tsx`, `StatCard.tsx`) and complex interactive components (e.g., `sterling-gate-kinetic-navigation.tsx`).
- `/src/components/sections/home`: Modular sections for the homepage (`HeroSection.tsx`, `SolutionsOverviewSection.tsx`, `ImageShowcaseSection.tsx`, etc.).

## 3. Libraries Used
- **`next` (v16.2.4)**: Core React framework for SSR and routing.
- **`react` & `react-dom` (v19.2.4)**: Core UI library.
- **`tailwindcss` (v4)**: Utility-first CSS framework.
- **`framer-motion` (v12.38.0)**: Used for scroll-triggered entrances, parallax effects, layout animations, and text reveal effects.
- **`gsap` (v3.15.0)**: Used for complex timeline animations, custom easing (`CustomEase`), `ScrollTrigger`, and high-performance physics-based interactions (like 3D magnetic tilts).
- **`lucide-react` (v1.14.0)**: SVG icon library.
- **`nodemailer` (v8.0.7)**: Backend email dispatching for the contact form.

## 4. Animations & Where to Find Them
The project heavily relies on a hybrid approach using both `framer-motion` and `gsap` to achieve a "tactile depth" and premium interactivity.

- **Kinetic Navigation Menu (GSAP)**
  - **Location:** `/src/components/ui/sterling-gate-kinetic-navigation.tsx`
  - **Effects:** A full-screen overlay menu featuring a "Magnetic 3D Tilt" on hover, a double-layered "Masked Reveal" text effect using `clipPath` wipes, and animated SVG ambient background shapes.

- **3D Perspective Cards & Parallax (GSAP)**
  - **Location:** `/src/components/sections/home/SolutionsOverviewSection.tsx`
  - **Effects:** Cards feature a staggered slide-in entrance using `ScrollTrigger`. On hover, the cards tilt in 3D space (`rotateX`/`rotateY`) while internal content (numbers and text) parallax in opposite directions to create depth.

- **Image Showcase & Staggered Reveal (Framer Motion)**
  - **Location:** `/src/components/sections/home/ImageShowcaseSection.tsx`
  - **Effects:** A 4-column masonry-style grid where columns scroll at different speeds (parallax) using `useScroll` and `useTransform`. Images reveal with a scale and blur-in effect, accompanied by word-by-word text animations.

- **Standard Scroll Entrances (Framer Motion)**
  - **Location:** `/src/components/ui/FadeIn.tsx`
  - **Effects:** Reusable wrapper for standard directional fade-ins triggered as elements enter the viewport.

- **Infinite Marquee (CSS Animations)**
  - **Location:** `/src/components/sections/home/BrandMarqueeSection.tsx` and `/src/app/globals.css`
  - **Effects:** Smooth, infinite horizontal scrolling of brand logos using native CSS `@keyframes` (`animate-marquee`).

## 5. Color Themes & Typography
The design system is managed via Tailwind v4 `@theme` variables in `/src/app/globals.css`.

### Color Palette
- **Primary Blue:** `#1925AA` (The core brand color)
- **White:** `#FFFFFF` (Clean background color)
- **Warm Grey/Beige:** `#E8E6E0` (Used for contrast against dark backgrounds and primary blue)
- **Primary Dark:** `#0000CC`
- **Primary Light:** `#E6E6FF`
- **Warm Backgrounds:** `#FAFAFA` (`warm-bg1`, base body background) and `#F0F0F0` (`warm-bg2`, secondary sections).
- **Dark Elements:** `#111111` (`text-dark`, primary text color) and `#1D1D1D` / `#2D2D2D` (`card-dark`, dark sections/footer).

### Typography
- **Heading Font:** `var(--font-syne)` - High-end, stylized heading font used for bold statements, kinetic menus, and headlines. Access via `font-heading`.
- **Body Font:** `var(--font-manrope)` - Professional, highly legible sans-serif for body copy and UI elements. Access via `font-sans`.

## 6. Premium Component Patterns & Logic

### Unified Kinetic Preloader (FLIP Bridge)
- **Logic:** Instead of a simple fade-out, the preloader uses a **FLIP (First, Last, Inverse, Play)** shared-element transition.
- **Implementation:** Both the `LoaderOverlay.tsx` and the `Navbar.tsx` brand containers share the same `layoutId="brand-logo"`. This ensures the logo and its blue background "morph" seamlessly from the center of the screen to the top-left navigation slot.
- **Sync:** Handled via a global `loaderState.ts` observer that coordinates the transition trigger once assets are loaded.

### 3D Folder & Category Interaction
- **Logic:** The `ProductCategoryGridSection.tsx` uses a custom `3d-folder.tsx` component.
- **Animations:** Employs a "Content Swap" strategy. In the resting state, it displays a "Hover to browse" hint. On hover, this hint slides out and category details (subtitle/item count) slide in, preventing text overlap and maintaining a clean aesthetic.

### Seamless Infinite Marquees
- **Logic:** Standardized infinite scrolling for `BrandMarqueeSection.tsx` and `RequirementCTASection.tsx`.
- **Implementation:** Uses multiple (typically 4) duplicated wrapper blocks running parallel CSS animations (`animate-marquee-standard` / `animate-marquee-reverse`). Each block translates by exactly `-100% - gap`, ensuring a zero-jitter, frame-perfect loop.

### High-End Visual Utilities
- **Sparkles:** A particle-based canvas system (`@tsparticles/react`) used for ambient "stardust" effects in CTA sections.
- **Progressive Blur:** Multi-layered backdrop-filter gradients used to create smooth, high-fidelity edge transitions in scrolling carousels.

## 7. Development Rules & Guidelines
- **Strict Client/Server Boundaries:** Components using GSAP, framer-motion, or browser-event handlers (like `onError`) must be marked with `"use client"`.
- **Animation Cleanup:** GSAP `ScrollTrigger` instances and `gsap.context()` must be properly reverted/killed in `useEffect` cleanup to prevent memory leaks.
- **Logo Integrity:** Brand logos should be displayed with their original colors where possible. Avoid `invert` or `brightness-0` filters on logos in the footer or navbar to maintain brand authority.
- **Accessibility:** Maintain WCAG 2.1 AA. Ensure `aria-expanded` on the `MorphedMenu`, and `focus-visible` for keyboard users.
- **Responsiveness:** Layouts must collapse cleanly on mobile (down to 375px). Use horizontal carousels for brand grids on mobile to save vertical space.

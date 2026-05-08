# Lalani Computers Website

This is the Next.js 15 repository for the Lalani Computers corporate website.

## Stack Choices
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Folder Structure
- `/src/app`: Next.js App Router and API routes.
- `/src/components`: Reusable UI elements, sections, and global layouts.
- `/src/lib`: Utilities and helper functions.
- `/src/styles`: Global styles complementing Tailwind.
- `/public`: Static assets, logos, and images.

## Mobile-First Rule
- Design all layout and navigation for 320px first.
- No horizontal scroll at any breakpoint.
- All tap targets must be >= 44x44px.

## How to run
1. `npm install`
2. `npm run dev` (Starts development server on localhost:3000)
3. `npm run build` (Builds production bundle)

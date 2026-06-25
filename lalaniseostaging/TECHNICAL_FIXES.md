# Technical SEO Fixes for Lalani Computers

This document outlines the technical SEO issues identified in the codebase and provides the specific code changes required to fix them.

## 1. Missing Meta Data & H1 Tags on Legal Pages
**Issue:** `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` lack an `<h1>` tag and comprehensive metadata exports.
**Fix Preparation:**
```tsx
// In src/app/privacy/page.tsx
export const metadata = {
  title: "Privacy Policy | Lalani Computers",
  description: "Read the privacy policy of Lalani Computers. Learn how we collect, use, and protect your data in our corporate IT services."
};

// Update the main render block to include an H1
export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
      <h2>1. Information We Collect</h2>
      {/* ... existing content ... */}
    </main>
  );
}
```

## 2. Generic Image Alt Text
**Issue:** `src/components/sections/home/ImageShowcaseSection.tsx` uses a dynamic generic string for image alt text (`alt={`Showcase image ${colIndex * 4 + i + 1}`}`).
**Fix Preparation:** Define an array of descriptive, context-rich alt texts based on the images used.
```tsx
const showcaseAltTexts = [
  "Corporate office network server rack setup",
  "Professional biometric access control system",
  "Enterprise data center cooling infrastructure",
  "Modern workplace with high-performance Dell workstations",
  // ... continue for all grid images
];

// In the render method of ImageShowcaseSection:
<Image 
  src={image.src} 
  alt={showcaseAltTexts[colIndex * 4 + i] || "Corporate IT Hardware Solution"} 
  fill
  className="object-cover" 
/>
```

## 3. AI Scraper Directives and Visibility
**Issue:** `src/app/robots.ts` currently blocks AI answer engines from the root directory (`/`). This restricts AI-driven search engines from discovering your public site content and prevents them from effectively indexing your business.
**Fix Preparation:** To ensure full AI search visibility, remove the `disallow: '/'` restriction for AI bots. Allow them full access to the public site and `/llms.txt`.
```typescript
// In src/app/robots.ts
{
  // Allow AI training scrapers and bots to index public content
  userAgent: [
    'GPTBot',
    'ChatGPT-User',
    'Claude-Web',
    'anthropic-ai',
    'cohere-ai',
    'CCBot',
    'Omgilibot',
    'FacebookBot'
  ],
  allow: '/',
}
```
*Note: This configuration ensures full AI crawler access to the main public website content, maximizing visibility in AI search engines.*

## 4. Slow-loading Assets & CLS Risks
**Issue:** Heavy use of `next/dynamic` on the homepage (`ProductCategoryGridSection`, etc.) without explicit layout boundaries can cause Cumulative Layout Shift (CLS) when the components finally render.
**Fix Preparation:** Define a `loading` fallback with predefined heights matching the final rendered component.
```tsx
const ProductCategoryGridSection = dynamic(
  () => import("@/components/sections/home/ProductCategoryGridSection").then(m => m.ProductCategoryGridSection),
  { 
    ssr: true, 
    loading: () => <div className="min-h-[500px] w-full bg-warm-bg1 animate-pulse" aria-hidden="true" /> 
  }
);
```

## 5. Broken or Unclear Anchor Text
**Issue:** While navigation links are strong, some "Read More" or "Explore →" links lack descriptive context for screen readers and search engines.
**Fix Preparation:** Add `aria-label` to generic links, or include visually hidden text.
```tsx
// In Data Center page or similar cards
<Link 
  href="/products/servers" 
  className="text-primary text-sm font-semibold hover:underline"
  aria-label="Explore Enterprise Servers and Racks"
>
  Explore Servers →
</Link>
```

---

## Notes
- **Unclear items:** If a headless CMS or external database is used for the Image Showcase, the alt text fix would need to pull from the API rather than a hardcoded array.
- **Assumptions:** Assumed the `next/dynamic` components can safely accept a `loading` skeleton without breaking any scroll-triggered `framer-motion` animations.
- **Items needing manual verification:** After applying the `robots.ts` fix, test the output in Google Search Console's robots.txt tester to ensure the `allow: /llms.txt` rule successfully overrides the `disallow: /` rule for the blocked user agents.

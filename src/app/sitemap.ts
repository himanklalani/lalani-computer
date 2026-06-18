import { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lalanicomputers.com'

const lastMod = new Date('2025-05-01')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core pages ──────────────────────────────────────────────────────────
    {
      url: BASE,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE}/contact`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${BASE}/products`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE}/solutions`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/clients`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/about`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.6,
    },

    // ── Product category pages ───────────────────────────────────────────────
    {
      url: `${BASE}/products/computing`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE}/products/servers`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE}/products/networking-security`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE}/products/office-electronics`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE}/products/software`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE}/products/peripherals-power`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.65,
    },

    // ── Industry expertise pages ────────────────────────────────────────────
    {
      url: `${BASE}/clients/industries/bfsi`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/clients/industries/healthcare`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/clients/industries/infrastructure`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/clients/industries/manufacturing`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/clients/industries/bpo-kpo`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/clients/industries/education`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

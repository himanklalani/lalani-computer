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
    {
      url: `${BASE}/products/accessories`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // ── Turnkey Solutions pages ──────────────────────────────────────────────
    {
      url: `${BASE}/solutions/office-setup`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/solutions/networking-wifi`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/solutions/repairs`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/solutions/surveillance-security`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/solutions/data-center`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/solutions/amc-support`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ── Dedicated Repair & Maintenance Platform ──────────────────────────────
    {
      url: `${BASE}/repair`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE}/repair/laptop-desktop-repairs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE}/repair/motherboard-component-repair`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE}/repair/servers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE}/repair/networking-infrastructure`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE}/repair/motherboard-chip-level`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/repair/laptop-battery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ── Dedicated IT Asset Disposition (ITAD) & Buyback Platform ─────────────
    {
      url: `${BASE}/buyback`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE}/buyback/corporate-it-fleets`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE}/buyback/enterprise-servers-storage`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE}/buyback/networking-switches-infrastructure`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE}/buyback/bulk-laptops`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/buyback/enterprise-servers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/buyback/networking-switches`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
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
    
    // ── Nested Landing Pages ────────────────────────────────────────────────
    {
      url: `${BASE}/products/computing/best-laptops-under-50000`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/products/computing/best-laptops-under-60000`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/products/computing/best-laptops-under-75000`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/products/computing/laptop-buying-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/solutions/custom-pc-builds`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ── B2B Content Assets ──────────────────────────────────────────────────
    {
      url: `${BASE}/solutions/office-setup/startup-checklist-2026`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/products/computing/leasing-vs-buying-corporate-laptops`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/solutions/data-center/sme-server-room-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/solutions/custom-pc-builds/hardware-buying-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/solutions/amc-support/amc-checklist`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/solutions/enterprise-servers-mumbai/server-buying-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/solutions/office-network-setup-india/networking-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/solutions/storage-server-supplier-mumbai/storage-buying-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/solutions/surveillance-security/cctv-buying-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/solutions/networking-wifi/wifi-setup-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}

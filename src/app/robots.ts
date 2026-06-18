import { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lalanicomputers.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // All well-behaved bots: full access to public pages
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',       // Server-side API routes
          '/admin/',     // Admin dashboard (secret key protected, but also block crawlers)
          '/demo/',      // Internal demo pages
        ],
      },
      {
        // Block AI training scrapers explicitly
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'anthropic-ai',
          'Claude-Web',
          'cohere-ai',
          'Omgilibot',
          'FacebookBot',
        ],
        disallow: '/',
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}

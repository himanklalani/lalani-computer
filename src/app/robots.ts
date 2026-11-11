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
          '/_next/static/media/', // Raw font and media chunks (prevents Googlebot from indexing font files as pages)
        ],
      },
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
          'FacebookBot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add 130px so the logo is served at exactly the rendered width (not rounded up to 256)
    imageSizes: [130, 256, 384],
    // avif first: smaller than webp on supporting browsers; webp is the fallback
    // for the rest. Next picks whichever the requesting browser advertises.
    formats: ['image/avif', 'image/webp'],
  },

  // Security headers — applied to every route. Fixes: clickjacking/embedding,
  // cross-origin reads, missing content policy, and partial HTTPS enforcement.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "frame-ancestors 'self'",
              "img-src 'self' data: https:",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://www.google-analytics.com",
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://wa.me https://api.whatsapp.com",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },

  // Force the non-www canonical host (canonicals already point to the non-www
  // origin). Also set waatechnologies.com as the primary domain in Vercel so
  // this is enforced at the edge too.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.waatechnologies.com' }],
        destination: 'https://waatechnologies.com/:path*',
        permanent: true,
      },
      // True duplicates and thin case studies -> their canonical page. The other 43 former
      // "thin" posts have had their original articles restored and are real pages again.
      { source: '/the-eco-friendly-features-of-waa-composite-cylinders', destination: '/a-greener-choice-the-eco-friendly-features-of-waa-composite-cylinders', permanent: true },
      { source: '/technologies-driving-the-change-from-steel-to-fiber-lpg-cylinders', destination: '/novel-ideas-guiding-the-transition-from-steel-to-fiber-lpg-cylinders', permanent: true },
      { source: '/waatechnologies-blast-proof-cylinder-outdoor-camping-safety', destination: '/composite-lpg-cylinders-food-trucks-street-vendors-pakistan', permanent: true },
      { source: '/waatechnologies-blast-proof-cylinder-public-event-safety', destination: '/composite-lpg-cylinders-food-trucks-street-vendors-pakistan', permanent: true },
      { source: '/waatechnologies-blast-proof-cylinders-busy-restaurant-safety', destination: '/why-restaurants-switching-composite-lpg-cylinders-pakistan', permanent: true },

      // WordPress duplicates: the same three articles were published twice. The "-2"
      // copies have been removed from the post list and point at the originals.
      { source: '/why-more-families-choosing-waatechnologies-for-safer-lpg-storage-introduction-2', destination: '/why-more-families-choosing-waatechnologies-for-safer-lpg-storage-introduction', permanent: true },
      { source: '/waa-technologies-leading-the-future-of-lpg-composite-cylinders-with-innovation-safety-and-sustainability-2', destination: '/waa-technologies-leading-the-future-of-lpg-composite-cylinders-with-innovation-safety-and-sustainability', permanent: true },
      { source: '/a-greener-choice-the-eco-friendly-features-of-waa-composite-cylinders-2', destination: '/a-greener-choice-the-eco-friendly-features-of-waa-composite-cylinders', permanent: true },

      // Leftover WooCommerce and RSS paths from the old WordPress site. Search Console
      // still reports these as 404s, so send them to the nearest live page instead of
      // losing whatever link value they carry.
      { source: '/product-category/:slug*', destination: '/shop', permanent: true },
      { source: '/product-tag/:slug*', destination: '/shop', permanent: true },
      { source: '/category/:slug*', destination: '/blog', permanent: true },
      { source: '/tag/:slug*', destination: '/blog', permanent: true },
      { source: '/:slug/feed', destination: '/:slug', permanent: true },
      { source: '/feed', destination: '/blog', permanent: true },
      { source: '/comments/feed', destination: '/blog', permanent: true },
    ];
  },
};

export default nextConfig;

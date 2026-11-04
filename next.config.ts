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
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com https://wa.me https://api.whatsapp.com",
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
      // Consolidate accidental duplicate articles to their canonical URL
      { source: '/a-greener-choice-the-eco-friendly-features-of-waa-composite-cylinders-2', destination: '/a-greener-choice-the-eco-friendly-features-of-waa-composite-cylinders', permanent: true },
      { source: '/waa-technologies-leading-the-future-of-lpg-composite-cylinders-with-innovation-safety-and-sustainability-2', destination: '/waa-technologies-leading-the-future-of-lpg-composite-cylinders-with-innovation-safety-and-sustainability', permanent: true },
      { source: '/why-more-families-choosing-waatechnologies-for-safer-lpg-storage-introduction-2', destination: '/why-more-families-choosing-waatechnologies-for-safer-lpg-storage-introduction', permanent: true },
      { source: '/5-reasons-to-switch-to-composite-lpg-cylinder', destination: '/5-reasons-to-switch-to-composite-lpg-cylinders-for-your-home', permanent: true },
      { source: '/the-eco-friendly-features-of-waa-composite-cylinders', destination: '/a-greener-choice-the-eco-friendly-features-of-waa-composite-cylinders', permanent: true },
      { source: '/benefits-of-blast-proof-lpg-cylinders', destination: '/benefits-of-blast-proof-lpg-cylinders-household-safety', permanent: true },
      { source: '/best-practices-for-safely-using-lpg-composite-cylinders', destination: '/best-practice-for-safely-using-lpg-composite-cylinders-at-home', permanent: true },
      { source: '/lpg-industry-trends-growing-demand-for-composite-cylinders', destination: '/lpg-industry-trends-the-growing-demand-for-composite-cylinders', permanent: true },
      { source: '/the-science-of-assisting-with-leak-proof-fiber-lpg-cylinders', destination: '/the-science-supporting-leak-proof-fiber-lpg-cylinders', permanent: true },
      { source: '/recyclable-materials-in-lpg-fiber-cylinder-manufacturing', destination: '/the-role-of-recyclable-materials-in-the-lpg-fiber-cylinder-manufacturing', permanent: true },
      { source: '/features-waatech-composite-cylinders-standout', destination: '/top-5-features-that-make-waa-techs-composite-cylinders-stand-out', permanent: true },
      { source: '/lpg-cylinders-game-changer-energy-industry', destination: '/why-waa-techs-lpg-cylinders-are-a-game-changer-for-the-energy-industry', permanent: true },
    ];
  },
};

export default nextConfig;

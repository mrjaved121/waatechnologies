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
      // Consolidate thin / duplicate posts into their canonical guides (audit map)
      { source: '/the-science-of-assisting-with-leak-proof-fiber-lpg-cylinders', destination: '/are-composite-lpg-cylinders-safe-pakistan', permanent: true },
      { source: '/the-science-supporting-leak-proof-fiber-lpg-cylinders', destination: '/are-composite-lpg-cylinders-safe-pakistan', permanent: true },
      { source: '/blast-proof-technology-works-in-lpg-cylinders', destination: '/are-composite-lpg-cylinders-safe-pakistan', permanent: true },
      { source: '/benefits-of-blast-proof-lpg-cylinders-household-safety', destination: '/are-composite-lpg-cylinders-safe-pakistan', permanent: true },
      { source: '/benefits-of-blast-proof-lpg-cylinders', destination: '/are-composite-lpg-cylinders-safe-pakistan', permanent: true },
      { source: '/why-more-families-choosing-waatechnologies-for-safer-lpg-storage-introduction', destination: '/are-composite-lpg-cylinders-safe-pakistan', permanent: true },
      { source: '/why-more-families-choosing-waatechnologies-for-safer-lpg-storage-introduction-2', destination: '/are-composite-lpg-cylinders-safe-pakistan', permanent: true },
      { source: '/how-lightweight-lpg-cylinders-are-affecting-the-sector', destination: '/composite-cylinders-reduce-lifting-injuries-restaurants-pakistan', permanent: true },
      { source: '/smart-lpg-cylinders-iot-improves-efficiency-and-safety', destination: '/how-to-check-gas-level-composite-cylinder', permanent: true },
      { source: '/the-future-of-lpg-the-reason-fiber-cylinders-are-substituting-steel', destination: '/steel-vs-composite-lpg-cylinder-pakistan', permanent: true },
      { source: '/the-transformation-of-energy-storage-via-fiber-lpg-cylinders', destination: '/steel-vs-composite-lpg-cylinder-pakistan', permanent: true },
      { source: '/technologies-driving-the-change-from-steel-to-fiber-lpg-cylinders', destination: '/steel-vs-composite-lpg-cylinder-pakistan', permanent: true },
      { source: '/novel-ideas-guiding-the-transition-from-steel-to-fiber-lpg-cylinders', destination: '/steel-vs-composite-lpg-cylinder-pakistan', permanent: true },
      { source: '/composite-lpg-cylinders-over-traditional-metal-cylinders', destination: '/steel-vs-composite-lpg-cylinder-pakistan', permanent: true },
      { source: '/5-reasons-to-switch-to-composite-lpg-cylinders-for-your-home', destination: '/steel-vs-composite-lpg-cylinder-pakistan', permanent: true },
      { source: '/5-reasons-to-switch-to-composite-lpg-cylinder', destination: '/steel-vs-composite-lpg-cylinder-pakistan', permanent: true },
      { source: '/environmentally-friendly-gas-cylinder-toward-sustainable-energy-storage-as-knowledge-of-environmental-consequences-spreads-around-the-globe', destination: '/eco-friendly-gas-cylinder', permanent: true },
      { source: '/fiber-gas-cylinders-support-a-sustainable-future', destination: '/eco-friendly-gas-cylinder', permanent: true },
      { source: '/the-environmental-advantages-of-changing-to-fiber-lpg-cylinders', destination: '/eco-friendly-gas-cylinder', permanent: true },
      { source: '/fiber-lpg-cylinders-advantages-for-the-environment', destination: '/eco-friendly-gas-cylinder', permanent: true },
      { source: '/how-eco-friendly-lpg-fiber-cylinders-are-reducing-carbon-footprint-globally', destination: '/eco-friendly-gas-cylinder', permanent: true },
      { source: '/eco-friendly-lpg-fiber-cylinders-reducing-carbon', destination: '/eco-friendly-gas-cylinder', permanent: true },
      { source: '/a-greener-choice-the-eco-friendly-features-of-waa-composite-cylinders', destination: '/eco-friendly-gas-cylinder', permanent: true },
      { source: '/a-greener-choice-the-eco-friendly-features-of-waa-composite-cylinders-2', destination: '/eco-friendly-gas-cylinder', permanent: true },
      { source: '/the-eco-friendly-features-of-waa-composite-cylinders', destination: '/eco-friendly-gas-cylinder', permanent: true },
      { source: '/the-role-of-recyclable-materials-in-the-lpg-fiber-cylinder-manufacturing', destination: '/eco-friendly-gas-cylinder', permanent: true },
      { source: '/recyclable-materials-in-lpg-fiber-cylinder-manufacturing', destination: '/eco-friendly-gas-cylinder', permanent: true },
      { source: '/the-top-10-applications-for-lpg-fiber-cylinders-in-industries-and-homes', destination: '/why-restaurants-switching-composite-lpg-cylinders-pakistan', permanent: true },
      { source: '/how-fiber-cylinders-help-meet-industrial-and-construction-needs', destination: '/why-restaurants-switching-composite-lpg-cylinders-pakistan', permanent: true },
      { source: '/waatechnologies-blast-proof-cylinders-busy-restaurant-safety', destination: '/why-restaurants-switching-composite-lpg-cylinders-pakistan', permanent: true },
      { source: '/the-reasons-fiber-cylinders-are-ideal-for-barbecuing-and-outdoor-events', destination: '/composite-lpg-cylinders-food-trucks-street-vendors-pakistan', permanent: true },
      { source: '/waatechnologies-blast-proof-cylinder-public-event-safety', destination: '/composite-lpg-cylinders-food-trucks-street-vendors-pakistan', permanent: true },
      { source: '/waatechnologies-blast-proof-cylinder-outdoor-camping-safety', destination: '/composite-lpg-cylinders-food-trucks-street-vendors-pakistan', permanent: true },
      { source: '/camping-blast-proof-lpg-cylinders-outdoor-adventures', destination: '/composite-lpg-cylinders-food-trucks-street-vendors-pakistan', permanent: true },
      { source: '/fiber-gas-cylinders-in-marine-applications-safety-and-durability-advantages', destination: '/waatechnologies-corrosion-resistant-cylinder-coastal-warehouse', permanent: true },
      { source: '/winter-heating', destination: '/winter-gas-shortage-pakistan-2025-prepare-your-home', permanent: true },
      { source: '/the-future-of-lpg-cylinders', destination: '/lpg-industry-pakistan-market-size-future-outlook', permanent: true },
      { source: '/lpg-industry-trends-the-growing-demand-for-composite-cylinders', destination: '/lpg-industry-pakistan-market-size-future-outlook', permanent: true },
      { source: '/lpg-industry-trends-growing-demand-for-composite-cylinders', destination: '/lpg-industry-pakistan-market-size-future-outlook', permanent: true },
      { source: '/why-waa-techs-lpg-cylinders-are-a-game-changer-for-the-energy-industry', destination: '/lpg-industry-pakistan-market-size-future-outlook', permanent: true },
      { source: '/lpg-cylinders-game-changer-energy-industry', destination: '/lpg-industry-pakistan-market-size-future-outlook', permanent: true },
      { source: '/best-practice-for-safely-using-lpg-composite-cylinders-at-home', destination: '/8-crucial-gas-cylinder-safety-rules-every-household-must-follow', permanent: true },
      { source: '/best-practices-for-safely-using-lpg-composite-cylinders', destination: '/8-crucial-gas-cylinder-safety-rules-every-household-must-follow', permanent: true },
      { source: '/top-5-features-that-make-waa-techs-composite-cylinders-stand-out', destination: '/our-products-and-advantages', permanent: true },
      { source: '/features-waatech-composite-cylinders-standout', destination: '/our-products-and-advantages', permanent: true },
      { source: '/waa-technologies-leading-the-future-of-lpg-composite-cylinders-with-innovation-safety-and-sustainability', destination: '/our-technology', permanent: true },
      { source: '/waa-technologies-leading-the-future-of-lpg-composite-cylinders-with-innovation-safety-and-sustainability-2', destination: '/our-technology', permanent: true },
      { source: '/lpg-fiber-cylinder-applications-in-the-automobile-sector', destination: '/our-technology', permanent: true },
    ];
  },
};

export default nextConfig;

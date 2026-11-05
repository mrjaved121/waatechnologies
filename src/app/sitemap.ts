import type { MetadataRoute } from 'next';
import { allPosts } from '@/lib/posts';

const base = 'https://waatechnologies.com';
const REDIRECTED = new Set([
  'the-science-of-assisting-with-leak-proof-fiber-lpg-cylinders',
  'the-science-supporting-leak-proof-fiber-lpg-cylinders',
  'blast-proof-technology-works-in-lpg-cylinders',
  'benefits-of-blast-proof-lpg-cylinders-household-safety',
  'benefits-of-blast-proof-lpg-cylinders',
  'why-more-families-choosing-waatechnologies-for-safer-lpg-storage-introduction',
  'why-more-families-choosing-waatechnologies-for-safer-lpg-storage-introduction-2',
  'how-lightweight-lpg-cylinders-are-affecting-the-sector',
  'smart-lpg-cylinders-iot-improves-efficiency-and-safety',
  'the-future-of-lpg-the-reason-fiber-cylinders-are-substituting-steel',
  'the-transformation-of-energy-storage-via-fiber-lpg-cylinders',
  'technologies-driving-the-change-from-steel-to-fiber-lpg-cylinders',
  'novel-ideas-guiding-the-transition-from-steel-to-fiber-lpg-cylinders',
  'composite-lpg-cylinders-over-traditional-metal-cylinders',
  '5-reasons-to-switch-to-composite-lpg-cylinders-for-your-home',
  '5-reasons-to-switch-to-composite-lpg-cylinder',
  'environmentally-friendly-gas-cylinder-toward-sustainable-energy-storage-as-knowledge-of-environmental-consequences-spreads-around-the-globe',
  'fiber-gas-cylinders-support-a-sustainable-future',
  'the-environmental-advantages-of-changing-to-fiber-lpg-cylinders',
  'fiber-lpg-cylinders-advantages-for-the-environment',
  'how-eco-friendly-lpg-fiber-cylinders-are-reducing-carbon-footprint-globally',
  'eco-friendly-lpg-fiber-cylinders-reducing-carbon',
  'a-greener-choice-the-eco-friendly-features-of-waa-composite-cylinders',
  'a-greener-choice-the-eco-friendly-features-of-waa-composite-cylinders-2',
  'the-eco-friendly-features-of-waa-composite-cylinders',
  'the-role-of-recyclable-materials-in-the-lpg-fiber-cylinder-manufacturing',
  'recyclable-materials-in-lpg-fiber-cylinder-manufacturing',
  'the-top-10-applications-for-lpg-fiber-cylinders-in-industries-and-homes',
  'how-fiber-cylinders-help-meet-industrial-and-construction-needs',
  'waatechnologies-blast-proof-cylinders-busy-restaurant-safety',
  'the-reasons-fiber-cylinders-are-ideal-for-barbecuing-and-outdoor-events',
  'waatechnologies-blast-proof-cylinder-public-event-safety',
  'waatechnologies-blast-proof-cylinder-outdoor-camping-safety',
  'camping-blast-proof-lpg-cylinders-outdoor-adventures',
  'fiber-gas-cylinders-in-marine-applications-safety-and-durability-advantages',
  'winter-heating',
  'the-future-of-lpg-cylinders',
  'lpg-industry-trends-the-growing-demand-for-composite-cylinders',
  'lpg-industry-trends-growing-demand-for-composite-cylinders',
  'why-waa-techs-lpg-cylinders-are-a-game-changer-for-the-energy-industry',
  'lpg-cylinders-game-changer-energy-industry',
  'best-practice-for-safely-using-lpg-composite-cylinders-at-home',
  'best-practices-for-safely-using-lpg-composite-cylinders',
  'top-5-features-that-make-waa-techs-composite-cylinders-stand-out',
  'features-waatech-composite-cylinders-standout',
  'waa-technologies-leading-the-future-of-lpg-composite-cylinders-with-innovation-safety-and-sustainability',
  'waa-technologies-leading-the-future-of-lpg-composite-cylinders-with-innovation-safety-and-sustainability-2',
  'lpg-fiber-cylinder-applications-in-the-automobile-sector',
]);
// Fixed date: avoids stamping every static page "today" on each build (Google discounts that). Bump when pages really change.
const now = new Date('2026-11-04');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                                         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/about-us`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/our-company`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/our-technology`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/sustainability`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/our-products-and-advantages`,        lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/authorized-dealers`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/waa-tech-stores`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/shop`,                               lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/blog`,                               lastModified: now, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${base}/category/casestudies`,               lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/category/waatechcylinders`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.65 },
    { url: `${base}/contact-us`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy-policy`,                     lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/returns`,                            lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ];

  const productSlugs = [
    '10-kg-fiber-gas-cylinder',
    '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan',
    'lpg-composite-cylinder-10kg-cerulean-blue',
    'lpg-composite-cylinder-10kg-tiger-orange',
    'lpg-composite-cylinder-10kg-traditional-blue',
  ];

  // Paginated blog list pages (/blog/page/N) are noindex, so they are not listed here.

  // Tag listing pages are intentionally excluded from the sitemap: most are thin
  // (noindex in the tag route) and including them dilutes crawl focus + inflates
  // "last modified today" signals across ~150 low-value URLs.

  // Slugs for the long-form 2500+ word blog posts — given highest priority
  const deepBlogSlugs = new Set([
    'how-to-store-lpg-cylinder-safely-home-pakistan-ogra-rules',
    'made-in-pakistan-waatechnologies-azadi-2026',
    'how-long-does-composite-lpg-cylinder-last-pakistan',
    'transparent-gas-cylinder-benefits-see-lpg-level-pakistan',
    'composite-cylinders-reduce-lifting-injuries-restaurants-pakistan',
    'composite-lpg-cylinders-food-trucks-street-vendors-pakistan',
    'are-composite-lpg-cylinders-safe-pakistan',
    'how-to-check-gas-level-composite-cylinder',
    'why-restaurants-switching-composite-lpg-cylinders-pakistan',
    'how-to-safely-connect-lpg-cylinder-regulator-at-home',
    '8-crucial-gas-cylinder-safety-rules-every-household-must-follow',
    'lpg-gas-shortage-pakistan-composite-cylinders-solution',
    'winter-gas-shortage-pakistan-2025-prepare-your-home',
    'ramadan-gas-safety-tips-pakistani-kitchens',
    'load-shedding-lpg-pakistanis-switching-gas-cooking',
    'gas-cylinder-blast-incidents-pakistan-2025',
    'ogra-rules-lpg-cylinders-pakistan',
    'steel-vs-composite-lpg-cylinder-pakistan',
    'why-lpg-cylinders-explode-pakistan-how-to-prevent',
    'psi-certified-gas-cylinder-pakistan',
    'gas-cylinder-warning-signs-pakistan',
    'composite-lpg-cylinder-price-pakistan-2025',
    'parco-vs-waa-technologies-cylinder-pakistan',
    'chinese-imported-vs-pakistani-composite-lpg-cylinder',
    'traditional-steel-gola-vs-fiber-lpg-cylinder-cost-pakistan',
    'composite-lpg-cylinder-lahore',
    'composite-lpg-cylinder-karachi',
    'composite-lpg-cylinder-islamabad',
    'lpg-industry-pakistan-market-size-future-outlook',
    'how-lpg-cylinders-tested-safety-pakistan',
    'ogra-licensed-lpg-cylinder-manufacturers-pakistan',
    'pakistan-lpg-imports-vs-domestic-production-2025',
    'best-lpg-gas-cylinder-pakistan-2026',
    'how-to-refill-composite-lpg-cylinder-pakistan',
  ]);

  return [
    ...staticPages,
    ...productSlugs.map((slug) => ({
      url: `${base}/product/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...allPosts.filter((post) => !REDIRECTED.has(post.slug)).map((post) => ({
      url: `${base}/${post.slug}`,
      // Real publish date, not build time — an always-"now" lastModified gives
      // Google no genuine freshness signal and gets discounted over time.
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: post.type === 'case-study' ? 0.7 : deepBlogSlugs.has(post.slug) ? 0.95 : 0.75,
    })),
  ];
}

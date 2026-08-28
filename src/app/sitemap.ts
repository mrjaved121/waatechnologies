import type { MetadataRoute } from 'next';
import { allPosts, getBlogPosts } from '@/lib/posts';

const base = 'https://waatechnologies.com';
const now = new Date();

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

  const blogPosts = getBlogPosts();
  const totalPages = Math.ceil(blogPosts.length / 10);
  const paginationPages: MetadataRoute.Sitemap = Array.from({ length: totalPages - 1 }, (_, i) => ({
    url: `${base}/blog/page/${i + 2}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  const allTags = new Set<string>();
  allPosts.forEach((p) => p.tags?.forEach((t) => allTags.add(t)));

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
  ]);

  return [
    ...staticPages,
    ...productSlugs.map((slug) => ({
      url: `${base}/product/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...allPosts.map((post) => ({
      url: `${base}/${post.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: post.type === 'case-study' ? 0.7 : deepBlogSlugs.has(post.slug) ? 0.95 : 0.75,
    })),
    ...paginationPages,
    ...Array.from(allTags).map((tag) => ({
      url: `${base}/tag/${tag}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.45,
    })),
  ];
}

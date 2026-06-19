import type { MetadataRoute } from 'next';
import { allPosts, getBlogPosts } from '@/lib/posts';

const base = 'https://waatechnologies.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about-us`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/our-company`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/our-technology`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/sustainability`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/our-products-and-advantages`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/authorized-dealers`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/waa-tech-stores`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/shop`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/category/casestudies`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/category/waatechcylinders`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/contact-us`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/author/admin`, changeFrequency: 'weekly', priority: 0.4 },
    { url: `${base}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/returns`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const productSlugs = [
    '10-kg-fiber-gas-cylinder',
    '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan',
    'lpg-composite-cylinder-10kg-cerulean-blue',
    'lpg-composite-cylinder-10kg-tiger-orange',
    'lpg-composite-cylinder-10kg-traditional-blue',
  ];

  // Blog pagination
  const blogPosts = getBlogPosts();
  const totalPages = Math.ceil(blogPosts.length / 10);
  const paginationPages: MetadataRoute.Sitemap = Array.from({ length: totalPages - 1 }, (_, i) => ({
    url: `${base}/blog/page/${i + 2}`,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  // All tags
  const allTags = new Set<string>();
  allPosts.forEach((p) => p.tags?.forEach((t) => allTags.add(t)));

  return [
    ...staticPages,
    ...productSlugs.map((slug) => ({
      url: `${base}/product/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...allPosts.map((post) => ({
      url: `${base}/${post.slug}`,
      changeFrequency: 'monthly' as const,
      priority: post.type === 'case-study' ? 0.7 : 0.6,
    })),
    ...paginationPages,
    ...Array.from(allTags).map((tag) => ({
      url: `${base}/tag/${tag}`,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
  ];
}

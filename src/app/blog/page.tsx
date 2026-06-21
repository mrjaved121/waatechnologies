import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — LPG & Composite Cylinder Insights',
  description:
    'WAA Technologies blog — expert insights on composite LPG cylinders, safety, sustainability, and the future of gas storage in Pakistan.',
  alternates: { canonical: 'https://waatechnologies.com/blog' },
};

const posts = [
  {
    title: 'LPG Gas Shortage in Pakistan: Why Composite Cylinders Are the Solution',
    slug: 'lpg-gas-shortage-pakistan-composite-cylinders-solution',
    date: 'Jun 21, 2026',
    category: 'WAATechCylinders',
    excerpt: 'Pakistan faces recurring LPG shortages driven by supply chain bottlenecks and ageing infrastructure. Composite cylinders — lighter, more durable, and stackable — are a practical part of the solution every household can adopt today.',
  },
  {
    title: 'Winter Gas Shortage Pakistan 2025 — Prepare Your Home',
    slug: 'winter-gas-shortage-pakistan-2025-prepare-your-home',
    date: 'Jun 21, 2026',
    category: 'WAATechCylinders',
    excerpt: 'Every winter, millions of Pakistani households face acute gas shortages. Here is how to prepare your home before the cold hits — and why an LPG composite cylinder is the most reliable backup you can have.',
  },
  {
    title: 'Ramadan Gas Safety Tips for Pakistani Kitchens',
    slug: 'ramadan-gas-safety-tips-pakistani-kitchens',
    date: 'Jun 21, 2026',
    category: 'WAATechCylinders',
    excerpt: 'Sehri and Iftar cooking marathons significantly increase kitchen gas usage during Ramadan. Follow these essential LPG safety tips — and understand why a composite cylinder makes every Pakistani kitchen safer this holy month.',
  },
  {
    title: 'Load Shedding and LPG: Why More Pakistanis Are Switching to Gas Cooking',
    slug: 'load-shedding-lpg-pakistanis-switching-gas-cooking',
    date: 'Jun 21, 2026',
    category: 'WAATechCylinders',
    excerpt: 'With electricity load shedding stretching 10–14 hours in parts of Pakistan, LPG-powered cooking has become the practical choice for millions of households. Here is why composite cylinders are the smartest way to make the switch.',
  },
  {
    title: 'Cost Benefits of Composite LPG Cylinders: A Smart Investment for 2025',
    slug: 'cost-benefits-of-composite-lpg-cylinders-a-smart-investment-for-2025',
    date: 'May 2, 2025',
    category: 'WAATechCylinders',
    excerpt: 'Composite LPG cylinders may have a higher upfront cost than steel, but their 20+ year lifespan, zero maintenance, and safety benefits make them the smarter long-term investment.',
  },
  {
    title: 'The Science of Assisting with Leak-Proof Fiber LPG Cylinders',
    slug: 'the-science-of-assisting-with-leak-proof-fiber-lpg-cylinders',
    date: 'Feb 11, 2025',
    category: 'WAATechCylinders',
    excerpt: 'Exploring the engineering principles behind WAA\'s jointless composite design and how it virtually eliminates gas leakage compared to traditional welded steel cylinders.',
  },
  {
    title: 'How Lightweight LPG Cylinders Are Affecting the Sector',
    slug: 'how-lightweight-lpg-cylinders-are-affecting-the-sector',
    date: 'Feb 11, 2025',
    category: 'WAATechCylinders',
    excerpt: 'The shift from heavy steel to lightweight composite cylinders is reshaping Pakistan\'s LPG distribution sector — from transport logistics to retail convenience.',
  },
  {
    title: 'Environmentally Friendly Gas Cylinder: Toward Sustainable Energy Storage',
    slug: 'environmentally-friendly-gas-cylinder-toward-sustainable-energy-storage-as-knowledge-of-environmental-consequences-spreads-around-the-globe',
    date: 'Feb 10, 2025',
    category: 'WAATechCylinders',
    excerpt: 'As environmental consciousness grows globally, composite cylinders emerge as the sustainable alternative — using 70% less material and lasting twice as long as steel.',
  },
  {
    title: 'Smart LPG Cylinders: IoT Improves Efficiency and Safety',
    slug: 'smart-lpg-cylinders-iot-improves-efficiency-and-safety',
    date: 'Feb 10, 2025',
    category: 'WAATechCylinders',
    excerpt: 'The next frontier for LPG safety: how IoT sensors and smart monitoring are being integrated with composite cylinder designs to deliver real-time usage data.',
  },
  {
    title: 'The Future of LPG: The Reason Fiber Cylinders Are Substituting Steel',
    slug: 'the-future-of-lpg-the-reason-fiber-cylinders-are-substituting-steel',
    date: 'Feb 10, 2025',
    category: 'WAATechCylinders',
    excerpt: 'Steel LPG cylinders dominated for decades, but composite fiber technology is now rapidly replacing them globally. Here\'s the technical and economic case for the transition.',
  },
  {
    title: 'The Transformation of Energy Storage via Fiber LPG Cylinders',
    slug: 'the-transformation-of-energy-storage-via-fiber-lpg-cylinders',
    date: 'Feb 10, 2025',
    category: 'WAATechCylinders',
    excerpt: 'Fiber composite cylinders are not just safer — they represent a fundamental transformation in how households and businesses store and use portable energy.',
  },
  {
    title: 'Eco Friendly Gas Cylinder: The Future of Sustainable Energy Storage',
    slug: 'eco-friendly-gas-cylinder',
    date: 'Feb 9, 2025',
    category: 'WAATechCylinders',
    excerpt: 'Composite cylinders reduce manufacturing emissions, use less material, and last longer — making them the most eco-friendly LPG storage solution available today.',
  },
  {
    title: 'The Science Supporting Leak-Proof Fiber LPG Cylinders',
    slug: 'the-science-supporting-leak-proof-fiber-lpg-cylinders',
    date: 'Feb 7, 2025',
    category: 'WAATechCylinders',
    excerpt: 'A deep dive into the materials science and manufacturing processes that make WAA composite cylinders inherently more leak-resistant than traditional steel alternatives.',
  },
  {
    title: 'Technologies Driving the Change from Steel to Fiber LPG Cylinders',
    slug: 'technologies-driving-the-change-from-steel-to-fiber-lpg-cylinders',
    date: 'Feb 7, 2025',
    category: 'WAATechCylinders',
    excerpt: 'CNC filament winding, HDPE liners, and advanced resin systems — the key manufacturing technologies enabling the global transition to composite LPG cylinders.',
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="gradient-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Blog</span>
          </div>
          <h1 className="text-5xl font-black mb-4">Blog</h1>
          <p className="text-green-100 text-xl max-w-2xl">
            Expert insights on composite LPG cylinders, safety, and Pakistan&apos;s energy future.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Post */}
          <div className="mb-14">
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-green-800 to-green-600 min-h-64 flex items-center justify-center p-10">
                <div className="text-white text-center">
                  <div className="text-5xl mb-4">📰</div>
                  <div className="text-sm font-semibold text-green-200 uppercase tracking-wider">Featured Post</div>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">{featured.category}</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-3 leading-snug">
                  <Link href={`/${featured.slug}`} className="hover:text-green-700 transition-colors">{featured.title}</Link>
                </h2>
                <p className="text-slate-600 mb-5 leading-relaxed">{featured.excerpt}</p>
                <Link href={`/${featured.slug}`} className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* All Posts */}
          <h2 className="text-2xl font-black text-slate-900 mb-8">All Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.slug} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow card-hover">
                <div className="bg-gradient-to-br from-slate-100 to-green-50 h-40 flex items-center justify-center">
                  <div className="text-3xl">📋</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 leading-snug">
                    <Link href={`/${post.slug}`} className="hover:text-green-700 transition-colors">{post.title}</Link>
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <Link href={`/${post.slug}`} className="inline-flex items-center gap-1 text-green-700 text-sm font-semibold hover:text-green-800 transition-colors">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Link */}
      <section className="py-12 bg-amber-50 border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-black text-slate-900 text-xl mb-1">Real-World Case Studies</h3>
            <p className="text-slate-500">See how WAA cylinders have prevented accidents across Pakistan.</p>
          </div>
          <Link href="/category/casestudies" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-all flex-shrink-0">
            View Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { getBlogPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog — LPG & Composite Cylinder Insights | WAATechnologies',
  description:
    'WAATechnologies blog — expert insights on composite LPG cylinders, safety, sustainability, and the future of gas storage in Pakistan.',
  keywords: ['composite LPG cylinders Pakistan', 'LPG cylinder safety', 'fiber gas cylinder blog', 'WAATechnologies blog'],
  alternates: { canonical: 'https://waatechnologies.com/blog' },
  openGraph: {
    title: 'Blog — LPG & Composite Cylinder Insights | WAATechnologies',
    description: 'Expert insights on composite LPG cylinders, safety, sustainability, and the future of gas storage in Pakistan.',
    url: 'https://waatechnologies.com/blog',
    siteName: 'WAATechnologies',
    locale: 'en_PK',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'WAATechnologies Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — LPG & Composite Cylinder Insights | WAATechnologies',
    description: 'Expert insights on composite LPG cylinders, safety, and Pakistan\'s energy future.',
    images: ['/images/og-image.jpg'],
  },
};

const PER_PAGE = 10;

export default function BlogPage() {
  const all = getBlogPosts();
  const totalPages = Math.ceil(all.length / PER_PAGE);
  const page1 = all.slice(0, PER_PAGE);
  const [featured, ...rest] = page1;

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
              <div className="relative min-h-64 overflow-hidden">
                <Image
                  src="/images/post-image.jpg"
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold bg-green-100 text-green-900 px-2.5 py-1 rounded-full">{featured.category}</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-3 leading-snug">
                  <Link href={`/${featured.slug}`} className="hover:text-green-900 transition-colors">{featured.title}</Link>
                </h2>
                <p className="text-slate-600 mb-5 leading-relaxed">{featured.excerpt}</p>
                <Link href={`/${featured.slug}`} className="inline-flex items-center gap-2 text-green-900 font-semibold hover:text-green-950 transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <h2 className="text-2xl font-black text-slate-900 mb-8">All Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.slug} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow card-hover">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/post-image.jpg"
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold bg-green-100 text-green-900 px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 leading-snug">
                    <Link href={`/${post.slug}`} className="hover:text-green-900 transition-colors">{post.title}</Link>
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <Link href={`/${post.slug}`} className="inline-flex items-center gap-1 text-green-900 text-sm font-semibold hover:text-green-950 transition-colors">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={p === 1 ? '/blog' : `/blog/page/${p}`}
                className={`w-9 h-9 flex items-center justify-center rounded-xl text-sm font-bold transition-colors ${p === 1 ? 'bg-green-900 text-white' : 'border border-slate-200 text-slate-600 hover:border-green-300 hover:text-green-900'}`}
              >
                {p}
              </Link>
            ))}
            <Link href="/blog/page/2" className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:border-green-300 hover:text-green-900 transition-colors text-sm font-medium">
              Next <ArrowRight className="w-4 h-4" />
            </Link>
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

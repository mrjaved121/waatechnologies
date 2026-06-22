import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, ArrowLeft } from 'lucide-react';
import { getBlogPosts } from '@/lib/posts';

const PER_PAGE = 10;

type Props = { params: Promise<{ page: string }> };

export async function generateStaticParams() {
  const total = getBlogPosts().length;
  const pages = Math.ceil(total / PER_PAGE);
  return Array.from({ length: pages }, (_, i) => ({ page: String(i + 1) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Blog — Page ${page}`,
    description: `WAA Technologies blog — page ${page}. Expert insights on composite LPG cylinders, safety, and Pakistan's energy future.`,
    alternates: { canonical: `https://waatechnologies.com/blog/page/${page}` },
  };
}

export default async function BlogPaginationPage({ params }: Props) {
  const { page } = await params;
  const pageNum = Math.max(1, parseInt(page, 10));
  const all = getBlogPosts();
  const totalPages = Math.ceil(all.length / PER_PAGE);
  const posts = all.slice((pageNum - 1) * PER_PAGE, pageNum * PER_PAGE);

  return (
    <>
      <section className="gradient-green py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <Link href="/blog" className="text-green-200 hover:text-white text-sm transition-colors">Blog</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Page {pageNum}</span>
          </div>
          <h1 className="text-4xl font-black mb-2">Blog — Page {pageNum}</h1>
          <p className="text-green-100">Showing {(pageNum - 1) * PER_PAGE + 1}–{Math.min(pageNum * PER_PAGE, all.length)} of {all.length} articles</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow card-hover">
                <div className="relative h-48 overflow-hidden">
                  <Image src="/images/post-image.png" alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  </div>
                  <h2 className="font-bold text-slate-900 mb-2 leading-snug">
                    <Link href={`/${post.slug}`} className="hover:text-green-700 transition-colors">{post.title}</Link>
                  </h2>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link href={`/${post.slug}`} className="inline-flex items-center gap-1 text-green-700 text-sm font-semibold hover:text-green-800">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            {pageNum > 1 && (
              <Link href={pageNum - 1 === 1 ? '/blog' : `/blog/page/${pageNum - 1}`} className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:border-green-300 hover:text-green-700 transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Previous
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={p === 1 ? '/blog' : `/blog/page/${p}`}
                className={`w-9 h-9 flex items-center justify-center rounded-xl text-sm font-bold transition-colors ${p === pageNum ? 'bg-green-700 text-white' : 'border border-slate-200 text-slate-600 hover:border-green-300 hover:text-green-700'}`}
              >
                {p}
              </Link>
            ))}
            {pageNum < totalPages && (
              <Link href={`/blog/page/${pageNum + 1}`} className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:border-green-300 hover:text-green-700 transition-colors text-sm font-medium">
                Next <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { allPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Posts by WAA Technologies',
  description: 'All blog posts and case studies published by WAA Technologies.',
  alternates: { canonical: 'https://waatechnologies.com/author/admin' },
};

export default function AuthorAdminPage() {
  const posts = allPosts.slice(0, 12);
  return (
    <>
      <section className="gradient-green py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Author: WAA Technologies</span>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center">
              <span className="text-white font-black text-lg">WAA</span>
            </div>
            <div>
              <h1 className="text-3xl font-black">WAA Technologies</h1>
              <p className="text-green-200">Pakistan&apos;s composite LPG cylinder experts</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                </div>
                <h2 className="font-bold text-slate-900 mb-3 leading-snug">
                  <Link href={`/${post.slug}`} className="hover:text-green-700 transition-colors">{post.title}</Link>
                </h2>
                <Link href={`/${post.slug}`} className="inline-flex items-center gap-1 text-green-700 text-sm font-semibold hover:text-green-800">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-all">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

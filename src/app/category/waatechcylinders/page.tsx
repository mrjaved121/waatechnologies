import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { getBlogPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'WAATechCylinders — Blog Category',
  description:
    'All WAA Technologies blog posts about composite LPG cylinders — safety, sustainability, technology, and industry insights.',
  alternates: { canonical: 'https://waatechnologies.com/category/waatechcylinders' },
};

export default function WaaTechCylindersCategory() {
  const posts = getBlogPosts();
  return (
    <>
      <section className="gradient-green py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <Link href="/blog" className="text-green-200 hover:text-white text-sm transition-colors">Blog</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">WAATechCylinders</span>
          </div>
          <h1 className="text-4xl font-black mb-3">Category: WAATechCylinders</h1>
          <p className="text-green-100">{posts.length} articles on composite LPG cylinder technology, safety, and sustainability.</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <Link href={`/${post.slug}`} className="inline-flex items-center gap-1 text-green-700 text-sm font-semibold hover:text-green-800 transition-colors">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

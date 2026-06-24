import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { allPosts } from '@/lib/posts';

type Props = { params: Promise<{ tag: string }> };

export async function generateStaticParams() {
  const tags = new Set<string>();
  allPosts.forEach((p) => p.tags?.forEach((t) => tags.add(t)));
  return Array.from(tags).map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const label = tag.replace(/-/g, ' ');
  return {
    title: `${label} — Tag`,
    description: `All WAATechnologies articles tagged with "${label}".`,
    alternates: { canonical: `https://waatechnologies.com/tag/${tag}` },
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const label = tag.replace(/-/g, ' ');
  const posts = allPosts.filter((p) => p.tags?.includes(tag));

  return (
    <>
      <section className="gradient-green py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Tag: {label}</span>
          </div>
          <h1 className="text-4xl font-black mb-2 capitalize">Tag: {label}</h1>
          <p className="text-green-100">{posts.length} article{posts.length !== 1 ? 's' : ''} found.</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image src="/images/post-image.jpg" alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold bg-green-100 text-green-900 px-2 py-0.5 rounded-full">{post.category}</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    </div>
                    <h2 className="font-bold text-slate-900 mb-3 leading-snug">
                      <Link href={`/${post.slug}`} className="hover:text-green-900 transition-colors">{post.title}</Link>
                    </h2>
                    <Link href={`/${post.slug}`} className="inline-flex items-center gap-1 text-green-900 text-sm font-semibold hover:text-green-950 transition-colors">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-500 mb-4">No posts found for this tag.</p>
              <Link href="/blog" className="text-green-900 font-semibold hover:text-green-950">Browse all posts →</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

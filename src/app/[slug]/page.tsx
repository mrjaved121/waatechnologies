import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, MapPin, Tag, ArrowRight, ArrowLeft } from 'lucide-react';
import { allPosts, getPostBySlug } from '@/lib/posts';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://waatechnologies.com/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function PostContent({ slug }: { slug: string }) {
  const map: Record<string, string[]> = {
    'cost-benefits-of-composite-lpg-cylinders-a-smart-investment-for-2025': [
      'When comparing LPG cylinders purely on upfront price, steel cylinders appear cheaper. However, a comprehensive cost-benefit analysis over a 10-year ownership period reveals a very different story — one where WAA composite cylinders deliver significantly better value.',
      'Steel cylinders require periodic re-certification testing, rust treatment, and external painting to remain safe and compliant. These hidden maintenance costs accumulate rapidly. Composite cylinders, by contrast, are maintenance-free — their HDPE liner and fiberglass shell require no painting, no rust treatment, and no external inspection of the pressure vessel itself.',
      'WAA composite cylinders are rated for 12,000 pressure cycles and a service life exceeding 20 years under typical Pakistani household usage patterns. Steel cylinders average 10 years before mandatory retirement. Over a 20-year period, a household would typically need to replace a steel cylinder twice — purchasing the composite cylinder once and never again.',
      'Beyond direct cost, the financial risk exposure from a steel cylinder accident must be considered. Kitchen gas accidents involving steel cylinders cause property damage, medical expenses, and in worst cases, loss of life. WAA\'s non-blast design eliminates this risk entirely — an insurance benefit that cannot be easily quantified but is profoundly real.',
      'For businesses and large households consuming multiple cylinders, the economics are even more compelling. Bulk orders of WAA composite cylinders attract dealer pricing, further improving the return on investment. Contact our sales team to discuss corporate pricing.',
    ],
    'eco-friendly-gas-cylinder': [
      'The global conversation around sustainable energy has reached Pakistan\'s LPG sector — and composite gas cylinders are emerging as the clear environmental winner over traditional steel alternatives.',
      'Manufacturing a standard steel LPG cylinder requires significant iron ore extraction, steel smelting, welding, and surface treatment — each step contributing to carbon emissions and industrial waste. Composite cylinders use glass fibre and HDPE, both of which require less energy to produce and generate fewer emissions during manufacturing.',
      'The environmental advantage continues through the use phase. Composite cylinders are 50% lighter than steel, meaning every delivery truck can carry more units per trip — directly reducing transport fuel consumption and associated emissions across Pakistan\'s LPG distribution network.',
      'At end of life, composite cylinder components are recyclable. The HDPE liner can be reprocessed into new plastic products, and fiberglass can be ground for use in construction composites. This circularity contrasts sharply with steel cylinders, which often end up landfilled or illegally dismantled.',
      'WAA Technologies is committed to documenting and improving our environmental performance. We are currently developing lifecycle assessment data for our cylinders and will publish results in 2025. We invite industrial partners and NGOs interested in sustainable energy transitions to contact us for collaboration opportunities.',
    ],
  };

  const paragraphs = map[slug] ?? [
    'WAA Technologies composite LPG cylinders represent the most advanced gas storage technology available in Pakistan today. Built to ISO 11119-3 and EN 14427-2022 international standards, every cylinder leaving our Gujranwala facility is individually hydro-tested and air leakage tested before reaching the customer.',
    'The composite filament winding process creates a seamless, jointless pressure vessel that is inherently more resistant to failure than welded steel. Glass fibre wound over an HDPE liner creates a structure that, under extreme over-pressure conditions, leaks rather than ruptures — eliminating the blast and shrapnel risk that steel cylinders present.',
    'WAA cylinders are UV stabilised, corrosion-proof, and translucent — allowing users to visually monitor remaining LPG level without gauges or weighing. Their lightweight design (approximately 5.5 kg for a 10L cylinder) makes them easy for any household member to handle safely.',
    'Pakistan\'s LPG sector is at an inflection point. Regulatory pressure, consumer safety awareness, and international best practices are all converging to accelerate the transition from steel to composite cylinders. WAA Technologies is proud to be leading this transition from our manufacturing base in Pakistan.',
    'For more information about our products, certifications, or dealer opportunities, please visit our contact page or reach us directly at (+92) 4237815533.',
  ];

  return (
    <div className="prose prose-slate max-w-none prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5">
      {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const isCaseStudy = post.type === 'case-study';
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.type === post.type)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className={`py-16 text-white ${isCaseStudy ? 'bg-slate-900' : 'gradient-green'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-5">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            {isCaseStudy ? (
              <Link href="/category/casestudies" className="text-green-200 hover:text-white text-sm transition-colors">Case Studies</Link>
            ) : (
              <Link href="/blog" className="text-green-200 hover:text-white text-sm transition-colors">Blog</Link>
            )}
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium truncate">{post.title.slice(0, 50)}…</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${isCaseStudy ? 'bg-amber-400 text-slate-900' : 'bg-white/20 text-white'}`}>
              {isCaseStudy ? 'Case Study' : post.category}
            </span>
            {post.location && (
              <span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {post.location}
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-green-200">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span>By WAA Technologies</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main */}
            <article>
              {/* Lead */}
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8 pb-8 border-b border-slate-100">
                {post.excerpt}
              </p>

              {isCaseStudy && post.location && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    <span className="font-bold text-slate-900">Location: {post.location}</span>
                  </div>
                  <p className="text-slate-600 text-sm">This case study documents a real customer experience with WAA Technologies composite LPG cylinders.</p>
                </div>
              )}

              <PostContent slug={slug} />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2 items-center">
                    <Tag className="w-4 h-4 text-slate-400" />
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/tag/${tag}`}
                        className="text-xs bg-slate-100 hover:bg-green-100 text-slate-600 hover:text-green-700 px-3 py-1.5 rounded-full transition-colors font-medium"
                      >
                        {tag.replace(/-/g, ' ')}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10 flex gap-3">
                <Link
                  href={isCaseStudy ? '/category/casestudies' : '/blog'}
                  className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {isCaseStudy ? 'All Case Studies' : 'All Posts'}
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              <div className="bg-green-700 text-white rounded-2xl p-6">
                <h3 className="font-black text-lg mb-3">Ready to Switch?</h3>
                <p className="text-green-100 text-sm mb-4">100% explosion-proof composite cylinders available now.</p>
                <Link href="/shop" className="block text-center bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold py-2.5 rounded-xl transition-all text-sm">
                  Shop Now
                </Link>
                <Link href="/contact-us" className="block text-center mt-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 rounded-xl transition-all text-sm">
                  Contact Us
                </Link>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Find a Dealer</h3>
                <p className="text-slate-500 text-sm mb-3">Authorized dealers in Punjab, Sindh & KPK.</p>
                <Link href="/authorized-dealers" className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm hover:text-green-800">
                  View Dealers <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {relatedPosts.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                    {isCaseStudy ? 'More Case Studies' : 'Related Posts'}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {relatedPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/${p.slug}`}
                        className="text-sm text-slate-600 hover:text-green-700 transition-colors leading-snug"
                      >
                        {p.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

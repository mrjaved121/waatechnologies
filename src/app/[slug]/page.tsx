import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, MapPin, Tag, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
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
    },
  };
}

// Real article content keyed by slug
const articleContent: Record<string, React.ReactNode> = {
  'cost-benefits-of-composite-lpg-cylinders-a-smart-investment-for-2025': (
    <>
      <p>While composite LPG cylinders may have a higher initial price tag compared to traditional steel cylinders, their long-term cost benefits make them a smarter, more economical choice. Here&apos;s why investing in composite LPG cylinders from WAA Technologies is a smart investment for 2025 and beyond.</p>
      <h2>Durability &amp; Longevity</h2>
      <p>Composite cylinders last 20–30 years versus 10–15 years for steel, reducing replacement frequency and maintenance expenses since they are non-corrosive and maintenance-free. Over a 20-year period, a household would typically need to replace a steel cylinder twice — purchasing the composite cylinder once and never again.</p>
      <h2>Transportation Efficiency</h2>
      <p>Being significantly lighter than their steel counterparts — often weighing 50% less — composite cylinders lower fuel costs for distributors and reduce handling expenses for consumers. Every delivery truck can carry more units per trip, directly reducing transport fuel consumption across Pakistan&apos;s LPG distribution network.</p>
      <h2>Safety Advantages</h2>
      <p>Superior safety features may qualify businesses for lower insurance premiums and reduce accident-related liability costs through better corrosion and impact resistance. WAA&apos;s non-blast design eliminates explosion risk entirely — an insurance benefit that cannot be easily quantified but is profoundly real.</p>
      <h2>Environmental Benefits</h2>
      <p>The recyclable nature of composite cylinders avoids disposal fees and helps businesses comply with tightening environmental regulations. HDPE liners and glass fibre shells are both recyclable, minimising end-of-life waste.</p>
      <h2>Market Value</h2>
      <p>Composite cylinders maintain better resale value and appeal to modern consumers due to their design and functionality features. WAA Technologies manufactures cylinders meeting ISO 11119-3 and EN 14427 standards at their Gujranwala, Pakistan facility.</p>
      <p>WAA TECHNOLOGIES PVT LTD promise to ensure the quality of its each and every product. Lives are precious and we care for our customers and families lives.</p>
    </>
  ),
  'eco-friendly-gas-cylinder': (
    <>
      <p>As the world becomes more conscious of environmental impact, industries are shifting towards sustainable energy solutions. One such innovation is the eco-friendly gas cylinder — a game-changer in energy storage that reduces carbon emissions, enhances safety, and promotes recyclability. Unlike traditional steel cylinders, modern eco-friendly gas cylinders, especially fiber LPG cylinders, are designed to be lightweight, corrosion-free, and made from recyclable materials like fiberglass and HDPE (High-Density Polyethylene).</p>
      <h2>1. What Makes a Gas Cylinder Eco-Friendly?</h2>
      <p>An eco-friendly gas cylinder is designed with sustainability and efficiency in mind. Here&apos;s what makes these cylinders better for the planet:</p>
      <ul>
        <li><strong>Recyclable Materials:</strong> Made from materials like fiberglass and HDPE, reducing industrial waste.</li>
        <li><strong>Lower Carbon Footprint:</strong> Energy-efficient production means lower CO₂ emissions.</li>
        <li><strong>Longer Lifespan:</strong> More durable than steel cylinders, leading to fewer replacements.</li>
        <li><strong>Lightweight Design:</strong> Reduces fuel consumption in transportation, further lowering emissions.</li>
      </ul>
      <h2>2. The Environmental Benefits of Switching</h2>
      <p>Traditional steel gas cylinders corrode, leak, and require frequent replacements, contributing to environmental degradation. Eco-friendly gas cylinders reduce carbon emissions, have no corrosion or rust, are recyclable and reusable, and produce less waste due to their longer lifespan.</p>
      <h2>3. How Eco-Friendly Gas Cylinders Enhance Safety</h2>
      <p>Beyond sustainability, fiber LPG cylinders are safer than traditional steel cylinders. They feature leak-proof technology, explosion-resistant design, non-corrosive materials, and temperature &amp; UV resistance — ensuring durability in harsh weather conditions.</p>
      <h2>4. Applications of Eco-Friendly Gas Cylinders</h2>
      <p>The versatility of eco-friendly gas cylinders makes them suitable for home cooking, camping &amp; outdoor activities, industrial use, agriculture, and automotive &amp; transport applications.</p>
      <h2>Conclusion</h2>
      <p>The shift toward eco-friendly gas cylinders is not just a trend — it&apos;s a necessity for a more sustainable and energy-efficient future. By choosing WAA Technologies&apos; Eco-Friendly LPG Cylinders, you&apos;re investing in a sustainable, safe, and efficient energy storage solution. Make the smart choice today — switch to an eco-friendly gas cylinder and be a part of the sustainable energy revolution!</p>
    </>
  ),
  'waatechnologies-corrosion-resistant-cylinder-coastal-warehouse': (
    <>
      <p>The humidity and salt in the air made traditional metal cylinders used for distribution at a Karachi coastal metropolis warehouse vulnerable to corrosion. WAATechnologies addressed this by supplying composite cylinders that remained rust-free throughout extended storage periods.</p>
      <h2>The Challenge</h2>
      <p>A distribution warehouse in Karachi&apos;s coastal area was experiencing repeated incidents with traditional steel LPG cylinders. The combination of high humidity and salt-laden sea air was accelerating rust and corrosion on the cylinder bodies, creating safety risks and increasing replacement costs significantly.</p>
      <h2>The WAATechnologies Solution</h2>
      <p>The warehouse switched to WAATechnologies&apos; composite LPG cylinders. The HDPE outer layer and fiberglass composite shell are inherently resistant to moisture, salt, and corrosion — making them ideal for coastal and humid environments where steel cylinders fail rapidly.</p>
      <h2>The Impact</h2>
      <p>This upgrade enhanced safety when transporting cylinders to residential and commercial customers while reducing gas leakage risks. The company&apos;s composite cylinders strengthened facility security, minimized product deterioration, and facilitated safer delivery operations.</p>
      <p>This example illustrates how WAATechnologies composite cylinder technology maintains structural integrity in challenging maritime environments where rust typically poses significant challenges to conventional steel cylinders.</p>
    </>
  ),
  'preventing-tragedy-waatechnologies-blast-proof-cylinder-lahore': (
    <>
      <p>A family in Lahore switched to WAATechnologies&apos; blast-proof cylinder after experiencing a gas leak with their conventional LPG cylinder. What happened next demonstrated the life-saving value of composite cylinder technology.</p>
      <h2>The Incident</h2>
      <p>A client reported a small gas leak in a conventional LPG cylinder in a heavily populated Lahore residential area. Concerned about the safety of their family and neighbours, they switched to WAATechnologies&apos; blast-proof composite cylinder.</p>
      <h2>When the Cylinder Was Tested</h2>
      <p>One month after the switch, the WAATechnologies cylinder was accidentally knocked over due to heat and handling by children in the household. The cylinder&apos;s impact-resistant composite design prevented a potentially dangerous explosion that could have had devastating consequences in the densely populated neighbourhood.</p>
      <h2>Why This Matters</h2>
      <p>The incident underscores the importance of blast-proof equipment in residential areas with families and children. A conventional steel cylinder in the same situation could have ruptured and exploded, causing property damage, injuries, and potentially loss of life.</p>
      <h2>The WAATechnologies Difference</h2>
      <p>WAATechnologies composite cylinders are designed from the ground up to be non-blast. The glass fibre winding and HDPE liner create a pressure vessel that, under extreme conditions, will leak rather than rupture — eliminating the explosion and shrapnel risk that makes steel cylinder incidents so deadly.</p>
      <p>This case reinforces the critical need for safer LPG solutions in Pakistan&apos;s homes, particularly in densely populated urban areas where gas incidents can have catastrophic community-wide consequences.</p>
    </>
  ),
};

// Default content for posts without custom content
function DefaultContent({ post }: { post: ReturnType<typeof getPostBySlug> }) {
  if (!post) return null;
  return (
    <>
      <p>{post.excerpt}</p>
      <p>
        WAA Technologies composite LPG cylinders represent the most advanced gas storage technology
        available in Pakistan today. Built to ISO 11119-3 and EN 14427-2022 international standards,
        every cylinder leaving our Gujranwala facility is individually hydro-tested and air leakage
        tested before reaching the customer.
      </p>
      <p>
        The composite filament winding process creates a seamless, jointless pressure vessel that is
        inherently more resistant to failure than welded steel. Glass fibre wound over an HDPE liner
        creates a structure that, under extreme over-pressure conditions, leaks rather than ruptures
        — eliminating the blast and shrapnel risk that steel cylinders present.
      </p>
      <ul>
        <li>100% Explosion Proof — non-blast composite construction</li>
        <li>50% lighter than conventional steel cylinders (≈5.5 kg for 10L)</li>
        <li>UV resistant HDPE outer layer — safe in direct sunlight</li>
        <li>Corrosion free — never rusts in humid or coastal environments</li>
        <li>Translucent body — visually check LPG level at any time</li>
        <li>Approximately 12,000 pressure cycles — 20+ year service life</li>
      </ul>
      <p>
        WAA TECHNOLOGIES PVT LTD promise to ensure the quality of its each and every product.
        Lives are precious and we care for our customers and families lives.
      </p>
      <p>
        For more information, contact us at (+92) 4237815533 or visit our showroom at 172-A First Floor,
        Adjacent Bahria Grand Masjid, Sector E Commercial Bahria Town Lahore.
      </p>
    </>
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

  const content = articleContent[slug] ?? <DefaultContent post={post} />;

  return (
    <>
      {/* Hero */}
      <section className={`py-16 text-white ${isCaseStudy ? 'bg-slate-900' : 'gradient-green'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            {isCaseStudy ? (
              <Link href="/category/casestudies" className="text-green-200 hover:text-white text-sm transition-colors">Case Studies</Link>
            ) : (
              <Link href="/blog" className="text-green-200 hover:text-white text-sm transition-colors">Blog</Link>
            )}
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium line-clamp-1">{post.title}</span>
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

              <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4 prose-li:text-slate-600 prose-ul:my-4 prose-ul:list-disc prose-ul:pl-5 prose-strong:text-slate-800">
                {content}
              </div>

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

              <div className="mt-10">
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
                <p className="text-green-100 text-sm mb-4">
                  100% explosion-proof composite cylinders. ISO certified. Made in Pakistan.
                </p>
                <Link href="/shop" className="block text-center bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold py-2.5 rounded-xl transition-all text-sm">
                  Shop Now
                </Link>
                <Link href="/contact-us" className="block text-center mt-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 rounded-xl transition-all text-sm">
                  Contact Us
                </Link>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Key Benefits</h3>
                <div className="flex flex-col gap-2">
                  {['100% Explosion Proof', '50% Lighter than Steel', 'UV Resistant', 'Corrosion Free', 'ISO 9001-2015 Certified'].map((b) => (
                    <div key={b} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                  {isCaseStudy ? 'More Case Studies' : 'Related Posts'}
                </h3>
                <div className="flex flex-col gap-3">
                  {relatedPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/${p.slug}`}
                      className="text-sm text-slate-600 hover:text-green-700 transition-colors leading-snug flex items-start gap-1.5"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                      {p.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Find a Dealer</h3>
                <p className="text-slate-500 text-xs mb-3">Authorized dealers in Punjab, Sindh &amp; KPK.</p>
                <Link href="/authorized-dealers" className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm hover:text-green-800">
                  View Dealers <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

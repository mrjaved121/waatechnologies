import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real-world case studies showing how WAA Technologies\' blast-proof composite cylinders have prevented accidents and protected lives across Pakistan — Karachi, Lahore, Islamabad, and beyond.',
  alternates: { canonical: 'https://waatechnologies.com/category/casestudies' },
};

const caseStudies = [
  {
    title: 'WAATechnologies Prevents Corrosion-Related Incidents in a Coastal Warehouse',
    slug: 'waatechnologies-corrosion-resistant-cylinder-coastal-warehouse',
    date: 'Nov 6, 2024',
    location: 'Karachi',
    excerpt: 'A Karachi warehouse storing LPG experienced multiple incidents with rusted steel cylinders. After switching to WAA composite cylinders, zero corrosion-related incidents occurred over 12 months — even in the humid coastal environment.',
    icon: '🏭',
    outcome: 'Zero incidents in 12 months',
  },
  {
    title: 'Safe Cooking for Remote Campsites: WAATechnologies\' Cylinder Ensures a Secure Adventure',
    slug: 'waatechnologies-blast-proof-cylinder-outdoor-camping-safety',
    date: 'Nov 6, 2024',
    location: 'Thar Desert',
    excerpt: 'Outdoor adventurers in the Thar Desert needed LPG cylinders that could withstand extreme temperatures, UV exposure, and rough handling. WAA composite cylinders proved ideal for the harshest outdoor environments.',
    icon: '⛺',
    outcome: 'Safe cooking in extreme heat',
  },
  {
    title: 'Protecting Business Owners: WAATechnologies\' Solution in a Busy Restaurant Environment',
    slug: 'waatechnologies-blast-proof-cylinders-busy-restaurant-safety',
    date: 'Nov 6, 2024',
    location: 'Islamabad',
    excerpt: 'An Islamabad restaurant with high daily LPG usage was worried about the fire risk of steel cylinders in a busy kitchen. WAA\'s non-blast composite cylinders gave the owner and staff complete peace of mind.',
    icon: '🍽️',
    outcome: 'Complete kitchen safety achieved',
  },
  {
    title: 'Preventing Tragedy in a Residential Area: How WAATechnologies\' Blast-Proof Cylinder Avoided a Catastrophe',
    slug: 'preventing-tragedy-waatechnologies-blast-proof-cylinder-lahore',
    date: 'Nov 6, 2024',
    location: 'Lahore',
    excerpt: 'In a dense residential neighbourhood in Lahore, a kitchen fire tested WAA\'s cylinder under real-world conditions. The composite cylinder did not explode — confirming the non-blast design performs exactly as certified.',
    icon: '🏠',
    outcome: 'No explosion — family safe',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="gradient-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <Link href="/blog" className="text-green-200 hover:text-white text-sm transition-colors">Blog</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Case Studies</span>
          </div>
          <h1 className="text-5xl font-black mb-4">Case Studies</h1>
          <p className="text-green-100 text-xl max-w-2xl">
            Real-world stories of how WAA composite cylinders have protected lives and businesses across Pakistan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-8">
            {caseStudies.map((cs) => (
              <article key={cs.slug} className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden grid md:grid-cols-[280px_1fr] card-hover">
                <div className="relative min-h-48 overflow-hidden">
                  <Image src="/images/post-image.png" alt={cs.title} fill sizes="280px" className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-white text-center">
                    <div className="text-sm font-bold text-green-200 uppercase tracking-wider mb-2">Case Study</div>
                    <div className="bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full">
                      {cs.outcome}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs text-slate-400 flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{cs.location}</span>
                    <span className="text-xs text-slate-400 flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{cs.date}</span>
                  </div>
                  <h2 className="text-xl font-black text-slate-900 mb-3 leading-snug">
                    <Link href={`/${cs.slug}`} className="hover:text-green-700 transition-colors">{cs.title}</Link>
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">{cs.excerpt}</p>
                  <Link href={`/${cs.slug}`} className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors">
                    Read Full Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-3">Ready to Be Our Next Success Story?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">
            Join thousands of Pakistani households and businesses who have switched to WAA composite cylinders.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/shop" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 px-6 py-3 rounded-xl font-bold transition-all">
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/authorized-dealers" className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/25 transition-all">
              Find a Dealer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

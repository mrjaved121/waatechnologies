import type { Metadata } from 'next';
import Link from 'next/link';
import { Leaf, Heart, ShieldCheck, Recycle, Globe, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sustainability',
  description:
    'WAA Technologies is committed to environmental sustainability, health & safety, and ethical compliance. Learn how our composite LPG cylinders contribute to a greener Pakistan.',
  alternates: { canonical: 'https://waatechnologies.com/sustainability' },
};

const pillars = [
  {
    icon: Heart,
    title: 'Health & Safety',
    color: 'bg-red-50 text-red-600 border-red-100',
    points: [
      '100% non-blast design eliminates explosion risk in homes',
      'Non-static material reduces fire ignition probability',
      'No toxic residues — safe for food-preparation environments',
      'Hydro-tested to 1.5× working pressure before leaving factory',
      'User-friendly ergonomic design reduces handling injuries',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Ethics',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    points: [
      'Full compliance with ISO 11119-3, EN 14427-2022',
      'PEC approved and OGRA regulated operations',
      'Transparent product labelling and certification documentation',
      'Anti-counterfeiting security features on every cylinder',
      'Ethical supply chain — indigenously manufactured in Pakistan',
    ],
  },
  {
    icon: Leaf,
    title: 'Environment',
    color: 'bg-green-50 text-green-700 border-green-100',
    points: [
      'Composite cylinders use 70% less raw material than steel',
      'Zero rust/corrosion means no chemical leaching into soil',
      'Longer lifespan (20+ years) means fewer replacements, less waste',
      'Lightweight design reduces transport fuel consumption',
      'HDPE liner is recyclable at end of service life',
    ],
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="gradient-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <Link href="/about-us" className="text-green-200 hover:text-white text-sm transition-colors">About Us</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Sustainability</span>
          </div>
          <h1 className="text-5xl font-black mb-4">Sustainability</h1>
          <p className="text-green-100 text-xl max-w-2xl">
            Building a safer, greener Pakistan — one composite cylinder at a time.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Some Words About Us</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
              We care for our customers and families&apos; lives. WAA Technologies was founded on the
              belief that energy should be safe, accessible, and sustainable for every Pakistani household.
              Our commitment to sustainability runs through every stage of design, manufacture, distribution,
              and after-sales support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Our Pillars</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Three principles guide every decision we make at WAA Technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className={`rounded-2xl p-8 border ${p.color} card-hover`}>
                <div className={`w-14 h-14 rounded-xl ${p.color} flex items-center justify-center mb-5`}>
                  <p.icon className="w-7 h-7" />
                </div>
                <h3 className="font-black text-slate-900 text-xl mb-4">{p.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-current mt-1.5 flex-shrink-0 opacity-60" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Design &amp; Development Process</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our cylinder development follows a rigorous, sustainability-conscious design and testing
              process from concept to certification.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Global Standards', desc: 'Designed to ISO 11119-3 and EN 14427-2022 from day one — not retrofitted to comply.' },
              { icon: Recycle, title: 'Circular Design', desc: 'HDPE liners and glass fibre shells are both recyclable, minimising end-of-life waste.' },
              { icon: Sun, title: 'Solar-Ready', desc: 'Lightweight design pairs perfectly with solar energy systems for off-grid cooking solutions.' },
              { icon: ShieldCheck, title: 'Safety First', desc: 'Every design decision is evaluated against our primary metric: will this make Pakistan safer?' },
              { icon: Leaf, title: 'Reduced Footprint', desc: '70% less material than steel, lighter transport weight, and 2× longer lifespan equals less total waste.' },
              { icon: Heart, title: 'Community Impact', desc: 'Safer cylinders mean fewer household fires and gas accidents in Pakistani communities.' },
            ].map((card) => (
              <div key={card.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 card-hover">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center mb-4">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

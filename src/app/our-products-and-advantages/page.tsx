import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Zap, Feather, Droplets, Sun, Shield, Award } from 'lucide-react';

const productImages: Record<string, string> = {
  '10-kg-fiber-gas-cylinder': '/images/10kg-cylinder-yellow.jpg',
  '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan': '/images/5kg-cylinder.jpg',
  'lpg-composite-cylinder-10kg-cerulean-blue': '/images/10kg-blue-Fiber-cylinder.jpg',
  'lpg-composite-cylinder-10kg-tiger-orange': '/images/10kg-cylinder-orange.jpg',
  'lpg-composite-cylinder-10kg-traditional-blue': '/images/10kg-blue-Fiber-cylinder.jpg',
};

export const metadata: Metadata = {
  title: 'Our Products And Advantages',
  description:
    'Explore WAATechnologies\' composite LPG cylinders — 5kg, 10kg, and 15kg. 100% explosion-proof, lightweight, UV resistant, corrosion-proof, translucent, ISO certified.',
  alternates: { canonical: 'https://waatechnologies.com/our-products-and-advantages' },
};

const products = [
  { name: '10 Kg Fiber Gas Cylinder Price in Pakistan', slug: '10-kg-fiber-gas-cylinder', price: 11000 },
  { name: '5 Kg LPG Fiber Gas Cylinder in Pakistan', slug: '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan', price: 8000, oldPrice: 8500 },
  { name: 'LPG Composite Cylinder 10Kg Cerulean Blue', slug: 'lpg-composite-cylinder-10kg-cerulean-blue', price: 11000 },
  { name: 'LPG Composite Cylinder 10Kg Tiger Orange', slug: 'lpg-composite-cylinder-10kg-tiger-orange', price: 11000 },
  { name: 'LPG Composite Cylinder 10Kg Traditional Blue', slug: 'lpg-composite-cylinder-10kg-traditional-blue', price: 11000 },
];

const advantages = [
  { icon: Feather, title: 'Extremely Lite in Weight', desc: 'WAA Tech Cylinders are user friendly due to the attractive design and 50% lighter than conventional cylinder. Its weight is 5.5 kg approximately.' },
  { icon: Award, title: 'Attractive in Color and Shape', desc: 'Available in multiple attractive colors — Cerulean Blue, Tiger Orange, Traditional Blue, and Yellow. WAA cylinders can be customized as per customer brand preferences.' },
  { icon: Droplets, title: 'Rust and Corrosion Proof', desc: "WAA Tech Composite Cylinder is corrosion free as it doesn't leave stain on kitchen floor or anywhere else. It never gets corrode even in humid or coastal areas." },
  { icon: Sun, title: 'UV Resistant', desc: 'WAA Tech Cylinder is UV resistant to effects from sun, rain and temperature due to atmospheric variations and rough handling. Cylinder color will not be altered even after prolong usage.' },
  { icon: Shield, title: 'Translucent Against Light', desc: 'The translucent body allows users to visually check the LPG level at any time — no need for gauges, weighing, or guessing how much gas remains.' },
  { icon: Zap, title: '100% Explosion Proof', desc: 'WAA Tech Cylinders quality assures 100% safety from explosion. Highly safe composite material does not blast unlike metal cylinders even engulfed in fire.' },
];

export default function ProductsAndAdvantagesPage() {
  return (
    <>
      <section className="gradient-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <Link href="/about-us" className="text-green-200 hover:text-white text-sm transition-colors">About Us</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Our Products And Advantages</span>
          </div>
          <h1 className="text-5xl font-black mb-4">Our Products And Advantages</h1>
          <p className="text-green-100 text-xl max-w-2xl">
            Most Importantly — 100% Explosion Proof.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Why WAA Cylinders?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              There are many advantages of our cylinders which make them totally different from standard
              steel cylinders. Every cylinder is tested and proven to be Explosion Free even engulfed in fire.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {advantages.map((a) => (
              <div key={a.title} className="bg-slate-50 rounded-2xl p-7 border border-slate-100 card-hover">
                <div className="w-14 h-14 bg-green-100 text-green-700 rounded-xl flex items-center justify-center mb-5">
                  <a.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{a.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Testing */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-4">Safety Testing on Every Cylinder</h2>
            <p className="text-green-100 leading-relaxed mb-5">
              WAA Tech Cylinders quality assures 100% safety from explosion. Highly safe composite material
              does not hold either static electricity or become engulfed in fire because of their appealing
              shape and 50% less synthetic material than standard cylinders.
            </p>
            <p className="text-green-100 leading-relaxed mb-6">
              The cylinders feature jointless technology of pressure tensile to minimize leakage.
              Every cylinder undergoes hydro testing and air leakage testing before leaving our facility.
              The translucent body allows users to check LPG levels visually, and the design prevents
              LPG from freezing due to kitchen temperatures.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                'Hydro tested to 1.5× working pressure',
                'Air leakage tested — zero defects leave factory',
                'Jointless pressure tensile design',
                'Approximately 12,000 cycle lifespan',
                'Indigenously manufactured under engineer oversight',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-green-100 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: '100%', label: 'Explosion Proof', sub: 'Non-blast by design' },
              { val: '50%', label: 'Lighter', sub: 'Vs. steel cylinders' },
              { val: '5.5 kg', label: 'Empty Weight', sub: '10L cylinder' },
              { val: '12,000', label: 'Pressure Cycles', sub: '20+ year lifespan' },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center">
                <div className="text-2xl font-black text-amber-300 mb-1">{s.val}</div>
                <div className="text-white font-semibold text-sm">{s.label}</div>
                <div className="text-green-200 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Cylinders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Our Cylinders</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Lives are precious and we care for our customers and their families.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {products.map((p) => (
              <Link key={p.slug} href={`/product/${p.slug}`} className="product-card group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <div className="relative bg-gradient-to-br from-slate-50 to-green-50 aspect-square flex items-center justify-center overflow-hidden">
                  {'oldPrice' in p && p.oldPrice && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">SALE</span>
                  )}
                  {productImages[p.slug] ? (
                    <Image
                      src={productImages[p.slug]}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 20vw"
                      className="object-contain p-5 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-28 mx-auto bg-gradient-to-b from-blue-400 to-blue-700 rounded-[40%_40%_50%_50%/30%_30%_60%_60%] shadow-lg" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug group-hover:text-green-700 transition-colors">{p.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    {'oldPrice' in p && p.oldPrice && (
                      <span className="text-xs text-slate-400 line-through">₨ {p.oldPrice.toLocaleString()}</span>
                    )}
                    <span className="text-base font-black text-green-700">₨ {p.price.toLocaleString()}</span>
                  </div>
                  <button className="w-full bg-slate-900 hover:bg-green-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors">Add to Cart</button>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/shop" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-md">
              View All in Shop <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

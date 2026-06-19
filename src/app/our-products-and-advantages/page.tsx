import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap, Feather, Droplets, Sun, Shield, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Products And Advantages',
  description:
    'Explore WAA Technologies\' full range of composite LPG cylinders — 5kg, 10kg, 14kg, and 15kg. 100% explosion-proof, lightweight, UV resistant, and corrosion-proof.',
  alternates: { canonical: 'https://waatechnologies.com/our-products-and-advantages' },
};

const products = [
  { name: '5 Kg LPG Fiber Gas Cylinder', slug: '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan', price: 8000, oldPrice: 8500, weight: '5 kg', color: 'Blue' },
  { name: '10 Kg Fiber Gas Cylinder', slug: '10-kg-fiber-gas-cylinder', price: 11000, weight: '10 kg', color: 'Yellow' },
  { name: 'LPG Composite 10Kg Cerulean Blue', slug: 'lpg-composite-cylinder-10kg-cerulean-blue', price: 11000, weight: '10 kg', color: 'Cerulean Blue' },
  { name: 'LPG Composite 10Kg Tiger Orange', slug: 'lpg-composite-cylinder-10kg-tiger-orange', price: 11000, weight: '10 kg', color: 'Tiger Orange' },
  { name: 'LPG Composite 15Kg Traditional Blue', slug: 'lpg-composite-cylinder-10kg-traditional-blue', price: 11000, weight: '15 kg', color: 'Traditional Blue' },
];

const advantages = [
  { icon: Zap, title: '100% Explosion Proof', desc: 'Jointless composite construction means zero shrapnel, zero blast — ever. The safest LPG cylinder available in Pakistan.' },
  { icon: Feather, title: 'Extremely Lightweight', desc: 'WAA 10L cylinder weighs only 5.5 kg empty — up to 50% lighter than equivalent steel cylinders. Easy to move and handle.' },
  { icon: Droplets, title: 'Corrosion Resistant', desc: 'HDPE liner and glass fibre shell cannot rust or corrode. Safe in wet, coastal, or humid environments indefinitely.' },
  { icon: Sun, title: 'UV Resistant', desc: 'HDPE UV-stabilised outer layer protects against sun degradation — safe to store outdoors in direct sunlight.' },
  { icon: Shield, title: 'Translucent Body', desc: 'See exactly how much LPG remains without measuring or weighing. A unique advantage of composite design.' },
  { icon: Award, title: '20+ Year Lifespan', desc: 'Rated for 12,000 pressure cycles — far exceeding the typical 20-year household usage life. Exceptional long-term value.' },
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
            Most importantly — 100% Explosion Proof.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Why WAA Cylinders?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              There are many advantages of our cylinders which make them totally different from
              standard steel cylinders.
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

      {/* Solar Home section */}
      <section className="py-16 bg-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              The Power of Your Solar Energy Home
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              WAA composite cylinders are the ideal partner for Pakistan&apos;s growing solar energy
              households. Lightweight and portable, they complement solar cooking setups, backup power
              systems, and off-grid living — contributing to a truly sustainable home energy stack.
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              {['Lightweight — easy to move alongside solar appliances', 'No rust in humid or outdoor solar setups', 'Translucent — monitor gas level without power', 'Long lifespan matches solar panel investment horizon'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-amber-100 text-center">
            <div className="text-6xl mb-4">☀️</div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Solar + WAA Gas</h3>
            <p className="text-slate-500">The perfect home energy combination for modern Pakistani households.</p>
          </div>
        </div>
      </section>

      {/* Our Cylinders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Our Cylinders</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {products.map((p) => (
              <Link key={p.slug} href={`/product/${p.slug}`} className="product-card group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <div className="relative bg-gradient-to-br from-slate-50 to-green-50 aspect-square flex items-center justify-center overflow-hidden">
                  {p.oldPrice && <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">SALE</span>}
                  <div className="product-card-img text-center py-8">
                    <div className="w-16 h-28 mx-auto bg-gradient-to-b from-amber-300 to-amber-500 rounded-[40%_40%_50%_50%/30%_30%_60%_60%] shadow-lg" />
                    <div className="mt-2 text-xs text-slate-400 font-medium">{p.color}</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug group-hover:text-green-700 transition-colors">{p.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    {p.oldPrice && <span className="text-xs text-slate-400 line-through">₨ {p.oldPrice.toLocaleString()}</span>}
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

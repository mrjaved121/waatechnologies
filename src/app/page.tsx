import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield, Zap, Feather, Sun, Droplets, Award,
  ChevronRight, Star, CheckCircle2, ArrowRight, Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'WAA Technologies | Non-Blast Composite LPG Gas Cylinders Pakistan',
  description:
    "WAA Technologies — Pakistan's leading composite LPG cylinder manufacturer. 100% explosion-proof, lightweight, UV resistant, ISO certified. Shop 5kg, 10kg & 14kg cylinders.",
  alternates: { canonical: 'https://waatechnologies.com' },
};

const features = [
  {
    icon: Shield,
    title: 'WAA Technology',
    desc: 'WAA Technologies have introduced jointless cylinders first time ever in Pakistan. This latest technology has increased the strength of pressure tensile and eradicated leakage from body.',
    color: 'bg-green-50 text-green-700',
    border: 'border-green-200',
  },
  {
    icon: Zap,
    title: '100% Explosion Proof',
    desc: 'WAA Tech Cylinders quality assures 100% safety from explosion. Highly safe composite material does not blast unlike metal cylinders even engulfed in fire.',
    color: 'bg-amber-50 text-amber-700',
    border: 'border-amber-200',
  },
  {
    icon: Feather,
    title: 'Light Weight',
    desc: 'WAA Tech Cylinders are user friendly due to the attractive design and 50% lighter than conventional cylinder. Its weight is 5.5 kg approximately.',
    color: 'bg-blue-50 text-blue-700',
    border: 'border-blue-200',
  },
  {
    icon: Sun,
    title: 'UV Resistant',
    desc: 'WAA Tech Cylinder is UV resistant to effects from sun, rain and temperature due to atmospheric variations and rough handling. Cylinder color will not be altered even after prolong usage.',
    color: 'bg-orange-50 text-orange-700',
    border: 'border-orange-200',
  },
  {
    icon: Droplets,
    title: 'Corrosion Proof',
    desc: "WAA Tech Composite Cylinder is corrosion free as it doesn't leave stain on kitchen floor or anywhere else. It never gets corrode even in humid or coastal areas.",
    color: 'bg-cyan-50 text-cyan-700',
    border: 'border-cyan-200',
  },
  {
    icon: Award,
    title: 'Brand Features',
    desc: 'Brand and Company names are embossed in cylinder at 4 different places. Security features have been added in design to avoid counterfeit. WAA Tech Cylinder can be customized as per customer preferences i.e color and customer brand name etc.',
    color: 'bg-purple-50 text-purple-700',
    border: 'border-purple-200',
  },
];

const products = [
  { name: '10 Kg Fiber Gas Cylinder Price in Pakistan', slug: '10-kg-fiber-gas-cylinder', price: 11000, oldPrice: null },
  { name: '5 Kg LPG Fiber Gas Cylinder in Pakistan', slug: '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan', price: 8000, oldPrice: 8500 },
  { name: 'LPG Composite Cylinder 10Kg Cerulean Blue', slug: 'lpg-composite-cylinder-10kg-cerulean-blue', price: 11000, oldPrice: null },
  { name: 'LPG Composite Cylinder 10Kg Tiger Orange', slug: 'lpg-composite-cylinder-10kg-tiger-orange', price: 11000, oldPrice: null },
  { name: 'LPG Composite Cylinder 10Kg Traditional Blue', slug: 'lpg-composite-cylinder-10kg-traditional-blue', price: 11000, oldPrice: null },
];

const certifications = [
  { label: 'ISO-9001-2015', desc: 'Quality Management' },
  { label: 'ISO 11119', desc: 'Composite Cylinders' },
  { label: 'BSEN-14427-2022', desc: 'British/European Standard' },
  { label: 'PEC Certificate', desc: 'Pakistan Engineering Council' },
  { label: 'OGRA Regulated', desc: 'Oil & Gas Regulatory Authority' },
  { label: 'EN 14427', desc: 'Cylinder Design & Approvals' },
];

const testimonials = [
  {
    name: 'Nazir Ahmad',
    rating: 5,
    text: 'I Bought cylinder 4 months ago it is jointless which makes me tension free about the gas leakage and make it 100% secure.',
  },
  {
    name: 'Mehdi Khan',
    rating: 5,
    text: 'I recently switched to a non-explosion gas cylinder, and I am incredibly satisfied with my purchase. I highly recommend it to anyone prioritizing safety in their home. The jointless technology really make us tension free.',
  },
  {
    name: 'Habib Ullah',
    rating: 5,
    text: 'I recently purchased a blue cylinder for my household due to the gas shortages across Pakistan. The quality of their products is tremendous. When we know that the cylinder is blast proof, lifts off the burden on my shoulders and mitigates the risk factor when using the cylinder.',
  },
];

const stats = [
  { value: '100%', label: 'Explosion Proof' },
  { value: '5.5 kg', label: 'Lightweight (10kg Size)' },
  { value: '20+', label: 'Years Lifespan' },
  { value: '12,000', label: 'Pressure Cycles' },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-green" />
        <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full bg-white/5" />
        <div className="absolute -right-16 top-1/4 w-[400px] h-[400px] rounded-full bg-white/5" />
        <div className="absolute left-1/2 bottom-0 w-[300px] h-[300px] rounded-full bg-black/10" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 text-amber-300" />
              Pakistan&apos;s #1 Composite Gas Cylinder
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4">
              <span className="text-amber-300">Non-Blast</span>
              <br />
              <span className="text-white">GAS CYLINDER</span>
            </h1>
            <p className="text-xl text-green-100 font-semibold mb-3">For Your Requirement</p>
            <p className="text-green-200 text-lg leading-relaxed mb-8 max-w-lg">
              WAA Technologies — Pakistan&apos;s first composite LPG cylinder manufacturer. 100% explosion-proof,
              jointless design, ISO certified. Serving homes, restaurants &amp; businesses nationwide.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 px-7 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                SHOP NOW <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/our-products-and-advantages"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all backdrop-blur-sm"
              >
                VIEW MORE <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              {['ISO 9001-2015', 'BSEN-14427-2022', 'PEC Approved', 'OGRA Certified'].map((cert) => (
                <div key={cert} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                  {cert}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center card-hover">
                <div className="text-4xl font-black text-amber-300 mb-1">{s.value}</div>
                <div className="text-sm text-green-100 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-10 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white font-black text-2xl">WAA</span>
                </div>
                <p className="text-green-800 font-bold text-xl mb-2">TECHNOLOGIES</p>
                <p className="text-green-600 text-sm font-medium">PVT LTD</p>
                <div className="mt-6 flex flex-col gap-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Est. 2022 — R&amp;D since 2018
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> 26,000 sq ft Plant, Gujranwala
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> First Composite Cylinder in Pakistan
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-amber-400 rounded-2xl px-5 py-3 shadow-lg">
              <div className="text-slate-900 font-bold text-sm">ISO 9001-2015</div>
              <div className="text-slate-700 text-xs">Quality Certified</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-green-600 inline-block" />
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">About WAA Technologies</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-5 leading-tight">
              About WAA<br />
              <span className="text-green-700">Technologies</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              WAA TECHNOLOGIES was officially formed in 2022 at Gujranwala however research and development
              was under progress since 2018. Company was aimed to develop reliable, safe and long-life
              composite cylinders. Research and development team worked hard to achieve the goal and
              successfully developed the product as envisaged.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              At present the company is spread over 26000 square feet area. Facility houses production plant,
              storage, research and development compound beside offices and visitors area. All the components
              of cylinder are produced indigenously under one roof. Management is well qualified and technically
              understand the complexities involved.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Since our beginning, we have developed a strong reputation for delivering on our promises and
              regularly exceeding client expectations in terms of service excellence, pricing, performance
              and quality.
            </p>
            <div className="flex gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
              >
                SHOP NOW <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-green-300 text-slate-700 hover:text-green-700 px-6 py-3 rounded-xl font-semibold transition-all"
              >
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-green-600 inline-block" />
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <span className="w-8 h-0.5 bg-green-600 inline-block" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Features of WAA Tech Cylinders
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Here are key features of WAA Technologies Cylinders which stand&apos;s out the Brand.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className={`feature-card bg-white rounded-2xl p-7 border ${f.border} card-hover cursor-default`}
              >
                <div className={`feature-icon w-14 h-14 rounded-xl ${f.color} flex items-center justify-center mb-5`}>
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPLICATIONS ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-amber-500 inline-block" />
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Applications</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-5 leading-tight">
              Applications &amp; Usage
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Cook Like a Pro — Elevate your culinary game with ease! Our non-explosion gas cylinders are your
              kitchen&apos;s best friend. Say goodbye to traditional stovetops and embrace the convenience of
              portable cooking. With instant heat no need to wait for the burner to warm up!
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Designed with safety in mind, our cylinders are leak-proof and easy to handle. Enjoy effortless
              and efficient cooking with non-explosion cylinders in your kitchen.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Jointless design — 100% leak-proof and explosion-proof.',
                'Translucent body — visually check your LPG level anytime.',
                'UV resistant — safe for outdoor placement in direct sunlight.',
                'Corrosion free — never rusts even in humid or coastal areas.',
                '50% lighter than conventional cylinders — easy to handle.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/our-products-and-advantages"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-10 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Residential', icon: '🏠', desc: 'Safe for families' },
                  { label: 'Commercial', icon: '🏪', desc: 'Restaurants & shops' },
                  { label: 'Industrial', icon: '🏭', desc: 'Large-scale use' },
                  { label: 'Outdoor', icon: '⛺', desc: 'Camping & travel' },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-2xl p-5 text-center shadow-sm card-hover">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="font-bold text-slate-900 text-sm">{item.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-green-700 rounded-2xl p-4 text-white text-center">
                <div className="font-black text-2xl mb-1">Load Shedding?</div>
                <div className="text-green-200 text-sm">WAA Gas keeps you cooking 24/7 with Global Gas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ───────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-amber-400 inline-block" />
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Certifications</span>
              <span className="w-8 h-0.5 bg-amber-400 inline-block" />
            </div>
            <h2 className="text-3xl font-black text-white mb-3">Certifications</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Internationally certified and regulated — every WAA cylinder meets the world&apos;s most rigorous standards.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert) => (
              <div key={cert.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center card-hover">
                <Award className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <div className="text-white font-bold text-sm mb-1">{cert.label}</div>
                <div className="text-slate-500 text-xs">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-green-600 inline-block" />
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Featured Products</span>
              <span className="w-8 h-0.5 bg-green-600 inline-block" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-3">LPG &amp; Cylinders</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              There are many variations of WAA Technologies
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/product/${p.slug}`}
                className="product-card group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative bg-gradient-to-br from-slate-50 to-green-50 aspect-square flex items-center justify-center overflow-hidden">
                  {p.oldPrice && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      SALE
                    </span>
                  )}
                  <div className="product-card-img text-center py-8">
                    <div className="w-20 h-32 mx-auto bg-gradient-to-b from-amber-300 to-amber-500 rounded-[40%_40%_50%_50%/30%_30%_60%_60%] shadow-lg" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug group-hover:text-green-700 transition-colors">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    {p.oldPrice && (
                      <span className="text-xs text-slate-400 line-through">₨ {p.oldPrice.toLocaleString()}</span>
                    )}
                    <span className="text-base font-black text-green-700">₨ {p.price.toLocaleString()}</span>
                  </div>
                  <button className="w-full bg-slate-900 hover:bg-green-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── EXPLOSION PROOF CTA ─────────────────────────────────────────── */}
      <section className="py-20 gradient-green text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-amber-300 inline-block" />
              <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">Safety First</span>
            </div>
            <h2 className="text-4xl font-black mb-5 leading-tight">
              100% <span className="text-amber-300">Explosion Proof</span>
            </h2>
            <p className="text-green-100 text-lg leading-relaxed mb-8">
              WAA Tech Cylinders quality assures 100% safety from explosion. Highly safe composite material
              does not blast unlike metal cylinders even engulfed in fire. Because of their appealing shape
              and 50% less weight than standard cylinders, WAA Tech Cylinders are user-friendly.
              It weighs about 5.5 kg total.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 px-7 py-3.5 rounded-xl font-bold transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" />
              CONTACT US
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: '0%', label: 'Explosion Risk', sub: 'Non-blast by design' },
              { val: '50%', label: 'Less Weight', sub: 'Vs. steel cylinders' },
              { val: '5.5kg', label: 'Total Weight', sub: 'For 10kg cylinder' },
              { val: '12,000', label: 'Pressure Cycles', sub: '20+ year lifespan' },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-amber-300 mb-1">{s.val}</div>
                <div className="text-white font-semibold text-sm">{s.label}</div>
                <div className="text-green-200 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES REDUX ──────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              The Perfect Fit for Your <span className="text-green-700">Home &amp; Global Gas</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Features</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sun,
                title: 'UV Resistant',
                desc: 'WAA Tech Cylinder is UV resistant to effects from sun, rain and temperature due to atmospheric variations and rough handling. Cylinder color will not be altered even after prolong usage.',
              },
              {
                icon: Droplets,
                title: 'Corrosion Free',
                desc: "WAA Tech Composite Cylinder is corrosion free as it doesn't leave stain on kitchen floor or anywhere else. It never gets corrode even in humid or coastal areas.",
              },
              {
                icon: Shield,
                title: 'Brand Features',
                desc: 'Brand and Company names are embossed in cylinder at 4 different places. Security features have been added in design to avoid counterfeit. WAA Tech Cylinder can be customized as per customer preferences.',
              },
              {
                icon: Award,
                title: 'WAA Technology',
                desc: 'WAA Technologies have introduced jointless cylinders first time ever in Pakistan. This latest technology has increased the strength of pressure tensile and eradicated leakage from body.',
              },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 flex justify-center gap-3">
            <Link href="/shop" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md">
              GO TO SHOP
            </Link>
            <Link href="/our-products-and-advantages" className="inline-flex items-center gap-2 border border-slate-200 hover:border-green-300 text-slate-700 hover:text-green-700 px-6 py-3 rounded-xl font-semibold transition-all">
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-green-600 inline-block" />
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <span className="w-8 h-0.5 bg-green-600 inline-block" />
            </div>
            <h2 className="text-4xl font-black text-slate-900">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-2xl p-7 border border-slate-100 card-hover">
                <div className="flex mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700 text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">Verified Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-amber-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-1">Ready to Switch to Safety?</h2>
            <p className="text-slate-700 text-lg">
              WAA TECHNOLOGIES PVT LTD promise to ensure the quality of its each and every product.
              Lives are precious and we care for our customers and families lives.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/authorized-dealers" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-all">
              Find Dealers
            </Link>
            <Link href="/shop" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 rounded-xl font-semibold transition-all shadow-sm">
              Shop Online <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

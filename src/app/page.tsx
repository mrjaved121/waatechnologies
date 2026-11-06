import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield, Zap, Feather, Sun, Droplets, Award,
  ChevronRight, CheckCircle2, ArrowRight, Phone
} from 'lucide-react';
import HeroCylinder from '@/components/HeroCylinder';
import AzadiMobileHero from '@/components/AzadiMobileHero';
import OrderInquiryButton from '@/components/OrderInquiryButton';

const productImages: Record<string, string> = {
  '10-kg-fiber-gas-cylinder': '/images/10kg-cylinder-yellow.jpg',
  '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan': '/images/5kg-cylinder.jpg',
  'lpg-composite-cylinder-10kg-cerulean-blue': '/images/10kg-blue-Fiber-cylinder.jpg',
  'lpg-composite-cylinder-10kg-tiger-orange': '/images/10kg-cylinder-orange.jpg',
};

export const metadata: Metadata = {
  title: { absolute: 'Composite LPG Gas Cylinder in Pakistan | WAATechnologies' },
  description:
    'Non-blast composite LPG cylinders made in Gujranwala, certified to ISO 11119-3 and EN 14427. 5 kg and 10 kg sizes, dealers nationwide. Order on WhatsApp.',
  alternates: { canonical: 'https://waatechnologies.com' },
};

const features = [
  {
    icon: Shield,
    title: 'WAA Technology',
    desc: 'WAATechnologies have introduced jointless cylinders first time ever in Pakistan. This latest technology has increased the strength of pressure tensile and eradicated leakage from body.',
    color: 'bg-green-50 text-green-900',
    border: 'border-green-200',
  },
  {
    icon: Zap,
    title: '100% Explosion Proof',
    desc: 'WAA Tech Cylinders quality assures 100% safety from explosion. Highly safe composite material does not blast unlike metal cylinders even engulfed in fire. Tested to ISO 11119-3 and BS EN 14427:2022 standards.',
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
];

const certifications = [
  { label: 'Certificate of Incorporation', desc: 'Securities & Exchange Commission of Pakistan', img: '/images/certificates/1-1.jpg' },
  { label: 'ISO 9001:2015', desc: 'Quality Management System', img: '/images/certificates/waatechnologies-vertificate-ISO-9001-2015.jpg' },
  { label: 'ISO 11119-3:2020', desc: 'Composite Cylinders — CE Module B & C', img: '/images/certificates/waatechnologies-certificate-11119.jpg' },
  { label: 'BS EN 14427:2022', desc: 'Composite Cylinders — CE Module B & C', img: '/images/certificates/waatechnologies-certificate-BSEN-14427-2022-e1747214241127.jpg' },
  { label: 'PEC License', desc: 'Pakistan Engineering Council', img: '/images/certificates/pec-waatech.jpeg' },
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


// Homepage FAQ — rendered visibly below and emitted as FAQPage structured data.
const homeFaqs = [
  { q: 'Are composite LPG cylinders safe?', a: 'Yes. WAATechnologies composite cylinders are certified to ISO 11119-3 and BS EN 14427:2022. They have no welded seams and no steel to rust, and in fire tests composite cylinders vent gas through the wall instead of bursting, which is why they are called non-blast.' },
  { q: 'How much does a WAATechnologies composite cylinder cost?', a: 'The 5 kg composite cylinder is Rs 8,000 and the 10 kg composite cylinder is Rs 11,000. The 10 kg is available in Yellow, Cerulean Blue, Tiger Orange and Traditional Blue. Confirm current pricing with any authorised dealer.' },
  { q: 'How long does a composite cylinder last?', a: 'WAA composite cylinders carry a rated service life of 20+ years under ISO 11119-3. Because the body does not corrode, they do not weaken over time the way steel cylinders do.' },
  { q: 'Can I see how much gas is left?', a: 'Yes. The composite body is translucent, so you can see the gas level at a glance without lifting or shaking the cylinder.' },
  { q: 'Is a composite cylinder lighter than a steel one?', a: 'Yes, significantly. The composite construction makes the cylinder far lighter than a steel cylinder of the same capacity, which matters for elderly users, upper-floor homes and busy restaurant kitchens.' },
  { q: 'Where can I buy a WAATechnologies cylinder?', a: 'From authorised dealers in Lahore, Rawalpindi and Islamabad, Sialkot, Karachi, Hyderabad and Peshawar, listed with addresses and phone numbers on our dealers page, or by ordering on WhatsApp for delivery.' },
  { q: 'How do I refill or exchange a composite cylinder?', a: 'Through the authorised dealer network. Dealers refill by weight and check the valve and body each time. Never refill a cylinder yourself or at an unlicensed roadside setup.' },
  { q: 'Will it work with my existing regulator?', a: 'WAA cylinders are designed for the standard household LPG regulators sold in Pakistan. Our step-by-step guide shows how to connect a regulator safely at home.' },
  { q: 'Is WAATechnologies a Pakistani company?', a: 'Yes. WAATechnologies Pvt Ltd is SECP-incorporated, PEC-licensed and manufactures its cylinders in Gujranwala, Punjab, with a head office in Bahria Town, Lahore.' },
  { q: 'Which certifications do the cylinders hold?', a: 'ISO 9001:2015 quality management, ISO 11119-3 and BS EN 14427:2022 for the cylinders themselves, plus a Pakistan Engineering Council (PEC) licence.' },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-green" />
        <div className="orb-1 absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full bg-white/5" />
        <div className="orb-2 absolute -right-16 top-1/4 w-[400px] h-[400px] rounded-full bg-white/5" />
        <div className="orb-3 absolute left-1/2 bottom-0 w-[300px] h-[300px] rounded-full bg-black/10" />
        <AzadiMobileHero />

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 text-amber-300" />
              Made-in-Pakistan Composite Gas Cylinder
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4">
              <span className="text-amber-300">Non-Blast</span>
              <br />
              <span className="text-white">GAS CYLINDER</span>
            </h1>
            <p className="text-xl text-green-100 font-semibold mb-3">For Your Requirement</p>
            <p className="text-green-200 text-lg leading-relaxed mb-8 max-w-lg">
              WAATechnologies — Pakistan&apos;s first composite LPG cylinder manufacturer. 100% explosion-proof,
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
              {['ISO 9001:2015', 'ISO 11119-3:2020', 'BS EN 14427:2022', 'PEC Licensed'].map((cert) => (
                <div key={cert} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                  {cert}
                </div>
              ))}
            </div>
          </div>

          <HeroCylinder />
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-10 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white font-black text-2xl">WAA</span>
                </div>
                <p className="text-green-950 font-bold text-xl mb-2">TECHNOLOGIES</p>
                <p className="text-green-800 text-sm font-medium">PVT LTD</p>
                <div className="mt-6 flex flex-col gap-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-800 flex-shrink-0" /> Est. 2022 — R&amp;D since 2018
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-800 flex-shrink-0" /> Pakistan&apos;s Premier Cylinder Factory
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-800 flex-shrink-0" /> First Composite Cylinder in Pakistan
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
              <span className="w-8 h-0.5 bg-green-800 inline-block" />
              <span className="text-green-900 font-semibold text-sm uppercase tracking-wider">About WAATechnologies</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-5 leading-tight">
              About<br />
              <span className="text-green-900">WAATechnologies</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              WAATechnologies was officially formed in 2022 at Gujranwala however research and development
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
                className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-950 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
              >
                SHOP NOW <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-green-300 text-slate-700 hover:text-green-900 px-6 py-3 rounded-xl font-semibold transition-all"
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
              <span className="w-8 h-0.5 bg-green-800 inline-block" />
              <span className="text-green-900 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <span className="w-8 h-0.5 bg-green-800 inline-block" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              Features of WAA Tech Cylinders
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Here are key features of WAATechnologies Cylinders which stand&apos;s out the Brand.
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
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">Applications</span>
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
                  <CheckCircle2 className="w-5 h-5 text-green-800 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/our-products-and-advantages"
              className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
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
              <div className="mt-4 bg-green-900 rounded-2xl p-4 text-white text-center">
                <div className="font-black text-2xl mb-1">Load Shedding?</div>
                <div className="text-green-200 text-sm">WAA Gas keeps you cooking 24/7 with Global Gas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ───────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0d1b3e]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white tracking-widest uppercase">Certifications</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert) => (
              <div key={cert.label} className="flex flex-col items-center w-48 md:w-52">
                <div className="w-full aspect-[3/4] border-4 border-amber-700 rounded-sm overflow-hidden bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] relative">
                  <Image
                    src={cert.img}
                    alt={cert.label}
                    fill
                    sizes="(max-width: 768px) 192px, 208px"
                    className="object-cover blur-[2px]"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-white font-bold text-xs leading-tight">{cert.label}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{cert.desc}</div>
                </div>
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
              <span className="w-8 h-0.5 bg-green-800 inline-block" />
              <span className="text-green-900 font-semibold text-sm uppercase tracking-wider">Featured Products</span>
              <span className="w-8 h-0.5 bg-green-800 inline-block" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-3">LPG &amp; Cylinders</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg">
              There are many variations of WAATechnologies
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
                    <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      SALE
                    </span>
                  )}
                  {productImages[p.slug] ? (
                    <Image
                      src={productImages[p.slug]}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 20vw"
                      className="object-contain p-5 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="product-card-img text-center py-8">
                      <div className="w-20 h-32 mx-auto bg-gradient-to-b from-blue-400 to-blue-700 rounded-[40%_40%_50%_50%/30%_30%_60%_60%] shadow-lg" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug group-hover:text-green-900 transition-colors">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    {p.oldPrice && (
                      <span className="text-xs text-slate-600 line-through">₨ {p.oldPrice.toLocaleString()}</span>
                    )}
                    <span className="text-base font-black text-green-900">₨ {p.price.toLocaleString()}</span>
                  </div>
                  <OrderInquiryButton name={p.name} price={p.price} compact />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-950 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
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
              The Perfect Fit for Your <span className="text-green-900">Home &amp; Global Gas</span>
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
                desc: 'WAATechnologies have introduced jointless cylinders first time ever in Pakistan. This latest technology has increased the strength of pressure tensile and eradicated leakage from body.',
              },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover">
                <div className="w-12 h-12 bg-green-100 text-green-900 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 flex justify-center gap-3">
            <Link href="/shop" className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-950 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md">
              GO TO SHOP
            </Link>
            <Link href="/our-products-and-advantages" className="inline-flex items-center gap-2 border border-slate-200 hover:border-green-300 text-slate-700 hover:text-green-900 px-6 py-3 rounded-xl font-semibold transition-all">
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>

      {/* ─── GUIDE: COMPOSITE CYLINDERS IN PAKISTAN ───────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-900 font-semibold text-sm uppercase tracking-wider">Buyer&apos;s guide</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2">Composite LPG Cylinders in Pakistan: What Every Buyer Should Know</h2>
          </div>
          <div className="prose prose-slate max-w-none prose-headings:font-black prose-h3:text-2xl prose-a:text-green-800 prose-p:leading-relaxed">
            <h3>What is a composite LPG cylinder?</h3>
            <p>
              A composite LPG cylinder is built from a fibre-reinforced polymer shell wound around a high-density
              polyethylene (HDPE) liner, instead of welded steel. That construction is what changes the safety outcome.
              Steel cylinders rust from the inside, weaken at the weld seams and can rupture under pressure or in a fire.
              A composite cylinder has no welds and no metal to corrode. In fire tests carried out under ISO 11119-3 and
              BS EN 14427:2022, composite cylinders vent gas through the wall rather than bursting, which is why they are
              described as <Link href="/are-composite-lpg-cylinders-safe-pakistan">non-blast</Link>. The body is also
              translucent, so you can <Link href="/how-to-check-gas-level-composite-cylinder">see how much gas is left</Link>{' '}
              instead of guessing.
            </p>

            <h3>Made in Pakistan, in Gujranwala</h3>
            <p>
              WAATechnologies Pvt Ltd manufactures its composite cylinders at its facility in Gujranwala, Punjab, with a head
              office in Bahria Town, Lahore. The company is SECP-incorporated and PEC-licensed, and the cylinders are produced
              under ISO 9001:2015 quality management and certified to ISO 11119-3 and BS EN 14427:2022, the same international
              standards that imported composite cylinders carry. Building locally means dealer supply, refills and support are
              handled inside Pakistan. Read more about <Link href="/our-technology">how the cylinders are made</Link>.
            </p>

            <h3>Sizes, colours and prices</h3>
            <p>
              WAA cylinders come in two household sizes. The <strong>5 kg composite cylinder (Rs 8,000)</strong> suits small
              families, single-burner cooking, travel and camping. The <strong>10 kg composite cylinder (Rs 11,000)</strong> is
              the everyday choice for family kitchens and comes in four finishes: Yellow, Cerulean Blue, Tiger Orange and
              Traditional Blue. Both sizes share the same non-blast construction and the same certifications; only capacity and
              colour differ. See current options in the <Link href="/shop">shop</Link>.
            </p>

            <h3>Who uses them</h3>
            <p>
              Households moving away from steel &ldquo;gola&rdquo; cylinders are the largest group. Composite cylinders are also
              used by <Link href="/why-restaurants-switching-composite-lpg-cylinders-pakistan">restaurants</Link> and{' '}
              <Link href="/composite-lpg-cylinders-food-trucks-street-vendors-pakistan">food trucks</Link>, where a lighter
              cylinder and a visible gas level mean fewer mid-service surprises, as well as by outdoor cooks, campers and
              businesses that store several cylinders and want to cut corrosion and handling risk.
            </p>

            <h3>How to make sure yours is genuine</h3>
            <p>
              Buy only from an <Link href="/authorized-dealers">authorised WAATechnologies dealer</Link>. A genuine cylinder has
              a translucent composite body that shows the gas level and carries the WAATechnologies branding and certification
              markings on the body. If a seller cannot show the certification marking or is not on our dealer list, do not buy;
              call us and we will verify the dealer for you.
            </p>

            <h3>Where to buy, refill and exchange</h3>
            <p>
              Authorised dealers are listed with addresses and phone numbers for Lahore, Rawalpindi and Islamabad, Sialkot,
              Karachi, Hyderabad and Peshawar, and you can order on WhatsApp for delivery. Refills and exchanges go through the
              dealer network, which fills by weight and checks the valve and body each time. Never refill a cylinder yourself or
              at an unlicensed roadside setup. Our guide explains{' '}
              <Link href="/how-to-refill-composite-lpg-cylinder-pakistan">how refilling works step by step</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: homeFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
            }),
          }}
        />
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-900 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {homeFaqs.map((f) => (
              <details key={f.q} className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm open:shadow-md">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-slate-900">
                  {f.q}
                  <ChevronRight className="w-5 h-5 text-green-800 transition-transform group-open:rotate-90 flex-shrink-0" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-green-800 inline-block" />
              <span className="text-green-900 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <span className="w-8 h-0.5 bg-green-800 inline-block" />
            </div>
            <h2 className="text-4xl font-black text-slate-900">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-2xl p-7 border border-slate-100 card-hover">
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-900 text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-slate-600 text-xs">Customer</div>
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
              WAATechnologies PVT LTD promise to ensure the quality of its each and every product.
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

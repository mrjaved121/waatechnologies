import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield, Feather, Eye, Sun, Layers, Fingerprint, MessageCircle, Truck, Flame,
  CheckCircle2, ArrowRight, ChevronRight, Phone,
} from 'lucide-react';
import OrderInquiryButton from '@/components/OrderInquiryButton';

export const metadata: Metadata = {
  title: { absolute: 'Composite LPG Gas Cylinder in Pakistan | WAATechnologies' },
  description:
    'Non-blast composite LPG cylinders made in Gujranwala, certified to ISO 11119-3 and EN 14427. 5 kg and 10 kg sizes, dealers nationwide. Order on WhatsApp.',
  alternates: { canonical: 'https://waatechnologies.com' },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const products = [
  { name: '10 Kg Composite Cylinder', colour: 'Yellow', slug: '10-kg-fiber-gas-cylinder', price: 11000, oldPrice: null, img: '/images/10kg-cylinder-yellow.jpg', popular: true },
  { name: '5 Kg Composite Cylinder', colour: 'Blue', slug: '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan', price: 8000, oldPrice: 8500, img: '/images/5kg-cylinder.jpg', popular: false },
  { name: '10 Kg Composite Cylinder', colour: 'Cerulean Blue', slug: 'lpg-composite-cylinder-10kg-cerulean-blue', price: 11000, oldPrice: null, img: '/images/10kg-blue-Fiber-cylinder.jpg', popular: false },
  { name: '10 Kg Composite Cylinder', colour: 'Tiger Orange', slug: 'lpg-composite-cylinder-10kg-tiger-orange', price: 11000, oldPrice: null, img: '/images/10kg-cylinder-orange.jpg', popular: false },
];

const usps = [
  { icon: Shield, text: 'Non-blast by design' },
  { icon: Feather, text: 'Half the weight of steel' },
  { icon: Eye, text: 'See your gas level' },
  { icon: Sun, text: 'Never rusts' },
  { icon: CheckCircle2, text: '20+ year rated life' },
];

const features = [
  { icon: Layers, title: 'Jointless Construction', desc: 'The first jointless composite cylinder made in Pakistan. No welded seams means no weak points and no leakage from the body.' },
  { icon: Shield, title: 'Non-Blast Design', desc: 'Composite does not burst like steel. In fire tests under ISO 11119-3 and BS EN 14427:2022 the cylinder vents gas through the wall instead of exploding.' },
  { icon: Feather, title: 'Light Weight', desc: 'About 5.5 kg empty, roughly half the weight of a conventional steel cylinder. Easy to carry up stairs and move around the kitchen.' },
  { icon: Eye, title: 'Visible Gas Level', desc: 'The translucent body shows how much gas is left at a glance. No lifting, no shaking, no running out in the middle of cooking.' },
  { icon: Sun, title: 'UV & Corrosion Resistant', desc: 'Resists sun, rain and humidity. The cylinder never rusts, never stains the floor and keeps its colour even in coastal cities.' },
  { icon: Fingerprint, title: 'Anti-Counterfeit Branding', desc: 'The brand and company name are embossed on the cylinder in four places, with security features in the design so you know it is genuine.' },
];

const specs = [
  ['Propane capacity', '10 kg'],
  ['Butane capacity', '12 kg'],
  ['Water capacity', '24 litres'],
  ['Height', '580 mm'],
  ['Diameter', '306 mm'],
  ['Empty weight', 'approx. 5.5 kg'],
  ['Service pressure', '20 bar (294 psi)'],
  ['Test pressure', '30 bar (441 psi)'],
  ['Standards', 'ISO 11119-3 · BS EN 14427:2022'],
  ['Quality system', 'ISO 9001:2015 · PEC licensed'],
];

const companyStats = [
  { val: '2022', label: 'Company formed', sub: 'R&D since 2018' },
  { val: '26,000', label: 'sq ft facility', sub: 'Gujranwala, Punjab' },
  { val: '1st', label: 'in Pakistan', sub: 'Composite cylinder maker' },
  { val: '6', label: 'cities served', sub: 'Authorised dealers' },
];

const certifications = [
  { label: 'Certificate of Incorporation', desc: 'SECP', img: '/images/certificates/1-1.jpg' },
  { label: 'ISO 9001:2015', desc: 'Quality Management', img: '/images/certificates/waatechnologies-vertificate-ISO-9001-2015.jpg' },
  { label: 'ISO 11119-3', desc: 'Composite Cylinders', img: '/images/certificates/waatechnologies-certificate-11119.jpg' },
  { label: 'BS EN 14427:2022', desc: 'Composite Cylinders', img: '/images/certificates/waatechnologies-certificate-BSEN-14427-2022-e1747214241127.jpg' },
  { label: 'PEC Licence', desc: 'Pakistan Engineering Council', img: '/images/certificates/pec-waatech.jpeg' },
];

const steps = [
  { icon: MessageCircle, title: 'Order on WhatsApp', desc: 'Pick a size and colour and tap Order. No account, no forms. Our team confirms availability on the chat.' },
  { icon: Truck, title: 'Delivered by your dealer', desc: 'Your nearest authorised dealer supplies and delivers in Lahore, Rawalpindi–Islamabad, Sialkot, Karachi, Hyderabad and Peshawar.' },
  { icon: Flame, title: 'Connect and cook', desc: 'Fits standard household LPG regulators. Refill or exchange through the same dealer network whenever it runs low.' },
];

const testimonials = [
  { name: 'Nazir Ahmad', text: 'I bought the cylinder four months ago. It is jointless, which makes me tension-free about gas leakage.' },
  { name: 'Mehdi Khan', text: 'I recently switched to a non-explosion gas cylinder and I am incredibly satisfied. I recommend it to anyone prioritising safety at home.' },
  { name: 'Habib Ullah', text: 'I purchased a blue cylinder during the gas shortages. Knowing the cylinder is blast-proof lifts a burden off my shoulders.' },
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

// ─── Shared presentation ─────────────────────────────────────────────────────
// One heading style, one card style and one button style across the page keeps it tidy.

function SectionHead({ eyebrow, title, sub, center = true, light = false }: { eyebrow: string; title: React.ReactNode; sub?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <div className={`flex items-center gap-2 mb-3 ${center ? 'justify-center' : ''}`}>
        <span className={`w-8 h-0.5 inline-block ${light ? 'bg-amber-300' : 'bg-green-800'}`} />
        <span className={`font-semibold text-sm uppercase tracking-wider ${light ? 'text-amber-300' : 'text-green-900'}`}>{eyebrow}</span>
        {center && <span className={`w-8 h-0.5 inline-block ${light ? 'bg-amber-300' : 'bg-green-800'}`} />}
      </div>
      <h2 className={`text-3xl md:text-4xl font-black leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-green-100' : 'text-slate-600'}`}>{sub}</p>}
    </div>
  );
}

const btnPrimary = 'inline-flex items-center justify-center gap-2 rounded-xl bg-green-900 hover:bg-green-950 text-white px-7 py-3.5 font-semibold transition-all shadow-md hover:shadow-lg';
const btnAmber = 'inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 px-7 py-3.5 font-bold transition-all shadow-lg';
const btnOutline = 'inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 hover:border-green-300 bg-white text-slate-700 hover:text-green-900 px-7 py-3.5 font-semibold transition-all';
const card = 'bg-white rounded-2xl border border-slate-100 shadow-sm';

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-green" />
        <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full bg-white/5" />
        <div className="absolute left-1/3 -bottom-40 w-[400px] h-[400px] rounded-full bg-black/10" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4 text-amber-300" />
              Made in Pakistan &middot; ISO 11119-3 &amp; BS EN 14427 certified
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] mb-5">
              <span className="text-amber-300">Non-Blast</span> Composite<br className="hidden sm:block" /> LPG Gas Cylinders
            </h1>
            <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-lg">
              Pakistan&apos;s first composite LPG cylinder manufacturer. Jointless, lightweight and rust-free cylinders
              for homes, restaurants and businesses, delivered through authorised dealers in six cities.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop" className={btnAmber}>Shop Now <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/authorized-dealers" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white px-7 py-3.5 font-semibold transition-all">
                Find a Dealer
              </Link>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-sm text-green-100">
              {['ISO 9001:2015', 'ISO 11119-3', 'BS EN 14427:2022', 'PEC Licensed'].map((c) => (
                <li key={c} className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-300" />{c}</li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-white/95 p-5 sm:p-8 shadow-2xl">
              <Image
                src="/images/hero-range.jpg"
                alt="WAATechnologies composite LPG cylinders in yellow, orange, cerulean blue and traditional blue"
                width={1197}
                height={1400}
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="w-full h-auto max-h-[520px] object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-amber-400 rounded-2xl px-5 py-3 shadow-lg">
              <div className="text-slate-900 font-black text-2xl leading-none">5.5 kg</div>
              <div className="text-slate-800 text-xs font-medium mt-1">Empty weight &middot; half of steel</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ──────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <ul className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-5 gap-y-3 gap-x-6 text-sm font-medium text-slate-700">
          {usps.map((u) => (
            <li key={u.text} className="flex items-center justify-center gap-2">
              <u.icon className="w-4 h-4 text-green-800 flex-shrink-0" />{u.text}
            </li>
          ))}
        </ul>
      </section>

      {/* ─── PRODUCTS ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHead eyebrow="Our Cylinders" title="Composite LPG Cylinders" sub="Two sizes, four colours, one construction. Every cylinder is certified to the same standards." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <article key={p.slug} className={`${card} relative overflow-hidden flex flex-col card-hover ${p.popular ? 'ring-2 ring-green-900' : ''}`}>
                {p.popular && <span className="absolute top-3 left-3 z-10 bg-green-900 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Most Popular</span>}
                {p.oldPrice && <span className="absolute top-3 right-3 z-10 bg-red-500 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Sale</span>}
                <Link href={`/product/${p.slug}`} className="block relative aspect-square bg-gradient-to-br from-slate-50 to-green-50">
                  <Image src={p.img} alt={`${p.name} — ${p.colour}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain p-6" />
                </Link>
                <div className="p-5 flex flex-col flex-1">
                  <Link href={`/product/${p.slug}`} className="font-bold text-slate-900 leading-snug hover:text-green-900">{p.name}</Link>
                  <p className="text-sm text-slate-500 mt-0.5 flex-1">{p.colour}</p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-xl font-black text-green-900">&#8360; {p.price.toLocaleString()}</span>
                    {p.oldPrice && <span className="text-sm text-slate-400 line-through">&#8360; {p.oldPrice.toLocaleString()}</span>}
                  </div>
                  <div className="mt-3"><OrderInquiryButton name={`${p.name} (${p.colour})`} price={p.price} compact /></div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/shop" className={btnPrimary}>View All Products <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHead eyebrow="Why Choose Us" title="Features of WAA Tech Cylinders" sub="What sets a WAATechnologies composite cylinder apart from the steel cylinder in most Pakistani kitchens." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className={`${card} p-7 card-hover`}>
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-900 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPECIFICATIONS ───────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHead center={false} eyebrow="Specifications" title="Built to a standard, not a guess" sub="The 10 kg cylinder, as tested and certified. The 5 kg uses the same construction with a smaller capacity." />
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image src="/images/lifestyle-kitchen.jpg" alt="Cooking at home with WAATechnologies composite LPG cylinders" width={1000} height={900} sizes="(max-width: 1024px) 100vw, 600px" className="w-full h-auto" />
            </div>
          </div>
          <div>
            <div className={`${card} overflow-hidden`}>
              <div className="px-6 py-4 bg-green-900 text-white flex items-center justify-between">
                <span className="font-bold">10 Kg Composite LPG Cylinder</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">Technical data</span>
              </div>
              <dl className="divide-y divide-slate-100">
                {specs.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-2 px-6 py-3.5 text-sm">
                    <dt className="text-slate-500">{k}</dt>
                    <dd className="font-semibold text-slate-900 text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Figures from the manufacturer&apos;s technical specification sheet. Capacities are nominal fill weights; cylinders are filled by weight at authorised dealers.
            </p>
            <Link href="/our-technology" className="mt-4 inline-flex items-center gap-1 font-semibold text-green-900 hover:text-green-950">
              How the cylinder is made <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT + CERTIFICATIONS ───────────────────────────────────────── */}
      <section className="py-20 gradient-green text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <SectionHead light center={false} eyebrow="About WAATechnologies" title="Pakistan's first composite cylinder manufacturer" />
              <p className="text-green-100 leading-relaxed mb-4">
                WAATechnologies Pvt Ltd was formed in 2022 in Gujranwala after research and development that began in 2018.
                Every component of the cylinder is produced in-house at our 26,000 sq ft facility, which houses the production
                plant, storage and R&amp;D compound.
              </p>
              <p className="text-green-100 leading-relaxed mb-8">
                The company is SECP-incorporated and PEC-licensed, and the cylinders are produced under ISO 9001:2015 and
                certified to ISO 11119-3 and BS EN 14427:2022, the same standards imported composite cylinders carry.
              </p>
              <Link href="/about-us" className={btnAmber}>About the Company <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {companyStats.map((s) => (
                <div key={s.label} className="bg-white/10 border border-white/15 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-amber-300 mb-1">{s.val}</div>
                  <div className="text-white font-semibold text-sm">{s.label}</div>
                  <div className="text-green-200 text-xs mt-1">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/15 pt-14">
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-amber-300 mb-8">Certifications &amp; Licences</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
              {certifications.map((c) => (
                <a key={c.label} href={c.img} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="relative aspect-[3/4] bg-slate-50">
                    <Image src={c.img} alt={`${c.label} certificate — WAATechnologies`} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover transition group-hover:scale-[1.02]" />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-bold text-slate-900 text-xs leading-tight">{c.label}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{c.desc}</p>
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-green-200">Click any certificate to open it at full size.</p>
          </div>
        </div>
      </section>

      {/* ─── HOW TO ORDER ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHead eyebrow="How It Works" title="Order today, cooking in days" />
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className={`${card} p-7 relative`}>
                <span className="absolute top-6 right-6 text-5xl font-black text-slate-100 leading-none">{i + 1}</span>
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-900 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/shop" className={btnPrimary}>Shop Now <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/composite-lpg-cylinder-buyers-guide" className={btnOutline}>Read the Buyer&apos;s Guide</Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHead eyebrow="Testimonials" title="What Our Customers Say" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className={`${card} p-7`}>
                <blockquote className="text-slate-600 leading-relaxed italic">&ldquo;{t.text}&rdquo;</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-900 text-sm flex-shrink-0">{t.name[0]}</span>
                  <span><span className="block font-bold text-slate-900 text-sm">{t.name}</span><span className="block text-xs text-slate-500">Customer</span></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
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
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-3">
            {homeFaqs.map((f) => (
              <details key={f.q} className={`group ${card} p-5`}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-slate-900">
                  {f.q}
                  <ChevronRight className="w-5 h-5 text-green-800 transition-transform group-open:rotate-90 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed pr-9">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-slate-600">
            Want the full picture before you buy?{' '}
            <Link href="/composite-lpg-cylinder-buyers-guide" className="font-semibold text-green-900 underline underline-offset-4">Read our buyer&apos;s guide</Link>.
          </p>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-amber-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-1">Ready to Switch to Safety?</h2>
            <p className="text-slate-800 text-lg">Order on WhatsApp, or find an authorised dealer in your city.</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link href="/authorized-dealers" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-all">
              Find Dealers
            </Link>
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 rounded-xl font-semibold transition-all shadow-sm">
              <Phone className="w-4 h-4" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

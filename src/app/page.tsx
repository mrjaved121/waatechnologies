import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck, Feather, Eye, Droplets, MessageCircle, Truck, Flame,
  CheckCircle2, ArrowRight, ChevronRight,
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
  { name: '10 kg Composite Cylinder', colour: 'Yellow', slug: '10-kg-fiber-gas-cylinder', price: 11000, oldPrice: null, use: 'The everyday choice for family kitchens.', img: '/images/10kg-cylinder-yellow.jpg', tint: 'bg-amber-50', popular: true },
  { name: '5 kg Composite Cylinder', colour: 'Blue', slug: '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan', price: 8000, oldPrice: 8500, use: 'Small households, single burners, travel.', img: '/images/5kg-cylinder.jpg', tint: 'bg-sky-50', popular: false },
  { name: '10 kg Composite Cylinder', colour: 'Cerulean Blue', slug: 'lpg-composite-cylinder-10kg-cerulean-blue', price: 11000, oldPrice: null, use: 'Same cylinder, modern blue finish.', img: '/images/10kg-blue-Fiber-cylinder.jpg', tint: 'bg-blue-50', popular: false },
  { name: '10 kg Composite Cylinder', colour: 'Tiger Orange', slug: 'lpg-composite-cylinder-10kg-tiger-orange', price: 11000, oldPrice: null, use: 'Same cylinder, bold orange finish.', img: '/images/10kg-cylinder-orange.jpg', tint: 'bg-orange-50', popular: false },
];

const usps = [
  { icon: ShieldCheck, text: 'Non-blast by design' },
  { icon: Feather, text: 'Half the weight of steel' },
  { icon: Eye, text: 'See your gas level' },
  { icon: Droplets, text: 'Never rusts' },
  { icon: CheckCircle2, text: '20+ year rated life' },
];

const whyComposite = [
  { icon: ShieldCheck, title: 'It vents, it doesn’t burst', desc: 'No welded seams, no metal fatigue. In fire tests under ISO 11119-3 and BS EN 14427:2022, composite cylinders release gas through the wall instead of rupturing.' },
  { icon: Feather, title: 'About 5.5 kg empty', desc: 'A 10 kg WAA cylinder weighs roughly half of its steel equivalent, so it is easy to carry up stairs, into a kitchen or onto a food cart.' },
  { icon: Eye, title: 'You can see the gas', desc: 'The translucent body shows the level at a glance. No shaking, no guessing, no running out mid-meal.' },
  { icon: Droplets, title: 'Nothing to rust', desc: 'Polymer and fibre do not corrode. UV-stable outer layer keeps its colour outdoors, in humid kitchens and in coastal cities.' },
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

const steps = [
  { icon: MessageCircle, step: 'Step 1', title: 'Order on WhatsApp', desc: 'Pick a size and colour, tap Order. No account, no forms. A team member confirms availability on the chat.' },
  { icon: Truck, step: 'Step 2', title: 'Delivered by your dealer', desc: 'Your nearest authorised dealer supplies and delivers in Lahore, Rawalpindi–Islamabad, Sialkot, Karachi, Hyderabad and Peshawar.' },
  { icon: Flame, step: 'Step 3', title: 'Connect and cook', desc: 'Fits standard household LPG regulators. Refill or exchange through the same dealer network whenever it runs low.' },
];

const certifications = [
  { label: 'Certificate of Incorporation', desc: 'Securities & Exchange Commission of Pakistan', img: '/images/certificates/1-1.jpg' },
  { label: 'ISO 9001:2015', desc: 'Quality management system', img: '/images/certificates/waatechnologies-vertificate-ISO-9001-2015.jpg' },
  { label: 'ISO 11119-3', desc: 'Composite cylinders — CE Module B & C', img: '/images/certificates/waatechnologies-certificate-11119.jpg' },
  { label: 'BS EN 14427:2022', desc: 'Composite cylinders — CE Module B & C', img: '/images/certificates/waatechnologies-certificate-BSEN-14427-2022-e1747214241127.jpg' },
  { label: 'PEC Licence', desc: 'Pakistan Engineering Council', img: '/images/certificates/pec-waatech.jpeg' },
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

// ─── Small presentational helpers ─────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-6 bg-amber-500" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-green-800">{children}</span>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub, center = false }: { eyebrow: string; title: React.ReactNode; sub?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl mb-14 ${center ? 'mx-auto text-center' : ''}`}>
      <div className={center ? 'flex justify-center' : ''}><Eyebrow>{eyebrow}</Eyebrow></div>
      <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-950">{title}</h2>
      {sub && <p className="mt-5 text-lg text-slate-600 leading-relaxed">{sub}</p>}
    </div>
  );
}

const btnPrimary = 'inline-flex items-center justify-center gap-2 rounded-full bg-green-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-950';
const btnSecondary = 'inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-slate-900';
const card = 'rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_40px_-20px_rgba(0,0,0,0.18)]';

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-5 pt-16 pb-10 lg:pt-24 lg:pb-16 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Eyebrow>Made in Gujranwala &middot; Non-blast composite LPG</Eyebrow>
            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.02] text-slate-950">
              The gas cylinder that doesn&apos;t explode.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Composite cylinders with no welds and nothing to rust. Certified to ISO 11119-3 and BS EN 14427:2022,
              made in Pakistan, delivered through authorised dealers in six cities.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/shop" className={btnPrimary}>Shop cylinders <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/authorized-dealers" className={btnSecondary}>Find a dealer</Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              {['ISO 9001:2015', 'ISO 11119-3', 'BS EN 14427:2022', 'PEC licensed'].map((c) => (
                <li key={c} className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-700" />{c}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-[2rem] bg-[#F4F6F2] p-6 lg:p-10 overflow-hidden">
              <Image
                src="/images/hero-range.jpg"
                alt="WAATechnologies composite LPG cylinders in yellow, orange, cerulean blue and traditional blue"
                width={1197}
                height={1400}
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── USP STRIP ────────────────────────────────────────────────────── */}
      <section className="border-y border-slate-200/70 bg-[#F4F6F2]">
        <ul className="max-w-6xl mx-auto px-5 py-5 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {usps.map((u) => (
            <li key={u.text} className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <u.icon className="w-4 h-4 text-green-800" />{u.text}
            </li>
          ))}
        </ul>
      </section>

      {/* ─── RANGE ────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHead eyebrow="The range" title="Pick your cylinder." sub="Two sizes, four colours, one construction. Every cylinder is certified to the same standards." center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <article key={p.slug} className={`${card} relative overflow-hidden flex flex-col ${p.popular ? 'ring-2 ring-green-900' : ''}`}>
                {p.popular && <span className="absolute top-4 left-4 z-10 rounded-full bg-green-900 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1">Most popular</span>}
                {p.oldPrice && <span className="absolute top-4 right-4 z-10 rounded-full bg-amber-400 text-slate-900 text-[11px] font-semibold uppercase tracking-wider px-3 py-1">Sale</span>}
                <Link href={`/product/${p.slug}`} className={`block ${p.tint} aspect-square relative`}>
                  <Image src={p.img} alt={`${p.name} — ${p.colour}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-contain p-6" />
                </Link>
                <div className="p-5 flex flex-col flex-1">
                  <Link href={`/product/${p.slug}`} className="font-bold text-slate-950 leading-snug hover:text-green-900">{p.name}</Link>
                  <p className="text-sm text-slate-500 mt-0.5">{p.colour}</p>
                  <p className="text-sm text-slate-600 mt-3 flex-1">{p.use}</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-950">Rs {p.price.toLocaleString()}</span>
                    {p.oldPrice && <span className="text-sm text-slate-400 line-through">Rs {p.oldPrice.toLocaleString()}</span>}
                  </div>
                  <div className="mt-4"><OrderInquiryButton name={`${p.name} (${p.colour})`} price={p.price} compact /></div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Manufacturer list prices. Traditional Blue is also available &mdash;{' '}
            <Link href="/shop" className="font-semibold text-green-900 underline underline-offset-4">see all in the shop</Link>.
          </p>
        </div>
      </section>

      {/* ─── WHY COMPOSITE ────────────────────────────────────────────────── */}
      <section className="bg-[#F4F6F2] py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6">
            <SectionHead eyebrow="Why composite" title={<>Steel rusts and bursts. Composite vents.</>} sub="A pressure vessel fails at its weakest point. A welded steel cylinder has seams and corrosion; a filament-wound composite cylinder has neither." />
            <ul className="space-y-7">
              {whyComposite.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200/70 text-green-800"><f.icon className="w-5 h-5" /></span>
                  <div>
                    <h3 className="font-bold text-slate-950">{f.title}</h3>
                    <p className="mt-1 text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/are-composite-lpg-cylinders-safe-pakistan" className="mt-9 inline-flex items-center gap-1 font-semibold text-green-900 hover:text-green-950">
              Read the full safety guide <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-[2rem] overflow-hidden">
              <Image src="/images/lifestyle-kitchen.jpg" alt="Cooking at home with WAATechnologies composite LPG cylinders" width={1000} height={900} sizes="(max-width: 1024px) 100vw, 560px" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPECIFICATIONS ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="Specifications" title="Built to a standard, not a guess." sub="The 10 kg cylinder, as tested and certified. The 5 kg uses the same construction with a smaller capacity." />
            <div className="rounded-[2rem] overflow-hidden">
              <Image src="/images/lifestyle-outdoor.jpg" alt="WAATechnologies composite cylinder with an outdoor heater" width={1000} height={986} sizes="(max-width: 1024px) 100vw, 460px" className="w-full h-auto" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className={`${card} overflow-hidden`}>
              <div className="px-6 py-4 border-b border-slate-200/70 flex items-center justify-between">
                <span className="font-bold text-slate-950">10 kg composite LPG cylinder</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-green-800">Technical data</span>
              </div>
              <dl className="divide-y divide-slate-200/70">
                {specs.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-2 px-6 py-3.5 text-sm">
                    <dt className="text-slate-500">{k}</dt>
                    <dd className="font-semibold text-slate-950 text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-4 text-xs text-slate-500">Figures from the manufacturer&apos;s technical specification sheet. Capacities are nominal fill weights; the cylinder is filled by weight at authorised dealers.</p>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-[#F4F6F2] py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHead eyebrow="Ordering" title="Order today. Cooking in days." center />
          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div key={s.step} className={`${card} p-7`}>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-50 text-green-800"><s.icon className="w-5 h-5" /></span>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-600">{s.step}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-950">{s.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/shop" className={btnPrimary}>Shop cylinders <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHead eyebrow="Certified" title="The proof, in full." sub="Every certificate opens at full size. Check the registration numbers against the issuing body." center />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {certifications.map((c) => (
              <a key={c.label} href={c.img} target="_blank" rel="noopener noreferrer" className={`${card} overflow-hidden group`}>
                <div className="relative aspect-[3/4] bg-slate-50">
                  <Image src={c.img} alt={`${c.label} certificate — WAATechnologies`} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover transition group-hover:scale-[1.02]" />
                </div>
                <div className="p-4">
                  <p className="font-bold text-slate-950 text-sm">{c.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUYER'S GUIDE ────────────────────────────────────────────────── */}
      <section className="bg-[#F4F6F2] py-24 lg:py-28">
        <div className="max-w-3xl mx-auto px-5">
          <SectionHead eyebrow="Buyer’s guide" title="Composite LPG cylinders in Pakistan: what every buyer should know." />
          <div className="prose prose-slate max-w-none prose-headings:font-black prose-h3:text-2xl prose-h3:tracking-tight prose-a:text-green-800 prose-p:leading-relaxed">
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
      <section className="bg-white py-24 lg:py-28">
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
        <div className="max-w-3xl mx-auto px-5">
          <SectionHead eyebrow="FAQ" title="Questions, answered." center />
          <div className="divide-y divide-slate-200/70 border-y border-slate-200/70">
            {homeFaqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-slate-950">
                  {f.q}
                  <ChevronRight className="w-5 h-5 text-green-800 transition-transform group-open:rotate-90 flex-shrink-0" />
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed pr-9">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="bg-[#F4F6F2] py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHead eyebrow="Customers" title="What people say after switching." center />
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <figure key={t.name} className={`${card} p-7`}>
                <blockquote className="text-slate-700 leading-relaxed">&ldquo;{t.text}&rdquo;</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-900 text-white text-sm font-bold">{t.name[0]}</span>
                  <span><span className="block text-sm font-bold text-slate-950">{t.name}</span><span className="block text-xs text-slate-500">Customer</span></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-green-900 text-white py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">Ready to switch to a safer cylinder?</h2>
            <p className="mt-4 text-green-100 text-lg">Order on WhatsApp, or find an authorised dealer in Lahore, Rawalpindi&ndash;Islamabad, Sialkot, Karachi, Hyderabad or Peshawar.</p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
            <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">Shop cylinders <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/authorized-dealers" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Find a dealer</Link>
          </div>
        </div>
      </section>
    </>
  );
}

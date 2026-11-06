import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Check, X, MessageCircle, Truck, Flame, ChevronRight, ArrowRight, Quote } from 'lucide-react';
import OrderInquiryButton from '@/components/OrderInquiryButton';
import SizeHelper from '@/components/SizeHelper';

export const metadata: Metadata = {
  title: { absolute: 'Composite LPG Gas Cylinder in Pakistan | WAATechnologies' },
  description:
    'Non-blast composite LPG cylinders made in Gujranwala, certified to ISO 11119-3 and EN 14427. 5 kg and 10 kg sizes, dealers nationwide. Order on WhatsApp.',
  alternates: { canonical: 'https://waatechnologies.com' },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const products = [
  {
    name: '10 Kg Composite Cylinder', colour: 'Yellow', dot: '#F2C230',
    slug: '10-kg-fiber-gas-cylinder', price: 11000, oldPrice: null,
    fit: 'The everyday choice for family kitchens.',
    img: '/images/10kg-cylinder-yellow.jpg', tint: 'bg-[#FBF4E2]',
    flag: 'Most popular', featured: true,
  },
  {
    name: '5 Kg Composite Cylinder', colour: 'Blue', dot: '#2C6FD1',
    slug: '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan', price: 8000, oldPrice: 8500,
    fit: 'Small households, single burners and travel.',
    img: '/images/5kg-cylinder.jpg', tint: 'bg-[#E9F0F8]',
    flag: 'Sale', featured: false,
  },
  {
    name: '10 Kg Composite Cylinder', colour: 'Cerulean Blue', dot: '#1E4FC2',
    slug: 'lpg-composite-cylinder-10kg-cerulean-blue', price: 11000, oldPrice: null,
    fit: 'The same cylinder in a modern blue finish.',
    img: '/images/10kg-blue-Fiber-cylinder.jpg', tint: 'bg-[#E8EEF9]',
    flag: null, featured: false,
  },
  {
    name: '10 Kg Composite Cylinder', colour: 'Tiger Orange', dot: '#F07A1F',
    slug: 'lpg-composite-cylinder-10kg-tiger-orange', price: 11000, oldPrice: null,
    fit: 'The same cylinder in a bold orange finish.',
    img: '/images/10kg-cylinder-orange.jpg', tint: 'bg-[#FBEDE1]',
    flag: null, featured: false,
  },
];

const credentials = ['ISO 9001:2015', 'ISO 11119-3', 'BS EN 14427:2022', 'PEC licensed', 'SECP incorporated'];

const steps = [
  {
    icon: MessageCircle, step: 'Step 1', title: 'Message us on WhatsApp',
    desc: 'Pick a size and colour and tap Order. No account and no forms — we confirm availability in the chat.',
  },
  {
    icon: Truck, step: 'Step 2', title: 'Your dealer delivers',
    desc: 'The nearest authorised dealer supplies and delivers the cylinder, filled and checked.',
  },
  {
    icon: Flame, step: 'Step 3', title: 'Connect and cook',
    desc: 'Your existing household regulator fits. Refill or exchange through the same dealer whenever it runs low.',
  },
];

const compositePoints = [
  'Jointless body — no welded seams to fail',
  'Vents gas through the wall in a fire instead of bursting',
  'About 5.5 kg empty, roughly half a steel cylinder',
  'Translucent body shows the gas level at a glance',
  'Never rusts, never stains the kitchen floor',
  '20+ year rated service life under ISO 11119-3',
];

const steelPoints = [
  'Welded seams are the weak point',
  'Can rupture under pressure or in a fire',
  'Heavy to lift, carry and move',
  'You lift, shake or guess how much is left',
  'Rusts from the inside and marks the floor',
  'Weakens as the body corrodes',
];

const useCases = [
  {
    title: 'At home', fit: '10 kg', img: '/images/lifestyle-kitchen.jpg',
    alt: 'Cooking at home with a WAATechnologies composite LPG cylinder',
    text: 'A 10 kg cylinder runs a family kitchen for weeks of daily cooking, and anyone in the house can carry it.',
  },
  {
    title: 'Restaurants and food carts', fit: '10 kg', img: '/images/hero-range.jpg',
    alt: 'The WAATechnologies composite cylinder range in four colours',
    text: 'A lighter cylinder and a visible gas level mean fewer surprises in the middle of service.',
    href: '/why-restaurants-switching-composite-lpg-cylinders-pakistan',
  },
  {
    title: 'Outdoors and travel', fit: '5 kg', img: '/images/lifestyle-outdoor.jpg',
    alt: 'A WAATechnologies composite cylinder with an outdoor heater',
    text: 'Light enough for rooftop cooking, camping and road trips, and it does not corrode when stored outside.',
  },
];

const cities = ['Lahore', 'Rawalpindi–Islamabad', 'Karachi', 'Sialkot', 'Hyderabad', 'Peshawar'];

const certifications = [
  { label: 'Certificate of Incorporation', desc: 'SECP', img: '/images/certificates/1-1.jpg' },
  { label: 'ISO 9001:2015', desc: 'Quality management', img: '/images/certificates/waatechnologies-vertificate-ISO-9001-2015.jpg' },
  { label: 'ISO 11119-3', desc: 'Composite cylinders', img: '/images/certificates/waatechnologies-certificate-11119.jpg' },
  { label: 'BS EN 14427:2022', desc: 'Composite cylinders', img: '/images/certificates/waatechnologies-certificate-BSEN-14427-2022-e1747214241127.jpg' },
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
  { q: 'Is a composite cylinder lighter than a steel one?', a: 'Yes, significantly. A 10 kg WAA cylinder weighs about 5.5 kg empty, roughly half a steel cylinder of the same capacity, which matters for elderly users, upper-floor homes and busy restaurant kitchens.' },
  { q: 'Where can I buy a WAATechnologies cylinder?', a: 'From authorised dealers in Lahore, Rawalpindi and Islamabad, Sialkot, Karachi, Hyderabad and Peshawar, listed with addresses and phone numbers on our dealers page, or by ordering on WhatsApp for delivery.' },
  { q: 'How do I refill or exchange a composite cylinder?', a: 'Through the authorised dealer network. Dealers refill by weight and check the valve and body each time. Never refill a cylinder yourself or at an unlicensed roadside setup.' },
  { q: 'Will it work with my existing regulator?', a: 'WAA cylinders are designed for the standard household LPG regulators sold in Pakistan, so your current regulator and hose connect exactly as before.' },
  { q: 'Is WAATechnologies a Pakistani company?', a: 'Yes. WAATechnologies Pvt Ltd is SECP-incorporated, PEC-licensed and manufactures its cylinders in Gujranwala, Punjab, with a head office in Bahria Town, Lahore.' },
  { q: 'Which certifications do the cylinders hold?', a: 'ISO 9001:2015 quality management, ISO 11119-3 and BS EN 14427:2022 for the cylinders themselves, plus a Pakistan Engineering Council (PEC) licence.' },
];

// ─── Shared presentation ─────────────────────────────────────────────────────

function Eyebrow({ children, tone = 'brand' }: { children: React.ReactNode; tone?: 'brand' | 'amber' }) {
  return (
    <span className={`text-xs font-bold uppercase tracking-[0.16em] ${tone === 'amber' ? 'text-amber-brand' : 'text-brand'}`}>
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3.5 text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.06] tracking-tight text-brand-dark">{title}</h2>
      {sub && <p className="text-[17px] leading-relaxed text-muted">{sub}</p>}
    </div>
  );
}

const btnBrand = 'inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xl bg-brand px-6 text-base font-semibold text-white transition-colors hover:bg-brand-dark';
const btnOutline = 'inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xl border-[1.5px] border-slate-300 bg-white px-6 text-base font-semibold text-ink transition-colors hover:border-brand';

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-11 px-6 pb-20 pt-16 lg:gap-16">
          <div className="flex min-w-0 flex-[1_1_26rem] flex-col gap-6">
            <Eyebrow>Made in Gujranwala, Pakistan</Eyebrow>
            <h1 className="font-display text-[clamp(2.6rem,5.4vw,4.25rem)] font-extrabold leading-[1.0] tracking-tight text-brand-dark">
              It vents.<br />It doesn&apos;t burst.
            </h1>
            <p className="max-w-md text-[19px] leading-relaxed text-muted">
              The composite LPG cylinder with no welds and nothing to rust — half the weight of steel,
              and you can see the gas inside.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop" className={btnBrand}>
                See cylinders &amp; prices <ArrowRight className="h-[18px] w-[18px]" />
              </Link>
              <Link href="/authorized-dealers" className={btnOutline}>Find a dealer</Link>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2.5 pt-1">
              {['ISO 11119-3', 'BS EN 14427:2022', 'PEC licensed'].map((c) => (
                <li key={c} className="flex items-center gap-1.5 text-sm font-medium text-[#3E4C46]">
                  <Check className="h-[17px] w-[17px] text-brand" strokeWidth={2.4} />{c}
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative m-0 min-w-0 flex-[1_1_26rem]">
            <div className="flex min-h-[26rem] items-center justify-center rounded-[1.75rem] bg-tint p-10">
              <Image
                src="/images/orange-cylinder-transparent.png"
                alt="WAATechnologies 10 kg composite LPG cylinder in tiger orange"
                width={1024}
                height={1024}
                priority
                sizes="(max-width: 1024px) 80vw, 360px"
                className="h-auto w-full max-w-[22.5rem]"
              />
            </div>
            <div className="absolute bottom-6 left-3.5 rounded-2xl border border-line bg-white px-4 py-3 shadow-[0_12px_28px_rgba(11,53,40,0.10)]">
              <span className="block font-display text-2xl font-extrabold leading-none text-brand-dark">5.5 kg</span>
              <span className="mt-1.5 block text-xs text-muted">empty — about half of steel</span>
            </div>
            <div className="absolute right-3.5 top-6 rounded-2xl bg-amber-brand px-4 py-3 shadow-[0_12px_28px_rgba(11,53,40,0.12)]">
              <span className="block font-display text-2xl font-extrabold leading-none text-ink">20+ years</span>
              <span className="mt-1.5 block text-xs text-[#4A3A10]">rated service life</span>
            </div>
          </figure>
        </div>
      </section>

      {/* ─── CREDENTIAL STRIP ─────────────────────────────────────────────── */}
      <section aria-label="Certifications" className="border-y border-line bg-[#FAFBFA]">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2.5 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#52605A]">
          {credentials.map((c, i) => (
            <li key={c} className="flex items-center gap-x-6">
              {i > 0 && <span aria-hidden="true" className="text-[#A8B6AF]">·</span>}
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* ─── THE RANGE ────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead
            eyebrow="The range"
            title="Two sizes. Four colours. One construction."
            sub="Every cylinder is built and certified the same way. Prices are manufacturer list prices."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article
                key={p.slug}
                className={`relative flex flex-col gap-4.5 rounded-[1.375rem] bg-white p-5.5 ${
                  p.featured ? 'border-2 border-brand' : 'border border-line'
                }`}
              >
                {p.flag && (
                  <span
                    className={`absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] ${
                      p.featured ? 'bg-brand text-white' : 'bg-amber-brand text-ink'
                    }`}
                  >
                    {p.flag}
                  </span>
                )}
                <Link href={`/product/${p.slug}`} className={`relative block aspect-square overflow-hidden rounded-2xl ${p.tint}`}>
                  <Image
                    src={p.img}
                    alt={`${p.name} — ${p.colour}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </Link>
                <div className="flex flex-col gap-1.5 text-center">
                  <Link href={`/product/${p.slug}`} className="font-display text-xl font-bold text-brand-dark hover:text-brand">
                    {p.name}
                  </Link>
                  <span className="inline-flex items-center justify-center gap-1.5 text-sm text-muted">
                    <span className="inline-block h-3 w-3 shrink-0 rounded-full" style={{ background: p.dot }} />
                    {p.colour}
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.fit}</p>
                </div>
                <div className="mt-auto flex flex-col items-center gap-3">
                  <span className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-extrabold text-brand-dark">Rs {p.price.toLocaleString()}</span>
                    {p.oldPrice && <span className="text-[15px] text-[#7C8A83] line-through">Rs {p.oldPrice.toLocaleString()}</span>}
                  </span>
                  <OrderInquiryButton
                    name={`${p.name} (${p.colour})`}
                    price={p.price}
                    compact
                    tone={p.featured ? 'brand' : 'outline'}
                  />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/shop" className="inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-dark">
              See every cylinder in the shop <ChevronRight className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SIZE HELPER ──────────────────────────────────────────────────── */}
      <section className="bg-tint py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6">
          <SectionHead eyebrow="Help me choose" title="Which size suits your kitchen?" />
          <SizeHelper />
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead eyebrow="How it works" title={<>Order today.<br />Cooking in days.</>} />
          <ol className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.step} className="flex flex-col gap-3 rounded-[1.25rem] border border-line bg-[#FAFBFA] p-7">
                <span className="flex h-11.5 w-11.5 items-center justify-center rounded-[0.8rem] bg-tint text-brand">
                  <s.icon className="h-5.5 w-5.5" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7C8A83]">{s.step}</span>
                <h3 className="font-display text-[19px] font-bold text-brand-dark">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── COMPOSITE VS STEEL ───────────────────────────────────────────── */}
      <section className="bg-tint py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead eyebrow="Composite or steel" title="Not a close call." />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-5 rounded-[1.375rem] border-2 border-brand bg-white p-8">
              <h3 className="font-display text-[21px] font-extrabold text-brand-dark">WAA composite cylinder</h3>
              <ul className="flex flex-col gap-4">
                {compositePoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DCEDE5] text-[#0B4A37]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3.2} />
                    </span>
                    <span className="font-medium leading-relaxed text-ink">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5 rounded-[1.375rem] border border-line bg-white p-8">
              <h3 className="font-display text-[21px] font-bold text-muted">Conventional steel cylinder</h3>
              <ul className="flex flex-col gap-4">
                {steelPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ECEFED] text-[#4F5C56]">
                      <X className="h-3.5 w-3.5" strokeWidth={3.2} />
                    </span>
                    <span className="leading-relaxed text-muted">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/are-composite-lpg-cylinders-safe-pakistan" className="inline-flex items-center gap-1.5 text-base font-semibold text-brand hover:text-brand-dark">
              Read the full safety guide <ChevronRight className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── USE CASES ────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead eyebrow="Where it is used" title="Wherever you cook." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {useCases.map((u) => (
              <article key={u.title} className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-tint">
                  <Image src={u.img} alt={u.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-bold text-brand-dark">{u.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{u.text}</p>
                  {u.href ? (
                    <Link href={u.href} className="inline-flex items-center gap-1 self-start text-sm font-semibold text-brand hover:text-brand-dark">
                      Read more <ChevronRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="self-start rounded-lg bg-tint px-3 py-1.5 text-[13px] font-semibold text-[#0B4A37]">Best fit · {u.fit}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEALERS ──────────────────────────────────────────────────────── */}
      <section className="bg-white pb-24">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 rounded-[1.75rem] bg-brand-dark px-11 py-13 text-[#CFE0D7] lg:gap-12">
          <div className="flex min-w-0 flex-[1_1_25rem] flex-col gap-4">
            <Eyebrow tone="amber">Authorised dealers</Eyebrow>
            <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.375rem)] font-extrabold leading-tight text-white">
              Buy, refill and exchange in six cities.
            </h2>
            <p className="max-w-lg leading-relaxed">
              Only authorised dealers sell genuine WAATechnologies cylinders. They fill by weight and check the
              valve and body every time.
            </p>
            <ul className="flex flex-wrap gap-2">
              {cities.map((c) => (
                <li key={c} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">{c}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-1.5">
              <Link href="/authorized-dealers" className="inline-flex min-h-12 items-center rounded-xl bg-amber-brand px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-[#E09C14]">
                See all dealers
              </Link>
              <Link href="/contact-us" className="inline-flex min-h-12 items-center rounded-xl border border-white/30 px-5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10">
                Become a dealer
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-display text-[clamp(3rem,5.4vw,4rem)] font-extrabold leading-none text-amber-brand">6</span>
            <span className="max-w-[11rem] text-sm">cities with authorised dealer supply and refilling</span>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="bg-white pb-24">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-11 px-6 lg:gap-16">
          <div className="min-w-0 flex-[1_1_26rem] overflow-hidden rounded-3xl bg-tint">
            <Image
              src="/images/hero-range.jpg"
              alt="The WAATechnologies composite cylinder range in yellow, orange and blue"
              width={1197}
              height={1400}
              sizes="(max-width: 1024px) 100vw, 520px"
              className="h-auto w-full"
            />
          </div>
          <div className="flex min-w-0 flex-[1_1_25rem] flex-col gap-4.5">
            <Eyebrow>About WAATechnologies</Eyebrow>
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.625rem)] font-extrabold leading-tight text-brand-dark">
              Pakistan&apos;s first composite cylinder manufacturer.
            </h2>
            <p className="text-[17px] leading-relaxed text-muted">
              WAATechnologies Pvt Ltd was formed in 2022 in Gujranwala after research and development that began in
              2018. Every component of the cylinder is produced in-house at a 26,000 sq ft facility housing the
              production plant, storage and R&amp;D compound.
            </p>
            <div className="grid grid-cols-1 gap-3.5 pt-1.5 sm:grid-cols-3">
              {[
                { v: '2022', l: 'company formed, R&D from 2018' },
                { v: '26,000', l: 'sq ft facility in Gujranwala' },
                { v: 'SECP', l: 'incorporated and PEC licensed' },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-line bg-[#FAFBFA] p-4.5">
                  <span className="block font-display text-[22px] font-extrabold text-brand-dark">{s.v}</span>
                  <span className="mt-1 block text-[13px] text-muted">{s.l}</span>
                </div>
              ))}
            </div>
            <Link href="/our-technology" className="inline-flex items-center gap-1.5 pt-1 text-base font-semibold text-brand hover:text-brand-dark">
              Our story and technology <ChevronRight className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATES ─────────────────────────────────────────────────── */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[1.75rem] border border-line bg-[#FAFBFA] p-8 sm:p-10">
            <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.16em] text-brand">
              Certificates and licences — click any to open it full size
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {certifications.map((c) => (
                <a
                  key={c.label}
                  href={c.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl border border-line bg-white"
                >
                  <div className="relative aspect-[3/4] bg-slate-50">
                    <Image src={c.img} alt={`${c.label} certificate — WAATechnologies`} fill sizes="(max-width: 768px) 45vw, 18vw" className="object-cover transition-transform group-hover:scale-[1.02]" />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-xs font-bold leading-tight text-brand-dark">{c.label}</p>
                    <p className="mt-0.5 text-[11px] text-muted">{c.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CUSTOMERS ────────────────────────────────────────────────────── */}
      <section className="bg-tint py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead eyebrow="Customers" title="Kitchens that switched." />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="m-0 flex flex-col gap-4 rounded-[1.25rem] bg-white p-7">
                <Quote className="h-6.5 w-6.5 text-[#9FB8AC]" />
                <blockquote className="leading-relaxed text-ink">{t.text}</blockquote>
                <figcaption className="text-sm font-medium text-muted">{t.name} · Customer</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
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
        <div className="mx-auto max-w-3xl px-6">
          <SectionHead eyebrow="Support" title="Questions, answered." />
          <div className="flex flex-col border-t border-line">
            {homeFaqs.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-5 text-[17px] font-semibold text-ink">
                  {f.q}
                  <ChevronRight className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-90" />
                </summary>
                <p className="pb-6 pr-9 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-muted">
            Want the full picture before you buy?{' '}
            <Link href="/composite-lpg-cylinder-buyers-guide" className="font-semibold text-brand underline underline-offset-4">
              Read the buyer&apos;s guide
            </Link>
          </p>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="bg-white pb-24">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 rounded-[1.75rem] border border-line bg-tint px-11 py-13">
          <div className="flex min-w-0 flex-[1_1_22rem] flex-col gap-3">
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.5rem)] font-extrabold leading-tight text-brand-dark">
              Ready to switch to a safer cylinder?
            </h2>
            <p className="text-[17px] leading-relaxed text-muted">
              Order on WhatsApp for delivery, or find your nearest authorised dealer. Bulk and dealer enquiries welcome.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/shop" className={btnBrand}>Shop cylinders <ArrowRight className="h-[18px] w-[18px]" /></Link>
            <Link href="/authorized-dealers" className={btnOutline}>Find a dealer</Link>
          </div>
        </div>
      </section>
    </>
  );
}

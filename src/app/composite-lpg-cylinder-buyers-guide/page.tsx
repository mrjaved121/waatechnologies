import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Composite LPG Cylinder Buyer\'s Guide for Pakistan',
  description:
    'What a composite LPG cylinder is, how it differs from steel, sizes and prices in Pakistan, how to spot a genuine WAATechnologies cylinder, and where to buy, refill and exchange.',
  alternates: { canonical: 'https://waatechnologies.com/composite-lpg-cylinder-buyers-guide' },
  openGraph: {
    title: 'Composite LPG Cylinder Buyer\'s Guide for Pakistan',
    description: 'Sizes, prices, safety, certification and where to buy composite LPG cylinders in Pakistan.',
    url: 'https://waatechnologies.com/composite-lpg-cylinder-buyers-guide',
    type: 'article',
  },
};

const quickFacts = [
  'Two sizes: 5 kg (Rs 8,000) and 10 kg (Rs 11,000)',
  'Four 10 kg colours: Yellow, Cerulean Blue, Tiger Orange, Traditional Blue',
  'Certified to ISO 11119-3 and BS EN 14427:2022',
  'Made in Gujranwala by an SECP-incorporated, PEC-licensed company',
  'Sold, refilled and exchanged through authorised dealers in six cities',
];

export default function BuyersGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Composite LPG Cylinders in Pakistan: What Every Buyer Should Know',
            description: metadata.description,
            mainEntityOfPage: 'https://waatechnologies.com/composite-lpg-cylinder-buyers-guide',
            datePublished: '2026-11-04',
            dateModified: '2026-11-06',
            author: { '@type': 'Organization', name: 'WAATechnologies Pvt Ltd', url: 'https://waatechnologies.com' },
            publisher: { '@type': 'Organization', name: 'WAATechnologies Pvt Ltd', url: 'https://waatechnologies.com' },
          }),
        }}
      />

      {/* ─── HEADER ───────────────────────────────────────────────────────── */}
      <section className="gradient-green text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-amber-300 inline-block" />
            <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">Buyer&apos;s Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
            Composite LPG Cylinders in Pakistan: What Every Buyer Should Know
          </h1>
          <p className="text-green-100 text-lg leading-relaxed max-w-2xl">
            Everything to check before you replace a steel cylinder with a composite one: how it is built, what it costs,
            how to tell a genuine cylinder from a copy, and where to buy, refill and exchange it.
          </p>
        </div>
      </section>

      {/* ─── BODY ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-12">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Quick facts</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {quickFacts.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-800 flex-shrink-0 mt-0.5" />{f}
                </li>
              ))}
            </ul>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-black prose-h2:text-3xl prose-h2:tracking-tight prose-a:text-green-800 prose-p:leading-relaxed">
            <h2>What is a composite LPG cylinder?</h2>
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

            <h2>Made in Pakistan, in Gujranwala</h2>
            <p>
              WAATechnologies Pvt Ltd manufactures its composite cylinders at its facility in Gujranwala, Punjab, with a head
              office in Bahria Town, Lahore. The company is SECP-incorporated and PEC-licensed, and the cylinders are produced
              under ISO 9001:2015 quality management and certified to ISO 11119-3 and BS EN 14427:2022, the same international
              standards that imported composite cylinders carry. Building locally means dealer supply, refills and support are
              handled inside Pakistan. Read more about <Link href="/our-technology">how the cylinders are made</Link>.
            </p>

            <h2>Sizes, colours and prices</h2>
            <p>
              WAA cylinders come in two household sizes. The <strong>5 kg composite cylinder (Rs 8,000)</strong> suits small
              families, single-burner cooking, travel and camping. The <strong>10 kg composite cylinder (Rs 11,000)</strong> is
              the everyday choice for family kitchens and comes in four finishes: Yellow, Cerulean Blue, Tiger Orange and
              Traditional Blue. Both sizes share the same non-blast construction and the same certifications; only capacity and
              colour differ. See current options in the <Link href="/shop">shop</Link>.
            </p>

            <h2>Composite vs steel: the practical differences</h2>
            <p>
              A 10 kg WAA cylinder weighs about 5.5 kg empty, roughly half of a steel cylinder of the same capacity, which
              matters for elderly users, upper-floor flats and restaurant staff who move cylinders every day. It does not rust,
              so it leaves no stains on the kitchen floor and does not weaken over the years the way a corroding steel body
              does; the rated service life is 20+ years. And because the body is translucent, you can plan a refill before the
              gas runs out rather than discovering an empty cylinder mid-meal.
            </p>

            <h2>Who uses them</h2>
            <p>
              Households moving away from steel &ldquo;gola&rdquo; cylinders are the largest group. Composite cylinders are also
              used by <Link href="/why-restaurants-switching-composite-lpg-cylinders-pakistan">restaurants</Link> and{' '}
              <Link href="/composite-lpg-cylinders-food-trucks-street-vendors-pakistan">food trucks</Link>, where a lighter
              cylinder and a visible gas level mean fewer mid-service surprises, as well as by outdoor cooks, campers and
              businesses that store several cylinders and want to cut corrosion and handling risk.
            </p>

            <h2>How to make sure yours is genuine</h2>
            <p>
              Buy only from an <Link href="/authorized-dealers">authorised WAATechnologies dealer</Link>. A genuine cylinder has
              a translucent composite body that shows the gas level and carries the WAATechnologies branding embossed on the
              body in four places, along with the certification markings. If a seller cannot show the certification marking or
              is not on our dealer list, do not buy; call us and we will verify the dealer for you.
            </p>

            <h2>Where to buy, refill and exchange</h2>
            <p>
              Authorised dealers are listed with addresses and phone numbers for Lahore, Rawalpindi and Islamabad, Sialkot,
              Karachi, Hyderabad and Peshawar, and you can order on WhatsApp for delivery. Refills and exchanges go through the
              dealer network, which fills by weight and checks the valve and body each time. Never refill a cylinder yourself or
              at an unlicensed roadside setup. Our guide explains{' '}
              <Link href="/how-to-refill-composite-lpg-cylinder-pakistan">how refilling works step by step</Link>.
            </p>

            <h2>Using it safely at home</h2>
            <p>
              A composite cylinder connects to the standard household LPG regulators sold in Pakistan. Keep it upright, in a
              ventilated spot away from direct heat, and check the hose and regulator seal each time you change cylinders. Our
              step-by-step guide shows{' '}
              <Link href="/how-to-safely-connect-lpg-cylinder-regulator-at-home">how to connect a regulator safely</Link>, and
              our storage guide covers{' '}
              <Link href="/how-to-store-lpg-cylinder-safely-home-pakistan-ogra-rules">OGRA rules for storing cylinders</Link>.
            </p>
          </div>

          <div className="mt-12 rounded-3xl overflow-hidden shadow-lg">
            <Image src="/images/lifestyle-outdoor.jpg" alt="WAATechnologies composite cylinder with an outdoor heater" width={1000} height={986} sizes="(max-width: 1024px) 100vw, 900px" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-amber-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-1">Ready to Switch to Safety?</h2>
            <p className="text-slate-800 text-lg">Order on WhatsApp, or find an authorised dealer in your city.</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link href="/shop" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-all">
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/authorized-dealers" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 rounded-xl font-semibold transition-all shadow-sm">
              Find Dealers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

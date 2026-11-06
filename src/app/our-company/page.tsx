import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Factory, Globe, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Company',
  description:
    'WAATechnologies Pvt Ltd — Pakistan\'s composite LPG cylinder manufacturer. 26,000 sq ft facility in Gujranwala. ISO 9001-2015 & EN 14427-2022 certified.',
  alternates: { canonical: 'https://waatechnologies.com/our-company' },
};

export default function OurCompanyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <Link href="/about-us" className="text-green-200 hover:text-white text-sm transition-colors">About Us</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Our Company</span>
          </div>
          <h1 className="text-5xl font-black mb-4">OUR COMPANY</h1>
          <p className="text-green-100 text-xl max-w-2xl">
            Building Pakistan&apos;s energy future with world-class composite cylinder manufacturing.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-black text-ink mb-5">WAATechnologies Pvt Ltd</h2>
            <p className="text-muted leading-relaxed mb-4">
              WAATechnologies PVT LTD is a Pakistani company formally established in 2022, with R&D work
              commenced in 2018 under the leadership of experienced engineers and industrial experts. We are
              headquartered in Bahria Town, Lahore, with our manufacturing facility in Gujranwala spanning
              26,000 square feet.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Our company is the first in Pakistan to successfully develop and manufacture composite gas
              cylinders indigenously using advanced filament winding technology. Every cylinder is
              non-blast, corrosion-free, and built to last 20+ years.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              We are approved by Pakistan Engineering Council (PEC) and operate from a 26,000 sq ft
              manufacturing facility in Gujranwala — giving you complete assurance of quality, safety,
              and compliance.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Indigenously manufactured in Pakistan',
                'Pakistan\'s first composite LPG cylinder manufacturer',
                'PEC Licensed manufacturing facility',
                'Hydro-tested with air leakage testing on each unit',
                '20+ year rated service life per cylinder',
                'Serving homes, restaurants & businesses nationwide',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-ink">
                  <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {[
              {
                icon: Factory,
                title: 'Manufacturing Facility',
                desc: '26,000 sq ft state-of-the-art plant in Gujranwala, operational since 2022. Equipped with CNC filament winding machines and automated pressure testing equipment.',
              },
              {
                icon: Globe,
                title: 'International Quality',
                desc: 'Every cylinder is engineered and tested to meet the most rigorous international safety requirements for composite pressure vessels — built to world-class standards.',
              },
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To pioneer technological innovation, enforce safety imperatives, and strengthen national energy security through blast-proof fiber composite LPG cylinders made in Pakistan.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-tint rounded-2xl p-6 border border-line">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tint text-brand rounded-xl flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink mb-2">{card.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-tint">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { val: '2022', label: 'Established' },
              { val: '26K sqft', label: 'Plant Area' },
              { val: '20+', label: 'Year Lifespan' },
              { val: '3', label: 'Dealer Provinces' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-8 shadow-sm border border-line">
                <div className="text-4xl font-black text-brand mb-2">{s.val}</div>
                <div className="text-muted font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

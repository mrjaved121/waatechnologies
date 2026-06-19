import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Factory, Globe, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Company',
  description:
    'WAA Technologies Pvt Ltd — Pakistan\'s composite LPG cylinder manufacturer. 26,000 sq ft facility in Gujranwala. ISO 9001-2015 & EN 14427-2022 certified.',
  alternates: { canonical: 'https://waatechnologies.com/our-company' },
};

export default function OurCompanyPage() {
  return (
    <>
      <section className="gradient-green py-20 text-white">
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
            <h2 className="text-3xl font-black text-slate-900 mb-5">WAA Technologies Pvt Ltd</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              WAA TECHNOLOGIES PVT LTD is a Pakistani company formally established in 2022, with R&D work
              commenced in 2018 under the leadership of experienced engineers and industrial experts. We are
              headquartered in Bahria Town, Lahore, with our manufacturing facility in Gujranwala spanning
              26,000 square feet.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our company is the first in Pakistan to successfully develop and manufacture composite gas
              cylinders indigenously using advanced filament winding technology. Our cylinders are
              manufactured in strict conformance with international standards including ISO 11119-3 and
              BS EN 14427-2022.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              We are approved by Pakistan Engineering Council (PEC) and overseen by the Oil and Gas
              Regulatory Authority (OGRA) Pakistan — giving you complete assurance of quality,
              safety, and compliance.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Indigenously manufactured in Pakistan',
                'ISO 9001-2015 Quality Management certified',
                'ISO 11119-3 composite cylinder standards',
                'EN 14427-2022 British/European compliance',
                'PEC approved, OGRA regulated',
                'Hydro-tested with air leakage testing on each unit',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
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
                title: 'International Standards',
                desc: 'Every cylinder is designed, tested, and certified against ISO 11119-3 and BS EN 14427-2022 — the most rigorous international standards for composite pressure vessels.',
              },
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To pioneer technological innovation, enforce safety imperatives, and strengthen national energy security through blast-proof fiber composite LPG cylinders made in Pakistan.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { val: '2022', label: 'Established' },
              { val: '26K sqft', label: 'Plant Area' },
              { val: '6+', label: 'Certifications' },
              { val: '3', label: 'Dealer Provinces' },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="text-4xl font-black text-green-700 mb-2">{s.val}</div>
                <div className="text-slate-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

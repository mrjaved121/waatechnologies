import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Users, Building2, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about WAATechnologies — Pakistan\'s pioneer in composite LPG cylinder manufacturing. Founded in 2017, ISO certified, with a 26,000 sq ft facility in Gujranwala.',
  alternates: { canonical: 'https://waatechnologies.com/about-us' },
};

const team = [
  {
    name: 'Mr. Waseem Sarwar',
    role: 'CEO',
    exp: 'Automotive & Communications Engineer with 27 years of experience in the industry.',
  },
  {
    name: 'Mr. Khalid Javed Mughal',
    role: 'Director R&D',
    exp: '30 years in the composites field, driving WAA\'s cutting-edge cylinder technology.',
  },
  {
    name: 'Mr. Azan Saeed',
    role: 'Director Sales',
    exp: 'GC University graduate leading WAA\'s national sales and dealer network.',
  },
];

const milestones = [
  { year: '2018', label: 'R&D Begins', desc: 'Research and development of composite cylinder technology started under the leadership of experienced engineers.' },
  { year: '2022', label: 'Officially Established', desc: 'WAATechnologies PVT LTD was officially formed in 2022 at Gujranwala with a 26,000 sq ft manufacturing facility.' },
  { year: '2023', label: 'ISO Certified', desc: 'Achieved ISO 9001-2015 and EN 14427-2022 certification.' },
  { year: '2024', label: 'National Rollout', desc: 'Expanded to authorized dealers across Punjab, Sindh & KPK.' },
  { year: '2025+', label: 'Growing Forward', desc: 'Scaling production to meet Pakistan\'s composite LPG demand.' },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">About Us</span>
          </div>
          <h1 className="text-5xl font-black mb-4">About Us</h1>
          <p className="text-green-100 text-xl max-w-2xl">
            Pioneering composite LPG cylinder technology for Pakistan&apos;s safer energy future.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-green-800 inline-block" />
              <span className="text-green-900 font-semibold text-sm uppercase tracking-wider">Our Story</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-5 leading-tight">
              WAATechnologies<br />
              <span className="text-green-900">Pvt Ltd</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              WAATechnologies PVT LTD was formally established in 2022 in Gujranwala, Pakistan — with
              research and development work started in 2018. We have since successfully developed and
              manufactured composite gas cylinders using advanced winding technologies.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              All the advantages of our cylinders enable us to serve Pakistan&apos;s residential, commercial,
              and industrial customers with cylinders that conform to the highest international standards —
              ISO 11119-3 and EN 14427-2022.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              We maintain a strong reputation for delivering cutting-edge performance, proven safety, and
              long-lasting quality. As proud Pakistani manufacturer, we are committed to national energy
              security and public safety.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                'ISO 9001-2015 Certified',
                'EN 14427-2022 Compliant',
                'PEC & OGRA Approved',
                'Made in Pakistan',
                '26,000 sq ft Facility',
                'R&D Since 2018',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-800 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Building2, label: 'Headquarters', val: 'Bahria Town, Lahore' },
              { icon: Building2, label: 'Manufacturing', val: 'Gujranwala, Pakistan' },
              { icon: Users, label: 'Leadership', val: '3 Expert Directors' },
              { icon: Award, label: 'Certifications', val: '6+ International' },
            ].map((s) => (
              <div key={s.label} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center card-hover">
                <s.icon className="w-8 h-8 text-green-900 mx-auto mb-3" />
                <div className="font-black text-slate-900 text-sm mb-1">{s.val}</div>
                <div className="text-slate-500 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Our Journey</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From concept to Pakistan&apos;s leading composite cylinder manufacturer.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-green-200 hidden md:block" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row gap-4 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-1/2 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 inline-block w-full">
                      <div className="text-green-900 font-black text-lg mb-1">{m.year}</div>
                      <div className="font-bold text-slate-900 mb-1">{m.label}</div>
                      <div className="text-slate-500 text-sm">{m.desc}</div>
                    </div>
                  </div>
                  <div className="hidden md:flex w-8 h-8 bg-green-900 rounded-full items-center justify-center z-10 flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Our Leadership</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Decades of combined expertise in engineering, composites, and business development.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((t) => (
              <div key={t.name} className="text-center bg-slate-50 rounded-2xl p-8 border border-slate-100 card-hover">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-green-900 font-black text-2xl">{t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}</span>
                </div>
                <h3 className="font-black text-slate-900 text-lg mb-1">{t.name}</h3>
                <div className="text-green-900 font-semibold text-sm mb-3">{t.role}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{t.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-green text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-3">Ready to Partner With Us?</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Become an authorized dealer or contact us for bulk orders and corporate enquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 px-6 py-3 rounded-xl font-bold transition-all">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/authorized-dealers" className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:bg-white/25">
              Authorized Dealers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

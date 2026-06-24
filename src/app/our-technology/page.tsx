import type { Metadata } from 'next';
import Link from 'next/link';
import { Layers, Zap, Shield, Microscope, Cog, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Technology',
  description:
    'Discover WAATechnologies\' proprietary composite cylinder winding technology. ISO 11119-3 and EN 14427-2022 certified filament winding process for 100% explosion-proof LPG cylinders.',
  alternates: { canonical: 'https://waatechnologies.com/our-technology' },
};

const techSteps = [
  {
    icon: Layers,
    title: 'Filament Winding',
    desc: 'High-strength glass fibre filaments are wound in precise geometric patterns over a HDPE liner using CNC-controlled winding machines. The winding angle and tension are computer-optimised for maximum burst resistance.',
  },
  {
    icon: Cog,
    title: 'Resin Impregnation',
    desc: 'Fibres are simultaneously impregnated with a high-performance thermoset resin matrix. The resin bonds to the fibres, creating an ultra-strong composite shell that distributes pressure load evenly across the cylinder wall.',
  },
  {
    icon: Zap,
    title: 'Cure & Consolidation',
    desc: 'The wound cylinder undergoes controlled heat curing in precision ovens. This crosslinks the resin matrix to full mechanical strength, achieving glass-transition temperatures well above operational limits.',
  },
  {
    icon: Microscope,
    title: 'Hydro & Leak Testing',
    desc: 'Every single cylinder is subjected to hydrostatic pressure testing to 1.5× working pressure, followed by air leakage testing. Zero defects leave the facility — this is non-negotiable.',
  },
  {
    icon: Shield,
    title: 'Quality Certification',
    desc: 'Batch samples are tested to ISO 11119-3 and BS EN 14427-2022. Cylinders receive PEC and OGRA approval. Design and approvals are per EN 14427 and ISO 11119-3 — exactly as specified in international standards.',
  },
];

export default function OurTechnologyPage() {
  return (
    <>
      <section className="gradient-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <Link href="/about-us" className="text-green-200 hover:text-white text-sm transition-colors">About Us</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Our Technology</span>
          </div>
          <h1 className="text-5xl font-black mb-4">Our Technology</h1>
          <p className="text-green-100 text-xl max-w-2xl">
            Advanced composite filament winding technology — delivering cylinders that are 100% safer,
            lighter, and longer-lasting than steel.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-4">How We Build Safety</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              WAATechnologies uses internationally proven composite winding technology — the same process
              used in aerospace, defence, and high-performance engineering applications worldwide.
            </p>
          </div>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {techSteps.map((step, i) => (
              <div key={step.title} className="flex gap-6 items-start bg-slate-50 rounded-2xl p-7 border border-slate-100">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-green-900 text-white rounded-xl flex items-center justify-center">
                    <step.icon className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-green-900 bg-green-100 rounded-full px-2.5 py-0.5">
                      Step {i + 1}
                    </span>
                    <h3 className="font-black text-slate-900 text-lg">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black mb-4">Standards &amp; Compliance</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Cylinder design and approvals per EN 14427 and ISO 11119-3. Tested, certified, and
              independently verified.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { code: 'ISO 11119-3', title: 'Composite Gas Cylinders', desc: 'Design, construction, and testing of transportable composite gas cylinders — the primary standard for our product class.' },
              { code: 'EN 14427-2022', title: 'British/European Standard', desc: 'Requirements for composite cylinders for use as transportable refillable equipment for liquefied petroleum gases (LPG).' },
              { code: 'ISO 9001-2015', title: 'Quality Management', desc: 'Our entire manufacturing and business process is governed by ISO 9001-2015 quality management principles.' },
              { code: 'BS EN 11119', title: 'European Cylinder Testing', desc: 'Full-scope European testing standard covering burst pressure, drop tests, fire engulfment, and fatigue cycling.' },
              { code: 'PEC Approved', title: 'Pakistan Engineering Council', desc: 'Our plant, processes, and products are approved by the Pakistan Engineering Council.' },
              { code: 'OGRA Regulated', title: 'Oil & Gas Regulatory Authority', desc: 'WAATechnologies operates under OGRA oversight, ensuring compliance with Pakistan\'s national LPG regulations.' },
            ].map((s) => (
              <div key={s.code} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-amber-400 font-black text-lg mb-1">{s.code}</div>
                <div className="text-white font-bold mb-2">{s.title}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-5">Why Composite Over Steel?</h2>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Weight', steel: 'Heavy — ~14 kg empty for 10L', composite: 'Light — ~5.5 kg empty for 10L' },
                { label: 'Blast Risk', steel: 'High — metallic shrapnel on failure', composite: 'Zero — non-blast, non-fragmentation' },
                { label: 'Corrosion', steel: 'Rusts over time', composite: 'Never corrodes — HDPE + fibreglass' },
                { label: 'Lifespan', steel: '~10 years', composite: '20+ years, 12,000 cycles' },
                { label: 'UV Resistance', steel: 'Degrades in sunlight', composite: 'HDPE UV-stabilised outer layer' },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-3 gap-3 bg-slate-50 rounded-xl p-4">
                  <div className="font-bold text-slate-700 text-sm">{row.label}</div>
                  <div className="text-red-500 text-sm flex items-start gap-1"><span className="font-bold">✗</span>{row.steel}</div>
                  <div className="text-green-900 text-sm flex items-start gap-1"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />{row.composite}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-green-50 rounded-3xl p-10 border border-green-100">
            <h3 className="text-2xl font-black text-slate-900 mb-5">Key Technical Specs</h3>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Liner Material', val: 'High-Density Polyethylene (HDPE)' },
                { label: 'Outer Shell', val: 'Glass fibre composite winding' },
                { label: 'Working Pressure', val: '30 bar (standard LPG)' },
                { label: 'Burst Pressure', val: '≥ 1.5× working pressure' },
                { label: 'Empty Weight (10L)', val: '~5.5 kg' },
                { label: 'Service Life', val: '20+ years / 12,000 cycles' },
                { label: 'Standard', val: 'ISO 11119-3, EN 14427-2022' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-green-100 last:border-0">
                  <span className="text-slate-600 text-sm">{row.label}</span>
                  <span className="text-green-950 font-semibold text-sm text-right">{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Returns Policy',
  description: 'WAA Technologies returns and refund policy. Learn about our product return process, eligibility conditions, and how to initiate a return.',
  alternates: { canonical: 'https://waatechnologies.com/returns' },
};

export default function ReturnsPage() {
  return (
    <>
      <section className="gradient-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Returns</span>
          </div>
          <h1 className="text-5xl font-black mb-4">Returns Policy</h1>
          <p className="text-green-100 text-xl">Your satisfaction is our priority.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-green-50 border border-green-100 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Our Return Commitment</h2>
            <p className="text-slate-600 leading-relaxed">
              WAA Technologies stands behind the quality of every composite cylinder we manufacture. If you
              receive a defective or damaged product, we will replace it or refund your purchase — no questions asked.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { title: 'Eligible Returns', points: ['Defective cylinder received', 'Damaged during shipping', 'Wrong product delivered', 'Manufacturing defect discovered within 30 days'] },
              { title: 'Return Process', points: ['Contact us within 30 days of receipt', 'Email waatechnologies.pvt.ltd@gmail.com with photos', 'We arrange collection at no cost for eligible returns', 'Replacement or refund processed within 7 business days'] },
              { title: 'Non-Eligible Returns', points: ['Cylinders that have been filled with LPG', 'Physical damage caused by misuse', 'Returns initiated after 30 days without prior notice', 'Products purchased from unauthorized dealers'] },
            ].map((section) => (
              <div key={section.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-black text-slate-900 text-lg mb-4">{section.title}</h3>
                <ul className="flex flex-col gap-2">
                  {section.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-slate-500 mb-4">Need help with a return?</p>
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

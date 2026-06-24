import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with WAATechnologies. Head office: 172-A Bahria Town Lahore. Phone: (+92) 4237815533. WhatsApp: +92 3414999998. Email: waatechnologies.pvt.ltd@gmail.com.',
  alternates: { canonical: 'https://waatechnologies.com/contact-us' },
};

const faqs = [
  {
    q: 'Are WAA cylinders available across Pakistan?',
    a: 'Yes — we have authorized dealers in Punjab (Lahore, Sialkot), Sindh (Karachi, Hyderabad), and KPK (Peshawar). More locations are being added regularly.',
  },
  {
    q: 'How do I know if my cylinder is genuine WAA?',
    a: 'Every genuine WAA cylinder has anti-counterfeiting security features, a certification mark, and brand/company names embossed at 4 different places. Contact us to verify.',
  },
  {
    q: 'What sizes are available?',
    a: 'We currently offer 5 kg, 10 kg, and 15 kg composite LPG cylinders in multiple colours — Cerulean Blue, Tiger Orange, Traditional Blue, and Yellow.',
  },
  {
    q: 'How long is the lifespan of a WAA cylinder?',
    a: 'WAA cylinders are designed for approximately 12,000 pressure cycles — far exceeding 20 years of typical household usage life with minimal maintenance.',
  },
  {
    q: 'Can I become an authorized dealer?',
    a: 'Yes! We are actively expanding our dealer network across Pakistan. Contact us with your location and business details and our sales team will get in touch.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact WAATechnologies',
  url: 'https://waatechnologies.com/contact-us',
  description: 'Contact WAATechnologies Pvt Ltd for composite LPG cylinder enquiries, dealer applications, and order support.',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://waatechnologies.com/#organization',
    name: 'WAATechnologies Pvt Ltd',
    telephone: '+92-42-37815533',
    email: 'waatechnologies.pvt.ltd@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '172-A First Floor, Adjacent Bahria Grand Masjid, Sector E Commercial Bahria Town',
      addressLocality: 'Lahore',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
  },
};

export default function ContactUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <section className="gradient-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Contact Us</span>
          </div>
          <h1 className="text-5xl font-black mb-4">CONTACT US</h1>
          <p className="text-green-100 text-xl max-w-2xl">
            WAATechnologies PVT LTD promise to ensure the quality of its each and every product.
            Lives are precious and we care for our customers and families lives.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {/* Head Office */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
              <h2 className="font-black text-slate-900 text-lg mb-5 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-800" /> HEAD OFFICE
              </h2>
              <div className="flex flex-col gap-3 text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-green-800 flex-shrink-0 mt-0.5" />
                  172-A First Floor, Adjacent Bahria Grand Masjid, Sector E Commercial Bahria Town Lahore
                </div>
                <a href="tel:+924237815533" className="flex items-center gap-2 text-green-900 font-semibold hover:text-green-950 transition-colors">
                  <Phone className="w-4 h-4" /> +92 423 781 5533
                </a>
                <a href="https://wa.me/923414999998" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-900 font-semibold hover:text-green-950 transition-colors">
                  <MessageSquare className="w-4 h-4" /> WhatsApp: +92 3414999998
                </a>
                <a href="mailto:waatechnologies.pvt.ltd@gmail.com" className="flex items-start gap-2 text-green-900 font-semibold hover:text-green-950 transition-colors break-all">
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" /> waatechnologies.pvt.ltd@gmail.com
                </a>
              </div>
            </div>

            {/* Manufacturing Facility */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
              <h2 className="font-black text-slate-900 text-lg mb-5 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-800" /> MANUFACTURING FACILITY
              </h2>
              <div className="text-sm text-slate-600 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-green-800 flex-shrink-0 mt-0.5" />
                  Gujranwala, Pakistan
                </div>
                <p className="text-slate-500">
                  26,000 sq ft state-of-the-art composite cylinder manufacturing plant.
                  Operational since 2022. R&D since 2018.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="font-black text-slate-900 text-2xl mb-6">SEND US AN EMAIL</h2>
            <form className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name *</label>
                <input
                  type="text" required placeholder="Your Name"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Email *</label>
                <input
                  type="email" required placeholder="Your Email"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                <input
                  type="tel" placeholder="Phone Number"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company</label>
                <input
                  type="text" placeholder="Company (optional)"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent placeholder:text-slate-400"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
                <textarea
                  required rows={5} placeholder="Message"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent placeholder:text-slate-400 resize-none"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-green-900 hover:bg-green-950 text-white py-3.5 rounded-xl font-bold text-base transition-all shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-3">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="text-slate-500">Quick answers to our most common questions.</p>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">Q: {faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

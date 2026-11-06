import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import BulkQuoteForm from '@/components/BulkQuoteForm';

export const metadata: Metadata = {
  title: 'Composite LPG Cylinder Dealers in Pakistan',
  description:
    'Find an authorised WAATechnologies composite LPG cylinder dealer in Lahore, Rawalpindi, Sialkot, Karachi, Hyderabad or Peshawar, with addresses and phones.',
  alternates: { canonical: 'https://waatechnologies.com/authorized-dealers' },
};

const regions = [
  {
    name: 'Punjab',
    color: 'bg-tint border-line',
    headerColor: 'bg-brand',
    dealers: [
      {
        name: 'Bilal Express Link',
        address: 'Abbot Road, Sialkot',
        phone: '0321 6144858',
      },
      {
        name: 'Ashiq Home Appliance — M. Imran',
        address: 'Mugalpura Link Road, Nazad Railway Crossing Dryport, Lahore',
        phone: '0321 4354809',
      },
      {
        name: 'Ovaisco Residency',
        address: 'Hussain Abad, Lohi Bher, Rawalpindi / Islamabad',
        phone: '0339 3789220 / 0332 9116996',
        contacts: 'Wasif Mahmood (Head of Distribution), Hassan Raza (Senior Distribution Manager)',
      },
    ],
  },
  {
    name: 'Sindh',
    color: 'bg-blue-50 border-blue-200',
    headerColor: 'bg-blue-700',
    dealers: [
      {
        name: 'Adrees & Sons',
        address: 'Karachi',
        phone: '0345 2887277',
      },
      {
        name: 'Gujrat Gass Cylinder',
        address: 'Pakkah Qila Street No 4, Hyderabad, Sindh',
        phone: '0222663544-45 / 0315 4374577',
      },
    ],
  },
  {
    name: 'KPK',
    color: 'bg-amber-50 border-amber-200',
    headerColor: 'bg-amber-600',
    dealers: [
      {
        name: 'Global Gas Corner',
        address: 'Malik Ghulam Rasool Market, Gulabad Police Station, Chamkani G.T Road, Peshawar',
        phone: '0300 9590349 / 0300 5522337',
        contacts: 'Syed Athar Ali Shah, Syed Tariq Ali Shah',
      },
    ],
  },
];

export default function AuthorizedDealersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Authorized Dealers</span>
          </div>
          <h1 className="text-5xl font-black mb-4">Authorized Dealers</h1>
          <p className="text-green-100 text-xl max-w-2xl">
            Find a WAATechnologies authorized dealer near you across Pakistan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-tint">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-ink mb-4">Our Dealer Network</h2>
            <p className="text-muted max-w-xl mx-auto text-lg">
              Authorized dealers across Punjab, Sindh, and KPK — growing every month.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {regions.map((region) => (
              <div key={region.name} className={`rounded-2xl border overflow-hidden ${region.color}`}>
                <div className={`${region.headerColor} px-6 py-4 text-white`}>
                  <h3 className="text-xl font-black">{region.name} Dealers</h3>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  {region.dealers.map((dealer) => (
                    <div key={dealer.name} className="bg-white rounded-xl p-5 shadow-sm">
                      <h4 className="font-bold text-ink mb-2">{dealer.name}</h4>
                      <div className="flex items-start gap-2 text-sm text-muted mb-2">
                        <MapPin className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                        {dealer.address}
                      </div>
                      {'contacts' in dealer && dealer.contacts && (
                        <p className="text-xs text-slate-400 mb-2 ml-6">{dealer.contacts}</p>
                      )}
                      {dealer.phone.split('/').map((number) => (
                        <a
                          key={number}
                          href={`tel:${number.replace(/\s/g, '')}`}
                          className="flex items-center gap-2 text-sm text-brand font-semibold hover:text-brand-dark transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {number.trim()}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-brand rounded-3xl p-10 text-white text-center">
            <h2 className="text-3xl font-black mb-3">Want to Become a Dealer?</h2>
            <p className="text-green-100 max-w-xl mx-auto mb-6">
              Join Pakistan&apos;s fastest-growing composite cylinder dealer network. Contact us to discuss
              dealership opportunities in your area.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-amber-brand hover:bg-[#e09c14] text-ink px-7 py-3 rounded-xl font-bold transition-all"
            >
              Contact Us
            </Link>
          </div>

          <div id="bulk-quote" className="mt-10 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-line">
            <h2 className="text-2xl font-black text-ink mb-2 text-center">Request a Bulk / Dealer Quote</h2>
            <p className="text-muted text-center max-w-xl mx-auto mb-6">For restaurants, resellers and bulk buyers — tell us your city and quantity and we&apos;ll send pricing on WhatsApp.</p>
            <BulkQuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}

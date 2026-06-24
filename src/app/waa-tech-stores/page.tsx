import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Waa Tech Stores',
  description:
    'Find WAATechnologies stores near you. Visit our Bahria Town Lahore showroom or Life LPG Store in DHA Phase 5, Askari 11 to experience our composite cylinders in person.',
  alternates: { canonical: 'https://waatechnologies.com/waa-tech-stores' },
};

const stores = [
  {
    name: 'WAA Tech Head Office & Showroom',
    address: '172-A First Floor, Adjacent Bahria Grand Masjid, Sector E Commercial Bahria Town Lahore',
    phone: '(+92) 4237815533',
    whatsapp: '+92 3414999998',
    hours: 'Mon–Sat: 9:00 AM – 6:00 PM',
    type: 'Head Office',
    badge: 'bg-green-100 text-green-900',
  },
  {
    name: 'Life LPG Store',
    address: 'DHA Phase 5, Askari 11, Lahore',
    phone: '+92 3414999998',
    whatsapp: '+92 3414999998',
    hours: 'Mon–Sat: 9:00 AM – 7:00 PM',
    type: 'Authorized Store',
    badge: 'bg-blue-100 text-blue-700',
  },
];

export default function WaaTechStoresPage() {
  return (
    <>
      <section className="gradient-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Waa Tech Stores</span>
          </div>
          <h1 className="text-5xl font-black mb-4">Waa Tech Stores</h1>
          <p className="text-green-100 text-xl max-w-2xl">
            Visit us in person or shop online — WAA Technology is always close to you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Our Locations</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Experience WAA composite cylinders in person at our showroom and authorized store locations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stores.map((store) => (
              <div key={store.name} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden card-hover">
                <div className="bg-slate-900 h-40 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-green-400 opacity-60" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${store.badge}`}>{store.type}</span>
                  </div>
                  <h3 className="font-black text-slate-900 text-xl mb-4">{store.name}</h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 text-green-800 flex-shrink-0 mt-0.5" />
                      {store.address}
                    </div>
                    <a href={`tel:${store.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-green-900 font-semibold hover:text-green-950 transition-colors">
                      <Phone className="w-4 h-4 text-green-800 flex-shrink-0" />
                      {store.phone}
                    </a>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Clock className="w-4 h-4 text-green-800 flex-shrink-0" />
                      {store.hours}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Can&apos;t Visit in Person?</h2>
            <p className="text-slate-500 mb-6 max-w-lg mx-auto">
              Shop online and we&apos;ll arrange delivery, or contact an authorized dealer near you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/shop" className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-950 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md">
                Shop Online <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/authorized-dealers" className="inline-flex items-center gap-2 border border-slate-200 hover:border-green-300 text-slate-700 hover:text-green-900 px-6 py-3 rounded-xl font-semibold transition-all">
                Find Dealers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

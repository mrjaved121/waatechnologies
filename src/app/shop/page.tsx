import type { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingCart, Filter, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shop — LPG Composite Cylinders',
  description:
    'Buy WAA Technologies composite LPG cylinders online. 5kg, 10kg, 14kg, and 15kg sizes available. 100% explosion-proof, ISO certified. Fast delivery across Pakistan.',
  alternates: { canonical: 'https://waatechnologies.com/shop' },
};

const products = [
  { name: '10 Kg Fiber Gas Cylinder', slug: '10-kg-fiber-gas-cylinder', price: 11000, oldPrice: null, color: 'Yellow', weight: '10 kg', rating: 4.9, reviews: 23 },
  { name: '5 Kg LPG Fiber Gas Cylinder Price in Pakistan', slug: '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan', price: 8000, oldPrice: 8500, color: 'Blue', weight: '5 kg', rating: 4.8, reviews: 41, badge: 'Sale' },
  { name: 'LPG Composite Cylinder 10Kg Cerulean Blue', slug: 'lpg-composite-cylinder-10kg-cerulean-blue', price: 11000, oldPrice: null, color: 'Cerulean Blue', weight: '10 kg', rating: 5.0, reviews: 12 },
  { name: 'LPG Composite Cylinder 10Kg Tiger Orange', slug: 'lpg-composite-cylinder-10kg-tiger-orange', price: 11000, oldPrice: null, color: 'Tiger Orange', weight: '10 kg', rating: 4.9, reviews: 19 },
  { name: 'LPG Composite Cylinder 15Kg Traditional Blue', slug: 'lpg-composite-cylinder-10kg-traditional-blue', price: 11000, oldPrice: null, color: 'Traditional Blue', weight: '15 kg', rating: 4.8, reviews: 8 },
];

export default function ShopPage() {
  return (
    <>
      <section className="gradient-green py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Shop</span>
          </div>
          <h1 className="text-5xl font-black mb-3">Shop</h1>
          <p className="text-green-100 text-lg">
            Composite LPG Cylinders — 100% Explosion Proof. ISO Certified. Made in Pakistan.
          </p>
        </div>
      </section>

      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">Showing {products.length} products</p>
          <div className="flex items-center gap-3">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-500">Sort by:</span>
            <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
              <option>Latest</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/product/${p.slug}`}
                className="product-card group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative bg-gradient-to-br from-slate-50 to-emerald-50 aspect-square flex items-center justify-center overflow-hidden">
                  {p.oldPrice && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                      SALE
                    </span>
                  )}
                  <div className="product-card-img text-center">
                    <div className="w-20 h-36 mx-auto bg-gradient-to-b from-amber-300 to-amber-600 rounded-[40%_40%_50%_50%/25%_25%_55%_55%] shadow-xl" />
                    <div className="mt-3 text-xs text-slate-400 font-medium">{p.color}</div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < Math.floor(p.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`} />
                    ))}
                    <span className="text-xs text-slate-400 ml-1">({p.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    {p.oldPrice && <span className="text-xs text-slate-400 line-through">₨ {p.oldPrice.toLocaleString()}</span>}
                    <span className="text-lg font-black text-green-700">₨ {p.price.toLocaleString()}</span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-green-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm mb-2">Need help choosing the right cylinder?</p>
          <Link href="/contact-us" className="text-green-700 font-semibold hover:text-green-800 transition-colors text-sm">
            Contact our team →
          </Link>
        </div>
      </section>
    </>
  );
}

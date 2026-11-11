import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Filter } from 'lucide-react';
import OrderInquiryButton from '@/components/OrderInquiryButton';

const productImages: Record<string, string> = {
  '10-kg-fiber-gas-cylinder': '/images/10kg-cylinder-yellow.jpg',
  '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan': '/images/5kg-cylinder.jpg',
  'lpg-composite-cylinder-10kg-cerulean-blue': '/images/10kg-blue-Fiber-cylinder.jpg',
  'lpg-composite-cylinder-10kg-tiger-orange': '/images/10kg-cylinder-orange.jpg',
};

const colorGradient: Record<string, string> = {
  'Cerulean Blue': 'from-blue-400 to-blue-700',
  'Blue': 'from-blue-400 to-blue-600',
};

export const metadata: Metadata = {
  title: { absolute: 'Fiber Cylinder Price in Pakistan: 5 Kg Rs 8,000, 10 Kg Rs 11,000' },
  description:
    'Fiber (composite) LPG cylinder prices in Pakistan today: 5 kg Rs 8,000, 10 kg Rs 11,000 in four colours. ISO certified, made in Gujranwala. Order on WhatsApp.',
  alternates: { canonical: 'https://waatechnologies.com/shop' },
};

const products = [
  { name: '10 Kg Fiber Gas Cylinder', slug: '10-kg-fiber-gas-cylinder', price: 11000, oldPrice: null, color: 'Yellow', weight: '10 kg' },
  { name: '5 Kg LPG Fiber Gas Cylinder Price in Pakistan', slug: '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan', price: 8000, oldPrice: 8500, color: 'Blue', weight: '5 kg', badge: 'Sale' },
  { name: 'LPG Composite Cylinder 10Kg Cerulean Blue', slug: 'lpg-composite-cylinder-10kg-cerulean-blue', price: 11000, oldPrice: null, color: 'Cerulean Blue', weight: '10 kg' },
  { name: 'LPG Composite Cylinder 10Kg Tiger Orange', slug: 'lpg-composite-cylinder-10kg-tiger-orange', price: 11000, oldPrice: null, color: 'Tiger Orange', weight: '10 kg' },
];

const shopSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'WAATechnologies LPG Composite Cylinders',
  description: 'Buy composite LPG cylinders online in Pakistan — non-blast, ISO certified, made in Gujranwala.',
  url: 'https://waatechnologies.com/shop',
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: p.name,
      url: `https://waatechnologies.com/product/${p.slug}`,
      image: productImages[p.slug]
        ? `https://waatechnologies.com${productImages[p.slug]}`
        : 'https://waatechnologies.com/images/global-waatech-logo.png',
      brand: { '@type': 'Brand', name: 'WAATechnologies' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'PKR',
        price: p.price,
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
      },
    },
  })),
};

export default function ShopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(shopSchema) }} />
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Shop</span>
          </div>
          <h1 className="text-5xl font-black mb-3">Shop</h1>
          <p className="text-green-100 text-lg">
            Composite LPG Cylinders — non-blast by design, ISO certified, made in Pakistan.
          </p>
        </div>
      </section>

      <section className="py-10 bg-tint border-b border-line">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">Showing {products.length} products</p>
          <div className="flex items-center gap-3">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-muted">Sort by:</span>
            <select className="text-sm border border-line rounded-lg px-3 py-2 bg-white text-ink focus:outline-none focus:ring-2 focus:ring-green-700">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
              <option>Latest</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-12 bg-tint">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <Link
                key={p.slug}
                href={`/product/${p.slug}`}
                className="product-card group bg-white border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative bg-gradient-to-br from-slate-50 to-emerald-50 aspect-square flex items-center justify-center overflow-hidden">
                  {p.oldPrice && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                      SALE
                    </span>
                  )}
                  {productImages[p.slug] ? (
                    <Image
                      src={productImages[p.slug]}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                      // The first card is the largest thing on a phone screen; load it
                      // straight away instead of lazily.
                      priority={i === 0}
                    />
                  ) : (
                    <div className="text-center">
                      <div className={`w-20 h-36 mx-auto bg-gradient-to-b ${colorGradient[p.color] ?? 'from-amber-300 to-amber-600'} rounded-[40%_40%_50%_50%/25%_25%_55%_55%] shadow-xl`} />
                      <div className="mt-3 text-xs text-muted font-medium">{p.color}</div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-ink mb-2 leading-snug group-hover:text-brand transition-colors line-clamp-2">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    {p.oldPrice && <span className="text-xs text-muted line-through">₨ {p.oldPrice.toLocaleString()}</span>}
                    <span className="text-lg font-black text-brand">₨ {p.price.toLocaleString()}</span>
                  </div>
                  <OrderInquiryButton name={p.name} price={p.price} compact />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-line">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted text-sm mb-2">Need help choosing the right cylinder?</p>
          <Link href="/contact-us" className="text-brand font-semibold hover:text-brand-dark transition-colors text-sm">
            Contact our team →
          </Link>
        </div>
      </section>
    </>
  );
}

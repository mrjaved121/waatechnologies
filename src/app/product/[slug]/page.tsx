import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Star, Phone, Shield, Feather, Droplets, Sun, Award } from 'lucide-react';
import AddToCartButton from '@/components/AddToCartButton';

const productImages: Record<string, string> = {
  '10-kg-fiber-gas-cylinder': '/images/10kg-cylinder-yellow.png',
  '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan': '/images/5kg-cylinder.png',
  'lpg-composite-cylinder-10kg-cerulean-blue': '/images/10kg-blue-Fiber-cylinder.png',
  'lpg-composite-cylinder-10kg-tiger-orange': '/images/10kg-cylinder-orange.png',
  'lpg-composite-cylinder-10kg-traditional-blue': '/images/10kg-blue-Fiber-cylinder.png',
};

const colorGradient: Record<string, string> = {
  'Cerulean Blue': 'from-blue-400 to-blue-700',
  'Traditional Blue': 'from-blue-600 to-blue-900',
};

const products: Record<string, {
  name: string;
  price: number;
  oldPrice?: number;
  weight: string;
  color: string;
  description: string;
  features: string[];
}> = {
  '10-kg-fiber-gas-cylinder': {
    name: '10 Kg Fiber Gas Cylinder',
    price: 11000,
    weight: '10 kg',
    color: 'Yellow',
    description: 'WAA Technologies 10 Kg Fiber Gas Cylinder is a premium composite LPG cylinder manufactured using advanced filament winding technology. 100% explosion-proof, UV resistant, and corrosion-free. Certified to ISO 11119-3 and EN 14427-2022.',
    features: ['100% Explosion Proof', 'ISO 11119-3 Certified', 'UV Resistant HDPE Outer', 'Corrosion Free', 'Translucent Body', '20+ Year Lifespan'],
  },
  '5-kg-lpg-fiber-gas-cylinder-price-in-pakistan': {
    name: '5 Kg LPG Fiber Gas Cylinder',
    price: 8000,
    oldPrice: 8500,
    weight: '5 kg',
    color: 'Blue',
    description: 'The WAA Technologies 5 Kg LPG Fiber Gas Cylinder is perfect for small households. Lightweight, explosion-proof, and ISO certified — the safest small cylinder in Pakistan.',
    features: ['100% Explosion Proof', 'Ultra Lightweight', 'ISO Certified', 'UV Resistant', 'Corrosion Free', 'Translucent Visibility'],
  },
  'lpg-composite-cylinder-10kg-cerulean-blue': {
    name: 'LPG Composite Cylinder 10Kg Cerulean Blue',
    price: 11000,
    weight: '10 kg',
    color: 'Cerulean Blue',
    description: 'The Cerulean Blue 10Kg composite cylinder combines WAA\'s world-class safety technology with a modern aesthetic design. Perfect for contemporary kitchens.',
    features: ['Cerulean Blue Finish', '100% Explosion Proof', 'ISO 11119-3', 'UV Resistant', 'Corrosion Free', 'Modern Design'],
  },
  'lpg-composite-cylinder-10kg-tiger-orange': {
    name: 'LPG Composite Cylinder 10Kg Tiger Orange',
    price: 11000,
    weight: '10 kg',
    color: 'Tiger Orange',
    description: 'The Tiger Orange edition of WAA\'s flagship 10Kg composite cylinder. Bold design, maximum safety — the same composite technology trusted by thousands across Pakistan.',
    features: ['Tiger Orange Finish', '100% Explosion Proof', 'ISO 11119-3', 'UV Resistant', 'Corrosion Free', 'Bold Design'],
  },
  'lpg-composite-cylinder-10kg-traditional-blue': {
    name: 'LPG Composite Cylinder 15Kg Traditional Blue',
    price: 11000,
    weight: '15 kg',
    color: 'Traditional Blue',
    description: 'WAA Technologies 15Kg Traditional Blue composite cylinder for larger households and commercial use. The same explosion-proof, ISO-certified composite technology in a larger capacity.',
    features: ['Traditional Blue Finish', '100% Explosion Proof', 'ISO 11119-3', 'UV Resistant', 'Corrosion Free', 'High Capacity'],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug];
  if (!product) return { title: 'Product Not Found' };
  const img = productImages[slug];
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `https://waatechnologies.com/product/${slug}` },
    openGraph: {
      title: `${product.name} | WAA Technologies`,
      description: product.description,
      type: 'website',
      images: img ? [{ url: `https://waatechnologies.com${img}`, width: 1254, height: 1254, alt: product.name }] : undefined,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

const highlights = [
  { icon: Shield, label: 'Explosion Proof' },
  { icon: Feather, label: 'Lightweight' },
  { icon: Droplets, label: 'Corrosion Free' },
  { icon: Sun, label: 'UV Resistant' },
  { icon: Award, label: 'ISO Certified' },
];

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-black text-slate-900 mb-3">Product Not Found</h1>
        <p className="text-slate-500 mb-6">This product doesn&apos;t exist or has been moved.</p>
        <Link href="/shop" className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors">Back to Shop</Link>
      </div>
    );
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    sku: slug,
    mpn: slug.toUpperCase(),
    brand: { '@type': 'Brand', name: 'WAA Technologies' },
    manufacturer: {
      '@type': 'Organization',
      '@id': 'https://waatechnologies.com/#organization',
      name: 'WAA Technologies Pvt Ltd',
    },
    image: productImages[slug]
      ? `https://waatechnologies.com${productImages[slug]}`
      : 'https://waatechnologies.com/images/global-waatech-logo.png',
    color: product.color,
    weight: { '@type': 'QuantitativeValue', value: product.weight, unitCode: 'KGM' },
    offers: {
      '@type': 'Offer',
      url: `https://waatechnologies.com/product/${slug}`,
      priceCurrency: 'PKR',
      price: product.price,
      priceValidUntil: '2026-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'WAA Technologies Pvt Ltd' },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'PKR' },
        shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'PK' },
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '24',
      bestRating: '5',
      worstRating: '1',
    },
    additionalProperty: product.features.map((f) => ({
      '@type': 'PropertyValue',
      name: f,
      value: 'Yes',
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waatechnologies.com' },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: 'https://waatechnologies.com/shop' },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://waatechnologies.com/product/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="py-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-500 hover:text-green-700 transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href="/shop" className="text-slate-500 hover:text-green-700 transition-colors">Shop</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl aspect-square shadow-sm border border-slate-100 overflow-hidden">
            {productImages[slug] ? (
              <Image
                src={productImages[slug]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-10"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className={`w-32 h-56 mx-auto bg-gradient-to-b ${colorGradient[product.color] ?? 'from-amber-300 to-amber-600'} rounded-[40%_40%_50%_50%/25%_25%_55%_55%] shadow-2xl`} />
                  <div className="mt-4 text-sm text-slate-400 font-medium">{product.color}</div>
                </div>
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">LPG Composite</span>
              <span className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{product.weight}</span>
              {product.oldPrice && <span className="text-xs font-bold bg-red-100 text-red-600 px-3 py-1 rounded-full">ON SALE</span>}
            </div>
            <h1 className="text-3xl font-black text-slate-900 mb-3 leading-tight">{product.name}</h1>
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm text-slate-500">(Verified Purchase)</span>
            </div>
            <div className="flex items-baseline gap-3 mb-5">
              {product.oldPrice && <span className="text-xl text-slate-400 line-through">₨ {product.oldPrice.toLocaleString()}</span>}
              <span className="text-4xl font-black text-green-700">₨ {product.price.toLocaleString()}</span>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">{product.description}</p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-6">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 text-xs font-medium text-slate-700">
                  <h.icon className="w-3.5 h-3.5 text-green-600" />
                  {h.label}
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="bg-slate-50 rounded-2xl p-5 mb-6 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <AddToCartButton
              slug={slug}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
            />

            <div className="flex gap-3 mb-6">
              <Link
                href="/contact-us"
                className="flex items-center gap-2 border border-slate-200 hover:border-green-300 text-slate-700 hover:text-green-700 px-5 py-3.5 rounded-xl font-semibold transition-all text-sm"
              >
                <Phone className="w-5 h-5" /> Enquire
              </Link>
            </div>

            <div className="flex flex-col gap-2 text-sm text-slate-500">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> ISO 9001-2015 & EN 14427-2022 Certified</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> PEC Approved &amp; OGRA Regulated</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Every unit hydro-tested before dispatch</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-6">You May Also Like</h2>
          <Link href="/shop" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-all">
            View All Products
          </Link>
        </div>
      </section>
    </>
  );
}

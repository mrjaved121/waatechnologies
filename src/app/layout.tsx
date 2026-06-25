import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/components/CartContext';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://waatechnologies.com'),
  title: {
    default: 'WAATechnologies | Non-Blast Composite LPG Gas Cylinders Pakistan',
    template: '%s | WAATechnologies',
  },
  description:
    'WAATechnologies manufactures 100% explosion-proof, lightweight composite LPG gas cylinders in Pakistan. ISO certified, UV resistant, corrosion-proof. Buy online or find authorized dealers near you.',
  keywords: [
    'composite LPG cylinder Pakistan',
    'fiber gas cylinder',
    'non-blast gas cylinder',
    'explosion proof cylinder',
    'WAATechnologies',
    'lightweight gas cylinder',
    'LPG cylinder price Pakistan',
    'composite cylinder Lahore',
    'fiber LPG cylinder',
    'corrosion-free cylinder',
  ],
  authors: [{ name: 'WAATechnologies Pvt Ltd' }],
  creator: 'WAATechnologies Pvt Ltd',
  publisher: 'WAATechnologies Pvt Ltd',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://waatechnologies.com',
    siteName: 'WAATechnologies',
    title: 'WAATechnologies | Non-Blast Composite LPG Gas Cylinders',
    description:
      "Pakistan's leading manufacturer of 100% explosion-proof composite LPG cylinders. ISO certified, lightweight, UV resistant & corrosion-proof.",
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'WAATechnologies — Non-Blast Composite LPG Cylinders Pakistan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAATechnologies | Non-Blast Composite LPG Cylinders Pakistan',
    description: "Pakistan's leading manufacturer of 100% explosion-proof composite LPG cylinders.",
    images: ['/images/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://waatechnologies.com' },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness', 'Manufacturer'],
      '@id': 'https://waatechnologies.com/#organization',
      name: 'WAATechnologies Pvt Ltd',
      alternateName: ['WAA Tech', 'WAATechnologies', 'Global WAATechnologies'],
      url: 'https://waatechnologies.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://waatechnologies.com/#logo',
        url: 'https://waatechnologies.com/images/global-waatech-logo.webp',
        width: 991,
        height: 833,
        caption: 'WAATechnologies Pvt Ltd',
      },
      image: 'https://waatechnologies.com/images/global-waatech-logo.webp',
      description:
        "Pakistan's first indigenous manufacturer of ISO-certified non-blast composite LPG gas cylinders. 100% explosion-proof, lightweight, corrosion-free, 20+ year service life. ISO 9001:2015, ISO 11119-3:2020 and BS EN 14427:2022 certified. PEC licensed.",
      foundingDate: '2022',
      foundingLocation: { '@type': 'Place', name: 'Gujranwala, Punjab, Pakistan' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '172-A First Floor, Adjacent Bahria Grand Masjid, Sector E Commercial Bahria Town',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        postalCode: '53720',
        addressCountry: 'PK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '31.3656',
        longitude: '74.1873',
      },
      telephone: '+92-42-37815533',
      email: 'waatechnologies.pvt.ltd@gmail.com',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+92-42-37815533',
          contactType: 'sales',
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+92-341-4999998',
          contactType: 'customer support',
          contactOption: 'TollFree',
          areaServed: 'PK',
        },
      ],
      areaServed: { '@type': 'Country', name: 'Pakistan' },
      knowsAbout: [
        'Composite LPG cylinders', 'Fiber gas cylinders', 'Non-blast cylinders',
        'ISO 11119-3', 'EN 14427-2022', 'Filament winding technology', 'HDPE liner',
        'LPG storage', 'Gas cylinder safety',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Composite LPG Cylinders Pakistan',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '5kg Composite LPG Cylinder', description: 'Lightweight 5kg fiber gas cylinder for small households' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '10kg Composite LPG Cylinder', description: 'Standard 10kg non-blast composite LPG cylinder for families' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '10kg Cerulean Blue Composite Cylinder', description: 'Cerulean Blue colored 10kg composite LPG cylinder' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '10kg Tiger Orange Composite Cylinder', description: 'Tiger Orange colored 10kg composite LPG cylinder' } },
        ],
      },
      award: ['SECP Certificate of Incorporation', 'ISO 9001:2015 Certified', 'ISO 11119-3:2020 Certified', 'BS EN 14427:2022 Certified', 'PEC Licensed'],
      slogan: 'Lives are precious and we care for our customers and families lives.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://waatechnologies.com/#website',
      url: 'https://waatechnologies.com',
      name: 'WAATechnologies',
      description: "Pakistan's leading manufacturer of 100% explosion-proof composite LPG cylinders",
      publisher: { '@id': 'https://waatechnologies.com/#organization' },
      inLanguage: 'en-PK',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://waatechnologies.com/shop?search={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PK" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

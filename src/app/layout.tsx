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
    default: 'WAA Technologies | Non-Blast Composite LPG Gas Cylinders Pakistan',
    template: '%s | WAA Technologies',
  },
  description:
    'WAA Technologies manufactures 100% explosion-proof, lightweight composite LPG gas cylinders in Pakistan. ISO certified, UV resistant, corrosion-proof. Buy online or find authorized dealers near you.',
  keywords: [
    'composite LPG cylinder Pakistan',
    'fiber gas cylinder',
    'non-blast gas cylinder',
    'explosion proof cylinder',
    'WAA Technologies',
    'lightweight gas cylinder',
    'LPG cylinder price Pakistan',
    'composite cylinder Lahore',
    'fiber LPG cylinder',
    'corrosion-free cylinder',
  ],
  authors: [{ name: 'WAA Technologies Pvt Ltd' }],
  creator: 'WAA Technologies Pvt Ltd',
  publisher: 'WAA Technologies Pvt Ltd',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://waatechnologies.com',
    siteName: 'WAA Technologies',
    title: 'WAA Technologies | Non-Blast Composite LPG Gas Cylinders',
    description:
      "Pakistan's leading manufacturer of 100% explosion-proof composite LPG cylinders. ISO certified, lightweight, UV resistant & corrosion-proof.",
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'WAA Technologies Gas Cylinders' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAA Technologies | Non-Blast Composite LPG Cylinders Pakistan',
    description: "Pakistan's leading manufacturer of 100% explosion-proof composite LPG cylinders.",
    images: ['/images/og-image.jpg'],
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
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://waatechnologies.com/#organization',
      name: 'WAA Technologies Pvt Ltd',
      url: 'https://waatechnologies.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://waatechnologies.com/images/logo.png',
        width: 200,
        height: 60,
      },
      image: 'https://waatechnologies.com/images/og-image.jpg',
      description:
        "Pakistan's leading manufacturer of ISO-certified non-blast composite LPG gas cylinders. Lightweight, corrosion-free, 20+ year service life. ISO 11119-3 and EN 14427-2022 certified.",
      address: {
        '@type': 'PostalAddress',
        streetAddress: '172-A First Floor, Adjacent Bahria Grand Masjid, Sector E Commercial Bahria Town',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
      foundingLocation: { '@type': 'Place', name: 'Gujranwala, Punjab, Pakistan' },
      telephone: '+92-42-37815533',
      email: 'waatechnologies.pvt.ltd@gmail.com',
      areaServed: { '@type': 'Country', name: 'Pakistan' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Composite LPG Cylinders',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '5kg Composite LPG Cylinder' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '10kg Composite LPG Cylinder' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '12kg Composite LPG Cylinder' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://waatechnologies.com/#website',
      url: 'https://waatechnologies.com',
      name: 'WAA Technologies',
      description: "Pakistan's leading manufacturer of composite LPG cylinders",
      publisher: { '@id': 'https://waatechnologies.com/#organization' },
      inLanguage: 'en-PK',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
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

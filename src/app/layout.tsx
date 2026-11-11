import type { Metadata } from 'next';
import { Geist, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IndependenceBanner from '@/components/IndependenceBanner';
import GoogleTagManager from '@/components/GoogleTagManager';
import FloatingContact from '@/components/FloatingContact';
import CookieNotice from '@/components/CookieNotice';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' });
const outfit = Outfit({ variable: '--font-outfit', subsets: ['latin'], weight: ['600', '700', '800'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://waatechnologies.com'),
  title: {
    default: 'WAATechnologies | Non-Blast Composite LPG Gas Cylinders Pakistan',
    template: '%s | WAATechnologies',
  },
  description:
    'WAATechnologies manufactures non-blast, lightweight composite LPG gas cylinders in Pakistan. ISO certified, UV resistant, corrosion-proof. Buy online or find authorized dealers near you.',
  keywords: [
    'composite LPG cylinder Pakistan',
    'fiber gas cylinder',
    'non-blast gas cylinder',
    'non-blast cylinder',
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
      "Pakistan-based manufacturer of non-blast composite LPG cylinders. ISO certified, lightweight, UV resistant & corrosion-proof.",
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: 'WAATechnologies — Non-Blast Composite LPG Cylinders Pakistan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAATechnologies | Non-Blast Composite LPG Cylinders Pakistan',
    description: "Pakistan-based manufacturer of non-blast composite LPG cylinders.",
    images: ['/images/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://waatechnologies.com' },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel once the Search Console
  // property gives you the HTML-tag verification code — no code change needed.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness', 'Manufacturer'],
      '@id': 'https://waatechnologies.com/#organization',
      name: 'WAATechnologies Pvt Ltd',
      alternateName: ['WAA Tech', 'WAATechnologies', 'Global WAATechnologies'],
      sameAs: [
        'https://www.facebook.com/waatechnologiespvtltd/',
        'https://www.instagram.com/waatechnologies',
      ],
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
        "Pakistan's first indigenous manufacturer of ISO-certified non-blast composite LPG gas cylinders. Lightweight, corrosion-free, with a 20+ year rated service life. ISO 9001:2015, ISO 11119-3:2020 and BS EN 14427:2022 certified. PEC licensed.",
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
      email: 'info@waatechnologies.com',
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
      // The catalogue names what WAA sells and points at each product page by @id.
      // Full Product markup, with price, lives only on those product pages, where
      // the price is visible. Declaring priced Products on every page (blog posts,
      // About, Terms) produced 268 invalid product items in Search Console and
      // breaks Google's rule that structured data must match the visible page.
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Composite LPG Cylinders Pakistan',
        itemListElement: [
          { '@type': 'Offer', url: 'https://waatechnologies.com/product/5-kg-lpg-fiber-gas-cylinder-price-in-pakistan', itemOffered: { '@id': 'https://waatechnologies.com/product/5-kg-lpg-fiber-gas-cylinder-price-in-pakistan#product' } },
          { '@type': 'Offer', url: 'https://waatechnologies.com/product/10-kg-fiber-gas-cylinder', itemOffered: { '@id': 'https://waatechnologies.com/product/10-kg-fiber-gas-cylinder#product' } },
          { '@type': 'Offer', url: 'https://waatechnologies.com/product/lpg-composite-cylinder-10kg-cerulean-blue', itemOffered: { '@id': 'https://waatechnologies.com/product/lpg-composite-cylinder-10kg-cerulean-blue#product' } },
          { '@type': 'Offer', url: 'https://waatechnologies.com/product/lpg-composite-cylinder-10kg-tiger-orange', itemOffered: { '@id': 'https://waatechnologies.com/product/lpg-composite-cylinder-10kg-tiger-orange#product' } },
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
      description: "Pakistan-based manufacturer of non-blast composite LPG cylinders",
      publisher: { '@id': 'https://waatechnologies.com/#organization' },
      inLanguage: 'en-PK',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PK" className={`${geistSans.variable} ${outfit.variable} h-full`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        {/* Google Consent Mode defaults. Must run before gtm.js, so it lives here rather
            than in a next/script tag: analytics and ad storage start denied, and a
            visitor's earlier "granted" choice is replayed so they are not asked twice. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});try{if(localStorage.getItem('waa-analytics-consent')==='granted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}gtag('js',new Date());`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <GoogleTagManager />
        <IndependenceBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
        <CookieNotice />
      </body>
    </html>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Waa Tech Stores', href: '/waa-tech-stores' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Shop', href: '/shop' },
];

const usefulLinks = [
  { label: 'Authorized Dealers', href: '/authorized-dealers' },
  { label: 'Waa Tech Stores', href: '/waa-tech-stores' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Returns', href: '/returns' },
];

const blogLinks = [
  { label: 'Cost Benefits of Composite LPG Cylinders', href: '/cost-benefits-of-composite-lpg-cylinders-a-smart-investment-for-2025' },
  { label: 'The Future of LPG: Fiber vs Steel', href: '/the-future-of-lpg-the-reason-fiber-cylinders-are-substituting-steel' },
  { label: 'Eco Friendly Gas Cylinder', href: '/eco-friendly-gas-cylinder' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-5">
            <Link href="/">
              <Image
                src="/images/global-waatech-logo.png"
                alt="WAA Technologies"
                width={130}
                height={110}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            WAA TECHNOLOGIES PVT LTD promise to ensure the quality of its each and every product.
            Lives are precious and we care for our customers and families lives.
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <a href="tel:+924237815533" className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors">
              <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
              (+92) 4237815533
            </a>
            <a href="mailto:waatechnologies.pvt.ltd@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors">
              <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
              waatechnologies.pvt.ltd@gmail.com
            </a>
            <div className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>172-A First Floor, Adjacent Bahria Grand Masjid, Sector E Commercial Bahria Town Lahore</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-green-500 inline-block" />
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors group">
                  <ArrowRight className="w-3.5 h-3.5 text-green-600 group-hover:translate-x-1 transition-transform" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-green-500 inline-block" />
            Useful Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {usefulLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors group">
                  <ArrowRight className="w-3.5 h-3.5 text-green-600 group-hover:translate-x-1 transition-transform" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Blog */}
        <div>
          <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-green-500 inline-block" />
            Recent Posts
          </h3>
          <ul className="flex flex-col gap-4">
            {blogLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-400 hover:text-green-400 transition-colors leading-snug block">
                  {link.label}
                </Link>
                <span className="text-xs text-slate-600 mt-1 block">WAATechCylinders</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <span>© 2026 WAA Technologies. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
            <Link href="/returns" className="hover:text-green-400 transition-colors">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

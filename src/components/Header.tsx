'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, ShoppingCart } from 'lucide-react';

const aboutLinks = [
  { label: 'Our Company', href: '/our-company' },
  { label: 'Our Technology', href: '/our-technology' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Our Products And Advantages', href: '/our-products-and-advantages' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us', children: aboutLinks },
  { label: 'Authorized Dealers', href: '/authorized-dealers' },
  { label: 'Waa Tech Stores', href: '/waa-tech-stores' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact-us' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      {/* Top bar */}
      <div className="bg-green-800 text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            (+92) 4237815533 &nbsp;|&nbsp; waatechnologies.pvt.ltd@gmail.com
          </span>
          <span>172-A First Floor, Bahria Town Lahore, Pakistan</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center shadow-md group-hover:bg-green-800 transition-colors">
            <span className="text-white font-black text-sm tracking-tight">WAA</span>
          </div>
          <div className="leading-tight">
            <div className="font-black text-green-800 text-lg tracking-tight">WAA TECH</div>
            <div className="text-xs text-slate-500 font-medium -mt-0.5">TECHNOLOGIES PVT LTD</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  className="nav-link flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-green-700 rounded-lg hover:bg-green-50 transition-colors"
                  onClick={() => setAboutOpen((v) => !v)}
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {aboutOpen && (
                  <div
                    className="dropdown-menu absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:text-green-700 hover:bg-green-50 transition-colors font-medium"
                        onClick={() => setAboutOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link px-3 py-2 text-sm font-medium text-slate-700 hover:text-green-700 rounded-lg hover:bg-green-50 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/shop"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md"
          >
            <ShoppingCart className="w-4 h-4" />
            Shop Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                    onClick={() => setMobileAboutOpen((v) => !v)}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileAboutOpen && (
                    <div className="ml-4 mt-1 border-l-2 border-green-200 pl-3 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-slate-600 hover:text-green-700 font-medium"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/shop"
              className="mt-2 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              onClick={() => setMobileOpen(false)}
            >
              <ShoppingCart className="w-4 h-4" />
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

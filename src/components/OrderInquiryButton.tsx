'use client';

import { useState } from 'react';
import { ShoppingBag, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '923414999998';
const PHONE_NUMBER = '+924237815533';

type Props = {
  name: string;
  price: number;
  className?: string;
  /** Compact single-button variant for grid/catalog cards. Full variant (default) adds quantity + a call option. */
  compact?: boolean;
};

function buildWhatsAppUrl(name: string, price: number, qty: number) {
  const message =
    `Hello WAA Technologies, I'm interested in ordering ${qty} x ${name} ` +
    `(Rs. ${price.toLocaleString()} each). Please share availability and delivery details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Fire a GA4 event so order-intent clicks are tracked (no-op if GA isn't loaded).
function trackOrder(name: string, price: number, qty: number) {
  if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag === 'function') {
    (window as unknown as { gtag: (...a: unknown[]) => void }).gtag('event', 'whatsapp_order', {
      product_name: name,
      quantity: qty,
      value: price * qty,
      currency: 'PKR',
    });
  }
}

export default function OrderInquiryButton({ name, price, className = '', compact = false }: Props) {
  const [qty, setQty] = useState(1);

  if (compact) {
    // A plain <button> (not <a>) on purpose: this renders inside a card-level <Link>
    // elsewhere, and nesting an <a> inside an <a> is invalid HTML.
    const url = buildWhatsAppUrl(name, price, 1);
    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          trackOrder(name, price, 1);
          window.open(url, '_blank', 'noopener,noreferrer');
        }}
        className={`w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-green-900 text-white text-xs font-semibold py-2 rounded-lg transition-colors ${className}`}
      >
        <ShoppingBag className="w-3.5 h-3.5" /> Order via WhatsApp
      </button>
    );
  }

  const url = buildWhatsAppUrl(name, price, qty);
  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-4">
        <label htmlFor="order-qty" className="text-sm font-semibold text-slate-700">Quantity</label>
        <select
          id="order-qty"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-700"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>
      <div className="flex gap-3 mb-6">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackOrder(name, price, qty)}
          className="flex-1 flex items-center justify-center gap-2 bg-green-900 hover:bg-green-950 text-white py-3.5 rounded-xl font-bold text-base transition-all shadow-md hover:shadow-lg"
        >
          <ShoppingBag className="w-5 h-5" /> Order via WhatsApp
        </a>
        <a
          href={`tel:${PHONE_NUMBER}`}
          onClick={() => trackOrder(name, price, qty)}
          className="flex items-center gap-2 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-5 py-3.5 rounded-xl font-bold transition-all"
        >
          <Phone className="w-5 h-5" /> Call to Order
        </a>
      </div>
    </div>
  );
}

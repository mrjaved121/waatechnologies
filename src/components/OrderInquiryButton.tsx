'use client';

import { ShoppingBag, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '923414999998';
const PHONE_NUMBER = '+924237815533';

type Props = {
  name: string;
  price: number;
  className?: string;
  /** Compact single-button variant for grid/catalog cards. Full variant (default) adds a call option. */
  compact?: boolean;
};

function buildWhatsAppUrl(name: string, price: number) {
  const message = `Hello WAA Technologies, I'm interested in ordering the ${name} (Rs. ${price.toLocaleString()}). Please share availability and delivery details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function OrderInquiryButton({ name, price, className = '', compact = false }: Props) {
  const whatsappUrl = buildWhatsAppUrl(name, price);

  if (compact) {
    // A plain <button> (not <a>) on purpose: this renders inside a card-level <Link>
    // elsewhere, and nesting an <a> inside an <a> is invalid HTML that browsers
    // resolve by splitting the outer anchor — stopPropagation alone can't fix that.
    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        }}
        className={`w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-green-900 text-white text-xs font-semibold py-2 rounded-lg transition-colors ${className}`}
      >
        <ShoppingBag className="w-3.5 h-3.5" /> Order via WhatsApp
      </button>
    );
  }

  return (
    <div className={`flex gap-3 mb-6 ${className}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-green-900 hover:bg-green-950 text-white py-3.5 rounded-xl font-bold text-base transition-all shadow-md hover:shadow-lg"
      >
        <ShoppingBag className="w-5 h-5" /> Order via WhatsApp
      </a>
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex items-center gap-2 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-5 py-3.5 rounded-xl font-bold transition-all"
      >
        <Phone className="w-5 h-5" /> Call to Order
      </a>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

const WA_NUMBER = '923414999998';

export default function BulkQuoteForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [qty, setQty] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [bot, setBot] = useState(''); // honeypot

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (bot) return;        // bot filled the hidden field
    if (!consent) return;

    const text = [
      'Bulk / Dealer Quote Request — WAATechnologies',
      '',
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      city ? `City: ${city}` : null,
      phone ? `Phone: ${phone}` : null,
      qty ? `Estimated quantity: ${qty}` : null,
      message ? `\nDetails: ${message}` : null,
      '',
      '— Sent from waatechnologies.com/authorized-dealers',
    ].filter((l) => l !== null).join('\n');

    if (typeof window !== 'undefined') {
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      (w.dataLayer = w.dataLayer || []).push({ event: 'bulk_quote_request', city, quantity: qty });
    }
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }

  const inputCls =
    'w-full border border-line rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-green-700 placeholder:text-slate-400';

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 text-left">
      <input className={inputCls} placeholder="Your Name *" required value={name} onChange={(e) => setName(e.target.value)} />
      <input className={inputCls} placeholder="Company / Business" value={company} onChange={(e) => setCompany(e.target.value)} />
      <input className={inputCls} placeholder="City *" required value={city} onChange={(e) => setCity(e.target.value)} />
      <input className={inputCls} type="tel" placeholder="Phone / WhatsApp *" required value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input className={`${inputCls} sm:col-span-2`} placeholder="Estimated quantity (e.g. 50 cylinders / month)" value={qty} onChange={(e) => setQty(e.target.value)} />
      <textarea className={`${inputCls} sm:col-span-2 resize-none`} rows={3} placeholder="Anything else we should know?" value={message} onChange={(e) => setMessage(e.target.value)} />
      {/* honeypot — hidden from humans */}
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={bot} onChange={(e) => setBot(e.target.value)} name="company_website" />
      <label className="sm:col-span-2 flex items-start gap-2 text-sm text-muted">
        <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" />
        <span>I agree to WAATechnologies storing my details to respond to my enquiry.</span>
      </label>
      <button type="submit" className="sm:col-span-2 w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white py-3.5 rounded-xl font-bold transition-all shadow-md">
        <Send className="w-5 h-5" /> Request Quote on WhatsApp
      </button>
    </form>
  );
}

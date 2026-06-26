'use client';

import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const WA_NUMBER = '923414999998';

export default function ContactForm() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [phone, setPhone]     = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const text = [
      `Hello WAATechnologies! 👋`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      phone   ? `Phone: ${phone}`     : null,
      company ? `Company: ${company}` : null,
      ``,
      `Message:`,
      message,
      ``,
      `— Sent from waatechnologies.com`,
    ]
      .filter((line) => line !== null)
      .join('\n');

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }

  const inputCls =
    'w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent placeholder:text-slate-400';

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name *</label>
        <input
          type="text" required placeholder="Your Name"
          value={name} onChange={(e) => setName(e.target.value)}
          className={inputCls}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Email *</label>
        <input
          type="email" required placeholder="Your Email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          className={inputCls}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
        <input
          type="tel" placeholder="Phone Number"
          value={phone} onChange={(e) => setPhone(e.target.value)}
          className={inputCls}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company</label>
        <input
          type="text" placeholder="Company (optional)"
          value={company} onChange={(e) => setCompany(e.target.value)}
          className={inputCls}
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
        <textarea
          required rows={5} placeholder="Message"
          value={message} onChange={(e) => setMessage(e.target.value)}
          className={`${inputCls} resize-none`}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white py-3.5 rounded-xl font-bold text-base transition-all shadow-md hover:shadow-lg"
        >
          <MessageSquare className="w-5 h-5" />
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}

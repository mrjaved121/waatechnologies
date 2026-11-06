'use client';

import { useState } from 'react';
import Link from 'next/link';

type Option = { id: string; label: string; rec: string };

const options: Option[] = [
  { id: 'small', label: '1–3 people', rec: 'We suggest the 5 kg composite cylinder — Rs 8,000.' },
  { id: 'family', label: '4–8 people', rec: 'We suggest the 10 kg composite cylinder — Rs 11,000.' },
  { id: 'outdoor', label: 'Outdoor or travel', rec: 'We suggest the 5 kg composite cylinder — light enough to carry anywhere.' },
  { id: 'business', label: 'Restaurant or food cart', rec: 'We suggest the 10 kg cylinder; your dealer can arrange several at bulk pricing.' },
];

// Fires a "size_helper" dataLayer event so GTM can report which answer buyers pick.
function track(id: string) {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  (w.dataLayer = w.dataLayer || []).push({ event: 'size_helper', answer: id });
}

export default function SizeHelper() {
  const [picked, setPicked] = useState<string | null>(null);
  const chosen = options.find((o) => o.id === picked);

  return (
    <div className="w-full max-w-2xl rounded-3xl border border-line bg-white p-8 sm:p-10">
      <p className="text-center text-lg font-semibold text-ink">Who are you cooking for?</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2.5">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            aria-pressed={picked === o.id}
            onClick={() => { setPicked(o.id); track(o.id); }}
            className={`min-h-12 rounded-xl border px-5 text-[15px] font-semibold transition-colors ${
              picked === o.id
                ? 'border-brand bg-brand text-white'
                : 'border-slate-300 bg-white text-ink hover:border-brand'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      {chosen && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-tint p-5">
          <p className="text-ink">{chosen.rec}</p>
          <Link
            href="/shop"
            className="inline-flex min-h-12 items-center rounded-xl bg-brand px-5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            See this cylinder
          </Link>
        </div>
      )}
    </div>
  );
}

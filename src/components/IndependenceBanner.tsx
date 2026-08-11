'use client';
import { useState, useEffect } from 'react';

export default function IndependenceBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('independence-banner-dismissed');
    const expired = new Date() >= new Date('2026-08-15T00:00:00');
    if (!dismissed && !expired) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="relative bg-[#01411C] text-white text-center py-2 px-10 text-sm font-medium tracking-wide">
      <span>
        ☪️&nbsp; Celebrating 78 Years of Azadi &mdash; 14 August 2026 &nbsp;&nbsp;|&nbsp;&nbsp; Pakistan Zindabad&nbsp; 🇵🇰
      </span>
      <button
        onClick={() => {
          sessionStorage.setItem('independence-banner-dismissed', '1');
          setVisible(false);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-xl leading-none transition-colors"
        aria-label="Dismiss Independence Day banner"
      >
        ×
      </button>
    </div>
  );
}

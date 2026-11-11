'use client';

import { useCallback, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'waa-analytics-consent';

/** localStorage never changes under us here, so the subscribe callback is a no-op. */
function subscribe() {
  return () => {};
}

function readChoice(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    // Private mode or blocked storage: treat as "not chosen yet".
    return null;
  }
}

/**
 * Consent notice for the analytics tags.
 *
 * The root layout sets Google Consent Mode defaults to "denied" before gtm.js loads, so
 * no analytics cookie is set until a visitor chooses here. That same inline script
 * replays a stored "granted" choice, which is why this component only has to handle a
 * visitor who has not chosen yet. The choice lives in localStorage: per-browser, and it
 * never leaves the device.
 */
export default function CookieNotice() {
  // Server snapshot is 'granted' so the banner is absent from the server HTML and
  // appears only after hydration, for visitors who have not chosen.
  const stored = useSyncExternalStore(subscribe, readChoice, () => 'granted');
  const [dismissed, setDismissed] = useState(false);

  const choose = useCallback((state: 'granted' | 'denied') => {
    try {
      localStorage.setItem(STORAGE_KEY, state);
    } catch {
      // Nothing to do — the choice then applies to this page view only.
    }
    const w = window as unknown as {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: unknown[];
    };
    const payload = {
      analytics_storage: state,
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
    };
    if (typeof w.gtag === 'function') {
      w.gtag('consent', 'update', payload);
    } else {
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push(['consent', 'update', payload]);
    }
    setDismissed(true);
  }, []);

  if (dismissed || stored !== null) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-notice-title"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white p-4 shadow-[0_-8px_30px_rgba(11,53,40,0.12)] sm:p-5"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p id="cookie-notice-title" className="font-bold text-ink">Cookies on this site</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            We use Google Analytics and Microsoft Clarity to see which pages people find useful and where the site is hard to use. Both stay off until you choose.{' '}
            <Link href="/privacy-policy" className="font-semibold text-brand underline underline-offset-2">
              Privacy policy
            </Link>
          </p>
        </div>
        <div className="flex flex-shrink-0 gap-2.5">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="min-h-11 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-ink transition-colors hover:border-brand"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="min-h-11 rounded-xl bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

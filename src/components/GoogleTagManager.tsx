import Script from 'next/script';

// Google Tag Manager container (the "Google tag" install). Loads on every page via the
// root layout. Override the container with NEXT_PUBLIC_GTM_ID in Vercel if it changes.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-5QSDTQZ7';

export default function GoogleTagManager() {
  return (
    <>
      {/* Consent Mode defaults are set by an inline script in the root layout <head>,
          which runs before this loader so no analytics cookie is set until the visitor
          chooses in CookieNotice. */}
      <Script src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} strategy="afterInteractive" />
    </>
  );
}

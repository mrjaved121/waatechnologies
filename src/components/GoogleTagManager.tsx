import Script from 'next/script';

// Google Tag Manager container (the "Google tag" install). Loads on every page via the
// root layout. Override the container with NEXT_PUBLIC_GTM_ID in Vercel if it changes.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-5QSDTQZ7';

export default function GoogleTagManager() {
  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} strategy="afterInteractive" />
    </>
  );
}

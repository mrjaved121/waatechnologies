import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms of use for waatechnologies.com — how prices, product information, ordering through authorised dealers, certifications and liability are handled.',
  alternates: { canonical: 'https://waatechnologies.com/terms' },
  robots: { index: true, follow: true },
};

const UPDATED = '6 November 2026';

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Terms of Use</span>
          </div>
          <h1 className="text-5xl font-black mb-4">Terms of Use</h1>
          <p className="text-green-100 text-xl max-w-2xl">
            The terms on which WAATechnologies Pvt Ltd provides this website and the information on it.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-muted mb-10">Last updated: {UPDATED}</p>

          <div className="prose prose-slate max-w-none prose-headings:font-black prose-h2:text-2xl prose-a:text-brand prose-p:leading-relaxed">
            <h2>Who we are</h2>
            <p>
              This website is operated by WAATechnologies Pvt Ltd, a company incorporated with the Securities and
              Exchange Commission of Pakistan, with its registered office at 172-A First Floor, Adjacent Bahria Grand
              Masjid, Sector E Commercial, Bahria Town, Lahore, Pakistan, and its manufacturing facility in Gujranwala,
              Punjab. In these terms, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; mean WAATechnologies Pvt Ltd.
            </p>
            <p>
              By using this website you accept these terms. If you do not accept them, please do not use the site.
            </p>

            <h2>Product information and prices</h2>
            <p>
              Prices shown on this website are manufacturer list prices in Pakistani Rupees and are intended as a guide.
              The price you pay is confirmed by the authorised dealer who supplies you, and may differ by city or change
              without notice. Specifications, capacities and dimensions are taken from our technical specification sheet
              and are given in good faith; we may improve or change product designs over time.
            </p>
            <p>
              Capacities quoted for cylinders are nominal fill weights. Cylinders are filled by weight at authorised
              dealers.
            </p>

            <h2>Ordering</h2>
            <p>
              This website does not take payment. Ordering buttons open a WhatsApp conversation or a telephone call so
              that an order can be confirmed with us or with an authorised dealer. No contract of sale is formed by
              sending a message through this website; a contract is formed only when an order is confirmed and accepted
              by us or by the dealer supplying you. Delivery times quoted on product pages are typical, not guaranteed.
            </p>

            <h2>Authorised dealers</h2>
            <p>
              Genuine WAATechnologies cylinders are supplied through the dealers listed on our{' '}
              <Link href="/authorized-dealers">authorised dealers page</Link>. Sellers not on that list are not
              authorised by us, and we cannot confirm the origin, condition or certification of cylinders bought from
              them. If you are unsure whether a seller is authorised, contact us before buying.
            </p>

            <h2>Safety information</h2>
            <p>
              The safety guidance on this website is general information, not a substitute for the instructions supplied
              with your cylinder, your regulator or your appliance, and not a substitute for professional advice. LPG is
              a flammable fuel and must be handled accordingly. Never refill a cylinder yourself or at an unlicensed
              setup. Always follow the applicable OGRA rules and the instructions of your dealer.
            </p>

            <h2>Certifications</h2>
            <p>
              Certificates and licences shown on this website are reproduced at reduced resolution. They are published so
              that the documents can be recognised, not so that registration numbers can be read or copied. Dealers and
              corporate buyers who need verified copies can request them by{' '}
              <Link href="/contact-us">contacting us</Link>. Certifications apply to the products and scope stated on
              each certificate.
            </p>

            <h2>Intellectual property</h2>
            <p>
              The content of this website, including text, photographs, product images, logos and the WAATechnologies and
              Global Composite Cylinders names, belongs to WAATechnologies Pvt Ltd or is used with permission. You may
              read, print and share pages for your own non-commercial use. You may not copy our content, product images
              or branding for commercial purposes, or present our products as your own, without our written permission.
            </p>

            <h2>Links to other sites</h2>
            <p>
              Where this website links to another organisation&apos;s site, we do so for convenience. We do not control
              those sites and are not responsible for their content or their handling of your data.
            </p>

            <h2>Availability and changes</h2>
            <p>
              We try to keep this website available and accurate, but we do not guarantee that it will be uninterrupted
              or free of errors. We may change, suspend or withdraw any part of it, and we may update these terms. The
              date at the top of this page shows when it was last changed.
            </p>

            <h2>Liability</h2>
            <p>
              To the extent permitted by Pakistani law, we are not liable for loss arising from reliance on general
              information published on this website, from the unavailability of the site, or from dealings with sellers
              who are not authorised dealers. Nothing in these terms limits any liability that cannot lawfully be
              limited, including liability for death or personal injury caused by our negligence, or for product
              liability under applicable law.
            </p>

            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of the Islamic Republic of Pakistan, and the courts of Lahore have
              jurisdiction over any dispute arising from them.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to{' '}
              <a href="mailto:info@waatechnologies.com">info@waatechnologies.com</a> or{' '}
              <a href="tel:+924237815533">(+92) 42 3781 5533</a>. See also our{' '}
              <Link href="/privacy-policy">privacy policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

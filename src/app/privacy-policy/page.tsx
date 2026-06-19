import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'WAA Technologies privacy policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://waatechnologies.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="gradient-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-green-200 hover:text-white text-sm transition-colors">Home</Link>
            <span className="text-green-400">/</span>
            <span className="text-white text-sm font-medium">Privacy Policy</span>
          </div>
          <h1 className="text-5xl font-black mb-4">Privacy Policy</h1>
          <p className="text-green-100">Last updated: January 1, 2026</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-slate prose-headings:font-black prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
          <h2>1. Information We Collect</h2>
          <p>When you use our website or contact us, we may collect your name, email address, phone number, and company name. This information is used solely to respond to your enquiries and process orders.</p>
          <h2>2. How We Use Your Information</h2>
          <p>We use your personal information to process orders, respond to enquiries, send relevant product updates (with your consent), and improve our website and services.</p>
          <h2>3. Information Sharing</h2>
          <p>WAA Technologies does not sell, trade, or rent your personal information to third parties. We may share information with authorized dealers only when necessary to fulfil your order or service request.</p>
          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
          <h2>5. Cookies</h2>
          <p>Our website may use cookies to improve user experience and analyze website traffic. You can disable cookies through your browser settings, though some features may not function correctly.</p>
          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at waatechnologies.pvt.ltd@gmail.com.</p>
          <h2>7. Contact</h2>
          <p>For privacy-related questions, contact WAA Technologies at 172-A First Floor, Bahria Town Lahore, or email waatechnologies.pvt.ltd@gmail.com.</p>
        </div>
      </section>
    </>
  );
}

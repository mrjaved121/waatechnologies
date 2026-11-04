import { MessageCircle, Phone } from 'lucide-react';

// Fixed WhatsApp + Call buttons on every page, so mobile visitors can reach
// WAATechnologies in one tap instead of hunting for the footer number.
const WHATSAPP_NUMBER = '923414999998';
const PHONE_NUMBER = '+924237815533';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 print:hidden" aria-label="Quick contact">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call WAATechnologies"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-900 text-white shadow-lg transition-transform hover:scale-105"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}

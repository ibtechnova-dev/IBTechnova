"use client";

import { WHATSAPP_URL } from "@/app/data/services";
import { trackWhatsApp } from "@/app/components/Analytics";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsApp}
      aria-label="Chat with IBtech Nova on WhatsApp"
      className="fixed bottom-5 right-5 z-[80] group flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.55)] hover:scale-105 transition-all duration-300 p-3.5 sm:pr-5"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 flex-shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3.2C8.94 3.2 3.2 8.94 3.2 16c0 2.26.6 4.47 1.73 6.41L3.2 28.8l6.57-1.71A12.76 12.76 0 0 0 16 28.8c7.06 0 12.8-5.74 12.8-12.8S23.06 3.2 16.004 3.2Zm0 23.36c-1.98 0-3.92-.53-5.62-1.54l-.4-.24-3.9 1.02 1.04-3.8-.26-.4A10.52 10.52 0 0 1 5.44 16c0-5.83 4.74-10.56 10.56-10.56S26.56 10.17 26.56 16 21.83 26.56 16.004 26.56Zm5.79-7.9c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.56-1.58-.95-.85-1.59-1.89-1.77-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.35-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="hidden sm:inline text-sm font-bold">Chat on WhatsApp</span>
    </a>
  );
}

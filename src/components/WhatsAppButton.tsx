import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_CONFIG.whatsappMessage
  )}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with RAVGROUP on WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#111111]"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-75" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
        </div>
        <span className="text-xs font-bold tracking-wider font-['Plus_Jakarta_Sans'] whitespace-nowrap hidden sm:inline-block">
          Chat With Us
        </span>
      </a>
    </aside>
  );
};

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY, getWhatsAppUrl } from '../config/company';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido no WhatsApp" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all group border-2 border-white/80"
        aria-label="Falar com a Higieniza Lar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline text-sm font-black tracking-wide pr-1">
          WhatsApp Oficial
        </span>
      </a>
    </aside>
  );
};

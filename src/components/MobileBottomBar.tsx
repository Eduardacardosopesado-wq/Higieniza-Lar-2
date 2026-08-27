import React from 'react';
import { MessageCircle, FileText } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

export const MobileBottomBar: React.FC = () => {
  return (
    <aside 
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]"
      aria-label="Ações Rápidas no Celular"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bottom-whatsapp"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs text-center shadow-xs"
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span>WHATSAPP</span>
        </a>

        <a
          href="#orcamento"
          id="mobile-bottom-quote"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-700 active:bg-blue-800 text-white font-bold text-xs text-center shadow-xs"
        >
          <FileText className="w-4 h-4 shrink-0" />
          <span>ORÇAMENTO</span>
        </a>
      </div>
    </aside>
  );
};

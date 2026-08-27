import React from 'react';
import { getWhatsAppUrl } from '../config/company';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl('Olá! Gostaria de solicitar um orçamento para higienização de estofados.');

  return (
    <aside 
      aria-label="Atendimento no WhatsApp" 
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 select-none"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg shadow-emerald-950/20 hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-200 active:scale-95 border border-white/30"
        aria-label="Fale conosco pelo WhatsApp"
      >
        {/* Official WhatsApp Vector Logo (Inline SVG) */}
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          fill="currentColor" 
          className="w-6 h-6 shrink-0" 
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.62L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.64 13.5 14.47 13.46 14.31 13.71C14.15 13.96 13.68 14.51 13.53 14.68C13.39 14.85 13.25 14.87 13 14.75C12.75 14.62 11.96 14.36 11.02 13.52C10.28 12.87 9.79 12.06 9.64 11.81C9.5 11.56 9.63 11.43 9.75 11.31C9.86 11.2 10 11.04 10.13 10.9C10.25 10.75 10.29 10.65 10.37 10.48C10.45 10.32 10.41 10.17 10.35 10.05C10.29 9.92 9.82 8.77 9.63 8.3C9.44 7.84 9.25 7.9 9.11 7.89C8.98 7.89 8.82 7.89 8.66 7.89C8.5 7.89 8.23 7.95 8.01 8.19C7.79 8.43 7.16 9.02 7.16 10.23C7.16 11.44 8.04 12.6 8.16 12.77C8.29 12.93 9.89 15.4 12.35 16.46C12.94 16.71 13.39 16.86 13.75 16.97C14.34 17.16 14.88 17.13 15.3 17.07C15.77 17 16.75 16.48 16.96 15.9C17.16 15.31 17.16 14.81 17.1 14.71C17.04 14.6 16.81 14.52 16.56 14.39Z" />
        </svg>

        {/* Desktop Text: "Fale conosco" with subtle hover transition */}
        <span className="hidden sm:inline-block text-sm font-bold tracking-wide whitespace-nowrap overflow-hidden transition-all duration-200">
          <span className="group-hover:hidden">Fale conosco</span>
          <span className="hidden group-hover:inline">Solicite seu orçamento</span>
        </span>
      </a>
    </aside>
  );
};

import React from 'react';
import { COMPANY, getWhatsAppUrl } from '../config/company';
import { MessageCircle, MapPin, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-900 to-slate-950 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-bold text-sm mb-6">
          <MapPin className="w-4 h-4" />
          <span>Atendimento em toda a Grande Vitória — ES</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Pronto para renovar <br />
          seu estofado?
        </h2>

        <p className="mt-4 text-xl sm:text-2xl text-slate-300 font-medium max-w-xl mx-auto">
          Solicite seu orçamento agora mesmo pelo WhatsApp.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xl shadow-2xl shadow-blue-600/40 hover:scale-105 transition-all"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>SOLICITAR ORÇAMENTO</span>
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-400 font-medium">
          {COMPANY.PHONE_FORMATTED} • {COMPANY.UNIT}
        </p>

      </div>
    </section>
  );
};

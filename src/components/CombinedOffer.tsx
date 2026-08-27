import React from 'react';
import { getWhatsAppUrl } from '../config/company';
import { Sparkles, Shield, MessageCircle, ArrowRight } from 'lucide-react';

export const CombinedOffer: React.FC = () => {
  return (
    <section id="oferta-combinada" className="py-16 sm:py-24 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white text-center border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold uppercase tracking-wider mb-4">
          Pacote Completo
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          Limpe. Renove. Proteja.
        </h2>

        <p className="mt-4 text-lg sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto">
          Combine Higienização + Impermeabilização no mesmo atendimento.
        </p>

        {/* 2 Step comparison */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 text-blue-400 font-black text-lg mb-2">
              <Sparkles className="w-5 h-5" />
              <span>1º Passo: Higienização</span>
            </div>
            <p className="text-slate-300 text-base">Limpeza profunda que remove sujeiras e resíduos acumulados.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 text-cyan-400 font-black text-lg mb-2">
              <Shield className="w-5 h-5" />
              <span>2º Passo: Impermeabilização</span>
            </div>
            <p className="text-slate-300 text-base">Proteção que facilita a limpeza e reduz a absorção rápida de líquidos.</p>
          </div>
        </div>

        {/* Big CTA */}
        <div className="mt-10">
          <a
            href={getWhatsAppUrl('Olá! Quero um orçamento para o pacote completo: Higienização + Impermeabilização.')}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-pacote-completo"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-black text-lg sm:text-xl shadow-2xl transition-colors"
          >
            <MessageCircle className="w-6 h-6 fill-current text-slate-950" />
            <span>SOLICITAR PACOTE COMPLETO</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { getWhatsAppUrl } from '../config/company';
import { CheckCircle2, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export const CleaningHighlight: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="higienizacao" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column (Left on Desktop, Top on Mobile) */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900">
            {!imgError ? (
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                alt="Higienização Profissional de Estofados"
                loading="lazy"
                onError={() => setImgError(true)}
                className="w-full h-80 sm:h-[440px] object-cover"
              />
            ) : (
              <div className="w-full h-80 sm:h-[440px] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-8 text-center text-white">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-xl font-bold text-white tracking-tight">Higieniza Lar</p>
                <p className="text-sm text-slate-300 mt-1 max-w-xs">Higienização Profissional com Máquina Extratora</p>
              </div>
            )}
            
            {/* Simple Clean Badge */}
            <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-sm text-white px-4 py-2 rounded-xl border border-white/10 shadow-lg">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-400">
                HIGIENIZAÇÃO PROFISSIONAL
              </span>
            </div>
          </div>

          {/* Content Column (Right on Desktop, Bottom on Mobile) */}
          <div className="space-y-6 text-left">
            <span className="text-blue-700 font-extrabold text-sm sm:text-base uppercase tracking-wider">
              Destaque 01
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Higienização Profissional de Estofados
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">
              Limpeza profunda com máquina extratora para renovar seu estofado.
            </p>

            <div className="space-y-3.5 pt-2 text-base sm:text-lg text-slate-800 font-bold">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-700 shrink-0" />
                <span>Remove sujeira e odores acumulados</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-700 shrink-0" />
                <span>Produtos adequados para cada tecido</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-700 shrink-0" />
                <span>Processo cuidadoso com o estofado</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de solicitar um orçamento para higienização de estofados.')}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-destaque-higienizacao"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-black text-lg sm:text-xl shadow-xl shadow-blue-700/25 hover:shadow-2xl hover:-translate-y-0.5 transition-all text-center"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>SOLICITAR ORÇAMENTO</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

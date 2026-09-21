import React, { useState } from 'react';
import { getWhatsAppUrl } from '../config/company';
import { MessageCircle, ArrowRight, Clock, Sparkles, Shield, Droplet } from 'lucide-react';

export const WaterproofingHighlight: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const benefits = [
    {
      title: 'MAIS TEMPO PARA AGIR',
      desc: 'Menos absorção imediata em caso de derramamentos.',
      icon: Clock,
    },
    {
      title: 'LIMPEZA MAIS PRÁTICA',
      desc: 'Facilita a limpeza de pequenos acidentes do dia a dia.',
      icon: Sparkles,
    },
    {
      title: 'PROTEÇÃO DO TECIDO',
      desc: 'Ajuda a preservar o estofado por mais tempo.',
      icon: Shield,
    },
  ];

  return (
    <section id="impermeabilizacao" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Content Column (approx 55% / 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              <span>Destaque 02</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.15]">
              Proteja seu estofado antes da próxima mancha
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
              Impermeabilização profissional que ajuda a evitar a absorção rápida de líquidos e facilita a limpeza no dia a dia.
            </p>

            {/* 3 Visual Premium Benefits (Clean, No Boxy Cards, No Numbers) */}
            <div className="space-y-5 pt-3 divide-y divide-slate-800/80">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 ${idx > 0 ? 'pt-4' : ''}`}
                  >
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 font-medium text-sm sm:text-base mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-destaque-impermeabilizacao"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-lg sm:text-xl shadow-xl shadow-blue-600/30 transition-colors text-center"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>QUERO PROTEGER MEU ESTOFADO</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visual Column (approx 45% / 5 cols) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-950">
              {!imgError ? (
                <img
                  src="/impermeabilizacao_destaque.png"
                  alt="Impermeabilização de Estofado"
                  loading="lazy"
                  onError={() => setImgError(true)}
                  className="w-full h-80 sm:h-[480px] object-cover"
                />
              ) : (
                <div className="w-full h-80 sm:h-[480px] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex flex-col items-center justify-center p-8 text-center text-white">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center mb-4">
                    <Droplet className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-xl font-bold text-white tracking-tight">Higieniza Lar</p>
                  <p className="text-sm text-slate-300 mt-1 max-w-xs">Impermeabilização e Proteção de Tecidos</p>
                </div>
              )}

              {/* Seal at top right */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white font-black text-xs uppercase px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-lg border border-blue-400/20">
                <Droplet className="w-4 h-4 fill-white" />
                <span>Efeito Repelente</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

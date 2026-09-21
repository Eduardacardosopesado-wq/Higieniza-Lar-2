import React, { useState } from 'react';
import { getWhatsAppUrl } from '../config/company';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export const CleaningHighlight: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const steps = [
    {
      number: '01',
      title: 'LIMPEZA',
      desc: 'Remove sujeira, manchas e resíduos.',
    },
    {
      number: '02',
      title: 'HIGIENIZAÇÃO',
      desc: 'Aplicação do produto antibactericida.',
    },
    {
      number: '03',
      title: 'FINALIZAÇÃO',
      desc: 'Aplicação do sanitizante.',
    },
  ];

  return (
    <section id="higienizacao" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Column: Approx 45% (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900">
              {!imgError ? (
                <img
                  src="/destaque1_higienizacao.png"
                  alt="Higienização Profissional de Estofados"
                  loading="lazy"
                  onError={() => setImgError(true)}
                  className="w-full h-80 sm:h-[500px] object-cover"
                />
              ) : (
                <div className="w-full h-80 sm:h-[500px] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-8 text-center text-white">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-xl font-bold text-white tracking-tight">Higieniza Lar</p>
                  <p className="text-sm text-slate-300 mt-1 max-w-xs">Higienização Profissional com Máquina Extratora</p>
                </div>
              )}
              
              {/* Discreet Elegant Badge */}
              <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-sm text-white px-4 py-2 rounded-xl border border-white/10 shadow-lg">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-400">
                  HIGIENIZAÇÃO PROFISSIONAL
                </span>
              </div>
            </div>
          </div>

          {/* Content Column: Approx 55% (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              <span>DESTAQUE 01</span>
            </div>
            
            {/* Title (Proportionate, High Impact) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-[1.15]">
              Higienização profissional que renova seu estofado
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-semibold leading-snug">
              Um processo completo para cuidar do seu estofado.
            </p>

            {/* 3 Step Sequence Blocks (01 -> 02 -> 03) */}
            <div className="relative pt-2 space-y-5">
              {/* Connecting vertical line on desktop */}
              <div className="hidden sm:block absolute left-6 top-6 bottom-6 w-0.5 bg-blue-100 -z-10" />

              {steps.map((step) => (
                <div 
                  key={step.number} 
                  className="flex items-start gap-4 sm:gap-5 p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-700 text-white font-black text-lg shadow-md shadow-blue-700/20">
                    {step.number}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 font-medium mt-0.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Statement */}
            <div className="pt-2">
              <p className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-700 shrink-0"></span>
                <span>Seu estofado recebe cuidado em cada etapa.</span>
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
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

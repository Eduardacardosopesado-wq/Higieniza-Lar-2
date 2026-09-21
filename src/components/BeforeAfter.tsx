import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

export const BeforeAfter: React.FC = () => {
  const [beforeImg, setBeforeImg] = React.useState<string>('/sofa_antes.png');
  const [afterImg, setAfterImg] = React.useState<string>('/sofa_depois.png');

  return (
    <section id="antes-e-depois" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Resultado Visível
        </h2>
        <p className="mt-3 text-lg sm:text-xl text-slate-600 font-medium max-w-xl mx-auto">
          Veja a diferença que a higienização profissional faz no seu estofado.
        </p>

        {/* Static Side-by-Side Comparison */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          
          {/* Card 1: ANTES */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md">
            <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden">
              <img
                src={beforeImg}
                onError={() => {
                  if (beforeImg === '/sofa_antes.png') {
                    setBeforeImg('/sofa_antes.png.png');
                  } else if (beforeImg === '/sofa_antes.png.png') {
                    setBeforeImg('/sofa_antes.jpg');
                  }
                }}
                alt="Estofado antes da higienização"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-slate-950/90 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1.5 rounded-xl border border-white/10 shadow-lg">
                Antes (Uso Diário)
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-950 mb-1">
                Acúmulo de Sujeira e Resíduos
              </h3>
              <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                Tecido desgastado visualmente pelo tempo, poeira e pequenos acidentes do dia a dia.
              </p>
            </div>
          </div>

          {/* Card 2: DEPOIS */}
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-blue-600/30 shadow-md">
            <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden">
              <img
                src={afterImg}
                onError={() => {
                  if (afterImg === '/sofa_depois.png') {
                    setAfterImg('/sofa_depois.png.png');
                  } else if (afterImg === '/sofa_depois.png.png') {
                    setAfterImg('/sofa_depois.jpg');
                  }
                }}
                alt="Estofado depois da higienização profissional"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1.5 rounded-xl shadow-lg">
                Depois (Higienizado)
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-950 mb-1">
                Estofado Renovado e Limpo
              </h3>
              <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                Cores realçadas, higienização com máquina extratora e toque agradável recuperado.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href={getWhatsAppUrl('Olá! Gostaria de um orçamento para renovar meu estofado.')}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-antes-depois"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-black text-lg sm:text-xl shadow-xl shadow-blue-700/20 text-center transition-colors"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>QUERO MEU ESTOFADO ASSIM</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

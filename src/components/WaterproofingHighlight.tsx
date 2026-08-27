import React from 'react';
import { getWhatsAppUrl } from '../config/company';
import { ShieldCheck, MessageCircle, Droplet } from 'lucide-react';

export const WaterproofingHighlight: React.FC = () => {
  return (
    <section id="impermeabilizacao" className="py-16 sm:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="space-y-6 text-left order-2 lg:order-1">
            <span className="text-blue-400 font-extrabold text-sm sm:text-base uppercase tracking-wider">
              Destaque 02
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Impermeabilização de Estofados
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
              Camada protetora invisível que repele líquidos e evita manchas imediatas.
            </p>

            <div className="space-y-3 pt-2 text-base sm:text-lg text-slate-200 font-bold">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0" />
                <span>Bloqueia a absorção de água, sucos e café</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0" />
                <span>Facilita a limpeza do dia a dia com papel absorvente</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0" />
                <span>Mantém a cor, maciez e textura originais</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de saber mais sobre a Impermeabilização de Estofados.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-lg shadow-xl shadow-blue-500/25 transition-all text-center"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>ORÇAR IMPERMEABILIZAÇÃO</span>
              </a>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80"
              alt="Impermeabilização de Estofado"
              loading="lazy"
              className="w-full h-80 sm:h-[420px] object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white font-black text-xs uppercase px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-lg">
              <Droplet className="w-4 h-4 fill-white" />
              <span>Efeito Repelente</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

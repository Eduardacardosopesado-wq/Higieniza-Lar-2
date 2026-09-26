import React from 'react';
import { getWhatsAppUrl } from '../config/company';
import { MessageCircle, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-b from-slate-50 via-blue-50/25 to-white pt-6 pb-14 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 border-b border-slate-100 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Top on mobile): Big Headline, Clear Hierarchy & Direct CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* 1. Selo Superior */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-950 text-xs sm:text-sm font-black tracking-wide uppercase">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-700 shrink-0" />
              <span>ATENDIMENTO EM TODA A GRANDE VITÓRIA</span>
            </div>

            {/* 2. Título */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]">
              Higienização de estofados <br className="hidden sm:inline" />
              em <span className="text-blue-700">toda a Grande Vitória</span>
            </h1>

            {/* 3. Subtítulo */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-semibold leading-relaxed max-w-xl">
              Seu sofá limpo, renovado e protegido com um serviço profissional e cuidadoso.
            </p>

            {/* 4. Destaques (Uma única coluna no mobile) */}
            <div className="space-y-2.5 pt-1 text-sm sm:text-base md:text-lg text-slate-800 font-bold">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 shrink-0" />
                <span>Higienização profissional</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 shrink-0" />
                <span>Produtos específicos para cada tecido</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 shrink-0" />
                <span>Impermeabilização de estofados</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 shrink-0" />
                <span>Atendimento em toda a Grande Vitória</span>
              </div>
            </div>

            {/* 5. Botões de Ação */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Primary CTA */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-primary-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 sm:py-5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-black text-base sm:text-lg shadow-xl shadow-blue-700/25 transition-colors text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                <span>SOLICITAR ORÇAMENTO</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#antes-e-depois"
                id="hero-secondary-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-4 sm:py-5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 border-2 border-slate-200 font-bold text-sm sm:text-base transition-colors text-center"
              >
                <span>VER ANTES E DEPOIS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* 6. Imagem da Hero (Aparece depois do conteúdo no mobile) */}
          <div className="lg:col-span-5 relative w-full pt-2 lg:pt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white bg-slate-900 w-full aspect-[4/3] sm:aspect-auto sm:h-[460px]">
              <img
                src="/hero_banner.png"
                alt="Profissional realizando higienização de estofados"
                width="1536"
                height="1024"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
              
              {/* Simple Clean Badge on Image */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-slate-950/85 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/10 shadow-lg">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-blue-400">
                  HIGIENIZAÇÃO PROFISSIONAL
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

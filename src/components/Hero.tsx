import React from 'react';
import { getWhatsAppUrl } from '../config/company';

export const Hero: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl("Olá! Vim pelo site e gostaria de um orçamento para limpeza e/ou impermeabilização dos meus estofados.");

  return (
    <section id="inicio" className="relative bg-[#0060DF] text-white overflow-hidden border-b border-blue-400/20">
      
      {/* ===================================================================== */}
      {/* 1. LAYOUT MOBILE (< 1024px) - FUNDO E RAPAZ UNIFICADOS EM TELA ÚNICA  */}
      {/* ===================================================================== */}
      <div className="lg:hidden relative min-h-[660px] xs:min-h-[700px] sm:min-h-[760px] flex flex-col items-center text-center px-5 pt-8 pb-4 overflow-hidden">
        
        {/* Imagem de Fundo Inteira Unificada: azul royal luminoso com técnico profissional */}
        <img
          src="/img/hero-higienizalar-azul-mobile.jpg"
          alt="Especialista profissional uniformizado com equipamento de higienização de sofá"
          className="absolute inset-0 w-full h-full object-cover object-[center_bottom] pointer-events-none select-none"
          loading="eager"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />

        {/* Suave degradê no topo para máxima nitidez e legibilidade dos textos na primeira dobra */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0052C8]/70 via-[#0060DF]/35 to-transparent h-1/2 pointer-events-none" />

        {/* Conteúdo Sobreposto no Topo (Primeira Dobra) */}
        <div className="relative z-10 flex flex-col items-center max-w-[340px]">
          {/* Título H1 */}
          <h1 className="text-[25px] xs:text-[28px] font-[800] text-white leading-[1.18] tracking-tight drop-shadow-sm">
            Limpeza e impermeabilização de sofá na Grande Vitória
          </h1>

          {/* Subtítulo */}
          <p className="mt-3 text-[13.5px] xs:text-[14px] text-white/95 font-normal leading-relaxed drop-shadow-xs">
            Renove a beleza, o conforto e a proteção dos seus estofados com quem é especialista no cuidado que você valoriza!
          </p>

          {/* Botão Outlined Pill na Primeira Dobra */}
          <div className="mt-4 w-full max-w-[300px]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-mobile-cta"
              data-local="hero"
              className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full border-2 border-white text-white font-[800] text-[15px] tracking-wide bg-white/10 hover:bg-white hover:text-[#0052C8] active:scale-95 transition-all shadow-md shadow-blue-950/20 backdrop-blur-xs"
            >
              Solicitar um orçamento
            </a>
          </div>
        </div>

      </div>

      {/* ===================================================================== */}
      {/* 2. LAYOUT DESKTOP (>= 1024px) - AZUL ROYAL + TÉCNICO COM LOGO DESTACADO */}
      {/* ===================================================================== */}
      <div className="hidden lg:block relative min-h-[520px] xl:min-h-[580px] bg-[#0060DF] overflow-hidden">
        
        {/* Fotografia de fundo: Azul royal com o técnico uniformizado e extratora profissional */}
        <img
          src="/img/hero-higienizalar-azul-desktop.jpg"
          alt="Especialista profissional uniformizado com equipamento profissional de higienização de sofás"
          className="absolute inset-0 w-full h-full object-cover object-[right_center] pointer-events-none select-none"
          loading="eager"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />

        {/* Gradiente suave à esquerda para garantir contraste e leitura impecável */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#004BB8]/85 via-[#0055CC]/40 to-transparent w-full lg:w-3/5 pointer-events-none" />

        {/* Conteúdo Desktop alinhado à esquerda */}
        <div className="relative z-10 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 min-h-[520px] xl:min-h-[580px] flex items-center">
          <div className="max-w-[540px] xl:max-w-[600px] space-y-6 text-left py-12">
            
            {/* Título H1 */}
            <h1 className="text-[44px] xl:text-[52px] font-[800] text-white leading-[1.12] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] drop-shadow-xs">
              Limpeza e impermeabilização de sofá na Grande Vitória
            </h1>

            {/* Subtítulo Diferenciado */}
            <p className="text-[17px] xl:text-[18px] text-white/95 font-normal leading-relaxed max-w-[490px] drop-shadow-xs">
              Renove a beleza, o conforto e a proteção dos seus estofados com quem é especialista no cuidado que você valoriza!
            </p>

            {/* Botão Outlined Pill */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-desktop-cta"
                data-local="hero"
                className="inline-flex items-center justify-center px-9 py-3.5 rounded-full border-2 border-white text-white font-[800] text-base tracking-wide bg-white/10 hover:bg-white hover:text-[#004BB8] active:scale-95 transition-all shadow-md shadow-blue-950/20 backdrop-blur-xs"
              >
                Solicitar um orçamento
              </a>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

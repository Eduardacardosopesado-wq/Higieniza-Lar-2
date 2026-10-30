import React from 'react';
import { ChevronRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-r from-[#177AE5] via-[#0C6CD8] to-[#0A60C8] p-8 sm:p-12 text-white shadow-xl">
          
          {/* Formas orgânicas translúcidas ao fundo */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-black/10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Lado Esquerdo */}
            <div className="lg:col-span-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] tracking-tight leading-snug">
                Mais conforto e bem-estar para a sua casa, com serviços feitos sob medida!
              </h2>
            </div>

            {/* Divisor Central no Desktop */}
            <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                <ChevronRight className="w-5 h-5 stroke-[3]" />
              </div>
            </div>

            {/* Lado Direito */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-center text-left lg:text-center space-y-3">
              <p className="text-sm sm:text-base font-bold text-white/90">
                Fale agora com a equipe HigienizaLar
              </p>

              <a
                href={getWhatsAppUrl("Olá! Vi a oferta no site e quero solicitar um orçamento com a HigienizaLar.")}
                target="_blank"
                rel="noopener noreferrer"
                id="final-cta-btn"
                data-local="final"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-white hover:bg-white hover:text-[#0A60C8] text-white font-[800] text-sm sm:text-base tracking-wide transition-all shadow-md active:scale-95"
              >
                Pedir orçamento
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white border-b border-[#E3E8F0] overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lado Esquerdo: Foto com forma azul orgânica ao fundo */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Forma curva azul suave atrás */}
            <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-4/5 h-4/5 bg-[#D8E8FE] rounded-[40px] -z-0 transform -rotate-2" />
            
            {/* Imagem Real do Profissional HigienizaLar */}
            <div className="relative z-10 rounded-[24px] overflow-hidden shadow-xl border border-slate-100 bg-slate-900 w-full max-w-[460px]">
              <img
                src="/img/sobre-nos-real.jpg"
                alt="Profissional HigienizaLar com uniforme e sofá higienizado em atendimento em Vitória ES"
                className="w-full h-[360px] sm:h-[440px] md:h-[480px] object-cover object-[center_22%]"
                width="1200"
                height="1600"
                loading="lazy"
              />
            </div>
          </div>

          {/* Lado Direito: Texto Institucional */}
          <div className="lg:col-span-6 text-left space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#0B1B3D] tracking-tight">
              Quem é a HigienizaLar
            </h2>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              A HigienizaLar é especializada em higienização e impermeabilização de estofados, colchões, interiores de veículos e hidratação de couro na Grande Vitória. Nossa base fica em Jardim Camburi, e nossas equipes atendem em domicílio em Vitória, Vila Velha, Serra, Cariacica e Viana. Já são mais de 1.000 lares atendidos, com estofados limpos de verdade e ambientes mais confortáveis.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0A6CFF]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A6CFF]" />
              <span>Base em Jardim Camburi • Vitória – ES</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

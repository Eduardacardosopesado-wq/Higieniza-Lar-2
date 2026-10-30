import React from 'react';
import { getWhatsAppUrl } from '../config/company';

export const HomeBusinessService: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E3E8F0] overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lado Esquerdo: Fotografia com formato orgânico azul atrás */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Forma curva azul de fundo */}
            <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-4/5 h-4/5 bg-[#D8E8FE] rounded-[40px] -z-0 transform -rotate-3" />
            
            {/* Foto Real de Atendimento Domiciliar e Empresarial */}
            <div className="relative z-10 rounded-[24px] overflow-hidden shadow-lg border border-slate-100 bg-slate-100 w-full max-w-[460px]">
              <img
                src="/img/atendimento-domiciliar-real.jpg"
                alt="Atendimento domiciliar e empresarial HigienizaLar na Grande Vitória"
                className="w-full h-[320px] sm:h-[420px] object-cover object-[center_35%]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Lado Direito: Texto e Botão */}
          <div className="lg:col-span-6 text-left space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#0B1B3D] tracking-tight leading-tight">
              Atendemos na sua casa e na sua empresa
            </h2>
            <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
              A equipe HigienizaLar vai até você em Vitória, Vila Velha, Serra, Cariacica e Viana. Levamos equipamentos profissionais e produtos biodegradáveis liberados pela Anvisa até o seu endereço, com praticidade e segurança.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de agendar um atendimento a domicílio com a HigienizaLar.")}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-atendimento-domiciliar"
                data-local="atendimento_domiciliar"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0A6CFF] hover:bg-[#005FE6] text-white font-[800] text-sm tracking-wide shadow-md shadow-blue-500/20 active:scale-95 transition-all"
              >
                Quero agendar
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

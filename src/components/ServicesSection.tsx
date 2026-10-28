import React from 'react';

// Ícone Oficial do WhatsApp em SVG inline
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.62L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.64 13.5 14.47 13.46 14.31 13.71C14.15 13.96 13.68 14.51 13.53 14.68C13.39 14.85 13.25 14.87 13 14.75C12.75 14.62 11.96 14.36 11.02 13.52C10.28 12.87 9.79 12.06 9.64 11.81C9.5 11.56 9.63 11.43 9.75 11.31C9.86 11.2 10 11.04 10.13 10.9C10.25 10.75 10.29 10.65 10.37 10.48C10.45 10.32 10.41 10.17 10.35 10.05C10.29 9.92 9.82 8.77 9.63 8.3C9.44 7.84 9.25 7.9 9.11 7.89C8.98 7.89 8.82 7.89 8.66 7.89C8.5 7.89 8.23 7.95 8.01 8.19C7.79 8.43 7.16 9.02 7.16 10.23C7.16 11.44 8.04 12.6 8.16 12.77C8.29 12.93 9.89 15.4 12.35 16.46C12.94 16.71 13.39 16.86 13.75 16.97C14.34 17.16 14.88 17.13 15.3 17.07C15.77 17 16.75 16.48 16.96 15.9C17.16 15.31 17.16 14.81 17.1 14.71C17.04 14.6 16.81 14.52 16.56 14.39Z" />
  </svg>
);

const getServiceWaUrl = (message: string) => `https://wa.me/5527992479840?text=${encodeURIComponent(message)}`;

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-14 sm:py-20 bg-[#F6F8FC] border-b border-[#E3E8F0]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#0F172A] tracking-[-0.02em]">
            Nossos Serviços
          </h2>
          <p className="mt-2 text-[#5B6475] text-base sm:text-lg font-normal">
            Atendimento a domicílio em toda a Grande Vitória.
          </p>
        </div>

        {/* 1. DOIS CARDS GRANDES (1 coluna mobile, 2 colunas desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Card 1: Higienização de Sofás */}
          <div id="higienizacao" className="bg-white rounded-[20px] p-5 sm:p-6 border border-[#E3E8F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Fotos antes/depois lado a lado */}
              <div className="grid grid-cols-2 gap-2 rounded-[16px] overflow-hidden mb-4 bg-slate-100 relative">
                <div className="relative h-44 sm:h-52">
                  <img
                    src="/img/sofa-antes.jpg"
                    alt="Higienização de sofá - Antes"
                    width="260"
                    height="200"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-[#0F172A]/90 text-white text-[10px] font-bold uppercase tracking-wider">
                    Antes
                  </span>
                </div>
                <div className="relative h-44 sm:h-52">
                  <img
                    src="/img/sofa-depois.jpg"
                    alt="Higienização de sofá - Depois"
                    width="260"
                    height="200"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-[#22C55E] text-white text-[10px] font-bold uppercase tracking-wider">
                    Depois
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-[800] text-[#0F172A]">
                Higienização de Sofás
              </h3>
              <p className="mt-1.5 text-[#5B6475] text-sm sm:text-base font-normal">
                Limpeza profunda para renovar seu sofá.
              </p>
            </div>

            <div className="mt-5">
              <a
                href={getServiceWaUrl("Olá! Vi o site e quero um orçamento grátis para higienização de sofá.")}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-servico-sofa"
                data-local="servico_sofa"
                className="w-full h-[48px] rounded-[14px] bg-[#22C55E] hover:bg-[#1eb354] active:scale-[0.99] text-white flex items-center justify-center gap-2 font-[800] text-[15px] shadow-sm transition-all"
                aria-label="Orçamento grátis para higienização de sofá"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Orçamento grátis</span>
              </a>
            </div>
          </div>

          {/* Card 2: Impermeabilização */}
          <div id="impermeabilizacao" className="bg-white rounded-[20px] p-5 sm:p-6 border border-[#E3E8F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Banner do serviço de impermeabilização com foto real */}
              <div className="rounded-[16px] overflow-hidden mb-4 bg-slate-100 h-44 sm:h-52 relative">
                <img
                  src="/img/impermeabilizacao-real.jpg"
                  alt="Impermeabilização de estofados - Efeito repelente a líquidos"
                  width="540"
                  height="220"
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_55%]"
                />
                <span className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-full bg-[#22C55E] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                  Efeito Repelente
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-[800] text-[#0F172A]">
                Impermeabilização
              </h3>
              <p className="mt-1.5 text-[#5B6475] text-sm sm:text-base font-normal">
                Proteção contra líquidos e mais praticidade no dia a dia.
              </p>
            </div>

            <div className="mt-5">
              <a
                href={getServiceWaUrl("Olá! Vi o site e quero um orçamento grátis para impermeabilização de sofá.")}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-servico-imper"
                data-local="servico_imper"
                className="w-full h-[48px] rounded-[14px] bg-[#22C55E] hover:bg-[#1eb354] active:scale-[0.99] text-white flex items-center justify-center gap-2 font-[800] text-[15px] shadow-sm transition-all"
                aria-label="Orçamento grátis para impermeabilização de sofá"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Orçamento grátis</span>
              </a>
            </div>
          </div>

        </div>

        {/* 2. TRÊS CARDS MENORES (2 colunas mobile, 3 colunas desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Card 3: Colchões */}
          <div className="bg-white rounded-[20px] p-4 sm:p-5 border border-[#E3E8F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="rounded-[14px] overflow-hidden mb-3 bg-slate-100 h-36 sm:h-40">
                <img
                  src="/colchao.png"
                  alt="Higienização de colchão"
                  width="360"
                  height="200"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="text-lg sm:text-xl font-[800] text-[#0F172A]">
                Colchões
              </h4>
              <p className="mt-1 text-[#5B6475] text-xs sm:text-sm font-normal">
                Remoção de poeira, resíduos e odores.
              </p>
            </div>

            <div className="mt-4">
              <a
                href={getServiceWaUrl("Olá! Vi o site e quero um orçamento grátis para higienização de colchão.")}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-servico-colchao"
                data-local="servico_colchao"
                className="w-full h-[48px] rounded-[14px] bg-[#22C55E] hover:bg-[#1eb354] active:scale-[0.99] text-white flex items-center justify-center gap-2 font-[800] text-[14px] shadow-sm transition-all"
                aria-label="Orçamento grátis para higienização de colchão"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Orçamento grátis</span>
              </a>
            </div>
          </div>

          {/* Card 4: Cadeiras de Jantar */}
          <div className="bg-white rounded-[20px] p-4 sm:p-5 border border-[#E3E8F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="rounded-[14px] overflow-hidden mb-3 bg-slate-100 h-36 sm:h-40">
                <img
                  src="/cadeiras.png"
                  alt="Higienização de cadeiras de jantar"
                  width="360"
                  height="200"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="text-lg sm:text-xl font-[800] text-[#0F172A]">
                Cadeiras de Jantar
              </h4>
              <p className="mt-1 text-[#5B6475] text-xs sm:text-sm font-normal">
                Higienização e remoção de manchas do uso diário.
              </p>
            </div>

            <div className="mt-4">
              <a
                href={getServiceWaUrl("Olá! Vi o site e quero um orçamento grátis para higienização de cadeiras de jantar.")}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-servico-cadeiras"
                data-local="servico_cadeiras"
                className="w-full h-[48px] rounded-[14px] bg-[#22C55E] hover:bg-[#1eb354] active:scale-[0.99] text-white flex items-center justify-center gap-2 font-[800] text-[14px] shadow-sm transition-all"
                aria-label="Orçamento grátis para higienização de cadeiras"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Orçamento grátis</span>
              </a>
            </div>
          </div>

          {/* Card 5: Bancos de Carro/Couro */}
          <div className="bg-white rounded-[20px] p-4 sm:p-5 border border-[#E3E8F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
            <div>
              <div className="rounded-[14px] overflow-hidden mb-3 bg-slate-100 h-36 sm:h-40">
                <img
                  src="/automotivo.png"
                  alt="Higienização de bancos de carro e couro"
                  width="360"
                  height="200"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="text-lg sm:text-xl font-[800] text-[#0F172A]">
                Bancos de Carro / Couro
              </h4>
              <p className="mt-1 text-[#5B6475] text-xs sm:text-sm font-normal">
                Limpeza interna completa.
              </p>
            </div>

            <div className="mt-4">
              <a
                href={getServiceWaUrl("Olá! Vi o site e quero um orçamento grátis para higienização de bancos de carro.")}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-servico-carro"
                data-local="servico_carro"
                className="w-full h-[48px] rounded-[14px] bg-[#22C55E] hover:bg-[#1eb354] active:scale-[0.99] text-white flex items-center justify-center gap-2 font-[800] text-[14px] shadow-sm transition-all"
                aria-label="Orçamento grátis para higienização de bancos de carro"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Orçamento grátis</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

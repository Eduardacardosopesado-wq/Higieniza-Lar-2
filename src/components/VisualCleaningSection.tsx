import React from 'react';

export const VisualCleaningSection: React.FC = () => {
  return (
    <section className="bg-[#EBF3FE] py-8 sm:py-14 border-b border-[#E3E8F0] overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="w-full rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-md border border-blue-100 bg-white">
          <picture>
            {/* Desktop Banner: Tela grande (768px ou mais) */}
            <source
              media="(min-width: 768px)"
              srcSet="/img/banner-higienizacao-desktop.png"
            />
            {/* Mobile Banner: Padrão em telas menores */}
            <img
              src="/img/banner-higienizacao-mobile.png"
              alt="Limpeza e higienização de estofados - HigienizaLar"
              className="w-full h-auto object-contain block"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

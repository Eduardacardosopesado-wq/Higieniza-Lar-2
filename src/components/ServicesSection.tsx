import React from 'react';
import { getWhatsAppUrl } from '../config/company';

// Ícone Gota de Água em SVG inline
const WaterDropIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: "sofas",
      title: "Sofás",
      image: "/img/servico-sofa-real.jpg",
      objectPosition: "object-[center_55%]",
      waText: "Olá! Gostaria de um orçamento para higienização de sofá.",
      ctaId: "cta-servico-sofa",
      dataLocal: "servico_sofa",
    },
    {
      id: "poltronas",
      title: "Poltronas",
      image: "/img/servico-poltrona-real.jpg",
      objectPosition: "object-[center_45%]",
      waText: "Olá! Gostaria de um orçamento para higienização de poltronas.",
      ctaId: "cta-servico-poltronas",
      dataLocal: "servico_poltronas",
    },
    {
      id: "cadeiras",
      title: "Cadeiras",
      image: "/img/servico-cadeiras-real.jpg",
      objectPosition: "object-[center_35%]",
      waText: "Olá! Gostaria de um orçamento para higienização de cadeiras de jantar.",
      ctaId: "cta-servico-cadeiras",
      dataLocal: "servico_cadeiras",
    },
    {
      id: "automotivo",
      title: "Estofado e teto de veículos automotivos",
      image: "/img/servico-automotivo-real.jpg",
      objectPosition: "object-[center_45%]",
      waText: "Olá! Gostaria de um orçamento para higienização de bancos de carro e automotivo.",
      ctaId: "cta-servico-carro",
      dataLocal: "servico_carro",
    },
    {
      id: "colchoes",
      title: "Colchões",
      image: "/img/servico-colchao-real.jpg",
      objectPosition: "object-[center_40%]",
      waText: "Olá! Gostaria de um orçamento para higienização de colchão.",
      ctaId: "cta-servico-colchao",
      dataLocal: "servico_colchao",
    },
    {
      id: "impermeabilizacao",
      title: "Impermeabilização de Estofados",
      image: "/img/impermeabilizacao-real.jpg",
      objectPosition: "object-[center_55%]",
      waText: "Olá! Gostaria de um orçamento para impermeabilização de estofados.",
      ctaId: "cta-servico-imper",
      dataLocal: "servico_imper",
    },
  ];

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-white border-b border-[#E3E8F0]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho no estilo Sofávix: Título à esquerda, Botão à direita */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[900] text-[#0B1B3D] tracking-tight leading-tight">
              Serviços em domicílio, feitos sob medida para você
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#475569]">
              Higienização e impermeabilização profissional, direto na sua casa, em toda a Grande Vitória.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={getWhatsAppUrl("Olá! Vi os serviços no site e gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-servicos-header"
              data-local="servicos_header"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0A6CFF] hover:bg-[#005FE6] text-white font-[800] text-sm tracking-wide shadow-md shadow-blue-500/20 active:scale-95 transition-all"
            >
              Pedir orçamento
            </a>
          </div>
        </div>

        {/* Grade de Cards com Fotos e Badge Inferior */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item) => (
            <a
              key={item.id}
              href={getWhatsAppUrl(item.waText)}
              target="_blank"
              rel="noopener noreferrer"
              id={item.ctaId}
              data-local={item.dataLocal}
              className="group relative rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block bg-slate-900 h-64 sm:h-72 border border-slate-100"
            >
              {/* Foto Real do Serviço */}
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                loading="lazy"
              />

              {/* Degradê sutil inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Badge Branco Inferior Flutuante com Ícone de Gota */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-white/95 backdrop-blur-xs rounded-[16px] px-4 py-3 shadow-md flex items-center gap-3 border border-slate-100 group-hover:bg-white transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#0A6CFF]/10 text-[#0A6CFF] flex items-center justify-center shrink-0">
                    <WaterDropIcon className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-[800] text-sm sm:text-[15px] text-[#0B1B3D] tracking-tight truncate">
                    {item.title}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

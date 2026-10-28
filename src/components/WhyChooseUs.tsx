import React from 'react';
import { ShieldCheck, Sparkles, Clock, CalendarCheck, Home, MapPin } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const items = [
    {
      icon: ShieldCheck,
      title: 'Produtos regulamentados',
      desc: 'Seguros para crianças e pets.',
    },
    {
      icon: Sparkles,
      title: 'Equipamentos profissionais',
      desc: 'Extração profunda, sem encharcar.',
    },
    {
      icon: Clock,
      title: 'Sofá limpo em até 2h',
      desc: 'Rápido, prático e eficiente.',
    },
    {
      icon: CalendarCheck,
      title: 'Pontualidade',
      desc: 'Atendimento com horário marcado no seu lar.',
    },
    {
      icon: Home,
      title: 'Cuidado com o ambiente',
      desc: 'Preservamos tudo durante o serviço.',
    },
  ];

  const cities = ['Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Viana'];

  return (
    <section id="por-que-escolher" className="py-14 sm:py-20 bg-[#0F172A] text-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-white tracking-[-0.02em]">
            Por que escolher a HigienizaLar?
          </h2>
          <p className="mt-2 text-slate-400 text-base sm:text-lg font-normal">
            Compromisso com pontualidade, excelência e cuidado total com sua casa.
          </p>
        </div>

        {/* 5 Itens em cards #18233B (1 coluna mobile, 3 colunas desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#18233B] rounded-[20px] p-6 border border-slate-700/60 shadow-md flex items-start gap-4 hover:border-blue-500/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-[14px] bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-[800] text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-slate-300 text-sm font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chips de Cidades Atendidas + Sede */}
        <div className="bg-[#18233B]/80 rounded-[22px] p-6 sm:p-8 border border-slate-700/60 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-wider font-[800] text-blue-400 mb-3">
            Área de Atendimento a Domicílio
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
            {cities.map((city, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 text-xs sm:text-sm font-bold"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{city}</span>
              </span>
            ))}
          </div>
          <p className="text-slate-400 text-xs sm:text-sm font-medium">
            Sede: Jardim Camburi, Vitória/ES
          </p>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Users, ShieldCheck, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

export const ExcellenceSection: React.FC = () => {
  const points = [
    {
      icon: Users,
      text: "Equipe especializada, reconhecida pela competência e pelo atendimento atencioso.",
    },
    {
      icon: ShieldCheck,
      text: "Produtos biodegradáveis de alta qualidade, liberados pela Anvisa.",
    },
    {
      icon: Sparkles,
      text: "Equipamentos modernos que aplicam os produtos com segurança.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#EBF3FE] border-b border-[#E3E8F0]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lado Esquerdo: Textos e Itens */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#0B1B3D] tracking-tight">
              Cuidado em cada etapa
            </h2>

            <div className="space-y-4 pt-2">
              {points.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#0A6CFF] shadow-xs flex items-center justify-center shrink-0 border border-blue-100">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pt-1.5 font-medium">
                      {p.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppUrl("Olá! Quero tirar dúvidas sobre a excelência dos serviços da HigienizaLar.")}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-excelencia"
                data-local="excelencia"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0A60C8] hover:bg-[#0052b3] text-white font-[800] text-sm tracking-wide shadow-md active:scale-95 transition-all"
              >
                Falar com a HigienizaLar
              </a>
            </div>
          </div>

          {/* Lado Direito: Grade de 3 Fotos Exatas da Equipe e Processo */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="rounded-[20px] overflow-hidden shadow-md bg-slate-100 h-72 sm:h-88">
              <img
                src="/img/equipe-tecnico-higienizalar.jpg"
                alt="Profissional da equipe HigienizaLar uniformizado"
                className="w-full h-full object-cover object-[center_15%]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-[20px] overflow-hidden shadow-md bg-slate-100 h-[138px] sm:h-[168px]">
                <img
                  src="/img/equipe-extracao-balde.jpg"
                  alt="Extração de sujeira profunda com bocal extrator profissional"
                  className="w-full h-full object-cover object-[center_45%]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden shadow-md bg-slate-100 h-[138px] sm:h-[168px]">
                <img
                  src="/img/equipe-elevador-equipamentos.jpg"
                  alt="Equipamentos profissionais HigienizaLar prontos para atendimento residencial"
                  className="w-full h-full object-cover object-[center_60%]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

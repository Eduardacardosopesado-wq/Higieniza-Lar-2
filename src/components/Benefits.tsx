import React from 'react';
import { ShieldCheck, Wind, Sparkles, Droplets, Utensils, Feather } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      text: "Preserva o valor do seu móvel, em especial dos estofados de maior qualidade e design.",
    },
    {
      icon: Wind,
      text: "Remove alérgenos como ácaros e poeira, deixando o ambiente mais saudável.",
    },
    {
      icon: Sparkles,
      text: "Diminui a absorção de odores e mantém o estofado e a casa com cheiro de limpeza.",
    },
    {
      icon: Droplets,
      text: "Evita que vinho, café e refrigerante penetrem no tecido.",
    },
    {
      icon: Utensils,
      text: "Ajuda a proteger contra manchas de gordura, como óleo da pele e alimentos gordurosos.",
    },
    {
      icon: Feather,
      text: "Torna a limpeza do dia a dia mais fácil, com menos esforço para tirar sujeira e manchas superficiais.",
    },
  ];

  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-white border-b border-[#E3E8F0]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Cabeçalho */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#0B1B3D] tracking-tight">
          Um lar mais limpo, saudável e confortável
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#475569] max-w-xl mx-auto">
          O que a higienização e a impermeabilização HigienizaLar trazem para você:
        </p>

        {/* Grade 2x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-12 sm:mt-16 text-center">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="flex flex-col items-center">
                {/* Ícone azul em caixa estilizada */}
                <div className="w-12 h-12 rounded-xl border border-[#0A6CFF]/40 text-[#0A6CFF] flex items-center justify-center mb-4 bg-[#F0F6FF]">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-[280px]">
                  {b.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Botão de Orçamento */}
        <div className="mt-12 sm:mt-16">
          <a
            href={getWhatsAppUrl("Olá! Vi os benefícios no site e quero solicitar um orçamento com a HigienizaLar.")}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-beneficios"
            data-local="beneficios"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0A6CFF] hover:bg-[#005FE6] text-white font-[800] text-sm tracking-wide shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          >
            Pedir orçamento
          </a>
        </div>

      </div>
    </section>
  );
};

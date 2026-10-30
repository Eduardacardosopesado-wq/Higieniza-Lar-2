import React from 'react';
import { Phone, Calendar, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Phone,
      title: 'Chame a gente',
      desc: 'Envie uma mensagem no WhatsApp ou ligue e peça um orçamento feito para o seu estofado.',
    },
    {
      num: '02',
      icon: Calendar,
      title: 'Escolha o horário',
      desc: 'Defina o melhor dia e horário para a nossa equipe ir até o seu endereço.',
    },
    {
      num: '03',
      icon: Sparkles,
      title: 'Dia do serviço',
      desc: 'Nossa equipe chega no horário combinado e você acompanha cada etapa da higienização e da impermeabilização.',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-[#0A60C8] text-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Título Principal */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[900] text-white tracking-tight mb-14 sm:mb-20">
          Agendar é simples: veja como funciona
        </h2>

        {/* Grade de 3 Passos com números gigantes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16 text-center">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex flex-col items-center">
                
                {/* Número Gigante Estilizado */}
                <div className="text-[64px] sm:text-[76px] font-[900] text-white/20 select-none leading-none -mb-8 z-0">
                  {step.num}
                </div>

                {/* Card Branco com Cantos Arredondados */}
                <div className="relative z-10 w-full bg-white text-[#0B1B3D] rounded-[24px] p-6 sm:p-8 shadow-xl flex flex-col items-center min-h-[260px] justify-start">
                  {/* Ícone azul */}
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] flex items-center justify-center mb-4 text-[#0A60C8]">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-[800] text-[#0B1B3D] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Botão de Agendamento */}
        <div>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de agendar o meu atendimento com a HigienizaLar.")}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-como-funciona"
            data-local="como_funciona"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/90 hover:bg-white hover:text-[#0A60C8] text-white font-[800] text-sm sm:text-base tracking-wide transition-all shadow-md active:scale-95"
          >
            Quero agendar agora
          </a>
        </div>

      </div>
    </section>
  );
};

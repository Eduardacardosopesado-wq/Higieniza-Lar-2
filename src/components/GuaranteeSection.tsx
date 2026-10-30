import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E3E8F0]">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Selo Folhas Azuis + Box GARANTIA DE QUALIDADE */}
        <div className="flex flex-col items-center mb-8">
          {/* Duas Folhas em SVG */}
          <svg viewBox="0 0 48 48" className="w-14 h-14 -mb-2 fill-[#0A6CFF]" aria-hidden="true">
            <path d="M24 6c-2 8-8 14-16 16 8 2 14 8 16 16 2-8 8-14 16-16-8-2-14-8-16-16z" fill="#0A6CFF" opacity="0.85" />
            <path d="M24 10c0 7-6 12-13 14 7 2 13 7 13 14 0-7 6-12 13-14-7-2-13-7-13-14z" fill="#38BDF8" opacity="0.6" />
          </svg>

          {/* Borda arredondada azul */}
          <div className="border-2 border-[#0A6CFF] rounded-[22px] px-8 py-3.5 bg-white shadow-xs">
            <h2 className="text-xl sm:text-2xl font-[900] text-[#0A6CFF] tracking-wider uppercase">
              SATISFAÇÃO GARANTIDA
            </h2>
          </div>
        </div>

        {/* Textos da Garantia */}
        <div className="space-y-4 text-xs sm:text-sm md:text-base text-[#475569] leading-relaxed">
          <p>
            O seu resultado é a nossa prioridade. Se você sentir que a limpeza ou a impermeabilização do seu estofado precisa de algum ajuste, a equipe HigienizaLar volta para fazer os retoques em até 7 dias após o primeiro serviço, sem custo adicional. E a impermeabilização conta com garantia, para você aproveitar o resultado com tranquilidade.
          </p>
        </div>

      </div>
    </section>
  );
};

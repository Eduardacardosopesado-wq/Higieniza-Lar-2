import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const WHATSAPP_URL = `https://wa.me/5527992479840?text=${encodeURIComponent("Olá! Vi o site e quero um orçamento grátis para limpeza do meu sofá.")}`;

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.62L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.64 13.5 14.47 13.46 14.31 13.71C14.15 13.96 13.68 14.51 13.53 14.68C13.39 14.85 13.25 14.87 13 14.75C12.75 14.62 11.96 14.36 11.02 13.52C10.28 12.87 9.79 12.06 9.64 11.81C9.5 11.56 9.63 11.43 9.75 11.31C9.86 11.2 10 11.04 10.13 10.9C10.25 10.75 10.29 10.65 10.37 10.48C10.45 10.32 10.41 10.17 10.35 10.05C10.29 9.92 9.82 8.77 9.63 8.3C9.44 7.84 9.25 7.9 9.11 7.89C8.98 7.89 8.82 7.89 8.66 7.89C8.5 7.89 8.23 7.95 8.01 8.19C7.79 8.43 7.16 9.02 7.16 10.23C7.16 11.44 8.04 12.6 8.16 12.77C8.29 12.93 9.89 15.4 12.35 16.46C12.94 16.71 13.39 16.86 13.75 16.97C14.34 17.16 14.88 17.13 15.3 17.07C15.77 17 16.75 16.48 16.96 15.9C17.16 15.31 17.16 14.81 17.1 14.71C17.04 14.6 16.81 14.52 16.56 14.39Z" />
  </svg>
);

export const FAQ: React.FC = () => {
  // As duas primeiras perguntas ficam abertas por padrão
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true,
  });

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqs = [
    {
      q: "Quanto tempo demora para o sofá secar?",
      a: "O serviço de higienização é concluído em até 2 horas. Como nossa extração é de alta potência, o estofado não fica encharcado: seca por completo em média de 4 a 8 horas, dependendo do tecido e da ventilação do local. [PREENCHER: tempo real de secagem de acordo com sua recomendação técnica].",
    },
    {
      q: "Quais as formas de pagamento?",
      a: "Aceitamos Pix, cartões de crédito e débito, e dinheiro. O pagamento é realizado somente após a conclusão do serviço e sua aprovação. [PREENCHER: condições e parcelamento].",
    },
    {
      q: "Como solicito um orçamento?",
      a: "Basta enviar uma mensagem no WhatsApp com uma foto ou descrição do seu sofá. Respondemos rapidamente.",
    },
    {
      q: "A impermeabilização altera a cor ou o toque do tecido?",
      a: "Não. O protetor cria uma película invisível fibra a fibra contra líquidos e manchas, sem alterar a cor original, a textura ou a maciez do tecido. [PREENCHER].",
    },
    {
      q: "Os produtos são seguros para crianças e pets?",
      a: "Sim. Usamos produtos regulamentados, liberados pela Anvisa, seguros para crianças e pets.",
    },
    {
      q: "Vocês atendem em quais cidades?",
      a: "Atendemos Vitória, Vila Velha, Serra, Cariacica e Viana.",
    },
  ];

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white border-b border-[#E3E8F0]">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#0F172A] tracking-[-0.02em]">
            Dúvidas frequentes
          </h2>
          <p className="mt-2 text-[#5B6475] text-base font-normal">
            Respostas diretas sobre nosso atendimento a domicílio.
          </p>
        </div>

        {/* Acordeão Acessível */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = !!openItems[idx];
            return (
              <div
                key={idx}
                className="rounded-[18px] border border-[#E3E8F0] overflow-hidden bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-[700] text-[#0F172A] text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-4 pt-1 text-[#5B6475] text-sm sm:text-base font-normal leading-relaxed border-t border-slate-100"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Verde */}
        <div className="max-w-[430px] mx-auto text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-faq"
            data-local="faq"
            className="w-full min-h-[60px] rounded-[16px] bg-[#22C55E] hover:bg-[#1eb354] active:scale-[0.99] text-white flex items-center justify-center gap-3 shadow-md shadow-emerald-600/20 transition-all font-[800] text-[18px] px-6 text-center"
            aria-label="Orçamento grátis no WhatsApp"
          >
            <WhatsAppIcon className="w-6 h-6 shrink-0" />
            <span>Orçamento grátis no WhatsApp</span>
          </a>
          <p className="mt-2 text-center text-[#5B6475] text-[12.5px] leading-snug">
            Resposta em minutos · Sem compromisso · Basta enviar uma foto
          </p>
        </div>

      </div>
    </section>
  );
};

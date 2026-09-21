import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Como solicito um orçamento?',
      a: 'Basta enviar uma mensagem no WhatsApp com uma foto ou descrição do seu estofado. Respondemos rapidamente.',
    },
    {
      q: 'Vocês atendem em quais cidades?',
      a: 'Atendemos toda a Grande Vitória: Vitória, Vila Velha, Serra, Cariacica e Viana com atendimento a domicílio.',
    },
    {
      q: 'Quanto tempo demora para o sofá secar após a higienização?',
      a: 'A secagem média é de poucas horas, variando conforme a ventilação e o clima do dia.',
    },
    {
      q: 'A impermeabilização altera a cor ou o toque do tecido?',
      a: 'Não. O produto é invisível e preserva integralmente a cor, maciez e textura do estofado.',
    },
    {
      q: 'Os produtos utilizados são seguros para crianças e pets?',
      a: 'Sim. Utilizamos apenas produtos profissionais e certificados, seguros para toda a sua família.',
    },
    {
      q: 'Quais as formas de pagamento aceitas?',
      a: 'Aceitamos Pix, cartões de crédito e débito.',
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Dúvidas Frequentes
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-slate-600 font-medium">
            Respostas diretas para as perguntas mais comuns.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg sm:text-xl text-slate-900 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-base sm:text-lg text-slate-600 font-normal leading-relaxed border-t border-slate-200/50 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help */}
        <div className="mt-10 text-center">
          <p className="text-slate-600 font-medium text-base mb-3">
            Ainda tem alguma dúvida?
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-50 text-blue-700 font-extrabold text-base border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>FALAR COM ESPECIALISTA NO WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
};

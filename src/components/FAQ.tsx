import React, { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({
    0: true,
  });

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqs = [
    {
      q: "Como funciona a impermeabilização do estofado?",
      a: "Aplicamos uma resina protetora que reveste as fibras do tecido individualmente. Isso cria uma camada protetora contra líquidos e sujeiras — como café, vinho e refrigerantes —, sem modificar o toque, a cor ou a maciez original do estofado.",
    },
    {
      q: "Como é feita a higienização?",
      a: "Realizamos a aplicação de produtos biodegradáveis liberados pela Anvisa para soltar as sujidades e microrganismos das fibras, seguida da extração mecânica por sucção de alta potência, retirando as impurezas sem encharcar o estofado.",
    },
    {
      q: "Quanto tempo dura cada serviço?",
      a: "Para sofás tradicionais e retráteis, o atendimento costuma durar entre 1h30 e 2 horas. A duração exata pode se alterar de acordo com as dimensões da peça e a quantidade de sujeira acumulada.",
    },
    {
      q: "Quanto custa higienizar e impermeabilizar?",
      a: "O investimento varia conforme as medidas, modelo e tipo de tecido do móvel. Basta mandar uma foto pelo WhatsApp para receber o orçamento exato em poucos minutos, sem compromisso.",
    },
    {
      q: "Preciso estar em casa durante o serviço?",
      a: "Basta que uma pessoa responsável recepcione os profissionais na chegada e aprove o resultado ao término. Nossa equipe trabalha com organização, discrição e cuidado com o seu espaço.",
    },
    {
      q: "A limpeza tira todas as manchas?",
      a: "Eliminamos a maior parte das manchas do cotidiano, como suor, alimentos, bebidas, poeira e urina. No caso de marcas muito antigas ou que tenham desbotado o tecido, nossa equipe faz uma análise prévia.",
    },
    {
      q: "Os produtos são seguros para crianças e pets?",
      a: "Sim! Trabalhamos apenas com produtos biodegradáveis liberados pela Anvisa, desenvolvidos para garantir a saúde e o bem-estar de crianças, idosos e animais de estimação no ambiente.",
    },
    {
      q: "Em quanto tempo o estofado seca?",
      a: "Com o poder de sucção das extratoras profissionais, o estofado não fica encharcado. O tempo de secagem total varia em média de 4 a 8 horas, conforme o fluxo de ar e a ventilação do local.",
    },
    {
      q: "Preciso preparar algo antes de vocês chegarem?",
      a: "Não precisa fazer nenhuma limpeza prévia. Apenas sugerimos afastar pequenos objetos ao redor do móvel para facilitar a movimentação da equipe e dos aparelhos.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-[#E3E8F0]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Coluna Esquerda: Título, ícone e botão de contato */}
          <div className="lg:col-span-5 text-left space-y-4 lg:sticky lg:top-28">
            <div className="w-12 h-12 rounded-full border border-[#0A6CFF]/40 text-[#0A6CFF] flex items-center justify-center bg-[#F0F6FF]">
              <HelpCircle className="w-6 h-6 stroke-[2]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[900] text-[#0B1B3D] tracking-tight">
              Perguntas frequentes
            </h2>

            <p className="text-sm sm:text-base text-[#475569]">
              Ficou com alguma dúvida?
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Olá! Tenho uma dúvida sobre a higienização de estofados.")}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-faq-contact"
                data-local="faq"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0A60C8] hover:bg-[#0052b3] text-white font-[800] text-sm tracking-wide shadow-md active:scale-95 transition-all"
              >
                Falar com a HigienizaLar
              </a>
            </div>
          </div>

          {/* Coluna Direita: Acordeão com fundo suave */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = !!openItems[idx];
              return (
                <div
                  key={idx}
                  className="rounded-[18px] bg-[#F4F8FD] border border-blue-50 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-[700] text-[#0B1B3D] text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-[#0A6CFF]">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-4 text-xs sm:text-sm text-[#475569] leading-relaxed pt-1">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

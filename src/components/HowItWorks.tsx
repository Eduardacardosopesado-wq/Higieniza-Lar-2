import React from 'react';
import { getWhatsAppUrl } from '../config/company';
import { MessageCircle, FileText, CalendarCheck2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: MessageCircle,
      title: 'CHAME NO WHATSAPP',
      desc: 'Envie uma foto ou descreva seu estofado.',
    },
    {
      num: '02',
      icon: FileText,
      title: 'RECEBA SEU ORÇAMENTO',
      desc: 'Valores e disponibilidade de forma rápida e sem compromisso.',
    },
    {
      num: '03',
      icon: CalendarCheck2,
      title: 'AGENDAMOS O SERVIÇO',
      desc: 'Atendimento pontual no conforto do seu lar.',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-white border-b border-slate-100 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Como Funciona
        </h2>
        <p className="mt-3 text-lg sm:text-xl text-slate-600 font-medium max-w-xl mx-auto">
          Prático, rápido e 100% pelo WhatsApp.
        </p>

        {/* 3 Steps */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-left relative flex flex-col justify-between shadow-sm hover:border-blue-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-blue-700">{st.num}</span>
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big CTA */}
        <div className="mt-12">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-9 py-5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-black text-lg shadow-xl shadow-blue-700/20 transition-all"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>SOLICITAR MEU ORÇAMENTO</span>
          </a>
        </div>

      </div>
    </section>
  );
};

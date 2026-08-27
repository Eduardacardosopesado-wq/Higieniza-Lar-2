import React from 'react';
import { Layers, Wind, Droplets, Droplet, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Layers,
      title: 'POEIRA E SUJEIRA',
      desc: 'Acúmulos nas fibras do estofado.',
    },
    {
      icon: Wind,
      title: 'ODORES',
      desc: 'Resíduos do uso diário.',
    },
    {
      icon: Droplets,
      title: 'MANCHAS',
      desc: 'Café, alimentos e outros resíduos.',
    },
    {
      icon: Droplet,
      title: 'LÍQUIDOS',
      desc: 'Sem proteção, o tecido absorve mais.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Grande */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Seu estofado acumula sujeira todos os dias.
        </h2>
        
        {/* Subtítulo Curto */}
        <p className="mt-3 text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
          A limpeza comum nem sempre alcança o que fica nas fibras.
        </p>

        {/* 4 Cards em 1 linha no desktop */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-blue-300 hover:bg-white transition-all duration-200"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                    {prob.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transição para a solução + CTA */}
        <div className="mt-14 pt-6 flex flex-col items-center">
          <p className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-6">
            A solução? <span className="text-blue-700">Higienização profissional.</span>
          </p>

          <a
            href={getWhatsAppUrl('Olá! Gostaria de solicitar um orçamento para higienização de estofados.')}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-solution-button"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-black text-lg sm:text-xl shadow-xl shadow-blue-700/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all text-center"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>QUERO HIGIENIZAR MEU ESTOFADO</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

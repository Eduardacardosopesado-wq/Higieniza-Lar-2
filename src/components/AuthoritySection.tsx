import React from 'react';
import { ShieldCheck, Sparkles, Clock, HeartHandshake } from 'lucide-react';

export const AuthoritySection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Produtos Regulamentados',
      desc: 'Segurança para crianças, pets e tecidos.',
    },
    {
      icon: Sparkles,
      title: 'Equipamentos Profissionais',
      desc: 'Extração por sucção profunda sem encharcar.',
    },
    {
      icon: Clock,
      title: 'Pontualidade e Praticidade',
      desc: 'Atendimento com horário marcado no seu lar.',
    },
    {
      icon: HeartHandshake,
      title: 'Cuidado e Respeito',
      desc: 'Preservação de todo o ambiente durante o serviço.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Cuidado Profissional para o seu Lar
        </h2>
        <p className="mt-3 text-lg sm:text-xl text-slate-600 font-medium max-w-xl mx-auto">
          Técnicas modernas e atenção aos detalhes em cada atendimento.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

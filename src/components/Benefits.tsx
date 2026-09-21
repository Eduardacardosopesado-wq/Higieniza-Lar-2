import React from 'react';
import { Check } from 'lucide-react';

export const Benefits: React.FC = () => {
  const list = [
    'Limpeza profissional e profunda',
    'Mais cuidado e durabilidade para seu estofado',
    'Proteção eficiente contra líquidos e manchas',
    'Atendimento em toda a Grande Vitória',
    'Orçamento rápido e sem compromisso pelo WhatsApp',
    'Produtos regulamentados e seguros para sua família',
  ];

  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Por que escolher a Higieniza Lar?
        </h2>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {list.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 font-bold">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-base sm:text-lg font-bold text-slate-100">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

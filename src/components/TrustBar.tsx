import React from 'react';
import { Sparkles, ShieldCheck, MapPin, MessageSquareText } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const items = [
    { icon: MapPin, title: 'Grande Vitória', desc: 'Atendimento a domicílio' },
    { icon: Sparkles, title: 'Limpeza Profissional', desc: 'Extração profunda' },
    { icon: ShieldCheck, title: 'Impermeabilização', desc: 'Proteção contra líquidos' },
    { icon: MessageSquareText, title: 'Orçamento Rápido', desc: 'Direto no WhatsApp' },
  ];

  return (
    <div className="bg-slate-900 text-white py-5 sm:py-8 border-y border-slate-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3.5 sm:gap-4 p-2 sm:p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left min-w-0">
                  <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white leading-snug">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

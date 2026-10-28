import React from 'react';
import { ShieldCheck, Clock, Star } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const items = [
    {
      icon: Star,
      text: "Google 5 estrelas",
    },
    {
      icon: ShieldCheck,
      text: "Produtos liberados pela Anvisa",
    },
    {
      icon: Clock,
      text: "Sofá limpo em até 2h",
    },
  ];

  return (
    <div className="bg-white border-b border-[#E3E8F0] py-4 sm:py-6">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-2 sm:gap-6 items-center">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center sm:text-left">
                <div className="w-[42px] h-[42px] rounded-[12px] bg-[#E0E9FF] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#2563EB]" />
                </div>
                <span className="text-[12px] sm:text-[15px] font-[700] text-[#0F172A] leading-tight text-center sm:text-left">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { getWhatsAppUrl } from '../config/company';
import { Sparkles, Shield, Sofa, Bed, Car, Utensils, MessageCircle } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Sofa,
      name: 'Higienização de Sofás',
      phrase: 'Limpeza profunda para renovar seu sofá.',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80',
      msg: 'Olá! Gostaria de um orçamento para Higienização de Sofá.',
    },
    {
      icon: Shield,
      name: 'Impermeabilização',
      phrase: 'Proteção contra líquidos e mais praticidade no dia a dia.',
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80',
      msg: 'Olá! Gostaria de um orçamento para Impermeabilização de Estofado.',
    },
    {
      icon: Bed,
      name: 'Higienização de Colchões',
      phrase: 'Remoção profunda de poeira, resíduos e odores.',
      img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=700&q=80',
      msg: 'Olá! Gostaria de um orçamento para Higienização de Colchão.',
    },
    {
      icon: Utensils,
      name: 'Cadeiras de Jantar',
      phrase: 'Higienização e remoção de manchas do uso diário.',
      img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=700&q=80',
      msg: 'Olá! Gostaria de um orçamento para Cadeiras de Jantar.',
    },
    {
      icon: Car,
      name: 'Estofados Automotivos',
      phrase: 'Limpeza completa de bancos e interiores.',
      img: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=700&q=80',
      msg: 'Olá! Gostaria de um orçamento para Higienização Automotiva.',
    },
    {
      icon: Sparkles,
      name: 'Poltronas e Tapetes',
      phrase: 'Cuidado especializado para seus tecidos.',
      img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80',
      msg: 'Olá! Gostaria de um orçamento para Poltronas e Tapetes.',
    },
  ];

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Nossos Serviços
        </h2>
        <p className="mt-3 text-lg sm:text-xl text-slate-600 font-medium max-w-xl mx-auto">
          Atendimento a domicílio em toda a Grande Vitória.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:border-blue-300 transition-colors flex flex-col text-left"
              >
                {/* Image */}
                <div className="h-52 w-full overflow-hidden relative bg-slate-900">
                  <img
                    src={srv.img}
                    alt={srv.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 shadow-md flex items-center justify-center text-blue-700">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950 mb-2">
                      {srv.name}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-6">
                      {srv.phrase}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href={getWhatsAppUrl(srv.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-blue-50 hover:bg-blue-700 text-blue-700 hover:text-white font-extrabold text-base transition-colors border border-blue-200 hover:border-blue-700"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>QUERO ORÇAMENTO</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

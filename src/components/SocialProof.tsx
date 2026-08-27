import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

export const SocialProof: React.FC = () => {
  const reviews = [
    {
      name: 'Mariana Silva',
      location: 'Jardim Camburi, Vitória',
      text: 'O sofá ficou impecável e com cheirinho maravilhoso. Atendimento super pontual!',
    },
    {
      name: 'Rodrigo Medeiros',
      location: 'Praia da Costa, Vila Velha',
      text: 'Fiz a higienização e impermeabilização. O café caiu e não manchou nada. Recomendo demais!',
    },
    {
      name: 'Camila Fernandes',
      location: 'Laranjeiras, Serra',
      text: 'Serviço rápido, profissional e preço justo. Fizeram o sofá e as cadeiras de jantar.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Quem Contrata, Recomenda
        </h2>
        <p className="mt-3 text-lg sm:text-xl text-slate-600 font-medium max-w-xl mx-auto">
          Avaliações reais de clientes da Grande Vitória.
        </p>

        {/* 3 Review Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-lg text-slate-800 font-medium leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div>
                <p className="text-base font-extrabold text-slate-950">{rev.name}</p>
                <p className="text-xs text-slate-500 font-medium">{rev.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={getWhatsAppUrl('Olá! Gostaria de agendar meu atendimento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-black text-base sm:text-lg shadow-lg shadow-blue-700/20 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>AGENDAR MEU ATENDIMENTO</span>
          </a>
        </div>

      </div>
    </section>
  );
};

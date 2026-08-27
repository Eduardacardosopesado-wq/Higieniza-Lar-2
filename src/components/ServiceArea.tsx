import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

export const ServiceArea: React.FC = () => {
  const cities = ['Vitória', 'Vila Velha', 'Serra', 'Cariacica', 'Viana'];

  return (
    <section id="area-atendimento" className="py-16 sm:py-24 bg-white border-b border-slate-100 text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 font-bold text-sm mb-4">
          <MapPin className="w-4 h-4 text-blue-700" />
          <span>Sede: Jardim Camburi, Vitória — ES</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Atendemos Toda a Grande Vitória
        </h2>

        <p className="mt-3 text-lg sm:text-xl text-slate-600 font-medium max-w-xl mx-auto">
          Levamos nossa equipe e equipamentos até a sua residência ou empresa.
        </p>

        {/* City Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className="px-6 py-3.5 rounded-2xl bg-slate-50 border-2 border-slate-200 text-slate-900 font-extrabold text-lg sm:text-xl hover:border-blue-600 hover:text-blue-700 transition-colors shadow-sm"
            >
              📍 {city}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href={getWhatsAppUrl('Olá! Gostaria de saber se vocês atendem no meu bairro/cidade.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base sm:text-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current text-green-400" />
            <span>CONSULTAR MEU BAIRRO</span>
          </a>
        </div>

      </div>
    </section>
  );
};

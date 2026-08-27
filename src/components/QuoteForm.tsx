import React, { useState } from 'react';
import { COMPANY, getWhatsAppUrl } from '../config/company';
import { MessageCircle, Send, Check } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [service, setService] = useState('Higienização de Sofá');
  const [city, setCity] = useState('Vitória');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${name || 'Cliente'}. Gostaria de um orçamento para *${service}* em *${city}*.`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="orcamento" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 text-center">
          
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-900 font-bold text-xs uppercase tracking-wider mb-3">
            Atendimento Rápido
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Solicite seu Orçamento
          </h2>
          
          <p className="mt-2 text-base sm:text-lg text-slate-600 font-medium max-w-lg mx-auto">
            Preencha 3 dados rápidos para iniciar no WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5 text-left">
            {/* Nome */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-1.5">
                Seu Nome:
              </label>
              <input
                type="text"
                placeholder="Ex: Ana Paula"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-700 focus:outline-none text-base font-medium text-slate-900 bg-slate-50"
                required
              />
            </div>

            {/* Serviço */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-1.5">
                Serviço Desejado:
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-700 focus:outline-none text-base font-medium text-slate-900 bg-slate-50"
              >
                <option value="Higienização de Sofá">Higienização de Sofá</option>
                <option value="Impermeabilização de Sofá">Impermeabilização de Sofá</option>
                <option value="Pacote Completo: Higienização + Impermeabilização">Pacote: Higienização + Impermeabilização</option>
                <option value="Higienização de Colchão">Higienização de Colchão</option>
                <option value="Higienização de Cadeiras de Jantar">Cadeiras de Jantar</option>
                <option value="Higienização Automotiva">Estofados Automotivos</option>
                <option value="Outro Serviço">Outro Serviço</option>
              </select>
            </div>

            {/* Cidade */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-1.5">
                Sua Cidade na Grande Vitória:
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-700 focus:outline-none text-base font-medium text-slate-900 bg-slate-50"
              >
                <option value="Vitória (Jardim Camburi / Outros)">Vitória</option>
                <option value="Vila Velha">Vila Velha</option>
                <option value="Serra">Serra</option>
                <option value="Cariacica">Cariacica</option>
                <option value="Viana">Viana</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 py-5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-black text-lg shadow-xl shadow-blue-700/25 transition-all cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>CHAMAR NO WHATSAPP</span>
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};

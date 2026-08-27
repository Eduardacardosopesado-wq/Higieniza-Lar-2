import React from 'react';
import { Logo } from './Logo';
import { COMPANY, getWhatsAppUrl } from '../config/company';
import { MapPin, Phone, Instagram, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Higienização', href: '#higienizacao' },
    { name: 'Impermeabilização', href: '#impermeabilizacao' },
    { name: 'Antes e Depois', href: '#antes-e-depois' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Área de Atendimento', href: '#area-atendimento' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato & Orçamento', href: '#orcamento' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 md:pb-16 border-t border-slate-800" id="contato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800 text-left">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Higienização e impermeabilização profissional de sofás, colchões, poltronas e estofados residenciais e comerciais.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <a
                href={COMPANY.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram da Higieniza Lar"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp da Higieniza Lar"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Navegação
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Atendimento Oficial
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block">Unidade:</strong>
                  {COMPANY.UNIT}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block">Área de Atendimento:</strong>
                  {COMPANY.SERVICE_AREA}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block">WhatsApp:</strong>
                  <a
                    href={COMPANY.WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-semibold"
                  >
                    {COMPANY.PHONE_FORMATTED}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block">Instagram:</strong>
                  <a
                    href={COMPANY.INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {COMPANY.INSTAGRAM_HANDLE}
                  </a>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Higieniza Lar. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Jardim Camburi, Vitória — ES</span>
            <button
              onClick={scrollToTop}
              className="hover:text-slate-300 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

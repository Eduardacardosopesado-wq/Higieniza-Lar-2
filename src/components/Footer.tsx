import React from 'react';
import { Logo } from './Logo';
import { Phone, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050A16] text-[#5B6475] py-12 sm:py-16 border-t border-slate-900 text-center">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Logo Original */}
        <div className="flex justify-center">
          <a href="#inicio" aria-label="HigienizaLar - Voltar ao início">
            <Logo size="footer" />
          </a>
        </div>

        {/* Descrição */}
        <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
          Higienização e impermeabilização profissional de sofás, colchões, poltronas e estofados residenciais e comerciais.
        </p>

        {/* Links Âncora */}
        <nav className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-300">
          <a href="#servicos" className="hover:text-white transition-colors">
            Serviços
          </a>
          <a href="#como-funciona" className="hover:text-white transition-colors">
            Como funciona
          </a>
          <a href="#avaliacoes" className="hover:text-white transition-colors">
            Avaliações
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* Contato & Redes */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
          <a
            href="tel:+5527992479840"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>(27) 99247-9840</span>
          </a>
          <span>·</span>
          <a
            href="https://www.instagram.com/higienizalarvix/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-slate-400"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>@higienizalarvix</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-900 text-[11px] sm:text-xs text-slate-500">
          <p>© 2026 HigienizaLar. Todos os direitos reservados. Jardim Camburi, Vitória — ES.</p>
        </div>

      </div>
    </footer>
  );
};

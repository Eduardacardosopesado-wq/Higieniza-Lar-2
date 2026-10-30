import React, { useState, useRef, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY, getWhatsAppUrl } from '../config/company';
import { 
  MessageCircle, 
  Menu, 
  X, 
  MapPin, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  Layers,
  ArrowRight
} from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const serviceSubItems = [
    {
      name: 'Higienização de Estofados',
      desc: 'Limpeza profunda com máquina extratora',
      href: '#higienizacao',
      icon: Sparkles,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      name: 'Impermeabilização de Estofados',
      desc: 'Proteção contra líquidos e manchas',
      href: '#impermeabilizacao',
      icon: ShieldCheck,
      color: 'text-cyan-600 bg-cyan-50',
    },
    {
      name: 'Higienização + Impermeabilização',
      desc: 'Pacote completo: Limpe, renove e proteja',
      href: '#oferta-combinada',
      icon: Layers,
      color: 'text-indigo-600 bg-indigo-50',
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] w-full" id="header">
      {/* Main Navigation Bar - 100% clean white background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-20 lg:h-22 flex items-center justify-between">
        
        {/* Left: Large Prominent Brand Logo */}
        <div className="flex-shrink-0">
          <a href="#inicio" className="block focus:outline-none py-1" aria-label="Higieniza Lar - Ir para o início">
            <Logo size="header" />
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-[15px] font-semibold text-slate-700 whitespace-nowrap" aria-label="Menu Principal">
          
          {/* Link 1: Serviços */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#servicos"
              onClick={() => setServicesDropdownOpen(false)}
              className="inline-flex items-center gap-1.5 py-2 hover:text-[#0A6CFF] transition-colors"
            >
              <span>Serviços</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Link 2: Como Funciona */}
          <a
            href="#como-funciona"
            className="hover:text-[#0A6CFF] transition-colors py-2"
          >
            Como funciona
          </a>

          {/* Link 3: Benefícios */}
          <a
            href="#beneficios"
            className="hover:text-[#0A6CFF] transition-colors py-2"
          >
            Benefícios
          </a>

          {/* Link 4: Quem somos */}
          <a
            href="#sobre"
            className="hover:text-[#0A6CFF] transition-colors py-2"
          >
            Quem somos
          </a>

          {/* Link 5: FAQ */}
          <a
            href="#faq"
            className="hover:text-[#0A6CFF] transition-colors py-2"
          >
            FAQ
          </a>

        </nav>

        {/* Right: High Prominence Desktop CTA Button */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-button"
            data-local="header"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0A6CFF] hover:bg-[#005FE6] text-white font-extrabold text-sm tracking-wide shadow-md shadow-blue-500/20 whitespace-nowrap transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>SOLICITAR ORÇAMENTO</span>
          </a>
        </div>

        {/* Mobile controls: WhatsApp Icon Button + Menu Hambúrguer (Idêntico à referência mobile) */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-2.5">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            data-local="header"
            className="w-10 h-10 rounded-xl bg-[#00C853] hover:bg-[#00B048] flex items-center justify-center text-white shadow-sm active:scale-95 transition-all"
            aria-label="Falar pelo WhatsApp"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5 fill-white" 
              aria-hidden="true"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.62L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.64 13.5 14.47 13.46 14.31 13.71C14.15 13.96 13.68 14.51 13.53 14.68C13.39 14.85 13.25 14.87 13 14.75C12.75 14.62 11.96 14.36 11.02 13.52C10.28 12.87 9.79 12.06 9.64 11.81C9.5 11.56 9.63 11.43 9.75 11.31C9.86 11.2 10 11.04 10.13 10.9C10.25 10.75 10.29 10.65 10.37 10.48C10.45 10.32 10.41 10.17 10.35 10.05C10.29 9.92 9.82 8.77 9.63 8.3C9.44 7.84 9.25 7.9 9.11 7.89C8.98 7.89 8.82 7.89 8.66 7.89C8.5 7.89 8.23 7.95 8.01 8.19C7.79 8.43 7.16 9.02 7.16 10.23C7.16 11.44 8.04 12.6 8.16 12.77C8.29 12.93 9.89 15.4 12.35 16.46C12.94 16.71 13.39 16.86 13.75 16.97C14.34 17.16 14.88 17.13 15.3 17.07C15.77 17 16.75 16.48 16.96 15.9C17.16 15.31 17.16 14.81 17.1 14.71C17.04 14.6 16.81 14.52 16.56 14.39Z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-800 hover:text-blue-600 focus:outline-none transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
          </button>
        </div>

      </div>

      {/* 3. Mobile Vertical Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-8 space-y-4 shadow-2xl">
          
          <nav className="flex flex-col space-y-1 text-base font-semibold text-slate-800">
            {/* Serviços */}
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-50"
            >
              Serviços
            </a>

            {/* Como Funciona */}
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-50"
            >
              Como funciona
            </a>

            {/* Benefícios */}
            <a
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-50"
            >
              Benefícios
            </a>

            {/* Quem somos */}
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-50"
            >
              Quem somos
            </a>

            {/* FAQ */}
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Mobile Full Width */}
          <div className="pt-3 border-t border-slate-100">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-base text-center shadow-lg shadow-blue-700/25"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>SOLICITAR ORÇAMENTO</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
};

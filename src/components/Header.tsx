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
      desc: 'Limpeza profunda por extração e sucção',
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
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)]" id="header">
      {/* 1. Top micro bar — discreet & compact */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 text-center sm:text-left">
          
          {/* Left: Location */}
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>
              Unidade em <strong className="text-white font-semibold">Jardim Camburi, Vitória — ES</strong>
              <span className="hidden md:inline text-slate-500 mx-2">|</span>
              <span className="hidden md:inline">Atendimento em toda a Grande Vitória</span>
            </span>
          </div>

          {/* Right: Instagram & WhatsApp */}
          <div className="flex items-center gap-3 text-slate-300">
            <a 
              href={COMPANY.INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {COMPANY.INSTAGRAM_HANDLE}
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={COMPANY.WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-green-400 text-slate-200 font-semibold transition-colors flex items-center gap-1"
            >
              <span>WhatsApp:</span>
              <span className="text-white">{COMPANY.PHONE_FORMATTED}</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Left: Large Prominent Brand Logo */}
        <div className="flex-shrink-0">
          <a href="#inicio" className="block focus:outline-none py-1" aria-label="Higieniza Lar - Ir para o início">
            <Logo size="header" />
          </a>
        </div>

        {/* Center: Desktop Navigation (Single line, spacious, elegant) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[15px] font-semibold text-slate-700 whitespace-nowrap" aria-label="Menu Principal">
          
          {/* Link 1: Início */}
          <a
            href="#inicio"
            className="hover:text-blue-700 transition-colors py-2"
          >
            Início
          </a>

          {/* Link 2: Serviços with Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1.5 py-2 hover:text-blue-700 transition-colors cursor-pointer ${
                servicesDropdownOpen ? 'text-blue-700' : ''
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              <span>Serviços</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-blue-700' : 'text-slate-400'}`} />
            </button>

            {/* Dropdown Menu Box */}
            {servicesDropdownOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2.5 space-y-1.5 transition-all animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                {serviceSubItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors flex items-center justify-between">
                          <span>{item.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-blue-700" />
                        </p>
                        <p className="text-xs text-slate-500 font-normal mt-0.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </a>
                  );
                })}

                <div className="pt-2 border-t border-slate-100 mt-1 px-1">
                  <a
                    href="#servicos"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block text-center py-2 text-xs font-bold text-blue-700 hover:text-blue-800 hover:underline"
                  >
                    Ver todos os serviços →
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Link 3: Antes e Depois */}
          <a
            href="#antes-e-depois"
            className="hover:text-blue-700 transition-colors py-2"
          >
            Antes e Depois
          </a>

          {/* Link 4: Como Funciona */}
          <a
            href="#como-funciona"
            className="hover:text-blue-700 transition-colors py-2"
          >
            Como Funciona
          </a>

          {/* Link 5: FAQ */}
          <a
            href="#faq"
            className="hover:text-blue-700 transition-colors py-2"
          >
            FAQ
          </a>

        </nav>

        {/* Right: High Prominence CTA Button */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-button"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-blue-700/20 hover:shadow-xl hover:-translate-y-0.5 transition-all whitespace-nowrap active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>SOLICITAR ORÇAMENTO</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200"
            aria-label="Falar pelo WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none border border-slate-200"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* 3. Mobile Vertical Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-8 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
          
          <nav className="flex flex-col space-y-1 text-base font-semibold text-slate-800">
            {/* Início */}
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-50"
            >
              Início
            </a>

            {/* Serviços (Grouped) */}
            <div className="py-2 px-3 rounded-xl bg-slate-50/80 border border-slate-100">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-left font-bold text-slate-900 py-1"
              >
                <span>Serviços</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 pl-2 space-y-2 pt-2 border-t border-slate-200/60 text-sm font-medium">
                  {serviceSubItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-slate-600 hover:text-blue-700"
                    >
                      • {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Antes e Depois */}
            <a
              href="#antes-e-depois"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-50"
            >
              Antes e Depois
            </a>

            {/* Como Funciona */}
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-50"
            >
              Como Funciona
            </a>

            {/* FAQ */}
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-50"
            >
              FAQ
            </a>

            {/* Área de Atendimento */}
            <a
              href="#area-atendimento"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors border-b border-slate-50"
            >
              Área de Atendimento
            </a>

            {/* Benefícios */}
            <a
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              Benefícios
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

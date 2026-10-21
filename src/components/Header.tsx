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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Left: Large Prominent Brand Logo */}
        <div className="flex-shrink-0">
          <a href="#inicio" className="block focus:outline-none py-1" aria-label="Higieniza Lar - Ir para o início">
            <Logo size="header" />
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[15px] font-semibold text-slate-700 whitespace-nowrap" aria-label="Menu Principal">
          
          {/* Link 1: Início (Active with blue underline) */}
          <a
            href="#inicio"
            className="text-[#0A6CFF] font-bold py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#0A6CFF] after:rounded-full transition-colors"
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
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2.5 space-y-1.5 z-50"
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
                          <ArrowRight className="w-3.5 h-3.5 text-blue-700" />
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

        {/* Right: High Prominence Desktop CTA Button */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-button"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0A6CFF] hover:bg-[#005FE6] text-white font-extrabold text-sm tracking-wide shadow-md shadow-blue-500/20 whitespace-nowrap transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>SOLICITAR ORÇAMENTO</span>
          </a>
        </div>

        {/* Mobile controls: BOTÃO SOLICITAR ORÇAMENTO + MENU HAMBÚRGUER (Idêntico à referência mobile) */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0A6CFF] hover:bg-[#005FE6] text-white font-extrabold text-[10.5px] sm:text-xs tracking-wide shadow-sm shadow-blue-500/25 uppercase whitespace-nowrap active:scale-95 transition-all"
            aria-label="Solicitar orçamento pelo WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
            <span>SOLICITAR ORÇAMENTO</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-800 hover:text-blue-600 focus:outline-none transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
          </button>
        </div>

      </div>

      {/* 3. Mobile Vertical Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-8 space-y-4 shadow-2xl">
          
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

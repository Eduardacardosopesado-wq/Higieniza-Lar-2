import React from 'react';
import { Logo } from './Logo';
import { getWhatsAppUrl } from '../config/company';
import { MessageCircle, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-b from-slate-50 via-blue-50/25 to-white pt-8 pb-16 md:pt-12 md:pb-24 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Big Headline, Clear Hierarchy & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Logo & Location Pill */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Logo size="hero" className="shrink-0" />
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-950 text-xs sm:text-sm font-black tracking-wide uppercase">
                <MapPin className="w-4 h-4 text-blue-700 shrink-0" />
                <span>JARDIM CAMBURI — VITÓRIA/ES</span>
              </div>
            </div>

            {/* Big H1 Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Seu sofá limpo, <br />
              <span className="text-blue-700">renovado</span> e <span className="text-blue-900">protegido</span>.
            </h1>

            {/* Subheadline: Short, commercial & clear */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-semibold leading-snug max-w-xl">
              Higienização e impermeabilização de estofados em Jardim Camburi e toda a Grande Vitória.
            </p>

            {/* 3 Core Differentials */}
            <div className="space-y-2.5 pt-1 text-base sm:text-lg text-slate-800 font-bold">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0" />
                <span>Higienização profissional</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0" />
                <span>Impermeabilização de estofados</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0" />
                <span>Atendimento em toda a Grande Vitória</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA */}
              <a
                href={getWhatsAppUrl('Olá! Gostaria de solicitar um orçamento para higienização de estofados.')}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-black text-lg sm:text-xl shadow-xl shadow-blue-700/25 transition-colors text-center whitespace-nowrap"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>SOLICITAR ORÇAMENTO</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#antes-e-depois"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 border-2 border-slate-200 font-bold text-base sm:text-lg transition-colors text-center whitespace-nowrap"
              >
                <span>VER ANTES E DEPOIS</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: High Impact Photo Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                alt="Profissional realizando higienização de sofá com equipamento extrator"
                width="1000"
                height="750"
                fetchPriority="high"
                className="w-full h-80 sm:h-[460px] object-cover"
              />
              
              {/* Simple Clean Badge on Image */}
              <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-sm text-white px-4 py-2 rounded-xl border border-white/10 shadow-lg">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-400">
                  HIGIENIZAÇÃO PROFISSIONAL
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

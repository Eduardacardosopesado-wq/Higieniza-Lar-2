import React from 'react';
import { getWhatsAppUrl } from '../config/company';
import { ShieldCheck, Heart, MapPin, ChevronRight, Star, Sparkles } from 'lucide-react';

// Google 4-color "G" Icon matching the reference image card
const GoogleGIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.13C3.25 21.31 7.31 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.27C.46 8.2.005 10.04.005 12s.455 3.8 1.265 5.42l4.01-3.13z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.69 1.27 6.58l4.01 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
    />
  </svg>
);

// Outline 2-seat sofa icon matching the visual reference
const SofaOutlineIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-hidden="true"
  >
    <path d="M4 11V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4" />
    <path d="M3 13a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z" />
    <path d="M6 19v2" />
    <path d="M18 19v2" />
    <path d="M4 11a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2" />
    <path d="M20 11a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2" />
  </svg>
);

// Mattress / Bed outline icon
const MattressIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-hidden="true"
  >
    <path d="M2 17h20" />
    <path d="M4 17V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9" />
    <path d="M7 11h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1z" />
    <path d="M14 11h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1z" />
    <path d="M4 17v4" />
    <path d="M20 17v4" />
  </svg>
);

// Chair outline icon
const ChairIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-hidden="true"
  >
    <path d="M6 3h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M4 13h16v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3z" />
    <path d="M6 17v5" />
    <path d="M18 17v5" />
  </svg>
);

// Armchair outline icon
const ArmchairOutlineIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-hidden="true"
  >
    <path d="M6 19v2" />
    <path d="M18 19v2" />
    <path d="M5 11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2z" />
    <path d="M4 13a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4z" />
    <path d="M3 13v3a2 2 0 0 0 2 2h1" />
    <path d="M21 13v3a2 2 0 0 1-2 2h-1" />
    <path d="M7 9V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="relative bg-[#F8FAFF] overflow-hidden w-full flex flex-col justify-center min-[769px]:min-h-[750px] lg:min-h-[790px] xl:min-h-[820px]"
    >
      {/* ========================================================================= */}
      {/* 1. VERSÃO MOBILE (< 769px) - EXATAMENTE IDÊNTICA AO MOCKUP DA REFERÊNCIA  */}
      {/* ========================================================================= */}
      <div className="block min-[769px]:hidden w-full px-5 pt-5 pb-8 space-y-4 text-left">
        
        {/* 1. Localização */}
        <div className="flex justify-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3FE] border border-[#BFDBFE] text-[#0A6CFF] text-[11px] font-bold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#0A6CFF] shrink-0" />
            <span>JARDIM CAMBURI • VITÓRIA/ES</span>
          </div>
        </div>

        {/* 2. Título (H1) */}
        <h1 className="text-[25px] xs:text-[28px] sm:text-[32px] font-black tracking-tight leading-[1.15] font-['Poppins',sans-serif] text-left">
          <span className="text-[#08152F] block">Limpeza e impermeabilização</span>
          <span className="text-[#0A6CFF] block">de sofá na Grande Vitória</span>
        </h1>

        {/* 3. Subtítulo */}
        <p className="text-[14px] xs:text-[15px] sm:text-[16px] text-[#475569] font-medium leading-relaxed text-left">
          Produtos liberados pela Anvisa, seguros para crianças e pets.
        </p>


        {/* 6. Card Avaliação Google */}
        <div className="w-full bg-white rounded-2xl py-3 px-4 flex items-center justify-between border border-slate-200/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3">
            <GoogleGIcon className="w-7 h-7 shrink-0" />
            <div className="flex items-center gap-1 shrink-0" aria-label="5 estrelas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
          </div>
          <div className="flex flex-col text-left pl-2">
            <span className="text-[12.5px] font-bold text-[#08152F] leading-tight">
              5 estrelas no Google
            </span>
            <span className="text-[11px] text-[#64748B] font-medium leading-tight">
              +1.000 famílias satisfeitas
            </span>
          </div>
        </div>

        {/* 7. Botão Primário WhatsApp */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          id="hero-mobile-primary-cta"
          className="w-full py-3.5 px-4 rounded-2xl bg-[#00C853] hover:bg-[#00B348] text-white flex items-center justify-between shadow-lg shadow-emerald-500/25 active:scale-[0.99] transition-all"
          aria-label="Solicitar orçamento pelo WhatsApp"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
            <svg 
              viewBox="0 0 24 24" 
              width="20" 
              height="20" 
              fill="#00C853" 
              className="w-5 h-5 shrink-0" 
              aria-hidden="true"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.62L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.64 13.5 14.47 13.46 14.31 13.71C14.15 13.96 13.68 14.51 13.53 14.68C13.39 14.85 13.25 14.87 13 14.75C12.75 14.62 11.96 14.36 11.02 13.52C10.28 12.87 9.79 12.06 9.64 11.81C9.5 11.56 9.63 11.43 9.75 11.31C9.86 11.2 10 11.04 10.13 10.9C10.25 10.75 10.29 10.65 10.37 10.48C10.45 10.32 10.41 10.17 10.35 10.05C10.29 9.92 9.82 8.77 9.63 8.3C9.44 7.84 9.25 7.9 9.11 7.89C8.98 7.89 8.82 7.89 8.66 7.89C8.5 7.89 8.23 7.95 8.01 8.19C7.79 8.43 7.16 9.02 7.16 10.23C7.16 11.44 8.04 12.6 8.16 12.77C8.29 12.93 9.89 15.4 12.35 16.46C12.94 16.71 13.39 16.86 13.75 16.97C14.34 17.16 14.88 17.13 15.3 17.07C15.77 17 16.75 16.48 16.96 15.9C17.16 15.31 17.16 14.81 17.1 14.71C17.04 14.6 16.81 14.52 16.56 14.39Z" />
            </svg>
          </div>
          <div className="flex flex-col text-left pl-3 flex-1">
            <span className="text-[13px] font-black uppercase tracking-wider text-white leading-tight">
              SOLICITAR ORÇAMENTO
            </span>
            <span className="text-[13px] font-black uppercase tracking-wider text-white leading-tight">
              PELO WHATSAPP
            </span>
          </div>
          <ChevronRight className="w-6 h-6 stroke-[3] text-white shrink-0" />
        </a>

        {/* 8. Botão Secundário Branco */}
        <a
          href="#antes-e-depois"
          id="hero-mobile-secondary"
          className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-blue-50/60 border-2 border-[#0A6CFF] text-[#0A6CFF] font-bold text-[13px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-2xs active:scale-[0.99] transition-all text-center"
        >
          <span>VER ANTES E DEPOIS</span>
          <ChevronRight className="w-4 h-4 stroke-[3] text-[#0A6CFF]" />
        </a>

        {/* 9. Fotografia Real do Sofá (Antes e Depois) no Rodapé da Hero */}
        <div className="pt-2">
          <div className="relative w-full h-[250px] xs:h-[280px] sm:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-100 select-none">
            <img 
              src="/assets/aistudio/Sof__Metade_Sujo__Metade_Limpo_aeefb401.png"
              alt="Antes e depois real do sofá higienizado pela Higieniza Lar"
              className="w-full h-full object-cover object-[center_36%]"
              loading="eager"
              fetchPriority="high"
            />

            {/* Etiqueta ANTES */}
            <div className="absolute bottom-3 left-4 bg-[#1E232D]/90 backdrop-blur-xs text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider pointer-events-none z-20 border border-white/10">
              ANTES
            </div>

            {/* Etiqueta DEPOIS */}
            <div className="absolute bottom-3 right-4 bg-[#0A6CFF] text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-md shadow-blue-500/30 uppercase tracking-wider pointer-events-none z-20 border border-white/20">
              DEPOIS
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. VERSÃO DESKTOP (>= 769px) - EXATAMENTE IDÊNTICA À IMAGEM DE REFERÊNCIA */}
      {/* ========================================================================= */}
      <div className="hidden min-[769px]:flex items-center relative w-full pt-10 lg:pt-14 pb-20 lg:pb-24">
        
        {/* CONTEÚDO PRINCIPAL (Coluna Esquerda) */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full">
          <div className="w-full max-w-[440px] lg:max-w-[480px] xl:max-w-[510px] text-left space-y-5 lg:space-y-6">

            {/* 1. Selo de Localização */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FE] border border-[#CDE1FD] text-[#0A6CFF] text-[11.5px] font-bold tracking-wider uppercase shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#0A6CFF] shrink-0" />
                <span>JARDIM CAMBURI • GRANDE VITÓRIA/ES</span>
              </div>
            </div>

            {/* 2. Título Principal em Duas Linhas */}
            <h1 className="text-3xl lg:text-[2.75rem] xl:text-[3.15rem] font-black tracking-tight leading-[1.14] font-['Poppins',sans-serif]">
              <span className="text-[#08152F] block">Limpeza e impermeabilização</span>
              <span className="text-[#1677FF] block">de sofá na Grande Vitória</span>
            </h1>

            {/* 3. Subtítulo Descritivo */}
            <p className="text-[16px] lg:text-[17.5px] text-[#475569] font-medium leading-relaxed">
              Produtos liberados pela Anvisa, seguros para crianças e pets.
            </p>

            {/* 4. Card Social Proof Oficial Google (Idêntico à referência) */}
            <div>
              <div className="inline-flex items-center gap-3 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(11,31,77,0.06)] px-4 py-3 w-full max-w-[430px]">
                <GoogleGIcon className="w-8 h-8 shrink-0" />
                <div className="flex items-center gap-1 shrink-0" aria-label="5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <div className="flex flex-col text-left pl-1">
                  <span className="text-[12px] font-semibold text-slate-600 leading-tight">5 estrelas no Google</span>
                  <span className="text-[14px] font-black text-[#0B1F4D] leading-tight">+ 1.000 famílias satisfeitas</span>
                  <span className="text-[10.5px] text-slate-400 font-medium leading-tight">Confiança e qualidade comprovadas.</span>
                </div>
              </div>
            </div>

            {/* 5. Três Diferenciais com Ícones Circulares e Divisórias */}
            <div className="pt-0.5 pb-0.5">
              <div className="flex items-center gap-2 lg:gap-3 max-w-[430px]">
                {/* Diferencial 1 */}
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="w-8.5 h-8.5 rounded-full bg-[#EBF3FE] flex items-center justify-center text-[#1677FF] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11.5px] font-bold text-[#08152F] leading-tight">
                    Produtos liberados<br />pela Anvisa
                  </span>
                </div>

                <div className="w-px h-7 bg-slate-200 shrink-0" aria-hidden="true" />

                {/* Diferencial 2 */}
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="w-8.5 h-8.5 rounded-full bg-[#EBF3FE] flex items-center justify-center text-[#1677FF] shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-[11.5px] font-bold text-[#08152F] leading-tight">
                    Seguro para<br />crianças e pets
                  </span>
                </div>

                <div className="w-px h-7 bg-slate-200 shrink-0" aria-hidden="true" />

                {/* Diferencial 3 */}
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="w-8.5 h-8.5 rounded-full bg-[#EBF3FE] flex items-center justify-center text-[#1677FF] shrink-0">
                    <MapPin className="w-4 h-4 text-[#1677FF]" />
                  </div>
                  <span className="text-[11.5px] font-bold text-[#08152F] leading-tight">
                    Atendimento em<br />toda a Grande Vitória
                  </span>
                </div>
              </div>
            </div>

            {/* 6. Botões Empilhados (Verde WhatsApp em cima + Branco em baixo) */}
            <div className="flex flex-col gap-3 max-w-[430px] pt-1">
              
              {/* Botão Primário WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-desktop-primary-cta"
                className="w-full h-[54px] rounded-full bg-[#00C853] hover:bg-[#00B348] text-white flex items-center justify-between px-5 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                aria-label="Orçar pelo WhatsApp"
              >
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    fill="#00C853" 
                    className="w-5 h-5 shrink-0" 
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.62L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.64 13.5 14.47 13.46 14.31 13.71C14.15 13.96 13.68 14.51 13.53 14.68C13.39 14.85 13.25 14.87 13 14.75C12.75 14.62 11.96 14.36 11.02 13.52C10.28 12.87 9.79 12.06 9.64 11.81C9.5 11.56 9.63 11.43 9.75 11.31C9.86 11.2 10 11.04 10.13 10.9C10.25 10.75 10.29 10.65 10.37 10.48C10.45 10.32 10.41 10.17 10.35 10.05C10.29 9.92 9.82 8.77 9.63 8.3C9.44 7.84 9.25 7.9 9.11 7.89C8.98 7.89 8.82 7.89 8.66 7.89C8.5 7.89 8.23 7.95 8.01 8.19C7.79 8.43 7.16 9.02 7.16 10.23C7.16 11.44 8.04 12.6 8.16 12.77C8.29 12.93 9.89 15.4 12.35 16.46C12.94 16.71 13.39 16.86 13.75 16.97C14.34 17.16 14.88 17.13 15.3 17.07C15.77 17 16.75 16.48 16.96 15.9C17.16 15.31 17.16 14.81 17.1 14.71C17.04 14.6 16.81 14.52 16.56 14.39Z" />
                  </svg>
                </div>

                <span className="text-[14px] lg:text-[15px] font-extrabold uppercase tracking-wide text-white flex-1 text-center px-2">
                  Orçar pelo WhatsApp
                </span>

                <ChevronRight className="w-5 h-5 stroke-[3] text-white shrink-0" />
              </a>

              {/* Botão Secundário Branco */}
              <a
                href="#antes-e-depois"
                id="hero-desktop-secondary-cta"
                className="w-full h-[48px] rounded-full bg-white hover:bg-blue-50/70 text-[#1677FF] border-2 border-[#1677FF] font-extrabold text-[12.5px] uppercase tracking-wider flex items-center justify-center gap-1.5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center shadow-xs"
              >
                <span>VER ANTES E DEPOIS</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </a>
            </div>

          </div>
        </div>

        {/* FOTOGRAFIA DESKTOP (Lateral Direita com fade e feixe luminoso) */}
        <div className="absolute top-0 bottom-0 right-0 w-[57%] lg:w-[61%] xl:w-[63%] z-10 select-none overflow-hidden pointer-events-none">
          <img 
            src="/assets/aistudio/Sof__Metade_Sujo__Metade_Limpo_aeefb401.png"
            alt="Foto do sofá antes e depois da higienização"
            className="w-full h-full object-cover object-[center_38%]"
            loading="eager"
            fetchPriority="high"
          />

          {/* Fusão suave em degradê à esquerda */}
          <div 
            className="absolute inset-y-0 left-0 w-44 lg:w-72 xl:w-96 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to right, #F8FAFF 0%, rgba(248, 250, 255, 0.95) 25%, rgba(248, 250, 255, 0.5) 55%, transparent 100%)'
            }}
          />

          {/* Gradiente superior suave */}
          <div 
            className="absolute inset-x-0 top-0 h-16 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to bottom, #F8FAFF 0%, transparent 100%)'
            }}
          />

          {/* Gradiente inferior suave para acomodar a onda */}
          <div 
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to top, #F8FAFF 0%, rgba(248, 250, 255, 0.6) 50%, transparent 100%)'
            }}
          />

          {/* Feixe luminoso vertical entre as duas metades do sofá */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-10" 
            viewBox="0 0 500 400" 
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="desktop-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="blur1" />
                <feGaussianBlur stdDeviation="8" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Feixe azul elétrico com glow */}
            <path
              d="M 285 0 Q 255 200 248 400"
              stroke="#1677FF"
              strokeWidth="5"
              strokeOpacity="0.75"
              fill="none"
              filter="url(#desktop-glow)"
            />
            {/* Núcleo de luz branca pura */}
            <path
              d="M 285 0 Q 255 200 248 400"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeOpacity="0.95"
              fill="none"
            />
          </svg>

          {/* Etiqueta ANTES no Desktop */}
          <div 
            className="absolute bg-[#262E3B] text-white text-[13px] font-black px-6 py-2 rounded-full shadow-xl uppercase tracking-wider -translate-x-1/2 pointer-events-none z-20 border border-white/20 bottom-[22%]"
            style={{ left: '26%' }}
          >
            ANTES
          </div>

          {/* Etiqueta DEPOIS no Desktop */}
          <div 
            className="absolute bg-[#0A6CFF] text-white text-[13px] font-black px-6 py-2 rounded-full shadow-xl shadow-blue-500/35 uppercase tracking-wider -translate-x-1/2 pointer-events-none z-20 border border-white/25 bottom-[22%]"
            style={{ left: '74%' }}
          >
            DEPOIS
          </div>

          {/* Folhagem artística no canto inferior direito correspondente à referência */}
          <div className="absolute -bottom-6 -right-6 w-44 h-44 lg:w-56 lg:h-56 pointer-events-none z-20 select-none opacity-85 blur-[1.2px]">
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full transform rotate-[-12deg]">
              <path d="M120 180 C110 140 130 90 190 70 C160 110 170 150 120 180 Z" fill="#42633C" opacity="0.9" />
              <path d="M140 190 C125 150 145 110 195 100 C175 135 180 165 140 190 Z" fill="#52784A" opacity="0.85" />
              <path d="M100 170 C95 130 110 100 160 85 C135 115 145 145 100 170 Z" fill="#355130" opacity="0.9" />
              <path d="M150 200 C130 160 160 130 200 125 C185 155 185 180 150 200 Z" fill="#628C57" opacity="0.8" />
            </svg>
          </div>
        </div>

        {/* Onda decorativa dupla na base do desktop (fundindo com o restante da página) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-30">
          <svg 
            viewBox="0 0 1440 70" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-10 sm:h-12 lg:h-16"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,32 C340,64 860,14 1440,46 L1440,70 L0,70 Z" 
              fill="#DCE9FD" 
              opacity="0.85" 
            />
            <path 
              d="M0,44 C400,68 910,24 1440,54 L1440,70 L0,70 Z" 
              fill="#FFFFFF" 
            />
          </svg>
        </div>

      </div>
    </section>
  );
};

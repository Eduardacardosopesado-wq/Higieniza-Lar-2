import React, { useState, useRef, useCallback } from 'react';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';

const WHATSAPP_URL = `https://wa.me/5527992479840?text=${encodeURIComponent("Olá! Vi o site e quero um orçamento grátis para limpeza do meu sofá.")}`;

// Ícone Oficial do WhatsApp em SVG inline
const WhatsAppIcon: React.FC<{ className?: string; fill?: string }> = ({ className = "w-5 h-5", fill = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill={fill} className={className} aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.62L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.64 13.5 14.47 13.46 14.31 13.71C14.15 13.96 13.68 14.51 13.53 14.68C13.39 14.85 13.25 14.87 13 14.75C12.75 14.62 11.96 14.36 11.02 13.52C10.28 12.87 9.79 12.06 9.64 11.81C9.5 11.56 9.63 11.43 9.75 11.31C9.86 11.2 10 11.04 10.13 10.9C10.25 10.75 10.29 10.65 10.37 10.48C10.45 10.32 10.41 10.17 10.35 10.05C10.29 9.92 9.82 8.77 9.63 8.3C9.44 7.84 9.25 7.9 9.11 7.89C8.98 7.89 8.82 7.89 8.66 7.89C8.5 7.89 8.23 7.95 8.01 8.19C7.79 8.43 7.16 9.02 7.16 10.23C7.16 11.44 8.04 12.6 8.16 12.77C8.29 12.93 9.89 15.4 12.35 16.46C12.94 16.71 13.39 16.86 13.75 16.97C14.34 17.16 14.88 17.13 15.3 17.07C15.77 17 16.75 16.48 16.96 15.9C17.16 15.31 17.16 14.81 17.1 14.71C17.04 14.6 16.81 14.52 16.56 14.39Z" />
  </svg>
);

// Ícone Oficial do Google "G" 4 Cores
const GoogleGIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.13C3.25 21.31 7.31 24 12 24z" />
    <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.27C.46 8.2.005 10.04.005 12s.455 3.8 1.265 5.42l4.01-3.13z" />
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.69 1.27 6.58l4.01 3.13c.95-2.83 3.6-4.96 6.72-4.96z" />
  </svg>
);

// Componente Interativo de Comparação Antes / Depois Real para Desktop
interface HeroComparisonProps {
  imageSrc: string;
  className?: string;
}

const HeroComparison: React.FC<HeroComparisonProps> = ({ imageSrc, className = "" }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  }, [handleTouchMove]);

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    updatePosition(e.clientX);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPos((prev) => Math.max(10, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPos((prev) => Math.min(90, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative rounded-[22px] overflow-hidden select-none shadow-xl border border-[#E3E8F0] bg-slate-900 cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onKeyDown={handleKeyDown}
      role="slider"
      aria-label="Controle de comparação antes e depois do sofá real"
      aria-valuemin={10}
      aria-valuemax={90}
      aria-valuenow={Math.round(sliderPos)}
      tabIndex={0}
    >
      {/* Imagem Real do Sofá (Metade Sujo, Metade Limpo) */}
      <img
        src={imageSrc}
        alt="Sofá metade sujo e metade limpo - HigienizaLar antes e depois real"
        className="w-full h-full object-cover object-center pointer-events-none select-none"
        width="1200"
        height="888"
        loading="eager"
      />

      {/* Selo Superior: Foto Real de Atendimento */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[12px] font-semibold shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Foto real de atendimento
        </span>
      </div>

      {/* Pill ANTES (Canto inferior esquerdo) */}
      <span className="absolute bottom-4 left-4 z-10 px-4 py-1.5 rounded-full bg-[#0F172A]/90 text-white text-[12px] font-extrabold uppercase tracking-wider backdrop-blur-xs shadow-md pointer-events-none">
        ANTES (Metade suja)
      </span>

      {/* Pill DEPOIS (Canto inferior direito) */}
      <span className="absolute bottom-4 right-4 z-10 px-4 py-1.5 rounded-full bg-[#22C55E] text-white text-[12px] font-extrabold uppercase tracking-wider shadow-md pointer-events-none">
        DEPOIS (Higienizado)
      </span>

      {/* Linha Divisória e Alça Central Móvel com Setas ‹ › */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)]" />
        <div
          className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#0A6CFF] shadow-lg flex items-center justify-center font-bold text-xs border border-slate-200 select-none"
          aria-hidden="true"
        >
          ‹›
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative bg-[#F8FAFF] pt-2 xs:pt-3 sm:pt-10 lg:pt-14 pb-5 sm:pb-14 border-b border-[#E3E8F0] overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* ===================================================================== */}
        {/* LAYOUT MOBILE (< 1024px) - EXATAMENTE IGUAL AO MOCKUP DA REFERÊNCIA   */}
        {/* ===================================================================== */}
        <div className="lg:hidden relative flex flex-col space-y-3 text-left">
          
          {/* Imagem do Técnico no Topo Direito (limpa, sem textos residuais de fundo) */}
          <div className="absolute -top-3 right-[-16px] w-[46%] max-w-[190px] h-[220px] pointer-events-none select-none z-0 overflow-hidden">
            <img
              src="/img/hero-tecnico-clean.png?v=2"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-top opacity-90"
            />
            {/* Máscara de fusão suave à esquerda e na base para integração limpa ao fundo */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #F8FAFF 0%, rgba(248, 250, 255, 0.95) 20%, transparent 65%), linear-gradient(to bottom, transparent 60%, #F8FAFF 100%)'
              }}
            />
          </div>

          {/* 1. Selo de Localização */}
          <div className="relative z-10 pt-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0FE] text-[#08152F] text-[11px] font-bold tracking-tight">
              <MapPin className="w-3.5 h-3.5 text-[#0A6CFF] shrink-0" />
              <span>Atendemos Vitória, Vila Velha, Serra, Cariacica e Viana</span>
            </div>
          </div>

          {/* 2. Título H1 idêntico ao anexo */}
          <h1 className="relative z-10 text-[24px] xs:text-[26px] font-[900] leading-[1.12] tracking-tight font-['Poppins',sans-serif] text-left pr-10">
            <span className="text-[#08152F] block">Limpeza e</span>
            <span className="text-[#08152F] block">impermeabilização</span>
            <span className="text-[#0A6CFF] block">de sofá na</span>
            <span className="text-[#0A6CFF] block">Grande Vitória</span>
          </h1>

          {/* 3. Subtítulo */}
          <p className="relative z-10 text-[13px] xs:text-[13.5px] text-[#475569] font-medium leading-snug text-left max-w-[275px]">
            Seu sofá limpo, protegido e renovado, com mais conforto para você e sua família.
          </p>

          {/* 4. Imagem Card Antes e Depois Real (Sofá Metade Sujo, Metade Limpo) */}
          <div className="relative z-10 pt-0.5">
            <div className="relative rounded-[18px] overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900">
              <img
                src="/img/sofa-hero-real-card.jpg"
                alt="Antes e depois real de higienização de sofá - HigienizaLar"
                width="1000"
                height="590"
                loading="eager"
                fetchPriority="high"
                className="w-full h-[175px] xs:h-[185px] object-cover object-center select-none"
              />

              {/* Linha divisória central */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-white/70 shadow-[0_0_6px_rgba(0,0,0,0.5)] pointer-events-none" />

              {/* Seta curva azul com borda branca indicando Antes -> Depois */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg viewBox="0 0 64 36" className="w-11 h-7 drop-shadow-[0_2px_5px_rgba(0,0,0,0.7)]" fill="none">
                  <path d="M 6 26 C 18 10, 42 10, 56 22" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 44 23 L 56 22 L 54 11" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 6 26 C 18 10, 42 10, 56 22" stroke="#0A6CFF" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M 44 23 L 56 22 L 54 11" fill="none" stroke="#0A6CFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Badge ANTES (inferior esquerdo) */}
              <span className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full bg-[#08152F]/90 text-white text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-xs shadow-md select-none pointer-events-none">
                ANTES
              </span>

              {/* Badge DEPOIS (inferior direito) */}
              <span className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-full bg-[#0A6CFF] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md select-none pointer-events-none">
                DEPOIS
              </span>
            </div>
          </div>

          {/* 5. Três Benefícios em Círculos Azuis */}
          <div className="relative z-10 grid grid-cols-3 gap-2 text-center pt-0.5">
            {/* Benefício 1: Anvisa */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#EBF3FE] flex items-center justify-center mb-1 shrink-0 shadow-2xs">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0A6CFF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <span className="text-[10.5px] xs:text-[11px] font-bold text-[#08152F] leading-tight">
                Produtos liberados pela Anvisa
              </span>
            </div>

            {/* Benefício 2: Crianças e Pets */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#EBF3FE] flex items-center justify-center mb-1 shrink-0 shadow-2xs">
                <svg viewBox="0 0 24 24" fill="#0A6CFF" className="w-5 h-5">
                  <circle cx="7" cy="8.5" r="2" />
                  <circle cx="17" cy="8.5" r="2" />
                  <circle cx="10" cy="5" r="2" />
                  <circle cx="14" cy="5" r="2" />
                  <path d="M12 11c-2.8 0-5 2-5 4.5 0 2.2 1.8 3.5 3.5 3.5 1 0 1.5-.5 2-.5s1 .5 2 .5c1.7 0 3.5-1.3 3.5-3.5 0-2.5-2.2-4.5-5-4.5z" />
                </svg>
              </div>
              <span className="text-[10.5px] xs:text-[11px] font-bold text-[#08152F] leading-tight">
                Seguros para crianças e pets
              </span>
            </div>

            {/* Benefício 3: Sofá limpo em até 2h */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#EBF3FE] flex items-center justify-center mb-1 shrink-0 shadow-2xs">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0A6CFF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="text-[10.5px] xs:text-[11px] font-bold text-[#08152F] leading-tight">
                Sofá limpo em até 2h
              </span>
            </div>
          </div>

          {/* 6. Botão Verde de WhatsApp (Pílula grande com seta à direita) */}
          <div className="relative z-10 pt-1">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-mobile-cta"
              data-local="hero"
              className="w-full h-[52px] xs:h-[56px] rounded-full bg-[#00C853] hover:bg-[#00B048] active:scale-[0.99] text-white flex items-center justify-between px-4 shadow-lg shadow-emerald-500/25 transition-all text-center"
              aria-label="Orçamento grátis no WhatsApp"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-5 h-5" fill="#FFFFFF" />
              </div>
              <span className="font-[800] text-[15px] xs:text-[16px] text-white tracking-wide flex-1 text-center">
                Orçamento grátis no WhatsApp
              </span>
              <ArrowRight className="w-5 h-5 stroke-[2.8] text-white shrink-0" />
            </a>
            <p className="mt-1.5 text-center text-[#5B6475] text-[11.5px] leading-tight">
              Resposta em minutos · Sem compromisso · Basta enviar uma foto
            </p>
          </div>

        </div>

        {/* ===================================================================== */}
        {/* LAYOUT DESKTOP (>= 1024px) - 2 COLUNAS EQUILIBRADAS                   */}
        {/* ===================================================================== */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center text-left">
          {/* Coluna Esquerda: Textos + Credenciais + CTA */}
          <div className="col-span-6 space-y-5">
            {/* Selo de Localização */}
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0E9FF] text-[#0F172A] text-[12px] font-bold">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Atendemos Vitória, Vila Velha, Serra, Cariacica e Viana</span>
              </span>
            </div>

            {/* H1 Desktop */}
            <h1 className="text-[48px] xl:text-[54px] font-[800] leading-[1.1] tracking-[-0.03em] text-[#0F172A]">
              Limpeza e impermeabilização <span className="text-[#2563EB]">de sofá na Grande Vitória</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-[17px] text-[#5B6475] font-normal leading-relaxed max-w-lg">
              Seu sofá limpo, protegido e renovado, com mais conforto para você e sua família.
            </p>

            {/* Credenciais Google + Sofá limpo em até 2h */}
            <div className="flex items-center gap-6 pt-1">
              <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-[16px] border border-[#E3E8F0] shadow-xs">
                <GoogleGIcon className="w-6 h-6 shrink-0" />
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <span className="block text-[12.5px] font-bold text-[#0F172A] leading-tight mt-0.5">
                    5 estrelas · +1.000 famílias
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[#0F172A] font-bold text-[14px]">
                <Clock className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Sofá limpo em até 2h</span>
              </div>
            </div>

            {/* CTA Verde Único */}
            <div className="pt-2 max-w-[430px]">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-desktop-cta"
                data-local="hero"
                className="w-full min-h-[60px] rounded-[16px] bg-[#22C55E] hover:bg-[#1eb354] hover:shadow-lg hover:shadow-emerald-600/25 active:scale-[0.99] text-white flex items-center justify-center gap-3 shadow-md shadow-emerald-600/20 transition-all font-[800] text-[18px] px-6 text-center"
                aria-label="Orçamento grátis no WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6 shrink-0" />
                <span>Orçamento grátis no WhatsApp</span>
              </a>
              <p className="mt-2 text-center text-[#5B6475] text-[12.5px] leading-snug">
                Resposta em minutos · Sem compromisso · Basta enviar uma foto
              </p>
            </div>
          </div>

          {/* Coluna Direita: Antes e Depois Real com Foto do Sofá */}
          <div className="col-span-6">
            <HeroComparison
              imageSrc="/img/hero-real-full.jpg"
              className="w-full h-[380px] xl:h-[420px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

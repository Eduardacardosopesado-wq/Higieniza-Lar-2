import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

export const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging.current) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  }, [handleMove]);

  const handleEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleEnd, handleMouseMove, handleTouchMove]);

  return (
    <section id="antes-e-depois" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Resultado Visível
        </h2>
        <p className="mt-3 text-lg sm:text-xl text-slate-600 font-medium max-w-lg mx-auto">
          Arraste o controle para comparar antes e depois.
        </p>

        {/* Interactive Comparison Slider */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative h-72 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize bg-slate-900"
            onMouseDown={(e) => {
              isDragging.current = true;
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              isDragging.current = true;
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* Background Image: DEPOIS */}
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
              alt="Sofá Higienizado - Depois"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-blue-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1.5 rounded-xl shadow-lg pointer-events-none">
              Depois (Higienizado)
            </div>

            {/* Foreground Image: ANTES (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
                alt="Sofá Antes da Higienização"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover brightness-50 contrast-125 saturate-50 pointer-events-none"
                style={{ width: containerRef.current?.offsetWidth || '100%' }}
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1.5 rounded-xl shadow-lg pointer-events-none">
                Antes (Uso Diário)
              </div>
            </div>

            {/* Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none flex items-center justify-center"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-white shadow-xl border-2 border-blue-700 flex items-center justify-center text-blue-700 font-bold text-xs">
                ↔
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href={getWhatsAppUrl('Olá! Quero deixar meu sofá renovado como nos resultados.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-black text-lg shadow-xl shadow-blue-700/20 transition-all"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>QUERO MEU ESTOFADO ASSIM</span>
          </a>
        </div>

      </div>
    </section>
  );
};

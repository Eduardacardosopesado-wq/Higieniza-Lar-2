import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { COMPANY } from '../config/company';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Instagram className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-950">
                Acompanhe no Instagram
              </h3>
              <p className="text-base sm:text-lg text-slate-600 font-medium mt-0.5">
                Veja fotos e vídeos dos serviços em Vitória e região.
              </p>
            </div>
          </div>

          <a
            href={COMPANY.INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-base shrink-0 transition-colors"
          >
            <span>{COMPANY.INSTAGRAM_HANDLE}</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const GOOGLE_REVIEWS_URL = "https://maps.google.com/?q=Higieniza+Lar+Jardim+Camburi+Vitoria+ES";

// Ícone Oficial do Google "G" 4 Cores
const GoogleGIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.13C3.25 21.31 7.31 24 12 24z" />
    <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.27C.46 8.2.005 10.04.005 12s.455 3.8 1.265 5.42l4.01-3.13z" />
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.69 1.27 6.58l4.01 3.13c.95-2.83 3.6-4.96 6.72-4.96z" />
  </svg>
);

export const GoogleReviewsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      src: "/img/avaliacao-google-1.jpg",
      alt: "Avaliação 5 estrelas no Google de Mariana Souza elogiando a limpeza do sofá e pontualidade",
      author: "Mariana Souza",
    },
    {
      id: 2,
      src: "/img/avaliacao-google-2.jpg",
      alt: "Avaliação 5 estrelas no Google de Fernanda Lima recomendando higienização e impermeabilização de sofá",
      author: "Fernanda Lima",
    },
    {
      id: 3,
      src: "/img/avaliacao-google-3.jpg",
      alt: "Avaliação 5 estrelas no Google de Carla Mendes elogiando a higienização de colchão",
      author: "Carla Mendes",
    },
  ];

  return (
    <section id="avaliacoes" className="py-12 sm:py-16 bg-white border-b border-[#E3E8F0] text-center">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0E9FF] text-[#2563EB] text-xs font-bold mb-3 uppercase tracking-wider">
            <GoogleGIcon className="w-4 h-4" />
            <span>Avaliações Verificadas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#0F172A] tracking-[-0.02em]">
            Quem contrata, recomenda.
          </h2>
          <p className="mt-2 text-[#5B6475] text-sm sm:text-base font-normal">
            Prints reais de clientes atendidos em domicílio na Grande Vitória.
          </p>
        </div>

        {/* Grade no Desktop (3 colunas) / Carrossel com scroll-snap no Mobile */}
        <div className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[84%] xs:w-[310px] lg:w-auto snap-center bg-white rounded-[18px] sm:rounded-[20px] p-2 sm:p-2.5 border border-[#E3E8F0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-center"
            >
              {/* TROCAR PELO PRINT REAL DA AVALIAÇÃO */}
              <div className="w-full rounded-[14px] overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100">
                <img
                  src={review.src}
                  alt={review.alt}
                  width="480"
                  height="340"
                  loading="lazy"
                  className="w-full h-auto object-contain max-h-[360px] rounded-[14px]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Link discreto para o perfil completo no Google Maps */}
        <div className="mt-8 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-blue-700 hover:underline transition-colors py-2 px-3"
            aria-label="Ver todas as avaliações no perfil do Google"
          >
            <span>Ver todas as avaliações no Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

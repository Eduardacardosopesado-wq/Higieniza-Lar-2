import React from 'react';
import { Star } from 'lucide-react';

export const GoogleReviewsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Mariana Souza",
      stars: 5,
      role: "Vitória - ES",
      text: "Fiz a limpeza do meu sofá retrátil e o resultado foi surpreendente! Tiraram todas as manchas de suco e o tecido ficou macio e super cheiroso. Técnico pontual e muito educado.",
      src: "/img/avaliacao-google-1.jpg",
    },
    {
      id: 2,
      name: "Fernanda Lima",
      stars: 5,
      role: "Vila Velha - ES",
      text: "Fiz a higienização e impermeabilização do meu sofá com a HigienizaLar e fiquei muito satisfeita! O sofá ficou super limpo, sem manchas e com um cheiro muito bom. Vale muito a pena!",
      src: "/img/avaliacao-google-2.jpg",
    },
    {
      id: 3,
      name: "Carla Mendes",
      stars: 5,
      role: "Jardim Camburi - Vitória",
      text: "Fiz a higienização do meu colchão com a HigienizaLar e amei o resultado! Estava com manchas e ficou como novo, super limpo e sem cheiro. Agora durmo muito mais tranquila.",
      src: "/img/avaliacao-google-3.jpg",
    },
  ];

  return (
    <section id="avaliacoes" className="py-16 sm:py-24 bg-white border-b border-[#E3E8F0] text-center">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho estilo Sofávix */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-[800] text-[#0B1B3D] tracking-tight leading-snug">
            Avaliação 5,0 no Google, com opiniões reais de clientes da Grande Vitória. Mais de 1.000 lares atendidos com cuidado e satisfação garantida.
          </h2>
        </div>

        {/* 3 Cards de Avaliações com borda fina azul */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[22px] p-6 sm:p-7 border border-[#0A6CFF]/30 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="font-[800] text-lg text-[#0B1B3D]">
                  {review.name}
                </h3>
                
                {/* 5 Estrelas */}
                <div className="flex items-center gap-1 my-2">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-3">
                  "{review.text}"
                </p>
              </div>

              {/* Print real anexado como evidência opcional */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-500">{review.role}</span>
                <span className="text-[#0A6CFF] font-bold">Avaliação Verificada</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

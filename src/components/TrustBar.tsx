import React from 'react';

export const TrustBar: React.FC = () => {
  const stats = [
    {
      value: "+1.000",
      label: "Lares já atendidos",
    },
    {
      value: "Grande Vitória",
      label: "Atendimento em domicílio na sua região",
    },
    {
      value: "5,0",
      label: "Nota no Google, com avaliações reais",
    },
    {
      value: "Garantia",
      label: "Na higienização e na impermeabilização",
    },
  ];

  return (
    <section className="bg-[#EBF3FE] py-12 sm:py-16 border-b border-[#E3E8F0]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-[800] text-[#0B1B3D] tracking-tight mb-8 sm:mb-12">
          Famílias que confiam na HigienizaLar
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4">
              <span className="text-3xl sm:text-4xl lg:text-[40px] font-[900] text-[#0A6CFF] tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-semibold text-[#475569] max-w-[180px] leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'light';
  size?: 'sm' | 'header' | 'hero' | 'footer' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'header',
}) => {
  const isLight = variant === 'light';

  // Proportional responsive sizes designed for 320px to wide desktop:
  const sizeClasses = {
    sm: 'w-[130px] sm:w-[160px]',
    header: 'w-[140px] sm:w-[185px] md:w-[210px]',
    md: 'w-[150px] sm:w-[200px]',
    lg: 'w-[180px] sm:w-[240px]',
    hero: 'w-[180px] sm:w-[240px] md:w-[280px]',
    footer: 'w-[160px] sm:w-[210px]',
  };

  return (
    <div
      className={`inline-flex items-center select-none ${
        isLight
          ? 'bg-white p-2.5 rounded-2xl shadow-sm'
          : ''
      } ${className}`}
      id="brand-logo"
    >
      <img
        src="/logo.png"
        alt="Higieniza Lar - Higienização e Impermeabilização de Estofados"
        className={`${sizeClasses[size]} h-auto max-w-full object-contain`}
        loading="eager"
      />
    </div>
  );
};

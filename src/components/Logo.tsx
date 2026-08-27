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

  // Strict aspect ratio and dimensions requested:
  // Desktop Header: ~180px to 220px width
  // Mobile Header: ~150px to 180px width
  // Hero: Larger version (220px to 300px)
  // Footer: High contrast & prominent
  const sizeClasses = {
    sm: 'w-[140px] sm:w-[160px]',
    header: 'w-[155px] sm:w-[185px] md:w-[210px]',
    md: 'w-[160px] sm:w-[200px]',
    lg: 'w-[200px] sm:w-[240px]',
    hero: 'w-[200px] sm:w-[250px] md:w-[280px]',
    footer: 'w-[170px] sm:w-[210px]',
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
        className={`${sizeClasses[size]} h-auto object-contain transition-transform`}
        loading="eager"
      />
    </div>
  );
};

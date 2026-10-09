import React from 'react';

interface VelocityLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg';
}

export const VelocityLogo: React.FC<VelocityLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: { height: 'h-8', icon: 'w-7 h-7', textMain: 'text-base font-extrabold tracking-tight', textSub: 'text-[9px] font-semibold tracking-[0.2em]' },
    md: { height: 'h-10', icon: 'w-9 h-9', textMain: 'text-xl font-black tracking-tight', textSub: 'text-[10px] font-bold tracking-[0.22em]' },
    lg: { height: 'h-14', icon: 'w-12 h-12', textMain: 'text-2xl sm:text-3xl font-black tracking-tight', textSub: 'text-[12px] font-bold tracking-[0.25em]' },
  };

  const currentSize = sizeClasses[size];

  const textColorMain = variant === 'light' ? 'text-white' : 'text-[#071A3A]';
  const textColorSub = variant === 'light' ? 'text-[#F5C542]' : 'text-[#D89A18]';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Dynamic Gold Knight Silhouette Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${currentSize.icon}`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
        >
          {/* Base pedestal */}
          <path
            d="M8 42C8 40.8954 8.89543 40 10 40H38C39.1046 40 40 40.8954 40 42V44H8V42Z"
            fill="url(#goldGradient)"
          />
          <path
            d="M12 37C12 36.4477 12.4477 36 13 36H35C35.5523 36 36 36.4477 36 37V39H12V37Z"
            fill="url(#goldGradient)"
          />
          
          {/* Knight Head & Mane with Velocity Swoosh */}
          <path
            d="M14 35C14 35 15.5 28 19 25C19 25 14 23 14 18C14 13 18 10 23 7C24.5 6.1 26 4 28 4C28 4 28.5 7.5 27 9.5C25.5 11.5 29 11 31 12.5C33 14 34 16.5 33 19.5C32 22.5 29.5 24.5 29.5 24.5C31.5 27 34 31 34 35H14Z"
            fill="url(#goldGradient)"
          />
          
          {/* Eye detail */}
          <circle cx="24" cy="14" r="1.5" fill="#071A3A" />
          
          {/* Velocity Motion Accent Lines */}
          <path
            d="M6 18H11M4 23H9M7 28H12"
            stroke="#F5C542"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient
              id="goldGradient"
              x1="4"
              y1="4"
              x2="44"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5C542" />
              <stop offset="0.5" stopColor="#D89A18" />
              <stop offset="1" stopColor="#B37A0D" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col leading-none">
        <span className={`font-serif ${currentSize.textMain} ${textColorMain}`}>
          VELOCITY
        </span>
        <span className={`${currentSize.textSub} ${textColorSub} uppercase mt-0.5`}>
          CHESS ACADEMY
        </span>
      </div>
    </div>
  );
};

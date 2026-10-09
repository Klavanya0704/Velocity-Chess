import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'solid' | 'interactive' | 'bordered' | 'gold-accent';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'interactive',
  hoverEffect = true,
  ...props
}) => {
  const baseCard =
    'rounded-[22px] bg-white transition-all duration-300 ease-out overflow-hidden relative border';

  const variants = {
    solid: 'border-[#F5EFE2] shadow-sm',
    interactive:
      'border-[#F5EFE2] shadow-sm hover:shadow-xl hover:shadow-[#071A3A]/08 hover:-translate-y-1.5 hover:border-[#D89A18]/40',
    bordered: 'border-[#071A3A]/10 bg-white/90 shadow-none',
    'gold-accent':
      'border-l-4 border-l-[#D89A18] border-t border-r border-b border-[#F5EFE2] shadow-sm hover:shadow-lg',
  };

  return (
    <div
      className={cn(
        baseCard,
        variants[variant],
        !hoverEffect && 'hover:transform-none hover:shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  badge?: string;
  aspectRatio?: string;
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  badge,
  aspectRatio = 'aspect-[16/10]',
  className,
}) => {
  return (
    <div className={cn('relative w-full overflow-hidden group/image', aspectRatio, className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/40 via-transparent to-transparent opacity-60 group-hover/image:opacity-40 transition-opacity duration-300" />
      {badge && (
        <div className="absolute top-3 right-3 z-10 bg-[#071A3A]/85 backdrop-blur-md border border-[#D89A18]/40 text-[#F5C542] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {badge}
        </div>
      )}
    </div>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('p-6 sm:p-7 flex flex-col flex-1', className)} {...props}>
      {children}
    </div>
  );
};

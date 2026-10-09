import React from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'gold-border';
  blur?: 'sm' | 'md' | 'lg';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  variant = 'light',
  blur = 'md',
  ...props
}) => {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-xl',
  };

  const variantClasses = {
    light:
      'bg-white/70 border border-white/60 text-[#18243A] shadow-lg shadow-[#071A3A]/05',
    dark:
      'bg-[#071A3A]/80 border border-[#D89A18]/20 text-white shadow-xl shadow-black/20',
    'gold-border':
      'bg-white/75 border border-[#D89A18]/40 text-[#18243A] shadow-lg shadow-[#D89A18]/10',
  };

  return (
    <div
      className={cn(
        'rounded-[20px] p-5 sm:p-6 transition-all duration-300',
        blurClasses[blur],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

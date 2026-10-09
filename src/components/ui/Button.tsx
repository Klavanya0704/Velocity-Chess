import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      showArrow = true,
      icon,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-sans font-semibold rounded-full transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D89A18] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer group active:scale-[0.98] select-none';

    const variants = {
      primary:
        'bg-[#071A3A] text-white hover:bg-[#102C59] shadow-md hover:shadow-lg shadow-[#071A3A]/15 border border-transparent',
      secondary:
        'bg-white/80 backdrop-blur-sm border border-[#071A3A]/20 text-[#071A3A] hover:border-[#071A3A] hover:bg-[#071A3A]/5 shadow-sm',
      gold:
        'bg-[#D89A18] text-[#071A3A] hover:bg-[#F5C542] shadow-md hover:shadow-lg shadow-[#D89A18]/25 font-bold border border-transparent',
      ghost:
        'bg-transparent text-[#071A3A] hover:bg-[#071A3A]/5 border border-transparent',
      glass:
        'bg-white/70 backdrop-blur-md text-[#071A3A] border border-white/60 hover:bg-white/90 shadow-sm',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs gap-1.5 min-h-[38px]',
      md: 'px-6 py-3 text-sm gap-2 min-h-[46px]',
      lg: 'px-8 py-4 text-base gap-2.5 min-h-[54px]',
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

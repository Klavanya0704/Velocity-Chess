import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'cream' | 'outline' | 'success';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  icon,
  className,
  ...props
}) => {
  const variants = {
    gold: 'bg-[#D89A18]/15 text-[#071A3A] border border-[#D89A18]/40 font-semibold',
    navy: 'bg-[#071A3A] text-white font-medium',
    cream: 'bg-[#F5EFE2] text-[#071A3A] border border-[#071A3A]/10 font-medium',
    outline: 'border border-[#071A3A]/20 text-[#071A3A] bg-transparent font-medium',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 rounded-full gap-1',
    md: 'text-xs px-3.5 py-1 rounded-full gap-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center tracking-wide font-sans select-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

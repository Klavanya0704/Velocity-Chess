import React from 'react';
import { cn } from '../../utils/cn';

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  variant?: 'glass' | 'solid' | 'minimal';
  className?: string;
  highlight?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  icon,
  variant = 'glass',
  className,
  highlight = false,
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-4 p-4 sm:p-5 rounded-[18px] transition-all duration-300',
        variant === 'glass' &&
          'bg-white/75 backdrop-blur-md border border-white/80 shadow-md shadow-[#071A3A]/04 hover:border-[#D89A18]/40 hover:-translate-y-0.5',
        variant === 'solid' &&
          'bg-white border border-[#F5EFE2] shadow-sm hover:border-[#D89A18]/30',
        variant === 'minimal' && 'bg-transparent border-0 p-2',
        highlight && 'border-[#D89A18] bg-[#D89A18]/05',
        className
      )}
    >
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#071A3A]/08 text-[#071A3A] shrink-0 border border-[#071A3A]/10">
          {icon}
        </div>
      )}
      <div className="flex flex-col">
        <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#071A3A] tracking-tight leading-none">
          {value}
        </span>
        <span className="text-xs sm:text-sm font-medium text-[#647084] mt-1 leading-snug">
          {label}
        </span>
      </div>
    </div>
  );
};

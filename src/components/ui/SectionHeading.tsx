import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  goldWord?: string; // Optional word to highlight in gold accent
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  theme?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  goldWord,
  subtitle,
  align = 'left',
  className,
  theme = 'light',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const isDark = theme === 'dark';

  // Render title with gold highlighting if requested
  const renderTitle = () => {
    if (!goldWord) {
      return title;
    }
    const parts = title.split(new RegExp(`(${goldWord})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === goldWord.toLowerCase() ? (
        <span key={index} className="text-[#D89A18] italic font-serif px-1">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mb-10 md:mb-16', alignmentClasses[align], className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#D89A18]" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#D89A18]">
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          'font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]',
          isDark ? 'text-white' : 'text-[#071A3A]'
        )}
      >
        {renderTitle()}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed font-sans',
            isDark ? 'text-[#FCFAF5]/80' : 'text-[#647084]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

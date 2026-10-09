import React from 'react';

interface ChessIconProps {
  type: 'knight' | 'rook' | 'queen' | 'king' | 'pawn' | 'bishop' | 'trophy' | 'medal' | 'crown' | 'target' | 'users' | 'award';
  className?: string;
  size?: number;
  color?: string;
}

export const ChessIcon: React.FC<ChessIconProps> = ({
  type,
  className = 'w-6 h-6',
  color = 'currentColor',
}) => {
  switch (type) {
    case 'knight':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <path d="M12 3c-2 0-4 1.5-4 4 0 2.5 1 5 1 5s2-2 3-2 3 2 3 2 1-2.5 1-5c0-2.5-2-4-4-4z" />
          <circle cx="12" cy="7" r="1" fill={color} />
        </svg>
      );
    case 'rook':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M5 20h14v-2H5v2z" />
          <path d="M6 18l1-11h10l1 11H6z" />
          <path d="M5 7h14V4h-3v1.5h-2V4h-4v1.5H8V4H5v3z" />
        </svg>
      );
    case 'crown':
    case 'queen':
    case 'king':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M5 20h14v-2H5v2z" />
          <path d="M6 18l-1-9 4 3 3-6 3 6 4-3-1 9H6z" />
          <circle cx="12" cy="4" r="1" />
        </svg>
      );
    case 'trophy':
    case 'award':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 4H6v7a6 6 0 0 0 12 0V4z" />
        </svg>
      );
    case 'medal':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
          <path d="M11 12 5.12 2.2" />
          <path d="m13 12 5.88-9.8" />
          <circle cx="12" cy="17" r="5" />
          <path d="M12 14v6" />
          <path d="M9 17h6" />
        </svg>
      );
    case 'target':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'users':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" className={className}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
};

export const CrownOutline: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#F5C542]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
  </svg>
);

export const ThinkScriptText: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`font-serif italic text-3xl sm:text-4xl text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] leading-tight select-none flex flex-col items-start font-medium ${className}`}>
    <span>Think</span>
    <span>Plan</span>
    <div className="relative inline-block my-0.5">
      <CrownOutline className="w-4 h-4 text-[#F5C542] absolute -top-3.5 left-1/2 -translate-x-1/2 drop-shadow-sm" />
      <span>Move</span>
    </div>
    <span>Grow</span>
  </div>
);

export const ChessBoardPattern: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none opacity-5 ${className}`}>
      <div className="w-full h-full bg-chess-board-subtle" />
    </div>
  );
};

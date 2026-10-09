import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedHeroEnvironment: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-2 overflow-hidden">
      {/* Foreground photorealistic gold pieces along bottom-left */}
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: [-3, -6, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        src="/assets/images/real_gold_pieces.png"
        alt="Photorealistic Gold Chess Pieces"
        className="absolute -bottom-8 -left-8 w-64 sm:w-80 md:w-[440px] object-contain opacity-90 drop-shadow-2xl blur-[0.3px]"
      />
      {/* Foreground photorealistic black knight piece */}
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: [-4, 2, -4] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        src="/assets/images/real_black_knight.png"
        alt="Photorealistic Black Knight Piece"
        className="absolute bottom-6 left-[28%] sm:left-[32%] w-28 sm:w-40 object-contain opacity-80 drop-shadow-xl blur-[0.7px] hidden md:block"
      />
    </div>
  );
};

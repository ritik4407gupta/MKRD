import React, { useState, useRef, MouseEvent } from 'react';
import { motion, useMotionValue } from 'motion/react';

interface ParallaxTiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
  enableShine?: boolean;
  scaleOnHover?: number;
  onClick?: () => void;
  id?: string;
  variant?: 'advanced' | 'gemini';
}

export const ParallaxTiltCard: React.FC<ParallaxTiltCardProps> = ({
  children,
  className = '',
  scaleOnHover = 1.02,
  onClick,
  id,
  variant = 'advanced'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const isGemini = variant === 'gemini';

  return (
    <motion.div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl transition-all duration-500 ease-out cursor-pointer overflow-hidden group bg-slate-950 border border-slate-800 ${className}`}
      whileHover={{ scale: scaleOnHover, y: -4 }}
      style={{
        boxShadow: isHovered
          ? (isGemini ? '0 15px 40px -10px rgba(59, 130, 246, 0.4), 0 0 20px 2px rgba(96, 165, 250, 0.2)' : '0 20px 40px -10px rgba(34, 211, 238, 0.15)')
          : '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      }}
    >
      {!isGemini && (
        <>
          {/* Animated Rotating Border (Conic Gradient) visible on hover */}
          <motion.div
            className="absolute inset-[-100%] z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{
              background: 'conic-gradient(from 0deg, transparent 0 340deg, #22d3ee 360deg)',
            }}
          />
          
          {/* Dark Inner Body (Masks the spinning gradient so it only looks like a border) */}
          <div className="absolute inset-[1px] bg-slate-950 rounded-[23px] z-10 pointer-events-none transition-colors duration-500 group-hover:bg-slate-950/90" />
        </>
      )}

      {/* Subtle Glowing Center Follows Mouse (Optional extra flare for both) */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${isGemini ? 'rgba(59, 130, 246, 0.15)' : 'rgba(34, 211, 238, 0.10)'}, transparent 40%)`,
        }}
        onUpdate={(latest) => {
          if (cardRef.current) {
            cardRef.current.style.setProperty('--mouse-x', `${mouseX.get()}px`);
            cardRef.current.style.setProperty('--mouse-y', `${mouseY.get()}px`);
          }
        }}
      />

      {/* Yellow Scanner Line on Hover (Plays Once - only for advanced) */}
      {!isGemini && isHovered && (
        <motion.div
          initial={{ top: '-10%', opacity: 0 }}
          animate={{ top: '110%', opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.5, ease: 'linear' }}
          className="absolute left-0 right-0 h-[2px] bg-yellow-400 z-30 shadow-[0_0_20px_5px_rgba(250,204,21,0.4)] pointer-events-none"
        />
      )}

      {/* Card Content */}
      <div className="relative z-20 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

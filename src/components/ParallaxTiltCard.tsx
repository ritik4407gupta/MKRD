import React, { useState, useRef, MouseEvent } from 'react';

interface ParallaxTiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
  enableShine?: boolean;
  scaleOnHover?: number;
  onClick?: () => void;
  id?: string;
}

export const ParallaxTiltCard: React.FC<ParallaxTiltCardProps> = ({
  children,
  className = '',
  maxTilt = 6,
  glowColor = 'rgba(37, 99, 235, 0.18)',
  enableShine = true,
  scaleOnHover = 1.02,
  onClick,
  id
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [shinePos, setShinePos] = useState<{ x: number; y: number; opacity: number }>({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center (-1 to 1)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) * 100;
    const yPct = (mouseY / height) * 100;

    const tiltX = -((mouseY - height / 2) / (height / 2)) * maxTilt;
    const tiltY = ((mouseX - width / 2) / (width / 2)) * maxTilt;

    setTilt({ x: tiltX, y: tiltY });
    setShinePos({ x: xPct, y: yPct, opacity: 0.7 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setShinePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 relative rounded-3xl transition-transform duration-300 ease-out cursor-pointer ${className}`}
      style={{
        transform: isHovered
          ? `scale(${scaleOnHover}) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : 'scale(1) rotateX(0deg) rotateY(0deg)',
        transformStyle: 'preserve-3d',
        boxShadow: isHovered
          ? `0 25px 50px -12px ${glowColor}, 0 0 25px 0 ${glowColor}`
          : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      }}
    >
      {/* Specular Light Sheen Overlay */}
      {enableShine && (
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-30 transition-opacity duration-300"
          style={{
            opacity: shinePos.opacity,
            background: `radial-gradient(circle 320px at ${shinePos.x}% ${shinePos.y}%, rgba(255, 255, 255, 0.35), transparent 70%)`,
          }}
        />
      )}

      {/* Subtle Glowing Border on Hover */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500 z-20 border border-blue-500/40"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Card Content with 3D Depth */}
      <div className="relative z-10 w-full h-full preserve-3d">
        {children}
      </div>
    </div>
  );
};

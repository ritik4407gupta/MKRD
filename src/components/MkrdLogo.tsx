import React from 'react';

interface MkrdLogoProps {
  variant?: 'full' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
}

export const MkrdLogo: React.FC<MkrdLogoProps> = ({
  variant = 'full',
  size = 'md',
  theme = 'auto',
  className = '',
}) => {
  const sizeClasses = {
    sm: { icon: 'w-6 h-6', text: 'text-sm', sub: 'text-[8px]', box: 'h-7' },
    md: { icon: 'w-8 h-8', text: 'text-base', sub: 'text-[9px]', box: 'h-9' },
    lg: { icon: 'w-10 h-10', text: 'text-xl', sub: 'text-[10px]', box: 'h-11' },
    xl: { icon: 'w-14 h-14', text: 'text-2xl', sub: 'text-xs', box: 'h-16' },
  }[size];

  const textColor = theme === 'dark' ? 'text-white' : 'text-blue-950';
  const subColor = theme === 'dark' ? 'text-cyan-300' : 'text-blue-600';

  if (variant === 'icon') {
    return (
      <div className={`relative flex items-center justify-center ${sizeClasses.icon} ${className}`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="100" height="100" rx="20" fill="#1d4ed8" />
          <path d="M22 75V25L42 52L62 25V75" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M68 25V75M68 50H84M68 25H84" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="82" cy="74" r="5" fill="#38bdf8" />
        </svg>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white font-display font-black tracking-wider shadow-sm border border-blue-500 ${className}`}>
        <span className="text-sm font-black tracking-widest">MKRD</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric MKRD Icon Mark */}
      <div className="relative group shrink-0">
        <div className={`${sizeClasses.icon} rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-1.5 flex items-center justify-center shadow-md shadow-blue-600/20 border border-blue-400/30 group-hover:scale-105 transition-transform`}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* MKRD Precision Monogram & Tooling Motif */}
            <path d="M18 78V22L42 52L66 22V78" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M72 26H86M72 48H86M72 74H86" stroke="white" strokeWidth="8" strokeLinecap="round" />
            <circle cx="79" cy="48" r="4" fill="#38bdf8" />
          </svg>
        </div>
      </div>

      {/* Typography Label */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-display font-extrabold ${sizeClasses.text} ${textColor} tracking-tight leading-none`}>
            MKRD
          </span>
          <span className={`font-display font-bold ${sizeClasses.text} ${theme === 'dark' ? 'text-blue-200' : 'text-blue-800'} tracking-tight leading-none`}>
            ENGINEERS
          </span>
        </div>
        <span className={`font-mono ${sizeClasses.sub} ${subColor} tracking-widest leading-tight mt-1 uppercase font-bold`}>
          PVT. LTD. • IMT MANESAR
        </span>
      </div>
    </div>
  );
};

import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import heroImg from '../assets/images/hero_robotic_precision_1787995484245.jpg';

interface BackgroundVideoProps {
  className?: string;
  overlayOpacity?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  className = '',
  overlayOpacity = 'bg-slate-950/60',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reliable industrial engineering & tech looping video stream
  const videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-robotic-arm-working-in-a-factory-42898-large.mp4";

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      {!hasError ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={heroImg}
          onError={() => setHasError(true)}
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-all duration-1000"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      ) : (
        <img
          src={heroImg}
          alt="MKRD Industrial Facility"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      )}

      {/* Subtle Corporate Blue Tint & Tech Blueprint Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity} backdrop-blur-[1px]`} />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-slate-950/40 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-tech opacity-30 pointer-events-none" />

      {/* Video Control Pill in corner */}
      <div className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-mono shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-slate-300">LIVE FEED</span>
        <div className="h-3 w-px bg-white/20" />
        <button
          onClick={togglePlay}
          className="hover:text-cyan-300 transition-colors p-1"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          title={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>
        <button
          onClick={toggleMute}
          className="hover:text-cyan-300 transition-colors p-1"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          title={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
        </button>
      </div>
    </div>
  );
};

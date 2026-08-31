import React, { useState, Suspense, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, PerformanceMonitor } from '@react-three/drei';
import Preloader from './Preloader';
import EntranceDoors from './EntranceDoors';
import { motion, AnimatePresence } from 'motion/react';

interface NewOpeningIntroProps {
  onComplete: () => void;
}

export const NewOpeningIntro: React.FC<NewOpeningIntroProps> = ({ onComplete }) => {
  const [sceneReady, setSceneReady] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Called when Preloader finishes its tear animation
  const handlePreloaderComplete = () => {
    // 3D scene is now visible to the user
  };

  // Called when EntranceDoors finishes its fly-through animation
  const handleDoorComplete = () => {
    setIsDone(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-50 bg-[#fafafa]"
        >
          {/* 3D Canvas for EntranceDoors */}
          <div className="absolute inset-0 w-full h-full">
            <Canvas
              camera={{
                position: [0, 0.2, 28],
                fov: 60,
                near: 0.1,
                far: 150
              }}
              gl={{ antialias: true, alpha: false }}
              dpr={[1, 2]}
              onCreated={() => setSceneReady(true)}
            >
              <color attach="background" args={['#020617']} />
              <fog attach="fog" args={['#020617', 15, 50]} />
              <Suspense fallback={null}>
                <EntranceDoors onComplete={handleDoorComplete} />
                <Preload all />
              </Suspense>
            </Canvas>
          </div>

          {/* 2D Preloader overlay */}
          <Preloader ready={sceneReady} onComplete={handlePreloaderComplete} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

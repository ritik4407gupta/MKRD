const fs = require('fs');

const files = [
  'src/components/ThreeDPrinterCanvas.tsx',
  'src/components/ThreeDRobotActuator.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace window resize listener with ResizeObserver
  const oldResize = `    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);`;
    
  const newResize = `    // Resize handler using ResizeObserver to catch container size changes (like framer-motion)
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
    resizeObserver.observe(container);`;
    
  const oldCleanupResize = `window.removeEventListener('resize', handleResize);`;
  const newCleanupResize = `resizeObserver.disconnect();`;

  if (content.includes(oldResize)) {
    content = content.replace(oldResize, newResize);
    content = content.replace(oldCleanupResize, newCleanupResize);
    
    // Also remove the rounded-2xl and borders from the outer wrapper of these components so they flush perfectly with the motion.div
    content = content.replace(
      'className="w-full h-full flex flex-col bg-slate-950/40 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl relative z-10 backdrop-blur-md"',
      'className="w-full h-full flex flex-col relative z-10"'
    );
    
    // Same for robot if it has slightly different classes
    content = content.replace(
      'className="w-full h-full flex flex-col bg-[#050B14] border border-blue-900/50 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(30,58,138,0.3)] relative z-10 backdrop-blur-md"',
      'className="w-full h-full flex flex-col relative z-10"'
    );
    
    fs.writeFileSync(file, content);
    console.log("Fixed " + file);
  } else {
    console.log("Could not find resize logic in " + file);
  }
}

const fs = require('fs');
let content = fs.readFileSync('src/components/ThreeDRobotActuator.tsx', 'utf8');

const oldResize = `    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);`;

const newResize = `    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
    resizeObserver.observe(container);`;

content = content.replace(oldResize, newResize);
content = content.replace(`window.removeEventListener('resize', handleResize);`, `resizeObserver.disconnect();`);

// Fix wrapper
content = content.replace(
  'className="w-full h-full flex flex-col bg-[#050B14] border border-blue-900/50 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(30,58,138,0.3)] relative z-10 backdrop-blur-md"',
  'className="w-full h-full flex flex-col relative z-10"'
);

fs.writeFileSync('src/components/ThreeDRobotActuator.tsx', content);

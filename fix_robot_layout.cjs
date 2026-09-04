const fs = require('fs');

let content = fs.readFileSync('src/components/ThreeDRobotActuator.tsx', 'utf8');

// The robot actuator has this wrapper:
content = content.replace(
  '<div id="robot-actuator-lab" className="w-full bg-slate-950 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl">',
  '<div id="robot-actuator-lab" className="w-full h-full flex flex-col relative z-10">'
);

fs.writeFileSync('src/components/ThreeDRobotActuator.tsx', content);

let content2 = fs.readFileSync('src/components/ThreeDPrinterCanvas.tsx', 'utf8');
content2 = content2.replace(
  '<div id="additive-simulator" className="w-full h-full flex flex-col bg-slate-950/40 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl relative z-10 backdrop-blur-md">',
  '<div id="additive-simulator" className="w-full h-full flex flex-col relative z-10">'
);
fs.writeFileSync('src/components/ThreeDPrinterCanvas.tsx', content2);

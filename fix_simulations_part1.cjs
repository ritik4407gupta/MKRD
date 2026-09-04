const fs = require('fs');

// ----------------------------------------------------
// 1. Fix SimulationsView.tsx
// ----------------------------------------------------
let viewContent = fs.readFileSync('src/components/pages/SimulationsView.tsx', 'utf8');

// Remove the internal header overlay
const overlayStart = '{/* Internal Header Overlay for Context */}';
const overlayEnd = '</div>\n              </motion.div>';
const startIndex = viewContent.indexOf(overlayStart);
const endIndex = viewContent.indexOf(overlayEnd) + overlayEnd.length;

if (startIndex !== -1 && endIndex !== -1) {
  viewContent = viewContent.substring(0, startIndex) + viewContent.substring(endIndex);
}

// Add a 3D background image to the motion div wrapper
// I will use an existing image from assets, e.g., virtual_tour_scanning or hero_robotic_precision.
// Actually, I can just use virtual_tour_scanning since it's very techy and 3D looking.
viewContent = viewContent.replace(
  'className="relative bg-[#020617] border-slate-700 overflow-hidden flex flex-col mx-auto"',
  `className="relative bg-[#020617] border-slate-700 overflow-hidden flex flex-col mx-auto"
              style={{ width, maxWidth, height, borderRadius, boxShadow: shadowIntensity }}`
);
// Wait, I already have style={{ width, maxWidth, height, borderRadius, boxShadow: shadowIntensity }}
// I'll just add an image inside the motion.div.

const imgElement = `
              {/* Classy 3D Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1614729939124-03290b5609ce?q=80&w=2000&auto=format&fit=crop" 
                  alt="3D Background" 
                  className="w-full h-full object-cover opacity-20 pointer-events-none" 
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm pointer-events-none" />
              </div>
`;

// Insert right after the motion.div opening
viewContent = viewContent.replace(
  '<motion.div style={{ opacity: borderOpacity }} className="absolute inset-0 border border-slate-700 pointer-events-none rounded-[inherit]" />',
  '<motion.div style={{ opacity: borderOpacity }} className="absolute inset-0 border border-slate-700 z-10 pointer-events-none rounded-[inherit]" />\n' + imgElement
);

fs.writeFileSync('src/components/pages/SimulationsView.tsx', viewContent);

// ----------------------------------------------------
// 2. Fix ThreeDPrinterCanvas.tsx
// ----------------------------------------------------
let printerContent = fs.readFileSync('src/components/ThreeDPrinterCanvas.tsx', 'utf8');

// Make container h-full and flex-col
printerContent = printerContent.replace(
  'className="w-full bg-slate-950 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl relative"',
  'className="w-full h-full flex flex-col bg-slate-950/40 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl relative z-10 backdrop-blur-md"'
);

// Make 3D mount flex-grow instead of fixed height
printerContent = printerContent.replace(
  'className="relative w-full h-[420px] sm:h-[500px] cursor-grab active:cursor-grabbing bg-radial from-slate-900 to-[#070a0f]"',
  'className="relative w-full flex-grow cursor-grab active:cursor-grabbing"'
);

// Make Three.js transparent
printerContent = printerContent.replace(
  'scene.background = new THREE.Color(0x0a0d12);',
  '// scene.background = new THREE.Color(0x0a0d12); // Removed to make transparent'
);
printerContent = printerContent.replace(
  'const renderer = new THREE.WebGLRenderer({ antialias: true });',
  'const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });\n    renderer.setClearColor(0x000000, 0);'
);

fs.writeFileSync('src/components/ThreeDPrinterCanvas.tsx', printerContent);

// ----------------------------------------------------
// 3. Fix ThreeDRobotActuator.tsx
// ----------------------------------------------------
let robotContent = fs.readFileSync('src/components/ThreeDRobotActuator.tsx', 'utf8');

// Make container h-full and flex-col
robotContent = robotContent.replace(
  'className="w-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"',
  'className="w-full h-full flex flex-col bg-slate-950/40 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl z-10 backdrop-blur-md"'
);

// Make 3D mount flex-grow instead of fixed height
robotContent = robotContent.replace(
  'className="relative w-full h-[360px] sm:h-[440px] cursor-grab active:cursor-grabbing bg-radial from-slate-900 via-[#0a0e14] to-[#070a0e]"',
  'className="relative w-full flex-grow cursor-grab active:cursor-grabbing"'
);

// Make Three.js transparent
robotContent = robotContent.replace(
  'scene.background = new THREE.Color(0x090c10);',
  '// scene.background = new THREE.Color(0x090c10); // Removed to make transparent'
);
robotContent = robotContent.replace(
  'const renderer = new THREE.WebGLRenderer({ antialias: true });',
  'const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });\n    renderer.setClearColor(0x000000, 0);'
);

fs.writeFileSync('src/components/ThreeDRobotActuator.tsx', robotContent);

console.log("All fixed");

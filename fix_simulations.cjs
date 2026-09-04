const fs = require('fs');

let content = fs.readFileSync('src/components/pages/SimulationsView.tsx', 'utf8');

// 1. Import useScroll, useTransform, useRef
if (!content.includes('useScroll')) {
  content = content.replace("import { motion } from 'motion/react';", "import { motion, useScroll, useTransform } from 'motion/react';\nimport { useRef } from 'react';");
}

// 2. Add refs and transforms inside the component
const refsCode = `  const [activeSimulationTab, setActiveSimulationTab] = useState<'printer' | 'robot'>('printer');

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Expand from a standard card size to full screen
  const width = useTransform(scrollYProgress, [0, 0.3], ["calc(100% - 2rem)", "100vw"]);
  const maxWidth = useTransform(scrollYProgress, [0, 0.3], ["80rem", "100vw"]);
  const height = useTransform(scrollYProgress, [0, 0.3], ["600px", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["1.5rem", "0rem"]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
`;

content = content.replace("  const [activeSimulationTab, setActiveSimulationTab] = useState<'printer' | 'robot'>('printer');", refsCode);

// 3. Replace the Active Simulation Stage section
const oldSectionStart = "{/* Active Simulation Stage */}";
const oldSectionEnd = "{/* Engineering Assistance Callout */}";

const startIndex = content.indexOf(oldSectionStart);
const endIndex = content.indexOf(oldSectionEnd);

const newSection = `{/* Active Simulation Stage - Scroll Parallax Container */}
      <section className="w-full relative">
        <div ref={containerRef} className="h-[250vh] relative">
          <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            
            <motion.div 
              style={{ width, maxWidth, height, borderRadius }}
              className="relative bg-slate-900 border-slate-700 shadow-2xl shadow-cyan-900/20 overflow-hidden flex flex-col mx-auto"
            >
              <motion.div style={{ opacity: borderOpacity }} className="absolute inset-0 border border-slate-700 pointer-events-none rounded-[inherit]" />
              
              {/* Internal Header Overlay for Context */}
              <motion.div 
                style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                className="absolute top-0 inset-x-0 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10 bg-gradient-to-b from-slate-900/90 to-transparent pointer-events-none"
              >
                <div>
                  <h3 className="text-xl font-display font-extrabold text-white">
                    {activeSimulationTab === 'printer' 
                      ? 'Industrial FDM / SLA Additive Build Chamber' 
                      : '6-Axis Articulated Industrial Robot Actuator'}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {activeSimulationTab === 'printer'
                      ? 'Simulate G-Code layer extrusion, nozzle temperature control, heated build plate, and infill geometries.'
                      : 'Inspect joint angles J1-J6, pneumatic end-effector grasping, payload kinematics, and automated motion cycles.'}
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-3 py-1.5 rounded-full border border-cyan-800 font-semibold backdrop-blur-md">
                  <Activity className="w-3 h-3 text-cyan-400" />
                  <span>{activeSimulationTab === 'printer' ? '60 FPS WEBGL CANVAS' : 'INVERSE KINEMATICS ENGINE'}</span>
                </div>
              </motion.div>

              {/* The 3D Canvas rendering */}
              <div className="w-full h-full flex-grow relative z-0">
                {activeSimulationTab === 'printer' ? (
                  <ThreeDPrinterCanvas />
                ) : (
                  <ThreeDRobotActuator />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      `;

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + newSection + content.substring(endIndex);
}

fs.writeFileSync('src/components/pages/SimulationsView.tsx', content);

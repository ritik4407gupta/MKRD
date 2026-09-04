const fs = require('fs');

let content = fs.readFileSync('src/components/pages/SimulationsView.tsx', 'utf8');

const oldTransformStart = `const width = useTransform(scrollYProgress, [0, 0.3], ["calc(100% - 2rem)", "100vw"]);`;
const oldTransformEnd = `const borderOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);`;

const newTransforms = `  // Advanced Flexible Parallax: scale up, hold, then scale down before exit
  const width = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["85vw", "96vw", "96vw", "85vw"]);
  const maxWidth = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["75rem", "120rem", "120rem", "75rem"]);
  const height = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["60vh", "94vh", "94vh", "60vh"]);
  
  // Keep the edges beautifully curved at all times to give it a floating premium window feel
  const borderRadius = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["2rem", "3rem", "3rem", "2rem"]);
  
  // Fade out internal borders and text when it's fully expanded to focus on the 3D model
  const borderOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [1, 0.1, 0.1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0, 0, 1]);
  const shadowIntensity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], 
    ["0 20px 40px -10px rgba(34,211,238,0.1)", "0 30px 60px -15px rgba(34,211,238,0.4)", "0 30px 60px -15px rgba(34,211,238,0.4)", "0 20px 40px -10px rgba(34,211,238,0.1)"]
  );`;

const startIndex = content.indexOf(oldTransformStart);
const endIndex = content.indexOf(oldTransformEnd) + oldTransformEnd.length;

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + newTransforms + content.substring(endIndex);
  
  // Replace the inner text opacity binding from:
  // style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
  // to:
  // style={{ opacity: textOpacity }}
  content = content.replace(
    'style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}',
    'style={{ opacity: textOpacity }}'
  );
  
  // Add boxShadow to the motion.div
  content = content.replace(
    'className="relative bg-slate-900 border-slate-700 shadow-2xl shadow-cyan-900/20 overflow-hidden flex flex-col mx-auto"',
    'className="relative bg-[#020617] border-slate-700 overflow-hidden flex flex-col mx-auto" style={{ width, maxWidth, height, borderRadius, boxShadow: shadowIntensity }}'
  );
  
  // Remove the old style prop since we combined it
  content = content.replace(
    'style={{ width, maxWidth, height, borderRadius }}\n              className="relative bg-[#020617] border-slate-700 overflow-hidden flex flex-col mx-auto" style={{ width, maxWidth, height, borderRadius, boxShadow: shadowIntensity }}',
    'className="relative bg-[#020617] border-slate-700 overflow-hidden flex flex-col mx-auto"\n              style={{ width, maxWidth, height, borderRadius, boxShadow: shadowIntensity }}'
  );

  // also fix the scroll container height from 250vh to 350vh for longer interaction
  content = content.replace('className="h-[250vh] relative"', 'className="h-[350vh] relative"');

  fs.writeFileSync('src/components/pages/SimulationsView.tsx', content);
  console.log("Simulations updated");
} else {
  console.log("Could not find block");
}

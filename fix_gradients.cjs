const fs = require('fs');

const files = [
  'src/components/pages/ServicesView.tsx',
  'src/components/pages/SimulationsView.tsx',
  'src/components/pages/InfrastructureView.tsx',
  'src/components/pages/ContactView.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/from-blue-50\/70 to-white/g, 'from-slate-900 to-[#020617]');
  // Also check for bg-blue-50/40 or bg-blue-50 which were replaced to bg-cyan-950 or bg-cyan-950/50. We want dark theme colors.
  // The dark colors are mostly fine now (bg-slate-900, bg-slate-800, text-white). Let's review if there's any `text-slate-800` left.
  
  fs.writeFileSync(file, content);
}
console.log("Fixed gradients");

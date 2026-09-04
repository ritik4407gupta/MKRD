const fs = require('fs');

const files = [
  'src/components/pages/ServicesView.tsx',
  'src/components/pages/SimulationsView.tsx',
  'src/components/pages/InfrastructureView.tsx',
  'src/components/pages/ContactView.tsx'
];

const replacements = [
  // Text Colors
  { from: /text-blue-950/g, to: 'text-white' },
  { from: /text-slate-900/g, to: 'text-white' },
  { from: /text-slate-800/g, to: 'text-slate-200' },
  { from: /text-slate-700/g, to: 'text-slate-300' },
  { from: /text-slate-600/g, to: 'text-slate-400' },
  { from: /text-slate-500/g, to: 'text-slate-400' },
  { from: /text-blue-700/g, to: 'text-cyan-400' },
  { from: /text-blue-600/g, to: 'text-cyan-400' },
  
  // Background Colors
  { from: /bg-white/g, to: 'bg-slate-900' },
  { from: /bg-slate-50/g, to: 'bg-slate-800' },
  { from: /bg-slate-100/g, to: 'bg-slate-800' },
  { from: /bg-blue-50\/40/g, to: 'bg-cyan-950' },
  { from: /bg-blue-50/g, to: 'bg-cyan-950/50' },
  { from: /bg-blue-600/g, to: 'bg-cyan-600' },
  { from: /hover:bg-blue-700/g, to: 'hover:bg-cyan-500' },
  { from: /bg-blue-700/g, to: 'bg-cyan-500' },
  { from: /hover:bg-white/g, to: 'hover:bg-slate-800' },
  
  // Border Colors
  { from: /border-slate-200/g, to: 'border-slate-700' },
  { from: /border-slate-100/g, to: 'border-slate-800' },
  { from: /border-blue-200/g, to: 'border-cyan-800' },
  { from: /border-blue-400/g, to: 'border-cyan-400' },
  
  // Glow / Shadows
  { from: /glowColor="rgba\(37, 99, 235, 0\.18\)"/g, to: 'glowColor="rgba(34, 211, 238, 0.15)"' },
  { from: /shadow-blue-600/g, to: 'shadow-cyan-600' },
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  for (const { from, to } of replacements) {
    content = content.replace(from, to);
  }
  
  // Need to ensure the root container of each view forces dark theme overrides
  // (Because App.tsx has bg-[#f8fafc] for light mode)
  // E.g., <div className="pb-24 space-y-24"> -> <div className="pb-24 space-y-24 bg-[#020617] min-h-screen text-slate-300">
  // We can just add bg-slate-950 and text-slate-300 to the root div of each page.
  content = content.replace(/className="([^"]*(pb-24|space-y-16|space-y-20|space-y-24)[^"]*)"/, 'className="$1 bg-[#020617] min-h-[100vh] text-slate-300 pt-8"');

  fs.writeFileSync(file, content);
}

console.log("Replacements applied successfully.");

const fs = require('fs');
let content = fs.readFileSync('src/components/pages/SimulationsView.tsx', 'utf8');

// Replace the container
content = content.replace(
  'p-8 rounded-3xl bg-blue-900 text-white border border-blue-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl',
  'p-8 rounded-3xl bg-[#0B1121] text-white border border-cyan-800/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(34,211,238,0.15)] relative overflow-hidden'
);

// Replace button colors
content = content.replace(
  'px-6 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-white font-bold text-xs shadow-lg shadow-cyan-400/25 transition-all',
  'px-6 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-xs shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all'
);

fs.writeFileSync('src/components/pages/SimulationsView.tsx', content);

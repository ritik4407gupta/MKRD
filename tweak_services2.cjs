const fs = require('fs');
let content = fs.readFileSync('src/components/pages/ServicesView.tsx', 'utf8');

content = content.replace(
  'className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 group-hover:scale-105 transition-transform duration-1000"',
  'className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 group-hover:scale-105 transition-transform duration-1000"'
);

content = content.replace(
  '<div className="absolute inset-0 bg-slate-950/50 z-0 backdrop-blur-[3px]" />',
  '<div className="absolute inset-0 bg-slate-950/20 z-0" />'
);

content = content.replace(
  '<div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-[#020617]/80 z-0 pointer-events-none" />',
  '<div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-[#020617]/20 to-[#020617]/60 z-0 pointer-events-none" />'
);

fs.writeFileSync('src/components/pages/ServicesView.tsx', content);

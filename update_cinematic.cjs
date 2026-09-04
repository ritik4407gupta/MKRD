const fs = require('fs');

let bgContent = fs.readFileSync('src/components/MkrdCinematicBackground.tsx', 'utf8');
bgContent = bgContent.replace(
  '<div className="absolute inset-0 overflow-hidden bg-[#020617] z-0 pointer-events-none flex items-center justify-center">',
  '<div className="absolute inset-0 overflow-hidden bg-[#020617] z-0 pointer-events-none flex items-center justify-center fixed">'
);
fs.writeFileSync('src/components/MkrdCinematicBackground.tsx', bgContent);

let contactContent = fs.readFileSync('src/components/pages/ContactView.tsx', 'utf8');
contactContent = contactContent.replace(
  'className="relative z-10 relative overflow-hidden bg-gradient-to-b from-slate-900 to-[#020617] pt-12 pb-8 border-b border-slate-700"',
  'className="relative z-10 overflow-hidden bg-[#020617]/60 backdrop-blur-xl pt-12 pb-8 border-b border-slate-700/50 shadow-2xl"'
);
fs.writeFileSync('src/components/pages/ContactView.tsx', contactContent);

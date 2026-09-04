const fs = require('fs');
let content = fs.readFileSync('src/components/pages/ServicesView.tsx', 'utf8');

content = content.replace(
  '<div className="relative z-10 flex flex-col items-center text-center p-6 sm:p-12 max-w-4xl mx-auto space-y-8">',
  '<div className="relative z-10 flex flex-col items-center text-center p-8 sm:p-12 max-w-4xl mx-auto space-y-8 bg-slate-950/65 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl my-8 mx-4 sm:mx-auto">'
);

// We can also remove the full-image gradient overlay completely now, since the glass box handles readability!
content = content.replace(
  '<div className="absolute inset-0 bg-slate-950/20 z-0" />',
  ''
);
content = content.replace(
  '<div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-[#020617]/20 to-[#020617]/60 z-0 pointer-events-none" />',
  ''
);

fs.writeFileSync('src/components/pages/ServicesView.tsx', content);

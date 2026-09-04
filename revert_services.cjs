const fs = require('fs');

let content = fs.readFileSync('src/components/pages/ServicesView.tsx', 'utf8');

// 1. Revert container back to the transparent one
content = content.replace(
  '<div className="relative z-10 flex flex-col items-center text-center p-8 sm:p-12 max-w-4xl mx-auto space-y-8 bg-slate-950/65 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl my-8 mx-4 sm:mx-auto">',
  '<div className="relative z-10 flex flex-col items-center text-center p-6 sm:p-12 max-w-4xl mx-auto space-y-8">'
);

// 2. Revert image opacity back to 40
content = content.replace(
  'className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 group-hover:scale-105 transition-transform duration-1000"',
  'className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 group-hover:scale-105 transition-transform duration-1000"'
);

// 3. Add back the original overlays
content = content.replace(
  '{/* Centered Content Overlay */}',
  `<div className="absolute inset-0 bg-slate-950/70 z-0 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80 z-0 pointer-events-none" />

              {/* Centered Content Overlay */}`
);

fs.writeFileSync('src/components/pages/ServicesView.tsx', content);

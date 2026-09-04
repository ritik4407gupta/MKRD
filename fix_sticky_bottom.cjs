const fs = require('fs');
let content = fs.readFileSync('src/components/pages/HomeView.tsx', 'utf8');

content = content.replace(
  '<section className="sticky top-0 z-0 bg-[#020617] py-12 border-y border-slate-800 h-screen overflow-hidden flex flex-col justify-center mt-24">',
  '<section className="sticky bottom-0 z-0 bg-[#020617] py-20 border-y border-slate-800 mt-24 pb-32">'
);

fs.writeFileSync('src/components/pages/HomeView.tsx', content);

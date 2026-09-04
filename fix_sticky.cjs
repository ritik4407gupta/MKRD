const fs = require('fs');

let content = fs.readFileSync('src/components/pages/HomeView.tsx', 'utf8');

// Remove overflow-clip/overflow-hidden completely from the root div
content = content.replace(
  '<div className="space-y-24 bg-slate-950 text-slate-300 relative w-full overflow-clip">',
  '<div className="bg-slate-950 text-slate-300 relative w-full pb-24 overflow-clip">'
);

// We should remove space-y-24 from root div because it breaks sticky overlapping by adding margin between elements!
// Instead of space-y-24 on the root, we'll just let the sections handle their own padding.
content = content.replace(
  '<div className="space-y-24 overflow-hidden bg-slate-950 text-slate-300">',
  '<div className="bg-slate-950 text-slate-300 relative w-full overflow-clip">'
);

// Wait, I already replaced it with overflow-clip. Let's just do a regex replace to be safe:
content = content.replace(
  /<div className=".*bg-slate-950 text-slate-300.*">/,
  '<div className="bg-slate-950 text-slate-300 relative w-full pb-0">'
);

// Add top margin to sections that need it, since we removed space-y-24
content = content.replace(
  '<section className="relative w-full py-24 overflow-hidden border-y border-slate-800/50">',
  '<section className="relative w-full py-24 mt-24 overflow-hidden border-y border-slate-800/50">'
);

content = content.replace(
  '<section className="sticky bottom-0 z-0 bg-[#020617] py-20 border-y border-slate-800 pb-32">',
  '<section className="sticky top-0 z-0 bg-[#020617] py-12 border-y border-slate-800 h-screen overflow-hidden flex flex-col justify-center mt-24">'
);
// Wait, top-0 h-screen overflow-hidden works BEST for sticky parallax! If it's bottom-0, the user has to scroll past it, but if it's top-0 h-screen, it snaps to the screen perfectly! 
// Let's use sticky top-0 h-screen!

// Remove the gap on the wrapper
content = content.replace(
  '<div className="relative z-10 bg-[#020617] w-full border-t border-slate-800/80 shadow-[0_-30px_50px_rgba(0,0,0,0.7)] pt-24 pb-12 rounded-t-[3rem]">',
  '<div className="relative z-10 bg-[#020617] w-full border-t border-slate-800/80 shadow-[0_-30px_50px_rgba(0,0,0,0.7)] pt-24 pb-12 rounded-t-[3rem]">'
);

fs.writeFileSync('src/components/pages/HomeView.tsx', content);

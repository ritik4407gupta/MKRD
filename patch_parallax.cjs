const fs = require('fs');

let content = fs.readFileSync('src/components/pages/HomeView.tsx', 'utf8');

// 1. Change section 3 to be sticky
const section3Start = '<section className="bg-slate-900 py-20 border-y border-slate-800">';
const section3NewStart = '<section className="sticky top-24 z-0 bg-[#020617] py-12 lg:py-20 border-y border-slate-800 h-[calc(100vh-6rem)] overflow-hidden flex flex-col justify-center">';

content = content.replace(section3Start, section3NewStart);

// 2. Wrap sections 4, 5, and partner logos in a z-10 wrapper
const section4Start = '      {/* 4. WHY MKRD BENTO GRID & INTERACTIVE STATS WITH TILT */}';
const section4NewStart = `      {/* SCROLL-OVER WRAPPER FOR STICKY PARALLAX */}
      <div className="relative z-10 bg-[#020617] w-full border-t border-slate-800/80 shadow-[0_-30px_50px_rgba(0,0,0,0.7)] pt-24 pb-12 rounded-t-[3rem]">
      {/* 4. WHY MKRD BENTO GRID & INTERACTIVE STATS WITH TILT */}`;

content = content.replace(section4Start, section4NewStart);

// 3. Close the wrapper at the very end before the final div
const endMarker = '    </div>\n  );\n};';
const endReplacement = '      </div>\n    </div>\n  );\n};';

content = content.replace(endMarker, endReplacement);

fs.writeFileSync('src/components/pages/HomeView.tsx', content);

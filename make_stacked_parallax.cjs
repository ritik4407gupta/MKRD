const fs = require('fs');
let content = fs.readFileSync('src/components/pages/HomeView.tsx', 'utf8');

// The current Section 4 wrapper:
const s4WrapperStart = '<div className="relative z-10 bg-[#020617] w-full border-t border-slate-800/80 shadow-[0_-30px_50px_rgba(0,0,0,0.7)] pt-24 pb-12 rounded-t-[3rem]">';
const s4WrapperNew = '<div className="sticky bottom-0 z-10 bg-[#020617] w-full border-t border-slate-800/80 shadow-[0_-30px_50px_rgba(0,0,0,0.7)] pt-24 pb-32 rounded-t-[3rem] min-h-screen flex flex-col justify-center">';
content = content.replace(s4WrapperStart, s4WrapperNew);

// Section 5 needs to be broken out into its own z-20 wrapper.
// Find the start of Section 5.
const s5Start = '      {/* 5. RAPID PROPOSAL ESTIMATION CALLOUT */}';
const s5New = `      </div>
      
      {/* SCROLL-OVER WRAPPER 2 */}
      <div className="relative z-20 bg-slate-900 w-full border-t border-cyan-900/30 shadow-[0_-30px_60px_rgba(0,0,0,0.8)] pt-24 pb-12 rounded-t-[3rem]">
      {/* 5. RAPID PROPOSAL ESTIMATION CALLOUT */}`;
content = content.replace(s5Start, s5New);

fs.writeFileSync('src/components/pages/HomeView.tsx', content);

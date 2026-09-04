const fs = require('fs');
let content = fs.readFileSync('src/components/pages/HomeView.tsx', 'utf8');

// 1. Revert Section 4 wrapper from sticky min-h-screen back to just a relative z-10 wrapper
const s4StickyWrapper = '<div className="sticky bottom-0 z-10 bg-[#020617] w-full border-t border-slate-800/80 shadow-[0_-30px_50px_rgba(0,0,0,0.7)] pt-24 pb-32 rounded-t-[3rem] min-h-screen flex flex-col justify-center">';
const s4RelativeWrapper = '<div className="relative z-10 bg-[#020617] w-full border-t border-slate-800/80 shadow-[0_-30px_50px_rgba(0,0,0,0.7)] pt-24 pb-12 rounded-t-[3rem]">';
content = content.replace(s4StickyWrapper, s4RelativeWrapper);

// 2. Remove the Section 5 wrapper I added
const s5WrapperToRemove = `      </div>
      
      {/* SCROLL-OVER WRAPPER 2 */}
      <div className="relative z-20 bg-slate-900 w-full border-t border-cyan-900/30 shadow-[0_-30px_60px_rgba(0,0,0,0.8)] pt-24 pb-12 rounded-t-[3rem]">
      {/* 5. RAPID PROPOSAL ESTIMATION CALLOUT */}`;
const s5Original = `      {/* 5. RAPID PROPOSAL ESTIMATION CALLOUT */}`;
content = content.replace(s5WrapperToRemove, s5Original);

fs.writeFileSync('src/components/pages/HomeView.tsx', content);

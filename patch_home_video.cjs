const fs = require('fs');

let content = fs.readFileSync('src/components/pages/HomeView.tsx', 'utf8');

const targetSection = `      {/* 2. INTERACTIVE CAPABILITY MATRIX WITH TOGGLE EFFECT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative">`;

const replacement = `      {/* 2. INTERACTIVE CAPABILITY MATRIX WITH TOGGLE EFFECT */}
      <section className="relative w-full py-24 overflow-hidden border-y border-slate-800/50">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <BackgroundVideo overlayOpacity="bg-slate-950/70" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">`;

content = content.replace(targetSection, replacement);

// Find where this section ends. 
// It ends right before {/* 3. SCROLL-TRIGGERED CINEMATIC PORTFOLIO PREVIEW */}
const endSection = `      {/* 3. SCROLL-TRIGGERED CINEMATIC PORTFOLIO PREVIEW */}`;
const replacementEnd = `        </div>
      </section>

      {/* 3. SCROLL-TRIGGERED CINEMATIC PORTFOLIO PREVIEW */}`;

content = content.replace(endSection, replacementEnd);

fs.writeFileSync('src/components/pages/HomeView.tsx', content);

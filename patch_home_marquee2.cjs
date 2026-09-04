const fs = require('fs');
const file = 'src/components/pages/HomeView.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace Sparkles with Circle, Triangle, Square
content = content.replace('Sparkles', 'Circle, Triangle, Square');

// Replace the TextMarquee function
const oldMarquee = `const TextMarquee = () => {
  const words = [
    "SUB-MICRON PRECISION", "AEROSPACE GRADE TOLERANCES", "INDUSTRY 4.0 INTEGRATION", 
    "RAPID PROTOTYPING", "GD&T VERIFIED EXCELLENCE", "SMART MANUFACTURING"
  ];
  return (
    <div className="relative py-12 overflow-hidden bg-transparent mt-12 mb-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="flex w-max animate-scroll-marquee whitespace-nowrap items-center">
        {[...words, ...words, ...words].map((word, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="text-3xl sm:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-800 uppercase tracking-widest">{word}</span>
            <Sparkles className="w-8 h-8 text-cyan-900/50" />
          </div>
        ))}
      </div>
    </div>
  )
};`;

const newMarquee = `const TextMarquee = () => {
  const words = [
    "SUB-MICRON PRECISION", "AEROSPACE GRADE TOLERANCES", "INDUSTRY 4.0 INTEGRATION", 
    "RAPID PROTOTYPING", "GD&T VERIFIED EXCELLENCE", "SMART MANUFACTURING"
  ];
  return (
    <div className="relative py-12 overflow-hidden bg-transparent mt-12 mb-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="flex w-max animate-scroll-marquee whitespace-nowrap items-center">
        {[...words, ...words, ...words].map((word, i) => {
          const icons = [Circle, Triangle, Square];
          const Icon = icons[i % icons.length];
          return (
            <div key={i} className="flex items-center gap-[6px] mx-8">
              <span className="text-4xl sm:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-700 uppercase tracking-widest">{word}</span>
              <Icon className="w-8 h-8 text-cyan-800/50 ml-4" />
            </div>
          );
        })}
      </div>
    </div>
  )
};`;

content = content.replace(oldMarquee, newMarquee);

// Fix the TransitionTextSequence error
content = content.replace('<TransitionTextSequence />', '<TransitionTextSequence onComplete={() => {}} />');

fs.writeFileSync(file, content);

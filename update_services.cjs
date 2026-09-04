const fs = require('fs');
let content = fs.readFileSync('src/components/pages/ServicesView.tsx', 'utf8');

const oldBlockStart = '<AnimatePresence mode="wait">';
const oldBlockEnd = '</motion.div>\n          </AnimatePresence>';

const startIndex = content.indexOf(oldBlockStart);
const endIndex = content.indexOf(oldBlockEnd) + oldBlockEnd.length;

if (startIndex !== -1 && endIndex !== -1) {
  const newBlock = `<AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-3xl overflow-hidden border border-cyan-900/30 shadow-[0_0_50px_rgba(34,211,238,0.1)] min-h-[600px] flex flex-col justify-center items-center group"
            >
              {/* Cinematic Background Image */}
              <motion.img
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8, ease: "easeOut" }}
                src={activeService.image}
                alt={activeService.title}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/70 z-0 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80 z-0 pointer-events-none" />

              {/* Centered Content Overlay */}
              <div className="relative z-10 flex flex-col items-center text-center p-6 sm:p-12 max-w-4xl mx-auto space-y-8">
                
                <div className="space-y-4">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                  >
                    {activeService.category} DIVISION
                  </motion.span>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                  >
                    {activeService.title}
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
                  >
                    {activeService.fullDesc}
                  </motion.p>
                </div>

                {/* Tech Stack Chips Centered */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-2 max-w-2xl"
                >
                  {activeService.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-slate-900/80 border border-cyan-900/50 text-cyan-100 text-xs font-mono font-semibold backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Stats Strip */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl pt-6 border-t border-white/10 font-mono"
                >
                  {activeService.stats.map((st, sIdx) => (
                    <div key={sIdx} className="p-4 bg-slate-950/60 border border-white/5 rounded-2xl backdrop-blur-md">
                      <div className="text-xs text-slate-400 uppercase tracking-widest">{st.label}</div>
                      <div className="text-lg sm:text-xl font-bold text-cyan-400 mt-1">{st.value}</div>
                    </div>
                  ))}
                </motion.div>

                {/* Action CTA */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="pt-6"
                >
                  <button
                    onClick={() => onOpenQuoteModal(activeService.id)}
                    className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all uppercase tracking-wide"
                  >
                    Request Technical Quotation
                  </button>
                </motion.div>

              </div>
            </motion.div>
          </AnimatePresence>`;

  content = content.substring(0, startIndex) + newBlock + content.substring(endIndex);
  
  // Also we should remove the border from the container that wraps the AnimatePresence since we are making the motion.div the beautiful card itself.
  content = content.replace(
    '<div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-xl p-6 sm:p-10 min-h-[600px] relative">',
    '<div className="relative">'
  );

  fs.writeFileSync('src/components/pages/ServicesView.tsx', content);
  console.log("Services layout updated");
} else {
  console.log("Could not find block");
}

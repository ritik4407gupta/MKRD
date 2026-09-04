const fs = require('fs');

const files = [
  'src/components/pages/ServicesView.tsx',
  'src/components/pages/SimulationsView.tsx',
  'src/components/pages/InfrastructureView.tsx',
  'src/components/pages/ContactView.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Ensure motion is imported if not present
  if (!content.includes("from 'motion/react'")) {
    content = content.replace("import React", "import React from 'react';\nimport { motion } from 'motion/react';\n//");
  }

  // 1. Add relative and overflow-hidden to the header section
  content = content.replace(/<section className="bg-gradient-to-b/g, '<section className="relative overflow-hidden bg-gradient-to-b');

  // 2. Add glow orb and wrap inner content with z-10
  const headerStart = '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">';
  const glowOrb = `
        {/* Animated Glow Behind Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/30 blur-[120px] rounded-full pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">`;
  
  if (content.includes(headerStart)) {
    content = content.replace(headerStart, glowOrb);
  }

  // 3. Animate the h1
  content = content.replace(/<h1 className="text-4xl/g, '<motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-4xl');
  content = content.replace(/<\/h1>/g, '</motion.h1>');

  // 4. Animate the p (only the first one which is the description max-w-2xl)
  content = content.replace(/<p className="text-base text-slate-400 max-w-2xl/g, '<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="text-base text-slate-400 max-w-2xl');
  // Replacing </p> safely for the description: since we only want the first one, maybe regex is too loose. 
  // Actually, replacing all <p> in the header is fine, but it's hard. Let's replace </p> where it matches the description end.
  // We'll leave the closing tag as </p> because Framer motion allows <motion.p>...</motion.p> but <motion.p>...</p> is invalid JSX.
  // Let's fix that.
  content = content.replace(/<\/p>(\s*<div className="flex flex-wrap items-center)/, '</motion.p>$1');
  // For pages that don't have the div right after:
  content = content.replace(/<\/p>(\s*<div className="pt-6)/, '</motion.p>$1'); // SimulationsView
  content = content.replace(/<\/p>(\s*<\/div>\s*<\/section>)/, '</motion.p>$1'); // ServicesView might not have anything after p in header? Wait, let's check ServicesView header.
  
  fs.writeFileSync(file, content);
}

console.log("Animations added");

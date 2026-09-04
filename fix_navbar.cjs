const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Replace white navbar background with dark one
content = content.replace(
  "'max-w-7xl bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl px-5 py-3 shadow-md'",
  "'max-w-7xl bg-slate-950/70 backdrop-blur-md border border-slate-800 rounded-2xl px-5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'"
);

// Make isDarkThemeNav always true since all pages are now dark
content = content.replace(
  'const isDarkThemeNav = isScrolled || isTransparent ||',
  'const isDarkThemeNav = true || isScrolled || isTransparent ||'
);

fs.writeFileSync('src/components/Navbar.tsx', content);

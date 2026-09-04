const fs = require('fs');

let content = fs.readFileSync('src/components/pages/ContactView.tsx', 'utf8');

// 1. Add import
content = content.replace(
  "import { COMPANY_DETAILS, SERVICES } from '../../data/mkrdData';",
  "import { COMPANY_DETAILS, SERVICES } from '../../data/mkrdData';\nimport { MkrdCinematicBackground } from '../MkrdCinematicBackground';"
);

// 2. Add component and `relative` to the main div
content = content.replace(
  '<div className="space-y-16 pb-16 bg-[#020617] min-h-[100vh] text-slate-300 pt-8">',
  '<div className="relative space-y-16 pb-16 bg-[#020617] min-h-[100vh] text-slate-300 pt-8 overflow-hidden">\n      <MkrdCinematicBackground />'
);

// 3. Make sections relative z-10
content = content.replace(
  /<section className="/g,
  '<section className="relative z-10 '
);

fs.writeFileSync('src/components/pages/ContactView.tsx', content);

const fs = require('fs');

let content = fs.readFileSync('src/components/pages/HomeView.tsx', 'utf8');
content = content.replace(
  '  <p\n                initial={{ opacity: 0, y: 20 }}',
  '  <motion.p\n                initial={{ opacity: 0, y: 20 }}'
);
content = content.replace(
  'facility in IMT Manesar.\n              </p>',
  'facility in IMT Manesar.\n              </motion.p>'
);

fs.writeFileSync('src/components/pages/HomeView.tsx', content);

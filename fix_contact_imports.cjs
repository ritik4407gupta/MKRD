const fs = require('fs');

let content = fs.readFileSync('src/components/pages/ContactView.tsx', 'utf8');
content = content.replace(
  '  Globe2,\n  Clock',
  '  Globe2,\n  Clock,\n  Shield'
);

fs.writeFileSync('src/components/pages/ContactView.tsx', content);

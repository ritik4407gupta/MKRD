const fs = require('fs');
const files = [
  'src/components/pages/ServicesView.tsx',
  'src/components/pages/SimulationsView.tsx',
  'src/components/pages/InfrastructureView.tsx',
  'src/components/pages/ContactView.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  let index = content.indexOf('<motion.p');
  while (index !== -1) {
    const nextP = content.indexOf('</p>', index);
    if (nextP !== -1) {
      content = content.substring(0, nextP) + '</motion.p>' + content.substring(nextP + 4);
    }
    index = content.indexOf('<motion.p', nextP);
  }
  
  fs.writeFileSync(file, content);
}
console.log("Fixed motion.p tags");

const fs = require('fs');
const files = [
  'src/components/pages/ServicesView.tsx',
  'src/components/pages/SimulationsView.tsx',
  'src/components/pages/InfrastructureView.tsx',
  'src/components/pages/ContactView.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find <motion.p and the very next </p>
  const motionPIndex = content.indexOf('<motion.p');
  if (motionPIndex !== -1) {
    const endPIndex = content.indexOf('</p>', motionPIndex);
    if (endPIndex !== -1) {
      content = content.substring(0, endPIndex) + '</motion.p>' + content.substring(endPIndex + 4);
    }
  }
  
  fs.writeFileSync(file, content);
}
console.log("Fixed motion.p closing tags");

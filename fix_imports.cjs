const fs = require('fs');
const files = [
  'src/components/pages/SimulationsView.tsx',
  'src/components/pages/InfrastructureView.tsx',
  'src/components/pages/ContactView.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix the useState mangling
  content = content.replace(
    "import React from 'react';\nimport { motion } from 'motion/react';\n//, { useState } from 'react';",
    "import React, { useState } from 'react';\nimport { motion } from 'motion/react';"
  );
  
  // Fix the Infrastructure mangling
  content = content.replace(
    "import React from 'react';\nimport { motion } from 'motion/react';\n// from 'react';",
    "import React from 'react';\nimport { motion } from 'motion/react';"
  );
  
  fs.writeFileSync(file, content);
}
console.log("Fixed imports");

const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

content = content.replace(
  "const isDarkPage = currentPage !== 'projects';",
  "const isDarkPage = true;"
);

fs.writeFileSync('src/components/Navbar.tsx', content);

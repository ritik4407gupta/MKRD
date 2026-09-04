const fs = require('fs');
let lines = fs.readFileSync('src/components/pages/HomeView.tsx', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('</section>') && lines[i+2] && lines[i+2].includes('FEATURED PROJECTS SHOWCASE')) {
    lines[i] = '        </div>\n      </section>';
    break;
  }
}

fs.writeFileSync('src/components/pages/HomeView.tsx', lines.join('\n'));

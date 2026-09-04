const fs = require('fs');
let content = fs.readFileSync('src/components/pages/ProjectsView.tsx', 'utf8');

content = content.replace(
  "import { ThreeDDigitalExperience } from '../ThreeDDigitalExperience';",
  "import { ThreeDDigitalExperience } from '../ThreeDDigitalExperience';\nimport { RedDotsBackground } from '../RedDotsBackground';"
);

// We place it right after the blur backdrop
const oldBackdrop = `<motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#020617]/40 backdrop-blur-3xl"
              onClick={() => setActiveProject(null)}
            />`;

const newBackdrop = `<motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#020617]/40 backdrop-blur-3xl"
              onClick={() => setActiveProject(null)}
            >
              <RedDotsBackground />
            </motion.div>`;

content = content.replace(oldBackdrop, newBackdrop);
fs.writeFileSync('src/components/pages/ProjectsView.tsx', content);

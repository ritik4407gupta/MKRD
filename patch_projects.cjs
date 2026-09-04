const fs = require('fs');

let content = fs.readFileSync('src/components/pages/ProjectsView.tsx', 'utf8');

// 1. Add import
content = content.replace(
  "import { ProjectCaseStudy } from '../../types';",
  "import { ProjectCaseStudy } from '../../types';\nimport { ThreeDDigitalExperience } from '../ThreeDDigitalExperience';"
);

// 2. Add to project list image side
const imageContainer = `                <motion.img
                  layoutId={\`project-image-\${project.id}\`}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />`;

const imageReplacement = `                {project.id === 'mkrd-cs-04' ? (
                  <div className="w-full h-full relative z-10 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 pointer-events-auto">
                    <ThreeDDigitalExperience />
                  </div>
                ) : (
                  <motion.img
                    layoutId={\`project-image-\${project.id}\`}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                )}`;
content = content.replace(imageContainer, imageReplacement);

// 3. Add to modal
const modalImageContainer = `                <motion.img
                  layoutId={\`project-image-\${activeProject.id}\`}
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover opacity-90"
                />`;

const modalImageReplacement = `                {activeProject.id === 'mkrd-cs-04' ? (
                  <div className="w-full h-full relative z-10 pointer-events-auto">
                    <ThreeDDigitalExperience />
                  </div>
                ) : (
                  <motion.img
                    layoutId={\`project-image-\${activeProject.id}\`}
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                )}`;

content = content.replace(modalImageContainer, modalImageReplacement);

fs.writeFileSync('src/components/pages/ProjectsView.tsx', content);

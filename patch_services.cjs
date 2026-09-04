const fs = require('fs');
const file = 'src/components/ServicesHorizontal.tsx';
let content = fs.readFileSync(file, 'utf8');

// Remove useState for selectedService
content = content.replace(/const \[selectedService, setSelectedService\] = useState<ServiceItem \| null>\(null\);\n/, '');
content = content.replace(/import React, { useState } from 'react';/, "import React from 'react';");

// Remove the modal code block
const modalStart = content.indexOf('{/* Deep-Dive Technical Drawer');
if (modalStart !== -1) {
    const modalEnd = content.lastIndexOf('</section>');
    content = content.substring(0, modalStart) + '    </section>';
}

// Change the button click behavior to navigate to services page instead of opening modal
content = content.replace(/onClick=\{\(\) => setSelectedService\(service\)\}/g, "onClick={() => onNavigate('services')}");

// Fix hover pause by moving the pause logic to the parent group
content = content.replace('animate-scroll-marquee hover:[animation-play-state:paused]', 'animate-scroll-marquee group-hover/slider:[animation-play-state:paused]');

fs.writeFileSync(file, content);

const fs = require('fs');

let content = fs.readFileSync('src/components/pages/ContactView.tsx', 'utf8');

// Fix motion variants
content = content.replace(
  'visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }',
  'visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } }'
);

// Fix COMPANY_DETAILS
content = content.replace(
  'detail1: COMPANY_DETAILS.address.line1,\n              detail2: COMPANY_DETAILS.address.line2,',
  'detail1: COMPANY_DETAILS.address,\n              detail2: "Haryana, India",'
);
content = content.replace(
  'COMPANY_DETAILS.contact.phone',
  'COMPANY_DETAILS.phone'
);
content = content.replace(
  'COMPANY_DETAILS.contact.email',
  'COMPANY_DETAILS.email'
);

fs.writeFileSync('src/components/pages/ContactView.tsx', content);

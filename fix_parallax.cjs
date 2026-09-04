const fs = require('fs');

let content = fs.readFileSync('src/components/pages/HomeView.tsx', 'utf8');

const oldSticky = '<section className="sticky top-24 z-0 bg-[#020617] py-12 lg:py-20 border-y border-slate-800 h-[calc(100vh-6rem)] overflow-hidden flex flex-col justify-center">';
const newSticky = '<section className="sticky bottom-0 z-0 bg-[#020617] py-20 border-y border-slate-800 pb-32">'; // added pb-32 to give some space before the overlay comes up

content = content.replace(oldSticky, newSticky);
fs.writeFileSync('src/components/pages/HomeView.tsx', content);

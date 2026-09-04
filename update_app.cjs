const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(
  '<div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col justify-between">',
  '<div className={`min-h-screen ${currentPage !== "projects" ? "bg-[#020617] text-slate-300 selection:bg-cyan-600" : "bg-[#f8fafc] text-slate-900 selection:bg-blue-600"} selection:text-white flex flex-col justify-between`}>'
);
fs.writeFileSync('src/App.tsx', content);

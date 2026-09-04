const fs = require('fs');

let content = fs.readFileSync('src/components/MkrdCinematicBackground.tsx', 'utf8');

// Increase items per row to 30
content = content.replace(
  'const items = Array.from({ length: 15 });',
  'const items = Array.from({ length: 30 });'
);

// Replace the hardcoded 9 rows with 40 dynamic rows
const oldRows = `        <MarqueeRow speed={35} />
        <MarqueeRow speed={40} reverse />
        <MarqueeRow speed={30} />
        <MarqueeRow speed={45} reverse />
        <MarqueeRow speed={35} />
        <MarqueeRow speed={40} reverse />
        <MarqueeRow speed={30} />
        <MarqueeRow speed={45} reverse />
        <MarqueeRow speed={35} />`;

const newRows = `        {Array.from({ length: 40 }).map((_, i) => (
          <MarqueeRow 
            key={i} 
            speed={30 + (i % 5) * 5} 
            reverse={i % 2 !== 0} 
          />
        ))}`;

content = content.replace(oldRows, newRows);

// Remove items-center justify-center if it limits vertical spread, actually it's fine if we have 40 rows (40 * 112px = 4480px, enough to cover 200vh usually)
// Let's change 200vh to 300vh just to be ultra safe on portrait screens when rotated
content = content.replace(
  'h-[200vh]',
  'h-[300vh]'
);

content = content.replace(
  'w-[200vw]',
  'w-[300vw]'
);

fs.writeFileSync('src/components/MkrdCinematicBackground.tsx', content);

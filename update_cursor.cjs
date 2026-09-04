const fs = require('fs');

let content = fs.readFileSync('src/components/CustomCursor.tsx', 'utf8');

// Replace the inner motion.div
const oldInner = `<motion.div 
          className="bg-white rounded-full shadow-[0_0_12px_4px_rgba(34,211,238,0.6)]"
          animate={{
            width: isPointer ? 16 : 6,
            height: isPointer ? 16 : 6,
            backgroundColor: isPointer ? '#22d3ee' : '#ffffff',
          }}
          transition={{ duration: 0.2 }}
        />`;

const newInner = `<motion.div 
          className="rounded-full"
          animate={{
            width: isPointer ? 12 : 5,
            height: isPointer ? 12 : 5,
            backgroundColor: isPointer ? '#10b981' : '#ffffff',
            boxShadow: isPointer 
              ? '0 0 10px 2px rgba(16, 185, 129, 0.5)' 
              : '0 0 6px 1px rgba(34, 211, 238, 0.4)'
          }}
          transition={{ duration: 0.2 }}
        />`;

if (content.includes(oldInner)) {
  content = content.replace(oldInner, newInner);
} else {
  console.log("Could not find inner cursor div to replace");
}

fs.writeFileSync('src/components/CustomCursor.tsx', content);

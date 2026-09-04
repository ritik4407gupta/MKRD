const fs = require('fs');
const https = require('https');

const file = fs.readFileSync('src/data/mkrdData.ts', 'utf8');
const urls = [...file.matchAll(/image:\s*"(https:\/\/images\.unsplash\.com\/[^"]+)"/g)].map(m => m[1]);

urls.forEach(url => {
  https.get(url, (res) => {
    if (res.statusCode !== 200 && res.statusCode !== 302) {
      console.log(`Failed: ${res.statusCode} - ${url}`);
    } else {
      console.log(`OK: ${res.statusCode} - ${url}`);
    }
  }).on('error', (e) => {
    console.error(`Error: ${e.message} - ${url}`);
  });
});

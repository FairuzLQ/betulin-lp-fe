// generate-sitemap.js
const fs = require('fs');
const path = require('path');

// Define all routes in your application
const urls = [
  { loc: 'https://betulin.co.id/' },
  { loc: 'https://betulin.co.id/karir' },
  { loc: 'https://betulin.co.id/layanan' },
  { loc: 'https://betulin.co.id/blog' },
  { loc: 'https://betulin.co.id/tentang-kami' },
  { loc: 'https://betulin.co.id/syarat-ketentuan' },
  { loc: 'https://betulin.co.id/kebijakan-privasi' },
  // Add other static pages here
];

// Generate the XML content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((url) => `<url><loc>${url.loc}</loc></url>`)
    .join('')}
</urlset>`;

// Write sitemap.xml to the public folder
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap created successfully!');

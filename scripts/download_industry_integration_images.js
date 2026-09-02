const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'industry-integration');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const downloads = [
  { url: 'https://geetauniversity.edu.in/uploads/all/252/conversions/new-building-3-(1)-full.webp', filename: 'hero-building.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/1752/INurture.avif', filename: 'inurture.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/1753/just-agriculture.webp', filename: 'just-agriculture.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/1749/CELLSTRAT-HUB.webp', filename: 'cellstrat-hub.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/1750/HINDUSTAN-AGRI-RESEARCH-WELFARE-SOCIETY.webp', filename: 'hindustan-agri.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/1754/plantica.webp', filename: 'plantica.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/1751/IMAGINXP.webp', filename: 'imaginxp.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/2080/campus.webp', filename: 'campus-ecosystem.webp' }
];

function downloadFile({ url, filename }) {
  return new Promise((resolve) => {
    const filePath = path.join(targetDir, filename);
    const file = fs.createWriteStream(filePath);
    
    const request = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`[Success] Downloaded ${filename}`);
          resolve();
        });
      } else {
        console.error(`[Failed] ${filename}: HTTP ${response.statusCode}`);
        resolve();
      }
    });

    request.on('error', (err) => {
      console.error(`[Error] ${filename}: ${err.message}`);
      resolve();
    });
  });
}

async function run() {
  console.log('Downloading Industry Integration assets...');
  for (const item of downloads) {
    await downloadFile(item);
  }
  console.log('Download complete!');
}

run();

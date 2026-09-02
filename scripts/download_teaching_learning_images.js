const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'teaching-learning-practices');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const downloads = [
  { url: 'https://geetauniversity.edu.in/uploads/all/253/conversions/f-block-(1)-full.webp', filename: 'hero-f-block.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/21/hero-1024x682.webp', filename: 'teaching-practice-hero.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/20/1.webp', filename: 'low-stakes-testing.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/19/8.jpg', filename: 'peer-instruction.jpg' },
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
  console.log('Downloading Teaching & Learning Practices assets...');
  for (const item of downloads) {
    await downloadFile(item);
  }
  console.log('Download complete!');
}

run();

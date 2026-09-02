const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'library');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const downloads = [
  { url: 'https://geetauniversity.edu.in/uploads/all/297/Best-Library-Resources-for-Teachers.jpg', filename: 'physical-books.jpg' },
  { url: 'https://geetauniversity.edu.in/uploads/all/298/download-8.jpeg', filename: 'ebooks.jpg' },
  { url: 'https://geetauniversity.edu.in/uploads/all/300/pngtree-an-old-bookcase-in-a-library-image_2642908.jpg', filename: 'ejournals.jpg' },
  { url: 'https://geetauniversity.edu.in/uploads/all/301/13.webp', filename: 'elibrary.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/302/5552881148_cef75225b0_o-scaled.jpg', filename: 'resource-library.jpg' },
  { url: 'https://geetauniversity.edu.in/uploads/all/299/pexels-andrea-piacquadio-3762800.webp', filename: 'erepository.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/2080/campus.webp', filename: 'hero-bg.webp' }
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
  console.log('Downloading Central Library page assets from geetauniversity.edu.in...');
  for (const item of downloads) {
    await downloadFile(item);
  }
  console.log('Download complete!');
}

run();

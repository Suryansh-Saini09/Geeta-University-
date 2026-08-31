const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'international-admissions');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const downloads = [
  { url: 'https://geetauniversity.edu.in/uploads/all/1722/global.jpg', filename: 'hero.jpg' },
  { url: 'https://geetauniversity.edu.in/uploads/all/1756/Dr.-Ajeet-Kumar-Nedungadi.jpeg', filename: 'dr-ajeet-kumar.jpeg' },
  { url: 'https://geetauniversity.edu.in/uploads/all/1645/1.jpg', filename: 'testi-shaam.jpg' },
  { url: 'https://geetauniversity.edu.in/uploads/all/1646/2.jpg', filename: 'testi-bikas.jpg' },
  { url: 'https://geetauniversity.edu.in/uploads/all/1647/3.jpg', filename: 'testi-shafiqul.jpg' },
  { url: 'https://geetauniversity.edu.in/uploads/all/1648/4.jpg', filename: 'testi-cornelius.jpg' },
  { url: 'https://geetauniversity.edu.in/uploads/all/1649/5.jpg', filename: 'testi-meroslaf.jpg' },
  { url: 'https://geetauniversity.edu.in/uploads/all/1650/6.jpg', filename: 'testi-wais.jpg' },
  { url: 'https://geetauniversity.edu.in/uploads/all/2080/campus.webp', filename: 'campus-ecosystem.webp' },

  // Logos
  { url: 'https://geetauniversity.edu.in/uploads/all/70/conversions/4-full.webp', filename: 'logo-1.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/71/conversions/5-full.webp', filename: 'logo-2.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/72/conversions/6-full.webp', filename: 'logo-3.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/73/conversions/7-full.webp', filename: 'logo-4.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/74/conversions/8-full.webp', filename: 'logo-5.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/75/conversions/11-full.webp', filename: 'logo-6.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/76/conversions/17-1-full.webp', filename: 'logo-7.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/77/conversions/19-1-full.webp', filename: 'logo-8.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/69/conversions/9-full.webp', filename: 'logo-9.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/68/conversions/14-1-full.webp', filename: 'logo-10.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/67/conversions/10-full.webp', filename: 'logo-11.webp' },
  { url: 'https://geetauniversity.edu.in/uploads/all/66/conversions/1-1-full.webp', filename: 'logo-12.webp' },
];

function downloadFile({ url, filename }) {
  return new Promise((resolve, reject) => {
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
          console.log(`Saved ${filename}`);
          resolve();
        });
      } else {
        console.error(`Failed ${filename}: HTTP ${response.statusCode}`);
        resolve();
      }
    });

    request.on('error', (err) => {
      console.error(`Error downloading ${filename}: ${err.message}`);
      resolve();
    });
  });
}

async function run() {
  console.log('Downloading assets for International Admissions...');
  for (const item of downloads) {
    await downloadFile(item);
  }
  console.log('Download complete!');
}

run();

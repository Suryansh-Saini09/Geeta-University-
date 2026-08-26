const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const images = [
  { name: "placement-banner.jpg", url: "https://geetauniversity.edu.in/uploads/all/1864/placement.jpg" },
  { name: "amit-kumar-verma.webp", url: "https://geetauniversity.edu.in/uploads/all/2707/Amit-Kumar-verma.webp" },
  { name: "cdc-overview.webp", url: "https://geetauniversity.edu.in/uploads/all/2243/1.webp" },
  { name: "placement-snapshot-chart.webp", url: "https://geetauniversity.edu.in/uploads/all/2244/2.webp" },
  { name: "placement-day-1.webp", url: "https://geetauniversity.edu.in/uploads/all/2248/6.webp" },
  { name: "placement-day-2.webp", url: "https://geetauniversity.edu.in/uploads/all/2247/5.webp" },
  { name: "placement-day-3.webp", url: "https://geetauniversity.edu.in/uploads/all/2249/7.webp" },
  { name: "placement-day-4.webp", url: "https://geetauniversity.edu.in/uploads/all/2246/4.webp" },
  { name: "placement-day-5.webp", url: "https://geetauniversity.edu.in/uploads/all/2245/3.webp" },
  { name: "placement-day-6.webp", url: "https://geetauniversity.edu.in/uploads/all/2251/9.webp" },
  { name: "placement-day-7.webp", url: "https://geetauniversity.edu.in/uploads/all/2250/8.webp" },
  { name: "drive-1.jpg", url: "https://geetauniversity.edu.in/uploads/all/1764/29.jpg" },
  { name: "drive-2.jpg", url: "https://geetauniversity.edu.in/uploads/all/1762/30.jpg" },
  { name: "drive-3.jpg", url: "https://geetauniversity.edu.in/uploads/all/1760/35.jpg" },
  { name: "drive-4.jpg", url: "https://geetauniversity.edu.in/uploads/all/1758/36.jpg" },
  { name: "drive-5.jpg", url: "https://geetauniversity.edu.in/uploads/all/1765/37.jpg" },
  { name: "hr-vinin.jpg", url: "https://geetauniversity.edu.in/uploads/all/1762/30.jpg" },
  { name: "hr-aman.jpg", url: "https://geetauniversity.edu.in/uploads/all/1759/31.jpg" },
  { name: "hr-nidhi.jpg", url: "https://geetauniversity.edu.in/uploads/all/1761/32.jpg" },
  { name: "hr-arun.jpg", url: "https://geetauniversity.edu.in/uploads/all/1763/33.jpg" },
];

const dir = path.join(__dirname, '..', 'public', 'placements');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return reject(new Error(`Failed with status code: ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const item of images) {
    const dest = path.join(dir, item.name);
    try {
      await downloadFile(item.url, dest);
      console.log(`Downloaded ${item.name}`);
    } catch (err) {
      console.error(`Error ${item.name}:`, err.message);
    }
  }
  console.log('Done!');
}

run();

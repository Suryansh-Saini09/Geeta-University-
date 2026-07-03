const fs = require('fs');
const https = require('https');
const path = require('path');

const recruiters = [
  { name: "amazon", url: "https://logo.clearbit.com/amazon.in" }, // clearbit might be dead, let's use hunter
  { name: "IndiaMART", url: "https://logo.clearbit.com/indiamart.com" },
  { name: "upGrad", url: "https://logo.clearbit.com/upgrad.com" },
  { name: "zomato", url: "https://logo.clearbit.com/zomato.com" },
  { name: "ProGrad", url: "https://logo.clearbit.com/prograd.org" },
  { name: "PHILIPS", url: "https://logo.clearbit.com/philips.com" },
  { name: "Central Park", url: "https://logo.clearbit.com/centralpark.in" },
  { name: "Profunnel", url: "https://logo.clearbit.com/profunnel.io" },
  { name: "Ubiquiti", url: "https://logo.clearbit.com/ui.com" },
  { name: "Gemini Solutions", url: "https://logo.clearbit.com/geminisolutions.com" },
  { name: "Chegg", url: "https://logo.clearbit.com/chegg.com" },
  { name: "jaro education", url: "https://logo.clearbit.com/jaroeducation.com" },
  { name: "policybazaar", url: "https://logo.clearbit.com/policybazaar.com" },
  { name: "Aditya Birla Capital", url: "https://logo.clearbit.com/adityabirlacapital.com" },
  { name: "Axis Bank", url: "https://logo.clearbit.com/axisbank.com" },
  { name: "HDFC Life", url: "https://logo.clearbit.com/hdfclife.com" },
  { name: "paytm", url: "https://logo.clearbit.com/paytm.com" },
  { name: "Bajaj Capital", url: "https://logo.clearbit.com/bajajcapital.com" },
];

const domains = [
  "amazon.in", "indiamart.com", "upgrad.com", "zomato.com", "prograd.org",
  "philips.com", "centralpark.in", "profunnel.io", "ui.com", "geminisolutions.com",
  "chegg.com", "jaroeducation.com", "policybazaar.com", "adityabirlacapital.com",
  "axisbank.com", "hdfclife.com", "paytm.com", "bajajcapital.com"
];

const names = [
  "amazon", "IndiaMART", "upGrad", "zomato", "ProGrad", "PHILIPS",
  "Central Park", "Profunnel", "Ubiquiti", "Gemini Solutions", "Chegg",
  "jaro education", "policybazaar", "Aditya Birla Capital", "Axis Bank",
  "HDFC Life", "paytm", "Bajaj Capital"
];

const dir = path.join(__dirname, 'public', 'images', 'recruiters');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

let index = 0;
function downloadNext() {
  if (index >= domains.length) return;
  const domain = domains[index];
  const name = names[index];
  const url = `https://logos.hunter.io/${domain}`;
  const filename = name.replace(/\s+/g, '-').toLowerCase() + '.png';
  
  const file = fs.createWriteStream(path.join(dir, filename));
  https.get(url, function(response) {
    if(response.statusCode === 200 || response.statusCode === 301 || response.statusCode === 302) {
      if (response.statusCode === 301 || response.statusCode === 302) {
          https.get(response.headers.location, function(res) {
              res.pipe(file);
              console.log('Downloaded ' + name);
              index++;
              downloadNext();
          });
      } else {
        response.pipe(file);
        console.log('Downloaded ' + name);
        index++;
        downloadNext();
      }
    } else {
      console.log('Failed to download ' + name + ' - Status: ' + response.statusCode);
      index++;
      downloadNext();
    }
  }).on('error', function(err) {
    console.error('Error downloading ' + name + ': ' + err.message);
    index++;
    downloadNext();
  });
}

downloadNext();

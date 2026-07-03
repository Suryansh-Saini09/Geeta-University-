const fs = require('fs');
const https = require('https');
const path = require('path');

const recruiters = [
  { name: "amazon", url: "https://logo.clearbit.com/amazon.com" },
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

const dir = path.join(__dirname, 'public', 'recruiters');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

recruiters.forEach(recruiter => {
  const filename = recruiter.name.replace(/\s+/g, '-').toLowerCase() + '.png';
  const file = fs.createWriteStream(path.join(dir, filename));
  https.get(recruiter.url, function(response) {
    if(response.statusCode === 200) {
      response.pipe(file);
      console.log('Downloaded ' + recruiter.name);
    } else {
      console.log('Failed to download ' + recruiter.name + ' - Status: ' + response.statusCode);
      // Wait, Clearbit might return 404 or something else. We'll handle it.
    }
  }).on('error', function(err) {
    console.error('Error downloading ' + recruiter.name + ': ' + err.message);
  });
});

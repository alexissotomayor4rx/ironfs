const fs = require('fs');
const path = require('path');

const tsxPath = path.join(__dirname, 'src', 'app', 'projects', 'page.tsx');
const content = fs.readFileSync(tsxPath, 'utf8');

const regex = /\/images\/project_gallery\/[^"']+/g;
const matches = content.match(regex) || [];

let broken = [];
let allSet = new Set(matches);

allSet.forEach(imgUrl => {
  // convert url to local path
  // imgUrl is like /images/project_gallery/222013-North Moore.jpeg
  const localPath = path.join(__dirname, 'public', decodeURIComponent(imgUrl));
  if (!fs.existsSync(localPath)) {
    broken.push(imgUrl);
  }
});

if (broken.length > 0) {
  console.log("BROKEN_LINKS_FOUND");
  console.log(JSON.stringify(broken, null, 2));
} else {
  console.log("ALL_LINKS_VALID");
}

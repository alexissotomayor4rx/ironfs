const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'public', 'images', 'project_gallery');

// 1. Gather all existing files
function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else {
      // Exclude HEIC/heic
      if (file.match(/\.(jpeg|jpg|png|webp)$/i)) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const existingFiles = getFiles(galleryDir).map(p => p.replace(galleryDir, '/images/project_gallery').replace(/\\/g, '/'));

function findValidAlternative(brokenPath) {
  const baseName = path.basename(brokenPath);
  // Find any existing file that has the same basename
  const valid = existingFiles.find(p => path.basename(p) === baseName);
  return valid || null;
}

// 2. Fix page.tsx (Home Page)
const homePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

const regex = /\/images\/project_gallery\/[^"']+/g;
let homeMatches = homeContent.match(regex) || [];

let homeReplacements = 0;
homeMatches.forEach(imgUrl => {
  const localPath = path.join(__dirname, 'public', decodeURIComponent(imgUrl));
  if (!fs.existsSync(localPath)) {
    const valid = findValidAlternative(imgUrl);
    if (valid) {
      homeContent = homeContent.replace(imgUrl, valid);
      homeReplacements++;
    } else {
      console.log(`Could not find alternative for ${imgUrl} in home page`);
    }
  }
});

fs.writeFileSync(homePath, homeContent);
console.log(`Fixed ${homeReplacements} links in home page.`);


// 3. Fix projects/page.tsx
const projectsPath = path.join(__dirname, 'src', 'app', 'projects', 'page.tsx');
let projectsContent = fs.readFileSync(projectsPath, 'utf8');

let projectsMatches = projectsContent.match(regex) || [];
let brokenRemoved = 0;
let fixed = 0;

// Since projects page has an array, we can just replace or remove
projectsMatches.forEach(imgUrl => {
  if (imgUrl.toLowerCase().endsWith('.heic')) {
    // Remove HEIC entirely
    const re = new RegExp(`\\s*"${imgUrl}"(,|)`, 'g');
    projectsContent = projectsContent.replace(re, '');
    brokenRemoved++;
    return;
  }

  const localPath = path.join(__dirname, 'public', decodeURIComponent(imgUrl));
  if (!fs.existsSync(localPath)) {
    const valid = findValidAlternative(imgUrl);
    if (valid) {
      projectsContent = projectsContent.replace(imgUrl, valid);
      fixed++;
    } else {
      // Remove it from the array if we can't find it
      // this relies on it being in a JS array like: "url",
      const re = new RegExp(`\\s*"${imgUrl}"(,|)`, 'g');
      projectsContent = projectsContent.replace(re, '');
      brokenRemoved++;
    }
  }
});

// Also check for empty projects or clean up trailing commas
// Actually, prettier will fix it, but let's be safe.
fs.writeFileSync(projectsPath, projectsContent);
console.log(`Fixed ${fixed} and removed ${brokenRemoved} broken/HEIC links in projects page.`);


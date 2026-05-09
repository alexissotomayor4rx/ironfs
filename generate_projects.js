const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, 'public', 'images', 'project_gallery');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else {
      if (file.match(/\.(jpeg|jpg|png|webp|heic)$/i)) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const allFiles = getFiles(galleryDir);

// Group files into projects based on their directory or filename
const projectsMap = {};

allFiles.forEach(file => {
  const relativePath = file.replace(galleryDir, '').replace(/\\/g, '/');
  const webPath = '/images/project_gallery' + relativePath;
  
  const parts = relativePath.split('/').filter(Boolean);
  
  let projectName = '';
  let category = 'Commercial';
  
  if (parts.length > 1) {
    if (parts.length > 2) {
      projectName = parts[1];
    } else {
      const baseName = path.basename(file, path.extname(file));
      projectName = baseName.replace(/^\d+-/, '').replace(/\d+$/, '').replace(/_/, ' ').trim();
    }
  } else {
    const baseName = path.basename(file, path.extname(file));
    projectName = baseName.replace(/^\d+-/, '').replace(/\d+$/, '').replace(/_/, ' ').trim();
  }
  
  projectName = projectName.replace(/([a-zA-Z])([A-Z][a-z])/g, '$1 $2');
  
  if (projectName.toLowerCase().includes('inova')) projectName = 'Inova Medical Center';
  if (projectName.toLowerCase().includes('maryland')) projectName = '1250 Maryland Ave';
  if (projectName.toLowerCase().includes('north moore')) projectName = 'North Moore';
  if (projectName.toLowerCase().includes('crystal metro')) projectName = 'Crystal Metro Entrance';
  if (projectName.toLowerCase().includes('mars arcadia')) projectName = 'Mars Arcadia';
  if (projectName.toLowerCase().includes('omvhs')) projectName = 'OMVHS';
  if (projectName.toLowerCase().includes('u-market')) projectName = 'U-Market';
  if (projectName.toLowerCase().includes('malcolm')) projectName = 'Malcolm X Elementary';
  if (projectName.toLowerCase().includes('templeton') || projectName.toLowerCase().includes('tempIeton')) projectName = 'Templeton Elementary';
  if (projectName.toLowerCase().includes('stead park')) projectName = 'Stead Park Recreation Center';
  if (projectName.toLowerCase().includes('congress heights')) projectName = 'Congress Heights Recreation Center';
  if (projectName.toLowerCase().includes('thomas')) projectName = 'Thomas';
  
  if (!projectsMap[projectName]) {
    projectsMap[projectName] = {
      id: projectName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      name: projectName,
      category: 'Commercial',
      cover: webPath,
      images: []
    };
  }
  
  // Dedup images
  if (!projectsMap[projectName].images.includes(webPath)) {
    projectsMap[projectName].images.push(webPath);
  }
});

const finalProjects = Object.values(projectsMap).map(p => {
  p.cover = p.images.find(img => !/\d\.(jpe?g|png)$/i.test(img)) || p.images[0];
  return p;
});

// Update page.tsx
const tsxPath = path.join(__dirname, 'src', 'app', 'projects', 'page.tsx');
let tsxCode = fs.readFileSync(tsxPath, 'utf8');

const start = tsxCode.indexOf('const projects: Project[] = [');
if (start === -1) throw new Error("Could not find start");
const endStr = '];\n\n/* ── Component ───────────────────────────────────────────── */';
const end = tsxCode.indexOf('];', start) + 2;

const newProjectsCode = 'const projects: Project[] = ' + JSON.stringify(finalProjects, null, 2) + ';';
tsxCode = tsxCode.substring(0, start) + newProjectsCode + tsxCode.substring(end);

fs.writeFileSync(tsxPath, tsxCode);
console.log("Updated src/app/projects/page.tsx with " + finalProjects.length + " projects.");

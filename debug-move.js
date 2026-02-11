import fs from 'fs';
import path from 'path';

const logFile = 'move-log.txt';
function log(msg) {
  fs.appendFileSync(logFile, msg + '\n');
}

const sourceDir = path.resolve('data');
const destDir = path.resolve('public', 'gallery');

log(`Source: ${sourceDir}`);
log(`Dest: ${destDir}`);

if (!fs.existsSync(destDir)) {
  try {
    fs.mkdirSync(destDir, { recursive: true });
    log(`Created directory: ${destDir}`);
  } catch (e) {
    log(`Error creating directory: ${e.message}`);
  }
}

try {
  const files = fs.readdirSync(sourceDir);
  log(`Found ${files.length} files in source`);
  
  files.forEach(file => {
    if (path.extname(file) === '.jpeg') {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file);
      try {
        fs.copyFileSync(sourcePath, destPath);
        log(`Copied ${file}`);
      } catch (e) {
        log(`Error copying ${file}: ${e.message}`);
      }
    }
  });
} catch (e) {
  log(`Error reading source directory: ${e.message}`);
}

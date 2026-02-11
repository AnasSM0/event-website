import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, 'data');
const destDir = path.resolve(__dirname, 'public', 'gallery');

console.log(`Source Directory: ${sourceDir}`);
console.log(`Destination Directory: ${destDir}`);

if (!fs.existsSync(destDir)) {
  console.log('Destination directory does not exist, creating...');
  fs.mkdirSync(destDir, { recursive: true });
} else {
  console.log('Destination directory exists.');
}

try {
  const files = fs.readdirSync(sourceDir);
  console.log(`Found ${files.length} files in source directory.`);
  
  let copiedCount = 0;
  files.forEach(file => {
    if (file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.jpg')) {
      const srcPath = path.join(sourceDir, file);
      const dstPath = path.join(destDir, file);
      
      try {
        fs.copyFileSync(srcPath, dstPath);
        console.log(`Copied ${file} to ${dstPath}`);
        copiedCount++;
      } catch (err) {
        console.error(`Error copying ${file}: ${err.message}`);
      }
    }
  });
  console.log(`Successfully copied ${copiedCount} images.`);
} catch (err) {
  console.error(`Error reading source directory: ${err.message}`);
}

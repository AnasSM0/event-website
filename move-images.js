import fs from 'fs';
import path from 'path';

const sourceDir = path.resolve('data');
const destDir = path.resolve('public', 'gallery');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`Created directory: ${destDir}`);
}

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Error reading source directory:', err);
    return;
  }

  files.forEach(file => {
    if (path.extname(file) === '.jpeg') {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file);

      fs.copyFile(sourcePath, destPath, (err) => {
        if (err) {
          console.error(`Error moving file ${file}:`, err);
        } else {
          console.log(`Moved ${file}`);
        }
      });
    }
  });
});

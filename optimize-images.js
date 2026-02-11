import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryDir = path.resolve(__dirname, 'public', 'gallery');

console.log(`Optimizing images in: ${galleryDir}`);

if (!fs.existsSync(galleryDir)) {
  console.error('Gallery directory not found!');
  process.exit(1);
}

fs.readdir(galleryDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    if (file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.jpg')) {
      const filePath = path.join(galleryDir, file);
      const tempPath = path.join(galleryDir, `temp_${file}`);

      sharp(filePath)
        .jpeg({ quality: 75, mozjpeg: true })
        .toFile(tempPath)
        .then(() => {
          fs.renameSync(tempPath, filePath);
          console.log(`Optimized: ${file}`);
        })
        .catch(err => {
          console.error(`Error optimizing ${file}:`, err);
        });
    }
  });
});

/**
 * Конвертация PNG → WebP для оптимизации Performance.
 * Конвертирует все PNG из public/assets/ в WebP, 
 * пропуская файлы, у которых уже есть WebP-версия.
 */
import sharp from 'sharp';
import { readdirSync, statSync, existsSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const QUALITY = 82; // Оптимальный баланс качество/размер

function findPngFiles(dir, results = []) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      findPngFiles(fullPath, results);
    } else if (extname(entry).toLowerCase() === '.png') {
      results.push(fullPath);
    }
  }
  return results;
}

async function convertToWebp(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, '.webp');
  
  if (existsSync(webpPath)) {
    const pngSize = statSync(pngPath).size;
    const webpSize = statSync(webpPath).size;
    console.log(`  SKIP (already exists) ${basename(pngPath)} (PNG: ${(pngSize/1024).toFixed(0)}KB, WebP: ${(webpSize/1024).toFixed(0)}KB)`);
    return { skipped: true, saved: 0 };
  }
  
  const pngSize = statSync(pngPath).size;
  
  await sharp(pngPath)
    .webp({ quality: QUALITY })
    .toFile(webpPath);
  
  const webpSize = statSync(webpPath).size;
  const saved = pngSize - webpSize;
  const percent = ((saved / pngSize) * 100).toFixed(1);
  
  console.log(`  ✅ ${basename(pngPath)} → ${basename(webpPath)} (${(pngSize/1024).toFixed(0)}KB → ${(webpSize/1024).toFixed(0)}KB, -${percent}%)`);
  return { skipped: false, saved };
}

async function main() {
  console.log('🔄 Конвертация PNG → WebP...\n');
  
  // Ищем PNG только в assets/ (не иконки)
  const assetDirs = ['assets/services', 'assets/images', 'assets/why-us', 'assets/before-after', 'assets/gallery'];
  let totalSaved = 0;
  let converted = 0;
  let skipped = 0;
  
  for (const dir of assetDirs) {
    const fullDir = join(publicDir, dir);
    if (!existsSync(fullDir)) continue;
    
    console.log(`📁 ${dir}/`);
    const pngFiles = findPngFiles(fullDir);
    
    for (const pngPath of pngFiles) {
      const result = await convertToWebp(pngPath);
      if (result.skipped) {
        skipped++;
      } else {
        converted++;
        totalSaved += result.saved;
      }
    }
    console.log('');
  }
  
  // Также конвертировать hero images
  const heroDir = join(publicDir, 'images');
  if (existsSync(heroDir)) {
    console.log('📁 images/ (hero)');
    const pngFiles = findPngFiles(heroDir);
    for (const pngPath of pngFiles) {
      const result = await convertToWebp(pngPath);
      if (result.skipped) skipped++;
      else { converted++; totalSaved += result.saved; }
    }
    console.log('');
  }
  
  console.log(`\n📊 Итого:`);
  console.log(`   Конвертировано: ${converted} файлов`);
  console.log(`   Пропущено: ${skipped} файлов`);
  console.log(`   Экономия: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

main().catch(console.error);

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const optimizeImages = async () => {
    const dirs = [
        join(__dirname, '../public/assets/services'),
        join(__dirname, '../public/assets/images'),
        join(__dirname, '../public/images'),
    ];

    let totalConverted = 0;
    let totalSaved = 0;

    for (const dir of dirs) {
        console.log(`\n📁 Processing: ${dir}`);

        try {
            const files = await readdir(dir);

            for (const file of files) {
                const ext = extname(file).toLowerCase();
                if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

                const input = join(dir, file);
                const output = input.replace(ext, '.webp');

                try {
                    // Get original file size
                    const originalStats = await stat(input);
                    const originalSize = originalStats.size;

                    // Convert to WebP
                    await sharp(input)
                        .webp({ quality: 85, effort: 6 })
                        .toFile(output);

                    // Get new file size
                    const newStats = await stat(output);
                    const newSize = newStats.size;
                    const saved = originalSize - newSize;
                    const savedPercent = ((saved / originalSize) * 100).toFixed(1);

                    totalConverted++;
                    totalSaved += saved;

                    console.log(`  ✓ ${file} → ${file.replace(ext, '.webp')}`);
                    console.log(`    ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (saved ${savedPercent}%)`);
                } catch (err) {
                    console.error(`  ✗ Failed to convert ${file}:`, err.message);
                }
            }
        } catch (err) {
            console.log(`  ⚠ Directory not found or inaccessible: ${dir}`);
        }
    }

    console.log(`\n🎉 Optimization complete!`);
    console.log(`   Total files converted: ${totalConverted}`);
    console.log(`   Total space saved: ${(totalSaved / 1024).toFixed(1)}KB`);
};

optimizeImages().catch((err) => {
    console.error('Error:', err);
    process.exit(1);
});

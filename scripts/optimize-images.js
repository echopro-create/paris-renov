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
        join(__dirname, '../public/assets/gallery'),
        join(__dirname, '../public/assets/gallery/real'),
        join(__dirname, '../public/assets/before-after'),
    ];

    let totalConverted = 0;
    let totalSaved = 0;

    console.log('🚀 Starting Image Optimization (WebP + AVIF)...');

    for (const dir of dirs) {
        console.log(`\n📁 Processing: ${dir}`);

        try {
            const files = await readdir(dir);

            for (const file of files) {
                const ext = extname(file).toLowerCase();
                // Skip if not an image or if it's already optimized
                if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
                if (file.includes('-optimized')) continue;

                const input = join(dir, file);

                // Get original stats
                const originalStats = await stat(input);
                const originalSize = originalStats.size;

                // Define outputs
                const outputs = [
                    { format: 'webp', path: input.replace(ext, '.webp'), options: { quality: 80, effort: 6 } },
                    { format: 'avif', path: input.replace(ext, '.avif'), options: { quality: 65, effort: 6, chromaSubsampling: '4:2:0' } }
                ];

                for (const output of outputs) {
                    try {
                        // Skip if exists (optional, but good for speed)
                        // try { await stat(output.path); continue; } catch (e) {}

                        await sharp(input)
                            .toFormat(output.format, output.options)
                            .toFile(output.path);

                        const newStats = await stat(output.path);
                        const newSize = newStats.size;
                        const saved = originalSize - newSize;
                        const savedPercent = ((saved / originalSize) * 100).toFixed(1);

                        totalConverted++;
                        if (saved > 0) totalSaved += saved;

                        console.log(`  ✓ ${file} → ${output.format.toUpperCase()}`);
                        console.log(`    ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (saved ${savedPercent}%)`);
                    } catch (err) {
                        console.error(`  ✗ Failed to convert ${file} to ${output.format}:`, err.message);
                    }
                }
            }
        } catch (err) {
            console.log(`  ⚠ Directory not found or inaccessible: ${dir}`);
        }
    }

    console.log(`\n🎉 Optimization complete!`);
    console.log(`   Total files generated: ${totalConverted}`);
    console.log(`   Total potential space saved (if originals removed): ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
};

optimizeImages().catch((err) => {
    console.error('Error:', err);
    process.exit(1);
});

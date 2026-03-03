import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SOURCE_ICON = join(__dirname, '../public/favicon.png');
const PUBLIC_DIR = join(__dirname, '../public');

const ICONS = [
    { name: 'pwa-64x64.png', size: 64 },
    { name: 'pwa-192x192.png', size: 192 },
    { name: 'pwa-512x512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 }, // iOS standard
];

const generateIcons = async () => {
    console.log('🎨 Generating PWA Icons from:', SOURCE_ICON);

    if (!existsSync(SOURCE_ICON)) {
        console.error('❌ Source icon not found!');
        process.exit(1);
    }

    try {
        // Generate standard icons
        for (const icon of ICONS) {
            await sharp(SOURCE_ICON)
                .resize(icon.size, icon.size)
                .toFile(join(PUBLIC_DIR, icon.name));
            console.log(`  ✓ Generated ${icon.name}`);
        }

        // Generate Maskable Icon (Safe Area Padding)
        // Maskable icons should have padding so important content is within the safe zone (center 80%)
        // We'll resize the original to 80% of target size and composite it on a white background
        const MASKABLE_SIZE = 512;
        const INNER_SIZE = Math.floor(MASKABLE_SIZE * 0.8); // 409px
        const PADDING = Math.floor((MASKABLE_SIZE - INNER_SIZE) / 2); // ~51px

        const resizedIcon = await sharp(SOURCE_ICON)
            .resize(INNER_SIZE, INNER_SIZE)
            .toBuffer();

        await sharp({
            create: {
                width: MASKABLE_SIZE,
                height: MASKABLE_SIZE,
                channels: 4,
                background: { r: 255, g: 255, b: 255, alpha: 1 } // White background for maskable
            }
        })
            .composite([{ input: resizedIcon, top: PADDING, left: PADDING }])
            .toFile(join(PUBLIC_DIR, 'maskable-icon-512x512.png'));

        console.log(`  ✓ Generated maskable-icon-512x512.png (with padding)`);
        console.log('✅ All icons generated successfully!');

    } catch (error) {
        console.error('❌ Error generating icons:', error);
        process.exit(1);
    }
};

generateIcons();

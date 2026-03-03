import sharp from 'sharp';

await sharp('public/images/hero-bg-apartment.png')
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile('public/images/hero-bg-apartment.webp');

console.log('DONE: hero-bg-apartment.webp created');

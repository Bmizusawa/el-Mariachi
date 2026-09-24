import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

await mkdir('public/images', { recursive: true });
await mkdir('.review', { recursive: true });
for (let i = 0; i < 8; i++) {
  await sharp(`image${i}.jpeg`).rotate(90).resize({ width: 1800 }).jpeg({ quality: 94 }).toFile(`.review/page-${i}.jpg`);
}
const crops = [
  ['cover-art', 0, 430, 260, 815, 480],
  ['menu-cover', 0, 400, 195, 1030, 1430],
  ['fajitas', 2, 1030, 325, 430, 110],
  ['molcajete', 2, 1040, 425, 390, 200],
  ['enchiladas', 2, 600, 780, 380, 205],
  ['carne-asada', 3, 900, 230, 460, 200],
  ['tacos', 3, 140, 1920, 560, 260],
  ['margarita', 5, 940, 430, 270, 270],
];
for (const [name, page, left, top, width, height] of crops) {
  await sharp(`.review/page-${page}.jpg`).extract({ left, top, width, height }).webp({ quality: 88 }).toFile(`public/images/${name}.webp`);
}
for (const page of [0, 1, 5, 7]) {
  await sharp(`.review/page-${page}.jpg`).extract({ left: 220, top: 1790, width: 1400, height: 390 }).resize({ width: 2100 }).png().toFile(`.review/notes-${page}.png`);
}
await sharp('.review/page-7.jpg').extract({ left: 360, top: 230, width: 1280, height: 770 }).png().toFile('.review/lunch-top.png');
// Logo mark: the mariachi musician from the cover illustration.
// Coordinates are in full-resolution space (original image0 rotated 90°, 2304x3072).
const mark = await sharp('image0.jpeg')
  .rotate(90)
  .extract({ left: 920, top: 1020, width: 720, height: 720 })
  .resize(512, 512)
  .normalise()
  .modulate({ saturation: 1.6 })
  .linear(1.05, -6)
  .sharpen({ sigma: 1 })
  .png()
  .toBuffer();
await sharp(mark).webp({ quality: 90 }).toFile('public/images/mariachi-mark.webp');
const ring = Buffer.from(`<svg width="512" height="512"><defs><clipPath id="c"><circle cx="256" cy="256" r="238"/></clipPath></defs><image href="data:image/png;base64,${mark.toString('base64')}" width="512" height="512" clip-path="url(#c)"/><circle cx="256" cy="256" r="238" fill="none" stroke="#d9a441" stroke-width="20"/></svg>`);
await sharp({ create: { width: 512, height: 512, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([{ input: ring }])
  .png()
  .toFile('app/icon.png');
await sharp({ create: { width: 512, height: 512, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([{ input: ring }])
  .webp({ quality: 90 })
  .toFile('public/images/mariachi-badge.webp');
for (const page of [0, 2, 3, 5, 6]) {
  const grid = `<svg width="900" height="1200">${Array.from({length: 12}, (_, y) => Array.from({length: 9}, (_, x) => `<rect x="${x * 100}" y="${y * 100}" width="100" height="100" fill="none" stroke="#ff000080"/><text x="${x * 100 + 3}" y="${y * 100 + 14}" fill="red" font-size="12">${x * 200},${y * 200}</text>`).join('')).join('')}</svg>`;
  await sharp(`.review/page-${page}.jpg`).resize(900).composite([{ input: Buffer.from(grid) }]).png().toFile(`.review/grid-${page}.png`);
}
console.log('Review images and optimized editorial crops prepared.');

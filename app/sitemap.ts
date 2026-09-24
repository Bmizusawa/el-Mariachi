import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://elmariachiprattville.com';
  return ['', '/menu', '/drinks', '/visit'].map(p => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}

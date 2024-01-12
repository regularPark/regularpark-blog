import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://reglog.vercel.app/sitemap.xml',
    host: 'https://reglog.vercel.app',
  };
}

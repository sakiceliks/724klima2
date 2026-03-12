import { MetadataRoute } from 'next';
import { services } from '@/data/services-data';
import { blogPosts } from '@/data/blog-data';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.company.url;

  // Static routes
  const staticRoutes = [
    '',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/hizmet/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}

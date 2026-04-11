import type { MetadataRoute } from 'next';

import { contentSource } from '@/lib/content';
import { getSiteUrl } from '@/lib/metadata/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, industries, tools, cases, insights] = await Promise.all([
    contentSource.getAllServicePages(),
    contentSource.getAllIndustryPages(),
    contentSource.getAllToolPages(),
    contentSource.getAllCases(),
    contentSource.getAllInsights(),
  ]);

  return [
    { url: getSiteUrl('/'), lastModified: new Date() },
    { url: getSiteUrl('/services'), lastModified: new Date() },
    { url: getSiteUrl('/industries'), lastModified: new Date() },
    { url: getSiteUrl('/about'), lastModified: new Date() },
    { url: getSiteUrl('/contact'), lastModified: new Date() },
    ...services.map((entry) => ({
      url: getSiteUrl(`/services/${entry.slug}`),
      lastModified: new Date(entry.updatedAt),
    })),
    ...industries.map((entry) => ({
      url: getSiteUrl(`/industries/${entry.slug}`),
      lastModified: new Date(entry.updatedAt),
    })),
    ...tools.map((entry) => ({
      url: getSiteUrl(`/tools/${entry.slug}`),
      lastModified: new Date(entry.updatedAt),
    })),
    ...cases.map((entry) => ({
      url: getSiteUrl(`/cases/${entry.slug}`),
      lastModified: new Date(entry.updatedAt),
    })),
    ...insights.map((entry) => ({
      url: getSiteUrl(`/insights/${entry.slug}`),
      lastModified: new Date(entry.updatedAt),
    })),
  ];
}

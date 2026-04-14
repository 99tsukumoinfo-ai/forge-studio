import { notFound } from 'next/navigation';

import { ToolDetailLayout } from '@/components/sections/ToolDetailLayout';
import { contentSource } from '@/lib/content';
import { TOOL_DETAIL_CONFIGS } from '@/lib/content/tool-detail-config';
import { TOOL_PAGE_SLUGS } from '@/lib/content/taxonomy';
import { createMetadata } from '@/lib/metadata/site';
import type { ToolPageSlug } from '@/lib/content/taxonomy';

type ToolDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return TOOL_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ToolDetailPageProps) {
  const tool = await contentSource.getToolPageBySlug(params.slug);

  if (!tool) {
    return createMetadata({
      title: 'Not Found',
      pathname: `/tools/${params.slug}`,
    });
  }

  return createMetadata({
    title: tool.title,
    description: tool.description,
    pathname: `/tools/${tool.slug}`,
    ogImage: tool.ogImage,
  });
}

export default async function ToolDetailPage({ params }: ToolDetailPageProps) {
  const tool = await contentSource.getToolPageBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  const slug = tool.slug as ToolPageSlug;
  const config = TOOL_DETAIL_CONFIGS[slug];

  if (!config) {
    notFound();
  }

  const [allCases, allInsights] = await Promise.all([
    contentSource.getAllCases(),
    contentSource.getAllInsights(),
  ]);

  const cases = allCases
    .filter((c) => c.toolTags.includes(slug))
    .slice(0, 3);

  const insights = allInsights
    .filter(
      (i) =>
        i.toolTags.includes(slug) || i.industryTags.includes('smb-general'),
    )
    .slice(0, 3);

  return (
    <ToolDetailLayout
      tool={tool}
      config={config}
      cases={cases}
      insights={insights}
    />
  );
}

import { notFound } from 'next/navigation';

import { EntryDetail } from '@/components/sections/EntryDetail';
import { contentSource } from '@/lib/content';
import { createMetadata } from '@/lib/metadata/site';

type InsightDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const insights = await contentSource.getAllInsights();

  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: InsightDetailPageProps) {
  const insight = await contentSource.getInsightBySlug(params.slug);

  if (!insight) {
    return createMetadata({
      title: 'Not Found',
      pathname: `/insights/${params.slug}`,
    });
  }

  return createMetadata({
    title: insight.title,
    description: insight.description,
    pathname: `/insights/${insight.slug}`,
    ogImage: insight.ogImage,
  });
}

export default async function InsightDetailPage({
  params,
}: InsightDetailPageProps) {
  const insight = await contentSource.getInsightBySlug(params.slug);

  if (!insight) {
    notFound();
  }

  return <EntryDetail eyebrow="Insight Detail" entry={insight} />;
}

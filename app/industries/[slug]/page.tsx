import { notFound } from 'next/navigation';

import { IndustryDetailLayout } from '@/components/sections/IndustryDetailLayout';
import { contentSource } from '@/lib/content';
import { INDUSTRY_DETAIL_CONFIGS } from '@/lib/content/industry-detail-config';
import type { IndustryPageSlug } from '@/lib/content/taxonomy';
import { INDUSTRY_PAGE_SLUGS } from '@/lib/content/taxonomy';
import { createMetadata } from '@/lib/metadata/site';

type IndustryDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return INDUSTRY_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryDetailPageProps) {
  const industry = await contentSource.getIndustryPageBySlug(params.slug);

  if (!industry) {
    return createMetadata({
      title: 'Not Found',
      pathname: `/industries/${params.slug}`,
    });
  }

  return createMetadata({
    title: industry.title,
    description: industry.description,
    pathname: `/industries/${industry.slug}`,
    ogImage: industry.ogImage,
  });
}

export default async function IndustryDetailPage({
  params,
}: IndustryDetailPageProps) {
  const industry = await contentSource.getIndustryPageBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  const slug = industry.slug as IndustryPageSlug;
  const config = INDUSTRY_DETAIL_CONFIGS[slug];

  const [allCases, allInsights] = await Promise.all([
    contentSource.getAllCases(),
    contentSource.getAllInsights(),
  ]);

  // 業種タグで厳密フィルタ（最大3件）
  const industryCases = allCases
    .filter((c) => c.industryTags.includes(slug))
    .slice(0, 3);

  // 業種タグ or smb-general でフィルタ（最大3件）
  const industryInsights = allInsights
    .filter(
      (i) =>
        i.industryTags.includes(slug) ||
        i.industryTags.includes('smb-general'),
    )
    .slice(0, 3);

  return (
    <IndustryDetailLayout
      industry={industry}
      config={config}
      cases={industryCases}
      insights={industryInsights}
    />
  );
}

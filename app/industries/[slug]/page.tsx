import { notFound } from 'next/navigation';

import { EntryDetail } from '@/components/sections/EntryDetail';
import { contentSource } from '@/lib/content';
import { createMetadata } from '@/lib/metadata/site';

type IndustryDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const industries = await contentSource.getAllIndustryPages();

  return industries.map((industry) => ({
    slug: industry.slug,
  }));
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

  return <EntryDetail eyebrow="Industry Detail" entry={industry} />;
}

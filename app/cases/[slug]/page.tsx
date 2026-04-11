import { notFound } from 'next/navigation';

import { EntryDetail } from '@/components/sections/EntryDetail';
import { contentSource } from '@/lib/content';
import { createMetadata } from '@/lib/metadata/site';

type CaseDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const cases = await contentSource.getAllCases();

  return cases.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: CaseDetailPageProps) {
  const caseStudy = await contentSource.getCaseBySlug(params.slug);

  if (!caseStudy) {
    return createMetadata({
      title: 'Not Found',
      pathname: `/cases/${params.slug}`,
    });
  }

  return createMetadata({
    title: caseStudy.title,
    description: caseStudy.description,
    pathname: `/cases/${caseStudy.slug}`,
    ogImage: caseStudy.ogImage,
  });
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const caseStudy = await contentSource.getCaseBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return <EntryDetail eyebrow="Case Detail" entry={caseStudy} />;
}

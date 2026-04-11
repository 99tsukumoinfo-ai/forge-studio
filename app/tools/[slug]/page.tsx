import { notFound } from 'next/navigation';

import { EntryDetail } from '@/components/sections/EntryDetail';
import { contentSource } from '@/lib/content';
import { createMetadata } from '@/lib/metadata/site';

type ToolDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const tools = await contentSource.getAllToolPages();

  return tools.map((tool) => ({
    slug: tool.slug,
  }));
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

  return <EntryDetail eyebrow="Tool Detail" entry={tool} />;
}

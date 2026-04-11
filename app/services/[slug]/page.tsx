import { notFound } from 'next/navigation';

import { EntryDetail } from '@/components/sections/EntryDetail';
import { contentSource } from '@/lib/content';
import { createMetadata } from '@/lib/metadata/site';

type ServiceDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const services = await contentSource.getAllServicePages();

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const service = await contentSource.getServicePageBySlug(params.slug);

  if (!service) {
    return createMetadata({
      title: 'Not Found',
      pathname: `/services/${params.slug}`,
    });
  }

  return createMetadata({
    title: service.title,
    description: service.description,
    pathname: `/services/${service.slug}`,
    ogImage: service.ogImage,
  });
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const service = await contentSource.getServicePageBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <EntryDetail eyebrow="Service Detail" entry={service} />;
}

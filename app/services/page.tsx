import { ContentCard } from '@/components/cards/ContentCard';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { contentSource } from '@/lib/content';
import { SERVICE_CATEGORY_LABELS } from '@/lib/content/taxonomy';
import { createMetadata } from '@/lib/metadata/site';

export const metadata = createMetadata({
  title: 'Services',
  description:
    '売上や業務の課題にあわせて、対応内容を5つのテーマに分けて整理しています。',
  pathname: '/services',
});

export default async function ServicesPage() {
  const services = await contentSource.getAllServicePages();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="5つのサービス分類を基準にした一覧"
        description="課題ベースで比較しやすいよう、サービスカテゴリを v5.1 の slug に固定しています。"
      />
      <Section description="本文は Step 4 で整えますが、一覧・slug・taxonomy はこの段階で固定します。">
        <div className="content-grid">
          {services.map((service) => (
            <ContentCard
              key={service.slug}
              href={`/services/${service.slug}`}
              label={SERVICE_CATEGORY_LABELS[service.serviceCategory]}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Section>
    </>
  );
}

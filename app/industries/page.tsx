import { ContentCard } from '@/components/cards/ContentCard';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { contentSource } from '@/lib/content';
import { getIndustryLabel } from '@/lib/content/taxonomy';
import { createMetadata } from '@/lib/metadata/site';

export const metadata = createMetadata({
  title: 'Industries',
  description: '業界別に課題や関連導線を束ねるための受け皿を先に整えています。',
  pathname: '/industries',
});

export default async function IndustriesPage() {
  const industries = await contentSource.getAllIndustryPages();

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="業界別ページの器を先に固定する"
        description="初期対象の6業界を、サービス・ツール・記事につなげられる前提で一覧化しています。"
      />
      <Section>
        <div className="content-grid">
          {industries.map((industry) => (
            <ContentCard
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              label={getIndustryLabel(industry.slug)}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
      </Section>
    </>
  );
}

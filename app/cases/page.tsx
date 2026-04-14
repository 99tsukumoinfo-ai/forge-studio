import Link from 'next/link';

import { PageHero } from '@/components/sections/PageHero';
import { CtaLink } from '@/components/ui/CtaLink';
import { Section } from '@/components/ui/Section';
import { contentSource } from '@/lib/content';
import {
  INDUSTRY_PAGE_SLUGS,
  SERVICE_CATEGORIES,
  SERVICE_CATEGORY_LABELS,
  TOOL_PAGE_SLUGS,
  getIndustryLabel,
  getToolLabel,
} from '@/lib/content/taxonomy';
import { createMetadata } from '@/lib/metadata/site';

export const metadata = createMetadata({
  title: '事例',
  description:
    'どんな会社の、どんな課題に、どう取り組んだかを整理しています。売上導線、業務整理、通知、集計など、実務をどう整えるかの具体例として見られます。',
  pathname: '/cases',
});

export default async function CasesPage() {
  const cases = await contentSource.getAllCases();

  return (
    <>
      {/* 1. ページヘッダー */}
      <PageHero
        title="事例から相談イメージを探す"
        description="どんな会社の、どんな課題に、どう取り組んだかを整理しています。売上導線、業務整理、通知、集計、数字の見え方など、実務をどう整えるかの具体例として見られます。"
      />

      {/* 2. 事例一覧 */}
      <Section>
        {cases.length > 0 ? (
          <div className="case-list-grid">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="case-list-card"
              >
                <div className="case-list-card__header">
                  <span className="case-list-card__industry">
                    {getIndustryLabel(c.industryTags[0])}
                  </span>
                  <span className="case-list-card__service">
                    {SERVICE_CATEGORY_LABELS[c.serviceCategory]}
                  </span>
                </div>
                <h2 className="case-list-card__title">{c.title}</h2>
                <p className="case-list-card__excerpt">{c.excerpt}</p>
                <p className="case-list-card__tools">
                  使用ツール: {c.toolTags.map(getToolLabel).join(' / ')}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="panel">
            <p className="site-note">
              公開できる事例を現在整理しています。相談内容が近い場合は、サービスや業界別ページから先にご覧ください。
            </p>
          </div>
        )}
      </Section>

      {/* 3. サービスから探したい人への導線 */}
      <Section
        className="section--muted"
        eyebrow="サービスから探す"
        title="課題からサービスを探したい方へ"
        description="相談内容から見たい場合は、5つのサービス分類から探せます。"
      >
        <div className="service-label-list">
          {SERVICE_CATEGORIES.map((slug) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="service-label-item"
            >
              {SERVICE_CATEGORY_LABELS[slug]}
            </Link>
          ))}
        </div>
        <div className="section-cta-row">
          <Link href="/services" className="service-label-item__more">
            サービス一覧を見る →
          </Link>
        </div>
      </Section>

      {/* 4. 業界ごとに探したい人への導線 */}
      <Section
        eyebrow="業界別で見る"
        title="業界ごとの相談イメージから探したい方へ"
        description="同じテーマでも、業界によって起こりやすい問題や整え方は違います。業種ごとのページから、近いケースを確認できます。"
      >
        <div className="industry-grid">
          {INDUSTRY_PAGE_SLUGS.map((slug) => (
            <Link
              key={slug}
              href={`/industries/${slug}`}
              className="industry-card"
            >
              <span className="industry-card__name">
                {getIndustryLabel(slug)}
              </span>
            </Link>
          ))}
        </div>
        <div className="section-cta-row">
          <Link href="/industries" className="service-label-item__more">
            業界一覧を見る →
          </Link>
        </div>
      </Section>

      {/* 5. ツールから探したい人への導線 */}
      <Section
        className="section--muted"
        eyebrow="ツールから探す"
        title="使っているツールから探したい方へ"
        description="すでに使っているツールがある場合は、ツール別ページから改善テーマを確認できます。"
      >
        <div className="tool-grid">
          {TOOL_PAGE_SLUGS.map((slug) => (
            <Link key={slug} href={`/tools/${slug}`} className="tool-card">
              <span className="tool-card__name">{getToolLabel(slug)}</span>
            </Link>
          ))}
        </div>
        <div className="section-cta-row">
          <Link href="/tools" className="service-label-item__more">
            ツール一覧を見る →
          </Link>
        </div>
      </Section>

      {/* 6. 末尾CTA */}
      <Section className="section--slim">
        <div className="services-footer-cta">
          <p className="services-footer-cta__lead">
            近い事例がある場合は、その事例を起点に相談を始めることもできます。まず現状をお聞かせください。
          </p>
          <CtaLink href="/contact" variant="primary">
            相談してみる
          </CtaLink>
        </div>
      </Section>
    </>
  );
}

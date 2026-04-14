import Link from 'next/link';

import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { PageHero } from '@/components/sections/PageHero';
import { CtaLink } from '@/components/ui/CtaLink';
import { Section } from '@/components/ui/Section';
import type { CaseStudy, Insight, ToolPage } from '@/lib/content';
import type { ToolDetailConfig } from '@/lib/content/tool-detail-config';

type Props = {
  tool: ToolPage;
  config: ToolDetailConfig;
  cases: CaseStudy[];
  insights: Insight[];
};

export function ToolDetailLayout({ tool, config, cases, insights }: Props) {
  return (
    <>
      {/* 1. ページヘッダー */}
      <PageHero
        eyebrow="ツール別"
        title={tool.title}
        description={config.heroDescription}
      />

      {/* 2. そのツールで改善しやすいこと */}
      <Section
        title="このツールで改善しやすいこと"
        description="ツールを起点に整えやすい業務のテーマです。すべてが当てはまる必要はありません。"
      >
        <div className="issue-grid">
          {config.improvements.map((item, i) => (
            <div key={i} className="issue-card">
              <h3 className="issue-card__title">{item.title}</h3>
              <p className="issue-card__body">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. よくある悩み */}
      <Section className="section--muted" title="よくある悩み">
        <ul className="whatwedo-list">
          {config.worries.map((worry, i) => (
            <li key={i} className="whatwedo-item">
              {worry}
            </li>
          ))}
        </ul>
      </Section>

      {/* 4. Forge Studioで対応できること */}
      <Section title="Forge Studioで対応できること">
        <ul className="whatwedo-list">
          {config.whatWeDo.map((item, i) => (
            <li key={i} className="whatwedo-item">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* 5. 関連するサービス分類 */}
      <Section
        className="section--muted"
        title="関連するサービス分類"
        description="このツールでよく対応するサービスカテゴリです。"
      >
        <div className="service-grid">
          {config.relatedServices.map((service) => (
            <article key={service.slug} className="service-card">
              <h3 className="service-card__title">{service.label}</h3>
              <p className="service-card__description">{service.note}</p>
              <Link
                href={`/services/${service.slug}`}
                className="service-card__link"
              >
                詳しく見る →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* 6. 関連する業界 */}
      <Section
        title="このツールをよく活用する業界"
        description="ツールが合いやすい業種の一部です。業種が近くなくても、課題が似ていれば対応できます。"
      >
        <div className="industry-grid">
          {config.relatedIndustries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="industry-card"
            >
              <span className="industry-card__name">{industry.label}</span>
              <span className="industry-card__description">{industry.note}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 7. 関連事例 */}
      <Section
        className="section--muted"
        title="関連事例"
        description="このツールを活用した事例の一部です。状況によって整え方は変わります。"
      >
        {cases.length > 0 ? (
          <div className="content-grid">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="content-card"
              >
                <p className="content-card__label">
                  {c.industryTags.join(' / ')}
                </p>
                <h3 className="content-card__title">{c.title}</h3>
                <p className="content-card__description">{c.excerpt}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="section-description">事例は順次追加します。</p>
        )}
      </Section>

      {/* 8. 関連記事 */}
      <Section
        title="関連記事"
        description="このツールや課題テーマを理解するための記事です。"
      >
        {insights.length > 0 ? (
          <div className="content-grid">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="content-card"
              >
                <h3 className="content-card__title">{insight.title}</h3>
                <p className="content-card__description">{insight.excerpt}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="section-description">記事は順次追加します。</p>
        )}
      </Section>

      {/* 9. FAQ */}
      <Section className="section--muted" title="よくある質問">
        <FaqAccordion faqs={config.faqs} />
      </Section>

      {/* 10. CTA */}
      <Section className="section--slim">
        <div className="service-detail-cta">
          <p className="service-detail-cta__lead">
            ツールが決まっていなくても相談できます。まず現状の課題をお聞きして、何から整えるかを一緒に考えます。
          </p>
          <div className="service-detail-cta__actions">
            <CtaLink href="/contact" variant="primary">
              相談してみる
            </CtaLink>
            <Link href="/how-to-start" className="service-detail-cta__sub">
              はじめての方へ →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

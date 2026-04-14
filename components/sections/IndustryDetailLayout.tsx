import Link from 'next/link';

import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { PageHero } from '@/components/sections/PageHero';
import { CtaLink } from '@/components/ui/CtaLink';
import { Section } from '@/components/ui/Section';
import type { CaseStudy, Insight, IndustryPage } from '@/lib/content';
import type { IndustryDetailConfig } from '@/lib/content/industry-detail-config';

type Props = {
  industry: IndustryPage;
  config: IndustryDetailConfig;
  cases: CaseStudy[];
  insights: Insight[];
};

export function IndustryDetailLayout({
  industry,
  config,
  cases,
  insights,
}: Props) {
  return (
    <>
      {/* 1. ページヘッダー */}
      <PageHero
        eyebrow="業界別"
        title={industry.title}
        description={config.heroDescription}
      />

      {/* 2. よくある課題 */}
      <Section
        title="よくある課題"
        description="この業種でよく相談に乗るテーマを整理しました。すべてが当てはまる必要はありません。"
      >
        <div className="issue-grid">
          {config.issues.map((issue, i) => (
            <div key={i} className="issue-card">
              <h3 className="issue-card__title">{issue.title}</h3>
              <p className="issue-card__body">{issue.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. 起こりやすい背景 */}
      <Section className="section--muted" title="起こりやすい背景">
        <div className="text-body">
          <p>{config.background}</p>
        </div>
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
        description="この業種でよく使われるサービスカテゴリです。詳細はサービスページから確認できます。"
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

      {/* 6. よく使うツール */}
      <Section
        title="よく使うツールと改善ポイント"
        description="この業種でよく活用されるツールです。ツールが先に決まっている必要はありません。"
      >
        <div className="tool-grid">
          {config.relatedTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="tool-card"
            >
              <span className="tool-card__name">{tool.label}</span>
              <span className="tool-card__description">{tool.note}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 7. 関連事例 */}
      <Section
        className="section--muted"
        title="関連事例"
        description="同じ業種で対応した事例の一部です。状況によって整え方は変わります。"
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
                <p className="content-card__meta">
                  使用ツール: {c.toolTags.join(', ')}
                </p>
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
        description="この業種や課題テーマを理解するための記事です。"
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
            業界が近くても、課題の出方は会社によって違います。まず現状を話していただくところから始めます。
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

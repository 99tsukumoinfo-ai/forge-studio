import Link from 'next/link';

import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { PageHero } from '@/components/sections/PageHero';
import { CtaLink } from '@/components/ui/CtaLink';
import { Section } from '@/components/ui/Section';
import type { CaseStudy, Insight, ServicePage } from '@/lib/content';
import type { ServiceDetailConfig } from '@/lib/content/service-detail-config';

type Props = {
  service: ServicePage;
  config: ServiceDetailConfig;
  cases: CaseStudy[];
  insights: Insight[];
};

export function ServiceDetailLayout({ service, config, cases, insights }: Props) {
  return (
    <>
      {/* 1. ページヘッダー */}
      <PageHero
        eyebrow="サービス"
        title={service.title}
        description={config.heroDescription}
      />

      {/* 2. よく相談に乗る業種 */}
      <Section
        title="よく相談に乗る業種"
        description="業種によって課題の出方や整え方は異なります。近い業種のページから、具体的なイメージを確認できます。"
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

      {/* 3. よく対応するツール */}
      <Section
        className="section--muted"
        title="よく対応するツール"
        description="ツールが先に決まっている必要はありません。課題に合わせて、使いやすいツールを選びます。"
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

      {/* 4. 事例 */}
      <Section
        title="事例"
        description="同じテーマで対応した事例の一部です。業種や状況によって整え方は変わります。"
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
                  {c.industryTags.map((t) => t).join(' / ')}
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

      {/* 5. 関連記事 */}
      <Section
        className="section--muted"
        title="関連記事"
        description="このテーマを理解するための記事です。"
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

      {/* 6. FAQ */}
      <Section title="よくある質問">
        <FaqAccordion faqs={config.faqs} />
      </Section>

      {/* 7. CTA */}
      <Section className="section--slim section--muted">
        <div className="service-detail-cta">
          <p className="service-detail-cta__lead">
            まず現状を話していただくところから始めます。
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

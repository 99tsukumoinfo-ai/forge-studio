import Link from 'next/link';

import { PageHero } from '@/components/sections/PageHero';
import { CtaLink } from '@/components/ui/CtaLink';
import { Section } from '@/components/ui/Section';
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
  title: 'ツール別に探す',
  description:
    'LINE・kintone・WordPress・Googleツール・会計／労務ツールなど、よく使われるものを中心に掲載しています。ここにないツールでも対応できる場合があるので、まずは相談してください。',
  pathname: '/tools',
});

const TOOL_CARDS: {
  slug: (typeof TOOL_PAGE_SLUGS)[number];
  note: string;
}[] = [
  {
    slug: 'line',
    note: '問い合わせ、予約前後の案内、通知や再来店導線など、顧客接点まわりを整えたいときの入口になります。',
  },
  {
    slug: 'wordpress',
    note: 'サイトの情報整理、フォームや予約導線の設置、EC機能の追加など、Webを売上につなぎたいときに使います。',
  },
  {
    slug: 'kintone',
    note: '顧客情報・案件進捗・社内申請など、担当者が変わっても回る管理の仕組みを作りたいときに使います。',
  },
  {
    slug: 'google-workspace',
    note: 'スプレッドシートやフォームを起点に、集計・通知・申し送りの手作業を減らしたいときに使います。',
  },
  {
    slug: 'accounting-hr',
    note: '会計・勤怠・労務まわりの手作業を整理し、経営判断に使える数字が見えるようにしたいときに使います。',
  },
];

const INDUSTRY_NOTES: Record<string, string> = {
  manufacturing: '受発注・工程・外注管理の整備',
  clinic: '予約・患者対応・スタッフ連絡の改善',
  salon: '予約・顧客管理・再来店フォローの整備',
  restaurant: '予約・スタッフ連絡・集計の整理',
  'professional-services': '顧客管理・案件進捗・請求まわり',
  'retail-services': 'EC・店舗導線・在庫・バックオフィス',
};

export default function ToolsPage() {
  return (
    <>
      {/* 1. ページヘッダー */}
      <PageHero
        title="使っているツールから探す"
        description="すでに使っているツールがある場合は、そのツールを起点に改善しやすいテーマから探せます。ツールの設定だけでなく、導線・運用・記録・通知・数字の見え方まで含めて整理します。"
      />

      {/* 2. 5ツールの一覧 */}
      <Section>
        <div className="tool-index-grid">
          {TOOL_CARDS.map(({ slug, note }) => (
            <Link
              key={slug}
              href={`/tools/${slug}`}
              className="tool-index-card"
            >
              <span className="tool-index-card__name">{getToolLabel(slug)}</span>
              <span className="tool-index-card__note">{note}</span>
              <span className="tool-index-card__link">このツールで整えられること →</span>
            </Link>
          ))}
        </div>
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
        description="同じツールでも、業界によって整え方や起こりやすい問題は違います。業種ごとのページから、近いケースを確認できます。"
      >
        <div className="industry-grid">
          {INDUSTRY_PAGE_SLUGS.map((slug) => (
            <Link
              key={slug}
              href={`/industries/${slug}`}
              className="industry-card"
            >
              <span className="industry-card__name">{getIndustryLabel(slug)}</span>
              <span className="industry-card__description">
                {INDUSTRY_NOTES[slug]}
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

      {/* 5. はじめての方への導線 */}
      <Section
        className="section--muted"
        eyebrow="はじめての方へ"
        title="どこから相談すればよいかわからない場合は"
      >
        <div className="intro-links">
          <div className="intro-link-item">
            <h3 className="intro-link-item__title">はじめての相談について</h3>
            <p className="intro-link-item__body">
              どの段階から相談できるか、どんな資料があると話しやすいか、実装まで依頼できるかなど、入口で気になることをまとめています。
            </p>
            <Link href="/how-to-start" className="intro-link-item__link">
              はじめての方へ →
            </Link>
          </div>
          <div className="intro-link-item">
            <h3 className="intro-link-item__title">料金の考え方について</h3>
            <p className="intro-link-item__body">
              費用の目安、何に費用がかかるのか、対応範囲の考え方など、料金まわりの考え方を整理しています。
            </p>
            <Link href="/pricing-and-scope" className="intro-link-item__link">
              料金の考え方を見る →
            </Link>
          </div>
        </div>
      </Section>

      {/* 6. 末尾CTA */}
      <Section className="section--slim">
        <div className="services-footer-cta">
          <p className="services-footer-cta__lead">
            ツールが決まっていなくても相談できます。まず現状をお聞きして、何から整えるかを一緒に考えます。
          </p>
          <CtaLink href="/contact" variant="primary">
            相談してみる
          </CtaLink>
        </div>
      </Section>
    </>
  );
}

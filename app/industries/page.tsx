import Link from 'next/link';

import { PageHero } from '@/components/sections/PageHero';
import { CtaLink } from '@/components/ui/CtaLink';
import { Section } from '@/components/ui/Section';
import {
  SERVICE_CATEGORY_LABELS,
  SERVICE_CATEGORIES,
  getToolLabel,
  TOOL_PAGE_SLUGS,
} from '@/lib/content/taxonomy';
import { createMetadata } from '@/lib/metadata/site';

export const metadata = createMetadata({
  title: '業界別に探す',
  description:
    '同じ課題でも、業界によって起こりやすい問題や整え方は違います。よく相談に乗る業種ごとのページから、近いケースを探せます。',
  pathname: '/industries',
});

const INDUSTRY_CARDS = [
  {
    slug: 'manufacturing',
    name: '製造業',
    note: '受発注・工程管理・外注調整・社内連携など、現場に残りやすい業務負荷を整理したい会社に向いています。',
  },
  {
    slug: 'clinic',
    name: 'クリニック / 自由診療',
    note: '予約・問診前後の案内・スタッフ連絡・勤怠管理など、少人数で多くの接点を回す現場の課題に対応しています。',
  },
  {
    slug: 'salon',
    name: '美容室・サロン',
    note: '予約受付・リマインド・再来店フォロー・顧客管理など、現場で続けやすい形に整えたい方に向いています。',
  },
  {
    slug: 'restaurant',
    name: '飲食店',
    note: '予約対応・スタッフ連絡・シフト管理・仕入れ業務など、現場のやり取りを整理したい場合の相談窓口です。',
  },
  {
    slug: 'professional-services',
    name: '士業・コンサル・受託サービス業',
    note: '顧客管理・案件進捗・請求まわり・社内申請など、人が動く業務の整理を得意としています。',
  },
  {
    slug: 'retail-services',
    name: '小売・店舗サービス業',
    note: 'EC・実店舗の売上導線・在庫・顧客接点など、販売と運営の両面から整えたい方に向いています。',
  },
] as const;

const TOOL_NOTES: Record<string, string> = {
  line: '顧客連絡・予約・問い合わせの一本化',
  wordpress: 'SEO・情報更新・予約導線・EC機能の整備',
  kintone: '顧客管理・案件進捗・社内申請の仕組み化',
  'google-workspace': 'Google 環境を活かした業務自動化',
  'accounting-hr': '会計・勤怠・労務ツールのバックオフィス整備',
};

export default function IndustriesPage() {
  return (
    <>
      {/* 1. ページヘッダー */}
      <PageHero
        title="業界ごとの相談イメージから探す"
        description="同じ課題でも、業界によって起こりやすい問題や整え方は違います。よく相談に乗る業種ごとのページから、近いケースを探せます。"
      />

      {/* 2. 6業界の一覧 */}
      <Section>
        <div className="industry-index-grid">
          {INDUSTRY_CARDS.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="industry-index-card"
            >
              <span className="industry-index-card__name">{industry.name}</span>
              <span className="industry-index-card__note">{industry.note}</span>
              <span className="industry-index-card__link">詳しく見る →</span>
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

      {/* 4. ツールから探したい人への導線 */}
      <Section
        eyebrow="ツールから探す"
        title="使っているツールから探したい方へ"
        description="すでに使っているツールがある場合は、ツール別ページから改善ポイントを確認できます。"
      >
        <div className="tool-grid">
          {TOOL_PAGE_SLUGS.map((slug) => (
            <Link
              key={slug}
              href={`/tools/${slug}`}
              className="tool-card"
            >
              <span className="tool-card__name">{getToolLabel(slug)}</span>
              <span className="tool-card__description">
                {TOOL_NOTES[slug]}
              </span>
            </Link>
          ))}
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
              どの段階から相談できるか、どんな情報があると話が早いか、実装まで依頼できるかなど、入口で気になることをまとめています。
            </p>
            <Link href="/how-to-start" className="intro-link-item__link">
              はじめての方へ →
            </Link>
          </div>
          <div className="intro-link-item">
            <h3 className="intro-link-item__title">料金の考え方について</h3>
            <p className="intro-link-item__body">
              費用の目安、何に費用がかかるのか、なぜその金額になるのかなど、料金まわりの考え方を整理しています。
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
            業界が近くても、課題の出方は会社によって違います。まず現状を話していただければ一緒に整理します。
          </p>
          <CtaLink href="/contact" variant="primary">
            相談してみる
          </CtaLink>
        </div>
      </Section>
    </>
  );
}

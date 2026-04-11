import Link from 'next/link';

import { PageHero } from '@/components/sections/PageHero';
import { CtaLink } from '@/components/ui/CtaLink';
import { Section } from '@/components/ui/Section';
import { contentSource } from '@/lib/content';
import {
  SERVICE_CATEGORY_LABELS,
  getIndustryLabel,
  getToolLabel,
} from '@/lib/content/taxonomy';
import { createMetadata } from '@/lib/metadata/site';

export const metadata = createMetadata({
  title: 'サービス一覧',
  description:
    '売上や業務の課題にあわせて、対応内容を5つのテーマに分けて整理しています。',
  pathname: '/services',
});

// サービスカードの1文説明（「何を整えるか」を先に書く）
const SERVICE_DESCRIPTIONS: Record<string, string> = {
  'customer-communication':
    '問い合わせ対応、予約前後の案内、通知導線などを整理し、現場で回る形に整えます。',
  'sales-crm-support':
    '営業の進捗管理、問い合わせ対応、顧客情報の一元化を整理し、対応漏れを防ぎます。',
  'internal-operations':
    '社内の申請・承認、連絡・情報共有、業務管理の流れを整理し、運用負荷を下げます。',
  'backoffice-automation':
    '勤怠・経費・労務・会計まわりの手作業を減らし、管理精度と担当者の負荷を整えます。',
  'web-ec-store':
    'Webサイト・ECサイト・店舗の売上導線を整理し、集客から購買・再来店までをつなぎます。',
};

// 業界カードの短い補足（1〜2語で用途を補う）
const INDUSTRY_NOTES: Record<string, string> = {
  manufacturing: '受注管理・工程連絡・外注調整など',
  clinic: '予約・問診・患者対応の改善',
  salon: '予約・顧客管理・通知の整備',
  restaurant: '予約・スタッフ連絡・運営管理',
  'professional-services': '顧客管理・案件進捗・請求まわり',
  'retail-services': 'POS・在庫・顧客情報の整理',
};

// ツールカードの短い補足
const TOOL_NOTES: Record<string, string> = {
  line: '顧客連絡・予約通知・問い合わせ対応の一本化',
  wordpress: 'SEO対応・情報更新・予約導線の整備',
  kintone: '顧客管理・案件進捗・社内申請の仕組み化',
  'google-workspace': 'Google 環境を活かした業務自動化',
  'accounting-hr': '会計・勤怠・労務ツールのバックオフィス整備',
};

export default async function ServicesPage() {
  const [services, industries, tools] = await Promise.all([
    contentSource.getAllServicePages(),
    contentSource.getAllIndustryPages(),
    contentSource.getAllToolPages(),
  ]);

  return (
    <>
      {/* 1. ページヘッダー */}
      <PageHero
        title="課題からサービスを探す"
        description="売上や業務の課題にあわせて、対応内容を5つのテーマに分けて整理しています。"
      />

      {/* 2. 5分類のサービス一覧（主導線） */}
      <Section>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.slug} className="service-card">
              <h2 className="service-card__title">
                {SERVICE_CATEGORY_LABELS[service.serviceCategory]}
              </h2>
              <p className="service-card__description">
                {SERVICE_DESCRIPTIONS[service.slug] ?? service.excerpt}
              </p>
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

      {/* 3. 業界別で見る導線（準主導線） */}
      <Section
        className="section--muted"
        eyebrow="業界別で見る"
        title="業界ごとの相談イメージから見る"
        description="同じ課題でも、業界によって起こりやすい問題や整え方は違います。よく相談に乗る業種ごとのページから、近いケースを探せます。"
      >
        <div className="industry-grid">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="industry-card"
            >
              <span className="industry-card__name">
                {getIndustryLabel(industry.slug)}
              </span>
              <span className="industry-card__description">
                {INDUSTRY_NOTES[industry.slug] ?? industry.excerpt}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 4. ツール別で見る導線（副導線） */}
      <Section
        eyebrow="ツール別で見る"
        title="使っているツールから探したい方へ"
        description="すでに使っているツールがある場合は、ツール別ページから改善ポイントを確認できます。"
      >
        <div className="tool-grid">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="tool-card"
            >
              <span className="tool-card__name">{getToolLabel(tool.slug)}</span>
              <span className="tool-card__description">
                {TOOL_NOTES[tool.slug] ?? tool.excerpt}
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

      {/* ページ末尾CTA（控えめに1箇所） */}
      <Section className="section--slim">
        <div className="services-footer-cta">
          <p className="services-footer-cta__lead">
            どのカテゴリか迷う場合は、まず現状を話していただければ一緒に整理します。
          </p>
          <CtaLink href="/contact" variant="primary">
            相談してみる
          </CtaLink>
        </div>
      </Section>
    </>
  );
}

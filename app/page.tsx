import Link from 'next/link';

import { BeforeConsult } from '@/components/sections/BeforeConsult';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { FinalCta } from '@/components/sections/FinalCta';
import { HomeHero } from '@/components/sections/HomeHero';
import { PromiseSection } from '@/components/sections/PromiseSection';
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
  description:
    '経営判断・売上実務・IT実装まで、中堅中小企業向けに一気通貫で取り組みます。LINE・kintone・WordPress・会計／労務ツールなど、すでに使っているツールを軸に、売上導線と業務の仕組みを整えます。',
  pathname: '/',
});

// サービスカードの1文説明（taxonomy ラベルとは別に、より具体的な説明を添える）
const SERVICE_DESCRIPTIONS: Record<string, string> = {
  'customer-communication':
    '予約・問い合わせ・通知の仕組みを整え、顧客との接点を安定させます。',
  'sales-crm-support':
    '営業の流れと顧客情報を一本化し、対応漏れや属人化を防ぎます。',
  'internal-operations':
    '社内の申請・連絡・業務管理を仕組み化し、運用負荷を下げます。',
  'backoffice-automation':
    '勤怠・会計・労務まわりの手作業を減らし、管理の精度を上げます。',
  'web-ec-store':
    'Webサイト・EC・店舗の売上導線を整理し、集客から購買までをつなぎます。',
};

// 業界カードの1文説明
const INDUSTRY_DESCRIPTIONS: Record<string, string> = {
  manufacturing: '受注管理・工程連絡・外注調整など、現場の情報流通を整えます。',
  clinic: '予約・問診・患者対応の流れを整え、スタッフ負荷を減らします。',
  salon: '予約・顧客管理・通知の仕組みを整え、リピート率を安定させます。',
  restaurant: '予約・順番待ち・スタッフ連絡を整理し、店舗運営を効率化します。',
  'professional-services':
    '顧客管理・案件進捗・請求まわりを一本化し、業務を回しやすくします。',
  'retail-services':
    'POSデータ・在庫・顧客情報を整理し、売場と管理をつなぎます。',
};

// ツールカードの短い補足
const TOOL_DESCRIPTIONS: Record<string, string> = {
  line: '顧客連絡・予約通知・問い合わせ対応を LINE で一本化します。',
  wordpress: 'SEO対応・情報更新・予約導線を整えた Web サイトを構築します。',
  kintone: '顧客管理・案件進捗・社内申請をノーコードで仕組み化します。',
  'google-workspace':
    'スプレッドシート・Forms から自動化まで、Google 環境を活かして整えます。',
  'accounting-hr':
    '会計・勤怠・労務のツールを導入し、バックオフィスの負荷を下げます。',
};

export default async function HomePage() {
  const [services, industries, tools, cases] = await Promise.all([
    contentSource.getAllServicePages(),
    contentSource.getAllIndustryPages(),
    contentSource.getAllToolPages(),
    contentSource.getAllCases(),
  ]);

  return (
    <>
      {/* 1. ヒーロー — 主要CTA #1 + 補助CTA（全体で1箇所のみ） */}
      <HomeHero />

      {/* 2. サービスから探す — 主導線 */}
      <Section
        eyebrow="サービスから探す"
        title="課題のテーマで選ぶ"
        description="Forge Studioは、LINE・kintone・WordPress・会計／労務ツールなど、すでに使っているツールを軸に、売上導線と業務の仕組みを整える会社です。どこから手をつけるかは、次の5つのテーマから選べます。"
      >
        <div className="service-grid">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="service-card"
            >
              <h3 className="service-card__title">
                {SERVICE_CATEGORY_LABELS[service.serviceCategory]}
              </h3>
              <p className="service-card__description">
                {SERVICE_DESCRIPTIONS[service.slug] ?? service.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* 3. 業界別で見る — 準主導線 */}
      <Section
        className="section--muted"
        eyebrow="業界別で見る"
        title="業種から探す"
        description="業界別に、よくある課題と Forge Studio でできることをまとめています。"
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
                {INDUSTRY_DESCRIPTIONS[industry.slug] ?? industry.excerpt}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 4. ツールから探す — 副導線 */}
      <Section
        id="tools"
        eyebrow="ツールから探す"
        title="使っているツールから探す"
        description="よく使われるツールを中心に掲載していますが、ここにないツールでも対応できる場合があります。まずは使っているツールを教えてください。"
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
                {TOOL_DESCRIPTIONS[tool.slug] ?? tool.excerpt}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 5. Forge Studioの約束 */}
      <PromiseSection />

      {/* 6. 事例 — 主要CTA #2 */}
      <Section
        eyebrow="事例"
        title="整えた仕組みの例"
        description="具体的に何を整えたか、いくつかご紹介します。"
      >
        <div className="content-grid">
          {cases.slice(0, 3).map((entry) => (
            <Link
              key={entry.slug}
              href={`/cases/${entry.slug}`}
              className="content-card"
            >
              <p className="content-card__label">事例</p>
              <h3 className="content-card__title">{entry.title}</h3>
              <p className="content-card__description">{entry.excerpt}</p>
            </Link>
          ))}
        </div>
        <div className="section-cta-row">
          <div className="action-row">
            <CtaLink href="/contact" variant="primary">
              相談してみる
            </CtaLink>
            <Link href="/cases" className="service-detail-cta__sub">
              事例一覧を見る →
            </Link>
          </div>
        </div>
      </Section>

      {/* 7. 相談前に知っておきたいこと */}
      <BeforeConsult />

      {/* 8. FAQ */}
      <Section
        className="section--muted"
        eyebrow="FAQ"
        title="よくある質問"
        description="問い合わせ前に気になることをまとめました。"
      >
        <FaqAccordion />
      </Section>

      {/* 9. 最終CTA — 主要CTA #3 */}
      <FinalCta />
    </>
  );
}

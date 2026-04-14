import Link from 'next/link';

import { CtaLink } from '@/components/ui/CtaLink';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { createMetadata } from '@/lib/metadata/site';

export const metadata = createMetadata({
  title: 'Forge Studio について',
  description:
    '経営判断から売上実務、IT実装までをつなぎ、現場で回る仕組みづくりを支援する考え方をまとめています。',
  pathname: '/about',
});

const principles = [
  '必要のない提案まで広げず、利益や業務改善につながりやすいところから整えます。',
  '実務で回らない仕組みは作らず、現場で使い続けられる運用を前提に進めます。',
  '思いついたことを全部やるのではなく、優先順位をつけて進めます。',
];

const themes = [
  '予約・問い合わせ・通知など、顧客との接点を整えること',
  '営業・問い合わせ後の対応・顧客管理を回しやすくすること',
  '社内の申請・連絡・業務管理を仕組み化すること',
  '勤怠・会計・労務まわりの手作業を減らすこと',
  'Webサイト・EC・店舗の売上導線を整理すること',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Forge Studio"
        title="Forge Studio について"
        description="経営判断から売上実務、IT実装までをつなぎ、現場で回る仕組みを整えることを大切にしています。"
      />

      <Section title="大切にしている進め方">
        <ul className="whatwedo-list">
          {principles.map((item) => (
            <li key={item} className="whatwedo-item">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        className="section--muted"
        title="よくご相談いただくテーマ"
        description="売上導線と日々の業務が切り離されないよう、必要な実装まで含めて整理します。"
      >
        <div className="info-items">
          {themes.map((item) => (
            <div key={item} className="info-item">
              <p className="info-item__body">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="section--slim">
        <div className="service-detail-cta">
          <p className="service-detail-cta__lead">
            課題が整理できていない段階でも大丈夫です。まず現状をお聞きしながら、何から整えるべきかを一緒に確認します。
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

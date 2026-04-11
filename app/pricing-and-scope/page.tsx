import { PageHero } from '@/components/sections/PageHero';
import { CtaLink } from '@/components/ui/CtaLink';
import { Section } from '@/components/ui/Section';
import { createMetadata } from '@/lib/metadata/site';

export const metadata = createMetadata({
  title: '料金と対応範囲について',
  description:
    '費用は、求める支援の深さや実装の有無によって変わります。何に費用がかかるのかを、できるだけ説明します。',
  pathname: '/pricing-and-scope',
});

const scopeItems = [
  {
    title: '現状の整理と優先順位づけ',
    body: '業務の流れやツールの使い方を確認し、何から手をつけるべきかを整理します。',
  },
  {
    title: 'ツールの選定と設計',
    body: '課題に合ったツールを選び、運用設計と必要な設定方針を整えます。',
  },
  {
    title: '実装と初期設定',
    body: 'ツールの導入・設定・連携など、実際に動く状態にするための実装を行います。',
  },
  {
    title: '運用設計と引き継ぎ',
    body: '現場で使い続けられるよう、運用ルールの整理と担当者への引き継ぎまで対応します。',
  },
];

const variableFactors = [
  {
    title: '対応範囲の広さ',
    body: '相談だけ、設計まで、実装まで含む、など関わる範囲によって変わります。',
  },
  {
    title: '実装の有無と複雑さ',
    body: 'ツールの設定・連携・カスタマイズの内容によって工数が変わります。',
  },
  {
    title: 'ツールの種類',
    body: '使用するツールのライセンス費用や初期費用は、Forge Studio の費用とは別にかかります。',
  },
  {
    title: '継続的な関与の有無',
    body: '初期の実装だけか、運用フォローも含めるかによって、料金体系が変わります。',
  },
];

export default function PricingAndScopePage() {
  return (
    <>
      {/* ページヘッダー */}
      <PageHero
        title="料金と対応範囲について"
        description="費用は、求める支援の深さや実装の有無によって変わります。何に費用がかかるのかを、できるだけ説明します。"
      />

      {/* 料金の考え方 */}
      <Section title="料金の考え方">
        <div className="text-body">
          <p>
            必要以上に大きな体制や高額な提案を前提にしません。まず現状を聞いたうえで、対応範囲と費用の目安を説明します。
          </p>
          <p>
            相談だけ、設計だけ、実装まで含む、という形でそれぞれに対応できます。最初から全部を頼む必要はなく、課題の優先順位にあわせて段階的に進めることも多い進め方です。
          </p>
          <p>
            料金の考え方を曖昧にせず、何に費用がかかるのか、なぜその金額になるのかを説明することを大切にしています。
          </p>
        </div>
      </Section>

      {/* 対応範囲の考え方 */}
      <Section
        className="section--muted"
        title="対応範囲の考え方"
        description="以下のような内容を、必要な範囲で組み合わせて対応します。すべてを一括で依頼する必要はありません。"
      >
        <div className="info-items">
          {scopeItems.map((item, i) => (
            <div key={i} className="info-item">
              <h3 className="info-item__title">{item.title}</h3>
              <p className="info-item__body">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 相談内容によって変わること */}
      <Section
        title="相談内容によって変わること"
        description="費用と対応範囲は、以下の要素によって変わります。初回の相談で確認しながら整理します。"
      >
        <div className="info-items">
          {variableFactors.map((item, i) => (
            <div key={i} className="info-item">
              <h3 className="info-item__title">{item.title}</h3>
              <p className="info-item__body">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 末尾CTA */}
      <Section className="section--slim section--muted">
        <div className="services-footer-cta">
          <p className="services-footer-cta__lead">
            費用感を含めて、まず相談していただく形で構いません。
          </p>
          <CtaLink href="/contact" variant="primary">
            相談してみる
          </CtaLink>
        </div>
      </Section>
    </>
  );
}

import { PageHero } from '@/components/sections/PageHero';
import { CtaLink } from '@/components/ui/CtaLink';
import { Section } from '@/components/ui/Section';
import { createMetadata } from '@/lib/metadata/site';

export const metadata = createMetadata({
  title: 'はじめての方へ',
  description:
    'どこから相談すればよいかわからない場合でも、現状を整理しながら進められます。',
  pathname: '/how-to-start',
});

const prepareItems = [
  {
    title: '現状の業務の流れ（大まかでよい）',
    body: '普段どのような流れで業務が進んでいるか、どこで手間がかかっているかを話せる範囲でお聞かせください。',
  },
  {
    title: '使っているツールと、その状況',
    body: '現在使っているツールや、以前試したが定着しなかった経緯などがあれば参考になります。なければなくても大丈夫です。',
  },
  {
    title: 'どこに課題や改善余地を感じているか',
    body: 'うまくいっていない感覚がある場所や、繰り返し発生している問題があれば、それだけで相談を始められます。',
  },
  {
    title: '何から手をつけたいか（わからなければそのままで）',
    body: '優先順位が整理できていない段階でも問題ありません。整理自体を一緒に進めることもよくある進め方です。',
  },
];

const flowSteps = [
  {
    num: 'Step 1',
    title: '現状の整理',
    desc: '現状の業務の流れとツールの使い方を確認し、課題の優先順位を一緒に整理します。',
  },
  {
    num: 'Step 2',
    title: '方針の確認',
    desc: '何を先に整えるか、どこまで対応するか、費用感の目安も含めて方針を決めます。',
  },
  {
    num: 'Step 3',
    title: '実装と調整',
    desc: '現場で回り続けられるよう、実装しながら運用に合わせた調整を行います。',
  },
];

export default function HowToStartPage() {
  return (
    <>
      {/* ページヘッダー */}
      <PageHero
        title="はじめての方へ"
        description="どこから相談すればよいかわからない場合でも、現状を整理しながら進められます。"
      />

      {/* 最初に決まっていなくても相談できる */}
      <Section
        title="最初の段階ですべて決まっている必要はありません"
      >
        <div className="text-body">
          <p>
            課題が整理できていない段階でも、相談は受け付けています。問い合わせ前に要件定義書や詳しい資料を用意する必要はありません。
          </p>
          <p>
            わかっている範囲の情報から一緒に整理していきます。「何かうまくいっていない」「この部分を改善したい」という感覚があれば、それが出発点になります。
          </p>
          <p>
            特定のサービスカテゴリが決まっていない場合も、現状を聞きながら、どのテーマで進めるかを一緒に絞り込みます。
          </p>
        </div>
      </Section>

      {/* 相談前にあると助かる情報 */}
      <Section
        className="section--muted"
        title="相談前にあると助かる情報"
        description="これらがなくても相談できますが、話が具体的になりやすくなります。"
      >
        <div className="info-items">
          {prepareItems.map((item, i) => (
            <div key={i} className="info-item">
              <h3 className="info-item__title">{item.title}</h3>
              <p className="info-item__body">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* よくある進め方の流れ */}
      <Section
        title="よくある進め方の流れ"
        description="相談から実装まで、おおよそ以下のような流れで進めます。状況によって順番や内容は変わります。"
      >
        <div className="step-list">
          {flowSteps.map((step) => (
            <div key={step.num} className="step-list__item">
              <span className="step-list__num">{step.num}</span>
              <div>
                <h3 className="step-list__title">{step.title}</h3>
                <p className="step-list__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 末尾CTA */}
      <Section className="section--slim">
        <div className="services-footer-cta">
          <p className="services-footer-cta__lead">
            まず現状を話していただくところから始めます。
          </p>
          <CtaLink href="/contact" variant="primary">
            相談してみる
          </CtaLink>
        </div>
      </Section>
    </>
  );
}

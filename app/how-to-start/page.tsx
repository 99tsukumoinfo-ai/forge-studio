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
    num: '01',
    title: '相談を受け止める',
    desc: 'まずはお話を聞かせてください。まとまっていなくて大丈夫です。「なんとなくうまくいっていない」くらいの粒度から始められます。',
  },
  {
    num: '02',
    title: '課題を整理する',
    desc: 'お聞きした話を、こちらで整理します。どこに本当の課題があるか、どこから着手すると効くかを、一緒に確認していきます。',
  },
  {
    num: '03',
    title: '作るものを決める',
    desc: 'やることを、画面・文章・設定・運用ルールなど、形のあるものに落とします。誰が・いつ・何をするかまで決めるので、実行のイメージが持てます。',
  },
  {
    num: '04',
    title: 'たたき台をつくって調整する',
    desc: 'ゼロから議論するのではなく、まず動くものをお出しします。見ながら違和感を拾って直していくので、決まっていくスピードが速くなります。',
  },
  {
    num: '05',
    title: '動かしながら、次を決める',
    desc: '実際に回し始めると、新しい課題が見えてきます。優先順位をつけて次の一手を返すので、改善が止まりません。',
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
        eyebrow="よくある進め方の流れ"
        title="言葉になっていない悩みを、動かせる形に変えます"
      >
        <p className="step-list__lead">
          「なんとなくうまくいっていない」「どこかで止まっている気がする」——まだ言葉になっていない悩みを、動かせる形に翻訳していくのがForge Studioの仕事です。いつも、次の5ステップで進めています。
        </p>
        <div className="step-list">
          {flowSteps.map((step) => (
            <div key={step.num} className="step-list__item">
              <div className="step-list__num">
                <span className="step-list__num-label">STEP</span>
                <span className="step-list__num-digit">{step.num}</span>
              </div>
              <div>
                <h3 className="step-list__title">{step.title}</h3>
                <p className="step-list__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="step-list__note">
          ※まだ依頼内容が固まっていない段階のご相談でも大丈夫です。STEP 01からご一緒に整理します。
        </p>
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

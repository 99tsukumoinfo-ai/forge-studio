import { Container } from '@/components/ui/Container';

const items = [
  {
    question: 'どの段階から相談できますか？',
    answer:
      '課題が言語化できていない段階からでも構いません。「何かうまくいっていない」という感覚があれば、まずご連絡ください。現状を整理するところから一緒に進めます。',
  },
  {
    question: '費用感はどう考えればいいですか？',
    answer:
      '対応内容や規模によって異なりますが、初回のご相談で概算の目安をお伝えします。まず何にどのくらいかかるかを整理したうえで、進め方を決めます。',
  },
  {
    question: 'どんな情報があると話が早いですか？',
    answer:
      '現在使っているツール・業務の流れ・どこに不満や非効率があるか、の3点が揃うと、具体的な提案に進みやすいです。資料がなくても、言葉で話していただければ大丈夫です。',
  },
  {
    question: '実装まで依頼できますか？',
    answer:
      'はい、設計から実装・運用設計まで対応しています。どこからでも入れます。すでに動いている仕組みの改善だけをご依頼いただくことも可能です。',
  },
];

export function BeforeConsult() {
  return (
    <section className="section">
      <Container>
        <div className="section-heading">
          <h2 className="section-title">相談前に知っておきたいこと</h2>
          <p className="section-description">
            問い合わせ前に気になることを、簡単に整理しました。
          </p>
        </div>
        <div className="before-consult__grid">
          {items.map((item, i) => (
            <div key={i} className="before-consult__item">
              <h3 className="before-consult__question">{item.question}</h3>
              <p className="before-consult__answer">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from '@/components/ui/Container';

const promises = [
  {
    title: '必要のない提案はしません。',
    body: '使わない機能や、現場に合わない施策まで広げない。まずは、利益や業務改善につながりやすいところから整える。',
  },
  {
    title: '実務で回らないものは作りません。',
    body: '見た目だけ整っても、使われなければ意味がない。運用に乗ることを前提に、現場で使い続けられる形を優先する。',
  },
  {
    title: '利益につながる順番で進めます。',
    body: '思いついたことを全部やるのではなく、優先順位をつけて進める。何から手をつけるべきかも含めて整理する。',
  },
  {
    title: '続けやすい料金設計を大切にします。',
    body: '必要以上に大きな体制や高額な提案を前提にしない。中小企業が継続しやすく、改善を積み上げやすい形を重視する。',
  },
  {
    title: '費用の考え方をできるだけ説明します。',
    body: '何に費用がかかるのか、なぜその金額になるのかを曖昧にしない。価格だけでなく、どこに効果を見込むのかも含めて説明する。',
  },
];

export function PromiseSection() {
  return (
    <section className="section section--promise">
      <Container>
        <div className="section-heading">
          <h2 className="section-title">Forge Studioの約束</h2>
          <p className="section-description">
            信頼は、言葉だけでなく、進め方の中に現れると考えています。
          </p>
        </div>
        <ol className="promise-list">
          {promises.map((p, i) => (
            <li key={i} className="promise-item">
              <strong className="promise-title">{p.title}</strong>
              <p className="promise-body">{p.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

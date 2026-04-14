'use client';

import { useState } from 'react';

import type { FaqItem } from '@/lib/content/service-detail-config';

const DEFAULT_FAQS: FaqItem[] = [
  {
    q: 'まだ課題が整理できていない段階でも相談できますか？',
    a: 'はい、問題ありません。どこから手をつければいいかわからない、という状態から一緒に整理することも多いです。まずは現状を話していただければ、優先度の高い課題を一緒に整理します。',
  },
  {
    q: '費用の目安はどう考えればいいですか？',
    a: '対応範囲や必要なツール・実装の内容によって変わります。初回のご相談で現状をお聞きしたうえで、概算と進め方の方向性をお伝えします。まずは費用の考え方を含めてご説明します。',
  },
  {
    q: '特定のツールが前提でなくても相談できますか？',
    a: 'はい、ツールが決まっていない段階からでも相談できます。何を解決したいかを起点に、実務に合うツールや進め方をご提案します。',
  },
  {
    q: 'マーケティングだけ、またはシステム実装だけの依頼はできますか？',
    a: 'はい、部分的なご支援も対応しています。ただ、売上や業務の改善は連動していることが多いため、全体の流れを踏まえてご提案するようにしています。',
  },
  {
    q: '小規模な会社でも対応してもらえますか？',
    a: '対応しています。社員数が少ない会社や、実務担当が一人に集中しがちな環境でも、継続しやすい形を前提に進めます。',
  },
  {
    q: '途中で方向性を変えることはできますか？',
    a: 'はい、進めながら方向を調整することは通常の流れです。実務の状況は変わるため、硬直した計画より現場に合わせた進め方を重視しています。',
  },
  {
    q: '実装まで依頼できますか？',
    a: 'はい、ツールの設定・導入・運用設計まで対応します。設計だけ、実装だけ、という形でのご依頼も可能です。',
  },
];

type Props = {
  faqs?: FaqItem[];
};

export function FaqAccordion({ faqs = DEFAULT_FAQS }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{faq.q}</span>
            <span className="faq-icon" aria-hidden="true">
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          {openIndex === i && (
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

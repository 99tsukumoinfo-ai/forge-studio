'use client';

import { useEffect } from 'react';

import { PageHero } from '@/components/sections/PageHero';
import { CtaLink } from '@/components/ui/CtaLink';
import { Section } from '@/components/ui/Section';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <PageHero
        eyebrow="Error"
        title="ページ表示中にエラーが発生しました"
        description="Step 3 では見た目は簡素に保ちつつ、App Router のエラーハンドリングを先に有効化しています。"
      />
      <Section>
        <div className="action-row">
          <button
            type="button"
            className="cta-link cta-link--primary"
            onClick={reset}
          >
            もう一度読み込む
          </button>
          <CtaLink href="/" variant="secondary">
            トップへ戻る
          </CtaLink>
        </div>
      </Section>
    </>
  );
}

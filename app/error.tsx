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
        description="時間をおいて再読み込みすると解消する場合があります。うまく表示できない場合は、別ページからお試しください。"
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

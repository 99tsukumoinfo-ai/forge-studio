import { PageHero } from '@/components/sections/PageHero';
import { CtaLink } from '@/components/ui/CtaLink';
import { Section } from '@/components/ui/Section';

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="指定されたページは見つかりませんでした"
        description="URL が変更されたか、まだ作成前のページである可能性があります。"
        actions={
          <div className="action-row">
            <CtaLink href="/">トップへ戻る</CtaLink>
            <CtaLink href="/services" variant="secondary">
              サービスを見る
            </CtaLink>
          </div>
        }
      />
      <Section>
        <p className="site-note">
          Step 3 では not-found / error / loading の受け皿も先に配置しています。
        </p>
      </Section>
    </>
  );
}

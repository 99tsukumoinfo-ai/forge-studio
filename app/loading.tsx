import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';

export default function LoadingPage() {
  return (
    <>
      <PageHero
        eyebrow="Loading"
        title="ページを読み込んでいます"
        description="Step 3 の段階では、主要 route に対する loading UI も先に用意しています。"
      />
      <Section>
        <p className="status-note">Preparing route content...</p>
      </Section>
    </>
  );
}

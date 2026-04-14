import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';

export default function LoadingPage() {
  return (
    <>
      <PageHero
        eyebrow="Loading"
        title="ページを読み込んでいます"
        description="内容を準備しています。数秒待っても表示されない場合は、再読み込みをお試しください。"
      />
      <Section>
        <p className="status-note">ページ内容を読み込んでいます。</p>
      </Section>
    </>
  );
}

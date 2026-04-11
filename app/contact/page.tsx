import { InquiryForm } from '@/components/site/InquiryForm';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { createMetadata } from '@/lib/metadata/site';

export const metadata = createMetadata({
  title: 'Contact',
  description:
    'FormSubmit.co を使った暫定フォームの基盤です。後で独自 API に差し替えやすいよう、UI を分離しています。',
  pathname: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="問い合わせ導線の仮実装"
        description="Step 3 では FormSubmit.co を継続しつつ、後で差し替えやすいようフォーム UI をコンポーネント化しています。"
      />
      <Section
        title="フォーム基盤"
        description="送信先は環境変数 `NEXT_PUBLIC_FORMSUBMIT_ENDPOINT` で差し替えられます。"
      >
        <div className="form-panel">
          <InquiryForm />
        </div>
      </Section>
    </>
  );
}

import { InquiryForm } from '@/components/site/InquiryForm';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { createMetadata } from '@/lib/metadata/site';

export const metadata = createMetadata({
  title: '問い合わせ',
  description:
    '課題が整理できていない段階でも、現状を聞きながら何から整えるべきかを一緒に確認できます。',
  pathname: '/contact',
});

const contactTopics = [
  '予約・問い合わせ・通知の流れを整えたい',
  '顧客管理や案件の進捗管理を回しやすくしたい',
  '社内の申請・連絡・集計の手作業を減らしたい',
  'バックオフィスやWebまわりをどこから見直すべきか相談したい',
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="問い合わせ"
        title="まず現状をお聞かせください"
        description="経営判断、売上実務、社内運用、ツール活用など、どこから整えるべきかを一緒に確認します。課題がまだ言葉になっていない段階でも大丈夫です。"
      />
      <Section
        title="こんな相談から始められます"
        description="テーマがはっきり決まっていなくても、現在の状況を聞きながら整理できます。"
      >
        <div className="info-items">
          {contactTopics.map((item) => (
            <div key={item} className="info-item">
              <p className="info-item__body">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="問い合わせフォーム"
        description="内容を確認のうえ、必要に応じて折り返しご連絡します。"
      >
        <div className="form-panel">
          <InquiryForm />
        </div>
      </Section>
    </>
  );
}

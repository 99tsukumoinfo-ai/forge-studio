import { siteConfig } from '@/lib/metadata/site';

type InquiryFormProps = {
  action?: string;
};

export function InquiryForm({
  action = siteConfig.formAction,
}: InquiryFormProps) {
  return (
    <form action={action} method="POST" className="inquiry-form">
      <input type="hidden" name="_subject" value="Forge Studio contact" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="form-field">
        <label htmlFor="company">会社名</label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="株式会社Example"
        />
      </div>
      <div className="form-field">
        <label htmlFor="name">お名前</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="山田 太郎"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">メールアドレス</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="message">相談内容</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="相談したい背景や、優先して見たいことをお書きください。"
          required
        />
      </div>
      <button type="submit" className="cta-link cta-link--primary">
        送信する
      </button>
    </form>
  );
}

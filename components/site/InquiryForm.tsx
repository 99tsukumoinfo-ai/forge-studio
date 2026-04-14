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
        <label htmlFor="company" className="form-label form-label--required">
          会社名
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="株式会社Example"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="name" className="form-label form-label--required">
          氏名
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="山田 太郎"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="email" className="form-label form-label--required">
          メールアドレス
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="role" className="form-label form-label--required">
          役職
        </label>
        <input
          id="role"
          name="role"
          type="text"
          placeholder="代表取締役 / 営業部長 など"
          required
        />
      </div>
      <div className="form-field">
        <label
          htmlFor="company-size"
          className="form-label form-label--required"
        >
          会社の規模
        </label>
        <select id="company-size" name="company_size" required>
          <option value="">選択してください</option>
          <option value="1〜10名">1〜10名</option>
          <option value="11〜30名">11〜30名</option>
          <option value="31〜50名">31〜50名</option>
          <option value="51〜100名">51〜100名</option>
          <option value="101名以上">101名以上</option>
        </select>
      </div>
      <button type="submit" className="cta-link cta-link--primary">
        送信する
      </button>
    </form>
  );
}

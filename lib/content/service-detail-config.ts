import type { ServiceCategory } from './taxonomy';
import { INDUSTRY_LABELS, TOOL_LABELS } from './taxonomy';

export type FaqItem = {
  q: string;
  a: string;
};

export type RelatedIndustry = {
  slug: string;
  label: string;
  note: string;
};

export type RelatedTool = {
  slug: string;
  label: string;
  note: string;
};

export type ServiceDetailConfig = {
  heroDescription: string;
  relatedIndustries: RelatedIndustry[];
  relatedTools: RelatedTool[];
  faqs: FaqItem[];
};

export const SERVICE_DETAIL_CONFIGS: Record<
  ServiceCategory,
  ServiceDetailConfig
> = {
  'customer-communication': {
    heroDescription:
      '問い合わせ対応、予約前後の案内、通知導線など、顧客との接点を整理し、現場で回り続けられる形にします。',
    relatedIndustries: [
      {
        slug: 'clinic',
        label: INDUSTRY_LABELS['clinic'],
        note: '予約・問診前後の案内・患者への通知整備',
      },
      {
        slug: 'salon',
        label: INDUSTRY_LABELS['salon'],
        note: '予約受付・リマインド・再来店フォロー',
      },
      {
        slug: 'restaurant',
        label: INDUSTRY_LABELS['restaurant'],
        note: '予約対応・来店前後の通知・スタッフ連絡',
      },
      {
        slug: 'retail-services',
        label: INDUSTRY_LABELS['retail-services'],
        note: '問い合わせ窓口の整備・会員向け通知',
      },
    ],
    relatedTools: [
      {
        slug: 'line',
        label: TOOL_LABELS['line'],
        note: '予約受付・通知・問い合わせの一本化',
      },
      {
        slug: 'wordpress',
        label: TOOL_LABELS['wordpress'],
        note: 'フォーム設置・予約導線・情報更新の整備',
      },
      {
        slug: 'google-workspace',
        label: TOOL_LABELS['google-workspace'],
        note: '通知・データ連携・対応フローの自動化',
      },
    ],
    faqs: [
      {
        q: '顧客対応の改善だけ相談することはできますか？',
        a: 'はい、予約・通知・問い合わせ対応の一部からでも相談できます。まずどこに負荷がかかっているかを聞いたうえで、整え方の方向性をご提案します。',
      },
      {
        q: 'LINEをすでに使っていますが、もっと活かせますか？',
        a: '使い始めているケースからの相談は多いです。現状の運用を確認したうえで、予約受付・リマインド・フォローなど、整えられる部分を一緒に見ていきます。',
      },
      {
        q: '予約システムを入れるのは大げさでしょうか？',
        a: '規模や運用に合わせて、必要な範囲で整えます。外部の予約システムが不要なケースも多く、LINE や既存ツールの活用で解決できることもあります。',
      },
      {
        q: '複数の顧客接点（電話・LINE・Web）が混在しています。整理できますか？',
        a: 'はい、よくある相談です。どの窓口に何を集約するかを整理したうえで、運用に乗りやすい形に設計します。',
      },
      {
        q: '費用の目安はどう考えればいいですか？',
        a: '対応範囲と必要な実装の内容によって変わります。相談・設計のみと実装まで含む場合で異なるため、初回の相談で概算をお伝えします。',
      },
    ],
  },

  'sales-crm-support': {
    heroDescription:
      '問い合わせ後の対応、顧客情報の整理、案件進捗の管理を整理し、対応漏れと追客の課題を減らします。',
    relatedIndustries: [
      {
        slug: 'professional-services',
        label: INDUSTRY_LABELS['professional-services'],
        note: '顧客管理・案件進捗・受注後フォローの整備',
      },
      {
        slug: 'manufacturing',
        label: INDUSTRY_LABELS['manufacturing'],
        note: '受注管理・顧客別対応履歴の一元化',
      },
      {
        slug: 'retail-services',
        label: INDUSTRY_LABELS['retail-services'],
        note: '来店履歴・購買履歴を活かした顧客対応',
      },
    ],
    relatedTools: [
      {
        slug: 'kintone',
        label: TOOL_LABELS['kintone'],
        note: '顧客情報・案件進捗・対応履歴の一元管理',
      },
      {
        slug: 'google-workspace',
        label: TOOL_LABELS['google-workspace'],
        note: 'スプレッドシート・フォームを使った顧客管理の整備',
      },
      {
        slug: 'wordpress',
        label: TOOL_LABELS['wordpress'],
        note: '問い合わせフォームと後続フローの設計',
      },
    ],
    faqs: [
      {
        q: '営業管理だけを相談できますか？',
        a: 'はい、案件進捗の管理だけ、問い合わせ対応のフローだけ、といった単体のご相談も受け付けています。',
      },
      {
        q: 'CRMツールを入れたことがないのですが、問題ありませんか？',
        a: '問題ありません。ツール未経験の段階からの相談が多いです。何を管理したいかを整理したうえで、規模に合った方法をご提案します。',
      },
      {
        q: 'Excelで管理していますが、移行は大変ですか？',
        a: '移行の負荷は、現在の管理状況によって異なります。Excelで続けながら補完する方法もあるため、一律に移行を前提にはしません。',
      },
      {
        q: '問い合わせのあと、フォローが続かない状況を改善したいです。',
        a: 'よくある相談です。問い合わせから対応・追客までの流れを整理し、どこに仕組みを入れるかを一緒に決めていきます。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: '対応範囲（設計のみ・実装含む）と、使うツールの内容によって変わります。初回相談で現状をお聞きしたうえで、概算と進め方をご説明します。',
      },
    ],
  },

  'internal-operations': {
    heroDescription:
      '申請・承認、社内連絡、業務台帳など、現場のやり取りを整理し、確認や引き継ぎの手間を減らします。',
    relatedIndustries: [
      {
        slug: 'manufacturing',
        label: INDUSTRY_LABELS['manufacturing'],
        note: '工程管理・外注調整・受発注の一元化',
      },
      {
        slug: 'restaurant',
        label: INDUSTRY_LABELS['restaurant'],
        note: 'シフト管理・スタッフ連絡・仕入れ業務の整備',
      },
      {
        slug: 'professional-services',
        label: INDUSTRY_LABELS['professional-services'],
        note: '案件台帳・作業報告・社内申請フローの整理',
      },
      {
        slug: 'retail-services',
        label: INDUSTRY_LABELS['retail-services'],
        note: '在庫管理・発注・スタッフ連絡の仕組み化',
      },
    ],
    relatedTools: [
      {
        slug: 'kintone',
        label: TOOL_LABELS['kintone'],
        note: '社内情報・申請・業務管理の一元化',
      },
      {
        slug: 'google-workspace',
        label: TOOL_LABELS['google-workspace'],
        note: 'フォーム・スプレッドシートを活かした業務自動化',
      },
    ],
    faqs: [
      {
        q: 'Excelと口頭でなんとか回っているのですが、相談できますか？',
        a: 'はい、その状態からの相談が一番多いです。どこに非効率があるかを一緒に整理したうえで、必要な部分だけ仕組み化します。',
      },
      {
        q: 'kintone は検討していますが、合うかどうかわかりません。',
        a: '合う・合わないは、業務内容によって変わります。他のツールで代替できるケースもあるため、ツールを決める前に課題を整理することをおすすめしています。',
      },
      {
        q: '社内に IT 担当者がいません。導入後の運用は続きますか？',
        a: '運用担当者がいない前提で設計します。現場のスタッフが日常的に使い続けられる形になるよう、導入後の引き継ぎまで対応します。',
      },
      {
        q: '一部の業務だけ整えることはできますか？',
        a: 'はい、全部をまとめて依頼する必要はありません。優先順位の高い業務から段階的に進めることも多い進め方です。',
      },
      {
        q: '相談から実装まで、どのくらいかかりますか？',
        a: '対応範囲によって大きく変わります。相談・設計だけであれば数週間、実装まで含めると業務の複雑さによって変わるため、初回相談で目安をお伝えします。',
      },
    ],
  },

  'backoffice-automation': {
    heroDescription:
      '勤怠・経費・労務・会計まわりの手作業を減らし、管理精度を上げ、経営判断につながる数字が見える状態を整えます。',
    relatedIndustries: [
      {
        slug: 'manufacturing',
        label: INDUSTRY_LABELS['manufacturing'],
        note: '勤怠・原価管理・外注費の集計自動化',
      },
      {
        slug: 'clinic',
        label: INDUSTRY_LABELS['clinic'],
        note: '勤怠管理・シフト集計・経費処理の整備',
      },
      {
        slug: 'professional-services',
        label: INDUSTRY_LABELS['professional-services'],
        note: '請求・入金管理・労務処理の効率化',
      },
      {
        slug: 'retail-services',
        label: INDUSTRY_LABELS['retail-services'],
        note: '日次集計・勤怠・経費の自動化',
      },
    ],
    relatedTools: [
      {
        slug: 'accounting-hr',
        label: TOOL_LABELS['accounting-hr'],
        note: '会計・勤怠・労務ツールの選定と初期設定',
      },
      {
        slug: 'google-workspace',
        label: TOOL_LABELS['google-workspace'],
        note: 'データ集計・通知・会計ツール連携の自動化',
      },
    ],
    faqs: [
      {
        q: '会計ソフトはすでに入っていますが、活用できていません。',
        a: 'よくある相談です。すでに導入済みのツールを前提に、何が活用できていないかを整理し、運用に乗りやすい形に整えます。',
      },
      {
        q: 'freee と マネーフォワードのどちらがいいですか？',
        a: '業種・規模・税理士との連携状況によって向き不向きがあります。どちらを選ぶかより、現状の課題を起点に整理することを優先しています。',
      },
      {
        q: 'バックオフィスの整備から始めても大丈夫ですか？',
        a: 'はい、売上に直結しない部分に見えても、担当者の負荷を下げることで経営全体が動きやすくなることは多いです。',
      },
      {
        q: '社労士や税理士とのやり取りが必要な場合はどうなりますか？',
        a: '既に顧問がいる場合は、その方との連携を前提に進めます。ツール設定や運用設計の範囲で対応し、専門家の領域には踏み込みません。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: 'ツールの選定・設定・連携設計の内容によって変わります。ツール自体のライセンス費用は別途かかるため、初回相談で整理します。',
      },
    ],
  },

  'web-ec-store': {
    heroDescription:
      'Webサイト・ECサイト・店舗の売上導線を整理し、集客から問い合わせ・購買・再来店までがつながる形にします。',
    relatedIndustries: [
      {
        slug: 'retail-services',
        label: INDUSTRY_LABELS['retail-services'],
        note: 'EC・実店舗の売上導線・在庫・顧客接点の整備',
      },
      {
        slug: 'salon',
        label: INDUSTRY_LABELS['salon'],
        note: '集客ページ・予約フォーム・再来店導線の整備',
      },
      {
        slug: 'restaurant',
        label: INDUSTRY_LABELS['restaurant'],
        note: '予約フォーム・メニュー更新・来店後フォロー',
      },
      {
        slug: 'clinic',
        label: INDUSTRY_LABELS['clinic'],
        note: '情報発信・問い合わせ導線・診療案内の整備',
      },
    ],
    relatedTools: [
      {
        slug: 'wordpress',
        label: TOOL_LABELS['wordpress'],
        note: 'SEO・情報更新・フォーム・EC 機能の整備',
      },
      {
        slug: 'line',
        label: TOOL_LABELS['line'],
        note: 'Web からの流入後フォロー・再来店通知',
      },
      {
        slug: 'google-workspace',
        label: TOOL_LABELS['google-workspace'],
        note: 'フォーム連携・通知自動化・アクセスデータ活用',
      },
    ],
    faqs: [
      {
        q: 'Webサイトはあるのですが、問い合わせが来ません。改善を相談できますか？',
        a: 'はい、よくある相談です。サイトの構造・導線・フォームの設置状況を確認したうえで、改善の優先順位を整理します。',
      },
      {
        q: 'WordPress で作ったサイトの改修も対応できますか？',
        a: 'はい、既存の WordPress サイトへの対応が多いです。現状を確認したうえで、必要な改修の範囲を整理します。',
      },
      {
        q: 'EC サイトの立ち上げを検討しています。',
        a: '商品数・運用体制・決済方法によって、適切なプラットフォームが変わります。まず現状の販売課題から整理することをおすすめしています。',
      },
      {
        q: 'SNS や広告との連携も含めて相談できますか？',
        a: 'Webサイト・EC を軸に、導線としてSNSや広告とつなげる設計は対応しています。広告運用自体の代行は別途ご相談ください。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: '改修の規模・追加機能の内容によって変わります。相談・設計だけのご依頼も可能です。初回相談で概算をお伝えします。',
      },
    ],
  },
};

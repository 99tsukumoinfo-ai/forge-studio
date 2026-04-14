import type { IndustryPageSlug, ServiceCategory, ToolPageSlug } from './taxonomy';
import { INDUSTRY_LABELS, SERVICE_CATEGORY_LABELS } from './taxonomy';
import type { FaqItem } from './service-detail-config';

export type ImprovementItem = {
  title: string;
  body: string;
};

export type RelatedServiceItem = {
  slug: ServiceCategory;
  label: string;
  note: string;
};

export type RelatedIndustryItem = {
  slug: IndustryPageSlug;
  label: string;
  note: string;
};

export type ToolDetailConfig = {
  heroDescription: string;
  improvements: ImprovementItem[];
  worries: string[];
  whatWeDo: string[];
  relatedServices: RelatedServiceItem[];
  relatedIndustries: RelatedIndustryItem[];
  faqs: FaqItem[];
};

export const TOOL_DETAIL_CONFIGS: Record<ToolPageSlug, ToolDetailConfig> = {
  line: {
    heroDescription:
      '顧客への通知・案内・問い合わせ対応など、LINEを起点に顧客接点を整え、現場で続けやすい運用を作ります。',
    improvements: [
      {
        title: '問い合わせ・予約の窓口を一本化する',
        body: '電話・メール・LINEに分散している顧客からの連絡を、LINE公式アカウントに集約し、対応漏れと負荷を減らします。',
      },
      {
        title: '予約確認・リマインドを自動化する',
        body: '予約受付後の確認メッセージや前日リマインドを自動で送ることで、手作業による送り忘れをなくします。',
      },
      {
        title: '来店後・購入後のフォローを整える',
        body: '来店・購入後の御礼メッセージや再来店のきっかけになる案内を、タイミングよく届ける仕組みを作ります。',
      },
      {
        title: '会員・顧客向けの通知・案内を配信する',
        body: 'セール案内・新商品情報・クーポン配信など、顧客へのメッセージをLINEから効率よく届けます。',
      },
      {
        title: 'スタッフへの業務連絡・申し送りを整理する',
        body: '個人LINEに混在しがちなスタッフ間の連絡を、グループ管理やアカウントで整理します。',
      },
    ],
    worries: [
      'LINEを使っているが、対応が個人アカウントに混在していて管理できていない',
      '通知やリマインドを送りたいが、毎回手動で作業している',
      '問い合わせが来るが、対応のルールや記録が残っていない',
      '友だち登録は増えてきたが、活用できていない',
    ],
    whatWeDo: [
      'LINE公式アカウントのリッチメニューや自動返信を整備し、問い合わせ対応の窓口を整える',
      '予約・来店・購入に連動した通知フローを設計・実装する',
      'フォロー・案内のメッセージ配信ルールを整理し、運用に乗せる',
      '他のツール（フォーム・スプレッドシート等）との連携を整備する',
    ],
    relatedServices: [
      {
        slug: 'customer-communication',
        label: SERVICE_CATEGORY_LABELS['customer-communication'],
        note: '問い合わせ・予約・通知の流れを整える',
      },
      {
        slug: 'web-ec-store',
        label: SERVICE_CATEGORY_LABELS['web-ec-store'],
        note: 'Web・ECからLINEへの誘導と再来店フォロー',
      },
    ],
    relatedIndustries: [
      {
        slug: 'clinic',
        label: INDUSTRY_LABELS['clinic'],
        note: '予約・リマインド・案内の自動化',
      },
      {
        slug: 'salon',
        label: INDUSTRY_LABELS['salon'],
        note: '予約受付・再来店フォローの整備',
      },
      {
        slug: 'restaurant',
        label: INDUSTRY_LABELS['restaurant'],
        note: '予約対応・スタッフ連絡の一本化',
      },
      {
        slug: 'retail-services',
        label: INDUSTRY_LABELS['retail-services'],
        note: '顧客への通知・案内・再来店導線',
      },
    ],
    faqs: [
      {
        q: 'すでにLINE公式アカウントを持っています。それでも相談できますか？',
        a: 'はい、使い始めているケースからの相談が多いです。現状の運用を確認したうえで、整えられる部分を一緒に見ていきます。',
      },
      {
        q: 'LINE公式アカウントを持っていなくても相談できますか？',
        a: 'はい、アカウント開設の前段階からでも相談できます。そもそもLINEが課題に合うかどうかを含めて整理します。',
      },
      {
        q: '自動返信やリマインドの設定は難しいですか？',
        a: 'ツールによって設定の複雑さは異なります。現場で続けられるシンプルな形を前提に設計するので、運用負荷が重くならないよう整えます。',
      },
      {
        q: 'どこまで実装まで対応できますか？',
        a: 'アカウント設定・自動メッセージの設計・他ツールとの連携まで対応します。設計だけ、実装だけ、という形でのご依頼も可能です。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: '対応範囲と設定内容によって変わります。初回相談で現状をお聞きしたうえで、概算と進め方をご説明します。',
      },
    ],
  },

  wordpress: {
    heroDescription:
      'サイト導線の整備、フォーム設置、EC機能の追加など、WordPressを起点に売上につながる接点を整えます。',
    improvements: [
      {
        title: '問い合わせフォームと後続フローを整える',
        body: 'フォームを設置するだけでなく、受信後の通知・自動返信・対応フローまでを含めて整備します。',
      },
      {
        title: 'サービス・料金ページの情報を整理し更新しやすくする',
        body: '古い情報が放置されたままのページを整理し、スタッフが自分で更新できる構造に変えます。',
      },
      {
        title: '予約・EC機能を追加する',
        body: '既存サイトに予約フォームやショッピング機能を追加し、Web経由での成約・購入をしやすくします。',
      },
      {
        title: '集客につながるコンテンツ構造を整える',
        body: '検索からの流入が増えるよう、情報の整理とページ構造の見直しを行います。',
      },
      {
        title: 'LINEや問い合わせ後の導線とつなげる',
        body: 'サイトへの訪問者がそのまま離脱しないよう、LINE誘導・問い合わせ・予約への導線を設計します。',
      },
    ],
    worries: [
      'サイトはあるが問い合わせが来ない',
      '情報が古いままになっていて、自分で更新する方法がわからない',
      'フォームはあるが、送信後の対応フローが整っていない',
      'WordPressを入れたが、誰が管理するか決まっていない',
    ],
    whatWeDo: [
      'サイトの導線・フォーム・情報構造を見直し、問い合わせにつながりやすくする',
      'スタッフが自分で更新できる運用体制を整える',
      '予約・EC・LINEとの連携を設計・実装する',
      'コンテンツの整理とSEOを意識したページ設計を行う',
    ],
    relatedServices: [
      {
        slug: 'web-ec-store',
        label: SERVICE_CATEGORY_LABELS['web-ec-store'],
        note: 'サイト・EC・導線の整備',
      },
      {
        slug: 'customer-communication',
        label: SERVICE_CATEGORY_LABELS['customer-communication'],
        note: 'フォームと問い合わせ後のフロー設計',
      },
      {
        slug: 'sales-crm-support',
        label: SERVICE_CATEGORY_LABELS['sales-crm-support'],
        note: '問い合わせフォームと顧客管理の接続',
      },
    ],
    relatedIndustries: [
      {
        slug: 'retail-services',
        label: INDUSTRY_LABELS['retail-services'],
        note: 'EC・店舗導線・情報更新の整備',
      },
      {
        slug: 'salon',
        label: INDUSTRY_LABELS['salon'],
        note: '集客ページ・予約フォーム・導線整備',
      },
      {
        slug: 'clinic',
        label: INDUSTRY_LABELS['clinic'],
        note: '診療案内・問い合わせ・予約導線',
      },
      {
        slug: 'professional-services',
        label: INDUSTRY_LABELS['professional-services'],
        note: '問い合わせフォーム・サービス案内の整備',
      },
    ],
    faqs: [
      {
        q: '既存のWordPressサイトへの改修も対応できますか？',
        a: 'はい、既存サイトへの対応が多いです。現状を確認したうえで、必要な改修の範囲を整理します。',
      },
      {
        q: 'WordPressを全面的に作り直さなくても改善できますか？',
        a: 'はい、導線の調整・フォームの設置・情報の整理だけで状況が変わることは多いです。全面リニューアルが必要かどうかも含めて整理します。',
      },
      {
        q: 'EC機能を追加したいのですが、対応できますか？',
        a: '対応しています。商品数・決済方法・運用体制によって、適切な方法が変わるため、まず販売の課題から整理します。',
      },
      {
        q: 'スタッフが自分で更新できるようにしてもらえますか？',
        a: 'はい、現場のスタッフが日常的に更新できる構造を前提に整えます。操作方法の引き継ぎも含めて対応します。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: '改修の規模・追加機能の内容によって変わります。初回相談で現状をお聞きしたうえで、概算と進め方をご説明します。',
      },
    ],
  },

  kintone: {
    heroDescription:
      '顧客管理・案件進捗・社内申請など、kintoneを起点に社内の情報を整理して、担当者が変わっても回る形に整えます。',
    improvements: [
      {
        title: '顧客情報・案件進捗をスタッフ間で共有する',
        body: '担当者ごとのExcel管理から、kintoneで全員が最新状況を確認できる形に移行します。',
      },
      {
        title: '申請・承認フローをシステムに乗せる',
        body: '口頭やメールで行っていた申請・承認を、kintoneのワークフローで整理し記録に残します。',
      },
      {
        title: '受発注・工程・台帳を一元管理する',
        body: '受注情報・工程進捗・在庫・外注調整など、バラバラだった情報を一箇所で管理できる形にします。',
      },
      {
        title: '対応ステータスと次のアクションを可視化する',
        body: '案件や対応の状態が一目でわかるよう、ステータス管理とアラートの仕組みを整えます。',
      },
    ],
    worries: [
      'kintoneを入れたが、使い方が担当者によってバラバラになっている',
      'アプリを作ったが、データが正しく入力されていない',
      '担当者が変わったときに引き継げる状態になっていない',
      '何を管理すべきかが決まらないまま使い続けている',
    ],
    whatWeDo: [
      '業務の流れを整理したうえで、kintoneのアプリ設計・構築を行う',
      '入力ルールと運用フローを定めて、現場に定着しやすい形を整える',
      '通知・ステータス管理・権限設計を含めて整備する',
      '既存のExcelや他ツールからの移行設計を行う',
    ],
    relatedServices: [
      {
        slug: 'internal-operations',
        label: SERVICE_CATEGORY_LABELS['internal-operations'],
        note: '申請・台帳・業務管理の仕組み化',
      },
      {
        slug: 'sales-crm-support',
        label: SERVICE_CATEGORY_LABELS['sales-crm-support'],
        note: '顧客情報・案件進捗の一元管理',
      },
    ],
    relatedIndustries: [
      {
        slug: 'manufacturing',
        label: INDUSTRY_LABELS['manufacturing'],
        note: '受発注・工程・外注管理の整備',
      },
      {
        slug: 'professional-services',
        label: INDUSTRY_LABELS['professional-services'],
        note: '顧客管理・案件進捗・申請フロー',
      },
      {
        slug: 'retail-services',
        label: INDUSTRY_LABELS['retail-services'],
        note: '在庫・発注・顧客情報の整理',
      },
    ],
    faqs: [
      {
        q: 'すでにkintoneを使っていますが、うまく活用できていません。',
        a: 'よくある相談です。現状の運用を確認したうえで、設計の見直しや整理できる部分を一緒に検討します。',
      },
      {
        q: 'kintoneが合うかどうかわかりません。',
        a: '合う・合わないは業務の内容によって変わります。他のツールで代替できるケースもあるため、まず課題を整理することをおすすめしています。',
      },
      {
        q: '社内にIT担当者がいなくても使い続けられますか？',
        a: 'はい、専任のIT担当がいない前提で設計します。現場のスタッフが日常的に使い続けられる形を優先し、引き継ぎまで含めて対応します。',
      },
      {
        q: 'ExcelからkintoneへのデータMigrationも対応できますか？',
        a: 'データの量や内容によって対応範囲が変わります。まず現状のデータ管理状況を整理したうえで、移行の方針をご提案します。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: 'アプリの構成・設定の内容・移行の有無によって変わります。kintone自体のライセンス費用は別途かかります。初回相談で概算をお伝えします。',
      },
    ],
  },

  'google-workspace': {
    heroDescription:
      'スプレッドシート・フォーム・Apps Scriptなど、すでにあるGoogle環境を活かして集計・通知・連携の自動化を整えます。',
    improvements: [
      {
        title: '集計・報告の手作業を自動化する',
        body: '毎回手で集計していたデータ処理をApps Scriptで自動化し、担当者の作業時間を減らします。',
      },
      {
        title: 'フォームからの情報を整理・通知する',
        body: 'Googleフォームで受け取った情報を自動でスプレッドシートに集約し、担当者へメールや通知で共有します。',
      },
      {
        title: 'スタッフ間の情報共有・申し送りを整える',
        body: 'ドキュメントやスプレッドシートを活用し、スタッフが最新の状況を確認できる共有の仕組みを作ります。',
      },
      {
        title: '他ツールとのデータ連携を整備する',
        body: 'kintone・LINE・WordPressなど、他のツールとGoogle Workspaceをつなぐ連携フローを設計・実装します。',
      },
    ],
    worries: [
      'スプレッドシートで管理しているが、手入力が多くミスが起きやすい',
      'フォームは使っているが、集計と通知が毎回手作業になっている',
      'Google Workspaceを使っているが、ツール間の連携ができていない',
      'Apps Scriptで何かできると聞いたが、何から始めるかわからない',
    ],
    whatWeDo: [
      '現在のスプレッドシート・フォームの使い方を整理し、自動化できる部分を設計・実装する',
      'Apps Scriptで集計・通知・メール送信の自動化を行う',
      '他ツールとのデータ連携フローを整備する',
      '運用ルールを整えて、担当者が変わっても続けられる形にする',
    ],
    relatedServices: [
      {
        slug: 'internal-operations',
        label: SERVICE_CATEGORY_LABELS['internal-operations'],
        note: '集計・申し送り・情報共有の自動化',
      },
      {
        slug: 'backoffice-automation',
        label: SERVICE_CATEGORY_LABELS['backoffice-automation'],
        note: '集計・通知・会計ツール連携の自動化',
      },
      {
        slug: 'customer-communication',
        label: SERVICE_CATEGORY_LABELS['customer-communication'],
        note: 'フォーム連携・通知の自動化',
      },
    ],
    relatedIndustries: [
      {
        slug: 'manufacturing',
        label: INDUSTRY_LABELS['manufacturing'],
        note: '工程・集計・申し送りの自動化',
      },
      {
        slug: 'clinic',
        label: INDUSTRY_LABELS['clinic'],
        note: 'フォーム連携・スタッフ共有の自動化',
      },
      {
        slug: 'restaurant',
        label: INDUSTRY_LABELS['restaurant'],
        note: 'シフト・集計・申し送りの整理',
      },
      {
        slug: 'professional-services',
        label: INDUSTRY_LABELS['professional-services'],
        note: '期日通知・集計・情報共有の自動化',
      },
    ],
    faqs: [
      {
        q: 'すでにGoogle Workspaceを使っています。それでも相談できますか？',
        a: 'はい、使い始めているケースからの相談が多いです。現状を確認したうえで、整えられる部分を一緒に見ていきます。',
      },
      {
        q: 'Apps Scriptはどの程度のことができますか？',
        a: '集計・通知・メール送信・他ツールとの連携など、幅広い自動化が可能です。何を自動化したいかを整理してからご提案します。',
      },
      {
        q: 'GoogleシートをkintoneやLINEと連携させることはできますか？',
        a: '対応しています。連携の内容によって方法が変わるため、まず現状と目的を確認したうえで設計します。',
      },
      {
        q: '社内のスタッフが触れる前提で整備できますか？',
        a: 'はい、担当者が変わっても運用が続けられることを前提に整えます。ルール整理と引き継ぎまで含めて対応します。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: '自動化の内容と連携先ツールによって変わります。Google Workspace自体のライセンス費用は別途です。初回相談で概算をお伝えします。',
      },
    ],
  },

  'accounting-hr': {
    heroDescription:
      '会計・労務・勤怠まわりのツールを整え、手作業を減らし、経営判断につながる数字が見える状態を作ります。',
    improvements: [
      {
        title: '勤怠打刻・シフト管理・給与計算を整える',
        body: '紙やExcelで行っていた勤怠管理を専用ツールに移行し、月次の集計負荷を大幅に下げます。',
      },
      {
        title: '会計・請求・経費の処理を整理する',
        body: '請求書の発行・入金確認・経費精算の流れを整備し、月次決算の精度と速度を上げます。',
      },
      {
        title: '労務・社会保険まわりの手作業を減らす',
        body: '入退社手続き・保険手続き・各種届出の負荷を下げ、担当者が本来の業務に集中できるようにします。',
      },
      {
        title: '経営判断につながる数字の見え方を整える',
        body: '売上・原価・人件費・キャッシュフローが定期的に確認できる形を整え、経営判断の質を上げます。',
      },
    ],
    worries: [
      '会計ツールを入れたが、運用が定着していない',
      'データは入っているが、経営判断に使える形になっていない',
      'freeeとマネーフォワードのどちらが合うかわからない',
      '税理士・社労士との連携の仕方が整っていない',
    ],
    whatWeDo: [
      'ツール選定の前に、現状の業務フローと課題を整理する',
      '勤怠・給与・会計の各ツールの初期設定と運用設計を行う',
      '税理士・社労士との連携を前提にした設定と運用ルールを整える',
      'Google Workspaceなど他ツールとのデータ連携を設計・整備する',
    ],
    relatedServices: [
      {
        slug: 'backoffice-automation',
        label: SERVICE_CATEGORY_LABELS['backoffice-automation'],
        note: '会計・労務・勤怠まわりの整備と自動化',
      },
    ],
    relatedIndustries: [
      {
        slug: 'manufacturing',
        label: INDUSTRY_LABELS['manufacturing'],
        note: '勤怠・原価・会計集計の整備',
      },
      {
        slug: 'clinic',
        label: INDUSTRY_LABELS['clinic'],
        note: '勤怠管理・給与計算・会計の整備',
      },
      {
        slug: 'professional-services',
        label: INDUSTRY_LABELS['professional-services'],
        note: '請求・入金・労務処理の効率化',
      },
      {
        slug: 'retail-services',
        label: INDUSTRY_LABELS['retail-services'],
        note: '日次集計・勤怠・会計の自動化',
      },
    ],
    faqs: [
      {
        q: 'すでに会計ツールを使っていますが、相談できますか？',
        a: 'はい、導入済みのツールを前提に、何が活用できていないかを整理し、運用に乗りやすい形に整えます。',
      },
      {
        q: 'freeeとマネーフォワードのどちらがいいですか？',
        a: '業種・規模・税理士との連携状況によって向き不向きがあります。どちらを選ぶかより、現状の課題を起点に整理することを優先しています。',
      },
      {
        q: '税理士や社労士がいる場合、その方との連携は考慮してもらえますか？',
        a: 'はい、既に顧問がいる場合は、その方との連携を前提に進めます。専門家の領域には踏み込まず、ツール設定・運用設計の範囲で対応します。',
      },
      {
        q: '勤怠だけ、会計だけ、といった部分的な相談はできますか？',
        a: 'はい、部分的なご相談も受け付けています。優先度の高い部分から段階的に進めることも多い進め方です。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: 'ツールの選定・設定・連携設計の内容によって変わります。ツール自体のライセンス費用は別途かかります。初回相談で整理します。',
      },
    ],
  },
};

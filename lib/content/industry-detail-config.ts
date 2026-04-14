import type { IndustryPageSlug, ServiceCategory, ToolTag } from './taxonomy';
import { SERVICE_CATEGORY_LABELS, TOOL_LABELS } from './taxonomy';
import type { FaqItem } from './service-detail-config';

export type IssueItem = {
  title: string;
  body: string;
};

export type RelatedService = {
  slug: ServiceCategory;
  label: string;
  note: string;
};

export type RelatedToolItem = {
  slug: ToolTag;
  label: string;
  note: string;
};

export type IndustryDetailConfig = {
  heroDescription: string;
  issues: IssueItem[];
  background: string;
  whatWeDo: string[];
  relatedServices: RelatedService[];
  relatedTools: RelatedToolItem[];
  faqs: FaqItem[];
};

export const INDUSTRY_DETAIL_CONFIGS: Record<
  IndustryPageSlug,
  IndustryDetailConfig
> = {
  manufacturing: {
    heroDescription:
      '受発注・工程管理・外注調整・社内連携など、現場に残りやすい業務負荷を整理する相談をよく受けます。',
    issues: [
      {
        title: '情報が現場・事務・営業で分散している',
        body: '台帳・報告・進捗がExcelや口頭で管理されており、担当者が不在になると状況が誰にもわからない状態になりやすい。',
      },
      {
        title: '現場と管理部門の連携に手間がかかる',
        body: '確認・承認・報告のたびに電話やメールでのやり取りが発生し、記録に残らないまま進むことが多い。',
      },
      {
        title: '数字があっても経営判断につながりにくい',
        body: '売上・原価・工程の数字はあるが、集計が手作業で時間がかかり、状況を把握するタイミングが遅れやすい。',
      },
      {
        title: '外注先との調整が属人化している',
        body: '担当者ごとに管理方法が異なり、外注先への発注状況や受け取り確認の情報が共有されないまま進むことがある。',
      },
    ],
    background:
      '製造業では、現場・事務・営業・管理部門がそれぞれの業務を個別に動かすことが多く、部門間の情報共有が後回しになりやすい構造があります。特に中堅中小規模では専任のIT担当者がおらず、Excel・メール・口頭が長く使い続けられることで、気づかないうちに業務の分散が積み重なります。',
    whatWeDo: [
      '受発注・工程・外注の情報を一元管理できる形に整える',
      '社内の申請・承認・報告の流れをシステムに乗せる',
      '勤怠・経費・会計の集計負荷を減らし、数字が見える状態にする',
      '担当者不在でも状況が把握できる仕組みを作る',
    ],
    relatedServices: [
      {
        slug: 'internal-operations',
        label: SERVICE_CATEGORY_LABELS['internal-operations'],
        note: '工程管理・申請・社内連携の整備',
      },
      {
        slug: 'backoffice-automation',
        label: SERVICE_CATEGORY_LABELS['backoffice-automation'],
        note: '勤怠・経費・会計集計の自動化',
      },
      {
        slug: 'sales-crm-support',
        label: SERVICE_CATEGORY_LABELS['sales-crm-support'],
        note: '受注管理・顧客対応履歴の一元化',
      },
    ],
    relatedTools: [
      {
        slug: 'kintone',
        label: TOOL_LABELS['kintone'],
        note: '受発注・工程・外注管理を一元化する仕組み作り',
      },
      {
        slug: 'google-workspace',
        label: TOOL_LABELS['google-workspace'],
        note: '申請・報告・集計フローの自動化',
      },
      {
        slug: 'accounting-hr',
        label: TOOL_LABELS['accounting-hr'],
        note: '勤怠・給与・会計まわりの整備',
      },
    ],
    faqs: [
      {
        q: '製造業での相談は多いですか？',
        a: 'はい、よく相談に乗る業種の一つです。現場の業務管理から社内連携の整備まで、幅広いテーマで対応しています。',
      },
      {
        q: 'kintone の導入を検討しているのですが、製造業に合いますか？',
        a: '受発注管理・工程進捗・外注調整など、製造業との相性が良い場面は多いです。ただし、業務の内容によって合う・合わないがあるため、まず課題を整理することをおすすめしています。',
      },
      {
        q: 'IT 担当者がいなくても大丈夫ですか？',
        a: 'はい、専任のIT担当がいない前提で設計します。現場のスタッフが日常的に使い続けられる形を優先します。',
      },
      {
        q: '部分的な課題だけ相談することはできますか？',
        a: '問題ありません。工程管理だけ、外注調整だけ、といった範囲での相談も受け付けています。全部をまとめて依頼する必要はありません。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: '対応範囲（設計のみ・実装含む）とツールの内容によって変わります。初回相談で現状をお聞きしたうえで、概算と進め方をご説明します。',
      },
    ],
  },

  clinic: {
    heroDescription:
      '予約・案内・通知の流れ、スタッフ連携、バックオフィスの整備など、少人数で多くの接点を回す現場の課題に対応しています。',
    issues: [
      {
        title: '予約・案内・通知の流れが整っていない',
        body: '電話・Webフォーム・LINEなど複数の窓口が混在し、予約確認やリマインドが手作業のままになっていることが多い。',
      },
      {
        title: '患者対応とバックオフィスが同時進行している',
        body: '接客対応をしながら勤怠・請求・シフト調整が走るため、どちらも中途半端になりやすい構造がある。',
      },
      {
        title: '勤怠・給与計算に時間がかかっている',
        body: 'シフトの把握・勤怠記録・給与計算を手作業で行っており、月末に担当者の負荷が集中しやすい。',
      },
      {
        title: 'サイトや予約導線が集客に結びついていない',
        body: 'サイトはあるが情報が古く、問い合わせや予約への導線が整っていないため、せっかくのアクセスが活かせていない。',
      },
    ],
    background:
      'クリニック・自由診療では、患者対応・スタッフ管理・経営管理が同時進行することが多く、どの業務も重要であるために後回しにしにくい構造があります。また、専任のIT担当者を置きにくいため、紙・Excelが長く使われ続けることで、各業務の改善余地が気づかないまま積み上がりやすい傾向があります。',
    whatWeDo: [
      '予約受付・リマインド・案内の流れをLINEやWebから整える',
      '勤怠・給与計算・会計まわりを自動化し、担当者の負荷を下げる',
      'サイトや問い合わせ導線を整備し、集客につながる形にする',
      'スタッフ間の連絡・情報共有を整理し、確認の手間を減らす',
    ],
    relatedServices: [
      {
        slug: 'customer-communication',
        label: SERVICE_CATEGORY_LABELS['customer-communication'],
        note: '予約・通知・案内の流れを整える',
      },
      {
        slug: 'backoffice-automation',
        label: SERVICE_CATEGORY_LABELS['backoffice-automation'],
        note: '勤怠・給与・会計の自動化',
      },
      {
        slug: 'web-ec-store',
        label: SERVICE_CATEGORY_LABELS['web-ec-store'],
        note: 'サイトや予約導線の整備',
      },
    ],
    relatedTools: [
      {
        slug: 'line',
        label: TOOL_LABELS['line'],
        note: '予約受付・リマインド・案内の一本化',
      },
      {
        slug: 'accounting-hr',
        label: TOOL_LABELS['accounting-hr'],
        note: '勤怠・給与・会計まわりの整備',
      },
      {
        slug: 'wordpress',
        label: TOOL_LABELS['wordpress'],
        note: 'サイト・問い合わせ・予約導線の整備',
      },
      {
        slug: 'google-workspace',
        label: TOOL_LABELS['google-workspace'],
        note: '通知・フォーム連携・スタッフ共有の自動化',
      },
    ],
    faqs: [
      {
        q: 'クリニックでの相談は多いですか？',
        a: 'はい、よく相談に乗る業種の一つです。予約・案内まわりから、勤怠・バックオフィスの整備まで、幅広いテーマで対応しています。',
      },
      {
        q: '電子カルテとの連携は対応できますか？',
        a: '電子カルテとの直接連携は対応ツールや契約によって異なります。まずは予約・通知・バックオフィスなど、連携が不要な範囲から整えることをおすすめしています。',
      },
      {
        q: '既にLINEを使っているのですが、もっと活かせますか？',
        a: 'はい、使い始めているケースからの相談も多いです。予約受付・リマインド・フォローなど、整えられる部分を一緒に見ていきます。',
      },
      {
        q: 'スタッフが変わっても続けられる形にできますか？',
        a: 'はい、担当者が変わっても運用が続けられることを前提に設計します。引き継ぎまで含めた対応が基本の進め方です。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: '対応範囲と使うツールの内容によって変わります。相談・設計だけのご依頼も可能です。初回相談で概算をお伝えします。',
      },
    ],
  },

  salon: {
    heroDescription:
      '予約・再来店フォロー・顧客管理・Web導線など、少人数で接客と運営を両立する現場の整備を得意としています。',
    issues: [
      {
        title: '予約受付に手間がかかっている',
        body: '電話での予約が多く、施術中に対応できず折り返しが発生する。LINEからの問い合わせも属人的な対応になりやすい。',
      },
      {
        title: '再来店への働きかけが続かない',
        body: 'リピート促進のメッセージや来店後のフォローを送りたいが、手間がかかって継続できていない。',
      },
      {
        title: 'サイトと実際の導線がつながっていない',
        body: 'Webサイトはあるが情報が古く、問い合わせや予約へのリンクが整っていないため、来客につながりにくい。',
      },
      {
        title: '顧客情報が紙やメモで管理されている',
        body: '来店履歴・施術内容・次回提案などが担当者の記憶や紙に依存しており、スタッフ間で共有できていない。',
      },
    ],
    background:
      '美容室・サロンでは、予約・接客・再来店フォロー・販促が同じ担当者に集まりやすく、それぞれの整備が後回しになりやすい構造があります。また、スタッフ数が少ないため専任の管理担当を置きにくく、現場の手が止まってしまうことへの抵抗感から、ツール導入の一歩が踏み出しにくい環境もよく見られます。',
    whatWeDo: [
      'LINE公式アカウントで予約受付・リマインド・フォローを整える',
      'サイトや予約フォームを整備し、問い合わせにつながる形にする',
      '顧客情報を整理し、再来店のアプローチを続けやすくする',
      'スタッフ間の連絡・シフト・情報共有を整理する',
    ],
    relatedServices: [
      {
        slug: 'customer-communication',
        label: SERVICE_CATEGORY_LABELS['customer-communication'],
        note: '予約・通知・再来店フォローの整備',
      },
      {
        slug: 'web-ec-store',
        label: SERVICE_CATEGORY_LABELS['web-ec-store'],
        note: 'サイト・予約フォーム・導線の整備',
      },
      {
        slug: 'internal-operations',
        label: SERVICE_CATEGORY_LABELS['internal-operations'],
        note: 'スタッフ連携・顧客情報の整理',
      },
    ],
    relatedTools: [
      {
        slug: 'line',
        label: TOOL_LABELS['line'],
        note: '予約受付・リマインド・再来店フォローの一本化',
      },
      {
        slug: 'wordpress',
        label: TOOL_LABELS['wordpress'],
        note: 'サイト・予約フォーム・情報更新の整備',
      },
      {
        slug: 'google-workspace',
        label: TOOL_LABELS['google-workspace'],
        note: '顧客情報の整理・スタッフ連携の自動化',
      },
    ],
    faqs: [
      {
        q: '美容室・サロンでの相談は多いですか？',
        a: 'はい、よく相談に乗る業種の一つです。予約まわりの整備から、サイト改善、顧客管理まで幅広いテーマで対応しています。',
      },
      {
        q: '施術中でも使える仕組みを作れますか？',
        a: 'はい、施術中に手を止めずに対応できる形を前提に設計します。自動リマインドや問い合わせ対応の自動化で対応負荷を下げることが多いです。',
      },
      {
        q: 'スタッフが2〜3人の小規模なサロンでも対応できますか？',
        a: '対応しています。スタッフ数が少ない前提で、継続しやすくシンプルな形を優先します。',
      },
      {
        q: 'LINEはすでに使っているのですが、もっと活用できますか？',
        a: 'はい、使い始めているケースからの相談が多いです。現状を確認したうえで、整えられる部分を一緒に見ていきます。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: '対応範囲と使うツールの内容によって変わります。初回相談で現状をお聞きしたうえで、概算と進め方をご説明します。',
      },
    ],
  },

  restaurant: {
    heroDescription:
      '予約・スタッフ連絡・シフト管理・集計など、日々の運用速度が高い現場で、続けやすい整備を支援します。',
    issues: [
      {
        title: '予約対応と来店案内の流れが整っていない',
        body: '電話予約が中心で、確認・リマインドが手作業になっている。LINEへの問い合わせも属人的な対応になりやすい。',
      },
      {
        title: 'スタッフへの連絡や申し送りに手間がかかる',
        body: 'シフト連絡・業務申し送り・変更通知がLINEや口頭に混在しており、記録に残りにくい。',
      },
      {
        title: '日次の集計や報告が手作業のまま',
        body: '売上集計・在庫確認・仕入れ管理が手作業で、担当者の負荷が高い状態が続いている。',
      },
      {
        title: 'サイトが集客に結びついていない',
        body: 'サイトやSNSはあるが、予約フォームや導線が整っておらず、来店につながるルートになっていない。',
      },
    ],
    background:
      '飲食店では、日々の現場運用の速度が高く、業務改善に時間をかけにくい環境があります。スタッフ構成が変わりやすいため、属人的な対応に頼りがちになり、仕組み化が後回しになることも多い構造です。また、POSや予約ツールを部分的に使っているが、連携が取れていないケースもよく見られます。',
    whatWeDo: [
      '予約受付・リマインド・来店前案内の流れをLINEやWebから整える',
      'スタッフへの連絡・シフト・申し送りを整理し、確認の手間を減らす',
      '日次集計・在庫・仕入れの記録負荷を自動化する',
      'サイトや予約導線を整備し、来店につながりやすくする',
    ],
    relatedServices: [
      {
        slug: 'customer-communication',
        label: SERVICE_CATEGORY_LABELS['customer-communication'],
        note: '予約・通知・案内の流れを整える',
      },
      {
        slug: 'internal-operations',
        label: SERVICE_CATEGORY_LABELS['internal-operations'],
        note: 'スタッフ連絡・申し送り・業務記録の整備',
      },
      {
        slug: 'web-ec-store',
        label: SERVICE_CATEGORY_LABELS['web-ec-store'],
        note: 'サイト・予約フォーム・導線の整備',
      },
    ],
    relatedTools: [
      {
        slug: 'line',
        label: TOOL_LABELS['line'],
        note: '予約受付・スタッフ連絡・来店前通知の一本化',
      },
      {
        slug: 'google-workspace',
        label: TOOL_LABELS['google-workspace'],
        note: 'シフト管理・集計・申し送りの自動化',
      },
      {
        slug: 'wordpress',
        label: TOOL_LABELS['wordpress'],
        note: 'メニュー・予約フォーム・情報更新の整備',
      },
    ],
    faqs: [
      {
        q: '飲食店での相談は多いですか？',
        a: 'はい、予約まわりの整備からスタッフ連絡、集計の自動化まで、幅広いテーマで相談を受けています。',
      },
      {
        q: 'スタッフが入れ替わっても続けられる仕組みを作れますか？',
        a: 'はい、スタッフが変わっても運用が続けられることを前提に設計します。シンプルさを優先し、現場に定着しやすい形を目指します。',
      },
      {
        q: 'POSや既存の予約ツールがありますが、相談できますか？',
        a: 'はい、既存ツールの状況を確認したうえで、それを活かしながら整える方向で検討します。必ずしも新しいツールを導入する必要はありません。',
      },
      {
        q: '繁忙期と閑散期があるのですが、対応できますか？',
        a: '繁忙期に合わせた運用設計も含めて検討します。現場の稼働状況を聞きながら、無理のない形を整えます。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: '対応範囲と使うツールの内容によって変わります。初回相談で現状をお聞きしたうえで、概算と進め方をご説明します。',
      },
    ],
  },

  'professional-services': {
    heroDescription:
      '問い合わせ対応・顧客管理・案件進捗・請求まわりなど、人が動く業務の整理と見える化を得意としています。',
    issues: [
      {
        title: '問い合わせ後の対応フローが属人化している',
        body: '問い合わせを受けてからの対応・見積・追客の流れが担当者ごとに異なり、漏れやタイミングのズレが生じやすい。',
      },
      {
        title: '顧客情報と案件進捗が分散している',
        body: '顧客ごとの対応履歴・案件の状況が各担当者のメモやExcelで管理されており、他のスタッフには見えない。',
      },
      {
        title: '請求・入金の確認に手間がかかる',
        body: '請求書の発行・入金確認・未回収の管理が手作業で、月次の確認作業に時間が取られている。',
      },
      {
        title: '社内の申請・承認・共有が煩雑',
        body: '案件ごとの作業報告・承認フロー・情報共有がメールや口頭に分かれており、記録に残りにくい。',
      },
    ],
    background:
      '士業・コンサル・受託サービス業では、案件進行・顧客対応・管理業務が同時進行しながら、担当者ごとに動くことが多い構造があります。スタッフが少ない事務所や会社では特に、顧客管理・案件管理・バックオフィスが一人に集まりやすく、整備に時間をかけにくい状況が続きやすい傾向があります。',
    whatWeDo: [
      '顧客情報・案件進捗・対応履歴をスタッフ間で共有できる形に整える',
      '問い合わせから対応・追客・受注までの流れを仕組み化する',
      '請求・入金・会計まわりの手作業を減らす',
      '社内の申請・承認・情報共有を整理し、確認の手間を下げる',
    ],
    relatedServices: [
      {
        slug: 'sales-crm-support',
        label: SERVICE_CATEGORY_LABELS['sales-crm-support'],
        note: '顧客管理・案件進捗・対応履歴の整備',
      },
      {
        slug: 'internal-operations',
        label: SERVICE_CATEGORY_LABELS['internal-operations'],
        note: '申請・承認・社内共有の整理',
      },
      {
        slug: 'backoffice-automation',
        label: SERVICE_CATEGORY_LABELS['backoffice-automation'],
        note: '請求・入金・会計まわりの自動化',
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
        note: '申請・報告・情報共有の自動化',
      },
      {
        slug: 'accounting-hr',
        label: TOOL_LABELS['accounting-hr'],
        note: '請求・入金・会計・労務の整備',
      },
      {
        slug: 'wordpress',
        label: TOOL_LABELS['wordpress'],
        note: '問い合わせフォーム・サービス導線の整備',
      },
    ],
    faqs: [
      {
        q: '士業・コンサル業での相談は多いですか？',
        a: 'はい、よく相談に乗る業種の一つです。顧客管理・案件管理から、バックオフィスの整備まで幅広いテーマで対応しています。',
      },
      {
        q: '顧客情報を整理したいのですが、どこから始めればいいですか？',
        a: 'まず現在の管理方法と課題を整理することから始めます。Excelでの管理を前提に補完する方法もあれば、kintoneのような専用ツールに移行する方法もあります。どちらが合うかは現状を聞いてから判断します。',
      },
      {
        q: '顧問税理士や社労士との連携が必要なのですが、対応できますか？',
        a: '既に顧問がいる場合は、その方との連携を前提に進めます。ツール設定・運用設計の範囲で対応し、専門家の領域には踏み込みません。',
      },
      {
        q: 'スタッフが少ない事務所でも対応できますか？',
        a: 'はい、少人数の事務所からの相談が多いです。一人に業務が集中しがちな環境でも、継続しやすい形を前提に進めます。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: '対応範囲と使うツールの内容によって変わります。初回相談で現状をお聞きしたうえで、概算と進め方をご説明します。',
      },
    ],
  },

  'retail-services': {
    heroDescription:
      'EC・実店舗の売上導線・顧客接点・在庫・バックオフィスなど、販売と運営の両面から整えたい方に向いています。',
    issues: [
      {
        title: '店舗・EC・顧客接点が分散している',
        body: '実店舗とECで顧客情報が別々に管理されており、購買履歴や来店状況が一元的に把握できていない。',
      },
      {
        title: '案内・通知・再来店のフォローが続かない',
        body: 'セール案内やリピート促進のメッセージを送りたいが、手間がかかって継続できていない。',
      },
      {
        title: 'サイトや導線が売上に結びついていない',
        body: 'WebサイトやSNSはあるが、購買や問い合わせへの導線が整っていないため、アクセスが来店・購買につながりにくい。',
      },
      {
        title: '集計・報告・在庫確認が手作業',
        body: '日次売上・在庫・発注の確認が手作業で、担当者の負荷が高い状態が続いている。',
      },
    ],
    background:
      '小売・店舗サービス業では、店舗運営・EC・顧客対応がそれぞれ別のツールや担当者で動いていることが多く、情報が分散しやすい構造があります。また、販売と管理を兼ねるスタッフが多いため、業務整備に時間をかけにくく、改善余地があってもなかなか手が回らないケースがよく見られます。',
    whatWeDo: [
      'LINE・Webから顧客への通知・案内・再来店フォローを整える',
      'サイト・EC・予約導線を整備し、購買や来店につながりやすくする',
      '顧客情報を整理し、対応履歴や購買状況を共有できる形にする',
      '集計・在庫・バックオフィスの手作業を減らす',
    ],
    relatedServices: [
      {
        slug: 'customer-communication',
        label: SERVICE_CATEGORY_LABELS['customer-communication'],
        note: '通知・案内・顧客接点の整備',
      },
      {
        slug: 'web-ec-store',
        label: SERVICE_CATEGORY_LABELS['web-ec-store'],
        note: 'EC・サイト・店舗の売上導線整備',
      },
      {
        slug: 'sales-crm-support',
        label: SERVICE_CATEGORY_LABELS['sales-crm-support'],
        note: '顧客情報・購買履歴・対応管理',
      },
      {
        slug: 'backoffice-automation',
        label: SERVICE_CATEGORY_LABELS['backoffice-automation'],
        note: '集計・在庫・会計まわりの自動化',
      },
    ],
    relatedTools: [
      {
        slug: 'line',
        label: TOOL_LABELS['line'],
        note: '顧客への通知・案内・フォローの一本化',
      },
      {
        slug: 'wordpress',
        label: TOOL_LABELS['wordpress'],
        note: 'EC・サイト・予約導線・情報更新の整備',
      },
      {
        slug: 'accounting-hr',
        label: TOOL_LABELS['accounting-hr'],
        note: '売上集計・会計・勤怠まわりの整備',
      },
      {
        slug: 'google-workspace',
        label: TOOL_LABELS['google-workspace'],
        note: '集計・在庫・スタッフ連絡の自動化',
      },
    ],
    faqs: [
      {
        q: '実店舗とECを両方持っているのですが、相談できますか？',
        a: 'はい、店舗とECが混在している場合の相談が多いです。それぞれの情報をどう整理するかを一緒に検討します。',
      },
      {
        q: 'Webサイトはあるのですが、EC機能を追加したいです。',
        a: '商品数・決済方法・運用体制によって、適切な方法が変わります。まず販売の課題から整理することをおすすめしています。',
      },
      {
        q: '顧客への通知やフォローを自動化したいのですが、難しいですか？',
        a: '現状の顧客データとツールの状況によって変わります。LINEを使った通知であれば、比較的整えやすいケースが多いです。',
      },
      {
        q: 'スタッフが少ない店舗でも対応できますか？',
        a: 'はい、スタッフ数が少ない前提で、継続しやすくシンプルな形を優先します。',
      },
      {
        q: '料金はどのように決まりますか？',
        a: '対応範囲と使うツールの内容によって変わります。初回相談で現状をお聞きしたうえで、概算と進め方をご説明します。',
      },
    ],
  },
};

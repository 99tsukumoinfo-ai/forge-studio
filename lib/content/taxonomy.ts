export const SERVICE_CATEGORIES = [
  'customer-communication',
  'sales-crm-support',
  'internal-operations',
  'backoffice-automation',
  'web-ec-store',
] as const;

export const INDUSTRY_TAGS = [
  'manufacturing',
  'clinic',
  'salon',
  'restaurant',
  'professional-services',
  'retail-services',
  'common',
  'multi-industry',
  'smb-general',
] as const;

export const TOOL_TAGS = [
  'line',
  'wordpress',
  'kintone',
  'google-workspace',
  'accounting-hr',
] as const;

export const STATUS = ['draft', 'published', 'archived'] as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];
export type IndustryTag = (typeof INDUSTRY_TAGS)[number];
export type ToolTag = (typeof TOOL_TAGS)[number];
export type ContentStatus = (typeof STATUS)[number];

export const SERVICE_PAGE_SLUGS = SERVICE_CATEGORIES;

export const INDUSTRY_PAGE_SLUGS = [
  'manufacturing',
  'clinic',
  'salon',
  'restaurant',
  'professional-services',
  'retail-services',
] as const;

export const TOOL_PAGE_SLUGS = TOOL_TAGS;

export type ServicePageSlug = (typeof SERVICE_PAGE_SLUGS)[number];
export type IndustryPageSlug = (typeof INDUSTRY_PAGE_SLUGS)[number];
export type ToolPageSlug = (typeof TOOL_PAGE_SLUGS)[number];

export const SERVICE_CATEGORY_LABELS: Record<ServiceCategory, string> = {
  'customer-communication': '顧客対応・予約・通知を整えたい',
  'sales-crm-support': '営業・問い合わせ・顧客管理を強くしたい',
  'internal-operations': '社内のやり取り・申請・業務管理を楽にしたい',
  'backoffice-automation': '労務・勤怠・会計まわりを自動化したい',
  'web-ec-store': 'Web・EC・店舗の売上導線を整えたい',
};

export const INDUSTRY_LABELS: Record<IndustryTag, string> = {
  manufacturing: '製造業',
  clinic: 'クリニック / 自由診療',
  salon: '美容室・サロン',
  restaurant: '飲食店',
  'professional-services': '士業・コンサル・受託サービス業',
  'retail-services': '小売・店舗サービス業',
  common: '共通',
  'multi-industry': '複数業界',
  'smb-general': '中小企業全般',
};

export const TOOL_LABELS: Record<ToolTag, string> = {
  line: 'LINE',
  wordpress: 'WordPress',
  kintone: 'kintone',
  'google-workspace': 'Google Workspace / Apps Script',
  'accounting-hr': 'freee / マネーフォワード / SmartHR / KING OF TIME',
};

export const STATUS_LABELS: Record<ContentStatus, string> = {
  draft: 'Draft',
  published: 'Published',
  archived: 'Archived',
};

export function getServiceCategoryLabel(category: ServiceCategory) {
  return SERVICE_CATEGORY_LABELS[category];
}

export function getIndustryLabel(tag: string) {
  return INDUSTRY_LABELS[tag as IndustryTag] ?? tag;
}

export function getToolLabel(tag: string) {
  return TOOL_LABELS[tag as ToolTag] ?? tag;
}

export const PRIMARY_SERVICE_SLUGS = SERVICE_PAGE_SLUGS;
export const PRIMARY_INDUSTRY_SLUGS = INDUSTRY_PAGE_SLUGS;
export const PRIMARY_TOOL_SLUGS = TOOL_PAGE_SLUGS;

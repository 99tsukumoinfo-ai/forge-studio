import type { Metadata } from 'next';

function getRequiredPublicEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(
      `${name} is required. Set it in .env.local or the preview environment before running Forge Studio.`
    );
  }

  return value;
}

export const siteConfig = {
  name: 'Forge Studio',
  description:
    '経営判断から売上、IT実装まで。実務を整え、現場で回る仕組みづくりを支援します。',
  footerText:
    '経営判断から売上実務、IT実装まで。現場で回る仕組みを整え、利益につながる取り組みを支援します。',
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://forge-studio-site.vercel.app',
  defaultOgImage: '/images/og-default.svg',
  formAction: getRequiredPublicEnv('NEXT_PUBLIC_FORMSUBMIT_ACTION'),
  navigation: [
    { href: '/services', label: 'サービス' },
    { href: '/industries', label: '業界別' },
    { href: '/tools', label: 'ツール別' },
    { href: '/cases', label: '事例' },
    { href: '/how-to-start', label: 'はじめての方へ' },
    { href: '/contact', label: '問い合わせ' },
  ],
  footerNavigation: [
    { href: '/services', label: 'サービス' },
    { href: '/industries', label: '業界別' },
    { href: '/tools', label: 'ツール別' },
    { href: '/cases', label: '事例' },
    { href: '/about', label: 'Forge Studio について' },
    { href: '/how-to-start', label: 'はじめての方へ' },
    { href: '/contact', label: '問い合わせ' },
  ],
} as const;

export function getSiteUrl(pathname = '/') {
  return new URL(pathname, siteConfig.baseUrl).toString();
}

export function createMetadata(options?: {
  title?: string;
  description?: string;
  pathname?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const title = options?.title
    ? `${options.title} | ${siteConfig.name}`
    : siteConfig.name;
  const description = options?.description ?? siteConfig.description;
  const pathname = options?.pathname ?? '/';
  const ogImage = options?.ogImage ?? siteConfig.defaultOgImage;

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url: getSiteUrl(pathname),
      siteName: siteConfig.name,
      locale: 'ja_JP',
      type: 'website',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: options?.noIndex
      ? {
          index: false,
          follow: true,
        }
      : undefined,
  };
}

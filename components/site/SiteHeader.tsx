import Link from 'next/link';

import { Container } from '@/components/ui/Container';
import {
  INDUSTRY_PAGE_SLUGS,
  INDUSTRY_LABELS,
  SERVICE_PAGE_SLUGS,
  SERVICE_CATEGORY_LABELS,
  TOOL_PAGE_SLUGS,
  TOOL_LABELS,
} from '@/lib/content/taxonomy';
import { siteConfig } from '@/lib/metadata/site';

import { MobileNav } from './MobileNav';

const dropdownNavItems = [
  {
    href: '/services',
    label: 'サービス',
    children: SERVICE_PAGE_SLUGS.map((slug) => ({
      href: `/services/${slug}`,
      label: SERVICE_CATEGORY_LABELS[slug],
    })),
  },
  {
    href: '/industries',
    label: '業界別',
    children: INDUSTRY_PAGE_SLUGS.map((slug) => ({
      href: `/industries/${slug}`,
      label: INDUSTRY_LABELS[slug],
    })),
  },
  {
    href: '/tools',
    label: 'ツール別',
    children: TOOL_PAGE_SLUGS.map((slug) => ({
      href: `/tools/${slug}`,
      label: TOOL_LABELS[slug],
    })),
  },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link href="/" className="site-header__brand">
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary" className="site-header__nav">
          {siteConfig.navigation
            .filter((item) => item.href !== '/contact')
            .map((item) => {
              const dropdown = dropdownNavItems.find(
                (d) => d.href === item.href,
              );
              if (dropdown) {
                return (
                  <div key={item.href} className="nav-item">
                    <Link href={item.href} className="site-header__link nav-item__trigger">
                      {item.label}
                      <span className="nav-caret" aria-hidden="true" />
                    </Link>
                    <div className="nav-dropdown">
                      <ul className="nav-dropdown__list">
                        {dropdown.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className="nav-dropdown__item">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="site-header__link"
                >
                  {item.label}
                </Link>
              );
            })}
        </nav>
        <Link href="/contact" className="site-header__cta">
          問い合わせ
        </Link>
        <MobileNav items={siteConfig.navigation} />
      </Container>
    </header>
  );
}

import Link from 'next/link';

import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/lib/metadata/site';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link href="/" className="site-header__brand">
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary" className="site-header__nav">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-header__link"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}

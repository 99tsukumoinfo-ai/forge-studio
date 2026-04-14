import Link from 'next/link';

import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/lib/metadata/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div>
          <p className="site-footer__title">{siteConfig.name}</p>
        </div>
        <div className="site-footer__links">
          {siteConfig.footerNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}

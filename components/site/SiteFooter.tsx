import Link from 'next/link';

import { Container } from '@/components/ui/Container';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div>
          <p className="site-footer__title">Forge Studio</p>
          <p className="site-footer__text">
            Step 3 では、v5.1 に沿った Next.js 基盤と content
            運用の器だけを整えています。
          </p>
        </div>
        <div className="site-footer__links">
          <Link href="/services">サービス</Link>
          <Link href="/industries">業界別</Link>
          <Link href="/about">はじめての方へ</Link>
          <Link href="/contact">問い合わせ</Link>
        </div>
      </Container>
    </footer>
  );
}

import Link from 'next/link';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export function CtaLink({
  href,
  children,
  variant = 'primary',
  className,
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={cn('cta-link', `cta-link--${variant}`, className)}
    >
      {children}
    </Link>
  );
}

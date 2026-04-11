import type { ReactNode } from 'react';

import { Container } from '@/components/ui/Container';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <Container className="page-hero__inner">
        {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__description">{description}</p>
        {actions ? <div className="page-hero__actions">{actions}</div> : null}
      </Container>
    </section>
  );
}

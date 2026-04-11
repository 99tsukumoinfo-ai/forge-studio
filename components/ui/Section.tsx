import type { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

import { Container } from './Container';

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn('section', className)}>
      <Container>
        {(eyebrow || title || description) && (
          <div className="section-heading">
            {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="section-title">{title}</h2> : null}
            {description ? (
              <p className="section-description">{description}</p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

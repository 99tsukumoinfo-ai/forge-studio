import Link from 'next/link';
import type { ReactNode } from 'react';

type ContentCardProps = {
  href: string;
  label?: string;
  title: string;
  description: string;
  meta?: ReactNode;
};

export function ContentCard({
  href,
  label,
  title,
  description,
  meta,
}: ContentCardProps) {
  return (
    <article className="content-card">
      {label ? <p className="content-card__label">{label}</p> : null}
      <h3 className="content-card__title">
        <Link href={href}>{title}</Link>
      </h3>
      <p className="content-card__description">{description}</p>
      {meta ? <div className="content-card__meta">{meta}</div> : null}
    </article>
  );
}

import type { ReactNode } from 'react';

import { PageHero } from '@/components/sections/PageHero';
import { Container } from '@/components/ui/Container';
import { CtaLink } from '@/components/ui/CtaLink';
import {
  INDUSTRY_LABELS,
  SERVICE_CATEGORY_LABELS,
  TOOL_LABELS,
} from '@/lib/content/taxonomy';
import type { ContentCollection, ContentEntry } from '@/lib/content/types';
import { formatDate } from '@/lib/utils/format-date';

type EntryDetailProps<TCollection extends ContentCollection> = {
  eyebrow: string;
  entry: ContentEntry<TCollection>;
  children?: ReactNode;
};

export function EntryDetail<TCollection extends ContentCollection>({
  eyebrow,
  entry,
  children,
}: EntryDetailProps<TCollection>) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={entry.title}
        description={entry.description}
        actions={
          <div className="action-row">
            <CtaLink href="/contact">相談導線の器を確認する</CtaLink>
            <CtaLink href="/services" variant="secondary">
              サービス一覧へ
            </CtaLink>
          </div>
        }
      />
      <Container>
        <div className="detail-layout">
          <article className="detail-layout__content">
            <div className="mdx-content">{entry.content}</div>
            {children}
          </article>
          <aside className="detail-layout__sidebar">
            <div>
              <p className="content-card__label">Service Category</p>
              <p>{SERVICE_CATEGORY_LABELS[entry.serviceCategory]}</p>
            </div>
            <div>
              <p className="content-card__label">Industry Tags</p>
              <ul className="chip-list">
                {entry.industryTags.map((tag) => (
                  <li key={tag}>{INDUSTRY_LABELS[tag]}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="content-card__label">Tool Tags</p>
              <ul className="chip-list">
                {entry.toolTags.map((tag) => (
                  <li key={tag}>{TOOL_LABELS[tag]}</li>
                ))}
              </ul>
            </div>
            <dl className="meta-list">
              <div>
                <dt className="content-card__label">Published</dt>
                <dd>{formatDate(entry.publishedAt)}</dd>
              </div>
              <div>
                <dt className="content-card__label">Updated</dt>
                <dd>{formatDate(entry.updatedAt)}</dd>
              </div>
              <div>
                <dt className="content-card__label">Status</dt>
                <dd>{entry.status}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>
    </>
  );
}

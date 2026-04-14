import Link from 'next/link';

import { PageHero } from '@/components/sections/PageHero';
import { CtaLink } from '@/components/ui/CtaLink';
import { Section } from '@/components/ui/Section';
import type { CaseStudy } from '@/lib/content';
import {
  SERVICE_CATEGORY_LABELS,
  getIndustryLabel,
  getToolLabel,
} from '@/lib/content/taxonomy';

type Props = {
  caseStudy: CaseStudy;
};

function parseCaseSections(body: string) {
  const sections = new Map<string, string[]>();
  let currentHeading: string | null = null;

  for (const line of body.split('\n')) {
    const headingMatch = line.match(/^##\s+(.+)$/);

    if (headingMatch) {
      currentHeading = headingMatch[1].trim();
      sections.set(currentHeading, []);
      continue;
    }

    if (!currentHeading) {
      continue;
    }

    sections.get(currentHeading)?.push(line);
  }

  return sections;
}

function toBlocks(lines: string[]) {
  const blocks: string[] = [];
  let paragraph: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      if (paragraph.length > 0) {
        blocks.push(paragraph.join(' '));
        paragraph = [];
      }
      continue;
    }

    if (trimmed.startsWith('- ')) {
      if (paragraph.length > 0) {
        blocks.push(paragraph.join(' '));
        paragraph = [];
      }
      blocks.push(trimmed.replace(/^- /, '').trim());
      continue;
    }

    paragraph.push(trimmed);
  }

  if (paragraph.length > 0) {
    blocks.push(paragraph.join(' '));
  }

  return blocks;
}

function splitSituationSummary(text: string, fallback: string) {
  const sentences =
    text
      .match(/[^。！？]+[。！？]?/gu)
      ?.map((sentence) => sentence.trim())
      .filter(Boolean) ?? [];

  if (sentences.length === 0) {
    return {
      company: fallback,
      challenge: fallback,
    };
  }

  if (sentences.length === 1) {
    return {
      company: sentences[0],
      challenge: fallback,
    };
  }

  return {
    company: sentences[0],
    challenge: sentences.slice(1).join(' '),
  };
}

export function CaseStudyDetailLayout({ caseStudy }: Props) {
  const sections = parseCaseSections(caseStudy.body);
  const situationBlocks = toBlocks(sections.get('状況') ?? []);
  const actionBlocks = toBlocks(sections.get('整えたこと') ?? []);
  const resultBlocks = toBlocks(sections.get('変化') ?? []);

  const summary = splitSituationSummary(
    situationBlocks[0] ?? caseStudy.description,
    caseStudy.description
  );
  const challengeBlocks = [
    summary.challenge,
    ...situationBlocks.slice(1),
  ].filter(Boolean);
  const outcomeBlocks =
    resultBlocks.length > 0 ? resultBlocks : [caseStudy.excerpt];

  return (
    <>
      <PageHero
        eyebrow="事例"
        title={caseStudy.title}
        description={caseStudy.description}
      />

      <Section
        title="この事例の概要"
        description="どんな会社の、どんな課題に、どのように取り組んだかを先に整理しています。"
      >
        <div className="content-grid">
          <article className="content-card">
            <p className="content-card__label">どんな会社か</p>
            <h3 className="content-card__title">
              {caseStudy.industryTags.map(getIndustryLabel).join(' / ')}
            </h3>
            <p className="content-card__description">{summary.company}</p>
          </article>
          <article className="content-card">
            <p className="content-card__label">何が課題だったか</p>
            <h3 className="content-card__title">改善の出発点</h3>
            <p className="content-card__description">
              {challengeBlocks[0] ?? caseStudy.excerpt}
            </p>
          </article>
          <article className="content-card">
            <p className="content-card__label">整えたテーマ</p>
            <h3 className="content-card__title">
              {SERVICE_CATEGORY_LABELS[caseStudy.serviceCategory]}
            </h3>
            <p className="content-card__description">{caseStudy.excerpt}</p>
          </article>
          <article className="content-card">
            <p className="content-card__label">使用ツール</p>
            <h3 className="content-card__title">運用に合わせて活用</h3>
            <p className="content-card__description">
              {caseStudy.toolTags.map(getToolLabel).join(' / ')}
            </p>
          </article>
        </div>
      </Section>

      <Section
        className="section--muted"
        title="何を整えたか"
        description="状況に合わせて、現場で使い続けやすい形に整えています。"
      >
        {actionBlocks.length > 0 ? (
          <ul className="whatwedo-list">
            {actionBlocks.map((item) => (
              <li key={item} className="whatwedo-item">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-body">
            <p>{caseStudy.description}</p>
          </div>
        )}
      </Section>

      <Section title="どう変わったか">
        <div className="text-body">
          {outcomeBlocks.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </Section>

      <Section
        className="section--muted"
        title="関連するページ"
        description="近いテーマから探したい場合は、以下のページも参考になります。"
      >
        <div className="content-grid">
          <article className="content-card">
            <p className="content-card__label">サービス</p>
            <h3 className="content-card__title">
              <Link href={`/services/${caseStudy.serviceCategory}`}>
                {SERVICE_CATEGORY_LABELS[caseStudy.serviceCategory]}
              </Link>
            </h3>
            <p className="content-card__description">
              同じテーマの相談内容や、整え方の考え方を確認できます。
            </p>
          </article>
          <article className="content-card">
            <p className="content-card__label">業界</p>
            <div className="service-label-list">
              {caseStudy.industryTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/industries/${tag}`}
                  className="service-label-item"
                >
                  {getIndustryLabel(tag)}
                </Link>
              ))}
            </div>
          </article>
          <article className="content-card">
            <p className="content-card__label">ツール</p>
            <div className="service-label-list">
              {caseStudy.toolTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tools/${tag}`}
                  className="service-label-item"
                >
                  {getToolLabel(tag)}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section className="section--slim">
        <div className="service-detail-cta">
          <p className="service-detail-cta__lead">
            同じ業界でも、どこに改善余地があるかは会社ごとに違います。まず現状を聞きながら、何から整えるべきかを一緒に確認します。
          </p>
          <div className="service-detail-cta__actions">
            <CtaLink href="/contact" variant="primary">
              相談してみる
            </CtaLink>
            <Link href="/cases" className="service-detail-cta__sub">
              事例一覧へ →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

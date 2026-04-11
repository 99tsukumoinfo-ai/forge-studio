import type { ReactNode } from 'react';
import type { z } from 'zod';

import type {
  caseStudySchema,
  contentFrontmatterSchema,
  industryPageSchema,
  insightSchema,
  servicePageSchema,
  toolPageSchema,
} from './schema';

export type ContentFrontmatter = z.infer<typeof contentFrontmatterSchema>;
export type ServicePageFrontmatter = z.infer<typeof servicePageSchema>;
export type IndustryPageFrontmatter = z.infer<typeof industryPageSchema>;
export type ToolPageFrontmatter = z.infer<typeof toolPageSchema>;
export type CaseStudyFrontmatter = z.infer<typeof caseStudySchema>;
export type InsightFrontmatter = z.infer<typeof insightSchema>;

export type ContentCollection =
  | 'services'
  | 'industries'
  | 'tools'
  | 'cases'
  | 'insights';

export type CollectionFrontmatterMap = {
  services: ServicePageFrontmatter;
  industries: IndustryPageFrontmatter;
  tools: ToolPageFrontmatter;
  cases: CaseStudyFrontmatter;
  insights: InsightFrontmatter;
};

export type ContentEntry<TCollection extends ContentCollection> =
  CollectionFrontmatterMap[TCollection] & {
    collection: TCollection;
    body: string;
    content?: ReactNode;
    sourcePath: string;
  };

export type ServicePage = ContentEntry<'services'>;
export type IndustryPage = ContentEntry<'industries'>;
export type ToolPage = ContentEntry<'tools'>;
export type CaseStudy = ContentEntry<'cases'>;
export type Insight = ContentEntry<'insights'>;

export interface ContentSource {
  getAllInsights(): Promise<Insight[]>;
  getInsightBySlug(slug: string): Promise<Insight | null>;
  getAllCases(): Promise<CaseStudy[]>;
  getCaseBySlug(slug: string): Promise<CaseStudy | null>;
  getAllServicePages(): Promise<ServicePage[]>;
  getServicePageBySlug(slug: string): Promise<ServicePage | null>;
  getAllIndustryPages(): Promise<IndustryPage[]>;
  getIndustryPageBySlug(slug: string): Promise<IndustryPage | null>;
  getAllToolPages(): Promise<ToolPage[]>;
  getToolPageBySlug(slug: string): Promise<ToolPage | null>;
}

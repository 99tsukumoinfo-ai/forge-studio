import 'server-only';

import { promises as fs } from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import type { ZodSchema } from 'zod';

import {
  caseStudySchema,
  industryPageSchema,
  insightSchema,
  servicePageSchema,
  toolPageSchema,
} from './schema';
import {
  type ContentStatus,
  PRIMARY_INDUSTRY_SLUGS,
  PRIMARY_SERVICE_SLUGS,
  PRIMARY_TOOL_SLUGS,
} from './taxonomy';
import type {
  CaseStudy,
  CollectionFrontmatterMap,
  ContentEntry,
  ContentSource,
  IndustryPage,
  Insight,
  ServicePage,
  ToolPage,
} from './types';

const CONTENT_ROOT = path.join(process.cwd(), 'content');

const COLLECTION_CONFIG = {
  services: {
    directory: path.join(CONTENT_ROOT, 'pages', 'services'),
    schema: servicePageSchema,
  },
  industries: {
    directory: path.join(CONTENT_ROOT, 'pages', 'industries'),
    schema: industryPageSchema,
  },
  tools: {
    directory: path.join(CONTENT_ROOT, 'pages', 'tools'),
    schema: toolPageSchema,
  },
  cases: {
    directory: path.join(CONTENT_ROOT, 'cases'),
    schema: caseStudySchema,
  },
  insights: {
    directory: path.join(CONTENT_ROOT, 'insights'),
    schema: insightSchema,
  },
} as const;

type CollectionName = keyof typeof COLLECTION_CONFIG;
type CollectionSchemaMap = {
  [TCollection in CollectionName]: ZodSchema<CollectionFrontmatterMap[TCollection]>;
};
type ContentQueryOptions = {
  statuses?: readonly ContentStatus[];
};

const DEFAULT_PUBLIC_STATUSES = [
  'published',
] as const satisfies readonly ContentStatus[];

function createCollectionError(filePath: string, message: string) {
  return new Error(`Invalid frontmatter in ${filePath}: ${message}`);
}

function getAllowedStatuses(options?: ContentQueryOptions) {
  return new Set(options?.statuses ?? DEFAULT_PUBLIC_STATUSES);
}

async function listMdxFiles(directory: string) {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .map((entry) => path.join(directory, entry.name));
}

async function parseEntry<TCollection extends CollectionName>(
  collection: TCollection,
  filePath: string,
  includeContent: boolean
): Promise<ContentEntry<TCollection>> {
  const rawSource = await fs.readFile(filePath, 'utf8');
  const parsed = matter(rawSource);
  const schema = (COLLECTION_CONFIG as {
    [TKey in CollectionName]: {
      directory: string;
      schema: CollectionSchemaMap[TKey];
    };
  })[collection].schema;
  const frontmatter = schema.safeParse(parsed.data);

  if (!frontmatter.success) {
    throw createCollectionError(
      filePath,
      frontmatter.error.issues[0]?.message ?? 'Unknown error.'
    );
  }

  const expectedSlug = path.basename(filePath, path.extname(filePath));

  if (frontmatter.data.slug !== expectedSlug) {
    throw createCollectionError(
      filePath,
      `slug "${frontmatter.data.slug}" must match the file name "${expectedSlug}".`
    );
  }

  const entry: ContentEntry<TCollection> = {
    ...frontmatter.data,
    body: parsed.content.trim(),
    collection,
    sourcePath: filePath,
  };

  if (!includeContent) {
    return entry;
  }

  const rendered = await compileMDX({
    source: parsed.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: false,
    },
  });

  return {
    ...entry,
    content: rendered.content,
  };
}

function sortByPublishedDate<TEntry extends ContentEntry<'cases' | 'insights'>>(
  entries: TEntry[]
) {
  return [...entries].sort((left, right) =>
    right.publishedAt.localeCompare(left.publishedAt)
  );
}

function sortByKnownSlugOrder<
  TEntry extends ContentEntry<'services' | 'industries' | 'tools'>,
>(entries: TEntry[]) {
  const order =
    entries[0]?.collection === 'services'
      ? PRIMARY_SERVICE_SLUGS
      : entries[0]?.collection === 'industries'
        ? PRIMARY_INDUSTRY_SLUGS
        : PRIMARY_TOOL_SLUGS;

  return [...entries].sort(
    (left, right) =>
      order.indexOf(left.slug as never) - order.indexOf(right.slug as never)
  );
}

async function getAllEntries<TCollection extends CollectionName>(
  collection: TCollection,
  options?: ContentQueryOptions
) {
  const directory = COLLECTION_CONFIG[collection].directory;
  const filePaths = await listMdxFiles(directory);
  const entries = await Promise.all(
    filePaths.map((filePath) => parseEntry(collection, filePath, false))
  );
  const allowedStatuses = getAllowedStatuses(options);
  const publishedEntries = entries.filter((entry) =>
    allowedStatuses.has(entry.status)
  );

  if (collection === 'cases' || collection === 'insights') {
    return sortByPublishedDate(
      publishedEntries as ContentEntry<'cases' | 'insights'>[]
    ) as ContentEntry<TCollection>[];
  }

  return sortByKnownSlugOrder(
    publishedEntries as ContentEntry<'services' | 'industries' | 'tools'>[]
  ) as ContentEntry<TCollection>[];
}

async function getEntryBySlug<TCollection extends CollectionName>(
  collection: TCollection,
  slug: string,
  options?: ContentQueryOptions
) {
  const filePath = path.join(
    COLLECTION_CONFIG[collection].directory,
    `${slug}.mdx`
  );

  try {
    await fs.access(filePath);
  } catch {
    return null;
  }

  const entry = await parseEntry(collection, filePath, true);
  const allowedStatuses = getAllowedStatuses(options);

  return allowedStatuses.has(entry.status) ? entry : null;
}

export const mdxSource: ContentSource = {
  async getAllInsights() {
    return (await getAllEntries('insights')) as Insight[];
  },
  async getInsightBySlug(slug) {
    return (await getEntryBySlug('insights', slug)) as Insight | null;
  },
  async getAllCases() {
    return (await getAllEntries('cases')) as CaseStudy[];
  },
  async getCaseBySlug(slug) {
    return (await getEntryBySlug('cases', slug)) as CaseStudy | null;
  },
  async getAllServicePages() {
    return (await getAllEntries('services')) as ServicePage[];
  },
  async getServicePageBySlug(slug) {
    return (await getEntryBySlug('services', slug)) as ServicePage | null;
  },
  async getAllIndustryPages() {
    return (await getAllEntries('industries')) as IndustryPage[];
  },
  async getIndustryPageBySlug(slug) {
    return (await getEntryBySlug('industries', slug)) as IndustryPage | null;
  },
  async getAllToolPages() {
    return (await getAllEntries('tools')) as ToolPage[];
  },
  async getToolPageBySlug(slug) {
    return (await getEntryBySlug('tools', slug)) as ToolPage | null;
  },
};

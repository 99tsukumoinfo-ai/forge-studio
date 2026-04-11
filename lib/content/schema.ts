import { z } from 'zod';

import {
  INDUSTRY_TAGS,
  INDUSTRY_PAGE_SLUGS,
  SERVICE_CATEGORIES,
  SERVICE_PAGE_SLUGS,
  STATUS,
  TOOL_TAGS,
  TOOL_PAGE_SLUGS,
} from './taxonomy';

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/;

function isValidDateString(value: string) {
  const matched = value.match(datePattern);

  if (!matched) {
    return false;
  }

  const [, yearToken, monthToken, dayToken] = matched;
  const year = Number(yearToken);
  const month = Number(monthToken);
  const day = Number(dayToken);
  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

const dateStringSchema = z
  .string()
  .regex(datePattern, 'Date must use YYYY-MM-DD format.')
  .refine(isValidDateString, 'Date must be a real calendar date.');

export const routeReferenceSchema = z
  .string()
  .min(1, 'Route reference is required.')
  .startsWith('/', 'Route reference must start with "/".');

const contentFrontmatterBaseSchema = z
  .object({
    title: z.string().min(1, 'title is required.'),
    description: z.string().min(1, 'description is required.'),
    excerpt: z.string().min(1, 'excerpt is required.'),
    serviceCategory: z.enum(SERVICE_CATEGORIES),
    toolTags: z
      .array(z.enum(TOOL_TAGS))
      .min(1, 'toolTags must include at least one value.'),
    industryTags: z
      .array(z.enum(INDUSTRY_TAGS))
      .min(1, 'industryTags must include at least one value.'),
    status: z.enum(STATUS),
    publishedAt: dateStringSchema,
    updatedAt: dateStringSchema,
    ogImage: z.string().min(1, 'ogImage is required.'),
    primaryTargetPage: routeReferenceSchema.optional(),
    secondaryTargetPages: z.array(routeReferenceSchema).optional(),
    relatedCaseSlugs: z.array(z.string().regex(slugPattern)).optional(),
    relatedInsightSlugs: z.array(z.string().regex(slugPattern)).optional(),
  })
  .strict();

export const contentFrontmatterSchema = contentFrontmatterBaseSchema.extend({
  slug: z
    .string()
    .min(1, 'slug is required.')
    .regex(slugPattern, 'slug must be kebab-case.'),
});

export const servicePageSchema = contentFrontmatterBaseSchema.extend({
  slug: z.enum(SERVICE_PAGE_SLUGS),
});

export const industryPageSchema = contentFrontmatterBaseSchema.extend({
  slug: z.enum(INDUSTRY_PAGE_SLUGS),
});

export const toolPageSchema = contentFrontmatterBaseSchema.extend({
  slug: z.enum(TOOL_PAGE_SLUGS),
});

export const caseStudySchema = contentFrontmatterSchema;
export const insightSchema = contentFrontmatterSchema;

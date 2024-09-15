import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { type CollectionEntry, defineCollection, z } from "astro:content";

// find all tutorial pages
const baseSchema = z.object({
	type: z.literal('base').optional().default('base')
});

const tutorialSchema = baseSchema.extend({
	type: z.literal('tutorial').optional(),
	unitTitle: z.string().optional(),
});

const docsCollectionSchema = z.union([
	baseSchema,
	tutorialSchema,
]);

type DocsEntryData = z.infer<typeof docsCollectionSchema>;

export type DocsEntry<T extends DocsEntryType> = CollectionEntry<'docs'> & {
	data: Extract<DocsEntryData, { type: T }>;
};
type DocsEntryType = DocsEntryData['type'];

function createIsDocsEntry<T extends DocsEntryType>(type: T) {
	return (entry: CollectionEntry<'docs'>): entry is DocsEntry<T> => entry.data.type === type;
}

export type TutorialEntry = DocsEntry<'tutorial'>;
export const isTutorialEntry = createIsDocsEntry('tutorial');

export const collections = {
  docs: defineCollection({ schema: docsSchema({ extend: docsCollectionSchema }) }),
  i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { type CollectionEntry, defineCollection, z } from "astro:content";
import path from 'node:path';

// find all tutorial pages
const baseSchema = z.object({
	type: z.literal('base').optional().default('base')
});

const tutorialSchema = baseSchema.extend({
	type: z.literal('tutorial'),
	unitTitle: z.string().optional(),
});

const docsCollectionSchema = z.union([
	baseSchema,
	tutorialSchema,
]);

type DocsEntryData = z.infer<typeof docsCollectionSchema>;

export type DocsEntry<T extends DocsEntryType> = CollectionEntry<'docs'> & {
	data: Extract<DocsEntryData, { type: T}>;
};
type DocsEntryType = DocsEntryData['type'];

function createIsDocsEntry<T extends DocsEntryType>(type: T) {
	return (entry: CollectionEntry<'docs'>, id: string): entry is DocsEntry<T> => {
		if (entry.data.type !== type) {
			return false;
		}
		const currentPath = path.parse(id);
		const currentDir = path.dirname(currentPath.dir);
		
		const pagePath = path.parse(entry.id);
		const pageDir = path.dirname(pagePath.dir);
		
		return pageDir === currentDir;
	};
}

export type TutorialEntry = DocsEntry<'tutorial'>;
export const isTutorialEntry = createIsDocsEntry<'tutorial'>('tutorial');

export const collections = {
  docs: defineCollection({ schema: docsSchema({ extend: docsCollectionSchema }) }),
  i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};
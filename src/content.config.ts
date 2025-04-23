// import { defineCollection } from 'astro:content';
// import { docsLoader } from '@astrojs/starlight/loaders';
// import { docsSchema } from '@astrojs/starlight/schema';

// export const collections = {
// 	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
// };

import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const baseSchema = z.object({
	type: z.literal('base').optional().default('base'),
});
export const tutorialSchema = baseSchema.extend({
	type: z.literal('tutorial'),
	unitTitle: z.string().optional(),
});

export const docsCollectionSchema = z.union([baseSchema, tutorialSchema]);

export type DocsEntryData = z.infer<typeof docsCollectionSchema>;

export type DocsEntryType = DocsEntryData['type'];

export type DocsEntry<T extends DocsEntryType> = CollectionEntry<'docs'> & {
	data: Extract<DocsEntryData, { type: T }>;
};

export function createIsDocsEntry<T extends DocsEntryType>(type: T) {
	return (entry: CollectionEntry<'docs'>): entry is DocsEntry<T> => entry.data.type === type;
}

export type TutorialEntry = DocsEntry<'tutorial'>;

export const isTutorialEntry = createIsDocsEntry('tutorial');

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({ extend: docsCollectionSchema }),
	})
};

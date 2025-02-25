import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { defineCollection, z, type CollectionEntry } from 'astro:content';
import { AstroDocsI18nSchema } from './content/i18n-schema';

export const baseSchema = z.object({
	type: z.literal('base').optional().default('base'),
	i18nReady: z.boolean().default(false),
	githubURL: z.string().url().optional(),
	hasREADME: z.boolean().optional(),
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

export function createIsLangEntry(lang: string) {
	return (entry: CollectionEntry<'docs'>): boolean => entry.id.startsWith(lang + '/');
}

export const isEnglishEntry = createIsLangEntry('en');

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({ extend: docsCollectionSchema }),
	}),
	i18n: defineCollection({
		loader: i18nLoader(),
		schema: i18nSchema({ extend: AstroDocsI18nSchema }),
	}),
};

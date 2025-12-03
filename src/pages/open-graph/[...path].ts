import type { CollectionEntry } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { allPages } from '~/content';

type OGImageOptions = Awaited<ReturnType<Parameters<typeof OGImageRoute>[0]['getImageOptions']>>;

/** Paths for all of our Markdown content we want to generate OG images for. */
const paths = process.env.SKIP_OG ? [] : allPages;

/** An object mapping file paths to file metadata. */
const pages = Object.fromEntries(
	paths.map(
		({ filePath, id, data }) =>
			[filePath, { data, id }] as [string, Pick<CollectionEntry<'docs'>, 'data' | 'id'>]
	)
);

export const { getStaticPaths, GET } = OGImageRoute({
	param: 'path',

	pages,

	getSlug(_, page: (typeof pages)[string]) {
		return page.id + '.webp';
	},

	getImageOptions: async (_, { data }: (typeof pages)[string]): Promise<OGImageOptions> => {
		return {
			format: 'WEBP',
			quality: 90,
			title: data.title,
			description: data.description,
			logo: {
				path: './src/pages/open-graph/_images/docs-logo.png',
				size: [300],
			},
			border: { width: 32, side: 'inline-start' },
			padding: 80,
			bgImage: {
				path: `./src/pages/open-graph/_images/background-ltr.png`,
			},
		};
	},
});

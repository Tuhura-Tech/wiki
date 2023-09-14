import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export const locales = {
	root: {
		label: 'English',
		lang: 'en', // lang is required for root locales
	},
	mi: {
		label: 'Māori',
		lang: 'mi',
	},
};

const site = 'https://wiki.tuhuratech.org.nz/';

// https://astro.build/config
export default defineConfig({
	site,

	integrations: [
		starlight({
			title: 'Wiki',
			logo: {
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
			},
			social: {
				github: 'https://github.com/Tuhura-Tech/Wiki',
				discord: 'https://discord.gg/PNxh7cwKfQ',
			},
			editLink: {
				baseUrl: 'https://github.com/Tuhura-Tech/Wiki/edit/main/docs/',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'NCEA Resources',
					autogenerate: { directory: 'ncea' },
				},
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' }
				},
				{
					label: "Tuhura Tech Resources",
					autogenerate: { directory: 'tuhura-tech' }
				}
			],
			locales,
			favicon: '/images/favicon.svg',
			head: [
				// Add ICO favicon fallback for Safari.
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/images/favicon.ico',
						sizes: '32x32',
					},
				},
			],

		}),
		tailwind({
			// Disable the default base styles:
			applyBaseStyles: false,
		}),
	],
	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});

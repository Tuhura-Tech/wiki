// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],

			defaultLocale: 'en',

			locales: {
				en: {
					label: 'English',
				},
			},

			sidebar: [
				{
					label: 'Gamedev',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About', slug: 'guides/game-dev'},
					],
				},
				{
					label: 'Cybersecurity',
					autogenerate: { directory: 'guides/Cybersecurity' },
				},
			],
		}),
	],
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.tuhuratech.org.nz',

	integrations: [
		starlight({

			//Site config
			title: 'Wiki',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],

			logo:{
				light: './public/assets/full-logo-light.png',
				dark: './public/assets/full-logo-dark.png',
				replacesTitle: true,
			},

			favicon: '/public/favicon.ico',

			customCss: [
				'./src/tailwind.css',
			],

			//Locales
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
				},
			},


			//Sidebar Config
			sidebar: [
				{
					label: 'Gamedev',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About', slug: 'guides/game-dev'},
						{ label: 'Godot Basics', slug: 'guides/game-dev/basics'},
						{ label: 'Top-down Dungeon Crawler', slug: 'guides/game-dev/dungeoncrawler/0-scenesetup' },
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

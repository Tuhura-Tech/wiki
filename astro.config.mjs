// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.tuhuratech.org.nz',

	integrations: [
		starlight({
			//Site config
			title: 'Wiki',
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/PNxh7cwKfQ' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Tuhura-Tech/Wiki' },
				{ icon: 'mastodon', label: 'Mastodon', href: 'https://mastodon.nzoss.nz/@tuhuratech' },
				{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tuhura_tech' },
				{
					icon: 'facebook',
					label: 'Facebook',
					href: 'https://www.facebook.com/p/T%C5%ABhura-Tech-100083052084710/',
				},
				{
					icon: 'linkedin',
					label: 'Linkedin',
					href: 'https://www.linkedin.com/company/tuhuratech',
				},
				{ icon: 'email', label: 'Email', href: 'mailto:contact@tuhuratech.org.nz' },
			],

			logo: {
				light: './public/assets/full-logo-light.png',
				dark: './public/assets/full-logo-dark.png',
				replacesTitle: true,
			},

			favicon: '/favicon.ico',

			customCss: ['./src/styles/global.css'],

			components: {
				Sidebar: './src/components/starlight/Sidebar.astro',
			},

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
					label: 'Guides and Resources',
					items: [
						{
							label: 'Contribute to this Wiki',
							collapsed: true,
							autogenerate: { directory: 'guides/contribute' },
						},
						{
							label: 'Game Development',
							items: [
								// Each item here is one entry in the navigation menu.
								{ label: 'About', slug: 'guides/game-dev' },
								{ label: 'Godot Basics', slug: 'guides/game-dev/basics' },
								{ label: 'Godot Tips', slug: 'guides/game-dev/universal' },
								{ label: 'Godot with C#', slug: 'guides/game-dev/projectsetup' },
								{ label: 'Godot Tilemap Pathfinding', slug: 'guides/game-dev/tilemapnavigation' },
								{
									label: '2D Games',
									collapsed: true,
									items: [
										{
											label: '2D Platformer',
											collapsed: true,
											items: [
												{
													label: '1. Making the Player',
													slug: 'guides/game-dev/2dplatformer/0-making-the-player',
												},
												{
													label: '2. Creating a level',
													slug: 'guides/game-dev/2dplatformer/1-creating-a-level',
												},
												{
													label: '3. Adding Movement',
													slug: 'guides/game-dev/2dplatformer/2-adding-movement',
												},
												{
													label: '4. Adding Killzones',
													slug: 'guides/game-dev/2dplatformer/3-adding-killzones',
												},
												{
													label: '5. Making Enemies',
													slug: 'guides/game-dev/2dplatformer/4-making-enemies',
												},
												{
													label: '6. Adding Items',
													slug: 'guides/game-dev/2dplatformer/5-adding-items',
												},
												{
													label: '7. Connecting Levels',
													slug: 'guides/game-dev/2dplatformer/6-connecting-levels',
												},
											],
										},
										{
											label: '2D Racing Game',
											collapsed: true,
											items: [
												{
													label: '1. Making the Cars',
													slug: 'guides/game-dev/2dracing/0-making-the-cars',
												},
												{
													label: '2. Making the Track',
													slug: 'guides/game-dev/2dracing/1-making-the-track',
												},
												{
													label: '3. Making the Menu',
													slug: 'guides/game-dev/2dracing/2-making-the-menu',
												},
											],
										},
										{
											label: 'Dungeon Crawler',
											collapsed: true,
											items: [
												{
													label: '1. Scene Setup',
													slug: 'guides/game-dev/dungeoncrawler/0-scenesetup',
												},
												{ label: '2. The Player', slug: 'guides/game-dev/dungeoncrawler/1-player' },
												{ label: '3. The Level', slug: 'guides/game-dev/dungeoncrawler/2-level' },
												{
													label: '4. Player Improvement',
													slug: 'guides/game-dev/dungeoncrawler/3-playerimprovement',
												},
												{
													label: '5. Adding the Weapon',
													slug: 'guides/game-dev/dungeoncrawler/4-weapon',
												},
												{
													label: '6. Player Health',
													slug: 'guides/game-dev/dungeoncrawler/5-health',
												},
												{ label: '7. Pickups', slug: 'guides/game-dev/dungeoncrawler/6-pickups' },
												{ label: '8. Enemies', slug: 'guides/game-dev/dungeoncrawler/7-enemy' },
												{
													label: '9. Multiple Levels',
													slug: 'guides/game-dev/dungeoncrawler/8-levels',
												},
												{
													label: '10. Finishing Up',
													slug: 'guides/game-dev/dungeoncrawler/9-finish',
												},
											],
										},
										{
											label: 'Survivors-Like',
											collapsed: true,
											items: [
												{ label: '1. Setting Up', slug: 'guides/game-dev/survivors/0-settingup' },
												{ label: '2. Enemies', slug: 'guides/game-dev/survivors/1-enemies' },
												{ label: '3. Health', slug: 'guides/game-dev/survivors/2-health' },
												{ label: '4. Spawning', slug: 'guides/game-dev/survivors/3-spawning' },
												{
													label: '5. Projectiles',
													slug: 'guides/game-dev/survivors/4-projectiles',
												},
												{ label: '6. Aiming', slug: 'guides/game-dev/survivors/5-aiming' },
												{ label: '7. Score', slug: 'guides/game-dev/survivors/6-score' },
												{
													label: '8. Bullet Types',
													slug: 'guides/game-dev/survivors/7-bullettypes',
												},
												{ label: '9. Bullet Types', slug: 'guides/game-dev/survivors/8-polish' },
											],
										},
									],
								},
								{
									label: '3D Games',
									collapsed: true,
									items: [
										{
											label: '3D Intro',
											collapsed: true,
											items: [
												{
													label: '1. Making a Project',
													slug: 'guides/game-dev/3d-intro/0-making-project',
												},
												{
													label: '2. Navigating the Viewport',
													slug: 'guides/game-dev/3d-intro/1-navigating-viewport',
												},
												{
													label: '3. Making the Player',
													slug: 'guides/game-dev/3d-intro/2-making-the-player',
												},
												{
													label: '4. Controlling the Camera',
													slug: 'guides/game-dev/3d-intro/3-controlling-camera',
												},
												{
													label: '5. Changing Controls',
													slug: 'guides/game-dev/3d-intro/4-changing-controls',
												},
												{
													label: '6. Making Platforms',
													slug: 'guides/game-dev/3d-intro/5-making-platforms',
												},
												{
													label: '7. Adding a Button',
													slug: 'guides/game-dev/3d-intro/6-adding-a-button',
												},
												{
													label: '8. Scripting the Button',
													slug: 'guides/game-dev/3d-intro/7-scripting-button',
												},
											],
										},
										{
											label: '3D Racing Game',
											collapsed: true,
											items: [
												{
													label: '1. Scene Setup',
													slug: 'guides/game-dev/3dracinggame/0-main-scene',
												},
												{
													label: '2. Making the Car',
													slug: 'guides/game-dev/3dracinggame/1-making-the-car',
												},
												{
													label: '3. Car Controls',
													slug: 'guides/game-dev/3dracinggame/2-car-controls',
												},
												{
													label: '4. Track Building',
													slug: 'guides/game-dev/3dracinggame/3-track-building',
												},
												{ label: '5. Main Menu', slug: 'guides/game-dev/3dracinggame/4-main-menu' },
											],
										},
										{
											label: 'First Person Game',
											collapsed: true,
											items: [
												{ label: '1. Scene Setup', slug: 'guides/game-dev/crystalgame/0-setup' },
												{
													label: '2. Character Controller',
													slug: 'guides/game-dev/crystalgame/1-charactercontroller',
												},
												{ label: '3. Objective', slug: 'guides/game-dev/crystalgame/2-objective' },
												{ label: '4. Enemies', slug: 'guides/game-dev/crystalgame/3-enemies' },
												{
													label: '5. Enemy Spawning',
													slug: 'guides/game-dev/crystalgame/4-spawning',
												},
												{
													label: '6. Fighting Back',
													slug: 'guides/game-dev/crystalgame/5-fightingback',
												},
												{ label: '7. User Interface', slug: 'guides/game-dev/crystalgame/6-ui' },
												{ label: '8. Winning', slug: 'guides/game-dev/crystalgame/7-winning' },
												{
													label: '9. Finishing Up',
													slug: 'guides/game-dev/crystalgame/8-finishingup',
												},
											],
										},
									],
								},
							],
						},
						{
							label: 'Cybersecurity',
							autogenerate: { directory: 'guides/cybersecurity' },
						},
						{
							label: 'Blender',
							autogenerate: { directory: 'guides/blender' },
						},
						{
							label: 'Databases',
							autogenerate: { directory: 'guides/database' },
						},
						{
							label: 'Javascript',
							autogenerate: { directory: 'guides/javascript' },
						},
						{
							label: 'Python',
							items: [
								{ label: 'Introduction', slug: 'guides/python' },
								{ label: 'Conditionals & Loops', slug: 'guides/python/conditionals-loops' },
								{ label: 'Functions', slug: 'guides/python/functions' },
								{
									label: 'Lists, Tuples, and Dictionaries',
									slug: 'guides/python/lists-tuples-dicts',
								},
								{ label: 'Classes', slug: 'guides/python/classes' },
								{
									label: 'Turtle',
									collapsed: true,
									items: [
										{ label: '1. Setup', slug: 'guides/python/turtle/0-setup' },
										{ label: '2. Basics', slug: 'guides/python/turtle/1-basics' },
										{ label: '3. Variables', slug: 'guides/python/turtle/2-variables' },
										{ label: '4. Lists', slug: 'guides/python/turtle/3-lists' },
										{ label: '5. Extra', slug: 'guides/python/turtle/4-extra' },
										{ label: '6. Hangman', slug: 'guides/python/turtle/5-hangman' },
									],
								},
								{
									label: 'Flask',
									collapsed: true,
									autogenerate: { directory: 'guides/python/Flask' },
								},
							],
						},
					],
				},
				{
					label: 'NCEA',
					items: [
						{
							label: 'Level 1',
							collapsed: true,
							autogenerate: { directory: 'ncea/level-1' },
						},
						{
							label: 'Level 2',
							collapsed: true,
							autogenerate: { directory: 'ncea/level-2' },
						},
						{
							label: 'Level 3',
							collapsed: true,
							autogenerate: { directory: 'ncea/level-3' },
						},
					],
				},
				//{
				//   label: 'Micro-Credentials',
				//   items: []
				//},
			],
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});

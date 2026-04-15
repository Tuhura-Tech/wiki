import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { group } from './config/sidebar';

/**
 * Starlight sidebar configuration object for the global site sidebar.
 *
 * - Top-level groups become tabs.
 * - Use the `group()` utility function to define groups. This uses labels from our
 *   `src/content/nav/*.ts` files instead of defining labels and translations inline.
 *
 */
export const sidebar = [
	// Guides
	group('guide', {
		items: [
			'guides',
			group('guide.game_dev', {
				items: [
					{
						label: 'Start Here',
						link: 'guides/game-dev',
					},
					{
						label: 'Foundations',
						items: [
							{
								label: 'Godot Basics',
								link: 'guides/game-dev/basics',
							},
							{
								label: 'C# Setup for Godot',
								link: 'guides/game-dev/projectsetup',
							},
							{
								label: 'Tilemap Navigation',
								link: 'guides/game-dev/tilemapnavigation',
							},
							{
								label: 'Universal Features',
								link: 'guides/game-dev/universal',
							},
						],
						collapsed: true,
					},
					{
						label: '2D Projects',
						items: [
							{
								label: '2D Platformer',
								link: 'guides/game-dev/2dplatformer/0-making-the-player',
							},
							{
								label: '2D Racing Game',
								link: 'guides/game-dev/2dracing/0-making-the-cars',
							},
							{
								label: 'Survivors Game',
								link: 'guides/game-dev/survivors/0-settingup',
							},
							{
								label: 'Dungeon Crawler',
								link: 'guides/game-dev/dungeoncrawler/0-scenesetup/',
							},
						],
						collapsed: true,
					},
					{
						label: '3D Projects',
						items: [
							{
								label: '3D Intro',
								link: 'guides/game-dev/3d-intro/0-making-project/',
							},
							{
								label: 'Starter 3D Game',
								link: 'guides/game-dev/crystalgame/0-setup/',
							},
							{
								label: '3D Racing Game',
								link: 'guides/game-dev/3dracinggame/0-main-scene/',
							},
						],
						collapsed: true,
					},
				],
			}),
			group('guide.python', {
				items: [
					{
						label: 'Start Here',
						link: 'guides/python',
					},
					{
						label: 'Fundamentals',
						items: [
							{
								label: 'Setting Up',
								link: 'guides/python/setting-up',
							},
							{
								label: 'Conditionals and Loops',
								link: 'guides/python/conditionals-loops',
							},
							{
								label: 'Lists, Tuples, Dictionaries, and Sets',
								link: 'guides/python/lists-tuples-dicts',
							},
							{
								label: 'Functions and Docstrings',
								link: 'guides/python/functions',
							},
							{
								label: 'Classes and OOP',
								link: 'guides/python/classes',
							},
						],
						collapsed: true,
					},
					{
						label: 'Projects',
						items: [
							{
								label: 'Turtle',
								link: 'guides/python/turtle/0-setup/',
							},
							{
								label: 'Ollama',
								items: [
									{
										label: 'Introduction',
										link: 'guides/python/ollama/0-introduction/',
									},
									{
										label: 'API & Advanced Features',
										link: 'guides/python/ollama/1-api/',
									},
								],
								collapsed: true,
							},
						],
						collapsed: true,
					},
					{
						label: 'Web Apps with Flask',
						autogenerate: {
							directory: 'guides/python/flask',
						},
						collapsed: true,
					},
				],
			}),
			group('guide.web', {
				items: [
					{
						label: 'Start Here',
						link: 'guides/web/',
					},
					{
						label: 'HTML & CSS Course',
						items: [
							{
								label: 'Intro',
								link: 'guides/web/html-css-intro/0-intro/',
							},
							{
								label: 'Headers and Images',
								link: 'guides/web/html-css-intro/1-headers-images/',
							},
							{
								label: 'CSS Basics',
								link: 'guides/web/html-css-intro/2-css-basics/',
							},
							{
								label: 'Standard Formatting',
								link: 'guides/web/html-css-intro/3-standard-formatting/',
							},
							{
								label: 'Background, Borders, and Padding',
								link: 'guides/web/html-css-intro/4-background-borders-padding/',
							},
							{
								label: 'Divs, IDs, and Classes',
								link: 'guides/web/html-css-intro/5-divs-ids-classes/',
							},
							{
								label: 'Fonts',
								link: 'guides/web/html-css-intro/6-fonts/',
							},
							{
								label: 'Text Formatting',
								link: 'guides/web/html-css-intro/7-text-formatting/',
							},
							{
								label: 'Flexbox',
								link: 'guides/web/html-css-intro/8-flexbox/',
							},
							{
								label: 'Grid',
								link: 'guides/web/html-css-intro/9-grid/',
							},
							{
								label: 'Dev Tools',
								link: 'guides/web/html-css-intro/10-devtools/',
							},

						],
						collapsed: true,
					},
				],
			}),
			group('guide.javascript', {
				items: [
					{
						label: 'Start Here',
						link: 'guides/javascript',
					},
					{
						label: 'Creative Coding',
						autogenerate: {
							directory: 'guides/javascript/creative-coding',
						},
						collapsed: true,
					},
				],
			}),
group('guide.security', { autogenerate: { directory: 'guides/cybersecurity' } }),
			group('guide.3d', { autogenerate: { directory: 'guides/blender' } }),
			group('guide.database', { autogenerate: { directory: 'guides/database' } }),
			group('guide.development', { autogenerate: { directory: 'guides/development' } }),
			group('guide.contributing', { autogenerate: { directory: 'guides/contribute' } }),
		],
	}),

	// NCEA Resources
	group('ncea', {
		items: [
			'ncea',
			group('ncea.level_1', { autogenerate: { directory: 'ncea/level-1' } }),
			group('ncea.level_2', { autogenerate: { directory: 'ncea/level-2' } }),
			group('ncea.level_3', { autogenerate: { directory: 'ncea/level-3' } }),
		],
	}),
	// Micro Credentials
	group('microcredentials', {
		items: ['microcredentials'],
	}),
] satisfies StarlightUserConfig['sidebar'];

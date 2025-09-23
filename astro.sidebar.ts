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
						label: 'About',
						link: 'guides/game-dev',
					},
					{
						label: 'Godot Basics',
						link: 'guides/game-dev/basics',
					},
					{
						label: '2D Platformer',
						link: 'guides/game-dev/2dplatformer/0-making-the-player',
					},
					{
						label: '2D Racing Game',
						link: 'guides/game-dev/2dracing/0-making-the-cars',
					},
					{
						label: 'Universal Features',
						link: 'guides/game-dev/universal',
					},
					{
						label: 'Survivors-Like',
						link: 'guides/game-dev/survivors/0-settingup',
					},
					{
						label: 'Top-down Dungeon Crawler',
						link: 'guides/game-dev/dungeoncrawler/0-scenesetup/',
					},
					{
						label: '3D Intro',
						link: 'guides/game-dev/3d-intro/0-making-project',
					},
					{
						label: 'Setting up C# For Godot',
						link: 'guides/game-dev/projectsetup',
					},
					{
						label: 'Tilemap Navigation',
						link: 'guides/game-dev/tilemapnavigation',
					},
				],
			}),
			group('guide.security', { autogenerate: { directory: 'guides/cybersecurity' } }),
			group('guide.3d', { autogenerate: { directory: 'guides/blender' } }),
			group('guide.web', {
				items: [
					{
						label: 'About',
						link: 'guides/web',
					},
				]
			}),
			group('guide.python', {
				items: [
					{
						label: 'Python Basics',
						link: 'guides/python',
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
						label: 'Classes and Object-Oriented Programming (OOP)',
						link: 'guides/python/classes',
					},
					{
						label: 'Turtle',
						link: 'guides/python/turtle/0-setup/',
					},
					{
						label: 'Setting Up',
						link: 'guides/python/setting-up',
					},
					{
						label: 'Flask',
						autogenerate: {
							directory: 'guides/python/flask',
						},
						collapsed: true,
					},
				],
			}),
			group('guide.javascript', {
				items: [
					{
						label: 'Setting Up',
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
		items: [
			'microcredentials',
			group('microcredentials.web_dev', { items: [] }),
			group('microcredentials.security', { items: [] }),
			group('microcredentials.policy', { items: [] }),
			group('microcredentials.ai_ml', { items: [] }),
			group('microcredentials.cloud', { items: [] }),
			group('microcredentials.electronics', { items: [] }),
			group('microcredentials.software', { items: [] }),
			group('microcredentials.game_dev', { items: [] }),
		],
	}),
] satisfies StarlightUserConfig['sidebar'];

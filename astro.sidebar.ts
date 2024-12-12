import type { StarlightUserConfig } from '@astrojs/starlight/types';

/**
 * Starlight sidebar configuration object for the site sidebar.
 */
export const sidebar = [
	{
		label: 'Python',
		items: [
			{
				label: 'Python Basics',
				link: 'python',
			},
			{
				label: 'Conditionals and Loops',
				link: 'python/conditionals-loops',
			},
			{
				label: 'Lists, Tuples, Dictionaries, and Sets',
				link: 'python/lists-tuples-dicts',
			},
			{
				label: 'Functions and Docstrings',
				link: 'python/functions',
			},
			{
				label: 'Classes and Object-Oriented Programming (OOP)',
				link: 'python/classes',
			},
			{
				label: 'Turtle',
				link: 'python/turtle/0-setup/',
			},
			{
				label: 'Setting Up',
				link: 'python/setting-up',
			},
			{
				label: 'Flask',
				autogenerate: {
					directory: 'python/flask',
				},
				collapsed: true,
			},
		],
	},
	{
		label: 'Game Design',
		items: [
			{
				label: 'About',
				link: 'game-design/index',
			},
			{
				label: 'Godot',
				items: [
					{
						label: 'Godot Basics',
						link: 'game-design/godot/basics',
					},
					{
						label: '2D Platformer',
						link: 'game-design/godot/2dplatformergame',
					},
					{
						label: '2D Racing Game',
						link: 'game-design/godot/2dracinggame',
					},
					{
						label: 'Universal Features',
						link: 'game-design/godot/universal',
					},
					{
						label: 'Survivors-Like',
						link: 'game-design/godot/survivors',
					},
					{
						label: 'Top-down Dungeon Crawler',
						link: 'game-design/godot/dungeoncrawler/0-scenesetup/',
					},
					{
						label: '3D Intro',
						link: 'game-design/godot/3d',
					},
					{
						label: '3D Game',
						link: 'game-design/godot/3dgame',
					},
					{
						label: 'Setting up C# For Godot',
						link: 'game-design/godot/projectsetup',
					},
				],
				collapsed: true,
			},
		],
	},
	{
		label: 'Blender',
		autogenerate: {
			directory: 'blender',
		},
	},
	{
		label: 'Cybersecurity',

		autogenerate: {
			directory: 'cybersecurity',
		},
	},
	{
		label: 'SQL',
		autogenerate: {
			directory: 'sql',
		},
	},
	{
		label: 'Javascript',
		items: [
			{
				label: 'Setting Up',
				link: 'javascript/index',
			},
			{
				label: 'Creative Coding',
				autogenerate: {
					directory: 'javascript/creative-coding',
				},
				collapsed: true,
			},
		],
	},
	{
		label: 'Git',
		autogenerate: {
			directory: 'git',
		},
	},
	{
		label: 'Tūhura Tech Resources',
		autogenerate: {
			directory: 'tuhura-tech',
		},
	},
] satisfies StarlightUserConfig['sidebar'];

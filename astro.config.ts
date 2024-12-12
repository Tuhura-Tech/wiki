import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import rehypeMathjax from 'rehype-mathjax';
import remarkMath from 'remark-math';
import starlightLinksValidator from 'starlight-links-validator';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.tuhuratech.org.nz/',
	integrations: [
		starlight({
			title: 'Wiki',
			description:
				'A collection of guides and resources for learning technology targeted towards rangatahi and kura in Aotearoa',
			logo: {
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
				replacesTitle: true,
			},
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/Tuhura-Tech/Wiki/blob/main/',
			},
			social: {
				mastodon: 'https://mastodon.nzoss.nz/@tuhuratech',
				discord: 'https://discord.gg/PNxh7cwKfQ',
				github: 'https://github.com/Tuhura-Tech/Wiki',
				instagram: 'https://www.instagram.com/tuhura_tech',
				facebook: 'https://www.facebook.com/p/T%C5%ABhura-Tech-100083052084710/',
				linkedin: 'https://www.linkedin.com/company/tuhuratech',
				email: 'mailto:contact@tuhuratech.org.nz',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			sidebar: [
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
			],
			locales: {
				root: {
					label: 'English',
					lang: 'en', // lang is required for root locales
				},

				mi: {
					label: 'Māori',
					lang: 'mi',
				},
			},
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
			plugins: [
				starlightLinksValidator({
					errorOnLocalLinks: false,
				}),
			],
			components: {
				Hero: './src/components/starlight/Hero.astro',
				TableOfContents: './src/components/starlight/TableOfContents.astro',
				Pagination: './src/components/starlight/Pagination.astro',
				MobileTableOfContents: './src/components/starlight/MobileTableOfContents.astro',
			},
		}),
		sitemap(),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathjax],
	},
});

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightLinksValidator from 'starlight-links-validator'
import starlightImageZoom from 'starlight-image-zoom'

import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.tuhuratech.org.nz',

	integrations: [
		starlight({
			title: 'Wiki',
			description:
				'A collection of guides and resources for learning technology targeted towards tamariki and rangatahi in Aotearoa',
			logo: {
				light: './src/assets/full-logo-light.svg',
				dark: './src/assets/full-logo-dark.svg',
				replacesTitle: true,
			},
			components: {
				// EditLink: './src/components/starlight/EditLink.astro',
				// Head: './src/components/starlight/Head.astro',
				// Hero: './src/components/starlight/Hero.astro',
				// MarkdownContent: './src/components/starlight/MarkdownContent.astro',
				// MobileTableOfContents: './src/components/starlight/MobileTableOfContents.astro',
				// TableOfContents: './src/components/starlight/TableOfContents.astro',
				// PageSidebar: './src/components/starlight/PageSidebar.astro',
				// Pagination: './src/components/starlight/Pagination.astro',
				Footer: './src/components/starlight/Footer.astro',
				// Search: './src/components/starlight/Search.astro',
				// Sidebar: './src/components/starlight/Sidebar.astro',
				// MobileMenuFooter: './src/components/starlight/MobileMenuFooter.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Tuhura-Tech/Wiki' },
				{ icon: 'mastodon', label: 'Mastodon', href: 'https://mastodon.nzoss.nz/@tuhuratech' },
				{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tuhura_tech' },
				{ icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/p/T%C5%ABhura-Tech-100083052084710' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/tuhuratechh' },
				{ icon: 'email', label: 'Email', href: 'mailto:contact@tuhuratech.org.nz' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/PNxh7cwKfQ' }
			],
			customCss: [
				// Path to your Tailwind base styles:
				'./src/styles/global.css',
			],
			editLink: {
				baseUrl: 'https://github.com/Tuhura-Tech/Wiki/blob/main/',
			},
			head: [
				// Add ICO favicon fallback for Safari.
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/favicon.ico',
						sizes: '32x32',
					},
				},
			],
			plugins: [
				starlightSidebarTopics([
					{
						label: 'Guides',
						link: '/guides/',
						icon: 'open-book',
						items: [{
							label: 'Game Dev', items: [
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
							],
						},
						{ label: 'CyberSecurity', autogenerate: { directory: 'guides/cybersecurity' } },
						{ label: '3D', autogenerate: { directory: 'guides/blender' } },
						{
							label: 'Python', items: [
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
						},
						{
							label: 'Javascript', items: [
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
						},
						{
							label: 'Databases', autogenerate: { directory: 'guides/database' }
						},
						{
							label: 'Development', autogenerate: { directory: 'guides/development' }
						},

						]


					},
					{
						label: 'NCEA Resources',
						link: '/ncea/',
						badge: { text: 'WIP', variant: 'caution' },
						icon: 'information',
						items: [{ label: 'NCEA Level 2', autogenerate: { directory: 'ncea/level-2' } }, { label: 'NCEA Level 3', autogenerate: { directory: 'ncea/level-3' } }]
					},
					{
						label: 'Contributing',
						link: '/contribute/',
						icon: 'information',
						items: [{ label: 'Contributing', autogenerate: { directory: 'contribute' } }]
					},
				]),
				starlightLinksValidator({
					errorOnRelativeLinks: false,
				}),
				starlightImageZoom(),
			],
		}),
	],

	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathjax],
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
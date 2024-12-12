import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import rehypeMathjax from 'rehype-mathjax';
import remarkMath from 'remark-math';
import starlightLinksValidator from 'starlight-links-validator';
import sitemap from '@astrojs/sitemap';
import starlightImageZoom from 'starlight-image-zoom';
import { sidebar } from './astro.sidebar';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.tuhuratech.org.nz/',
	integrations: [
		starlight({
			title: 'Wiki',
			description:
				'A collection of guides and resources for learning technology targeted towards tamariki and rangatahi in Aotearoa',
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
			sidebar,
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en', // lang is required for root locales
				},

				mi: {
					label: 'te reo Māori',
					lang: 'mi',
				},
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
				starlightLinksValidator({
					errorOnLocalLinks: false,
				}),
				starlightImageZoom(),
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

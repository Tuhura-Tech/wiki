import starlight from '@astrojs/starlight';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { defineConfig, sharpImageService } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import remarkSmartypants from 'remark-smartypants';
import { sidebar } from './astro.sidebar';
import { devServerFileWatcher } from './config/integrations/dev-server-file-watcher';
import starlightLinksValidator from 'starlight-links-validator';
import sitemap from '@astrojs/sitemap';
import starlightImageZoom from 'starlight-image-zoom';
import { makeLocalesConfig } from './config/locales';
import { starlightPluginAutolinkHeadings } from './config/plugins/rehype-autolink';
import { rehypeTasklistEnhancer } from './config/plugins/rehype-tasklist-enhancer';
import { remarkFallbackLang } from './config/plugins/remark-fallback-lang';
import rehypeMathjax from 'rehype-mathjax';
import remarkMath from 'remark-math';
import starlightDocSearch from '@astrojs/starlight-docsearch';

const docsearchAppId = process.env.AppId || '';
const docsearchApiKey = process.env.ApiKey || '';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.tuhuratech.org.nz',
	integrations: [
		devServerFileWatcher([
			'./config/*', // Custom plugins and integrations
			'./astro.sidebar.ts', // Sidebar configuration file
			'./src/content/nav/*.ts', // Sidebar labels
		]),
		starlight({
			title: 'Wiki',
			description:
				'A collection of guides and resources for learning technology targeted towards tamariki and rangatahi in Aotearoa',
			expressiveCode: {
				plugins: [pluginCollapsibleSections()],
			},
			logo: {
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
				replacesTitle: true,
			},
			components: {
				EditLink: './src/components/starlight/EditLink.astro',
				Head: './src/components/starlight/Head.astro',
				Hero: './src/components/starlight/Hero.astro',
				MarkdownContent: './src/components/starlight/MarkdownContent.astro',
				MobileTableOfContents: './src/components/starlight/MobileTableOfContents.astro',
				TableOfContents: './src/components/starlight/TableOfContents.astro',
				PageSidebar: './src/components/starlight/PageSidebar.astro',
				Pagination: './src/components/starlight/Pagination.astro',
				Footer: './src/components/starlight/Footer.astro',
				// Search: './src/components/starlight/Search.astro',
				Sidebar: './src/components/starlight/Sidebar.astro',
				MobileMenuFooter: './src/components/starlight/MobileMenuFooter.astro',
				// PageTitle: './src/components/starlight/PageTitle.astro',
			},
			editLink: {
				baseUrl: 'https://github.com/Tuhura-Tech/Wiki/blob/main/',
			},
			defaultLocale: 'en',
			locales: makeLocalesConfig(),
			sidebar,
			social: {
				discord: 'https://discord.gg/PNxh7cwKfQ',
				github: 'https://github.com/Tuhura-Tech/Wiki',
				mastodon: 'https://mastodon.nzoss.nz/@tuhuratech',
				instagram: 'https://www.instagram.com/tuhura_tech',
				facebook: 'https://www.facebook.com/p/T%C5%ABhura-Tech-100083052084710/',
				linkedin: 'https://www.linkedin.com/company/tuhuratech',
				email: 'mailto:contact@tuhuratech.org.nz',
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
				starlightImageZoom(),
				// starlightLinksValidator({
				// 	errorOnLocalLinks: false,
				// }),
				starlightPluginAutolinkHeadings(),
				starlightDocSearch({
					appId: docsearchAppId,
					apiKey: docsearchApiKey,
					indexName: 'wiki',
				}),
				starlightImageZoom(),
			],
		}),
		sitemap(),
	],
	markdown: {
		// Override with our own config
		smartypants: false,
		remarkPlugins: [
			[remarkSmartypants, { dashes: false }],
			// Add our custom plugin that marks links to fallback language pages
			remarkFallbackLang(),
			remarkMath,
		],
		rehypePlugins: [
			rehypeSlug,
			// Tweak GFM task list syntax
			rehypeTasklistEnhancer(),
			rehypeMathjax,
		],
	},
});

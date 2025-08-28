import starlight from '@astrojs/starlight';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { defineConfig, sharpImageService } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import remarkSmartypants from 'remark-smartypants';
import { sidebar } from './astro.sidebar';
import { devServerFileWatcher } from './config/integrations/dev-server-file-watcher';
import { sitemap } from './config/integrations/sitemap';
import { makeLocalesConfig } from './config/locales';
import { starlightPluginAutolinkHeadings } from './config/plugins/rehype-autolink';
import { rehypeTasklistEnhancer } from './config/plugins/rehype-tasklist-enhancer';
import { remarkFallbackLang } from './config/plugins/remark-fallback-lang';

//import tailwind from '@astrojs/tailwind';
import tailwind from '@astrojs/starlight-tailwind'

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
			customCss: [
				 //Path to your Tailwind base styles:
				'./src/tailwind.css',
			],
			logo: {
				light: './public/assets/full-logo-light.png',
				dark: './public/assets/full-logo-dark.png',
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
				Search: './src/components/starlight/Search.astro',
				Sidebar: './src/components/starlight/Sidebar.astro',
				MobileMenuFooter: './src/components/starlight/MobileMenuFooter.astro',
			},
			editLink: {
				baseUrl: 'https://github.com/Tuhura-Tech/Wiki/blob/main/',
			},
			defaultLocale: 'en',
			locales: makeLocalesConfig(),
			sidebar,
			social: [
				{icon: 'discord', label: 'Discord', href: 'https://discord.gg/PNxh7cwKfQ'},
				{icon: 'github', label: 'GitHub', href: 'https://github.com/Tuhura-Tech/Wiki'},
				{icon: 'mastodon', label: 'Mastodon', href: 'https://mastodon.nzoss.nz/@tuhuratech'},
				{icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tuhura_tech'},
				{icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/p/T%C5%ABhura-Tech-100083052084710/'},
				{icon: 'linkedin', label: 'Linkedin', href: 'https://www.linkedin.com/company/tuhuratech'},
				{icon: 'email', label: 'Email', href: 'mailto:contact@tuhuratech.org.nz'},
				{icon: 'matrix', label: 'Matrix', href: 'https://matrix.to/#/#home:tuhuratech.org.nz'},
			],
			pagefind: false,
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
				{
      		tag: 'script',
      		attrs: {
           src: 'https://plausible.tuhuratech.org.nz/js/script.js',
           'data-domain': 'wiki.tuhuratech.org.nz',
           defer: true,
          },
       },
			],
			disable404Route: true,
			plugins: [starlightPluginAutolinkHeadings()],
		}),
		sitemap(),
		//tailwind({
			// Disable the default base styles:
			//applyBaseStyles: false,
		//}),
	],
	markdown: {
		// Override with our own config
		smartypants: false,
		remarkPlugins: [
			[remarkSmartypants, { dashes: false }],
			// Add our custom plugin that marks links to fallback language pages
			remarkFallbackLang(),
		],
		rehypePlugins: [
			rehypeSlug,
			// Tweak GFM task list syntax
			rehypeTasklistEnhancer(),
		],
	},
	image: {
		domains: ['avatars.githubusercontent.com'],
		service: sharpImageService(),
	},
});

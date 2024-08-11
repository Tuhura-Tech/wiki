import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator'
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  site: 'https://wiki.tuhuratech.org.nz/',
  integrations: [starlight({
    title: 'Wiki',
    description: 'A collection of guides and resources for learning technology targeted towards rangatahi and kura in Aotearoa',
    logo: {
      light: './src/assets/logo-light.png',
      dark: './src/assets/logo-dark.png',
      replacesTitle: true
    },
    lastUpdated: true,
    editLink: {
      baseUrl: 'https://github.com/Tuhura-Tech/Wiki/blob/main/'
    },
    social: {
      mastodon: 'https://mastodon.nzoss.nz/@tuhuratech',
      discord: 'https://discord.gg/PNxh7cwKfQ',
      github: 'https://github.com/Tuhura-Tech/Wiki'
    },
    customCss: [
      // Relative path to your custom CSS file
      './src/styles/custom.css',
    ],
    sidebar: [
      {
        label: "Python", items: [{
          label: "Python Basics",
          link: 'python'
        }, {
          label: "Conditionals and Loops",
          link: "python/conditionals-loops"
        }, {
          label: "Lists, Tuples, Dictionaries, and Sets",
          link: "python/lists-tuples-dicts"
        }, {
          label: "Functions and Docstrings",
          link: "python/functions"
        }, {
          label: "Turtle",
          link: "python/turtle"
        }, {
          label: "Setting Up",
          link: 'python/setting-up'
        }, {
          label: "Flask",
          autogenerate: {
            directory: 'python/flask'
          },
          collapsed: true
        }]
      }, 
      {
        label: "Game Design",
        items: [{
          label: "About",
          link: 'game-design/index'
        }, {
          label: "Godot",
          autogenerate: {
            directory: 'game-design/godot'
          },
          collapsed: true
        }],
      },
      {
        label: "Blender",
        autogenerate: {
          directory: 'blender'
        }
      },
      {
        label: "Cybersecurity",

        autogenerate: {
          directory: 'cybersecurity'
        }
      },
      {
        label: "SQL",
        autogenerate: {
          directory: 'sql'
        }
      }, {
        label: "Javascript",
        items: [{
          label: "Setting Up",
          link: 'javascript/index'
        }, {
          label: "Creative Coding",
          autogenerate: {
            directory: 'javascript/creative-coding'
          },
          collapsed: true
        }]
      }, {
        label: "Git",
        autogenerate: {
          directory: 'git'
        }
      }, {
        label: "Tūhura Tech Resources",
        autogenerate: {
          directory: 'tuhura-tech'
        }
      }],
    locales: {
      root: {
        label: 'English',
        lang: 'en' // lang is required for root locales
      },

      mi: {
        label: 'Māori',
        lang: 'mi'
      }
    },
    favicon: '/images/favicon.svg',
    head: [
      // Add ICO favicon fallback for Safari.
      {
        tag: 'link',
        attrs: {
          rel: 'icon',
          href: '/images/favicon.ico',
          sizes: '32x32'
        }
      }],
    plugins: [starlightLinksValidator()],
    components: {
      Hero: './src/components/starlight/Hero.astro',
    },
  })],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  }
});

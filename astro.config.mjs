import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator'

export default defineConfig({
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
      github: 'https://github.com/Tuhura-Tech/Wiki',
      discord: 'https://discord.gg/PNxh7cwKfQ'
    },
    customCss: [
      // Relative path to your custom CSS file
      './src/styles/custom.css',
    ],
    sidebar: [{
      label: 'Guides',
      items: [{
        label: "About our Guides",
        link: 'guides/about'
      }, {
        label: "Javascript",
        items: [{
          label: "Setting Up",
          link: 'guides/javascript/setting-up'
        }, {
          label: "Creative Coding",
          autogenerate: {
            directory: 'guides/javascript/creative-coding'
          }
        }]
      },
      {
        label: "Python", items: [{
          label: "Setting Up",
          link: 'guides/python'
        }, {
          label: "Setting Up",
          link: 'guides/python/setting-up'
        }, {
          label: "Flask",
          autogenerate: {
            directory: 'guides/python/flask'
          }
        }]
      },
      {
        label: "Git",
        autogenerate: {
          directory: 'guides/git'
        }
      }, {
        label: "Cybersecurity",

        autogenerate: {
          directory: 'guides/cybersecurity'
        }
      }, {
        label: "Game Design",
        items: [{
          label: "About",
          link: 'guides/game-design/about'
        }, {
          label: "Godot",
          autogenerate: {
            directory: 'guides/game-design/godot'
          }
        }],
      },
      {
        label: "SQL",
        autogenerate: {
          directory: 'guides/sql'
        }
      }]
    }, {
      label: 'NCEA Resources',
      items: [{
        label: "About our Resources",
        link: 'ncea/about'
      }, {
        label: "NCEA Level 2",
        items: [{
          label: "About",
          link: 'ncea/level-2'
        }, {
          label: "Flask",
          autogenerate: {
            directory: 'ncea/level-2/flask'
          }
        }]
      }, {
        label: "NCEA Level 3",
        items: [{
          label: "About",
          link: 'ncea/level-3'
        }, {
          label: "Flask",

          autogenerate: {
            directory: 'ncea/level-3/flask'
          }
        }]
      }]
    }, {
      label: "Tuhura Tech Resources",
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
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  site: 'https://wiki.tuhuratech.org.nz',

  integrations: [
      starlight({

          //Site config
          title: 'Wiki',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],

          logo:{
              light: './public/assets/full-logo-light.png',
              dark: './public/assets/full-logo-dark.png',
              replacesTitle: true,
          },

          favicon: '/favicon.ico',

          customCss: [
              './src/styles/global.css',
          ],

          components:{
              Sidebar: './src/components/starlight/Sidebar.astro',
          },

          //Locales
          defaultLocale: 'en',
          locales: {
              en: {
                  label: 'English',
              },
          },



          //Sidebar Config
          sidebar: [
              {
                  label: 'Guides and Resources',
                  items: [
                      {
                          label: 'Game Development',
                          items: [
                              // Each item here is one entry in the navigation menu.
                              { label: 'About', slug: 'guides/game-dev'},
                              { label: 'Godot Basics', slug: 'guides/game-dev/basics'},
                                {
                                label: '2D Platformer',
                                collapsed: true,
                                items: [
                                    {label: '1. Making the Player', slug: 'guides/game-dev/2dplatformer/0-making-the-player'},
                                    {label: '2. Creating a level', slug: 'guides/game-dev/2dplatformer/1-creating-a-level'},
                                    {label: '3. Adding Movement', slug: 'guides/game-dev/2dplatformer/2-adding-movement'},
                                    {label: '4. Adding Killzones', slug: 'guides/game-dev/2dplatformer/3-adding-killzones'},
                                    {label: '5. Making Enemies', slug: 'guides/game-dev/2dplatformer/4-making-enemies'},
                                    {label: '6. Adding Items', slug: 'guides/game-dev/2dplatformer/5-adding-items'},
                                    {label: '7. Connecting Levels', slug: 'guides/game-dev/2dplatformer/6-connecting-levels'},
                                ],
                                },
                              { label: '2D Platformer', slug: 'guides/game-dev/2dplatformer/0-making-the-player'},
                              { label: 'Top-down Dungeon Crawler', slug: 'guides/game-dev/dungeoncrawler/0-scenesetup' },
                          ],
                      },
                      {
                          label: 'Cybersecurity',
                          autogenerate: { directory: 'guides/Cybersecurity' },
                      },
                  ]
              },
              {
                  label: 'NCEA',
                  items: []
              },
              {
                  label: 'Micro-Credentials',
                  items: []
              },


              
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },

});
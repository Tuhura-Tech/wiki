import { defineConfig } from "vitepress";
import nav from "./mi/nav";
import sidebar from "./mi/sidebar";

export default defineConfig({
  lang: "mi",
  description: "Vite & Vue powered static site generator.",

  themeConfig: {
    nav,
    sidebar,

    outline: "deep",

    socialLinks: [
      { icon: "github", link: "https://github.com/Tuhura-Tech/Wiki" },
      { icon: "discord", link: "https://discord.gg/PNxh7cwKfQ" },
    ],

    editLink: {
      pattern: "https://github.com/Tuhura-Tech/Wiki/edit/main/docs/:path",
    },

    footer: {
      message:
        "AGPLv3 & Creative Commons Attribution-ShareAlike 4.0 International Licensed",
      copyright: "Copyright © 2023-present Tūhura Tech",
    },

    // local search but will move to algolia later
    search: {
      provider: "local",
    },

    // i18n
    locales: {
      "/en/": { label: "English" },
      "/mi/": { label: "Māori" },
    },
  },
});

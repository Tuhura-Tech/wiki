import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import nav from "./config/nav";
import sidebar from "./config/sidebar";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "Tūhura Tech",
    description: "Free and public resources from Tūhura Tech",
    lastUpdated: true,
    cleanUrls: true,

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
    },
    mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
  })
);

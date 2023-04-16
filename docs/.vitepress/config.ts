import { withMermaid } from "vitepress-plugin-mermaid";
import { defineConfig } from "vitepress";

import locales from "./config";
export default withMermaid(
  defineConfig({
    title: "Tūhura Tech",

    lastUpdated: true,
    cleanUrls: true,

    head: [["meta", { name: "theme-color", content: "#3c8772" }]],

    locales: locales.locales,

    mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
  })
);

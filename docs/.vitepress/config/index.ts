import { defineConfig } from "vitepress";
import en from "./en";
import mi from "./mi";

export default defineConfig({
  locales: {
    root: {
      label: "English",
      lang: en.lang,
      themeConfig: en.themeConfig,
      description: en.description,
    },
    mi: {
      label: "Māori",
      lang: mi.lang,
      themeConfig: mi.themeConfig,
      description: mi.description,
    },
  },
});

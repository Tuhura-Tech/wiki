const starlightPlugin = require('@astrojs/starlight-tailwind');

// Generated color palettes
const accent = { 200: '#bbcfba', 600: '#427b42', 900: '#213921', 950: '#192819' };
const gray = { 100: '#f4f7f3', 200: '#eaf0e8', 300: '#bdc4bb', 400: '#82907f', 500: '#4f5c4d', 700: '#303c2d', 800: '#1f2a1c', 900: '#151a13' };

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};
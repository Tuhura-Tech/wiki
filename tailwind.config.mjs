import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#bbcfba', 600: '#407840', 900: '#213921', 950: '#192819' };
const gray = {
	100: '#f3f7fc',
	200: '#e6eff9',
	300: '#b9c3cf',
	400: '#7b8da4',
	500: '#485a6e',
	700: '#29394d',
	800: '#18283a',
	900: '#121921',
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};

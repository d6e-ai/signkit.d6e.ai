// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://signkit.d6e.ai',
	output: 'static',
	trailingSlash: 'never',
	integrations: [svelte()],
	vite: {
		plugins: [tailwindcss()],
	},
});

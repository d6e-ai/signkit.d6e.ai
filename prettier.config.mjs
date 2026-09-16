export default {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
	useTabs: true,
	singleQuote: true,
	printWidth: 100,
};

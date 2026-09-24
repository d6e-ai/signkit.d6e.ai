<script lang="ts">
	// Official Vercel triangle used on vercel.com. Sharp corners, currentColor so it
	// follows the page foreground in light and dark themes.

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<svg class={className} viewBox="0 0 115 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
	<path fill="currentColor" fill-rule="evenodd" d="M57.5 0 115 100H0z" clip-rule="evenodd" />
</svg>

<script lang="ts">
	// Official Vercel triangle from vercel.com. The mark is black in both themes.
	// Dark pages use a white plate so the triangle stays black instead of inverting.

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<svg class={className} viewBox="0 0 115 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
	<path fill="#000" fill-rule="evenodd" d="M57.5 0 115 100H0z" clip-rule="evenodd" />
</svg>

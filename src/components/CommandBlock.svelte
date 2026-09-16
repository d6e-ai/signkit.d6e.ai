<script lang="ts">
	import { IconCheck, IconCopy } from '@tabler/icons-svelte';

	import { Button } from '$lib/components/ui/button';

	interface Props {
		title: string;
		command: string;
		copyLabel: string;
		copiedLabel: string;
		promptLines?: number[];
	}

	let { title, command, copyLabel, copiedLabel, promptLines = [0] }: Props = $props();
	let copied = $state(false);
	let resetTimer: ReturnType<typeof setTimeout> | undefined;
	let commandLines = $derived(command.split('\n'));

	async function copyCommand(): Promise<void> {
		await navigator.clipboard.writeText(command);
		copied = true;
		if (resetTimer !== undefined) clearTimeout(resetTimer);
		resetTimer = setTimeout(() => (copied = false), 2000);
	}
</script>

<div class="bg-card w-full min-w-0 overflow-hidden rounded-xl border text-left shadow-sm">
	<div class="bg-muted/50 flex items-center gap-3 border-b px-3 py-2">
		<div class="flex min-w-12 items-center gap-1.5" aria-hidden="true">
			<span class="bg-window-close size-3 rounded-full"></span>
			<span class="bg-window-minimize size-3 rounded-full"></span>
			<span class="bg-window-maximize size-3 rounded-full"></span>
		</div>
		<p class="text-foreground/60 min-w-0 flex-1 truncate text-center font-mono text-xs">{title}</p>
		<div class="flex min-w-12 justify-end">
			<Button
				variant="ghost"
				size="icon-sm"
				onclick={copyCommand}
				aria-label={copied ? copiedLabel : copyLabel}
			>
				{#if copied}<IconCheck />{:else}<IconCopy />{/if}
			</Button>
			<span class="sr-only" aria-live="polite">{copied ? copiedLabel : ''}</span>
		</div>
	</div>
	<div class="overflow-x-auto p-4">
		<pre
			class="min-w-0 overflow-x-auto font-mono text-sm leading-7 break-words whitespace-pre-wrap"><code
				>{#each commandLines as line, index}{#if promptLines.includes(index)}<span
							class="text-foreground/60 select-none"
							aria-hidden="true"
							>$ </span>{/if}{line}{#if index < commandLines.length - 1}{'\n'}{/if}{/each}</code
			></pre>
	</div>
</div>

<script lang="ts">
	import { IconArrowRight, IconBrandGithub } from '@tabler/icons-svelte';

	import { Button } from '$lib/components/ui/button';
	import type { Dictionary, Locale } from '../i18n';
	import { site } from '../site';
	import CloudflareLogo from './CloudflareLogo.svelte';
	import CommandBlock from './CommandBlock.svelte';
	import VercelLogo from './VercelLogo.svelte';

	interface Props {
		locale: Locale;
		messages: Dictionary;
	}

	let { locale, messages: m }: Props = $props();

	const command = `pnpm dlx create-signkit@0.1.2 --cloudflare deploy \\
  --account-id <32-hex-account-id> \\
  --email-from ops@example.com \\
  --domain sign.example.com \\
  --bootstrap-owner-email owner@example.com \\
  --yes < /secure/path/signkit-oauth.json`;
</script>

<section
	class="flex min-h-[calc(100svh-8rem)] flex-col items-center justify-center py-12 text-center sm:py-20"
>
	<div class="flex w-full flex-col items-center gap-8">
		<div class="flex flex-col items-center gap-5">
			<p class="text-primary text-sm font-medium">{m.hero_eyebrow}</p>
			<h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{m.hero_title}</h1>
			<p class="text-muted-foreground text-base leading-7 sm:text-lg">{m.hero_body}</p>
		</div>

		<ul class="flex items-center justify-center gap-7" aria-label={m.hosting_label}>
			<li>
				<a
					class="focus-visible:outline-ring rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4"
					href={site.cloudflare}
					target="_blank"
					rel="noreferrer"
					title="Cloudflare"
				>
					<CloudflareLogo class="h-7 w-auto" />
					<span class="sr-only">Cloudflare</span>
				</a>
			</li>
			<li>
				<a
					class="focus-visible:outline-ring rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4"
					href={site.vercel}
					target="_blank"
					rel="noreferrer"
					title="Vercel"
				>
					<VercelLogo class="h-7 w-auto" />
					<span class="sr-only">Vercel</span>
				</a>
			</li>
		</ul>

		<div class="flex flex-wrap items-center justify-center gap-3">
			<Button href={site.repository} target="_blank" rel="noreferrer" variant="github" size="lg">
				<IconBrandGithub data-icon="inline-start" />
				{m.github_star}
			</Button>
			<Button href={`/${locale}/guide`} variant="outline" size="lg">
				{m.read_guide}
				<IconArrowRight data-icon="inline-end" />
			</Button>
		</div>

		<CommandBlock
			title={m.deploy_title}
			{command}
			copyLabel={m.copy_command}
			copiedLabel={m.copied}
		/>
	</div>
</section>

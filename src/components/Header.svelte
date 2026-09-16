<script lang="ts">
	import {
		IconCheck,
		IconDeviceDesktop,
		IconLanguage,
		IconMoon,
		IconSun,
	} from '@tabler/icons-svelte';
	import { ModeWatcher, mode, setMode, userPrefersMode } from 'mode-watcher';

	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import type { Dictionary, Locale } from '../i18n';

	interface Props {
		locale: Locale;
		messages: Dictionary;
		pagePath?: string;
	}

	const languages = [
		{ locale: 'en', label: 'English' },
		{ locale: 'ja', label: '日本語' },
	] as const;

	let { locale, messages: m, pagePath = '' }: Props = $props();

	const themes = $derived([
		{ value: 'light' as const, label: m.theme_light, icon: IconSun },
		{ value: 'dark' as const, label: m.theme_dark, icon: IconMoon },
		{ value: 'system' as const, label: m.theme_system, icon: IconDeviceDesktop },
	]);
</script>

<ModeWatcher />

<header class="bg-background/85 sticky top-0 z-30 border-b backdrop-blur-xl">
	<div class="container mx-auto flex h-16 items-center px-4">
		<a
			href={`/${locale}`}
			class="group focus-visible:ring-ring/50 flex items-center gap-2 rounded-full outline-none focus-visible:ring-3"
		>
			<img
				src="/favicon.svg"
				alt=""
				class="size-7 transition-transform group-hover:scale-105"
				width="28"
				height="28"
			/>
			<span class="font-semibold tracking-tight">SignKit</span>
		</a>

		<div class="ml-auto flex items-center gap-1">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Button
							{...props}
							variant="ghost"
							size="icon"
							class="rounded-full"
							aria-label={m.theme}
						>
							{#if mode.current === 'dark'}
								<IconMoon />
							{:else}
								<IconSun />
							{/if}
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end" class="min-w-36">
					<DropdownMenu.Label>{m.theme}</DropdownMenu.Label>
					<DropdownMenu.Group>
						{#each themes as theme (theme.value)}
							<DropdownMenu.Item onclick={() => setMode(theme.value)}>
								<theme.icon />
								<span>{theme.label}</span>
								<span class="flex-auto"></span>
								{#if userPrefersMode.current === theme.value}<IconCheck />{/if}
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Button
							{...props}
							variant="ghost"
							size="icon"
							class="rounded-full"
							aria-label={m.language}
						>
							<IconLanguage />
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end" class="min-w-36">
					<DropdownMenu.Label>{m.language}</DropdownMenu.Label>
					<DropdownMenu.Group>
						{#each languages as language (language.locale)}
							<DropdownMenu.Item>
								{#snippet child({ props })}
									<a href={`/${language.locale}${pagePath}`} lang={language.locale} {...props}>
										<span>{language.label}</span>
										<span class="flex-auto"></span>
										{#if language.locale === locale}<IconCheck />{/if}
									</a>
								{/snippet}
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>

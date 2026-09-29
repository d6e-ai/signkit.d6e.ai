# Architecture

This site is a small Astro application built entirely as static assets and served by Cloudflare Workers Static Assets.

- The static root page chooses `/en` or `/ja` from the browser's preferred languages. It offers language links when JavaScript is unavailable.
- All public content is explicitly locale-prefixed, including `/en/guide` and `/ja/guide`.
- `src/layouts/BaseLayout.astro` owns metadata, the shared header, and the footer.
- Interactive shadcn-svelte islands provide theme, locale, and command-copy controls; there is no server-side rendering or Worker script.
- The Luma/Mist theme tokens and favicon are kept in sync with the SignKit application.

Deployment and routing rationale is recorded in [`decisions/2026-09-15-site-routing-and-deployment.md`](decisions/2026-09-15-site-routing-and-deployment.md) and [`decisions/2026-09-29-root-locale-selection.md`](decisions/2026-09-29-root-locale-selection.md).

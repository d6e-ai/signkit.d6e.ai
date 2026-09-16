# Locale routing and Cloudflare deployment — 2026-09-15

## Status

Accepted.

## Decision

Use Astro's static output with small shadcn-svelte Luma islands. Keep all content under explicit locale prefixes: `/en` and `/ja`. A static `_redirects` rule sends `/` to `/en` without serving English content at the unprefixed URL.

Deploy the generated assets to `signkit.d6e.ai` in the D6E Cloudflare account. The deployment has no Worker script; Cloudflare serves the assets and handles the root redirect declared in `public/_redirects`.

Configure Cloudflare static asset HTML handling to drop trailing slashes so deployed URLs match Astro's canonical `/en`, `/ja`, and guide URLs.

Keep the existing `signkit.d6e.ai` Custom Domain attached in Cloudflare rather than reconciling it from `wrangler.jsonc`. Pushes to `main` validate and deploy through the `Production` GitHub environment. The deployment credential is scoped to editing the existing Worker and cannot change DNS, Routes, or Custom Domains.

## Consequences

- English never occupies an unprefixed content URL.
- Language switching preserves the current page path.
- Canonical and alternate links are deterministic for both locales.
- Static asset requests do not consume Workers runtime invocations.
- Routine deployments do not require zone-level permissions.

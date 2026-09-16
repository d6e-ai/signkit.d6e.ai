# Locale routing and Cloudflare deployment — 2026-09-15

## Status

Accepted.

## Decision

Use Astro's static output with small shadcn-svelte Luma islands. Keep all content under explicit locale prefixes: `/en` and `/ja`. A static `_redirects` rule sends `/` to `/en` without serving English content at the unprefixed URL.

Deploy the generated assets to `signkit.d6e.ai` in the D6E Cloudflare account. The deployment has no Worker script; Cloudflare serves the assets and handles the root redirect declared in `public/_redirects`.

Configure Cloudflare static asset HTML handling to drop trailing slashes so deployed URLs match Astro's canonical `/en`, `/ja`, and guide URLs.

## Consequences

- English never occupies an unprefixed content URL.
- Language switching preserves the current page path.
- Canonical and alternate links are deterministic for both locales.
- Static asset requests do not consume Workers runtime invocations.

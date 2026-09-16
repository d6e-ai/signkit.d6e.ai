# SignKit website

The bilingual landing page and operator guide for [SignKit](https://github.com/d6e-ai/signkit).

## Development

```sh
pnpm install
pnpm dev
```

English lives under `/en`; Japanese lives under `/ja`. The root path redirects to `/en`, so English content never occupies an unprefixed URL.

## Checks and deployment

```sh
pnpm check
pnpm build
pnpm deploy
```

The site is built entirely as static assets and deployed to `https://signkit.d6e.ai` in the D6E Cloudflare account. Architecture notes are in [`docs/architecture/`](docs/architecture/README.md).

Pushes to `main` run the same checks and deploy through the `Production` GitHub environment. Its configuration is:

- Environment secret: `CLOUDFLARE_API_TOKEN`
- Environment variable: `CLOUDFLARE_ACCOUNT_ID`

The Custom Domain is configured once in Cloudflare and intentionally omitted from `wrangler.jsonc`, so routine CD needs only permission to edit the existing `signkit-d6e-ai` Worker.

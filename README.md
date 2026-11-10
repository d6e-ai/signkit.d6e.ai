# SignKit website

The bilingual landing page and operator guide for [SignKit](https://github.com/d6e-ai/signkit).

## Development

```sh
pnpm install
pnpm dev
```

**This site has moved.** The product page is now `https://www.d6e.ai/[locale]/signkit` and the operator guide is `https://www.d6e.ai/[locale]/developers/signkit` (source: `apps/signkit` and `apps/developers` in d6e-ai/d6e-auth). Every `/en`, `/ja` and guide URL here answers with a permanent redirect (`public/_redirects`), and the root page sends the visitor to the new address for their browser language. The pages below are no longer reachable except through the root page; this repository is kept only to serve the redirects.

English lived under `/en`; Japanese lived under `/ja`.

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

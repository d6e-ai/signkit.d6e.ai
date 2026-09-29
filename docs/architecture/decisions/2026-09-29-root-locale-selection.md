# Root locale selection — 2026-09-29

## Status

Accepted. Supersedes the fixed root redirect in [2026-09-15 site routing and deployment](2026-09-15-site-routing-and-deployment.md).

## Context

The fixed `_redirects` rule always sent `/` to `/en`, including visitors whose browser prefers Japanese. CAUCHYE's root route selects the preferred supported locale from `Accept-Language`, but that route runs on a server. SignKit remains a static site without a Worker script.

## Decision

Generate a small static root page that selects the first supported language in `navigator.languages` and uses `location.replace` to enter `/en` or `/ja`. Use `/en` when neither locale appears. Offer both links if JavaScript is unavailable. Keep all LP and guide content under explicit locale URLs.

## Consequences

- Browser navigation to `/` follows the visitor's preferred supported language without a Worker invocation.
- Unlike CAUCHYE's server route, the HTTP response for `/` is a static page, not a locale-dependent 302. HTTP clients that do not execute JavaScript can follow the language links.

Add canonical links and og:url meta tags to the homepage, pointing to the custom domain `https://www.anthonyandpambollinger.com`.

## Changes

1. **`src/routes/index.tsx`** — Add to the route's `head()`:
   - `og:url` meta tag: `https://www.anthonyandpambollinger.com/`
   - Canonical link: `<link rel="canonical" href="https://www.anthonyandpambollinger.com/" />`

2. **`src/routes/__root.tsx`** — Remove the root-level `og:image` and `twitter:image` meta tags (these should live on leaf routes per TanStack Router SEO guidelines; since the site currently has only the homepage, moving them to `index.tsx` alongside the new tags keeps the setup correct).

## Why
- Canonical tags tell search engines the preferred URL, preventing duplicate-content issues if the site is accessed via the `.lovable.app` domain or with query parameters.
- `og:url` ensures social shares always link back to the custom domain.
- No other routes exist yet, so only the homepage (`/`) needs these tags.
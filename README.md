# BYC Landing Page

Marketing site for **BYC (Build Your Capability)** — a sovereign defence-tech command platform.

Static site, designed in Stitch and rendered as a single `index.html` using Tailwind via the Play CDN. No build step required.

## Files

- `index.html` — the landing page. All design tokens are encoded in the inline `tailwind.config` so the page is one-file portable.
- `DESIGN.md` — design system reference (colors, typography, spacing, components, signature effects).
- `.nojekyll` — disables Jekyll processing on GitHub Pages.
- `.stitch/designs/` — original Stitch HTML export and screenshot, kept for reference.

## Deploy to GitHub Pages

1. `git init && git add -A && git commit -m "Initial BYC landing page"`
2. Create a repo on GitHub and push.
3. Repo → Settings → Pages → **Source: Deploy from a branch** → Branch `main`, folder `/ (root)` → Save.
4. Site goes live at `https://<user>.github.io/<repo>/` within ~1 minute.

## Local preview

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

Or open `index.html` directly in the browser.

## Editing

- Content lives directly in `index.html`. Update copy in place.
- Visual tokens (colors, type, spacing) live in the `<script id="tailwind-config">` block at the top of `index.html`. Mirror any changes back into `DESIGN.md`.
- For larger edits, re-open the source Stitch project (`projects/1381534418679639653`) and re-export, then sync the design tokens.

## Notes

- Tailwind Play CDN is fine for a marketing one-pager but emits a console warning in production. For a hardened deployment, swap to a built Tailwind v3 pipeline (`tailwindcss -i input.css -o dist.css`) using the same config.
- The hero and mission images currently reference Google-hosted Stitch CDN URLs. Mirror them into `/assets/` before any production launch to avoid link rot.

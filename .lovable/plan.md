Rebuild the single-page site so it feels authentic, handcrafted, and high-converting using the chosen Heritage Press Kit direction.

## Design tokens (locked, applied verbatim)

Update `src/styles.css`:
- Fonts: swap to Lora (display) + Nunito Sans (body). Update Google Fonts link in `__root.tsx`.
- Palette tokens (oklch equivalents of):
  - `--cream` #fdfaf6 (paper)
  - `--burgundy` #5c2018 (deep burgundy, primary)
  - `--sienna` #9b4423 (secondary)
  - `--amber` #d4842a (accent / CTA)
  - `--gold` #e8b84a (highlight)
  - `--ink` #3a140f (vignette)
- Add subtle paper-grain texture utility (CSS background-image with transparenttextures.com pattern) and an `.ink-vignette` radial overlay class.

## Section-by-section rebuild (full-width bands)

Each band fills the viewport width, generous vertical padding, alternating cream/burgundy/dark backgrounds.

1. **Sticky nav** — thin cream bar with hairline burgundy border, serif logotype with italic ampersand, uppercase tracked links, single amber Book CTA with the "double-shadow stamped button" treatment from prototype.

2. **Hero band** — burgundy background with layered vignette + grain + faded grayscale stage photo (mix-blend-overlay), corner frame brackets, gold hairline divider w/ "BRUCE, MISSISSIPPI · EST. 2021" label, big Lora headline (italic "Anthony & Pam" + bold "Bollinger"), hand-drawn SVG flourish, italic subhead with gold accent line, dual stamped CTA buttons, "THE TESTIMONY" scroll indicator.

3. **Stats playbill band** — cream paper, 4 stats laid out as ticket-stub style cards with sienna serif numerals and uppercase Nunito labels, separated by gold vertical rules.

4. **Our Story band** — cream/paper with grain. Asymmetric: portrait on left framed with offset amber border + corner brackets; long testimony on right with drop-cap on first paragraph, italic burgundy pull-quote "It's a God thing. I'm living proof." set large as a stand-alone block between paragraphs.

5. **What We Play band** — deep burgundy, "FROM THE HITS TO THE HYMNS" overline, four genre cards as cream-paper "playbill tickets" with amber icon, serif title, hairline rule.

6. **Watch & Listen band** — dark ink background, video poster in a framed cream mat with corner brackets, gold round play button, italic caption referencing "I'm Living Proof."

7. **Booking band** — cream paper, two-column: left contact details with amber icons + sienna script-feel headings; right form styled as paper card with burgundy labels, amber focus rings, burgundy "Send Booking Inquiry" stamped CTA.

8. **Footer** — burgundy band, centered logotype, italic tagline, gold-circle social icons, hashtags, copyright in tracked small caps.

## Motion & polish

- Keep `useReveal` scroll fades; slow them slightly (1s).
- Add subtle parallax to hero photo (CSS-only via background-attachment fallback OK).
- Underline-draw on nav links.

## Files touched

- `src/styles.css` — replace palette tokens, fonts, add texture/vignette utilities, replace cream/navy/gold mappings with new Autumn Harvest values (keep existing token names `--cream`, `--navy`, `--navy-deep`, `--gold`, `--burgundy` but remap their values so existing class names still work; add `--sienna`, `--amber`, `--ink`).
- `src/routes/__root.tsx` — swap Google Fonts link to Lora + Nunito Sans.
- `src/routes/index.tsx` — rewrite all sections following the layout above, fix the hydration whitespace issue around the `mailto:` link by removing the stray space inside the anchor.
- No new dependencies.

Content is unchanged; only structure, hierarchy, and styling change.
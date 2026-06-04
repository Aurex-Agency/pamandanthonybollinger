## Typography Update: Playfair + Inter → DM Serif Display + Fira Sans

Swap the font stack site-wide to the "Storyteller" pairing the user chose.

### Files to change

1. **`src/routes/__root.tsx`**
   - Replace the Google Fonts link in `head.links`:
   ```
   https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400;500;600;700&family=Fira+Sans:wght@300;400;500;600;700&display=swap
   ```

2. **`src/styles.css`**
   - Update `--font-display`: `'Playfair Display', Georgia, serif` → `'DM Serif Display', Georgia, serif`
   - Update `--font-sans`: `'Inter', system-ui, sans-serif` → `'Fira Sans', system-ui, sans-serif`

No other changes. The existing `font-display` and `font-sans` tokens are already wired into headings and body text throughout the site.
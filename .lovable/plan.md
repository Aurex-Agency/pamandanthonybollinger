Polish the mobile pass without touching the desktop look. The desktop design stays exactly as approved; only mobile-only utility classes (`text-*`, `py-*`, hidden corner brackets, etc.) and one player overlay fix change.

## Issues found in mobile audit

1. **Hero headline crowds the viewport.** "Anthony & Pam" wraps to two lines and "Bollinger" runs nearly edge-to-edge at 390px. Subhead is also dense.
2. **Corner frame brackets sit on top of the hero copy on small screens** (the 6-padding offset is fine on desktop, too tight on mobile).
3. **Section vertical padding is excessive on mobile.** `py-24 md:py-32` makes the page feel padded out on phones.
4. **YouTube "Sign in to confirm you're not a bot" UI bleeds through the tap-to-unmute overlay** because the overlay is only `bg-burgundy-deep/35`. The overlay should fully cover the iframe until tapped.
5. **Pull-quote in Our Story** ("It's a God thing…") is `text-3xl md:text-4xl` — too big on phones, breaks awkwardly.
6. **Stats lose their gold dividers on mobile** (they're `md:border-r` only). Add horizontal rule between the two rows for rhythm.
7. **Booking contact email** can overflow; add `break-all` / `min-w-0` to be safe.
8. **Eyebrow labels** (e.g. "★ NEW SINGLE · OUT NOW") wrap on narrow widths because of the flanking rules. Allow the rules to shrink/hide on mobile.

## Changes (`src/routes/index.tsx` only — no design-token edits)

- Hero `<h1>`: scale down the mobile sizes (italic line `text-4xl sm:text-5xl md:text-7xl lg:text-8xl`, "Bollinger" `text-5xl sm:text-6xl md:text-8xl lg:text-[9rem]`). Reduce subhead to `text-base md:text-xl`. Tighten hero vertical padding via `min-h-[100svh] py-20 md:py-0`.
- `CornerFrame`: add `hidden md:block` on the brackets in the hero so they don't crowd mobile copy. Keep them inside the video frame (smaller and already fit).
- Wrap every section's padding from `py-24 md:py-32` → `py-16 md:py-32`. Reduce horizontal `px-6` to `px-5` only where it helps; leave others.
- Pull-quote in Our Story: `text-2xl md:text-4xl` with `leading-snug`.
- Stats: change layout to a 2x2 grid on mobile with `divide-y` and `divide-x` dividers using `border-gold/40`. Keep desktop 4-col with vertical rules.
- Booking contact rows: add `min-w-0` to the container, `break-all` on the email text so it never overflows.
- Eyebrow rule pairs (the short flanking `h-px w-10` lines): wrap with `hidden sm:block` so the eyebrow text gets full width on tiny screens.
- Video player overlay: change `bg-burgundy-deep/35 hover:bg-burgundy-deep/45` to `bg-burgundy-deep hover:bg-burgundy-deep/95` so the YouTube nag is fully hidden until the user taps unmute. Also add a faded stage image (`stageAsset`) as the overlay background so the muted state looks intentional and not flat. Add `dark-grain` over it for texture parity with the rest of the dark sections.
- Nav mobile menu items: already fine. Verify hash links close menu on tap (already wired with `setOpen(false)`).
- Form: stack the `Name / Email / Phone / Date` fields fully on mobile (current `grid sm:grid-cols-2` already handles this — confirm spacing is tight).

No changes to `src/styles.css`, no new files, no new deps. Desktop screenshots stay identical.
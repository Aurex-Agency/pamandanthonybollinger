Replace the static video poster in the Watch & Listen section with the YouTube embed for "I'm Living Proof" (video id `Ak4UieGPQ5c`), and rework the surrounding copy to build buzz around the single as Anthony's testimony song.

## Embed behavior

- Embed via iframe: `https://www.youtube.com/embed/Ak4UieGPQ5c?autoplay=1&mute=1&loop=1&playlist=Ak4UieGPQ5c&playsinline=1&controls=0&modestbranding=1&rel=0`.
- Autoplays muted (required for browser autoplay to work) on a loop, so the section feels alive when the user scrolls in.
- Overlay a tap-to-unmute button (gold circular speaker icon) that, on click, swaps the iframe src to the same URL with `mute=0&autoplay=1&controls=1` so audio kicks in and standard controls appear. Track unmuted state with `useState`.
- Keep the existing framed cream mat + corner brackets so the player still feels like a press kit playbill, not a raw YouTube embed.

## Copy & buzz

Reframe the section around the single:

- Eyebrow: "NEW SINGLE" instead of "Watch & Listen".
- Headline: "I'm Living Proof." with italic gold accent.
- Sub-headline / story hook: a short, urgent paragraph tying the song to the 2021 COVID survival story — "Eleven days on the ventilator. Thousands of prayers. One song that came out of it." (paraphrased from the existing Our Story content, no new facts invented).
- Below the video: a small row of buzz signals — "OUT NOW · STREAMING SOON", a faux waveform/play-count bar feel using small caps and gold dividers, and a clear CTA "Book the Living Proof Tour" linking to `#booking`.
- Keep the existing italic caption but rewrite it to point at the song's meaning rather than a generic teaser.

## Accessibility / polish

- iframe has `title="Anthony & Pam Bollinger — I'm Living Proof"`, `allow="autoplay; encrypted-media; picture-in-picture"`, `allowFullScreen`.
- The unmute button is a real `<button>` with `aria-label="Turn audio on"` / `"Turn audio off"`.
- When unmuted, hide the big center button and surface a small mute toggle in the corner so the controls don't fight the YouTube UI.

## Files touched

- `src/routes/index.tsx` — only the Watch & Listen section (`#listen`) and a small `useState` import addition; replace the `singingAsset` poster + play-button block with the iframe + overlay; rewrite eyebrow, headline, copy, and caption around "I'm Living Proof".

No new dependencies, no styles.css changes.
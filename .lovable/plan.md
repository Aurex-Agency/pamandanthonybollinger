The hero section uses a stage photo (`stageAsset`) as its background. Text or signage visible in that stage image is showing through the current gradient overlay and competing with the white/cream hero headline and subtext, making it hard to read.

Fix approach:
1. Increase the opacity of the existing dark gradient overlay on the hero so the background image is subdued and any text/signage in the photo is no longer legible.
2. Optionally add a slight `backdrop-blur` or `blur` to the background image layer to further reduce background detail legibility without losing the stage atmosphere.

Only the hero overlay styles in `src/routes/index.tsx` need adjusting — no other sections affected.
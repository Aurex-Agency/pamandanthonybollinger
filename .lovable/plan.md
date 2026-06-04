Fix the "100,000+" stat on mobile so it no longer looks cramped in the 2-column grid.

**Problem:** On a 390px viewport, each stat cell is only ~150px of usable width after padding. A bold display font at `text-4xl` (36px) leaves "100,000+" right at the edge, making it look tight and risking a wrap on smaller phones.

**Change:**
- File: `src/routes/index.tsx` (stats grid, counter number line)
- Reduce mobile font size from `text-4xl` → `text-3xl`
- Keep `sm:text-5xl md:text-6xl` unchanged so tablet and desktop are unaffected

This is the only change required.
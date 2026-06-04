## Changes to `src/routes/index.tsx`

### 1. Our Story section — replace with Anthony's own words

Restructure the section to fit the longer narrative from the PDF. Keep the two-column layout (image left, text right) but allow the text column to flow longer. Break Anthony's story into the natural paragraphs from the document:

- Meeting in Jr High, reunited Feb 1994, married July 17 1994, 33 years, 3 children, 5 grandkids.
- Pam's musical background: piano, ladies' trio, still pianist at Mt Moriah Baptist alongside 100+ dates a year.
- Anthony's upbringing: father's band "William Morgan and the Five C's" (1963), starting drums at age 5, Southern Gospel from 1972, piano/lead at 14, first studio session at 13, 39 years on stage with his Dad.
- "The Father's Sons" quartet, Pam stepping in for the Jim Stafford Theater booking in Branson, then the family Branson-style theatre in Bruce, MS (9.5 years, 40 shows/year, 100,000+ guests, 9 countries).
- 2021 COVID: diagnosed Thursday, ambulance Monday, 35 days, double COVID pneumonia, 11 days on the vent, thousands of prayers, miracle, ministry launched late 2021.
- Closing italic pull-quote kept: "It's a God thing. I'm living proof."

Written in first person ("we", "I") to match the source. No em dashes anywhere.

### 2. Remove ALL em dashes (—) site-wide

Sweep `src/routes/index.tsx` and `src/routes/__root.tsx` and replace every em dash. Replacements use commas, periods, parentheses, or "and"/"with" as appropriate for the sentence. Specific spots:

- Hero subtitle: "A friendly mix of oldies & gospel — sharing what God has done." → "A friendly mix of oldies & gospel. Sharing what God has done."
- "What We Play" intro: "...60s, 70s, and 80s — Pop, R&B, and Country — with every performance capped off..." → "...60s, 70s, and 80s. Pop, R&B, and Country, with every performance capped off..."
- Watch & Listen intro: "From a quiet hymn to a foot-tapping classic — hear what..." → "From a quiet hymn to a foot-tapping classic. Hear what..."
- Caption: 'their latest single, "I\'m Living Proof" — coming soon...' → '...single, "I\'m Living Proof," coming soon...'
- Booking copy: "...across the southeast — churches, theaters..." → "...across the southeast: churches, theaters..."
- Any em dashes in `__root.tsx` meta description (e.g. the home title/description).
- Any other occurrences found via search.

### 3. Verification

After edits, grep the repo for `—` and confirm zero matches.

No design system, color, layout, or component changes. Frontend copy only.
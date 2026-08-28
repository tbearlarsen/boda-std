# PROGRESS.md — boda-std

## Status: Live at https://savethedate.sudheim.eu/ — EN and DA pages fully built out; ES still on the old placeholder layout

---

## Done

- [x] Astro minimal project scaffolded at `/Users/osito/Repositories/boda-std/`
- [x] CLAUDE.md written (project-specific, adapted from main site)
- [x] `_project/` docs created (PLAN, PROGRESS, DECISIONS, QUESTIONS)
- [x] Memory files copied from main project
- [x] Subdomain decided: `savethedate.sudheim.eu` (see `public/CNAME`)
- [x] Save-the-date page built: hero photo, names, date, ICS calendar download, live countdown
- [x] Multilingual: EN / ES / DA pages (`src/pages/{en,es,da}/index.astro`) with a language-picker landing page and a language switcher in the header
- [x] Entrance animations + page-transition effects (falling petals, glow, staggered reveal, view-transitions)
- [x] GitHub repo created and pushed (`tbearlarsen/boda-std`)
- [x] GitHub Actions deploy workflow added (`.github/workflows/deploy.yml`, builds + deploys to Pages on push to `main`)
- [x] `public/save-the-date.ics` calendar file written with wedding details
- [x] GitHub Pages enabled and live (verified `GET /en/` → 200 at the custom domain)
- [x] DNS CNAME configured and resolving (`savethedate.sudheim.eu` → `tbearlarsen.github.io`), HTTPS certificate approved
- [x] EN page fully built out: photo-album styling (deckled edges, corner mounts, tilt) reused across hero photo, proposal video, second photo, and map; full letter content synced from `description.md`; save-the-date button relocated under a styled date display; floating "Click me!" / "Pretty please?" hints by the button; secret link on the video caption to the Airbnb listing; mobile-specific sizing/spacing throughout
- [x] DA page fully built out to match EN's design; letter translated and synced from `description.da.md` (decorative text — heading, photo captions, hints, Tolkien quote — intentionally left in English per instruction); section headings translated to Danish
- [x] Countdown/event timezone bug fixed — was implicitly local-time per viewer, now pinned to CEST so every guest sees the same real moment
- [x] Replaced the single generic `save-the-date.ics` with three language-specific files (`public/save-the-date-{en,da,es}.ics`), each with its own translated title/description, including a Bilbo Baggins quote verified against the actual published translation in each language (see `savethedateics.md` for the source drafts)
- [x] Fixed calendar map/location display — `LOCATION` field restructured (name on its own line) and `GEO` / `X-APPLE-STRUCTURED-LOCATION` added, verified against the user's own device geocoding

## In Progress

- [ ] Build out ES page to match EN/DA (currently still on the old placeholder layout); `description.es.md` has a draft translation ready to sync in
- [ ] Final content/QA pass — proofread the letter, confirm venue map + accommodation details are accurate

## Next

1. Build the ES page (reuse the EN/DA structure, sync `description.es.md`)
2. Decide on ES decorative-text language (English, like DA, or translated)
3. Final proofread + cross-device check before sharing the link with guests

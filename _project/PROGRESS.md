# PROGRESS.md — boda-std

## Status: Page built and multilingual; deploy pipeline in place; DNS + Pages activation still unconfirmed

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

## In Progress

- [ ] Confirm GitHub Pages is enabled in repo settings (Settings → Pages → Source: GitHub Actions)
- [ ] Add DNS CNAME record for `savethedate.sudheim.eu` pointing at GitHub Pages
- [ ] Verify the deployed site live at the subdomain once DNS propagates

## Blocked

- DNS provider for sudheim.eu not yet confirmed (needed to add the CNAME record) — see Q2 in QUESTIONS.md

## Next

1. Confirm Pages is enabled on the GitHub repo
2. Identify DNS provider for sudheim.eu and add the CNAME record
3. Verify live site once DNS resolves
4. Final content/QA pass (see open questions)

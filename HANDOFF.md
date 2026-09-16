# HANDOFF.md

This file is written for a future Claude session picking up boda-std cold, not
for a human audience. Read it in full at Session Start, right after
`CLAUDE.md` and `_project/PROGRESS.md`. Update it at Session Close, whenever
that is triggered.

It is not a duplicate of the two logs already living under `_project/`:

- `_project/PROGRESS.md` is the build log — what's done, in progress,
  blocked, next. It tracks the site.
- `_project/DECISIONS.md` is the decisions log — append-only record of
  significant choices and why they were made.
- `HANDOFF.md` (this file) is neither. It's a current-status snapshot plus
  a corrections log — durable facts a cold session needs before touching
  anything, and a record of mistakes actually caught and fixed, with enough
  of the reasoning kept that the same mistake wearing a new shape gets
  recognized instead of re-made. If this file and instinct disagree, trust
  this file.

---

## Current status

- The site is live at https://savethedate.sudheim.eu/ — EN, DA, and ES pages
  all fully built out. Astro, deployed via GitHub Actions to GitHub Pages on
  push to `main` (repo: `tbearlarsen/boda-std`). Remaining work per
  `_project/PROGRESS.md` is a final content/QA proofread pass before sharing
  the link with guests — no open build work otherwise.
- Source-text-sync pattern: the letter/page text is not authored directly in
  the `.astro` page files. Four repo-root files are the canonical source
  text — `description.md` (EN), `description.da.md` (DA), `description.es.md`
  (ES), and `savethedateics.md` (source drafts for the three
  `public/save-the-date-{en,da,es}.ics` calendar files). Each opens with an
  instruction to edit the file and then ask Claude to sync the change into
  the site. The sync workflow is documented at
  `directives/sync_source_text.md` — read that directive before doing any
  sync rather than reinventing the steps. Key rules baked into it: copy text
  verbatim (no rewording, even in translation), leave certain decorative
  text (headings, hints, the Tolkien quote) intentionally untranslated on
  DA/ES, preserve each language's own section structure (ES in particular
  differs from EN/DA), and leave committing and pushing to the process
  described in `CLAUDE.md`'s Commits section rather than doing it as part
  of a sync.

---

## Corrections that actually matter

1. 2026-09-14 — Arkhon backport audit found and fixed several latent gaps.
   Arkhon (the cross-project meta-layer at `/projects/Arkhon`) audited
   boda-std against its shared cross-project template and, at the user's
   direction, backported fixes directly into the project rather than only
   noting them:
   - Deleted `spanish.md`, a stale draft confirmed superseded by
     `description.es.md` and unreferenced anywhere in the repo — dead
     weight that could have been mistaken for a live source-of-truth file
     by a future session.
   - Removed a blanket `.claude/` exclusion from `.gitignore`. As written it
     would have prevented any shared Claude settings file from ever being
     committed, with no error to explain why `.claude/settings.json` wasn't
     showing up in `git status`.
   - Added `git pull` as the first Session Start step in `CLAUDE.md` — it
     was missing, so a session could start working from a stale local copy
     with nothing flagging that it was stale.
   - Updated `CLAUDE.md`'s Commits section to match the pattern this
     project actually follows elsewhere in the corpus: git stays untouched
     mid-session, and a wrap-up phrase from the user ("wrap up", "end
     session") is treated as the go-ahead to stage, commit, and push in the
     same turn, without a separate yes/no check. The section now also says
     plainly that push is part of this, since the site's deploy is
     triggered by a push to `main` — so push belongs to "done," not a
     follow-up step.
   - Created `.claude/settings.json` with permissions scoped to the npm
     scripts this project actually runs (`dev`, `build`, `preview`) and to
     `git pull` / `add` / `commit` / `push` — previously absent, so every
     session had to re-approve the same handful of commands from scratch.
   - Extracted the source-text-sync workflow into
     `directives/sync_source_text.md`. This wasn't a hypothetical pattern —
     `_project/PROGRESS.md` shows it already repeated multiple times (the
     initial EN sync, the initial DA sync, a later EN/DA/ES re-sync, and
     the `savethedateics.md`-driven `.ics` rewrite) without ever being
     written down as a repeatable procedure.

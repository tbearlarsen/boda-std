# Directive: Sync Source Text Into the Live Pages

## Purpose
Prevent the live Astro pages (and the generated `.ics` calendar files) from silently diverging from the labeled source-of-truth text files — `description.md` / `description.da.md` / `description.es.md` and `savethedateics.md`. Each of these files opens with an explicit "Edit this file, then ask Claude to sync the changes into the page" instruction; this directive is what "sync" means in practice, written down so it's done the same way every time instead of reinvented per request.

## When to run
The user has edited one or more of `description.md`, `description.da.md`, `description.es.md`, or `savethedateics.md` and asks to sync the changes — or says something equivalent ("push this into the site," "update the page with this").

## Inputs
- Which source file(s) changed (if not stated, diff against what's currently reflected on the corresponding page/`.ics` file to find out)
- The corresponding target(s):
  - `description.md` → `src/pages/en/index.astro`
  - `description.da.md` → `src/pages/da/index.astro`
  - `description.es.md` → `src/pages/es/index.astro`
  - `savethedateics.md` → `public/save-the-date-{en,da,es}.ics`

## Steps
1. **Read the edited source file in full**, plus the current contents of its target page/`.ics` file — don't sync from memory of what the source used to say.
2. **Match sections by heading** (Greeting, Our story, etc. in the description files; Title/Start/End/Location/Description in `savethedateics.md`) to find where each piece of text lands on the target.
3. **Carry the text over verbatim.** Per `CLAUDE.md`'s "User-written text is sacred" rule, this is a copy, not an edit — no corrections, rewording, or "improvements," including on translated files.
4. **Leave intentionally-untranslated decorative text alone.** Headings, hints ("Click me!" / "Pretty please?"), and the Tolkien quote are deliberately kept in English on the DA and ES pages per prior instruction — a sync pass must not "helpfully" translate them just because the surrounding page is in another language.
5. **Preserve page-specific structural differences.** The ES letter has its own section structure (no "Getting to Madrid"/holiday sections, an extra closing paragraph, a P.S.) that doesn't exist in EN/DA — sync content into the existing structure, don't force all three pages back into identical shape.
6. **Log the sync** in `_project/PROGRESS.md`'s Done list, naming which source file(s) and which page(s) were touched (matching the existing log style, e.g. "Letter copy touch-ups synced from `description.{md,da,es}.md` into all three pages").
7. **Do not commit or push as part of this directive.** That's governed separately by `CLAUDE.md`'s Commits section (wrap-up trigger required).

## Edge Cases
- If the source file and the live page have structurally diverged (a section reordered, added, or removed on one side but not the other), flag the mismatch and ask which side is correct rather than guessing — don't silently force one to match the other.
- If asked to sync but the source file hasn't actually changed since the last sync, say so rather than performing a no-op edit just to look responsive.
- `savethedateics.md` doesn't carry the same "Edit this file, then ask Claude to sync" preamble the three `description.*.md` files do, but `_project/PROGRESS.md` documents it being used the same way (source drafts for the three language-specific `.ics` files, including a quote verified against the published translation) — treat it as covered by this directive too.

## Notes
Extracted from a workflow that has already repeated multiple times, per `_project/PROGRESS.md`: the initial EN sync ("full letter content synced from `description.md`"), the initial DA sync ("letter translated and synced from `description.da.md`"), a later cross-language re-sync ("Letter copy touch-ups synced from `description.{md,da,es}.md` into all three pages"), and the `savethedateics.md`-driven rewrite of the three `.ics` files — not a hypothetical or one-off. This is the project's Canonical Data pattern in the master-template sense, though `CLAUDE.md` itself doesn't yet use that vocabulary; naming it here doesn't fix that gap (see Arkhon's `context/audits/boda-std.md`), it just captures the workflow that already exists.

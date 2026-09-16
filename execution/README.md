# execution/

Intentionally empty. No deterministic script has been needed yet — the site's
only repeatable process so far (syncing `description.{md,da,es}.md` /
`savethedateics.md` into the live pages) is documented as a directive
(`directives/sync_source_text.md`) rather than automated, since it involves
judgment (matching sections, preserving intentionally-untranslated decorative
text, handling per-language structural differences) that isn't yet worth
scripting.

If that changes, the most likely first candidate is a source-text-vs-page
drift checker — something that flags when `description.md` (or its `.da`/`.es`
siblings, or `savethedateics.md`) has been edited more recently than the last
sync into the corresponding page/`.ics` file, so a stale sync doesn't go
unnoticed.

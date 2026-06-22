# DECISIONS.md — boda-std

Append-only log of significant decisions.

---

## 2026-06-22 — Separate subdomain microsite

**Decision:** Save the Date lives at its own subdomain (not a path on the main site).
**Reason:** Prevents guests from navigating to the main wedding site by changing the URL,
keeping it secret until the couple is ready to reveal it.

## 2026-06-22 — GitHub Pages hosting

**Decision:** Host on GitHub Pages via a new dedicated repo (`boda-std`).
**Reason:** Same workflow the user already knows from the main site; free; pairs well
with a custom subdomain via CNAME.

## 2026-06-22 — Minimal Astro (no framework components)

**Decision:** Use the minimal Astro template, no React/Vue/etc.
**Reason:** One page with no interactivity beyond a countdown timer — vanilla JS is enough.

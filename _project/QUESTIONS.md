# QUESTIONS.md — boda-std

---

## Open

### Q3: Should the Save the Date design match the main site exactly?

Or should it be slightly different (simpler, different colour, etc.)?

---

## Resolved

### Q1: What subdomain should the Save the Date site use? — `savethedate.sudheim.eu`

Set in `public/CNAME`.

### Q4: Do we need multilingual versions (EN + DA + ES)? — Yes

Built: EN / ES / DA pages with a language-picker landing page and a header language switcher.

### Q2: Who manages DNS for sudheim.eu? — Moot, record already exists

The CNAME record for `savethedate.sudheim.eu` is already in place and resolving correctly
to GitHub Pages (verified via `dig`), and GitHub's HTTPS certificate for it is approved.
Whoever/whatever manages it, it's already done — no action needed.

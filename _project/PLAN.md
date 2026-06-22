# PLAN.md — boda-std (Save the Date microsite)

## Goal

A minimal one-page Save the Date site for Thorbjørn & Lorena's wedding (5 June 2027).
Deployed to its own subdomain so guests can be directed there before the main site
(wedding.sudheim.eu) is made public.

## Subdomain

TBD — to be decided with user. Options: `std.sudheim.eu`, `savethedate.sudheim.eu`, etc.

## Hosting

GitHub Pages → new repo `boda-std` (same workflow as main site).
A CNAME record in DNS will point the subdomain at GitHub Pages.

## Scope

- Single page: couple's photo, names, date, "Save the Date" calendar download, countdown
- No navigation, no links to the main wedding site
- Multilingual if needed (EN + DA + ES mirrors) — TBD

## What This Site Is NOT

- Not a replacement for the full wedding site
- Not linked to or from the main site
- Not a secret — guests will be given the URL directly

## Open Items

- Final subdomain choice
- DNS provider for sudheim.eu (needed to add CNAME)
- Whether the design should match the main site exactly or differ slightly
- Whether multilingual versions are needed for the STD site

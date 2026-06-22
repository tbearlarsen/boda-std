# CLAUDE.md

## Role

Claude acts as lead developer and designer on this project. The user has no web
development background. Claude makes all architectural and design decisions, explains
each one briefly, and translates creative direction into working code. Claude never
assumes it knows what the user wants — when hitting a genuine decision point, ask
one focused question.

---

## Project Context

This is the **Save the Date** microsite for Thorbjørn & Lorena's wedding (5 June 2027).
It lives at its own subdomain (separate from the main wedding site) and is intentionally
minimal: one page, no navigation, no links to the full site. Its purpose is to let guests
save the date before the full site is made public.

The main wedding site lives at `/Users/osito/Repositories/boda-nube`.

---

## Two Modes

### Planning Mode (default)

Every request gets a full plan before any implementation. Wait for explicit
confirmation ("go", or a redirect) before touching any file.

Every plan must include:

- **Steps checklist** — discrete steps to check off as work progresses
- **Decision rationale** — one-liner for each technical or design choice
- **Open questions** — anything that needs user input before proceeding
- **Risk flags** — anything that could cause problems or rework later
- **What I'm NOT doing** — explicit scope-outs so the user knows the boundaries

### Build Mode

Write a brief plan (what I'm doing, which files I'll touch), then proceed
immediately — no "go" required. Still ask one focused question if there's a
genuine blocker. Still read files before editing them.

---

## Before Touching Any Existing File

1. State what file is being opened and why
2. Read it fully
3. Summarize what's already there
4. Only then propose changes

## Before Creating Any New File

1. State what file will be created, where, and why
2. Confirm it doesn't duplicate something that already exists
3. Include it in the plan's steps checklist

---

## Planning Hierarchy

- **Scoping session** → update PLAN.md, QUESTIONS.md, PROGRESS.md; output is decisions and questions, not code
- **New feature** → spec first (what it does, how it fits, what files it touches)
- **Bug or fix** → diagnose before acting (what's broken, why, what the fix changes)
- **Refactor** → map current state before proposing future state

---

## Session Start — Every Time

1. Read this file
2. Read `_project/PROGRESS.md`
3. Check `_project/QUESTIONS.md` — if any Open questions have been answered in conversation, propose moving them to Resolved (wait for confirmation before editing the file)
4. If any source-of-truth file appears out of date, flag it to the user and propose an update — do not edit it without confirmation
5. Ask: **"Are we in build mode or planning mode today?"** — build mode means I plan briefly and proceed without asking for go; planning mode means full plans and explicit confirmation before every change

---

## Source of Truth Files

- `_project/PLAN.md` — master plan for the site
- `_project/PROGRESS.md` — what's done, in progress, blocked, and next
- `_project/DECISIONS.md` — append-only log of every significant decision
- `_project/QUESTIONS.md` — open questions; resolved ones archived within the file

If memory contradicts a file, trust the file.

---

## Working Rules

- **User-written text is sacred** — If the user has written content in a file and asks for it to be put on the site, use it word-for-word. No edits, corrections, or "improvements."
- **Rules live in CLAUDE.md** — Do not store working rules or preferences in the auto-memory system. CLAUDE.md is the single source of truth for how to work on this project.
- **One page only** — This site has a single page. Do not add navigation, links to the main site, or additional pages without an explicit request.

---

## Commits

Commit in logical, self-contained chunks with clear messages that describe
why, not just what. Never commit until the user confirms a step is done.

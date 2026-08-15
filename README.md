# Nelio marketing site

Marketing/landing site for Nelio — review-management software built
natively for HVAC, plumbing, and electrical contractors on Jobber and
Housecall Pro. Next.js App Router + Tailwind v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design system

Design tokens (navy base, safety-orange accent, Barlow Condensed +
Barlow type) live in `src/app/globals.css` under `@theme inline`. Don't
reach for Tailwind's default palette or fonts — everything should route
through the tokens defined there.

## Pilot signup form

`POST /api/pilot-signup` (`src/app/api/pilot-signup/route.ts`) validates
the submission server-side and, if configured, emails it via
[Resend](https://resend.com):

- `RESEND_API_KEY` — Resend API key
- `PILOT_NOTIFY_EMAIL` — inbox that should receive new pilot signups

Without both set, submissions still succeed for the visitor but are only
`console.warn`-logged server-side — set the env vars before launch so
signups actually reach an inbox.

## Before launch

- Confirm Jobber/Housecall Pro brand guidelines before swapping the text
  badges in the hero for real logo marks.
- Replace the placeholder `/privacy` and `/terms` pages once legal review
  is done.
- Set `RESEND_API_KEY` and `PILOT_NOTIFY_EMAIL` in production.

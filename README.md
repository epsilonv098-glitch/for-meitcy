# For Meitcy - Personal Interactive Confession Website

A small pixel-art interactive love letter. Built for one person only.

Made for Meitcy. Two years since September 23, 2024.

## What this is

This is NOT a template. It is a small indie-game style website that tells a real story:

- I liked you in senior high school
- We graduated, became freshmen
- September 23, 2024 - I asked you "unsay language inyo first gikuan?"
- That random question started us talking
- Getting to know you made it worse (in a good way)
- Two years later, September 23, 2026, I finally confess

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Pixel art assets (PNG + handcrafted SVG)
- Vercel serverless API for response tracking

## How to run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit your story

Everything important is in one file:

```
src/data/story.ts
```

Open it from your phone and edit:

- Opening lines
- Senior high chapter
- Programming question dialogue
- Getting to know her
- Timeline items
- Realization
- Final letter
- YES / NO messages
- Nicknames

The website works immediately without editing. But you can change any text there.

## Pixel art assets

Generated assets are in:

```
public/pixel/cats/
public/pixel/flowers/
public/pixel/deco/
```

Handcrafted SVG fallbacks are in:

```
src/components/PixelCat.tsx
src/components/PixelTulip.tsx
src/components/PixelHeart.tsx
src/components/PixelStar.tsx
```

All sprites share the same limited palette: navy, midnight blue, soft blue, violet, lavender, off-white, soft pink.

No emojis are used anywhere as illustrations. All cats, tulips, hearts, stars are real pixel art.

## Response tracking

When she clicks YES or NO, it POSTs to:

```
POST /api/response
{
  "response": "yes" | "no" | "visit",
  "timestamp": "...",
  "userAgent": "..."
}
```

Storage is file-based (`data/responses.json` or `/tmp/responses.json`) for simplicity. On Vercel serverless, file system is ephemeral.

For production persistence, upgrade to:

- Vercel KV (Redis)
- Vercel Blob
- Or a small database

The API also has GET for admin:

```
GET /api/response
```

Returns counts and last 50 entries.

## Admin page

Private page at:

```
/admin
```

Protected by simple password. Default password: `meitcy2026`

Change it:

1. In Vercel dashboard, set env variable: `ADMIN_TOKEN=your_secret`
2. Update the check in `src/app/admin/page.tsx` if needed
3. Or set `NEXT_PUBLIC_ADMIN_PASSWORD` for client check (simpler)

It shows:

- Visits
- YES count
- NO count
- Recent responses with timestamps

## Deploy to Vercel via GitHub

1. Push this repo to GitHub
2. Go to vercel.com, Import Project
3. Select your repo
4. Set environment variables (optional):
   - `ADMIN_TOKEN=your_secret_password`
5. Deploy
6. Your site will be live at `your-project.vercel.app`
7. Send her the link on September 23, 2026
8. Check `/admin` for her response

## Mobile first

The site is built mobile-first. All dialogue boxes, buttons, pixel art scale correctly. No horizontal scroll. Touch-friendly YES/NO.

## Customization checklist

Before sending:

- [ ] Edit `src/data/story.ts` if you want to tweak letter (optional)
- [ ] Test YES and NO flows
- [ ] Test on your phone
- [ ] Check `/admin` works
- [ ] Deploy to Vercel
- [ ] Send her the link on September 23, 2026

## Writing style

The writing avoids:

- Em dashes (—) - never used
- Generic romantic cliches
- AI-looking poetic metaphors
- Corporate language

It sounds like a real guy talking to the girl he likes. Simple, a little awkward, sincere.

## No AI look

- No purple-to-blue gradient
- No glassmorphism
- No giant hero
- No emoji illustrations
- No Inter everywhere
- Pixel borders, game-like dialogue boxes, handcrafted UI

## License

Personal project. Made with care for Meitcy only.

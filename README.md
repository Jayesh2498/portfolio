# Jayesh Dhanuka — Portfolio

Personal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Editing content

**All visible content lives in one file: [`data/content.ts`](./data/content.ts)**

You never need to touch any component file to update text, links, or data.

### Change personal info (name, email, LinkedIn, resume URL)
Edit the `meta` object at the top of `data/content.ts`.

### Change the hero taglines or eyebrow text
Edit the `hero` object.

### Update the "At the moment" section
Edit `moment.text` (wrap bold phrases in `{curly braces}`) and `moment.tags`.

### Add / remove a skill from the ticker
Edit the `ticker.skills` array. Order is preserved.

---

## Adding a new project

In `data/content.ts`, add an object to `projects.slides`:

```ts
{
  id: "my-new-project",        // unique slug
  icon: "🚀",                  // emoji shown in mockup
  title: "My New Project",
  tags: ["Tag1", "Tag2"],
  points: [
    "First bullet — **bold key phrase** here",
    "Second bullet",
  ],
  ctaLabel: "View Live App",
  ctaLink: "https://myapp.com",  // or "#" to disable
}
```

That's it. No other files need to change.

---

## Adding a new deck

Same as above, but add to `decks.slides`. Optionally include `fileUrl`:

```ts
{
  id: "my-new-deck",
  icon: "📄",
  title: "My New Deck",
  tags: ["Strategy"],
  points: ["Key insight one", "Key insight two"],
  ctaLabel: "View Deck",
  ctaLink: "/decks/my-deck.pdf",   // or a hosted URL
  fileUrl: "/decks/my-deck.pdf",   // optional — overrides ctaLink for the button
}
```

---

## Adding a new corporate role

Add to `corporate.slides`:

```ts
{
  id: "new-company",
  company: "Company Name",
  period: "Jan 2026 – Present",
  icon: "🏢",
  title: "Company Name",
  tags: ["Role", "Domain"],
  points: [
    "Achievement with **bold metric**",
  ],
  ctaLabel: "View Case Study",
  ctaLink: "#",
}
```

---

## Replacing the photo

Drop your photo at `public/photo.jpg`. The hero component uses `next/image` with `fill` layout.  
Recommended: portrait orientation, minimum 800×1000px.  
If the file is missing, a placeholder icon is shown instead — the site won't crash.

---

## Replacing the resume

Drop your resume PDF at `public/resume.pdf`. The "Resume" CTA button links there automatically via `meta.resumeUrl`.

---

## CTA link behaviour

| `ctaLink` value | Behaviour |
|---|---|
| `"#"` | Button shown but muted / disabled (use as placeholder) |
| `"https://..."` | Opens in new tab |
| `"/path"` | Internal Next.js route |

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo.
3. Vercel auto-detects Next.js — click Deploy.
4. Set any environment variables if needed (none required by default).

---

## Tech stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (utility-first styles)
- **Framer Motion** (scroll animations, transitions)
- **next-themes** (light / dark mode, default: dark)
- **TypeScript**

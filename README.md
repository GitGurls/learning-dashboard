
app/
  page.tsx              ← Server Component (fetches data, no "use client")
  layout.tsx            ← Server Component (metadata, fonts)
  loading.tsx           ← Server Component (full-page skeleton)

components/
  dashboard/
    CoursesGrid.tsx     ← Server Component (async, fetches from Supabase)
    HeroTile.tsx        ← Client Component (animations)
    StatsTile.tsx       ← Client Component (animations)
    ActivityTile.tsx    ← Client Component (animations)
  sidebar/
    Sidebar.tsx         ← Client Component (state, interactions)
  ui/
    BentoCard.tsx       ← Client Component (Framer Motion wrapper)
    ProgressBar.tsx     ← Client Component (animated bar)

lib/
  supabase/
    server.ts           ← Supabase SSR client (cookies, server-safe)
    client.ts           ← Supabase browser client
  data.ts               ← Data fetching functions + fallbacks
```

**Key principle**: Data fetching happens in Server Components (`CoursesGrid.tsx`). Animation/interactivity is isolated to Client Components. This maximizes performance and keeps the server render fast.


---

## 🌐 Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Add your environment variables in Vercel dashboard → Project Settings → Environment Variables.

---

## 📁 Environment Variables

See `.env.example` for the required variables:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

> ⚠️ Never commit your `.env.local` file. It's in `.gitignore` by default.

---

## 🎨 Design Decisions

- **Color palette**: Near-black base (#080B12) with cyan (#22D3EE) primary accent and violet/emerald/amber course accents
- **Typography**: Space Grotesk — geometric, modern, readable at small sizes
- **Grain texture**: SVG-based noise overlay on cards for depth without image loading
- **Glow effects**: CSS `box-shadow` + blur for performant glow (no filter on animated elements)
- **Grid background**: CSS `background-image` with linear-gradient pattern for zero-cost grid lines

---

## 📄 License

MIT — built for the LearnOS Frontend Intern Challenge

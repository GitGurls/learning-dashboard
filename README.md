# LearnOS — Next-Gen Student Dashboard

A futuristic, highly animated student learning dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark mode** with deep navy/black backgrounds and glowing accents
- **Bento Grid layout** with dynamic, responsive tiles
- **Collapsible sidebar** with Framer Motion `layoutId` nav animations
- **Live Supabase data** fetched via Server Components (RSC)
- **Suspense + skeleton loaders** with shimmer animations
- **Staggered page load** animations with spring physics
- **Animated progress bars** that animate from 0 → value on load
- **Contribution graph** activity tile (90-day view)
- **Fully responsive**: desktop (sidebar) → tablet (icon sidebar) → mobile (bottom nav)

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14 | Framework (App Router) |
| Supabase | Latest | PostgreSQL database + BaaS |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Animations |
| Lucide React | Latest | Icons |
| TypeScript | 5 | Type safety |

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/learning-dashboard.git
cd learning-dashboard
npm install
```

### 2. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a free project
2. In your Supabase dashboard → **SQL Editor** → paste the contents of `supabase-setup.sql` → click **Run**
3. Go to **Settings → API** and copy your keys

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🏗 Architecture

### Server / Client Component Split

```
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

### Supabase Data Flow

1. `page.tsx` renders `<Suspense fallback={<CoursesGridSkeleton />}>`
2. Inside the boundary: `<CoursesGrid />` is a Server Component that `await`s Supabase
3. While loading → skeleton shimmer is shown
4. On resolve → `CourseCard` components render with staggered Framer Motion animations

### Animation Strategy

- **No layout shifts**: All hover/entrance animations use `transform` and `opacity` only
- **Spring physics**: `type: "spring", stiffness: 300, damping: 20` on all card hovers
- **Staggered load**: Each tile has `delay: index * 0.08` for sequential entrance
- **layoutId**: Sidebar active indicator uses `layoutId="activeNav"` for smooth transitions
- **Progress bars**: Animate from `width: 0%` to `width: value%` with `ease: [0.34, 1.56, 0.64, 1]` (overshoot spring)

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

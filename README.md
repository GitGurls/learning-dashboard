




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

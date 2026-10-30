# What Yoga Is

whatyogais.com: yoga as it is, from where it began. Clear, sourced writing on what the yoga
tradition actually teaches, written from Nepal. Later: authentic retreats in Nepal with Discover Parbat.

Built with Astro (static), hosted on Cloudflare Pages.

## Run locally
```
npm install
npm run dev
```

## Where things live
- `src/content/articles/*.md`: articles. The file name is the URL slug; the `section` field puts it under
  `/<section>/<slug>/`. Frontmatter: title, description, section, dev (Devanagari term), iast, published,
  updated, order, startHere (shows on the homepage), faqs (FAQ schema) and sources.
- Verses inside articles use this block:
  ```html
  <div class="verse">
  <p class="dev" lang="sa">योगश्चित्तवृत्तिनिरोधः</p>
  <p class="iast">yogaś citta-vṛtti-nirodhaḥ</p>
  <p class="tr">Yoga is the stilling of the movements of the mind.</p>
  <p class="ref">Yoga Sutras 1.2</p>
  </div>
  ```
- `src/data/site.ts`: site name, email and the five sections.
- `src/styles/global.css`: design tokens (ākāśa night violet, moonlight, lavender mist, slate, Sahasrara violet accent; Tiro Devanagari
  Sanskrit + Hanken Grotesk).
- `src/pages/`: home, section hubs, about, retreats, contact, privacy, terms.

## Deploy (Cloudflare Pages)
Workers & Pages → Create → Pages → Connect to Git → discoverparbat/whatyogais.
Framework preset: Astro. Build command `npm run build`, output directory `dist`.
Then Custom domains → add whatyogais.com.
Email: set up hello@whatyogais.com in Cloudflare Email Routing.

## Content plan (next articles)
Is yoga a religion? · What "hatha" actually means · The yamas and niyamas · Pranayama: breath before poses ·
How yoga came to the West · Chakras: tradition vs wellness marketing · Pashupatinath and Shiva, the first yogi ·
Meditation in the Himalayan tradition: where to start.

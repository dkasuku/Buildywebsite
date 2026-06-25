# Deploying Buildsasa (Next.js)

This app is a standard Next.js (App Router) project, so any host that runs Node works. Below are the two easiest paths.

**Build & start commands (both platforms use these):**
- Install: `npm install`
- Build: `npm run build`
- Start: `npm start`

Node 18+ is required (you have 22 locally; set the same on the host).

---

## Step 0 — Put the code on GitHub (recommended)

Both Vercel and Railway deploy cleanly from a Git repo and auto-rebuild on every push.

```bash
cd Buildsasaweb/buildsasa-next
git init
git add .
git commit -m "Buildsasa Next.js site"
# create an empty repo on GitHub, then:
git remote add origin https://github.com/<you>/buildsasa-next.git
git branch -M main
git push -u origin main
```

`.gitignore` already excludes `node_modules` and `.next`, so only source + assets get pushed.

---

## Option A — Vercel (simplest for Next.js)

Vercel is made by the Next.js team; it detects everything automatically.

1. Go to **vercel.com** and sign in with GitHub.
2. **Add New → Project**, then import your `buildsasa-next` repo.
3. Vercel auto-detects Next.js. Leave the defaults:
   - Framework Preset: **Next.js**
   - Build Command: `next build` (auto)
   - Output: handled automatically
4. Click **Deploy**. You get a live URL in ~1–2 minutes.
5. **Custom domain:** Project → **Settings → Domains** → add `buildsasa.com` (or your domain) and follow the DNS records it shows.

No environment variables are needed — the Formspree form endpoints are already in the code.

---

## Option B — Railway (where your app/backend already lives)

Good if you want everything on one platform.

1. Go to **railway.app** → **New Project → Deploy from GitHub repo** → pick `buildsasa-next`.
2. Railway auto-detects Node/Next.js. If it asks for commands, set:
   - **Build command:** `npm run build`
   - **Start command:** `npm start`
3. Railway provides a `PORT` environment variable automatically; `next start` reads it, so no extra config is needed.
4. Deploy. Under **Settings → Networking**, click **Generate Domain** for a public URL, or add your **Custom Domain** and set the DNS `CNAME` it shows.

> Tip: keep this marketing site as its **own Railway service** (separate from your `frontend-production` app) unless you specifically want to merge codebases.

---

## After deploying

- Update the **"Get Started"** links if needed — they currently point to `https://frontend-production-65ea.up.railway.app/`. If your app URL changes, edit `content/_header.html` and `content/_footer.html` (and the page bodies in `content/`), then redeploy.
- Test the **contact** and **pricing** forms once live — Formspree sends a one-time confirmation email the first time each form is submitted from the new domain.
- Point your domain's DNS at whichever platform you chose; propagation can take up to a few hours.

---

## Advanced — fully static hosting (optional, cheapest)

Because each page's content is fixed, you can also export a fully static site and host it on Netlify, Cloudflare Pages, or GitHub Pages:

1. Add to `next.config.mjs`: `output: 'export'`
2. Run `npm run build` — it generates a static site in `out/`.
3. Upload `out/` to any static host (e.g., drag it to **app.netlify.com/drop**).

Use this only if you don't need server features; for normal use, Vercel or Railway is simpler.

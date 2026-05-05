# Portfolio Website — Complete Guide

> Your reference for editing content, adding images/videos, publishing, security, and sustainability.

---

## 1. Project Structure (What's Where)

```
portfolio/
├── public/                    ← Static files (images, videos, resume PDF)
│   ├── videos/                ← Your hover preview videos
│   │   ├── get_in_the_zone.mp4
│   │   ├── radiobiz_cd_apple_biz_black.mp4
│   │   └── ...
│   ├── images/                ← Project images (create this folder)
│   │   ├── into-the-zone/     ← One folder per project
│   │   │   ├── hero.jpg
│   │   │   ├── detail-1.jpg
│   │   │   └── detail-2.jpg
│   │   └── ...
│   └── resume.pdf             ← Your downloadable resume
│
├── src/
│   ├── data/
│   │   └── projects.ts        ← ALL your project content lives here
│   ├── components/
│   │   ├── Carousel.tsx        ← Homepage carousel
│   │   ├── Navbar.tsx          ← Navigation bar
│   │   ├── ScrollIndicator.tsx ← Bottom scroll hint
│   │   └── ThemeProvider.tsx   ← Dark/light mode
│   └── app/
│       ├── page.tsx            ← Homepage
│       ├── about/              ← About page
│       ├── contact/            ← Contact page
│       ├── resume/             ← Resume page
│       └── projects/[slug]/    ← Project detail template
```

---

## 2. Editing Project Content

### The only file you need to touch: `src/data/projects.ts`

Open this file in VS Code. Each project is an object in the array.

### To edit an existing project:
Find the project by its `slug` and change any field:

```typescript
{
  slug: "into-the-zone",          // URL-safe name (don't change once published)
  title: "Get In the Zone!",      // Display title
  shortDescription: "Sports Eyewear & Interaction Design", // Card subtitle
  category: "Research · Award Winner 🏆",                  // Badge on card
  year: "2025",
  color: "linear-gradient(145deg, #1a3328, #0d1f18 50%, #2a4a3f)", // Card bg
  video: "/videos/get_in_the_zone.mp4",  // Hover video path
  description: "Your hero description...",
  role: "Product & Interaction Designer",
  team: "1 Designer + 2 Supervisors",
  duration: "1 Year",
  responsibilities: [
    "First responsibility",
    "Second responsibility",
  ],
  sections: [
    {
      title: "Section heading",
      content: "Section body text...",
    },
  ],
  images: ["/images/into-the-zone/hero.jpg"],
}
```

### To add a new project:
Copy any existing project object, paste it at the position you want in the array, and update all the fields. The order in the array = order in the carousel.

### To remove a project:
Delete the entire object from the array (including the curly braces and trailing comma).

### To reorder projects:
Cut and paste entire project objects to change their position in the array.

---

## 3. Adding Images

### Step 1: Create folders
```
public/images/into-the-zone/
public/images/radio-biz/
public/images/intersensa/
... (one per project)
```

### Step 2: Add your image files
Drop `.jpg`, `.png`, or `.webp` files into the appropriate folder.

**Image tips:**
- Use `.webp` format when possible (much smaller file size)
- Hero images: aim for 1920×1080px or similar 16:9 ratio
- Detail images: 1200px wide minimum
- Keep file sizes under 500KB each (compress with tinypng.com or squoosh.app)

### Step 3: Reference in projects.ts
```typescript
images: [
  "/images/into-the-zone/hero.jpg",
  "/images/into-the-zone/detail-1.jpg",
  "/images/into-the-zone/detail-2.jpg",
],
```

### Step 4: The images will display automatically
The project page template already renders images from this array. If you want to add more image slots, you'd edit `src/app/projects/[slug]/ProjectContent.tsx`.

### Adding a profile photo:
1. Save your photo as `public/images/profile.jpg`
2. In `src/components/Carousel.tsx`, find the intro card's avatar placeholder
3. Replace the `<div>E</div>` with: `<img src="/images/profile.jpg" alt="Ege" style={{...}} />`
4. Do the same in `src/app/about/AboutContent.tsx`

---

## 4. Adding/Replacing Videos

### For hover previews:
1. Drop your `.mp4` file into `public/videos/`
2. In `projects.ts`, set the `video` field: `video: "/videos/your-video.mp4"`

**Video tips:**
- Keep under 10MB per video (5MB ideal)
- 720p resolution is enough for hover previews
- Use H.264 codec for max compatibility
- 5–15 seconds is the sweet spot for previews
- Use HandBrake (free) to compress: preset "Web > Vimeo YouTube 720p30"

---

## 5. Editing Other Pages

### About page: `src/app/about/AboutContent.tsx`
- Edit the bio text, experience entries, skills, and languages directly
- Experience and skills are stored as arrays at the top of the file

### Contact page: `src/app/contact/ContactContent.tsx`
- Update email, LinkedIn URL, and other links in the `contactLinks` array
- Change the availability message at the bottom

### Resume page: `src/app/resume/ResumeContent.tsx`
- Edit work experience, education, awards, and tools arrays
- The "Download PDF" button links to `/resume.pdf` — drop your PDF in `public/`

---

## 6. Publishing to Vercel (Recommended)

Vercel is the company behind Next.js. Free tier is generous and perfect for portfolios.

### First-time setup:

**Step 1: Push your code to GitHub**
```bash
# In your portfolio folder:
git init
git add .
git commit -m "Initial portfolio"

# Create a repo on github.com, then:
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**Step 2: Connect to Vercel**
1. Go to vercel.com and sign up with your GitHub account
2. Click "Add New Project"
3. Import your `portfolio` repository
4. Vercel auto-detects Next.js — just click "Deploy"
5. Your site will be live at `your-project.vercel.app` in ~60 seconds

**Step 3: Add your custom domain**
1. In Vercel dashboard → your project → Settings → Domains
2. Add `egecelikgogus.com` (or your preferred domain)
3. Vercel gives you DNS records to add at your domain registrar
4. SSL/HTTPS is automatic and free

### Updating your site:
Every time you push to GitHub, Vercel automatically rebuilds and deploys:
```bash
git add .
git commit -m "Updated project content"
git push
```
Your changes go live in ~30 seconds. No manual deploy needed.

---

## 7. Security Best Practices

### What Vercel handles for you (free):
- **HTTPS/SSL**: Automatic, free, auto-renewing certificates
- **DDoS protection**: Built into Vercel's edge network
- **CDN**: Your site is served from edge locations worldwide
- **Headers**: Security headers are set by default

### What you should add:

**Add security headers** — create `next.config.js` (or update if it exists):
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

**Keep dependencies updated:**
```bash
# Check for outdated packages
npm outdated

# Update everything (minor/patch versions, safe)
npm update

# For major updates, be careful and test after:
npx npm-check-updates -u
npm install
```

Run `npm update` monthly to patch known vulnerabilities.

**No secrets in your code:**
- Never put API keys, passwords, or tokens in your source code
- Your portfolio is a static site — it has no backend, no database, no API keys
- This is inherently secure: there's nothing to hack

**Contact form security (if you add one later):**
- Use a service like Formspree, Getform, or Netlify Forms
- Never build your own email-sending backend
- Add rate limiting and a honeypot field for spam protection

---

## 8. Sustainability & Performance

### Why it matters:
Every page load uses energy. A lightweight site = less carbon per visitor.

### Your site is already fast because:
- **Static generation**: Pages are pre-built HTML, not server-rendered per request
- **No database**: Zero server processing per visit
- **Edge CDN**: Served from the nearest data center to each visitor

### Optimizations to make:

**Compress images (biggest impact):**
- Use `.webp` format (30-50% smaller than .jpg)
- Compress with squoosh.app before adding to the project
- Aim for < 200KB per image, < 100KB ideally

**Add Next.js Image optimization** — replace `<img>` with Next's `<Image>`:
```tsx
import Image from 'next/image';

<Image
  src="/images/into-the-zone/hero.jpg"
  alt="Into the Zone project"
  width={1920}
  height={1080}
  quality={80}
  placeholder="blur"
/>
```
This auto-converts to WebP, lazy loads, and serves responsive sizes.

**Compress videos:**
- Use HandBrake to compress to 720p, H.264, ~2-5 Mbps bitrate
- Consider hosting videos on YouTube/Vimeo and embedding them (offloads bandwidth)

**Measure your carbon footprint:**
- Visit websitecarbon.com and test your URL
- Aim for < 0.5g CO2 per page view (a clean site)

**Green hosting:**
- Vercel runs on AWS, which has committed to 100% renewable energy by 2025
- You can verify at thegreenwebfoundation.org

### Performance checklist:
After deploying, test with these free tools:
- **PageSpeed Insights** (pagespeed.web.dev) — aim for 90+ on mobile
- **WebPageTest** (webpagetest.org) — check total page weight
- **Lighthouse** (built into Chrome DevTools > Audits tab)

---

## 9. Day-to-Day Workflow

### "I want to add a new project"
1. Add images to `public/images/your-project/`
2. Add video to `public/videos/` (optional)
3. Add project object to `src/data/projects.ts`
4. `git add . && git commit -m "Add new project" && git push`
5. Vercel deploys automatically. Done.

### "I want to update text on a page"
1. Edit the relevant file (see Section 5)
2. Save, commit, push. Live in 30 seconds.

### "I want to test changes locally first"
```bash
npm run dev
# Open http://localhost:3000
# Changes appear instantly as you save files (hot reload)
```

### "I want to update my resume PDF"
1. Replace `public/resume.pdf` with the new file (same filename)
2. Commit and push.

---

## 10. Useful Commands

```bash
npm run dev          # Start local dev server (localhost:3000)
npm run build        # Build for production (check for errors)
npm run start        # Preview production build locally
npm run lint         # Check code quality

git status           # See what files changed
git add .            # Stage all changes
git commit -m "msg"  # Commit with a message
git push             # Push to GitHub (triggers Vercel deploy)
```

---

## Need Help?

- **Next.js docs**: nextjs.org/docs
- **Vercel docs**: vercel.com/docs
- **Tailwind CSS**: tailwindcss.com/docs
- **Image compression**: squoosh.app
- **Video compression**: handbrake.fr
- **Carbon testing**: websitecarbon.com

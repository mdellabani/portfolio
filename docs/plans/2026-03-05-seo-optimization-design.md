# SEO & Referencing Optimization — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve search engine visibility, social sharing, and keyword targeting for the portfolio site — positioning as a high-performance Java / distributed systems / financial analytics specialist.

**Architecture:** Update meta tags and Open Graph in `Page.tsx` via data-driven `HomepageMeta`, add JSON-LD structured data in `_document.tsx`, optimize content keywords in `data.tsx`, fix heading hierarchy in section components, and enhance sitemap config.

**Tech Stack:** Next.js 14, React 18, TypeScript, next-sitemap

---

### Task 1: Update HomepageMeta data with SEO-optimized fields

**Files:**
- Modify: `src/data/data.tsx:39-42`

**Step 1: Update homePageMeta with all SEO fields**

In `src/data/data.tsx`, replace lines 39-42:

```tsx
export const homePageMeta: HomepageMeta = {
  title: 'Mahieddine Dellabani | Tech Lead — High-Performance Java, Distributed Systems & Financial Analytics',
  description:
    'Tech Lead & Software Architect building high-performance Java applications, scalable distributed systems & real-time analytics for financial services. Expert in FRTB, market risk & OLAP databases.',
  ogImageUrl: 'https://mdellabani.github.io/portfolio/og-image.png',
  twitterCardType: 'summary_large',
  twitterTitle:
    'Mahieddine Dellabani | Tech Lead — High-Performance Java, Distributed Systems & Financial Analytics',
  twitterDescription:
    'Tech Lead & Software Architect building high-performance Java applications, scalable distributed systems & real-time analytics for financial services.',
  twitterImageUrl: 'https://mdellabani.github.io/portfolio/og-image.png',
};
```

**Step 2: Verify build compiles**

Run: `yarn build`
Expected: Build succeeds (no type errors since `HomepageMeta` already supports all these fields)

**Step 3: Commit**

```bash
git add src/data/data.tsx
git commit -m "feat(seo): add SEO-optimized meta data to homePageMeta"
```

---

### Task 2: Wire all meta tags into Page.tsx

**Files:**
- Modify: `src/components/Layout/Page.tsx`
- Modify: `src/pages/index.tsx`

**Step 1: Update Page component to use all HomepageMeta fields**

Replace the entire `Page.tsx` content:

```tsx
import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const BASE_URL = 'https://mdellabani.github.io/portfolio';

const Page: NextPage<HomepageMeta> = memo(
  ({children, title, description, ogImageUrl, twitterCardType, twitterTitle, twitterDescription, twitterImageUrl}) => {
    const {asPath: pathname} = useRouter();
    const canonicalUrl = `${BASE_URL}${pathname}`;

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta content={description} name="description" />
          <meta content="Mahieddine Dellabani, Tech Lead, Software Architect, Java, distributed systems, FRTB, market risk, credit risk, real-time analytics, OLAP, Atoti, ActiveViam, Spring Boot, microservices, scalable systems, financial analytics, in-memory database, JVM" name="keywords" />

          {/* Canonical */}
          <link href={canonicalUrl} key="canonical" rel="canonical" />

          {/* Favicon & Manifest */}
          <link href="/favicon.ico" rel="icon" sizes="any" />
          <link href="/site.webmanifest" rel="manifest" />

          {/* Open Graph */}
          <meta content={title} property="og:title" />
          <meta content={description} property="og:description" />
          <meta content={canonicalUrl} property="og:url" />
          <meta content="profile" property="og:type" />
          <meta content="en_US" property="og:locale" />
          {ogImageUrl && <meta content={ogImageUrl} property="og:image" />}
          {ogImageUrl && <meta content="1200" property="og:image:width" />}
          {ogImageUrl && <meta content="630" property="og:image:height" />}

          {/* Twitter Card */}
          <meta content={twitterCardType || 'summary_large_image'} name="twitter:card" />
          <meta content={twitterTitle || title} name="twitter:title" />
          <meta content={twitterDescription || description} name="twitter:description" />
          {twitterImageUrl && <meta content={twitterImageUrl} name="twitter:image" />}
        </Head>
        {children}
      </>
    );
  },
);

Page.displayName = 'Page';
export default Page;
```

**Step 2: Update index.tsx to pass all meta fields**

In `src/pages/index.tsx`, replace line 20:

```tsx
// Before:
<Page description={description} title={title}>

// After:
<Page {...homePageMeta}>
```

And update the import on line 18 to remove destructuring (just use `homePageMeta` directly).

**Step 3: Verify build**

Run: `yarn build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/Layout/Page.tsx src/pages/index.tsx
git commit -m "feat(seo): wire all Open Graph and Twitter Card meta tags"
```

---

### Task 3: Add JSON-LD Structured Data

**Files:**
- Modify: `src/components/Layout/Page.tsx` (add script block inside Head)

**Step 1: Add JSON-LD script inside the `<Head>` block in Page.tsx**

Add this right before the closing `</Head>` tag. Note: uses `dangerouslySetInnerHTML` which is the standard Next.js pattern for JSON-LD — safe because the content is a hardcoded static object with no user input.

```tsx
{/* JSON-LD Structured Data */}
<script
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfilePage',
          mainEntity: {'@id': '#person'},
        },
        {
          '@type': 'Person',
          '@id': '#person',
          name: 'Mahieddine Dellabani',
          jobTitle: 'Tech Lead | Software Architect',
          description:
            'Tech Lead & Software Architect specializing in high-performance Java applications, scalable distributed systems, and real-time financial analytics.',
          url: BASE_URL,
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
          },
          knowsAbout: [
            'Java', 'JVM internals', 'distributed systems', 'high-performance databases',
            'scalable systems', 'FRTB', 'market risk', 'credit risk', 'real-time analytics',
            'OLAP', 'Atoti', 'ActiveViam', 'Spring Boot', 'microservices', 'Kubernetes',
            'financial technology', 'in-memory database', 'concurrency', 'observability',
          ],
          sameAs: [
            'https://www.linkedin.com/in/mdellabani/',
            'https://github.com/mdellabani',
          ],
          alumniOf: [
            {'@type': 'CollegeOrUniversity', name: 'Grenoble INP PHELMA/ENSIMAG'},
            {'@type': 'CollegeOrUniversity', name: 'Iowa State University'},
          ],
        },
      ],
    }),
  }}
  type="application/ld+json"
/>
```

**Step 2: Verify build**

Run: `yarn build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/components/Layout/Page.tsx
git commit -m "feat(seo): add JSON-LD structured data for Person and ProfilePage"
```

---

### Task 4: Fix Heading Hierarchy

Multiple H1s exist (Hero name + TechStack title). Timeline entry titles use H2 where H3 is correct.

**Files:**
- Modify: `src/components/Sections/TechStack.tsx:110` — `<h1>` → `<h2>`
- Modify: `src/components/Sections/Resume/TimelineItem.tsx:17` — `<h2>` → `<h3>`
- Modify: `src/components/Sections/Portfolio.tsx:81` — inner `<h2>` → `<h3>`

**Step 1: Fix TechStack H1 → H2**

In `src/components/Sections/TechStack.tsx`, line 110, change `<h1>` to `<h2>` (and closing tag).

**Step 2: Fix TimelineItem title H2 → H3**

In `src/components/Sections/Resume/TimelineItem.tsx`, line 17, change `<h2>` to `<h3>` (and closing tag).

**Step 3: Fix Portfolio item H2 → H3**

In `src/components/Sections/Portfolio.tsx`, line 81, change `<h2>` to `<h3>` (and closing tag).

**Step 4: Verify build**

Run: `yarn build`
Expected: Build succeeds

**Step 5: Commit**

```bash
git add src/components/Sections/TechStack.tsx src/components/Sections/Resume/TimelineItem.tsx src/components/Sections/Portfolio.tsx
git commit -m "fix(seo): correct heading hierarchy — single H1, proper H2/H3 nesting"
```

---

### Task 5: Optimize Content Keywords

**Files:**
- Modify: `src/data/data.tsx` — hero role (line 66), hero description (lines 69-74), about description (lines 111-115)

**Step 1: Update hero role tagline**

Change line 66:
```tsx
// Before:
role: `Tech Lead | Scalable & High-Performance Systems`,
// After:
role: `Tech Lead & Software Architect | High-Performance Java & Distributed Systems`,
```

**Step 2: Update hero first description paragraph**

Replace lines 69-74:
```tsx
<p className="prose-sm text-retro-text sm:prose-base lg:prose-lg">
  Seasoned Tech Lead and Software Architect with deep expertise in Java, JVM internals, and high-performance
  database systems. I build scalable distributed systems and real-time analytics platforms for financial
  services — from in-memory OLAP engines to market risk and FRTB solutions. Strong emphasis on concurrency,
  observability, and production-grade deployments.
</p>
```

**Step 3: Update about description**

Replace lines 111-115:
```tsx
description: `Tech Lead and Software Architect with 10+ years building high-performance Java applications
  and scalable distributed systems. Specialized in real-time analytics, in-memory databases, and financial
  services platforms including market risk, credit risk, and FRTB. Autonomous, curious, and experienced in
  multicultural environments. Whether leading a team or diving deep into architecture, I build great products
  for both users and developers: fostering innovation, promoting best practices, and delivering top-notch performance.`,
```

**Step 4: Verify build**

Run: `yarn build`
Expected: Build succeeds

**Step 5: Commit**

```bash
git add src/data/data.tsx
git commit -m "feat(seo): optimize hero and about content with target keywords"
```

---

### Task 6: Fix Image Alt Text

**Files:**
- Modify: `src/components/Sections/Hero.tsx:19`
- Modify: `src/components/Sections/About.tsx` — profile image alt

**Step 1: Update hero image alt**

In `src/components/Sections/Hero.tsx`, line 19, change:
```tsx
alt={`${name}-image`}
```
to:
```tsx
alt={`${name} - Tech Lead and Software Architect portfolio`}
```

**Step 2: Update profile image alt in About section**

Ensure the profile image in `src/components/Sections/About.tsx` has alt text:
```
"Mahieddine Dellabani - Tech Lead and Software Architect"
```

**Step 3: Verify build**

Run: `yarn build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/Sections/Hero.tsx src/components/Sections/About.tsx
git commit -m "fix(seo): add descriptive keyword-rich alt text to images"
```

---

### Task 7: Add Semantic HTML — wrap page in `<main>`

**Files:**
- Modify: `src/pages/index.tsx`
- Modify: `src/components/Layout/Section.tsx`

**Step 1: Wrap page content in `<main>` tag**

In `src/pages/index.tsx`:
```tsx
<Page {...homePageMeta}>
  <Header />
  <main>
    <Hero />
    <About />
    <Resume />
    <Portfolio />
    <Testimonials />
    <Contact />
  </main>
  <Footer />
</Page>
```

**Step 2: Add aria-labels to Section components**

In `src/components/Layout/Section.tsx`, add `aria-label` to the `<section>` tag:
```tsx
<section
  aria-label={sectionId}
  className={classNames(className, {'px-4 py-16 md:py-12 lg:px-8': !noPadding})}
  id={sectionId}>
```

**Step 3: Verify build**

Run: `yarn build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/pages/index.tsx src/components/Layout/Section.tsx
git commit -m "feat(seo): add semantic HTML with main tag and aria-labels"
```

---

### Task 8: Enhance Sitemap Configuration

**Files:**
- Modify: `next-sitemap.config.js`

**Step 1: Update sitemap config**

Replace `next-sitemap.config.js`:
```js
/* eslint-env node */
module.exports = {
  siteUrl: 'https://mdellabani.github.io/portfolio',
  exclude: ['/404*', '/500*'],
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    };
  },
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/404', '/500'],
      },
    ],
    // Uncomment when blog is added:
    // additionalSitemaps: [
    //   'https://mdellabani.github.io/portfolio/blog-sitemap.xml',
    // ],
  },
};
```

**Step 2: Verify build generates sitemap**

Run: `yarn build`
Expected: Build succeeds, sitemap XML contains priority and changefreq

**Step 3: Commit**

```bash
git add next-sitemap.config.js
git commit -m "feat(seo): enhance sitemap with priority, changefreq, and blog-ready config"
```

---

### Task 9: Add Static OG Image Placeholder

**Files:**
- Create: `public/og-image.png` (user-provided)

**Step 1:** User creates/provides a 1200x630 PNG image with retro theme styling, name, title, and key skill badges. Place at `public/og-image.png`.

**Step 2: Commit**

```bash
git add public/og-image.png
git commit -m "feat(seo): add OG social preview image"
```

---

### Task 10: Final Verification

**Step 1:** Run `yarn build` — clean build, no warnings

**Step 2:** After deploying, validate structured data with Google Rich Results Test

**Step 3:** Validate OG tags with Facebook Sharing Debugger and Twitter Card Validator

**Step 4:** Use browser DevTools to verify exactly one `<h1>` and proper H1→H2→H3 nesting

**Step 5:** Deploy: `git push origin main`

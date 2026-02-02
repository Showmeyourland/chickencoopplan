

# Plan: Add New Article "What to Look For in Free Chicken Coop Plans"

## Overview

This article evaluates free chicken coop plan quality with a 12-point checklist. It complements the existing "Free Chicken Coop Plans: 25 Best Sources Reviewed" guide by focusing on **evaluation criteria** rather than **source reviews**.

---

## Phase 1: SEO & Metadata Optimization

### Title Tag (Optimized)
```
Free Coop Plans Quality Checklist: 12 Must-Have Elements (2025)
```
- 59 characters (optimal for SERPs)
- Includes year for freshness
- Action-oriented with "Must-Have"

### Meta Description (Optimized)
```
Expert 12-point checklist for evaluating free chicken coop plans. Learn what separates safe, buildable designs from dangerous blueprints that waste time and money.
```
- 161 characters (optimal range)
- Includes key search terms

### Slug
```
/guides/free-coop-plans-quality-checklist
```

---

## Phase 2: Internal Link Optimization

Replace the 5 vague homepage links with deep contextual links:

### Link 1: Predator-Proofing Section
**Current:** `<a href="/">Our comprehensive chicken coop guidance</a> includes detailed predator-proofing strategies`

**Optimized:**
```html
<Link to="/guides/predator-proof-coop-guide">Our predator-proofing guide</Link> includes detailed strategies specific to different regional threats
```

### Link 2: Ventilation Section
**Current:** `<a href="/">maximum ventilation becomes even more critical</a>`

**Optimized:**
```html
<Link to="/guides/coop-ventilation-guide">maximum ventilation becomes even more critical</Link> for temperature management during 110°F+ summer days
```

### Link 3: Climate Section
**Current:** `<a href="/">Our region-specific building recommendations</a>`

**Optimized:**
```html
<Link to="/guides/arizona-chicken-coop-guide">Our Arizona-specific building guide</Link> addresses the unique challenges of desert chicken keeping
```

### Link 4: Bottom Line Section
**Current:** `<a href="/">Professional chicken coop design</a>`

**Optimized:**
```html
<Link to="/guides/how-to-build-chicken-coop">Our complete building guide</Link> accounts for regional climate, local predators, building codes, and long-term maintenance
```

### Link 5: FAQ Section
**Current:** `<a href="/">Understanding the principles behind good coop design</a>`

**Optimized:**
```html
<Link to="/guides/how-to-build-chicken-coop">Understanding the principles behind good coop design</Link> helps ensure modifications don't compromise safety
```

### Additional Contextual Links to Add
- **Space Calculations section:** Link to `/guides/chicken-coop-size-calculator`
- **Legal Compliance section:** Link to `/guides/coop-permit-guide`
- **Materials List section:** Link to `/guides/coop-materials-guide`
- **Cost Estimates section:** Link to `/guides/cost-breakdown-2025`
- **Where to Find section:** Link to `/guides/free-chicken-coop-plans` (existing comprehensive review)

---

## Phase 3: File Structure

### New Files to Create

1. **`src/pages/guides/FreePlanQualityChecklist.tsx`**
   - Uses `BlogLayout` component for consistent styling
   - Includes interactive evaluation checklist tool
   - 12 sections matching TOC structure
   - Proper internal links using React Router `Link`

2. **Update `src/lib/articles.ts`**
   - Add article metadata entry:
   ```typescript
   {
     id: 'free-coop-plans-quality-checklist',
     slug: 'free-coop-plans-quality-checklist',
     title: 'Free Coop Plans Quality Checklist: 12 Must-Have Elements (2025)',
     excerpt: 'Expert 12-point checklist for evaluating free chicken coop plans...',
     author: 'Sarah Martinez',
     authorCredentials: 'Backyard Chicken Expert | Plan Review Specialist',
     date: '2025-02-02',
     readingTime: 25,
     category: 'Planning',
     tags: ['Free Plans', 'Evaluation', 'Checklist', 'Quality', 'Safety'],
     difficulty: 'Beginner',
     costRange: '$400-$1,500',
     seo: {
       metaTitle: 'Free Coop Plans Quality Checklist: 12 Must-Have Elements (2025)',
       metaDescription: 'Expert 12-point checklist for evaluating free chicken coop plans. Learn what separates safe, buildable designs from dangerous blueprints.'
     }
   }
   ```

3. **Update `src/App.tsx`**
   - Add route: `/guides/free-coop-plans-quality-checklist`

4. **Update `public/sitemap.xml`**
   - Add new URL entry

5. **Update `src/components/BlogLayout.tsx`**
   - Add image mapping for SEO meta tags

### Image Asset Required
- Generate hero image: `src/assets/guide-free-coop-quality-checklist.jpg`
- Per project policy, every guide must have a custom-generated hero image

---

## Phase 4: Cross-Linking from Existing Guides

Add reciprocal links from related guides to the new article:

- **`FreeChickenCoopPlans.tsx`:** Add link in "How to Pick" section
- **`FreeVsPremiumPlans.tsx`:** Add link when discussing plan quality
- **`HowToBuildChickenCoop.tsx`:** Add link when discussing plan selection

---

## Phase 5: Interactive Tool

Create an **Evaluation Checklist Tool** similar to existing patterns:

```text
+----------------------------------------+
|  Free Plan Evaluation Checklist        |
+----------------------------------------+
| Essential Elements (Must Have All):    |
| [ ] Space calculations (3-4 sq ft)     |
| [ ] Hardware cloth specs               |
| [ ] Ventilation requirements           |
| [ ] Complete materials list            |
| [ ] Predator-proof latches             |
| [ ] Foundation requirements            |
+----------------------------------------+
| Quality Indicators:                    |
| [ ] Multi-angle drawings               |
| [ ] Step-by-step sequence              |
| [ ] Realistic cost estimates           |
| [ ] Climate adaptation                 |
| [ ] Maintenance access                 |
| [ ] Legal compliance info              |
+----------------------------------------+
| [Score This Plan]                      |
| Result: X/12 Essential, Y/6 Quality    |
+----------------------------------------+
```

---

## Technical Summary

| Item | Action |
|------|--------|
| New page component | `src/pages/guides/FreePlanQualityChecklist.tsx` |
| Article registry | Update `src/lib/articles.ts` |
| Routing | Update `src/App.tsx` |
| Sitemap | Update `public/sitemap.xml` |
| BlogLayout image map | Update `src/components/BlogLayout.tsx` |
| Hero image | Generate `src/assets/guide-free-coop-quality-checklist.jpg` |
| Internal links | 10+ contextual deep links replacing homepage links |
| Cross-links | Update 3 existing guides with reciprocal links |

---

## SEO Alignment Checklist

- Title: 55-60 chars with year and action words
- Meta description: 150-160 chars with key terms
- Canonical URL: `/guides/free-coop-plans-quality-checklist`
- Breadcrumbs: Home > Guides > Planning > Free Coop Plans Quality Checklist
- Schema markup: ArticleSchema via BlogLayout
- Internal links: 10+ deep links (no generic homepage links)
- Related articles: Automatically pulled from same category


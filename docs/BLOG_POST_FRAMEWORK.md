# WAATechnologies Blog Post Framework
Reverse-engineered from the existing 80+ posts in this codebase. Use this as the standing spec any time a new blog post is requested — paste the "Prompt Template" section at the bottom into a request to generate a specific post.

## 1. Where a post lives (3 files, all required)

A single post is NOT one file — it's coordinated entries across:

| File | What to add |
|---|---|
| `src/lib/posts.ts` | One `Post` object in `allPosts[]` — metadata only |
| `src/app/[slug]/page.tsx` → `articleContent` map | The JSX article body, keyed by slug |
| `src/app/[slug]/page.tsx` → `wordCounts` map | `'slug': <number>` — actual word count |
| `src/app/[slug]/page.tsx` → `faqData` map | 3-5 `{q, a}` pairs — feeds FAQPage schema |

Everything else (metadata tags, OpenGraph, canonical URL, JSON-LD, breadcrumb, related-posts sidebar, static generation) is **automatic** — it's derived from the `Post` object and the slug. Never hand-write metadata or schema; only fill the four data points above.

## 2. `Post` object shape (posts.ts)

```ts
{
  slug: 'kebab-case-keyword-phrase-pakistan',   // = the long-tail keyword, almost verbatim
  title: 'Question or Comparison Title — Descriptive Subtitle', // 60-100 chars, human-readable, not stuffed
  date: 'Mon DD, 2026',
  category: 'WAATechCylinders',                 // keep consistent — do not invent new categories
  type: 'blog',                                  // or 'case-study'
  readingTime: 'NN min read',                    // wordCount / 200, rounded
  tags: [ /* 5-8 kebab-case tags */ ],
  excerpt: '150-320 char summary — this doubles as the meta description AND the OG/Twitter description AND the first line rendered on the page.',
}
```

Tag rules: one tag must be the exact long-tail phrase (or a close variant), the rest are supporting semantic/entity tags (`composite-lpg-cylinders`, `waa-technologies`, `ogra-lpg-rules`, a city name if geo-targeted, etc.). This is how the internal `/tag/[tag]` pages build topical clusters.

## 3. Article body template (articleContent[slug])

Every existing post follows this skeleton, in order:

1. **Quick Answer box** (`bg-slate-900` card, `text-amber-400` "Quick Answer" label, bold restated question, 2-4 sentence direct answer with key numbers/claims wrapped in `<strong>`). This is the single most important block for AI Overviews / featured snippets / LLM answer extraction — it must answer the title's implicit question completely in isolation, with no pronouns referring back to content above it.
2. **Key Takeaways / Key Rules box** (`bg-green-50` or `bg-amber-50`, `border-l-4`, icon + heading, 5-7 bullet list items, each bullet a complete standalone fact/claim).
3. **2-3 intro paragraphs** framing the problem/context. Must include 2-4 contextual internal links to *existing* related posts using:
   `<Link href="/other-post-slug" className="text-green-700 underline decoration-green-300 underline-offset-2 hover:text-green-900 font-medium">natural anchor text</Link>`
4. **5-8 H2 sections** (with H3 subsections where a section has sub-topics) that build out the full answer in depth: mechanisms, comparisons, certifications (ISO 11119-3 / OGRA / PSQCA / BS EN 14427:2022), cost breakdowns in Rs., city-specific notes (Lahore/Karachi/Islamabad/Gujranwala) where relevant. Every factual claim should be concrete — specific numbers, standards, prices, percentages — not vague marketing language.
5. **"Frequently Asked Questions" H2** near the end, with 3-5 `<h3>question</h3><p>answer</p>` pairs. **These must match `faqData[slug]` closely** (same questions, same core facts) — the visible FAQ and the FAQPage schema must agree, or it risks a Google structured-data manual action and defeats the point for AI crawlers.
6. Close naturally — no boilerplate "In conclusion" needed; the existing posts just end after the last FAQ answer.

**Reciprocal linking**: after writing the new post, add 1-2 contextual links *from* an existing older post *into* the new one (the same `<Link>` pattern), so the internal link graph is bidirectional, not just outbound from the new post.

## 4. FAQ data (faqData[slug])

3-5 objects: `{ q: 'exact question, phrased how a user or voice search would ask it', a: 'complete, self-contained 60-120 word answer, front-loaded with the direct answer in the first sentence' }`. Never write an answer that requires reading the article to make sense — each one is independently extractable, because that's literally what Google/Bing/AI Overviews and LLM answer engines lift verbatim.

## 5. Word count / reading time

Existing posts run 1600-3100 words; posts targeting a competitive or broad keyword (lifespan, safety, certification, pricing) run longer (2800-3100), narrow/local ones (single-city, single-feature) run shorter (1600-2000). Set `wordCounts[slug]` to the real count and derive `readingTime` from it (÷200 wpm).

## 6. What makes this "SEO + AI + AIO + AGI + all-search-engine" optimized (already built into the template — don't skip these)

- **Traditional SEO**: unique title/meta description per post (auto from `post.title`/`post.excerpt`), canonical URL, OpenGraph + Twitter cards, `robots: max-image-preview: large, max-snippet: -1`, static pre-rendering via `generateStaticParams` (fast, crawlable, no JS-dependent content).
- **Schema.org structured data** (auto-generated, just needs your data): `BlogPosting`/`Article` with full author/publisher/wordCount/keywords, `BreadcrumbList`, `FAQPage`. This is the primary lever for Google's AI Overviews and rich results.
- **AI answer-engine optimization (AIO)**: the Quick Answer box + FAQ section format is what ChatGPT/Perplexity/Gemini/Copilot preferentially extract and cite when answering LPG-related queries — because the answer is self-contained, factual, and not buried in narrative prose.
- **Entity grounding (what actually matters for "AGI"/knowledge-graph-style retrieval)**: consistently name the same entities every time — "WAA Technologies Pvt Ltd", "ISO 11119-3", "OGRA", "Gujranwala, Punjab, Pakistan" — exactly as done in the `about`/`mentions` schema block. Don't vary the org name or standard names across posts; consistency is what lets retrieval systems and knowledge graphs associate the entity across the whole site.
- **Internal link mesh**: every post links to 2-4 others and gets linked back from at least one — this is what turns 80+ standalone pages into a topical authority cluster, which both classic PageRank-style SEO and modern topic-based ranking (helpful content, AI Overviews' source diversity) reward.
- **Freshness/QDF signals**: real dates, "2025"/"2026" in title or content where the topic is time-sensitive (pricing, incident stats, regulations).

## 7. Prompt template — paste this to request a new post

```
Write a new WAATechnologies blog post following docs/BLOG_POST_FRAMEWORK.md exactly.

Target long-tail keyword: [KEYWORD]
Slug: [proposed-slug]
Approximate title: [working title]

Add all four required pieces:
1. Post entry in src/lib/posts.ts
2. articleContent[slug] JSX in src/app/[slug]/page.tsx (Quick Answer box, Key Takeaways box, intro
   with 2-4 internal links to existing related posts, 5-8 H2/H3 sections with concrete Pakistan-specific
   data — Rs. pricing, ISO/OGRA standards, city references — and a Frequently Asked Questions section)
3. wordCounts[slug] entry
4. faqData[slug] entry (3-5 Q&A pairs matching the visible FAQ section)

Also add 1-2 reciprocal links from an existing related post back into this new one.
Target length: [1600-2000 for narrow/local topics | 2500-3100 for broad/competitive topics].
```

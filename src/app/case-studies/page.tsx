import { permanentRedirect } from 'next/navigation';

// /case-studies/ → canonical URL is /category/casestudies/
// permanentRedirect (308) rather than redirect (307): this mapping is final,
// so search engines should consolidate link equity onto the target instead of
// re-checking the old URL on every crawl.
export default function CaseStudiesRedirect() {
  permanentRedirect('/category/casestudies');
}

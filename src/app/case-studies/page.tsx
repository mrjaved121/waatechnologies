import { redirect } from 'next/navigation';

// /case-studies/ → canonical URL is /category/casestudies/
export default function CaseStudiesRedirect() {
  redirect('/category/casestudies');
}

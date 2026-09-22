import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { allPosts, getPostBySlug } from '@/lib/posts';

// Every blog post previously shared the same static /images/post-image.jpg for
// its social-share preview. This generates a distinct, on-brand card per post
// (real title, WAA colors/logo) instead — the file-convention Next.js wires
// automatically into the openGraph/twitter meta tags for this route segment.

export const alt = 'WAATechnologies';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? 'WAATechnologies';

  const [logo, cylinder] = await Promise.all([
    readFile(join(process.cwd(), 'public/images/global-waatech-logo.png')),
    readFile(join(process.cwd(), 'public/images/orange-cylinder-transparent.png')),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;
  const cylinderSrc = `data:image/png;base64,${cylinder.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: 'linear-gradient(135deg, #01411C 0%, #063d20 55%, #052a16 100%)',
        }}
      >
        {/* cylinder graphic, bled off the bottom-right edge */}
        <img
          src={cylinderSrc}
          width={560}
          height={560}
          style={{ position: 'absolute', right: -70, bottom: -90, opacity: 0.92 }}
        />
        {/* left-to-right dark gradient so the title stays legible over the graphic */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background: 'linear-gradient(90deg, rgba(1,65,28,1) 0%, rgba(1,65,28,0.88) 48%, rgba(1,65,28,0.1) 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '56px 64px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img src={logoSrc} width={54} height={45} />
            <span style={{ color: '#ffffff', fontSize: 26, fontWeight: 700, letterSpacing: 0.5 }}>
              WAATechnologies
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 760 }}>
            <div
              style={{
                display: 'flex',
                alignSelf: 'flex-start',
                background: '#fbbf24',
                color: '#0f172a',
                fontSize: 20,
                fontWeight: 700,
                padding: '6px 18px',
                borderRadius: 999,
                marginBottom: 26,
              }}
            >
              Composite LPG Cylinders · Pakistan
            </div>
            <div
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                overflow: 'hidden',
                color: '#ffffff',
                fontSize: 52,
                fontWeight: 800,
                lineHeight: 1.15,
              }}
            >
              {title}
            </div>
          </div>

          <div style={{ display: 'flex', color: '#fbbf24', fontSize: 22, fontWeight: 600 }}>
            waatechnologies.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

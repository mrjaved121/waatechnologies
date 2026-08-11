'use client';
import { useState, useEffect } from 'react';

function CrescentStar({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.13)}
      viewBox="0 0 195 215"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="mhGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <mask id="mhMask">
          <circle cx="80" cy="135" r="76" fill="white" />
          <circle cx="108" cy="117" r="63" fill="black" />
        </mask>
      </defs>
      <circle cx="80" cy="135" r="76" fill="white" mask="url(#mhMask)" filter="url(#mhGlow)" />
      <polygon
        fill="white"
        filter="url(#mhGlow)"
        points="132,66 137.9,83.4 155.9,83.7 141.6,94.3 147.5,111.7 132,101.2 116.5,111.7 122.4,94.3 108.1,83.7 126.1,83.4"
      />
    </svg>
  );
}

export default function AzadiMobileHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const expired = new Date() >= new Date('2026-08-15T00:00:00');
    if (!expired) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes azadiFloatMobile {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-18px); }
        }
      `}</style>
      {/* Absolute inside hero section — scrolls with page, never overlaps other sections */}
      <div
        className="absolute z-20 pointer-events-none select-none block lg:hidden"
        style={{
          left: '5%',
          top: '58%',
          opacity: 0.72,
          animation: 'azadiFloatMobile 5s ease-in-out infinite',
        }}
      >
        <CrescentStar size={85} />
      </div>
    </>
  );
}

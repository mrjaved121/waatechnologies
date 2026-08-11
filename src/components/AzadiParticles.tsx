'use client';
import { useState, useEffect } from 'react';

export default function AzadiParticles() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const expired = new Date() >= new Date('2026-08-15T00:00:00');
    if (!expired) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes azadiFloat {
          0%, 100% { transform: translateY(0px);   }
          50%       { transform: translateY(-22px); }
        }
      `}</style>

      {/* Positioned to the LEFT of the cylinder in the hero */}
      <div
        className="fixed z-30 pointer-events-none select-none hidden sm:block"
        style={{
          left: '35%',
          top: '40%',
          opacity: 0.78,
          animation: 'azadiFloat 5s ease-in-out infinite',
        }}
      >
        <svg
          width="150"
          height="170"
          viewBox="0 0 195 215"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft white glow */}
            <filter id="wGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Crescent = outer circle minus offset inner circle */}
            <mask id="wMask">
              <circle cx="80" cy="135" r="76" fill="white" />
              <circle cx="108" cy="117" r="63" fill="black" />
            </mask>
          </defs>

          {/* ── White crescent ── */}
          <circle
            cx="80"
            cy="135"
            r="76"
            fill="white"
            mask="url(#wMask)"
            filter="url(#wGlow)"
          />

          {/* ── White star — close to crescent opening ──
              Center: (132, 92)  outer-r: 26  inner-r: 10
              Brought in tight so it sits just inside the crescent gap */}
          <polygon
            fill="white"
            filter="url(#wGlow)"
            points="
              132,66
              137.9,83.4
              155.9,83.7
              141.6,94.3
              147.5,111.7
              132,101.2
              116.5,111.7
              122.4,94.3
              108.1,83.7
              126.1,83.4
            "
          />
        </svg>
      </div>
    </>
  );
}

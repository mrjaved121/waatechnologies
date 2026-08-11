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

      <div
        className="fixed bottom-10 right-8 z-30 pointer-events-none select-none hidden sm:block"
        style={{ animation: 'azadiFloat 5s ease-in-out infinite' }}
      >
        <svg
          width="155"
          height="175"
          viewBox="0 0 200 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Green → lime gradient — matches Pakistan flag colours */}
            <linearGradient id="azGrad" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%"   stopColor="#d9f99d" />
              <stop offset="30%"  stopColor="#86efac" />
              <stop offset="65%"  stopColor="#16a34a" />
              <stop offset="100%" stopColor="#01411C" />
            </linearGradient>

            {/* Outer glow */}
            <filter id="azGlow" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Crescent mask: outer circle minus offset inner circle */}
            <mask id="azMask">
              <circle cx="82" cy="135" r="78" fill="white" />
              <circle cx="112" cy="116" r="64" fill="black" />
            </mask>
          </defs>

          {/* ── Crescent ── */}
          <circle
            cx="82"
            cy="135"
            r="78"
            fill="url(#azGrad)"
            mask="url(#azMask)"
            filter="url(#azGlow)"
            opacity="0.92"
          />

          {/* ── Five-pointed star (upper-right of crescent) ── */}
          {/* Center: 158,62  outer-r: 32  inner-r: 13 */}
          <polygon
            points="
              158,30
              164.8,52.2
              187.4,52.8
              169.6,66.4
              176.4,88.6
              158,75.2
              139.6,88.6
              146.4,66.4
              128.6,52.8
              151.2,52.2
            "
            fill="url(#azGrad)"
            filter="url(#azGlow)"
            opacity="0.92"
          />
        </svg>
      </div>
    </>
  );
}

'use client';
import { useState, useEffect } from 'react';

// Combined Pakistan crescent + star SVG — transparent background, white shapes
function CrescentStar({ size, uid }: { size: number; uid: string }) {
  const maskId = `cm-${uid}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.38))' }}
    >
      <defs>
        <mask id={maskId}>
          {/* Outer crescent circle — white = visible */}
          <circle cx="23" cy="35" r="19" fill="white" />
          {/* Inner cutout — black = transparent */}
          <circle cx="31" cy="31" r="15" fill="black" />
        </mask>
      </defs>

      {/* Crescent */}
      <circle cx="23" cy="35" r="19" fill="white" mask={`url(#${maskId})`} />

      {/* 5-pointed star — upper right of crescent */}
      {/* Center: 46,14  outer-r: 11  inner-r: 4.5 */}
      <polygon
        fill="white"
        points="
          46,3
          48.6,10.8
          56.5,10.8
          50.4,15.6
          52.9,23.4
          46,18.7
          39.1,23.4
          41.6,15.6
          35.5,10.8
          43.4,10.8
        "
      />
    </svg>
  );
}

const ELEMENTS = [
  { left: '10%',  size: 48, duration: 28, delay:   0 },
  { left: '50%',  size: 58, duration: 34, delay: -13 },
  { left: '79%',  size: 42, duration: 26, delay: -20 },
];

export default function AzadiParticles() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const expired = new Date() >= new Date('2026-08-15T00:00:00');
    if (!expired) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <style>{`
        @keyframes lanternFloat {
          0%   { transform: translateY(108vh) translateX(0px);  opacity: 0; }
          7%   { opacity: 1; }
          48%  { transform: translateY(52vh)  translateX(16px); opacity: 1; }
          93%  { opacity: 1; }
          100% { transform: translateY(-90px) translateX(0px);  opacity: 0; }
        }
      `}</style>

      {ELEMENTS.map((el, i) => (
        <div
          key={i}
          className="absolute bottom-0"
          style={{
            left: el.left,
            opacity: [0.22, 0.17, 0.21][i],
            animation: `lanternFloat ${el.duration}s ${el.delay}s linear infinite`,
          }}
        >
          <CrescentStar size={el.size} uid={`el${i}`} />
        </div>
      ))}
    </div>
  );
}

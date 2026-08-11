'use client';
import { useState, useEffect } from 'react';

type Particle = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: 'star' | 'moon';
  opacity: number;
};

// Proper 5-pointed star SVG — not a text character
function Star({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="white"
      style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.45))' }}
    >
      <polygon points="10,1 12.35,6.76 18.56,7.22 13.8,11.24 15.29,17.28 10,14 4.71,17.28 6.2,11.24 1.44,7.22 7.65,6.76" />
    </svg>
  );
}

// Proper crescent using SVG mask — transparent cutout, works on any background
function Crescent({ size, id }: { size: number; id: number }) {
  const maskId = `crescent-mask-${id}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.45))' }}
    >
      <defs>
        <mask id={maskId}>
          <circle cx="10" cy="10" r="8.5" fill="white" />
          <circle cx="14" cy="9.5" r="7" fill="black" />
        </mask>
      </defs>
      <circle cx="10" cy="10" r="8.5" fill="white" mask={`url(#${maskId})`} />
    </svg>
  );
}

function buildParticles(): Particle[] {
  return Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: (i * 7.3 + (i % 4) * 2.5) % 100,
    delay: (i * 1.15) % 18,
    duration: 14 + (i * 1.3) % 10,
    size: i % 3 === 0 ? 13 : 9 + (i % 3) * 2,
    type: (i % 4 === 0 ? 'moon' : 'star') as 'star' | 'moon',
    opacity: 0.4 + (i % 4) * 0.1,
  }));
}

export default function AzadiParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const expired = new Date() >= new Date('2026-08-15T00:00:00');
    if (!expired) setParticles(buildParticles());
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <style>{`
        @keyframes gentleFall {
          0%   { transform: translateY(-30px); opacity: 0; }
          6%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateY(105vh);  opacity: 0; }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            opacity: p.opacity,
            animation: `gentleFall ${p.duration}s ${p.delay}s linear infinite`,
          }}
        >
          {p.type === 'star'
            ? <Star size={p.size} />
            : <Crescent size={p.size} id={p.id} />
          }
        </div>
      ))}
    </div>
  );
}

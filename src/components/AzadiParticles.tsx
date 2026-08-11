'use client';
import { useState, useEffect } from 'react';

type Particle = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  symbol: string;
  opacity: number;
};

// Deterministic values derived from index — avoids hydration mismatch
function buildParticles(): Particle[] {
  const symbols = ['⭐', '✦', '☪', '✦', '⭐', '·', '✦', '⭐'];
  return Array.from({ length: 16 }, (_, i) => ({
    id: i,
    left: (i * 6.25 + (i % 3) * 2.1) % 100,
    delay: (i * 0.9) % 14,
    duration: 10 + (i * 1.4) % 9,
    size: 9 + (i * 1.6) % 10,
    symbol: symbols[i % symbols.length],
    opacity: 0.15 + (i % 4) * 0.08,
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
        @keyframes particleDrift {
          0%   { transform: translateY(-30px) rotate(0deg);   opacity: 0; }
          8%   { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(105vh) rotate(300deg); opacity: 0; }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 text-[#01411C] font-bold"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `particleDrift ${p.duration}s ${p.delay}s linear infinite`,
            filter: 'drop-shadow(0 1px 1px rgba(255,255,255,0.6))',
          }}
        >
          {p.symbol}
        </div>
      ))}
    </div>
  );
}

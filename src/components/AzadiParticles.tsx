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
  drift: number;
};

// Alternates between ★ (star) and ☽ (crescent moon) — all white
const SYMBOLS = ['★', '☽', '★', '★', '☽', '★', '☽', '★'];

function buildParticles(): Particle[] {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: (i * 5.1 + (i % 4) * 1.7) % 100,
    delay: (i * 0.85) % 15,
    duration: 9 + (i * 1.3) % 9,
    size: 10 + (i * 1.9) % 14,
    symbol: SYMBOLS[i % SYMBOLS.length],
    opacity: 0.55 + (i % 4) * 0.1,
    drift: ((i % 5) - 2) * 18,   // horizontal drift in px
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
        @keyframes particleFall-neg { 0% { transform: translateY(-40px) translateX(0px) rotate(0deg); opacity:0; } 8% { opacity:1; } 88% { opacity:1; } 100% { transform: translateY(105vh) translateX(-18px) rotate(-25deg); opacity:0; } }
        @keyframes particleFall-0   { 0% { transform: translateY(-40px) translateX(0px) rotate(0deg); opacity:0; } 8% { opacity:1; } 88% { opacity:1; } 100% { transform: translateY(105vh) translateX(0px)  rotate(15deg);  opacity:0; } }
        @keyframes particleFall-pos { 0% { transform: translateY(-40px) translateX(0px) rotate(0deg); opacity:0; } 8% { opacity:1; } 88% { opacity:1; } 100% { transform: translateY(105vh) translateX(18px)  rotate(25deg);  opacity:0; } }
      `}</style>
      {particles.map((p) => {
        const anim = p.drift < 0
          ? 'particleFall-neg'
          : p.drift > 0
          ? 'particleFall-pos'
          : 'particleFall-0';
        return (
          <div
            key={p.id}
            className="absolute top-0 select-none"
            style={{
              left: `${p.left}%`,
              fontSize: `${p.size}px`,
              color: 'white',
              opacity: p.opacity,
              animation: `${anim} ${p.duration}s ${p.delay}s linear infinite`,
              textShadow: '0 0 6px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.4)',
              lineHeight: 1,
            }}
          >
            {p.symbol}
          </div>
        );
      })}
    </div>
  );
}

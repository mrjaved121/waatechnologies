'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { end: 100, suffix: '%',    label: 'Explosion Proof',      decimals: 0 },
  { end: 5.5, suffix: ' kg',  label: 'Lightweight (10kg Size)', decimals: 1 },
  { end: 20,  suffix: '+',    label: 'Years Lifespan',        decimals: 0 },
  { end: 12000, suffix: '',   label: 'Pressure Cycles',       decimals: 0 },
];

function useCountUp(end: number, decimals: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const startVal = 0;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(startVal + (end - startVal) * eased);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [start, end, duration]);

  return decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();
}

function StatCard({ end, suffix, label, decimals, index }: typeof stats[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const display = useCountUp(end, decimals, 1800, visible);

  return (
    <div
      ref={ref}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center
                 hover:bg-white/15 hover:border-amber-400/40 hover:scale-105
                 transition-[transform,background-color,border-color] duration-300 cursor-default
                 opacity-0 translate-y-4"
      style={{
        animation: visible ? `statFadeIn 0.6s ease forwards ${index * 150}ms` : undefined,
        willChange: 'transform, opacity',
      }}
    >
      <div className="stat-number text-4xl font-black text-amber-300 mb-1 tabular-nums">
        {display}{suffix}
      </div>
      <div className="text-sm text-green-100 font-medium">{label}</div>
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((s, i) => (
        <StatCard key={s.label} {...s} index={i} />
      ))}
    </div>
  );
}

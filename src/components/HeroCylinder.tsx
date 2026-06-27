'use client';

import Image from 'next/image';

const badges = [
  { val: '100%', label: 'Explosion Proof', cls: 'cylinder-badge-1 top-6 right-2 md:right-6' },
  { val: '20+',  label: 'Years Lifespan',  cls: 'cylinder-badge-2 top-1/2 right-0 md:right-2 -translate-y-1/2' },
  { val: '5.5kg',label: 'Light Weight',    cls: 'cylinder-badge-3 bottom-6 right-2 md:right-6' },
  { val: '12K',  label: 'Pressure Cycles', cls: 'cylinder-badge-4 bottom-6 left-2 md:left-6' },
];

export default function HeroCylinder() {
  return (
    <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[480px]">

      {/* Outer ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 rounded-full bg-amber-400/15 blur-3xl cylinder-glow-outer" />
      </div>

      {/* Inner tight glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-52 h-52 rounded-full bg-orange-500/20 blur-2xl cylinder-glow-inner" />
      </div>

      {/* Cylinder image */}
      <div className="relative z-10 cylinder-float w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
        <Image
          src="/images/10kg-cylinder-orange.jpg"
          alt="WAA Technologies 10kg Composite LPG Cylinder Orange"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
        />
      </div>

      {/* Floating stat badges */}
      {badges.map(({ val, label, cls }) => (
        <div
          key={label}
          className={`absolute z-20 ${cls} bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-3 py-2.5 text-center shadow-lg`}
        >
          <div className="text-amber-300 font-black text-xl leading-none">{val}</div>
          <div className="text-white text-[10px] font-medium mt-0.5 whitespace-nowrap">{label}</div>
        </div>
      ))}
    </div>
  );
}

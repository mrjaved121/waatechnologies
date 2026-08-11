'use client';
import { useState, useEffect } from 'react';

export default function FloatingFlag() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const expired = new Date() >= new Date('2026-08-15T00:00:00');
    if (!expired) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes flagSway {
          0%,100% { transform: skewY(0deg) skewX(0deg); }
          25%      { transform: skewY(1.8deg) skewX(0.5deg) scaleX(0.97); }
          75%      { transform: skewY(-1.8deg) skewX(-0.5deg) scaleX(1.03); }
        }
        @keyframes poleGlow {
          0%,100% { box-shadow: 0 0 4px rgba(200,200,200,0.3); }
          50%      { box-shadow: 0 0 8px rgba(200,200,200,0.6); }
        }
      `}</style>

      <div className="fixed bottom-8 right-6 z-40 flex items-end gap-0 select-none group">
        {/* Flagpole */}
        <div
          className="w-1.5 h-28 rounded-full"
          style={{
            background: 'linear-gradient(to right, #b0b8c4, #e2e8f0, #b0b8c4)',
            animation: 'poleGlow 3s ease-in-out infinite',
          }}
        />

        <div className="relative origin-left" style={{ animation: 'flagSway 2.8s ease-in-out infinite' }}>
          {/* Dismiss button — appears on hover */}
          <button
            onClick={() => setVisible(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-slate-700 text-white text-xs rounded-full
                       hidden group-hover:flex items-center justify-center z-10 leading-none transition-all shadow"
            aria-label="Dismiss flag"
          >
            ×
          </button>

          {/* Flag */}
          <div className="w-24 h-[58px] rounded-r shadow-xl overflow-hidden">
            <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* White hoist stripe */}
              <rect width="225" height="600" fill="white" />
              {/* Green field */}
              <rect x="225" width="675" height="600" fill="#01411C" />
              {/* Crescent — white circle */}
              <circle cx="525" cy="300" r="165" fill="white" />
              {/* Crescent — green cutout */}
              <circle cx="585" cy="300" r="133" fill="#01411C" />
              {/* Five-pointed star */}
              <polygon
                fill="white"
                points="665,222 676,255 711,255 683,276 693,309 665,289 637,309 647,276 619,255 654,255"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

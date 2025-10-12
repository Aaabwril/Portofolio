// components/AnimatedBackground.tsx
import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a10] via-[#0f1020] to-[#151531]" />

      {/* Moving geometric grid */}
      <div className="absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <svg
          className="w-full h-full animate-slow-pan"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 border border-white/20 rotate-45 blur-sm animate-float-slow left-[10%] top-[20%]" />
        <div className="absolute w-40 h-40 border border-primary/40 blur-[2px] animate-float-delayed right-[15%] bottom-[25%]" />
        <div className="absolute w-20 h-20 border border-accent/40 blur-[1px] animate-pulse-glow left-[40%] top-[60%]" />
      </div>

      {/* Particle glow points */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.3,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 8}s`,
          }}
        />
      ))}

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;

interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = "text-sand-offwhite", height = 24 }: LogoProps) {
  // SVG height is 40. Width is 360.
  // We'll calculate proportional width.
  const width = (height / 40) * 360;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 360 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-colors duration-300 ${className}`}
    >
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* D - Left Curve (⊃) */}
        <path d="M 30 5 C 10 5 10 35 30 35" />

        {/* U - Upward Curve (∪) */}
        <path d="M 50 5 C 50 25 75 25 75 5" />

        {/* N - Downward Curve (∩) */}
        <path d="M 95 35 C 95 15 120 15 120 35" />

        {/* E - Right Curve with Middle Bar (⊂ + -) */}
        <path d="M 160 35 C 140 35 140 5 160 5" />
        <path d="M 143 20 L 157 20" />

        {/* B - Brutalist B */}
        <path d="M 180 5 L 180 35" />
        <path d="M 180 5 C 198 5 198 20 180 20" />
        <path d="M 180 20 C 200 20 200 35 180 35" />

        {/* O - Monolithic Circle */}
        <circle cx="230" cy="20" r="15" strokeWidth="4" fill="none" />

        {/* R - Monolithic R */}
        <path d="M 265 5 L 265 35" />
        <path d="M 265 5 C 283 5 283 20 265 20" />
        <path d="M 265 20 L 285 35" />

        {/* N - Downward Curve (∩) */}
        <path d="M 305 35 C 305 15 330 15 330 35" />
      </g>
      
      {/* Small glowing spice-gold dot at the end */}
      <circle cx="350" cy="28" r="4" fill="#D89B4A" className="animate-pulse-slow shadow-[0_0_8px_#D89B4A]" />
    </svg>
  );
}

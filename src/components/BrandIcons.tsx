export function JerrycanIcon({ className = 'w-5 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="14.5" y="1" width="4.5" height="2.8" rx="0.8" fill="#3FBD92" />
      <path
        d="M5 5.2C5 4.0 5.9 3.2 7 3.2H18.2C19.8 3.2 21 4.4 21 6V26.5C21 27.9 19.9 29 18.5 29H5.5C4.1 29 3 27.9 3 26.5V9.2C3 7.8 4 6.2 5 5.2Z"
        fill="#3FBD92"
      />
      <rect x="6.5" y="5.4" width="6.2" height="2.2" rx="0.5" fill="#1E1B6B" />
      <path
        d="M6.8 11.4L17.2 24.4M17.2 11.4L6.8 24.4"
        stroke="#FFFFFF"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <rect x="9.6" y="15.4" width="4.8" height="5" rx="0.5" fill="#3FBD92" stroke="#1E1B6B" strokeWidth="1.2" />
    </svg>
  );
}

export function DarkJerrycanBadge({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <div className={`${className} rounded-[6px] bg-[#3FBD92] flex items-center justify-center shrink-0 shadow-sm`} aria-hidden="true">
      <svg viewBox="0 0 24 30" fill="none" className="w-5 h-6">
        <rect x="14.5" y="1" width="4.5" height="2.8" rx="0.8" fill="#1E1B6B" />
        <path
          d="M5 5.2C5 4.0 5.9 3.2 7 3.2H18.2C19.8 3.2 21 4.4 21 6V26.5C21 27.9 19.9 29 18.5 29H5.5C4.1 29 3 27.9 3 26.5V9.2C3 7.8 4 6.2 5 5.2Z"
          fill="#1E1B6B"
        />
        <rect x="6.5" y="5.4" width="6.2" height="2.2" rx="0.5" fill="#3FBD92" />
        <path
          d="M6.8 11.4L17.2 24.4M17.2 11.4L6.8 24.4"
          stroke="#3FBD92"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <rect x="9.6" y="15.4" width="4.8" height="5" rx="0.5" fill="#1E1B6B" stroke="#3FBD92" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

export function WaterDropIcon({ className = 'w-3.5 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M8 1.4C8 1.4 2 8.2 2 12.6C2 16 4.7 18.6 8 18.6C11.3 18.6 14 16 14 12.6C14 8.2 8 1.4 8 1.4Z"
        fill="#1E1B6B"
        stroke="#1E1B6B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5.4 12.8C5.4 14.3 6.5 15.5 8 15.7" stroke="#3FBD92" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function YellowHeartIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M10 16.5L8.7 15.3C4.1 11.1 1.2 8.4 1.2 5.2C1.2 2.6 3.2 0.8 5.8 0.8C7.3 0.8 8.8 1.5 10 2.7C11.2 1.5 12.7 0.8 14.2 0.8C16.8 0.8 18.8 2.6 18.8 5.2C18.8 8.4 15.9 11.1 11.3 15.3L10 16.5Z"
        fill="#3FBD92"
        stroke="#1E1B6B"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HundredPercentRing({ className = 'w-24 h-24' }: { className?: string }) {
  return (
    <div className={`relative ${className} flex items-center justify-center shrink-0`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r="42" fill="none" stroke="#1E1B6B" strokeOpacity="0.12" strokeWidth="6" />
        <circle
          className="otoo-ring-fill"
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#3FBD92"
          strokeWidth="6"
          strokeDasharray="264 264"
          strokeDashoffset="264"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-sans text-[#1E1B6B]">
        <span className="text-[27px] leading-none font-extrabold tracking-tight tabular-nums">100</span>
        <span className="text-[13px] -mt-2.5 ml-0.5 font-bold">%</span>
      </div>
    </div>
  );
}

export function ImpactEnvelopeIllustration({ className = 'w-16 h-14' }: { className?: string }) {
  return (
    <svg viewBox="0 0 76 62" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <g transform="rotate(-11 32 34)">
        <rect x="8" y="20" width="46" height="31" rx="2" fill="#E8F7F0" stroke="#1E1B6B" strokeWidth="1.7" />
        <path d="M15 24V9.5C15 8.7 15.7 8 16.5 8H45.5C46.3 8 47 8.7 47 9.5V24" fill="#FFFFFF" stroke="#1E1B6B" strokeWidth="1.7" />
        <path d="M31 24.5L26 20C23.8 18 24.4 14.5 27.1 14.5C28.7 14.5 30 15.4 31 16.6C32 15.4 33.3 14.5 34.9 14.5C37.6 14.5 38.2 18 36 20L31 24.5Z" fill="#3FBD92" stroke="#1E1B6B" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 21L31 37L54 21" stroke="#1E1B6B" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8 50L24 35M54 50L38 35" stroke="#1E1B6B" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <path d="M62 24C66 22 69 20 71 17" stroke="#1E1B6B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M63 31C67 30 70 29 73 27" stroke="#1E1B6B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GhanaCediCoin({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14.5" fill="#FAF7F0" stroke="#3FBD92" strokeWidth="2.5" />
      <circle cx="16" cy="16" r="11" fill="#3FBD92" fillOpacity="0.12" stroke="#1E1B6B" strokeWidth="1" strokeDasharray="2 2" />
      <path
        d="M19.5 10.5C18.6 9.8 17.4 9.5 16 9.5C12.4 9.5 10.2 12.2 10.2 16C10.2 19.8 12.4 22.5 16 22.5C17.5 22.5 18.7 22.1 19.6 21.4"
        stroke="#1E1B6B"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <line x1="8.5" y1="16" x2="16.5" y2="16" stroke="#1E1B6B" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function GhanaCediIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center font-bold font-mono ${className}`} aria-hidden="true">
      ₵
    </span>
  );
}

export function MedicalCrossIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="9" y="3" width="6" height="18" rx="1.5" fill="#3FBD92" />
      <rect x="3" y="9" width="18" height="6" rx="1.5" fill="#3FBD92" />
      <rect x="9.5" y="3.5" width="5" height="17" rx="1" stroke="#1E1B6B" strokeWidth="1" />
      <rect x="3.5" y="9.5" width="17" height="5" rx="1" stroke="#1E1B6B" strokeWidth="1" />
    </svg>
  );
}

export function SchoolBuildingIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M12 3L2 8L12 13L22 8L12 3Z" fill="#3FBD92" stroke="#1E1B6B" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 10.5V17C6 18.5 8.7 20 12 20C15.3 20 18 18.5 18 17V10.5" stroke="#1E1B6B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 8V15" stroke="#3FBD92" strokeWidth="2" strokeLinecap="round" />
      <circle cx="22" cy="15.5" r="1.5" fill="#1E1B6B" />
    </svg>
  );
}

export function GraduationCapIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M12 3L2 8L12 13L22 8L12 3Z" fill="#3FBD92" stroke="#1E1B6B" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 10.5V17C6 18.5 8.7 20 12 20C15.3 20 18 18.5 18 17V10.5" stroke="#1E1B6B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="8" x2="22" y2="15" stroke="#1E1B6B" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function StemFlaskIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M9 3H15" stroke="#1E1B6B" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M10 3V8L4.5 18C3.8 19.3 4.7 21 6.2 21H17.8C19.3 21 20.2 19.3 19.5 18L14 8V3" stroke="#1E1B6B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 15H17.5" stroke="#3FBD92" strokeWidth="2" strokeLinecap="round" />
      <circle cx="10" cy="17" r="1" fill="#3FBD92" />
      <circle cx="13" cy="18" r="1.5" fill="#3FBD92" />
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

export function ImpactEnvelopeIllustration({ className = 'w-16 h-16' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="8" y="16" width="48" height="34" rx="4" fill="#FAF7F0" stroke="#1E1B6B" strokeWidth="2.5" />
      <path d="M8 20L32 36L56 20" stroke="#3FBD92" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="32" cy="36" r="6" fill="#3FBD92" />
      <path d="M30 36L31.5 37.5L34 35" stroke="#1E1B6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Backwards-compatible aliases so any residual imports don't crash
export const JerrycanIcon = GhanaCediCoin;
export const DarkJerrycanBadge = GhanaCediCoin;
export const WaterDropIcon = GhanaCediCoin;

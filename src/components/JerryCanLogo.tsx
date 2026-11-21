export function JerryCanIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Jerry can body */}
      <rect x="5" y="6" width="14" height="16" rx="2" fill="#FFC907" />
      {/* Cap & Handle */}
      <rect x="8" y="2" width="8" height="4" rx="1" fill="#FFC907" />
      <path
        d="M9 3H15"
        stroke="#111111"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Jerry can cross indentation */}
      <path
        d="M8 9L16 19M16 9L8 19"
        stroke="#EBB400"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CharityWaterLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <JerryCanIcon className="w-8 h-8 shrink-0" />
      <span className="font-extrabold text-xl tracking-tight text-cw-black flex items-baseline">
        charity<span className="text-cw-black font-black">:</span>&nbsp;water
      </span>
    </div>
  );
}

export function SmoothieArt() {
  return (
    <svg viewBox="0 0 200 250" className="smoothie-art" aria-hidden="true">
      <path
        d="M132 34c16-18 34-18 42-8"
        fill="none"
        stroke="#3A2A22"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M118 42l28-20" stroke="#F27A1A" strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="100" cy="52" rx="64" ry="14" fill="#F6F0E6" stroke="#3A2A22" strokeWidth="3" />
      <path
        d="M40 52h120c3 12-10 20-22 20H62c-12 0-25-8-22-20z"
        fill="#fff"
        stroke="#3A2A22"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M56 70h88l-12 148a30 16 0 0 1-64 0z"
        fill="#fff"
        stroke="#3A2A22"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <defs>
        <clipPath id="smoothie-clip">
          <path d="M62 86h76l-9 124a22 12 0 0 1-58 0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#smoothie-clip)">
        <rect x="40" y="108" width="130" height="150" fill="#FF7A32" />
        <path d="M40 124c22 18 34 6 54 16s32 4 56-8v-28H40z" fill="#FFB15A" />
        <path
          d="M52 150c22 12 28-10 52 0s30 14 48-6"
          fill="none"
          stroke="#FFE08A"
          strokeWidth="9"
          strokeLinecap="round"
          opacity="0.75"
        />
        <g fill="#F4FBFF" stroke="#3A2A22" strokeWidth="2">
          <rect x="70" y="108" width="18" height="13" rx="3" transform="rotate(-12 79 114)" />
          <rect x="108" y="112" width="16" height="12" rx="3" transform="rotate(14 116 118)" />
        </g>
        <circle cx="76" cy="198" r="8" fill="#E4374C" stroke="#3A2A22" strokeWidth="2" />
        <circle cx="124" cy="206" r="7" fill="#3D4ED0" stroke="#3A2A22" strokeWidth="2" />
        <ellipse cx="100" cy="214" rx="9" ry="5" fill="#FFE14A" stroke="#3A2A22" strokeWidth="2" />
      </g>
      <path
        d="M72 88c-2 46-4 90-1 120"
        fill="none"
        stroke="#fff"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.75"
      />
      <circle cx="48" cy="128" r="3.2" fill="#D7E7F5" stroke="#3A2A22" strokeWidth="1.5" />
      <circle cx="154" cy="156" r="2.6" fill="#D7E7F5" stroke="#3A2A22" strokeWidth="1.5" />
      <circle cx="146" cy="188" r="2.2" fill="#D7E7F5" stroke="#3A2A22" strokeWidth="1.4" />
    </svg>
  )
}

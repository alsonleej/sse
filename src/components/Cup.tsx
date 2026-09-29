type Props = {
  filling: boolean
}

export function Cup({ filling }: Props) {
  return (
    <svg viewBox="0 0 160 210" className="cup" aria-hidden="true">
      <defs>
        <clipPath id="mixie-cup">
          <path d="M46 36h68l-8 140a24 14 0 0 1-52 0z" />
        </clipPath>
      </defs>
      <path
        d="M46 36h68l-8 140a24 14 0 0 1-52 0z"
        fill="#fff"
        stroke="#3A2A22"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <g clipPath="url(#mixie-cup)">
        <g className={filling ? 'cup-fill cup-fill-rise' : 'cup-fill'}>
          <rect x="30" y="70" width="100" height="130" fill="#FF8A1A" />
          <path d="M30 78c12 8 20 8 32 0s22-8 34 0 22 8 34 0v-20H30z" fill="#FFB15A" />
          <circle cx="62" cy="120" r="7" fill="#E4374C" />
          <circle cx="96" cy="138" r="6" fill="#FFE14A" />
          <circle cx="74" cy="156" r="5" fill="#5E9A3C" />
        </g>
      </g>
      <path d="M58 28h44" stroke="#3A2A22" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

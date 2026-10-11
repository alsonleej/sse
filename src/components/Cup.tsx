import { useId, useLayoutEffect, useRef } from 'react'

type Props = {
  filling: boolean
}

const DROP = 145
const RISE_MS = 4400

export function Cup({ filling }: Props) {
  const clipId = `cup-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
  const liquidRef = useRef<SVGGElement>(null)

  useLayoutEffect(() => {
    const liquid = liquidRef.current
    if (!liquid) return
    if (!filling) {
      liquid.removeAttribute('transform')
      return
    }

    liquid.setAttribute('transform', `translate(0 ${DROP})`)
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / RISE_MS)
      const y = DROP * (1 - t * t)
      liquid.setAttribute('transform', `translate(0 ${y.toFixed(2)})`)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [filling])

  return (
    <svg viewBox="0 0 160 210" className="cup" aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
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
      <g clipPath={`url(#${clipId})`}>
        <g ref={liquidRef}>
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

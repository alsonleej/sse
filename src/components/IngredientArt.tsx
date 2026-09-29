import type { ReactElement } from 'react'
import type { IngredientId } from '../config'

function Face({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx="-9" cy="0" r="2.5" fill="#3A2A22" />
      <circle cx="9" cy="0" r="2.5" fill="#3A2A22" />
      <path
        d="M-8 8c2.6 5 13.4 5 16 0"
        fill="none"
        stroke="#3A2A22"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </g>
  )
}

function Strawberry() {
  return (
    <>
      <ellipse cx="60" cy="104" rx="26" ry="5" fill="#3A2A22" opacity="0.08" />
      <path
        d="M60 36c16 6 30 24 28 46-3 24-14 36-28 36S35 106 32 82C30 60 44 42 60 36z"
        fill="#E4374C"
        stroke="#3A2A22"
        strokeWidth="2.5"
      />
      <path d="M48 48c8 4 12 16 8 30" fill="none" stroke="#FF8A96" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <g fill="#FFE08A">
        <ellipse cx="48" cy="62" rx="1.6" ry="2.4" transform="rotate(-25 48 62)" />
        <ellipse cx="62" cy="58" rx="1.6" ry="2.4" transform="rotate(15 62 58)" />
        <ellipse cx="74" cy="68" rx="1.6" ry="2.4" transform="rotate(20 74 68)" />
        <ellipse cx="46" cy="78" rx="1.6" ry="2.4" transform="rotate(-10 46 78)" />
        <ellipse cx="60" cy="76" rx="1.6" ry="2.4" />
        <ellipse cx="72" cy="84" rx="1.6" ry="2.4" transform="rotate(12 72 84)" />
        <ellipse cx="54" cy="90" rx="1.6" ry="2.4" transform="rotate(-18 54 90)" />
      </g>
      <path d="M60 36c-6-10-2-18 2-22 2 8 8 10 14 8-6 2-10 8-16 14z" fill="#2F8A3A" stroke="#3A2A22" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M58 34c-10-2-16-10-16-14 8 0 12 4 16 10 2-8 8-14 16-16-2 8-6 14-16 20z" fill="#46A84E" stroke="#3A2A22" strokeWidth="2.2" strokeLinejoin="round" />
      <Face x={58} y={72} />
    </>
  )
}

function Banana() {
  return (
    <>
      <ellipse cx="62" cy="106" rx="22" ry="5" fill="#3A2A22" opacity="0.08" />
      <g transform="rotate(-28 62 66)">
        <path
          d="M50 22c12 0 30 12 34 40 4 24-2 44-14 52-8 6-16 2-18-6-2-18 0-36-8-54-4-10-4-26 6-32z"
          fill="#FFE14A"
          stroke="#3A2A22"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M58 32c3 12 3 22 0 32" fill="none" stroke="#FFF3A8" strokeWidth="4" strokeLinecap="round" />
        <path d="M64 18c3 7 1 10-4 11" fill="none" stroke="#7A4E22" strokeWidth="3" strokeLinecap="round" />
        <path d="M66 112c4 7 12 8 16 2" fill="none" stroke="#C9842A" strokeWidth="3" strokeLinecap="round" />
        <Face x={64} y={68} />
      </g>
    </>
  )
}

function Mango() {
  return (
    <>
      <ellipse cx="62" cy="104" rx="26" ry="5" fill="#3A2A22" opacity="0.08" />
      <path
        d="M48 34c20-10 40 2 42 24 4 28-6 52-24 58-20 6-36-8-38-30-2-22 4-44 20-52z"
        fill="#FF9A1A"
        stroke="#3A2A22"
        strokeWidth="2.5"
      />
      <path d="M58 42c10 4 16 16 14 28" fill="none" stroke="#FFD27A" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
      <path d="M78 30c8-12 18-14 22-12-8 2-12 8-14 16-6-2-8-4-8-4z" fill="#3FA34A" stroke="#3A2A22" strokeWidth="2.2" strokeLinejoin="round" />
      <ellipse cx="52" cy="78" rx="7" ry="5" fill="#FF6A3D" opacity="0.35" />
      <Face x={62} y={70} />
    </>
  )
}

function Blueberry() {
  return (
    <>
      <ellipse cx="60" cy="104" rx="24" ry="5" fill="#3A2A22" opacity="0.08" />
      <circle cx="60" cy="70" r="34" fill="#3D4ED0" stroke="#3A2A22" strokeWidth="2.5" />
      <ellipse cx="48" cy="58" rx="10" ry="7" fill="#8EA0FF" opacity="0.45" />
      <path d="M60 36c-2-8 2-14 6-16-2 6 0 10 4 12-6 0-8 2-10 4z" fill="#3FA34A" stroke="#3A2A22" strokeWidth="2" strokeLinejoin="round" />
      <path d="M52 40c-6-6-4-12 0-14 2 6 6 8 8 8-4 2-6 4-8 6z" fill="#5CBC62" stroke="#3A2A22" strokeWidth="2" strokeLinejoin="round" />
      <Face x={60} y={74} />
    </>
  )
}

function Spinach() {
  return (
    <>
      <ellipse cx="60" cy="106" rx="22" ry="5" fill="#3A2A22" opacity="0.08" />
      <path
        d="M60 24c22 8 36 28 32 52-4 22-20 36-32 38-12-2-28-16-32-38C24 52 38 32 60 24z"
        fill="#4CAF50"
        stroke="#3A2A22"
        strokeWidth="2.5"
      />
      <path d="M60 30c-2 24-4 46-2 64" fill="none" stroke="#2E7D32" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M58 48c-12 4-18 8-22 14" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" />
      <path d="M62 60c12 2 18 8 24 12" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 76c-10 4-14 8-16 12" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="46" cy="58" rx="8" ry="5" fill="#B6E3A8" opacity="0.55" />
      <Face x={60} y={64} />
    </>
  )
}

function Orange() {
  return (
    <>
      <ellipse cx="60" cy="104" rx="26" ry="5" fill="#3A2A22" opacity="0.08" />
      <circle cx="60" cy="70" r="34" fill="#FF8C1A" stroke="#3A2A22" strokeWidth="2.5" />
      <path d="M60 40v56M40 58c8 8 14 10 20 10s12-2 20-10M42 82c8-6 12-8 18-8s10 2 18 8" fill="none" stroke="#F26A00" strokeWidth="1.6" opacity="0.55" />
      <circle cx="60" cy="46" r="3" fill="#F26A00" />
      <path d="M78 32c10-10 18-8 20-6-8 1-12 6-12 12-4-2-6-4-8-6z" fill="#46A84E" stroke="#3A2A22" strokeWidth="2.2" strokeLinejoin="round" />
      <ellipse cx="48" cy="60" rx="8" ry="5" fill="#FFD7A1" opacity="0.45" />
      <Face x={60} y={74} />
    </>
  )
}

function Ginger() {
  return (
    <>
      <ellipse cx="60" cy="106" rx="30" ry="5" fill="#3A2A22" opacity="0.08" />
      <g fill="#E2A45C" stroke="#3A2A22" strokeWidth="2.5">
        <ellipse cx="60" cy="76" rx="30" ry="16" />
        <ellipse cx="34" cy="64" rx="14" ry="12" />
        <ellipse cx="84" cy="62" rx="16" ry="13" />
        <ellipse cx="96" cy="80" rx="11" ry="10" />
        <circle cx="46" cy="50" r="8" />
      </g>
      <path d="M40 72c8 1 14 2 20 0" fill="none" stroke="#F6D7A8" strokeWidth="3" strokeLinecap="round" />
      <Face x={60} y={76} />
    </>
  )
}

function Avocado() {
  return (
    <>
      <ellipse cx="60" cy="106" rx="24" ry="5" fill="#3A2A22" opacity="0.08" />
      <path
        d="M60 22c18 6 30 28 28 50-2 24-14 40-28 42-14-2-26-18-28-42  -2-22 10-44 28-50z"
        fill="#5E9A3C"
        stroke="#3A2A22"
        strokeWidth="2.5"
      />
      <path
        d="M60 40c10 4 16 16 15 28-1 14-8 24-15 26-7-2-14-12-15-26  -1-12 5-24 15-28z"
        fill="#D7ECA8"
        stroke="#3A2A22"
        strokeWidth="2"
      />
      <circle cx="60" cy="68" r="10" fill="#8A4E2A" stroke="#3A2A22" strokeWidth="2" />
      <path d="M60 22c2-6 6-8 8-8-2 4-2 6 0 8-4 0-6 0-8 0z" fill="#6B4428" stroke="#3A2A22" strokeWidth="1.8" strokeLinejoin="round" />
      <Face x={60} y={86} />
    </>
  )
}

function DateFruit() {
  return (
    <>
      <ellipse cx="60" cy="104" rx="22" ry="5" fill="#3A2A22" opacity="0.08" />
      <ellipse cx="60" cy="70" rx="26" ry="34" fill="#8A4B2C" stroke="#3A2A22" strokeWidth="2.5" />
      <ellipse cx="60" cy="74" rx="16" ry="22" fill="#A8643E" />
      <path d="M48 58c6 4 8 8 6 14M66 54c4 6 4 12 2 18M52 84c6 3 10 3 16 0" fill="none" stroke="#6B381F" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
      <path d="M60 36c2-6 1-10 4-12" fill="none" stroke="#5C4030" strokeWidth="2" strokeLinecap="round" />
      <Face x={60} y={74} />
    </>
  )
}

const arts: Record<IngredientId, () => ReactElement> = {
  strawberry: Strawberry,
  banana: Banana,
  mango: Mango,
  blueberry: Blueberry,
  spinach: Spinach,
  orange: Orange,
  ginger: Ginger,
  avocado: Avocado,
  date: DateFruit,
}

export function IngredientArt({ id }: { id: IngredientId }) {
  const Draw = arts[id]
  return (
    <svg viewBox="0 0 120 120" className="art" aria-hidden="true">
      <Draw />
    </svg>
  )
}

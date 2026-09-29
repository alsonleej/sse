import type { ReactNode } from 'react'
import { LangToggle } from './LangToggle'

export function TopBar({ left }: { left?: ReactNode }) {
  return (
    <header className="topbar">
      <div className="topbar-slot">{left}</div>
      <div className="brand">mixa</div>
      <LangToggle />
    </header>
  )
}

import type { ReactNode } from 'react'
import { useI18n, type Lang } from '../i18n'

export function LangToggle() {
  const { lang, setLang, t } = useI18n()

  return (
    <div className="lang-toggle" role="group" aria-label={`${t.english} / ${t.swedish}`}>
      <FlagButton lang="en" label={t.english} active={lang === 'en'} onSelect={setLang}>
        <EnglandFlag />
      </FlagButton>
      <FlagButton lang="sv" label={t.swedish} active={lang === 'sv'} onSelect={setLang}>
        <SwedenFlag />
      </FlagButton>
    </div>
  )
}

function FlagButton({
  lang,
  label,
  active,
  onSelect,
  children,
}: {
  lang: Lang
  label: string
  active: boolean
  onSelect: (lang: Lang) => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      className={active ? 'flag-btn flag-on' : 'flag-btn'}
      aria-label={label}
      aria-pressed={active}
      onClick={() => onSelect(lang)}
    >
      {children}
    </button>
  )
}

function EnglandFlag() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <clipPath id="flag-en">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-en)">
        <rect width="32" height="32" fill="#fff" />
        <rect x="13" y="0" width="6" height="32" fill="#CF142B" />
        <rect x="0" y="13" width="32" height="6" fill="#CF142B" />
      </g>
    </svg>
  )
}

function SwedenFlag() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <clipPath id="flag-sv">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-sv)">
        <rect width="32" height="32" fill="#006AA7" />
        <rect x="9" y="0" width="6" height="32" fill="#FECC00" />
        <rect x="0" y="13" width="32" height="6" fill="#FECC00" />
      </g>
    </svg>
  )
}

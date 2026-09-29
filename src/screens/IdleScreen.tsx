import { BRAND, ingredients } from '../config'
import { IngredientArt } from '../components/IngredientArt'
import { LangToggle } from '../components/LangToggle'
import { useI18n } from '../i18n'

type Props = {
  onStart: () => void
}

export function IdleScreen({ onStart }: Props) {
  const { t } = useI18n()

  return (
    <div className="idle-screen">
      <div className="idle-lang">
        <LangToggle />
      </div>
      <button type="button" className="idle" onClick={onStart}>
        <p className="idle-kicker">{t.tapToStart}</p>
        <h1>{BRAND}</h1>
        <p className="idle-tag">{t.tagline}</p>
        <div className="idle-fruits">
          {ingredients.map((item) => (
            <IngredientArt key={item.id} id={item.id} />
          ))}
        </div>
      </button>
    </div>
  )
}

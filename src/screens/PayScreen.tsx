import { IngredientArt } from '../components/IngredientArt'
import { SmoothieArt } from '../components/SmoothieArt'
import { TopBar } from '../components/TopBar'
import { boosters } from '../config'
import { useI18n } from '../i18n'
import { chosenIngredients, priceOf, type Order } from '../order'

type Props = {
  order: Order
  onBack: () => void
  onPay: () => void
}

export function PayScreen({ order, onBack, onPay }: Props) {
  const { t } = useI18n()
  const booster = boosters.find((item) => item.id === order.booster)
  const lines = chosenIngredients(order.portions)

  return (
    <div className="stage">
      <TopBar
        left={
          <button type="button" className="text-btn" onClick={onBack}>
            {t.back}
          </button>
        }
      />

      <div className="stage-body">
        <ul className="lines">
          <li>
            <span>{t.oat}</span>
            <span>{t.base}</span>
          </li>
          {lines.map((item) => (
            <li key={item.id}>
              <span>{t.ingredient[item.id]}</span>
              <span>×{order.portions[item.id]}</span>
            </li>
          ))}
          <li>
            <span>{t.size}</span>
            <span>{order.size} ml</span>
          </li>
          <li>
            <span>{booster ? t.boosterName[booster.id] : t.booster}</span>
            <span>{booster ? '+15 kr' : t.none}</span>
          </li>
        </ul>
        {booster && 'allergen' in booster ? <p className="allergen">{t.milk}</p> : null}

        <div className="picked">
          {lines.map((item) => (
            <article key={item.id} className="tile tile-on summary-tile">
              <div className="tile-head">
                <h3>
                  {t.ingredient[item.id]} x{order.portions[item.id]}
                </h3>
              </div>
              <div className="tile-art">
                <IngredientArt id={item.id} />
              </div>
            </article>
          ))}
        </div>

        <figure className="smoothie">
          <SmoothieArt />
          <figcaption className="smoothie-label">
            <span className="smoothie-brand">mixa</span>
            <span className="smoothie-size">{order.size}ml</span>
          </figcaption>
        </figure>
      </div>

      <footer className="dock">
        <button type="button" className="pay pay-tap" onClick={onPay}>
          <span className="tap-copy">
            <Contactless />
            {t.tapPay}
          </span>
          <strong>{priceOf(order)} kr</strong>
        </button>
        <p className="fine">{t.prototype}</p>
      </footer>
    </div>
  )
}

function Contactless() {
  return (
    <svg viewBox="0 0 32 32" className="contactless" aria-hidden="true">
      <path d="M8 16c2-2 2-6 0-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M13 16c3-3 3-9 0-12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M18 16c4-4 4-12 0-16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

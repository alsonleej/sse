import { Cup } from '../components/Cup'
import { TopBar } from '../components/TopBar'
import { drinkName, useI18n } from '../i18n'
import type { Order } from '../order'

type Props = {
  order: Order
  onReset: () => void
}

export function ReadyScreen({ order, onReset }: Props) {
  const { t } = useI18n()
  const booster = order.booster

  return (
    <div className="stage stage-center">
      <TopBar />
      <button type="button" className="stage-body center-copy ready" onClick={onReset}>
        <Cup filling={false} />
        <h2>
          {t.readyLead} {drinkName(order.portions, t)} {t.ready}
        </h2>
        <p className="section-note">
          {order.size} ml{booster ? ` · ${t.boosterName[booster]}` : ''}
        </p>
        <p className="idle-kicker">{t.again}</p>
      </button>
    </div>
  )
}

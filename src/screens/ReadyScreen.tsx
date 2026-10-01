import { Cup } from '../components/Cup'
import { TopBar } from '../components/TopBar'
import { CUP_ML } from '../config'
import { drinkName, useI18n } from '../i18n'
import type { Order } from '../order'

type Props = {
  order: Order
  onReset: () => void
}

export function ReadyScreen({ order, onReset }: Props) {
  const { t } = useI18n()
  const boosterNames = order.boosters.map((id) => t.boosterName[id])

  return (
    <div className="stage stage-center">
      <TopBar />
      <button type="button" className="stage-body center-copy ready" onClick={onReset}>
        <Cup filling={false} />
        <h2>
          {t.readyLead} {drinkName(order.portions, t)} {t.ready}
        </h2>
        <p className="section-note">
          {CUP_ML} ml{boosterNames.length > 0 ? ` · ${boosterNames.join(', ')}` : ''}
        </p>
        <p className="idle-kicker">{t.again}</p>
      </button>
    </div>
  )
}

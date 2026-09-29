import { useEffect } from 'react'
import { Cup } from '../components/Cup'
import { TopBar } from '../components/TopBar'
import { drinkName, useI18n } from '../i18n'
import type { Order } from '../order'

type Props = {
  order: Order
  onDone: () => void
}

export function BlendScreen({ order, onDone }: Props) {
  const { t } = useI18n()

  useEffect(() => {
    const timer = window.setTimeout(onDone, 4800)
    return () => window.clearTimeout(timer)
  }, [onDone])

  return (
    <div className="stage stage-center">
      <TopBar />
      <div className="stage-body center-copy">
        <Cup filling />
        <h2>
          {t.blending} {drinkName(order.portions, t)}
        </h2>
        <p className="section-note">{t.about60}</p>
      </div>
    </div>
  )
}

import type { IngredientId } from '../config'
import { IngredientArt } from './IngredientArt'

type Props = {
  id: IngredientId
  name: string
  count: number
  canAdd: boolean
  lessLabel: string
  moreLabel: string
  onChange: (value: number) => void
}

export function IngredientTile({ id, name, count, canAdd, lessLabel, moreLabel, onChange }: Props) {
  const locked = !canAdd && count === 0
  const className = ['tile', count > 0 ? 'tile-on' : '', locked ? 'tile-locked' : ''].filter(Boolean).join(' ')

  return (
    <article className={className}>
      <div className="tile-head">
        <h3>{name}</h3>
        <div className="stepper">
          <button type="button" aria-label={lessLabel} disabled={count === 0} onClick={() => onChange(count - 1)}>
            −
          </button>
          <span aria-live="polite">{count}</span>
          <button type="button" aria-label={moreLabel} disabled={!canAdd} onClick={() => onChange(count + 1)}>
            +
          </button>
        </div>
      </div>
      <div className="tile-art">
        <IngredientArt id={id} />
      </div>
    </article>
  )
}

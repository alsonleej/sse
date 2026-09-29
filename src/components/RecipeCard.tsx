import { ingredients, type IngredientId } from '../config'
import { IngredientArt } from './IngredientArt'

type Props = {
  name: string
  portions: Partial<Record<IngredientId, number>>
  selected: boolean
  onSelect: () => void
}

export function RecipeCard({ name, portions, selected, onSelect }: Props) {
  const used = ingredients.filter((item) => (portions[item.id] ?? 0) > 0)

  return (
    <button type="button" className={selected ? 'recipe recipe-on' : 'recipe'} onClick={onSelect}>
      <span className="recipe-name">{name}</span>
      <span className="recipe-arts">
        {used.map((item) => (
          <IngredientArt key={item.id} id={item.id} />
        ))}
      </span>
    </button>
  )
}

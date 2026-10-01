import {
  BOOSTER_PRICE,
  type BoosterId,
  type IngredientId,
  CUP_PRICE,
  ingredients,
  MAX_TOTAL,
  recipes,
} from './config'

export type Portions = Record<IngredientId, number>

export type Order = {
  portions: Portions
  boosters: BoosterId[]
}

export function emptyPortions(): Portions {
  return Object.fromEntries(ingredients.map((item) => [item.id, 0])) as Portions
}

export function initialOrder(): Order {
  return { portions: emptyPortions(), boosters: [] }
}

export function portionsFrom(partial: Partial<Portions>): Portions {
  return { ...emptyPortions(), ...partial }
}

export function totalPortions(portions: Portions): number {
  return ingredients.reduce((sum, item) => sum + portions[item.id], 0)
}

export function withPortion(portions: Portions, id: IngredientId, value: number): Portions {
  const nextValue = Math.max(0, value)
  const nextTotal = totalPortions(portions) - portions[id] + nextValue
  if (nextTotal > MAX_TOTAL) return portions
  return { ...portions, [id]: nextValue }
}

export function matchingRecipe(portions: Portions) {
  return (
    recipes.find((recipe) =>
      ingredients.every((item) => (portions[item.id] ?? 0) === (recipe.portions[item.id] ?? 0)),
    ) ?? null
  )
}

export function hasFruit(portions: Portions): boolean {
  return ingredients.some((item) => portions[item.id] > 0)
}

export function toggleBooster(selected: BoosterId[], id: BoosterId): BoosterId[] {
  return selected.includes(id) ? selected.filter((item) => item !== id) : [...selected, id]
}

export function priceOf(order: Order): number {
  return CUP_PRICE + order.boosters.length * BOOSTER_PRICE
}

export function chosenIngredients(portions: Portions) {
  return ingredients.filter((item) => portions[item.id] > 0)
}

import {
  BOOSTER_PRICE,
  type BoosterId,
  type IngredientId,
  ingredients,
  MAX_TOTAL,
  recipes,
  SIZE_PRICES,
  type Size,
} from './config'

export type Portions = Record<IngredientId, number>

export type Order = {
  portions: Portions
  size: Size
  booster: BoosterId | null
}

export function emptyPortions(): Portions {
  return Object.fromEntries(ingredients.map((item) => [item.id, 0])) as Portions
}

export function initialOrder(): Order {
  return { portions: emptyPortions(), size: 400, booster: null }
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

export function priceOf(order: Order): number {
  return SIZE_PRICES[order.size] + (order.booster ? BOOSTER_PRICE : 0)
}

export function chosenIngredients(portions: Portions) {
  return ingredients.filter((item) => portions[item.id] > 0)
}

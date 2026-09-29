export const BRAND = 'Mixie'
export const TAGLINE = 'Fresh fuel in 60 seconds'
export const MAX_TOTAL = 3
export const SIZE_PRICES = { 300: 59, 400: 69 } as const
export const BOOSTER_PRICE = 15

export const ingredients = [
  { id: 'strawberry', name: 'Strawberry' },
  { id: 'banana', name: 'Banana' },
  { id: 'mango', name: 'Mango' },
  { id: 'blueberry', name: 'Blueberry' },
  { id: 'spinach', name: 'Spinach' },
  { id: 'orange', name: 'Orange' },
  { id: 'ginger', name: 'Ginger' },
  { id: 'avocado', name: 'Avocado' },
  { id: 'date', name: 'Date' },
] as const

export type IngredientId = (typeof ingredients)[number]['id']

export const boosters = [
  { id: 'creatine', name: 'Creatine' },
  { id: 'whey', name: 'Whey', allergen: 'Contains milk' },
  { id: 'magnesium', name: 'Magnesium' },
  { id: 'collagen', name: 'Collagen' },
] as const

export type BoosterId = (typeof boosters)[number]['id']
export type Size = keyof typeof SIZE_PRICES

type PortionMap = Partial<Record<IngredientId, number>>

export const recipes: { id: string; name: string; portions: PortionMap }[] = [
  { id: 'strawberry-banana', name: 'Strawberry-Banana', portions: { strawberry: 1, banana: 1 } },
  { id: 'mango-banana', name: 'Mango-Banana', portions: { mango: 1, banana: 1 } },
  { id: 'berry-power', name: 'Berry Power', portions: { blueberry: 1, strawberry: 1 } },
  { id: 'green', name: 'Green', portions: { mango: 1, banana: 1, spinach: 1 } },
  { id: 'ginger-zing', name: 'Ginger Zing', portions: { mango: 1, orange: 1, ginger: 1 } },
  { id: 'avo-oat', name: 'Avo-Oat', portions: { avocado: 1, banana: 1, date: 1 } },
]

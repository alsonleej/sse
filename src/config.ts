export const BRAND = 'Mixie'
export const TAGLINE = 'Fresh fuel in 60 seconds'
export const MAX_TOTAL = 3
export const CUP_ML = 350
export const CUP_PRICE = 59
export const BOOSTER_PRICE = 15

export const ingredients = [
  { id: 'apple', name: 'Apple' },
  { id: 'banana', name: 'Banana' },
  { id: 'strawberry', name: 'Strawberry' },
  { id: 'blueberry', name: 'Blueberry' },
  { id: 'orange', name: 'Orange' },
  { id: 'mango', name: 'Mango' },
] as const

export type IngredientId = (typeof ingredients)[number]['id']

export const boosters = [
  { id: 'creatine', name: 'Creatine' },
  { id: 'whey', name: 'Whey', allergen: 'Contains milk' },
  { id: 'magnesium', name: 'Magnesium' },
  { id: 'collagen', name: 'Collagen' },
] as const

export type BoosterId = (typeof boosters)[number]['id']

type PortionMap = Partial<Record<IngredientId, number>>

export const recipes: { id: string; name: string; portions: PortionMap }[] = [
  { id: 'strawberry-banana', name: 'Strawberry-Banana', portions: { strawberry: 1, banana: 1 } },
  { id: 'mango-banana', name: 'Mango-Banana', portions: { mango: 1, banana: 1 } },
  { id: 'berry-power', name: 'Berry Power', portions: { blueberry: 1, strawberry: 1 } },
  { id: 'apple-orange', name: 'Apple-Orange', portions: { apple: 1, orange: 1 } },
  { id: 'mango-orange', name: 'Mango-Orange', portions: { mango: 1, orange: 1 } },
  { id: 'apple-blueberry', name: 'Apple-Blueberry', portions: { apple: 1, blueberry: 1 } },
]

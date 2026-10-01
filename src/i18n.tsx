import { createContext, useContext, useState, type ReactNode } from 'react'
import type { BoosterId, IngredientId } from './config'
import { matchingRecipe, type Portions } from './order'

export type Lang = 'en' | 'sv'

const en = {
  tagline: 'Fresh fuel in 60 seconds',
  tapToStart: 'Tap to start',
  cancel: 'Cancel',
  back: 'Back',
  recipes: 'Recipes',
  build: 'Build your own Mixie',
  portionNote: 'Max 3 in total.',
  max: 'max 3',
  clear: 'Clear',
  noBooster: 'No booster',
  addIngredient: 'Add an ingredient',
  size: 'Size',
  booster: 'Booster',
  none: 'None',
  tapPay: 'Tap card or phone',
  prototype: 'Prototype. Nothing is charged.',
  blending: 'Blending your',
  about60: 'About 60 seconds',
  ready: 'is ready',
  readyLead: 'Your',
  again: 'Tap to start again',
  custom: 'Custom Mixie',
  milk: 'Contains milk',
  less: 'Less',
  more: 'More',
  english: 'English',
  swedish: 'Svenska',
  ingredient: {
    apple: 'Apple',
    banana: 'Banana',
    strawberry: 'Strawberry',
    blueberry: 'Blueberry',
    orange: 'Orange',
    mango: 'Mango',
  } satisfies Record<IngredientId, string>,
  boosterName: {
    creatine: 'Creatine',
    whey: 'Whey',
    magnesium: 'Magnesium',
    collagen: 'Collagen',
  } satisfies Record<BoosterId, string>,
  recipe: {
    'strawberry-banana': 'Strawberry-Banana',
    'mango-banana': 'Mango-Banana',
    'berry-power': 'Berry Power',
    'apple-orange': 'Apple-Orange',
    'mango-orange': 'Mango-Orange',
    'apple-blueberry': 'Apple-Blueberry',
  },
}

const sv: typeof en = {
  tagline: 'Färsk energi på 60 sekunder',
  tapToStart: 'Tryck för att starta',
  cancel: 'Avbryt',
  back: 'Tillbaka',
  recipes: 'Recept',
  build: 'Bygg din egen Mixie',
  portionNote: 'Max 3 totalt.',
  max: 'max 3',
  clear: 'Rensa',
  noBooster: 'Ingen booster',
  addIngredient: 'Välj en ingrediens',
  size: 'Storlek',
  booster: 'Booster',
  none: 'Ingen',
  tapPay: 'Blippa kort eller mobil',
  prototype: 'Prototyp. Inget dras.',
  blending: 'Blandar din',
  about60: 'Ungefär 60 sekunder',
  ready: 'är klar',
  readyLead: 'Din',
  again: 'Tryck för att börja om',
  custom: 'Egen Mixie',
  milk: 'Innehåller mjölk',
  less: 'Mindre',
  more: 'Mer',
  english: 'English',
  swedish: 'Svenska',
  ingredient: {
    apple: 'Äpple',
    banana: 'Banan',
    strawberry: 'Jordgubbe',
    blueberry: 'Blåbär',
    orange: 'Apelsin',
    mango: 'Mango',
  },
  boosterName: {
    creatine: 'Kreatin',
    whey: 'Vassle',
    magnesium: 'Magnesium',
    collagen: 'Kollagen',
  },
  recipe: {
    'strawberry-banana': 'Jordgubbe-banan',
    'mango-banana': 'Mango-banan',
    'berry-power': 'Bärpower',
    'apple-orange': 'Äpple-apelsin',
    'mango-orange': 'Mango-apelsin',
    'apple-blueberry': 'Äpple-blåbär',
  },
}

const copy = { en, sv }

type I18nValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: typeof en
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return <I18nContext.Provider value={{ lang, setLang, t: copy[lang] }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) throw new Error('useI18n must be used within I18nProvider')
  return value
}

export function drinkName(portions: Portions, t: typeof en) {
  const recipe = matchingRecipe(portions)
  if (!recipe) return t.custom
  return t.recipe[recipe.id as keyof typeof t.recipe]
}

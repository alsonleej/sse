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
  build: 'Build your own Mixa',
  oatNote: 'Oat drink in every cup. Max 3 in total.',
  max: 'max 3',
  clear: 'Clear',
  noBooster: 'No booster',
  addIngredient: 'Add an ingredient',
  oat: 'Oat drink',
  base: 'base',
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
  custom: 'Custom Mixa',
  milk: 'Contains milk',
  less: 'Less',
  more: 'More',
  english: 'English',
  swedish: 'Svenska',
  ingredient: {
    strawberry: 'Strawberry',
    banana: 'Banana',
    mango: 'Mango',
    blueberry: 'Blueberry',
    spinach: 'Spinach',
    orange: 'Orange',
    ginger: 'Ginger',
    avocado: 'Avocado',
    date: 'Date',
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
    green: 'Green',
    'ginger-zing': 'Ginger Zing',
    'avo-oat': 'Avo-Oat',
  },
}

const sv: typeof en = {
  tagline: 'Färsk energi på 60 sekunder',
  tapToStart: 'Tryck för att starta',
  cancel: 'Avbryt',
  back: 'Tillbaka',
  recipes: 'Recept',
  build: 'Bygg din egen Mixa',
  oatNote: 'Havredryck i varje kopp. Max 3 totalt.',
  max: 'max 3',
  clear: 'Rensa',
  noBooster: 'Ingen booster',
  addIngredient: 'Välj en ingrediens',
  oat: 'Havredryck',
  base: 'bas',
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
  custom: 'Egen Mixa',
  milk: 'Innehåller mjölk',
  less: 'Mindre',
  more: 'Mer',
  english: 'English',
  swedish: 'Svenska',
  ingredient: {
    strawberry: 'Jordgubbe',
    banana: 'Banan',
    mango: 'Mango',
    blueberry: 'Blåbär',
    spinach: 'Spenat',
    orange: 'Apelsin',
    ginger: 'Ingefära',
    avocado: 'Avokado',
    date: 'Dadel',
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
    green: 'Grön',
    'ginger-zing': 'Ingefära',
    'avo-oat': 'Avo-havre',
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

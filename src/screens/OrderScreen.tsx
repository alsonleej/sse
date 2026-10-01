import { boosters, ingredients, MAX_TOTAL, recipes, type BoosterId } from '../config'
import { IngredientTile } from '../components/IngredientTile'
import { RecipeCard } from '../components/RecipeCard'
import { TopBar } from '../components/TopBar'
import { drinkName, useI18n } from '../i18n'
import { hasFruit, matchingRecipe, portionsFrom, priceOf, totalPortions, type Order } from '../order'

type Props = {
  order: Order
  onPortion: (id: (typeof ingredients)[number]['id'], value: number) => void
  onRecipe: (portions: Order['portions']) => void
  onToggleBooster: (id: BoosterId) => void
  onClearBoosters: () => void
  onClear: () => void
  onPay: () => void
  onCancel: () => void
}

export function OrderScreen({
  order,
  onPortion,
  onRecipe,
  onToggleBooster,
  onClearBoosters,
  onClear,
  onPay,
  onCancel,
}: Props) {
  const { t } = useI18n()
  const ready = hasFruit(order.portions)
  const recipe = matchingRecipe(order.portions)
  const atMax = totalPortions(order.portions) >= MAX_TOTAL
  const hasWhey = order.boosters.includes('whey')

  return (
    <div className="order">
      <TopBar
        left={
          <button type="button" className="text-btn" onClick={onCancel}>
            {t.cancel}
          </button>
        }
      />

      <div className="order-scroll">
        <h2 className="section-title">{t.recipes}</h2>
        <div className="recipes">
          {recipes.map((item) => (
            <RecipeCard
              key={item.id}
              name={t.recipe[item.id as keyof typeof t.recipe]}
              portions={item.portions}
              selected={recipe?.id === item.id}
              onSelect={() => onRecipe(portionsFrom(item.portions))}
            />
          ))}
        </div>

        <div className="build-head">
          <div>
            <h2 className="section-title">{t.build}</h2>
            <p className="section-note">{t.portionNote}</p>
            {atMax ? <p className="max-note">{t.max}</p> : null}
          </div>
          <button type="button" className="text-btn" onClick={onClear} disabled={!ready}>
            {t.clear}
          </button>
        </div>

        <div className="ingredients">
          {ingredients.map((item) => (
            <IngredientTile
              key={item.id}
              id={item.id}
              name={t.ingredient[item.id]}
              count={order.portions[item.id]}
              canAdd={!atMax}
              lessLabel={`${t.less} ${t.ingredient[item.id]}`}
              moreLabel={`${t.more} ${t.ingredient[item.id]}`}
              onChange={(value) => onPortion(item.id, value)}
            />
          ))}
        </div>
      </div>

      <footer className="dock">
        <div className="boosters">
          <button
            type="button"
            className={order.boosters.length === 0 ? 'booster booster-on' : 'booster'}
            onClick={onClearBoosters}
          >
            {t.noBooster}
          </button>
          {boosters.map((item) => {
            const selected = order.boosters.includes(item.id)
            return (
              <button
                key={item.id}
                type="button"
                className={selected ? 'booster booster-on' : 'booster'}
                aria-pressed={selected}
                onClick={() => onToggleBooster(item.id)}
              >
                {t.boosterName[item.id]}
                <span>+15 kr</span>
              </button>
            )
          })}
        </div>
        {hasWhey ? <p className="allergen">{t.milk}</p> : null}

        <button type="button" className="pay" disabled={!ready} onClick={onPay}>
          <span>{ready ? drinkName(order.portions, t) : t.addIngredient}</span>
          <strong>{priceOf(order)} kr</strong>
        </button>
      </footer>
    </div>
  )
}

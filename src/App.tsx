import { useCallback, useReducer } from 'react'
import { type BoosterId, type IngredientId } from './config'
import { emptyPortions, hasFruit, initialOrder, type Order, type Portions, toggleBooster, withPortion } from './order'
import { I18nProvider } from './i18n'
import { BlendScreen } from './screens/BlendScreen'
import { IdleScreen } from './screens/IdleScreen'
import { OrderScreen } from './screens/OrderScreen'
import { PayScreen } from './screens/PayScreen'
import { ReadyScreen } from './screens/ReadyScreen'

type Screen = 'idle' | 'order' | 'pay' | 'blend' | 'ready'

type State = {
  screen: Screen
  order: Order
}

type Action =
  | { type: 'start' }
  | { type: 'setPortion'; id: IngredientId; value: number }
  | { type: 'applyRecipe'; portions: Portions }
  | { type: 'toggleBooster'; id: BoosterId }
  | { type: 'clearBoosters' }
  | { type: 'clear' }
  | { type: 'toPay' }
  | { type: 'backToOrder' }
  | { type: 'paid' }
  | { type: 'blended' }
  | { type: 'reset' }

const initialState: State = { screen: 'idle', order: initialOrder() }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'start':
      return { screen: 'order', order: initialOrder() }
    case 'setPortion':
      return {
        ...state,
        order: {
          ...state.order,
          portions: withPortion(state.order.portions, action.id, action.value),
        },
      }
    case 'applyRecipe':
      return { ...state, order: { ...state.order, portions: action.portions } }
    case 'toggleBooster':
      return {
        ...state,
        order: { ...state.order, boosters: toggleBooster(state.order.boosters, action.id) },
      }
    case 'clearBoosters':
      return { ...state, order: { ...state.order, boosters: [] } }
    case 'clear':
      return { ...state, order: { ...state.order, portions: emptyPortions() } }
    case 'toPay':
      if (!hasFruit(state.order.portions)) return state
      return { ...state, screen: 'pay' }
    case 'backToOrder':
      return { ...state, screen: 'order' }
    case 'paid':
      return { ...state, screen: 'blend' }
    case 'blended':
      return state.screen === 'blend' ? { ...state, screen: 'ready' } : state
    case 'reset':
      return initialState
  }
}

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const finishBlend = useCallback(() => dispatch({ type: 'blended' }), [])

  return (
    <I18nProvider>
    <main className="machine">
      {state.screen === 'idle' ? <IdleScreen onStart={() => dispatch({ type: 'start' })} /> : null}
      {state.screen === 'order' ? (
        <OrderScreen
          order={state.order}
          onPortion={(id, value) => dispatch({ type: 'setPortion', id, value })}
          onRecipe={(portions) => dispatch({ type: 'applyRecipe', portions })}
          onToggleBooster={(id) => dispatch({ type: 'toggleBooster', id })}
          onClearBoosters={() => dispatch({ type: 'clearBoosters' })}
          onClear={() => dispatch({ type: 'clear' })}
          onPay={() => dispatch({ type: 'toPay' })}
          onCancel={() => dispatch({ type: 'reset' })}
        />
      ) : null}
      {state.screen === 'pay' ? (
        <PayScreen
          order={state.order}
          onBack={() => dispatch({ type: 'backToOrder' })}
          onPay={() => dispatch({ type: 'paid' })}
        />
      ) : null}
      {state.screen === 'blend' ? <BlendScreen order={state.order} onDone={finishBlend} /> : null}
      {state.screen === 'ready' ? (
        <ReadyScreen order={state.order} onReset={() => dispatch({ type: 'reset' })} />
      ) : null}
    </main>
    </I18nProvider>
  )
}

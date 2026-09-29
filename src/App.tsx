import { useCallback, useReducer } from 'react'
import { type BoosterId, type IngredientId, type Size } from './config'
import { emptyPortions, hasFruit, initialOrder, type Order, type Portions, withPortion } from './order'
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
  | { type: 'setSize'; size: Size }
  | { type: 'setBooster'; booster: BoosterId | null }
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
    case 'setSize':
      return { ...state, order: { ...state.order, size: action.size } }
    case 'setBooster':
      return { ...state, order: { ...state.order, booster: action.booster } }
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
          onSize={(size) => dispatch({ type: 'setSize', size })}
          onBooster={(booster) => dispatch({ type: 'setBooster', booster })}
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

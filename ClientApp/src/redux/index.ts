import { CombinedState, combineReducers, configureStore, Reducer, Store } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import AppAction from './action'
import cardReducer from './cards/cardReducer'
import State from './state'

const rootReducer: Reducer<CombinedState<State>, AppAction> = combineReducers({
    cards: cardReducer,
})

const store: Store<State, AppAction> = configureStore({
    reducer: rootReducer,
    middleware: [thunk] as const,
    devTools: true
})

export default store
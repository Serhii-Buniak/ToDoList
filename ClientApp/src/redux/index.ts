import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './cards/cardReducer'

const reducers = {
    cards: cardsReducer
}

const store = configureStore({
    reducer: { ...reducers },
    devTools: true
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
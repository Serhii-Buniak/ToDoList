import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './cards/cardReducer'
import taskFormReducer from './taskForm/taskFormReducer'

const reducers = {
    cards: cardsReducer,
    taskForm: taskFormReducer,
}

const store = configureStore({
    reducer: { ...reducers },
    devTools: true
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
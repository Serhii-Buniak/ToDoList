import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Card } from "../../api/CardApi"
import { CardsAddAction, CardsChangeTaskComletedAction, CardsChangeTaskTextAction, CardsDeleteAction, CardsInitAction } from "./CardsThunks"

interface CardsState {
    list: Card[]
}

const initialState: CardsState = { list: [] }

export const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        init: (state, action: PayloadAction<CardsInitAction>) => {
            state.list = action.payload.cards;
        },
        changeTaskComleted: (state, action: PayloadAction<CardsChangeTaskComletedAction>) => {
            const { id, completed } = action.payload
            state.list.forEach(card => card.tasks
                .map(task => task.id === id
                    ? task.completed = completed
                    : task))

        },
        changeTaskText: (state, action: PayloadAction<CardsChangeTaskTextAction>) => {
            const { id, text } = action.payload
            state.list.forEach(card => card.tasks
                .map(task => task.id === id
                    ? task.text = text
                    : task
                )
            )
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            const id = action.payload
            state.list.forEach(card => card.tasks
                .filter(task => task.id !== id)
            )
        },
        delete: (state, action: PayloadAction<CardsDeleteAction>) => {
            const id = action.payload.id
            state.list = state.list.filter(card => card.id !== id)
        },
        add: (state, action: PayloadAction<CardsAddAction>) => {
            const card = action.payload.card
            state.list.push(card)
        },
        update: (state, action: PayloadAction<CardsAddAction>) => {
            const card = action.payload.card
            state.list[card.id] = card
        }
    }
})


export const cardsActions = cardsSlice.actions

export default cardsSlice.reducer
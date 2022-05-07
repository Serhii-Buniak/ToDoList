import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Card } from "../../api/CardApi"
import { CardsChangeTaskComletedAction, CardsChangeTaskTextAction, CardsDeleteAction, CardsInitAction } from "./CardsThunks"

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
                    : task))
        },
        delete: (state, action: PayloadAction<CardsDeleteAction>) => {
            const id = action.payload.id
            state.list = state.list.filter(card => card.id !== id)
        }
    },

});


export const cardsActions = cardsSlice.actions

console.log(cardsSlice.getInitialState)
export default cardsSlice.reducer
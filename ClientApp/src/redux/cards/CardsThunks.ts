import { createAsyncThunk } from "@reduxjs/toolkit";
import CardApi, { Card } from "../../api/CardApi";
import UserTaskApi from "../../api/UserTaskApi";
import { cardsActions } from "./cardReducer";


export interface CardsInitAction {
    cards: Card[]
}

export interface CardsChangeTaskComletedAction {
    id: number
    completed: boolean
}

export interface CardsChangeTaskTextAction {
    id: number
    text: string
}

export interface CardsDeleteAction {
    id: number
}
export interface CardsAddAction {
    card: Card
}

class CardsThunks {

    public readonly init = createAsyncThunk(
        'cards/init',
        async function (_, { dispatch }) {
            const response = await CardApi.getItems()
            const items = response.data
            dispatch(cardsActions.init({ cards: items }))
        }
    )

    public readonly changeTaskCompleted = createAsyncThunk(
        'cards/changeTaskComleted',
        async function (props: CardsChangeTaskComletedAction, thunkAPI) {
            await UserTaskApi.changeCompleted(props.id, props.completed)
            thunkAPI.dispatch(cardsActions.changeTaskComleted(
                {
                    id: props.id,
                    completed: props.completed
                }
            ))
        }
    )

    public readonly changeTaskText = createAsyncThunk(
        'cards/changeTaskText',
        async (props: CardsChangeTaskTextAction, thunkAPI) => {
            await UserTaskApi.changeText(props.id, props.text)
            thunkAPI.dispatch(cardsActions.changeTaskText(
                {
                    id: props.id,
                    text: props.text
                }
            ))
        }
    )

    public readonly delete = createAsyncThunk(
        'cards/delete',
        async (props: CardsDeleteAction, thunkAPI) => {
            await CardApi.delete(props.id)
            thunkAPI.dispatch(cardsActions.delete({ id: props.id }))
        }
    )

    public readonly deleteTask = createAsyncThunk(
        'cards/delete',
        async (id: number, thunkAPI) => {
            await UserTaskApi.delete(id)
            thunkAPI.dispatch(cardsActions.deleteTask(id))
        }
    )
}

export default new CardsThunks()
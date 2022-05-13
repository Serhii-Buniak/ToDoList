import { createAsyncThunk } from "@reduxjs/toolkit"
import CardApi, { Card } from "../../api/CardApi"
import { cardsActions } from "../cards/cardReducer"
import { InitialValueType, taskFormActions } from "./taskFormReducer"


class TaskFormThunks {

    public readonly init = createAsyncThunk(
        'task/initById',
        async function (id: number, { dispatch }) {
            const response = await CardApi.getItem(id)
            const data = response.data
            dispatch(taskFormActions.init(data))
        }
    )

    public readonly add = createAsyncThunk(
        'task/add',
        async function (props: InitialValueType, { dispatch }) {
            const card: Card = {
                id: 0,
                title: props.title!,
                tasks: props.tasks.map(t => ({
                    id: 0,
                    completed: t.completed,
                    text: t.text!
                }))
            }

            await CardApi.add(card)
            dispatch(cardsActions.add({ card: card }))
        }
    )
    public readonly update = createAsyncThunk(
        'task/update',
        async function (props: InitialValueType, { dispatch }) {
            const card: Card = {
                id: props.id!,
                title: props.title!,
                tasks: props.tasks.map(t => ({
                    id: t.id!,
                    completed: t.completed,
                    text: t.text!
                }))
            }
         
            await CardApi.update(card)
            dispatch(cardsActions.update({ card: card }))
        }
    )
}

export default new TaskFormThunks()
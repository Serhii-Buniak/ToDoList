import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface InitialValueType {
    id?: number
    title: string | null
    tasks: {
        id?: number
        text: string | null
        completed: boolean
    }[]
}

interface TaskFormState {
    values: InitialValueType | null
}


const initialState: TaskFormState = {
    values: {
        title: null,
        tasks: []
    }
}

export const taskFormSlice = createSlice({
    name: "taskForm",
    initialState,
    reducers: {
        init: (state, action: PayloadAction<InitialValueType>) => {
            state.values = action.payload
        },
        add: (state) => {
            console.log(state)
            state.values!.tasks.push({ text: null, completed: false })
        },
        delete: (state, action: PayloadAction<number>) => {
            const newTasks: {
                id?: number
                text: string | null
                completed: boolean
            }[] = []

            for (let i = 0; i < state.values!.tasks.length; i++)
                if (i !== action.payload)
                    newTasks.push(state.values!.tasks[i])

            state.values!.tasks = newTasks
        },
    }
})


export const taskFormActions = taskFormSlice.actions

export default taskFormSlice.reducer
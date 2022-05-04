import { AxiosResponse } from "axios"
import instance from "."

export interface UserTask {
    id: number
    text: string
    completed: boolean
}

class UserTaskApi {
    private static url = 'usertask'

    public async delete(id: number): Promise<AxiosResponse> {
        return await instance.delete(`${UserTaskApi.url}/${id}`)
    }

    public async changeText(id: number, newText: string): Promise<AxiosResponse> {
        const changeText = 'changeText'
        return await instance
            .patch(`${UserTaskApi.url}/${changeText}/${id}?newText=${newText}`)
    }

    public async changeCompleted(id: number, completed: boolean): Promise<AxiosResponse> {
        const changeCompleted = 'changeCompleted'
        return await instance
            .patch(`${UserTaskApi.url}/${changeCompleted}/${id}?completed=${completed}`)
    }
}

export default new UserTaskApi()
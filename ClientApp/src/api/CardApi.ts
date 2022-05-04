import { AxiosResponse } from "axios"
import instance from "."
import { UserTask } from "./UserTaskApi"


export interface Card {
   id: number
   title: string
   tasks: UserTask[]
}

class CardApi {
   private static url = 'card'

   public async getItems(): Promise<AxiosResponse<Card[]>> {
      return await instance.get<Card[]>(CardApi.url)
   }

   public async getItem(id: number): Promise<AxiosResponse<Card>> {
      return await instance.get<any>(`${CardApi.url}/${id}`)
   }

   public async add(card: Card): Promise<AxiosResponse> {
      return await instance.post<Card>(CardApi.url, card)
   }

   public async delete(id: number): Promise<AxiosResponse> {
      return await instance.delete(`${CardApi.url}/${id}`)
   }

   public async update(card: Card): Promise<AxiosResponse> {
      return await instance.put(CardApi.url, card)
   }
}

export default new CardApi()
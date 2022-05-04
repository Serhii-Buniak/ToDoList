import { Dispatch } from "redux"
import CardsAction from "./cards/CardsAction"

type AppAction = CardsAction

export type AppDispatch = Dispatch<AppAction>

export default AppAction
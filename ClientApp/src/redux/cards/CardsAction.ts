import { Card } from "../../api/CardApi";
import CardsTypes from "./CardsTypes";

interface CardsAction {
    type: CardsTypes
}

export interface InitCardAction extends CardsAction {
    items: Card[]
}

export interface AddCardAction extends CardsAction {
    card: Card
}

export interface DeleteCardAction extends CardsAction {
    id: number
}

export default CardsAction
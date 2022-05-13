import { useEffect } from "react"

import { getCards } from "../redux/cards/cardsSelectors"
import CardsThunks from "../redux/cards/CardsThunks"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import CardsList from "./CardsList"

const CardListContainer: React.FC = () => {
    const cards = useAppSelector(getCards)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(CardsThunks.init())
    }, [])

    return <CardsList cards={cards} />
}

export default CardListContainer
import { useEffect } from "react"
import CardsCreators from "../redux/cards/CardsCreators"
import { getCards } from "../redux/cards/selectors"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import CardsList from "./CardsList"

const CardListContainer: React.FC = () => {
    const cards = useAppSelector(getCards)
    const dispatch = useAppDispatch()

    useEffect(() => {
        CardsCreators.initThunk()(dispatch)
    }, [])

    return <CardsList cards={cards} />
}

export default CardListContainer
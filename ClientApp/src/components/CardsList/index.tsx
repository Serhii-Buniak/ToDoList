import { Card } from "../../api/CardApi"
import CardsThunks from "../../redux/cards/CardsThunks"
import { useAppDispatch } from "../../redux/hooks"
import { styled } from "../../styles/theme"
import CardElement from "./CardElement"

const CardsListStyled = styled.div`
    & > * {
        margin-bottom: 40px;
        :last-child{
            margin-bottom: 0;
        }
    }

`

interface CardsListProps {
    cards: Card[]
}

const CardsList: React.FC<CardsListProps> = ({ cards }) => {
    const dispatch = useAppDispatch()

    return (
        <CardsListStyled>
            {cards.map(c =>
                <CardElement
                    key={c.id}
                    card={c}
                    onDelete={() =>
                        dispatch(CardsThunks.delete({ id: c.id }))
                    }
                />
            )}
        </CardsListStyled>
    )
}

export default CardsList
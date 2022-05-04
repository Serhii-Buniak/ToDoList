import { Card } from "../../api/CardApi"
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
    return (
        <CardsListStyled>
            {cards.map(c =>
                <CardElement key={c.id} card={c} />
            )}
        </CardsListStyled>
    )
}

export default CardsList
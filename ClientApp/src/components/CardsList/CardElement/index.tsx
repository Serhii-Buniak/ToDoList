import { Card } from "../../../api/CardApi";
import { styled } from "../../../styles/theme";
import CardTitleStyled from "./CardTitle";
import UserTaskList from "./UserTaskList";

const CardStyled = styled.div`
    border-radius: 20px;
    border: 2px solid ${t => t.theme.colors.btnSubmit};
    margin: 0 auto;
    padding: 35px 50px;
    width: 768px;
`

interface CardProps {
    card: Card
}

const CardElement: React.FC<CardProps> = ({ card }) => {
    return (
        <CardStyled>
            <CardTitleStyled>{card.title}</CardTitleStyled>
            <UserTaskList tasks={card.tasks}/>
        </CardStyled>
    )
}

export default CardElement
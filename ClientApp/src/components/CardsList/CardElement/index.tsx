import { NavLink } from "react-router-dom";
import { Card } from "../../../api/CardApi";
import { styled } from "../../../styles/theme";
import LinkStyled from "../../UI/LinkStyled";
import CardTitleStyled from "./CardTitle";
import UserTaskList from "./UserTaskList";

const CardStyled = styled.div`
    border-radius: 20px;
    border: 2px solid ${t => t.theme.colors.btnSubmit};
    margin: 0 auto;
    padding: 35px 50px;
    width: 768px;
    .buttons {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
    }
`

interface CardProps {
    card: Card
    onDelete: () => void
}

const CardElement: React.FC<CardProps> = ({ card, onDelete }) => {

    const onDeleteClick = () => {
        const confirmed = confirm(`Delete - ${card.title}`)
        if (confirmed) {
            onDelete()
        }
    }

    return (
        <CardStyled>
            <CardTitleStyled>{card.title}</CardTitleStyled>
            <UserTaskList tasks={card.tasks} />
            <div className="buttons">
                <LinkStyled onClick={onDeleteClick} type="cancel">Delete</LinkStyled>
                <LinkStyled as={NavLink} to={'/edit'} type="sumbit">Edit</LinkStyled>
            </div>
        </CardStyled>
    )
}

export default CardElement
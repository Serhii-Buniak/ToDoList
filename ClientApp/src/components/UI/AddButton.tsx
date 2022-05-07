import { styled } from "../../styles/theme"
import addBtn from "images/add-btn.svg"
import { NavLink } from "react-router-dom"
const AddButtonStyled = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    font-size: 20px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 50%;
    :hover {
        outline: 10px solid #ffffff35;
    }
    img{
        border-radius: 50%;
        cursor: pointer;
    }
`

interface AddButtonProps {
    to: string
}

const AddButton: React.FC<AddButtonProps> = ({to}) => {
    return (
        <AddButtonStyled to={to}>
            <img src={addBtn} alt="addBtn" />
        </AddButtonStyled>
    )
}

export default AddButton
import { styled } from "../../styles/theme";

const CheckBoxStyled = styled.input`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 25px;
    height: 25px;
    cursor: pointer;
    border-radius: 5px;
    border: 3px solid #018ABE;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    
    :checked {
        background: #FFFFFF;
        border-radius: 5px;
    }
    :checked:before {
        color: white;
        padding: initial;
        font-weight: bold;
    }
    :hover {
        outline: 4px solid #0188be33;
    }

`

interface CheckBoxProps {
    handler: (checked: boolean) => void
    checked: boolean
}

const CheckBox: React.FC<CheckBoxProps> = ({ handler, checked }) => {
    const handleChange = () => {
        handler(!checked)
    };

    return (
        <CheckBoxStyled type="checkbox"
            onChange={handleChange}
            checked={checked}
        />
    )
}

export default CheckBox
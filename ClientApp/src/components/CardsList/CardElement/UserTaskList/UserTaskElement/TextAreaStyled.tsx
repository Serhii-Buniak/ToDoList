import { styled } from "../../../../../styles/theme";

export const TextAreaStyled = styled.textarea`
    font-size: 16px;
    width: 100%;
    padding: 10px 15px;
    color: inherit;
    background-color: inherit;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    resize: none;
    background-color: white;
    color: black;
    border-radius: 3px;
    :focus{
        outline: 7px solid ${p => p.theme.colors.btnSubmit};
    }
    &.error{
        :focus{
            outline: 1px solid red;
        }
    }
`


export default TextAreaStyled
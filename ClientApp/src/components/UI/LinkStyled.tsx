import { styled } from "../../styles/theme"

interface LinkStyledProps {
    type: 'sumbit' | 'cancel'
}

const LinkStyled = styled.a<LinkStyledProps>`
    height: 35px;
    width: 155px;
    border-radius: 10px;
    font-size: 16px;
    line-height: 100%;
    color: inherit;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${p => p.type === 'sumbit'
        ? p.theme.colors.btnSubmit
        : p.theme.colors.btnCancel
    };
    :hover {
        outline: 10px solid ${p => p.type === 'sumbit'
        ? p.theme.colors.btnSubmit + '33'
        : p.theme.colors.btnCancel + '33'};
    }
`

export default LinkStyled
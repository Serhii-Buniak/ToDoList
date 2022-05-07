import { styled } from "../../styles/theme"
import leftTitlePart from "images/left-title.svg"
import rightTitlePart from "images/right-title.svg"

const StyledTitle = styled.h1`
    font-size: 42px;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    span {
        padding: 10px 30px 10px 30px;
    }
`

interface TitleProps {
    children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({children}) => {
    return (
        <StyledTitle>
            <img src={leftTitlePart} alt="leftTitlePart" />
            <span>{children}</span>
            <img src={rightTitlePart} alt="rightTitlePart" />
        </StyledTitle>
    )
}

export default Title
import styled from "styled-components";
import CardListContainer from "./CardListContainer";

import Title from "./UI/Title";

const MainStyled = styled.main`
    padding-top: 60px;
`

const Main: React.FC = () => {
    return (
        <MainStyled>
            <Title>gfsdg</Title>
            <CardListContainer />
        </MainStyled>
    )
}

export default Main
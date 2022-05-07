import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import CardListContainer from "./CardListContainer";
import AddButton from "./UI/AddButton";

import Title from "./UI/Title";

const MainStyled = styled.main`
    padding-top: 60px;
`

const Main: React.FC = () => {
    return (
        <MainStyled>
            <Routes>
                {["/", "todolist"].map((path, index) =>
                    <Route
                        key={index}
                        path={path}
                        element={
                            <>
                                <Title>ToDoList</Title>
                                <CardListContainer />
                                <AddButton to='/addcard' />
                            </>
                        } />
                )}
            </Routes>
            <Routes>
                <Route
                    path='addcard'
                    element={<>
                        <Title>Add Card</Title>
                    </>} />
            </Routes>
        </MainStyled >
    )
}

export default Main
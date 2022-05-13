import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import CardListContainer from "./CardListContainer";
import FormCard from "./FormCard";
import AddFormCard from "./FormCard/AddFormCard";
import EditFormCard from "./FormCard/EditFormCard";
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
                        <AddFormCard />
                    </>} />
            </Routes>
            <Routes>
                <Route
                    path='edit/:id'
                    element={<>
                        <Title>Add Card</Title>
                        <EditFormCard />
                    </>} />
            </Routes>
        </MainStyled >
    )
}

export default Main
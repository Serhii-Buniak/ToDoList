import { useEffect } from "react"
import Main from "./components/Main"
import StyledTitle from "./components/UI/Title"
import CardsCreators from "./redux/cards/CardsCreators"
import { getCards } from "./redux/cards/selectors"
import { useAppDispatch, useAppSelector } from "./redux/hooks"
import { styled } from "./styles/theme"



const AppStyled = styled.div`
  background-color: ${t => t.theme.colors.background};
  color: ${t => t.theme.colors.text};
  height: 100vh;
  width: 100vw;
`

const App: React.FC = () => {

  return (
    <AppStyled>
      <Main />
    </AppStyled>
  )
}

export default App
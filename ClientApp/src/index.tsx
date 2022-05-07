import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './redux'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }
  * {
    transition: outline 0.5s ease 0s;
  }
`

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App />
                    <GlobalStyle />
                </ThemeProvider>
            </Provider >
        </BrowserRouter>
    </React.StrictMode>
    ,
    document.getElementById('root'))

serviceWorkerRegistration.unregister()
reportWebVitals()

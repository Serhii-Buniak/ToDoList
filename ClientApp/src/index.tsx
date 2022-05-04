import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import AppAction from './redux/action'
import store from './redux'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import './styles/index.css'

ReactDOM.render(
    <React.StrictMode>
        <Provider<AppAction> store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'))

serviceWorkerRegistration.unregister()
reportWebVitals()

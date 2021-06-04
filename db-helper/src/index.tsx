import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import { Provider } from 'react-redux'
import App from './App'
import { configureStore } from './store/configStore'

ReactDOM.render(
    <Provider store={configureStore({})}>
        <App/>
    </Provider>,
    document.getElementById('root'),
)

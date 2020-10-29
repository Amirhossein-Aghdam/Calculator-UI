import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App from "./Components/App"
import reducers from "./Reducers/index"

//initilizing the redux store with redux-thunk middleware
const store = createStore(
    reducers,
    applyMiddleware(thunk)
) 

//rendering the main App component 
//accompanied by redux implementation on React
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
)
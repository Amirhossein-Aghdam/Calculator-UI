import React from 'react'
import {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import layout from './layouts/main'

export default class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Route exact path="/" component={layout}></Route>
            </BrowserRouter>
        )
    }
}
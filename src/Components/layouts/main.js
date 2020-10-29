import React from 'react'
import {Component} from 'react'
import ReactDOM from 'react-dom'
import {Layout as pageLayout} from 'antd'
import 'antd/dist/antd.css'

//The main structure of the page
const {Header, Sider, Footer, Content} = pageLayout

export default class Layout extends Component{
    render(){
        return(
            <div>
                Start from /src/Components/layouts/main.js
            </div>
        )
    }
}
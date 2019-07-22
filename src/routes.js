import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home'


export default function XCodeRouter(){
    return (
        <Router>
            <Route path="/" exact comonent={Home}/>
        </Router>
    )

}
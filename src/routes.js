import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


export default function XCodeRouter(){
    return (
        <Router>
            <Route path="/" exact comonent={Home}/>
        </Router>
    )

}
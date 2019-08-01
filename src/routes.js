import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home'
import Exercise from './pages/exercise'

export default function XCodeRouter(){
    return (
        <Router>
            <Route path="/" exact comonent={Home}/>
            <Route path="exercise/:exerciseId" component={Exercise}/>
        </Router>
    )

}
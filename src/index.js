import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import reducer from './reducer/index'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import promiseMiddleware from 'redux-promise';
import * as serviceWorker from './serviceWorker';
let store = createStore(reducer, applyMiddleware(promiseMiddleware))
ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

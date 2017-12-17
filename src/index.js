import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { reducer } from './reducers';

let store = createStore(reducer);

function render() {
    ReactDOM.render(
        <BrowserRouter><App store={store} /></BrowserRouter>, 
        document.getElementById('root')
    );
    registerServiceWorker();
}

render();
store.subscribe(render);
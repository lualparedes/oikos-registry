import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { reducer } from './reducers';

let store = createStore(reducer);

function render() {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
    registerServiceWorker();
}

render();
store.subscribe(render);
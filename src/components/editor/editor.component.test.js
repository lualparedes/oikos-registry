import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './editor.component';

import { createStore } from 'redux';
import { reducer } from '../../reducers';

const store = createStore(reducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Editor store={ store } />, div);
});
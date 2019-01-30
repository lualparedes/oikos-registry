import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './editor.component';
import ModalSelect from '../modal-select/modal-select.component';
import TestRenderer from 'react-test-renderer';
import { createStore } from 'redux';
import { reducer } from '../../reducers';


describe('Editor component', () => {

  const store = createStore(reducer);

  it('renders without crashing using ReactDOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Editor store={ store } />, div);
  });

  it('has one ModalSelect', () => {
    const testRenderer = TestRenderer.create(<Editor store={ store } />);
    const testInstance = testRenderer.root;
    expect(testInstance.findAllByType(ModalSelect).length).toBe(1);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import ModalSelect from './modal-select.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ModalSelect />, div);
});
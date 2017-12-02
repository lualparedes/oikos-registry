import React from 'react';
import ReactDOM from 'react-dom';
import ModalWarn from './modal-warn.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ModalWarn />, div);
});
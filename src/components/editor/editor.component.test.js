import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './editor.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Editor />, div);
});
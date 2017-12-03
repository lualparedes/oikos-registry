import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from './date-picker.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DatePicker />, div);
});
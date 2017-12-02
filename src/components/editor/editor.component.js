import React, { Component } from 'react';
import './editor.component.css';

import ModalSelect from '../modal-select.component';
import ModalWarn from '../modal-warn.component';

export default class Editor extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Editor">
                
                <ModalSelect />
                <ModalWarn />
            </div>
        );
    }

}
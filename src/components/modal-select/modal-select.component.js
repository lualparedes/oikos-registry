import React, { Component } from 'react';
import './modal-select.component.css';

export default class ModalSelect extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ModalSelect">
                <div className="modal-backdrop backdrop">
                    <div className="modal">
                        <div className="modal__content">
                            You have unsaved changes.<br />
                            Do you want to save them?
                        </div>
                        <div className="btn-row">
                            <button className="btn btn-option btn-option--secondary">Discard</button>
                            <button className="btn btn-option btn-option--main">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
import React, { Component } from 'react';
import './modal-warn.component.css';

export default class ModalWarn extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ModalWarn">
                <div className="modal-backdrop backdrop">
                    <div className="modal">
                        <div className="modal__content">
                            You need to fill<br />
                            the name field 
                        </div>
                        <div className="btn-row">
                            <button className="btn btn-option btn-option--main">Ok</button>
                        </div>
                    </div>
                </div>    
            </div>   
        );
    }

}
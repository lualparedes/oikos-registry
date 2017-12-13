import React, { Component } from 'react';
import './modal-warn.component.css';

import { hide } from '../../services/modals.service';

export default class ModalWarn extends Component {

    constructor(props) {
        super(props);
    }

    hide() {
        hide('modalWarn');
    }

    render() {
        return (
            <div className="ModalWarn">
                <div className="backdrop backdrop--modal js-modalWarnBackdrop">
                    <div className="modal modal--warn js-modalWarnModal">
                        <div className="modal__content">
                            You need to fill<br />
                            the name field
                        </div>
                        <div className="btn-row">
                            <button 
                                className="btn btn-option btn-option--main"
                                onClick={this.hide}
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                </div>    
            </div>   
        );
    }

}
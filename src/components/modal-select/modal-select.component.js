import React, { Component } from 'react';
import './modal-select.component.css';

import { hide } from '../../services/modals.service';

import { g } from '../../assets/scripts/utils';

export default class ModalSelect extends Component {

    constructor(props) {
        super(props);
    }

    discard() {
        hide('editor');
        hide('modalSelect');
        g('.editor-content').classList.remove('editor-content--active');
        g('.editor-footer').classList.remove('editor-footer--active');
    }

    save() {

        ///////////////////////////////////
        // TODO:                         //
        //     - database stuff          //
        //     - check if there's a name //
        ///////////////////////////////////

        g('.editor-content').classList.remove('editor-content--active');
        g('.editor-footer').classList.remove('editor-footer--active');
    }

    render() {
        return (
            <div className="ModalSelect">
                <div className="backdrop backdrop--modal js-modalSelectBackdrop">
                    <div className="modal modal--select js-modalSelectModal">
                        <div className="modal__content">
                            You have unsaved changes.<br />
                            Do you want to save them?
                        </div>
                        <div className="btn-row">
                            <button 
                                className="btn btn-option btn-option--secondary"
                                onClick={this.discard}
                            >
                                Discard
                            </button>
                            <button 
                                className="btn btn-option btn-option--main"
                                onClick={this.save}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
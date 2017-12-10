import React, { Component } from 'react';
import './editor.component.css';

import ModalSelect from '../modal-select/modal-select.component';
import ModalWarn from '../modal-warn/modal-warn.component';
import DatePicker from '../date-picker/date-picker.component';

import { hide } from '../../services/modals.service';

export default class Editor extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    hideEditor() {
        hide('editor');
    }

    render() {
        return (
            <div className="Editor">
                <div className="backdrop backdrop--editor js-editorBackdrop">
                    <div className="modal modal--editor js-editorModal">
                        <div className="editor-header">
                            <h1 className="editor-header__title">
                                {this.store.getState().editor.title}
                            </h1>
                            <button 
                                className="editor-header__btn btn icon-close"
                                onClick={this.hideEditor}
                            ></button>
                        </div>
                        <div className="editor-content">
                            <form>
                                <label htmlFor="name">Name</label>
                                <input 
                                    className="in" type="text" id="name" 
                                    value={this.store.getState().editor.name}
                                />

                                <label htmlFor="satus">Status</label>
                                <select 
                                    className="selection" name="" id="satus" 
                                    value={this.store.getState().editor.status}
                                >
                                    <option value="active">Active</option>
                                    <option value="passive">Passive</option>
                                    <option value="candidate">Candidate</option>
                                    <option value="candidate-star">Candidate*</option>
                                    <option value="honorary">Honorary</option>
                                    <option value="past-candidate">Past candidate (deletes the entry)</option>
                                </select>

                                <label htmlFor="carnet">Carnet</label>
                                <input 
                                    className="in" type="text" id="carnet"
                                    value={this.store.getState().editor.carnet}
                                />

                                <label htmlFor="id-number">ID number</label>
                                <input 
                                    className="in" type="text" id="id-number"
                                    value={this.store.getState().editor.idNumber}
                                />

                                <label htmlFor="email">Email</label>
                                <input 
                                    className="in" type="text" id="email"
                                    value={this.store.getState().editor.email}
                                />

                                <label htmlFor="phone-number-home">Phone number (home)</label>
                                <input 
                                    className="in" type="text" id="phone-number-home"
                                    value={this.store.getState().editor.phoneNumberHome}
                                />

                                <label htmlFor="phone-number-mobile">Phone number (mobile)</label>
                                <input 
                                    className="in" type="text" id="phone-number-mobile"
                                    value={this.store.getState().editor.phoneNumberMobile}
                                />

                                <label htmlFor="major">Major</label>
                                <input 
                                    className="in" type="text" id="major"
                                    value={this.store.getState().editor.major}
                                />

                                <label htmlFor="address">Address</label>
                                <input 
                                    className="in" type="text" id="address"
                                    value={this.store.getState().editor.address}
                                />

                                <label htmlFor="sex">Sex</label>
                                <select 
                                    className="selection" name="" id="sex"
                                    value={this.store.getState().editor.sex.toLowerCase()}
                                >
                                    <option value="m">M</option>
                                    <option value="f">F</option>
                                </select>

                                <label htmlFor="date-of-birth">Date of birth</label>
                                <DatePicker id="date-of-birth" store={this.props.store}/>

                                <label htmlFor="type-of-blood">Type of blood</label>
                                <select 
                                    className="selection" name="" id="type-of-blood"
                                    value={this.store.getState().editor.typeOfBlood.toLowerCase()}
                                >
                                    <option value="--">--</option>
                                    <option value="o+">O+</option>
                                    <option value="o-">O-</option>
                                    <option value="a+">A+</option>
                                    <option value="a-">A-</option>
                                    <option value="b+">B+</option>
                                    <option value="b-">B-</option>
                                    <option value="ab+">AB+</option>
                                    <option value="ab-">AB-</option>
                                </select>

                                <label htmlFor="allergies">Allergies</label>
                                <input 
                                    className="in" type="text" id="allergies"
                                    value={this.store.getState().editor.allergies}
                                />

                                <label htmlFor="diseases">Diseases</label>
                                <input 
                                    className="in" type="text" id="diseases"
                                    value={this.store.getState().editor.diseases}
                                />

                                <label htmlFor="emergency-contact-1">Emergency contact 1</label>
                                <input 
                                    className="in" type="text" id="emergency-contact-1"
                                    value={this.store.getState().editor.emergencyContact1}
                                />

                                <label htmlFor="emergency-contact-2">Emergency contact 2</label>
                                <input 
                                    className="in" type="text" id="emergency-contact-2"
                                    value={this.store.getState().editor.emergencyContact2}
                                />

                                <label htmlFor="enrollment-date">Enrollment date</label>
                                <DatePicker id="enrollment-date" store={this.props.store}/>
                            </form>
                        </div>
                        {/*

    REMEMBER THAT THIS IS ONLY SHOWN WHEN YOU ACTIVATE ONE OF THE FIELDS
        PERHAPS ALSO CHECK IF THERE WAS ANY ACTUAL MODIFICATION (LEARN HOW TO USE TIMETRAVEL!!! :O)

                        */}
                        <div className="editor-footer">
                            <div className="btn-row">
                                <button className="btn btn-option btn-option--secondary">Discard</button>
                                <button className="btn btn-option btn-option--main">Save</button>
                            </div>
                        </div>
                        <ModalSelect store={this.props.store} />
                        <ModalWarn store={this.props.store} />
                    </div>
                </div>                
            </div>
        );
    }

}
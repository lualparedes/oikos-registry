import React, { Component } from 'react';
import './editor.component.css';

import ModalSelect from '../modal-select/modal-select.component';
import ModalWarn from '../modal-warn/modal-warn.component';
import DatePicker from '../date-picker/date-picker.component';

export default class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorTitle: 'Add new member'
        };
    }

    render() {
        return (
            <div className="Editor">
                <div className="editor-backdrop">
                    <div className="editor-modal">
                        <div className="editor-header">
                            <h1 className="editor-header__title">{this.state.editorTitle}</h1>
                            <button className="editor-header__btn btn icon-close"></button>
                        </div>
                        <div className="editor-content">
                            <form>
                                <label htmlFor="name">Name</label>
                                <input className="in" type="text" id="name"/>

                                <label htmlFor="satus">Status</label>
                                <select className="selection" name="" id="satus">
                                    <option value="active">Active</option>
                                    <option value="passive">Passive</option>
                                    <option value="candidate">Candidate</option>
                                    <option value="candidate-star">Candidate*</option>
                                    <option value="honorary">Honorary</option>
                                    <option value="past-candidate">Past candidate (deletes the entry)</option>
                                </select>

                                <label htmlFor="carnet">Carnet</label>
                                <input className="in" type="text" id="carnet"/>

                                <label htmlFor="id-number">ID number</label>
                                <input className="in" type="text" id="id-number"/>

                                <label htmlFor="email">Email</label>
                                <input className="in" type="text" id="email"/>

                                <label htmlFor="phone-number-home">Phone number (home)</label>
                                <input className="in" type="text" id="phone-number-home"/>

                                <label htmlFor="phone-number-mobile">Phone number (mobile)</label>
                                <input className="in" type="text" id="phone-number-mobile"/>

                                <label htmlFor="major">Major</label>
                                <input className="in" type="text" id="major"/>

                                <label htmlFor="address">Address</label>
                                <input className="in" type="text" id="address"/>

                                <label htmlFor="sex">Sex</label>
                                <select className="selection" name="" id="sex">
                                    <option value="m">M</option>
                                    <option value="f">F</option>
                                </select>

                                <label htmlFor="date-of-birth">Date of birth</label>
                                <DatePicker id="date-of-birth"/>

                                <label htmlFor="type-of-blood">Type of blood</label>
                                <select className="selection" name="" id="type-of-blood">
                                    <option value="o-positive">O+</option>
                                    <option value="o-negative">O-</option>
                                    <option value="a-positive">A+</option>
                                    <option value="a-negative">A-</option>
                                    <option value="b-positive">B+</option>
                                    <option value="b-negative">B-</option>
                                    <option value="ab-positive">AB+</option>
                                    <option value="ab-negative">AB-</option>
                                </select>

                                <label htmlFor="allergies">Allergies</label>
                                <input className="in" type="text" id="allergies"/>

                                <label htmlFor="diseases">Diseases</label>
                                <input className="in" type="text" id="diseases"/>

                                <label htmlFor="emergency-contact-1">Emergency contact 1</label>
                                <input className="in" type="text" id="emergency-contact-1"/>

                                <label htmlFor="emergency-contact-2">Emergency contact 2</label>
                                <input className="in" type="text" id="emergency-contact-2"/>

                                <label htmlFor="enrollment-date">Enrollment date</label>
                                <DatePicker id="enrollment-date"/>

                                <label htmlFor="been-active">Has been active?</label>
                                <select className="selection" name="" id="been-active">
                                    <option value="y">Y</option>
                                    <option value="n">N</option>
                                </select>
                            </form>
                        </div>
                        <div className="editor-footer">
                            <div className="btn-row">
                                <button className="btn btn-option btn-option--secondary">Discard</button>
                                <button className="btn btn-option btn-option--main">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalSelect />
                <ModalWarn />
            </div>
        );
    }

}
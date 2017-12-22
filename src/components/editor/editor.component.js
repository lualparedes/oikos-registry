import React, { Component } from 'react';
import './editor.component.css';

import ModalSelect from '../modal-select/modal-select.component';
import ModalWarn from '../modal-warn/modal-warn.component';
import DatePicker from '../date-picker/date-picker.component';

import { show, hide } from '../../services/modals.service';
import { createMember, updateMember, deleteMember, findRecordId } from '../../services/api.service';

import { updateEditor, updateDateOfBirth, updateEnrollmentDate } from '../../actions';

import { g, clone } from '../../assets/scripts/utils';

export default class Editor extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.state = this.props.store.getState().editor;
    }

    componentWillReceiveProps() {
        this.setState({ ...this.props.store.getState().editor });
    }

    handleChange = (e) => {
        e.preventDefault();
        this.store.dispatch(updateEditor(e.target.id, e.target.value));
    }

    discard() {
        hide('editor');
        g('.editor-content').classList.remove('editor-content--active');
        g('.editor-footer').classList.remove('editor-footer--active');
    }

    convertStatus(statusValue) {
        switch(statusValue) {
            case 'active':
                return 'Active';
            case 'passive':
                return 'Passive';
            case 'candidate':
                return 'Candidate';
            case 'candidate-star':
                return 'Candidate*';
            case 'honorary':
                return 'Honorary';
            case 'alumni':
                return 'Alum';
            case 'past-candidate':
                return 'Past candidate (deletes the entry)';
        }
    }

    save = () => {
        let atLeastItHasTheName = (g('#name').value === '') ? false : true;

        if (!atLeastItHasTheName) {
            show('modalWarn');
        }
        else {
            let memberData = {
                name: g('#name').value,
                status: this.convertStatus(g('#status').value),
                cardNumber: g('#card-number').value,
                idNumber: g('#id-number').value,
                email: g('#email').value,
                phoneNumberHome: g('#phone-number-home').value,
                phoneNumberMobile: g('#phone-number-mobile').value,
                major: g('#major').value,
                address: g('#address').value,
                sex: g('#sex').value.toUpperCase(),
                dateOfBirth: {
                    day: g('#date-of-birth-day').value,
                    month: g('#date-of-birth-month').value,
                    year: g('#date-of-birth-year').value
                },
                typeOfBlood: g('#type-of-blood').value.toUpperCase(),
                allergies: g('#allergies').value,
                diseases: g('#diseases').value,
                emergencyContact1: g('#emergency-contact-1').value,
                emergencyContact2: g('#emergency-contact-2').value,
                enrollmentDate: {
                    day: g('#enrollment-date-day').value,
                    month: g('#enrollment-date-month').value,
                    year: g('#enrollment-date-year').value
                }
            };
            switch(g('.editor-header__title').innerHTML) {
                case 'Add new member':
                    if (g('#status').value !== 'past-candidate') {
                        createMember(memberData);
                    }
                    else {
                        this.discard();
                    }
                break;
                default:
                    if (g('#status') !== 'past-candidate') {
                        updateMember(
                            memberData,
                            findRecordId(memberData.name, memberData.status, this.store)
                        );
                    }
                    else {
                        deleteMember(
                            memberData,
                            findRecordId(memberData.name, memberData.status, this.store)
                        );
                    }
            }
        }
    }

    // @notes
    // [1] Verify that it can be closed
    hideEditor() {
        if (g('.editor-content').classList.contains('editor-content--active')) {
            show('modalSelect'); // [1]
        }
        else {
            hide('editor');
        }   
    }

    showFooter() {
        g('.editor-content').classList.add('editor-content--active');
        g('.editor-footer').classList.add('editor-footer--active');
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
                            <form 
                                onFocus={this.showFooter}
                                onChange={this.handleChange}
                            >
                                <label htmlFor="name">Name</label>
                                <input 
                                    className="in" type="text" id="name" 
                                    value={this.state.name}
                                />

                                <label htmlFor="status">Status</label>
                                <select 
                                    className="selection" name="" id="status" 
                                    value={this.state.status.toLowerCase()}
                                >
                                    <option value="active">Active</option>
                                    <option value="passive">Passive</option>
                                    <option value="candidate">Candidate</option>
                                    <option value="candidate-star">Candidate*</option>
                                    <option value="honorary">Honorary</option>
                                    <option value="alum">Alum</option>
                                    <option value="past-candidate">Past candidate (deletes the entry)</option>
                                </select>

                                <label htmlFor="card-number">Card number</label>
                                <input 
                                    className="in" type="text" id="card-number"
                                    value={this.state.cardNumber}
                                />

                                <label htmlFor="id-number">ID number</label>
                                <input 
                                    className="in" type="text" id="id-number"
                                    value={this.state.idNumber}
                                />

                                <label htmlFor="email">Email</label>
                                <input 
                                    className="in" type="text" id="email"
                                    value={this.state.email}
                                />

                                <label htmlFor="phone-number-home">Phone number (home)</label>
                                <input 
                                    className="in" type="text" id="phone-number-home"
                                    value={this.state.phoneNumberHome}
                                />

                                <label htmlFor="phone-number-mobile">Phone number (mobile)</label>
                                <input 
                                    className="in" type="text" id="phone-number-mobile"
                                    value={this.state.phoneNumberMobile}
                                />

                                <label htmlFor="major">Major</label>
                                <input 
                                    className="in" type="text" id="major"
                                    value={this.state.major}
                                />

                                <label htmlFor="address">Address</label>
                                <input 
                                    className="in" type="text" id="address"
                                    value={this.state.address}
                                />

                                <label htmlFor="sex">Sex</label>
                                <select 
                                    className="selection" name="" id="sex"
                                    value={this.state.sex.toLowerCase()}
                                >
                                    <option value="m">M</option>
                                    <option value="f">F</option>
                                </select>

                                <label htmlFor="date-of-birth">Date of birth</label>
                                <DatePicker 
                                    id="date-of-birth" 
                                    store={this.props.store} 
                                    parentState={this.state}
                                />

                                <label htmlFor="type-of-blood">Type of blood</label>
                                <select 
                                    className="selection" name="" id="type-of-blood"
                                    value={this.state.typeOfBlood.toLowerCase()}
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
                                    value={this.state.allergies}
                                />

                                <label htmlFor="diseases">Diseases</label>
                                <input 
                                    className="in" type="text" id="diseases"
                                    value={this.state.diseases}
                                />

                                <label htmlFor="emergency-contact-1">Emergency contact 1</label>
                                <input 
                                    className="in" type="text" id="emergency-contact-1"
                                    value={this.state.emergencyContact1}
                                />

                                <label htmlFor="emergency-contact-2">Emergency contact 2</label>
                                <input 
                                    className="in" type="text" id="emergency-contact-2"
                                    value={this.state.emergencyContact2}
                                />

                                <label htmlFor="enrollment-date">Enrollment date</label>
                                <DatePicker 
                                    id="enrollment-date" 
                                    store={this.props.store} 
                                    parentState={this.state}
                                />
                            </form>
                        </div>
                        <div className="editor-footer">
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
                        <ModalSelect store={this.props.store} />
                        <ModalWarn store={this.props.store} />
                    </div>
                </div>                
            </div>
        );
    }

}
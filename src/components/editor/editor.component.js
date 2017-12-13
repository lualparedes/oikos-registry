import React, { Component } from 'react';
import './editor.component.css';

import ModalSelect from '../modal-select/modal-select.component';
import ModalWarn from '../modal-warn/modal-warn.component';
import DatePicker from '../date-picker/date-picker.component';

import { show, hide } from '../../services/modals.service';

import { updateDateOfBirth, updateEnrollmentDate } from '../../actions';

import { g } from '../../assets/scripts/utils';

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

        switch(e.target.id) {
            case 'name':
                this.setState({ name: e.target.value });
            break;
            case 'status':
                this.setState({ status: e.target.value });
            break;
            case 'carnet':
                this.setState({ carnet: e.target.value });
            break;
            case 'id-number':
                this.setState({ idNumber: e.target.value });
            break;
            case 'email':
                this.setState({ email: e.target.value });
            break;
            case 'phone-number-home':
                this.setState({ phoneNumberHome: e.target.value });
            break;
            case 'phone-number-mobile':
                this.setState({ phoneNumberMobile: e.target.value });
            break;
            case 'major':
                this.setState({ major: e.target.value });
            break;
            case 'address':
                this.setState({ address: e.target.value });
            break;
            case 'sex':
                this.setState({ sex: e.target.value });
            break;
            case 'type-of-blood':
                this.setState({ typeOfBlood: e.target.value });
            break;
            case 'allergies':
                this.setState({ allergies: e.target.value });
            break;
            case 'diseases':
                this.setState({ diseases: e.target.value });
            break;
            case 'emergency-contact-1':
                this.setState({ emergencyContact1: e.target.value });
            break;
            case 'emergency-contact-2':
                this.setState({ emergencyContact2: e.target.value });
            break;
            
            case 'date-of-birth':
                let newDateOfBirth = {
                        day: e.target.id === 'date-of-birth-day' ? 
                            e.target.value :
                            this.state.dateOfBirth.day,
                        month: e.target.id === 'date-of-birth-month' ? 
                            e.target.value :
                            this.state.dateOfBirth.month,
                        year: e.target.id === 'date-of-birth-year' ? 
                            e.target.value :
                            this.state.dateOfBirth.year,
                    }
                this.store.dispatch(updateDateOfBirth(newDateOfBirth));
                //this.setState((prevState) => {
                //    return { dateOfBirth: newDateOfBirth };
                //});
            break;
            case 'enrollment-date':
                this.setState((prevState) => {
                    return { enrollmentDate: {
                        day: e.target.id === 'enrollment-date-day' ? 
                            e.target.value :
                            prevState.enrollmentDate.day,
                        month: e.target.id === 'enrollment-date-month' ? 
                            e.target.value :
                            prevState.enrollmentDate.month,
                        year: e.target.id === 'enrollment-date-year' ? 
                            e.target.value :
                            prevState.enrollmentDate.year,
                    } };
                });
            break;
        }
    };

    discard() {
        hide('editor');
        g('.editor-content').classList.remove('editor-content--active');
        g('.editor-footer').classList.remove('editor-footer--active');
    }

    save() {
        let atLeastItHasTheName = (g('#name').value === '') ? false : true;

        if (!atLeastItHasTheName) {
            show('modalWarn');
        }
    }

    hideEditor() {
        if (g('.editor-content').classList.contains('editor-content--active')) {
            // verify that it can be closed
            show('modalSelect');
        }
        else {
            hide('editor');
        }   
    }

    showFooter() {
        g('.editor-content').classList.add('editor-content--active');
        g('.editor-footer').classList.add('editor-footer--active');
    };

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
                                    value={this.state.status}
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
                                    value={this.state.carnet}
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
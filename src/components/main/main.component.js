import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './main.component.css';

import Editor from '../editor/editor.component';

import { showMenu } from '../../services/menu.service';
import { show } from '../../services/modals.service';
import { getMemberCollection } from '../../services/api.service';

import { editRecord } from '../../actions';

function returnRow(member, thisArg) {
    return (
        <tr className="main-table__row">
            <td className="edit-trigger" onClick={thisArg.openEditor}>{member.name}</td>
            <td>{member.status}</td>
            <td>{member.cardNumber}</td>
            <td>{member.idNumber}</td>
            <td>{member.email}</td>
            <td>{member.phoneNumberHome}</td>
            <td>{member.phoneNumberMobile}</td>
            <td>{member.major}</td>
            <td>{member.address}</td>
            <td>{member.sex}</td>
            <td>{member.dateOfBirth.day}/{member.dateOfBirth.month}/{member.dateOfBirth.year}</td>
            <td>{member.typeOfBlood}</td>
            <td>{member.allergies}</td>
            <td>{member.diseases}</td>
            <td>{member.emergencyContact1}</td>
            <td>{member.emergencyContact2}</td>
            <td>{member.enrollmentDate.day}/{member.enrollmentDate.month}/{member.enrollmentDate.year}</td>
        </tr>
    );
}

let i = 0;

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
        getMemberCollection('current', this.store);
        getMemberCollection('honorary', this.store);
        getMemberCollection('alumni', this.store);
    }

    showMenu() {
        showMenu();
    }

    openEditor = (event) => {
        this.store.dispatch(editRecord(event));
        show('editor');
    }

    render() {
        return (
            <div className="Main js-Main">
                <header className="main-header">
                    <span 
                        className="icon-menu main-header__icon"
                        onClick={this.showMenu}
                    ></span>
                    <Route exact={true} path="/" render={() => (
                        <h1 className="main-header__title">
                            Current members
                        </h1>
                    )}/>
                    <Route exact={true} path="/honorary" render={() => (
                        <h1 className="main-header__title">
                            Honorary members
                        </h1>
                    )}/>
                    <Route exact={true} path="/alumni" render={() => (
                        <h1 className="main-header__title">
                            Alumni members
                        </h1>
                    )}/>
                    <Route exact={true} path="/all" render={() => (
                        <h1 className="main-header__title">
                            All members
                        </h1>
                    )}/>
                </header>
                <div className="main-content">
                    <div className="main-table-container">
                        <div>
                            <table className="main-table">
                                <thead>
                                    <tr className="main-table__header">
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Card number</th>
                                        <th>ID number</th>
                                        <th>Email </th>
                                        <th>Phone number (home)</th>
                                        <th>Phone number (mobile)</th>
                                        <th>Major</th>
                                        <th>Address</th>
                                        <th>Sex</th>
                                        <th>Date of birth</th>
                                        <th>Type of blood</th>
                                        <th>Allergies</th>
                                        <th>Diseases</th>
                                        <th>Emergency contact 1</th>
                                        <th>Emergency contact 2</th>
                                        <th>Enrollment date</th>
                                    </tr>
                                </thead>
                                <Route exact={true} path="/" render={() => (
                                    <tbody>
                                    {this.props.store.getState().memberCollections.current.map(
                                        (member) => returnRow(member, this)
                                    )}
                                    </tbody>
                                )}/>
                                <Route path="/honorary" render={() => (
                                    <tbody>
                                    {this.props.store.getState().memberCollections.honorary.map(
                                        (member) => returnRow(member, this)
                                    )}
                                    </tbody>
                                )}/>
                                <Route path="/alumni" render={() => (
                                    <tbody>
                                    {this.props.store.getState().memberCollections.alumni.map(
                                        (member) => returnRow(member, this)
                                    )}
                                    </tbody>
                                )}/>
                                <Route path="/all" render={() => (
                                    <tbody>
                                    {this.props.store.getState().memberCollections.current.map(
                                        (member) => returnRow(member, this)
                                    )}
                                    {this.props.store.getState().memberCollections.honorary.map(
                                        (member) => returnRow(member, this)
                                    )}
                                    {this.props.store.getState().memberCollections.alumni.map(
                                        (member) => returnRow(member, this)
                                    )}
                                    </tbody>
                                )}/>
                            </table>
                        </div>
                    </div>
                </div>
                <Editor store={this.props.store} />
            </div>
        );        
    }

}
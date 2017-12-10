import React, { Component } from 'react';
import './main.component.css';

import Editor from '../editor/editor.component';

import { showMenu } from '../../services/menu.service';
import { show } from '../../services/modals.service';

import { editRecord } from '../../actions';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
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
                    <h1 className="main-header__title">
                        {this.store.getState().global.currentTable}
                    </h1>
                </header>
                <div className="main-content">
                    <div className="main-table-container">
                        <div>
                            <table className="main-table">
                                <thead>
                                    <tr className="main-table__header">
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Carnet</th>
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
                                <tbody>
                                    <tr className="main-table__row">
                                        <td className="edit-trigger" onClick={this.openEditor}>Pedro Pablo Pérez González</td>
                                        <td>Active</td>
                                        <td>12-99999</td>
                                        <td>22222222</td>
                                        <td>pedropabloperezgonzalez@gmail.com</td>
                                        <td>+58 212 123 4567</td>
                                        <td>+58 424 123 4567</td>
                                        <td>Electrical Engineering</td>
                                        <td>Avenida Pedro Pablo Pérez, Edif. Mi Casa, Piso 7, Apto. 7-A. El Cafetal, Caracas.</td>
                                        <td>M</td>
                                        <td>1/1/1995</td>
                                        <td>O+</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                        <td>Pedro Pérez Martínez, padre, +58 424 123 4567</td>
                                        <td>María González Hernández, madre, +58 424 123 4567</td>
                                        <td>--/1/2014</td>
                                    </tr>
                                    <tr className="main-table__row">
                                        <td className="edit-trigger" onClick={this.openEditor}>María Fernanda Pérez González</td>
                                        <td>Active</td>
                                        <td>14-99999</td>
                                        <td>22222222</td>
                                        <td>mariafernandaperezgonzalez@gmail.com</td>
                                        <td>+58 212 123 4567</td>
                                        <td>+58 424 123 4567</td>
                                        <td>Chemical Engineering</td>
                                        <td>Avenida Pedro Pablo Pérez, Edif. Mi Casa, Piso 7, Apto. 7-A. El Cafetal, Caracas.</td>
                                        <td>F</td>
                                        <td>1/1/1997</td>
                                        <td>O+</td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                        <td>Pedro Pérez Martínez, padre, +58 424 123 4567</td>
                                        <td>María González Hernández, madre, +58 424 123 4567</td>
                                        <td>--/1/2014</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Editor store={this.props.store} />
            </div>
        );
    }

}
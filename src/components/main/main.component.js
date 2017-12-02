import React, { Component } from 'react';
import './main.component.css';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTable: 'Current members'
        }
    }

    render() {
        return (
            <div className="Main">
                <header className="main-header">
                    <span className="icon-menu main-header__icon"></span>
                    <h1 className="main-header__title">{this.state.currentTable}</h1>
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
                                        <th>Has been active?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="main-table__row">
                                        <td className="edit-trigger">Pedro Pablo Pérez González</td>
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
                                        <td>January 2014</td>
                                        <td>Y</td>
                                    </tr>
                                    <tr className="main-table__row">
                                        <td className="edit-trigger">María Fernanda Pérez González</td>
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
                                        <td>January 2014</td>
                                        <td>Y</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                {/*
                    <table className="main-table">
                        <tr className="main-table__header">
                            <td>Name</td>
                            <td>Status</td>
                            <td>Carnet</td>
                            <td>ID number</td>
                            <td>Email </td>
                            <td>Phone number (home)</td>
                            <td>Phone number (mobile)</td>
                            <td>Major</td>
                            <td>Address</td>
                            <td>Sex</td>
                            <td>Date of birth</td>
                            <td>Type of blood</td>
                            <td>Allergies</td>
                            <td>Diseases</td>
                            <td>Emergency contact 1</td>
                            <td>Emergency contact 2</td>
                            <td>Enrollment date</td>
                            <td>Has been active?</td>
                        </tr>
                        <tr className="main-table__row">
                            <td>Pedro Pablo Pérez González</td>
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
                            <td>January 2014</td>
                            <td>Y</td>
                        </tr>
                        <tr className="main-table__row">
                            <td>María Fernanda Pérez González</td>
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
                            <td>January 2014</td>
                            <td>Y</td>
                        </tr>
                    </table>
                */}
                </div>
            </div>
        );
    }

}